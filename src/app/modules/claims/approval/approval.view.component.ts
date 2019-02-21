/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Inject, Injector } from '@angular/core';
import { SelectionEvent } from '@progress/kendo-angular-grid';
import { ApprovalViewBaseComponent } from '@src/app/modules/claims/approval/approval.view.base.component';

export class ApprovalViewComponent extends ApprovalViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }

    // Fired when component is initialized and input properties are set
    public onInit(): void {
        //console.log("onInit");

        let script = document.createElement("SCRIPT");
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
        script.type = 'text/javascript';
        script.onload = function() {
            var $ = window.jQuery;
            setTimeout(function() { 

                // load jqueryui
                $.getScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', function() {});
                $('head').append('<link rel="stylesheet" type="text/css" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">');

                $('table').find('thead').each(function(){
                    $(this).find('th').eq(6).after("<th>Recommendation</th>");
                });

                $('.k-grid-table').find('tr').each(function(){
                    $(this).find('td').eq(6).after("<td><button type='button' class='btn-rec k-button'>Recommendation</button></td>");
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

            }, 1500);
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    // Fired when component's views and child views are initialized
    public onShow(): void {}
    // Fired just before Angular destroys the component. Unsubscribe Observables and detach event handlers to avoid memory leaks
    public onHide(): void {}
    public onRowSelect(e: SelectionEvent): void {}
}
