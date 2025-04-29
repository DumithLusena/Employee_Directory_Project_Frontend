import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee/employee.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../model/employee';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent{

  employeeList:Employee[] = [];
  newEmployee:Employee = new Employee(0,"", "", "", new Date(), new Date());

  constructor(private employeeService: EmployeeService,private http:HttpClient,private router:Router) {
    this.loadEmployeesToTable();
  }

  loadEmployeesToTable() {
    this.employeeService.getAllEmployees().subscribe((employeeList:Employee[]) => {
      this.employeeList = employeeList;
    })
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.loadEmployeesToTable();
      });
    }
  }

  navigateToUpdate(employee: Employee) {
    this.router.navigate(['/update-employee', employee.id]);
  }
   
}
