import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorRoutingModule } from './tutor-routing.module';
import {MenuComponent} from '../menu/menu.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TutorRoutingModule,
    MenuComponent
  ]
})
export class TutorModule { }
