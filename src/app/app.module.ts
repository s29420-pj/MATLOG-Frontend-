import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {routes} from './app.routes';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // Główny komponent aplikacji
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),    AppComponent, FormsModule,HttpClientModule,
  ],
  providers: [],
})
export class AppModule {}
