import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import {UserDashboardComponent} from './user-dashboard.component';
import {LessonsComponent} from './lessons/lessons.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./user-dashboard.component').then(m => m.UserDashboardComponent),
    children: [
      { path: 'lekcje', component: LessonsComponent }, // Przekierowanie domyślne
      { path: 'ustawienia', component: SettingsComponent }, // Ścieżka /dashboard/ustawienia
      { path: 'lekcje', component: LessonsComponent }, // Ścieżka /dashboard/lekcje
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
