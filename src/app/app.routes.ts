import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'calculator',
    loadComponent:()=> import('@/calculator/views/calcutator-view/calcutator-view.component')
  }
];
