import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorRoutingModule } from './tutor-routing.module';
import {MenuComponent} from '../menu/menu.component';
import {BecomeTutorComponent} from './become-tutor/become-tutor.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TutorRoutingModule,
    MenuComponent,
    BecomeTutorComponent
  ],
  exports:[BecomeTutorComponent]
})
export class TutorModule { }
