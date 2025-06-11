import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  userService = inject(UserService);
  router = inject(Router);

  onLogin(){
    // debugger;
    const formValue = this.loginForm.value;
    this.userService.onUserLogin(formValue).subscribe({
      next:(res:any)=>{
        // debugger;
        localStorage.setItem("studentId", res.userId);
        alert("User Logged IN");
        this.userService.loggedUserId = res.userId;
        this.router.navigateByUrl("/home");
      },
      error:()=>{
        alert("Wrong Credantials");
      }
    })
  }
}
