import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import {UserDashboardComponent} from './user-dashboard.component';
import {LessonsComponent} from './lessons/lessons.component';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {BecomeTutorComponent} from '../home/tutor/become-tutor/become-tutor.component';
import {LessonHistoryComponent} from './lesson-history/lesson-history.component';

const routes: Routes = [
  {path: 'zostan-korepetytorem', component: BecomeTutorComponent},
  { path: '', component: UserDashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'ustawienia', component: SettingsComponent },
      { path: 'lekcje', component: LessonsComponent },
      { path: 'historia', component: LessonHistoryComponent },
]
},
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class UserDashboardModule {}
