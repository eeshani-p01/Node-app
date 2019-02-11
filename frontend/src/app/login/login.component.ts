import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    loginData = {
        email: '',
        password: ''
    }
    constructor(private authService: AuthService) { }

    ngOnInit() {

    }

    login() {
        this.authService.login(this.loginData);
    }
}
