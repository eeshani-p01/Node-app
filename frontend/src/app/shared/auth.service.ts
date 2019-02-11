import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService{
    
    BASE_URL = 'http://localhost:1234/auth';
    constructor(private httpClient: HttpClient){}

    register(user){
        this.httpClient.post(`${this.BASE_URL}/register`, user).subscribe();
    }

}