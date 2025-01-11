import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    // Główny komponent aplikacji
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule, // Upewnij się, że jest tutaj!
    FormsModule,
  ],
  providers: [],
})
export class AppModule {}
