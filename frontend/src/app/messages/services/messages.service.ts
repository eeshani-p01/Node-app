import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService{

    BASE_URL = 'http://localhost:1234/api';
    
    constructor(private httpClient: HttpClient) {
        
    }

    getMessages(): Observable<any>{
        return this.httpClient.get(`${this.BASE_URL}/messages`);
    }

    postMessages(message): Observable<any>{
        return this.httpClient.post(`${this.BASE_URL}/messages`, message,  { responseType:'text'});
    }

}