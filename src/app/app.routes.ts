import { Routes } from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/main/home.component';
import {BecomeTutorComponent} from './home/tutor/become-tutor/become-tutor.component';
import {FaqComponent} from './home/faq/faq/faq.component';
import {ContactComponent} from './home/contact/contact.component';
import {OfferComponent} from './home/offer/offer.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Strona główna
  { path: 'logowanie', component: LoginComponent }, // Strona logowania
  { path: 'rejestracja', component: RegisterComponent }, // Strona rejestracji
  { path: 'zostan-korepetytorem', component: BecomeTutorComponent }, // Nowa ścieżka
  { path: 'kontakt', component: ContactComponent }, // Nowa ścieżka
  { path: 'faq',component: FaqComponent},
  { path: 'oferta',component: OfferComponent},
];

