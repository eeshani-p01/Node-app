import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService{
    constructor(private httpClient: HttpClient) {

    }

    getMessages(): Observable<any>{
        return this.httpClient.get('http://localhost:1234/api/messages');
    }
}