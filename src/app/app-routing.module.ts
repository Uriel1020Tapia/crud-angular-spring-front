import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesGuard } from './guards/employees.guard';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [

  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@modules/user/user.module').then( (m) => m.UserModule)
      }
    ]
  },
  
  {path: 'login', component: LoginComponent},
  {path:'employees',component:EmployeeListComponent, canActivate:[EmployeesGuard]},
  {path:'create-employee',component:CreateEmployeeComponent, canActivate:[EmployeesGuard]},
  {path:'update-employee/:id',component:UpdateEmployeeComponent, canActivate:[EmployeesGuard]},
  {path:'detail-employee',component:EmployeeListComponent, canActivate:[EmployeesGuard]},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
