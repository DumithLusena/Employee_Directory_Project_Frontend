import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewEmployeeComponent } from './pages/view-employee/view-employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';

export const routes: Routes = [
    {
        path:"",
        component:DashboardComponent
    },
    {
        path:"dashboard",
        component:DashboardComponent,
        children:[
            {
                path:"view-employees",
                component:ViewEmployeeComponent
            },
            {
                path:"add-employee",
                component:AddEmployeeComponent
            }
        ]
    }
];
