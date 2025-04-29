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

  addEmployee(employeeDTO:any){
    return this.http.post(`${BASIC_URL}/add-employee`, employeeDTO);
  }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${BASIC_URL}/get-all-employee`);
  }

  updateEmployee(id:number, employeeDTO:any):Observable<any>{
    return this.http.put(`${BASIC_URL}/update/${id}`, employeeDTO);
  }

  deleteEmployee(id:number){
    return this.http.delete(`${BASIC_URL}/delete/${id}`, { responseType: 'text' as 'json' });
  }

  getEmployeeById(id:number){
    return this.http.get(`${BASIC_URL}/get/${id}`);
  }
}
