import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Dashboard } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: Dashboard },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
