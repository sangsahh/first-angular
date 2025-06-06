import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import {LoginModel} from'./login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private bassUrl = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient){}

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.bassUrl}/login`, {
      email: email,
      password: password
    });
  }

  saveToken(token: string){
    sessionStorage.setItem('jwt', token);
  }

  
}
