import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FaqRoutingModule
  ],
  exports: [
    FaqComponent
]})
export class FaqModule { }
