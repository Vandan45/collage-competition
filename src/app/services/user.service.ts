import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:string = environment.apiUrl;
  loggedUserId: string = "";
  loggedUserData:any = undefined;

  constructor(private http: HttpClient) { 
    const loggedData = localStorage.getItem("studentId");
    const loggedUserData = localStorage.getItem("loggedUser");
    if(loggedData != null && loggedUserData != null){
      this.loggedUserId = loggedData;
      this.loggedUserData = JSON.parse(loggedUserData);
    }
  }

  onUserLogin(payload: any){
    return this.http.post(this.apiUrl + "login", payload)
  }
}
