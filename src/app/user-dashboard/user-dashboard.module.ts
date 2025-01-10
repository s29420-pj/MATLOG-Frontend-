import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import {UserDashboardComponent} from './user-dashboard.component';
import {LessonsComponent} from './lessons/lessons.component';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent }, // Domyślny widok dla /dashboard
      { path: 'ustawienia', component: SettingsComponent }, // Dodatkowy widok dla /dashboard/settings
    ],
  },
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class UserDashboardModule {}
