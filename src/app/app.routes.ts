import { Routes } from '@angular/router';
import { PublicLayout } from './core/layout/public-layout/public-layout';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/catalog/product-list/product-list').then((m) => m.ProductList),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('./features/catalog/product-details/product-details').then(
            (m) => m.ProductDetails,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
