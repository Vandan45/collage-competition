import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:string = environment.apiUrl;
  loggedUserId: string = "";

  constructor(private http: HttpClient) { 
    const loggedData = localStorage.getItem("studentId");
    if(loggedData != null){
      this.loggedUserId = loggedData;
    }
  }

  onUserLogin(payload: any){
    return this.http.post(this.apiUrl + "login", payload)
  }
}
