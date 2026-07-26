import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Credits } from './credits/credits';
import { Mission } from './mission/mission';
import{ Dashboard } from './dashboard/dashboard';
import {ErrorPage} from './error-page/error-page';

export const routes: Routes = [
    {component: Home, path: "", pathMatch: "full"},
    {component: Credits, path: "credits"},
    {component: Home, path: "home"},
    {component: Mission, path: "mission"},
    {component: Dashboard, path: "dashboard"},
    {component: ErrorPage, path: "error"},
    {component: ErrorPage, path: "**"}

];
