import { Component, OnInit } from '@angular/core';
import {sharedImports} from '../shared/shared-import';
import { LoginServiceService } from './login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { LoginModel } from './login-model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, sharedImports],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginServiceService]
})
export class LoginComponent {
  title:string  = '(주)KSG';
  id: string = '';
  pw: string = '';
  loginFailed: boolean =false;

  constructor(private http: HttpClient){
  }

  onLogin() {
    this.http.get<LoginModel[]>('json/login.json').subscribe(users => {
      const user = users.find(u => u.id === this.id && u.pw === this.pw);
      if(user){
        this.loginFailed = false;
        alert('로그인 성공!');
      }else{
        this.loginFailed = true;
        alert('틀려요');
      }
    })
  }


}

