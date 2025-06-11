import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

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

  onRegister(){
    debugger;
    this.http.post(this.url+ "register", this.registerObj).subscribe((res)=>{
      debugger;
      alert("User registerd successfully");
      this.registerObj = "";
    })
  }
}
