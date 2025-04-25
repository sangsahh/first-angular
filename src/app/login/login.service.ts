import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import {LoginModel} from'./login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private loginUrl = 'json/login.json';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<LoginModel[]> {
    return this.http.get<LoginModel[]>(this.loginUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      errorMessage = `error ${error.error.message}`;
    }else{
      errorMessage = `return code: ${error.status}, message:${error.message}`
    }
    return throwError(() => new Error(errorMessage));
  };
}
