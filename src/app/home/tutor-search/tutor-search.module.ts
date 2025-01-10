import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorSearchComponent } from './tutor-search.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    TutorSearchComponent,
    HttpClientModule,
    // Dla ngModel
  ],
  exports: [TutorSearchComponent], // Udostępniaj komponent innym modułom
})
export class TutorSearchModule {}
