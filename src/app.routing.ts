import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./app/components/login.components"
import { RegisterComponent } from "./app/components/register.components";

const appRoutes: Routes = [
    {path: '', component: LoginComponent },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: '**', component: LoginComponent }
];


export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
