import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), // Strona główna
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./user-dashboard/user-dashboard.module').then((m) => m.UserDashboardModule), // Dashboard użytkownika
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule), // Moduł autoryzacji
  },
  {
    path: 'znajdz-korepetytora',
    loadComponent: () =>
      import('./find-tutor/find-tutor.component').then((m) => m.FindTutorComponent), // Wyszukiwarka korepetytorów
  },
  {
    path: 'user-profile',
    loadComponent: () =>
      import('./user-profile/user-profile.component').then((m) => m.UserProfileComponent), // Profil użytkownika
  },
  {
    path: 'edit-profile/:id',
    loadComponent: () =>
      import('./edit-profile/edit-profile.component').then((m) => m.EditProfileComponent),
  },

];
