import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewEmployeeComponent } from './pages/view-employee/view-employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateEmployeeComponent } from './pages/view-employee/update-employee/update-employee.component';

export const routes: Routes = [
    {
        path:"",
        component:LoginComponent
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
    },
    {
        path:"update-employee/:id",
        component:UpdateEmployeeComponent
    }
];
