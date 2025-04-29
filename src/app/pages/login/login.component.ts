import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email:string = "";
  password:string = "";
  confirm_password:string = "";

  constructor(private router:Router){}
  
  login() {
    if (!this.email || !this.password || !this.confirm_password) {
      alert("All fields are required!");
      return;
    }
    
    if (this.password !== this.confirm_password) {
      alert("Password and Confirm Password do not match!");
      return;
    }
  
    if (this.email === "admin@gmail.com" && this.password === "admin") {
      this.router.navigate(["/dashboard"]);
    } else {
      alert("Invalid email or password");
    }
  }

}
