import { Component, OnInit } from '@angular/core';
import {sharedImports} from '../shared/shared-import';
import { LoginServiceService } from './login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { LoginModel } from './login-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, sharedImports],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginServiceService]
})
export class LoginComponent {
  title:string  = 'KSG';
  id: string = '';
  pw: string = '';
  loginFailed: boolean =false;

  constructor(private http: HttpClient, private router: Router){
  }

  onLogin() {
    this.http.get<LoginModel[]>('json/login.json').subscribe(users => {
      const user = users.find(u => u.id === this.id && u.pw === this.pw);
      if(user){
        this.loginFailed = false;
        alert('ログイン成功');
      }else{
        this.loginFailed = true;
        alert('違う');
      }
    })
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

}

