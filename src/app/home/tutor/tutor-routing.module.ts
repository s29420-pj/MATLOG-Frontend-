import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomeTutorComponent } from './become-tutor/become-tutor.component';


const routes: Routes = [
  { path: 'zostan-korepetytorem', component: BecomeTutorComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
