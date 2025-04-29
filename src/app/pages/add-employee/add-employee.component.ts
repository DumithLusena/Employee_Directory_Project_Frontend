import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  employeeForm: FormGroup;
  searchId: number = 0;
  searchedEmployee: any = null;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required]
    });
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe(res => {
        alert('Employee added successfully!');
        this.employeeForm.reset();
      });
    }
  }

  searchById() {
    if (this.searchId > 0) {
      this.employeeService.getEmployeeById(this.searchId).subscribe(res => {
        this.searchedEmployee = res;
      }, err => {
        this.searchedEmployee = null;
        alert('Employee not found');
      });
    }
  }

}
