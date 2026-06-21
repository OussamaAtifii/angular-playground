import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signal-forms',
    pathMatch: 'full',
  },
  {
    path: 'http-resource',
    loadComponent: () => import('./features/products/products').then((m) => m.Products),
  },
  {
    path: 'signal-forms',
    loadComponent: () => import('./features/users/users').then((m) => m.Users),
  },
];
