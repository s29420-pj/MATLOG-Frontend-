import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Główny komponent aplikacji
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }]),
    AppComponent,
  ],
  providers: [],
})
export class AppModule {}
