import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';

@Injectable()
export class MessagesService{

    BASE_URL = 'http://localhost:1234/api';
    
    constructor(private httpClient: HttpClient, private toastr: MatSnackBar) {
        
    }

    getMessages(user? : string): Observable<any>{
        user = (user) ? user :' ';
        return this.httpClient.get(`${this.BASE_URL}/messages/${user}`)
        .pipe(catchError((err) => this.handleError(err, "Unable to get messages")));
    }

    postMessages(message): Observable<any>{
        return this.httpClient.post(`${this.BASE_URL}/messages`, message,  { responseType:'text'})
        .pipe(catchError((err) => this.handleError(err, "Unable to post messages")));
    }

    private handleError = (error: any, errorMessage: string) => {
        this.toastr.open(errorMessage, 'Close', { duration: 3000 });
        return throwError(error.error);
    }
}