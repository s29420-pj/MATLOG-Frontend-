import { Routes } from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BecomeTutorComponent} from './tutor/become-tutor/become-tutor.component';
import {FaqComponent} from './faq/faq/faq.component';
import {ContactComponent} from './contact/contact.component';
import {OfferComponent} from './offer/offer.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Strona główna
  { path: 'logowanie', component: LoginComponent }, // Strona logowania
  { path: 'rejestracja', component: RegisterComponent }, // Strona rejestracji
  { path: 'zostan-korepetytorem', component: BecomeTutorComponent }, // Nowa ścieżka
  { path: 'kontakt', component: ContactComponent }, // Nowa ścieżka
  { path: 'faq',component: FaqComponent},
  { path: 'oferta',component: OfferComponent},
];

