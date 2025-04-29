import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../model/employee';
import { EmployeeService } from '../../service/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee(0, "", "", "", new Date(), new Date());

  constructor(private route: ActivatedRoute,private employeeService: EmployeeService,private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.employeeService.getEmployeeById(id).subscribe((emp: Employee) => {
      this.employee = emp;
    });
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
      alert("Employee updated successfully");
      this.router.navigate(['dashboard/view-employees']);
    });
  }

}
