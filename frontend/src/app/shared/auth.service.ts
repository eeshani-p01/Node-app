import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
    
    BASE_URL = 'http://localhost:1234/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';

    constructor(private httpClient: HttpClient,
        private router: Router){}

    get name(){
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    register(user){
        delete user.confirmPassword;
        this.httpClient.post(`${this.BASE_URL}/register`, user).subscribe((res: any) => {
            if(!res.token)
                return;
            
            localStorage.setItem(this.TOKEN_KEY, res.token.toString());
            localStorage.setItem(this.NAME_KEY, res.firstName.toString());
            this.router.navigate(['/']);
        });
    }

    logout(){
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
    }

}