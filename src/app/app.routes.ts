import { Routes } from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {AppComponent} from './app.component';


export const  routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } , //  przekierowuje na login
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }, //  przekierowuje na register
  { path: '', component: AppComponent },
  { path: '', redirectTo: '/glowna', pathMatch: 'full' } //  przekierowuje na register
];
