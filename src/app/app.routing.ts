import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


export const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent, children: [
            { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
            { path: '', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
            { path: '', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) }
            
        ]
    },
    { path: '**', component: NotFoundComponent }
];