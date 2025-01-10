import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorRoutingModule } from './tutor-routing.module';
import {MainMenuComponent} from '../main-menu/main-menu.component';
import {BecomeTutorComponent} from './become-tutor/become-tutor.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TutorRoutingModule,
    MainMenuComponent,
    BecomeTutorComponent
  ],
  exports:[BecomeTutorComponent]
})
export class TutorModule { }
