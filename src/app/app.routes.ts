import { Routes } from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BecomeTutorComponent} from './tutor/become-tutor/become-tutor.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Strona główna
  { path: 'login', component: LoginComponent }, // Strona logowania
  { path: 'rejestracja', component: RegisterComponent }, // Strona rejestracji
  { path: 'zostan-korepetytorem', component: BecomeTutorComponent }, // Nowa ścieżka
  { path: '**', redirectTo: '' }, // Przekierowanie dla nieznanych ścieżek na stronę główną
];

