import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import { NazwaKomponentuComponent } from './nazwa-komponentu/nazwa-komponentu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    // Główny komponent aplikacji
  
    NazwaKomponentuComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
})
export class AppModule {}
