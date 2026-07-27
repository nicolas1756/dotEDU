import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Credits } from './credits/credits';
import { Mission } from './mission/mission';
import{ Dashboard } from './dashboard/dashboard';
import { DashboardHome } from './dashboard-home/dashboard-home';
import { DashboardTasks } from './dashboard-tasks/dashboard-tasks';
import {ErrorPage} from './error-page/error-page';

export const routes: Routes = [
    {component: Home, path: "", pathMatch: "full"},
    {component: Credits, path: "credits"},
    {component: Home, path: "home"},
    {component: Mission, path: "mission"},
    
    {
    component: Dashboard, 
    path: "dashboard",
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, 
      { path: 'home', component: DashboardHome },
      { path: 'tasks', component: DashboardTasks },
    ]
    },


    {component: ErrorPage, path: "error"},
    {component: ErrorPage, path: "**"}

];
