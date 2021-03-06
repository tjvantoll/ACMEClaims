//-------------------------------------------------------------------------
// Write your custom logic for ApprovalViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { SelectionEvent } from '@progress/kendo-angular-grid';
import { ApprovalViewBaseComponent } from '@src/app/modules/claims/approval/approval.base.component';

export class ApprovalViewComponent extends ApprovalViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }

    // Fired when component is initialized and input properties are set
    public onInit(): void {
        //console.log("onInit");

        let script: any;
        script = document.createElement("SCRIPT");
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
        script.type = 'text/javascript';
        script.onload = function() {
            var $ = window.jQuery;

            var checkGrid = setInterval(function() {
                if ($(".k-grid-table tr").length > 2) {

                    // load jqueryui
                    $.getScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', function() {});
                    $('head').append('<link rel="stylesheet" type="text/css" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">');

                    $('table').find('thead').each(function(){
                        $(this).find('th').eq(5).after("<th>Recommendation</th>");
                    });

                    $('.k-grid-table').find('tr').each(function(){
                        $(this).find('td').eq(5).after("<td><button type='button' class='btn-rec k-button'>Recommendation</button></td>");
                    });

                    $('.btn-rec').click(function(){
                        $("#modal").dialog({
                            modal: true,
                            width: 600,
                            height: 400,
                            buttons: {
                                Ok: function() {
                                    $(this).dialog("close");
                                }
                            }
                        });
                        $('.modal-loading').show();
                        $('.modal-content').hide();

                        setTimeout(function() {
                            $('.modal-loading').hide();
                            $('.modal-content').show();
                        }, 3500);
                    });

                    $("body").append(
                        "<div id='modal'>" +
                            "<div class='modal-loading'><center><p style='font-family:Helvetica;font-size:22px;font-weight:bold;padding:20px'>Accessing claim recommendation from Progress...</p><br /><img src='https://i.imgur.com/9bhkQ6d.gif' /></center></div>" +
                            "<div class='modal-content' style='border:0'>" +
                                "<table>" +
                                    "<tr>" +
                                        "<th colspan='2' style='font-family:Helvetica;font-weight:bold;font-size:22px;padding:10px'>Progress Claim Recommendation</th>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td style='font-family:Helvetica;font-size:18px;padding:10px'>Named Insured Insurance Score:</td>" +
                                        "<td style='font-family:Helvetica;font-size:18px;padding:10px;font-weight:bold'>89/100</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td style='font-family:Helvetica;font-size:18px;padding:10px'>Recommendation:</td>" +
                                        "<td style='font-family:Helvetica;font-size:18px;padding:10px;font-weight:bold;color:#2f7f16'>APPROVE</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td style='font-family:Helvetica;font-size:18px;padding:10px'>Certainty Metrics:<br /><br />" +
                                        "<div style='margin-left:30px;height:15px;width:15px;background-color:#2f7f16;display:inline-block'></div><div style='display:inline-block'> &nbsp;= 45% Approval Guidance</div><br />" +
                                        "<div style='margin-left:30px;height:15px;width:15px;background-color:#f8fee1;display:inline-block'></div><div style='display:inline-block'> &nbsp;= 50% Neutral Guidance</div><br />" +
                                        "<div style='margin-left:30px;height:15px;width:15px;background-color:#ee001b;display:inline-block'></div><div style='display:inline-block'> &nbsp;= 5% Denial Guidance</div>" +
                                    "</td><td><img src='https://i.imgur.com/GI1hJQq.gif' /></td></tr>" +
                                "</table>" +
                            "</div>" +
                        "</div>");

                    // hack to re-create the recommendation cell when these 3 buttons are clicked
                    $(document).on('click', '.k-grid-edit-command, .k-grid-save-command, .k-grid-cancel-command', function() {
                        let rowIndex = $(this).closest('tr').attr("ng-reflect-logical-row-index") - 1;
                        $('.k-grid-table').find('tr').eq(rowIndex).find('td').eq(5)
                            .after("<td><button type='button' class='btn-rec k-button'>Recommendation</button></td>");
                    });

                    clearInterval(checkGrid);
                }
            }, 10);
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    // Fired when component's views and child views are initialized
    public onShow(): void {
    }
    // Fired just before Angular destroys the component. Unsubscribe Observables and detach event handlers to avoid memory leaks
    public onHide(): void {
    }
    public onRowSelect(e: SelectionEvent): void {
    }
}
