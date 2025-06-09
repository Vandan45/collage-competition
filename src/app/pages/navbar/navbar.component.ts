import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDarkMode : boolean = false;

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
}
