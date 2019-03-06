///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { alert, prompt } from 'tns-core-modules/ui/dialogs/dialogs';
import { isAndroid } from 'tns-core-modules/platform';

import { NavigationService } from '@src/app/core/services/navigation.service';
import { AuthenticationService } from '@src/app/core/auth/authentication.service';

@Component({
    templateUrl: './login.view.component.html',
    styleUrls: ['./login.view.component.css']
})
export class LoginViewBaseComponent {
    isLoading: boolean;
    user: any;
    @ViewChild('username')
    username: ElementRef;
    @ViewChild('password')
    password: ElementRef;

    navigationService: NavigationService;
    authenticationService: AuthenticationService;

    constructor(protected $injector: Injector) {
        this.navigationService = $injector.get(NavigationService);
        this.authenticationService = $injector.get(AuthenticationService);

        this.isLoading = false;
        this.user = {
            username: '',
            password: ''
        };
    }

    login() {
        this.isLoading = true;
        this.authenticationService.signIn(this.user).subscribe(
            () => {
                this.isLoading = false;
                this.navigationService.goToRoot(isAndroid ? { animated: false, transition: {} } : {});
            },
            err => {
                this.isLoading = false;
                this.alert(`An error occurred: ${err}`);
            }
        );
    }

    submit() {
        if (!this.user.username || !this.user.password) {
            this.alert('Please provide both username and password.');
            return;
        }

        this.login();
    }

    navigateToRegister() {
        this.navigationService.navigate(['application', 'register']);
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
