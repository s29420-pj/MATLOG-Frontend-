import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {ContactComponent} from './contact/contact.component';
import {BecomeTutorComponent} from './tutor/become-tutor/become-tutor.component';
import {OfferComponent} from './offer/offer.component';
import {FaqComponent} from './faq/faq/faq.component';
import {RegisterComponent} from '../auth/register/register.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from '../auth/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kontakt', component: ContactComponent},
  { path: 'zostan-korepetytorem', component: BecomeTutorComponent},
  { path: 'oferta', component: OfferComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'auth/rejestracja', component: RegisterComponent},
  { path: 'auth/login', component: LoginComponent},

];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MainMenuComponent,
    FormsModule,
    HomeComponent,
  ]
})
export class HomeModule { }
