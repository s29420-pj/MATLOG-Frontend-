import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LessonHistoryComponent } from './lesson-history/lesson-history.component';

@NgModule({
  declarations: [
    // Główny komponent aplikacji
  
    LessonHistoryComponent
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
