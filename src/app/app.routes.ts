import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MembershipComponent } from './membership/membership.component';

export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'signup', component:MembershipComponent},
    {path: '' , redirectTo: 'login', pathMatch: 'full'},
    {path: '**', redirectTo: ''}
];
