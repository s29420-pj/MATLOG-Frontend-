import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule), // Strona główna
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), // Lazy loading dla AuthModule
  },

];
