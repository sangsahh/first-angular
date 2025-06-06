import { Component, OnInit } from '@angular/core';
import {sharedImports} from '../shared/shared-import';
import { LoginService } from './login.service';
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
  providers: [LoginService]
})
export class LoginComponent {
  title:string  = 'KSG';
  id: string = '';
  pw: string = '';
  loginFailed: boolean =false;
  
  constructor(private LoginService: LoginService, private router: Router){

  }

  onLogin(): void {
    this.LoginService.login(this.id, this.pw).subscribe({
      next: (res) => {
        this.LoginService.saveToken(res.token);
        this.loginFailed = false;
        this.router.navigate(['/main']);
      },

      error: () => {
        this.loginFailed = true;
      }
    })
  }

  goToSignup(): void{
    this.router.navigate(["/signup"]);
  }


 
}

