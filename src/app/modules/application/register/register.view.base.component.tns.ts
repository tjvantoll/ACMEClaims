///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { alert, prompt } from 'tns-core-modules/ui/dialogs/dialogs';

import { NavigationService } from '@src/app/core/services/navigation.service';
import { AuthenticationService } from '@src/app/core/auth/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: './register.view.component.html',
    styleUrls: ['./register.view.component.css']
})
export class RegisterViewBaseComponent {
    user: any;
    activatedRoute: ActivatedRoute;
    navigationService: NavigationService;
    authenticationService: AuthenticationService;
    @ViewChild('username')
    username: ElementRef;
    @ViewChild('password')
    password: ElementRef;
    @ViewChild('confirmPassword')
    confirmPassword: ElementRef;

    constructor(protected $injector: Injector) {
        this.activatedRoute = $injector.get(ActivatedRoute);
        this.navigationService = $injector.get(NavigationService);
        this.authenticationService = $injector.get(AuthenticationService);
        this.user = {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        };
    }

    submit() {
        if (!this.user.username || !this.user.password || !this.user.email) {
            this.alert('Please provide username, password and email.');
            return;
        }

        this.register();
    }

    backToLogin() {
        this.navigationService.goBack(this.activatedRoute);
    }

    register() {
        if (this.user.password !== this.user.confirmPassword) {
            this.alert('Your passwords do not match.');
            return;
        }

        this.authenticationService.signUp(this.user).subscribe(
            () => {
                this.navigationService.goToRoot();
            },
            () => {
                this.alert('An error occurred.');
            }
        );
    }

    focusUsername() {
        this.username.nativeElement.focus();
    }

    focusConfirmPassword() {
        this.confirmPassword.nativeElement.focus();
    }

    forgotPassword() {
        prompt({
            title: 'Forgot Password',
            message: 'Enter the email address you used to register to reset your password.',
            inputType: 'email',
            defaultText: '',
            okButtonText: 'Ok',
            cancelButtonText: 'Cancel'
        }).then(data => {
            if (data.result) {
                this.authenticationService.resetPassword(data.text.trim()).subscribe(
                    () => {
                        this.alert(
                            'Your password was successfully reset. Please check your email for instructions on choosing a new password.'
                        );
                    },
                    () => {
                        this.alert('Unfortunately, an error occurred resetting your password.');
                    }
                );
            }
        });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    private alert(message: string) {
        return alert({
            title: '',
            okButtonText: 'OK',
            message: message
        });
    }
}
