import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDarkMode : boolean = false;
  userService = inject(UserService);
  router = inject(Router);

  ngOnInit(){
    //load save preferences on init
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.updateTheme();
  }

  toggleDarkMode():void {
    this.isDarkMode = !this.isDarkMode;
    
    //save preferences
    const theme = this.isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }

  private updateTheme():void {
    if(this.isDarkMode){
      document.body.classList.add('dark-mode');
    }else{
      document.body.classList.remove('dark-mode');
    }
  }

  onLogOff(){
    localStorage.removeItem("studentId");
    this.router.navigateByUrl("/home");
  }
}
