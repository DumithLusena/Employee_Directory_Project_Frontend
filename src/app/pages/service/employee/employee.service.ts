import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../../model/employee';

const BASIC_URL = "http://localhost:8080/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${BASIC_URL}/add-employee`, employee);
  }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${BASIC_URL}/get-all-employee`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${BASIC_URL}/update/${id}`, employee);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${BASIC_URL}/delete/${id}`);
  }
  
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${BASIC_URL}/get/${id}`);
  }
}
