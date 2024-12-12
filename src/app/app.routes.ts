import { Routes } from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Strona główna
  { path: 'login', component: LoginComponent }, // Strona logowania
  { path: 'register', component: RegisterComponent }, // Strona rejestracji
  { path: '**', redirectTo: '' }, // Przekierowanie dla nieznanych ścieżek na stronę główną
];

