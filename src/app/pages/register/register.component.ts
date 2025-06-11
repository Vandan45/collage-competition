import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerObj: any = {
    "fullName": "",
    "email": "",
    "password": "",
    "collegeName": "",
    "role": ""
  }

  url:string = environment.apiUrl;

  http = inject(HttpClient);

  constructor(
    private router : Router,
  ){}
  onRegister(){
    this.http.post(this.url+ "register", this.registerObj).subscribe((res)=>{
      alert("User registerd successfully");
      this.registerObj = "";
      this.router.navigateByUrl('/login');
    })
  }
}
