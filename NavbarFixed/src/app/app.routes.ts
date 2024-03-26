import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { P1Component } from './p1/p1.component';
import { ProductComponent } from './product/product.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'product',
        loadComponent: () => import('./product/product.component').then((c) => c.ProductComponent),
        children: [
            {
                path: 'product1',
                // loadChildren: () => import('./p1/p1.module').then((c) => c.P1Module)
                loadComponent: () => import('./p1/p1.component').then((c) => c.P1Component),
                children: [
                    {
                    path: ':id',
                    loadComponent: () => import('./details/details.component').then((c) => c.DetailsComponent),
                }

                ]

            },
        ]
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then((c) => c.AboutComponent)
    },

];