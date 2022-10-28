import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userLoggedIn:boolean;
  constructor(private HttpClient:HttpClient) {
    this.userLoggedIn = false;
  }
  getUserLoggedIn(){
    return this.userLoggedIn; //invoked whenever we need this value
  }
  setUserLoggedIn(){
    this.userLoggedIn = true; //invoked whenever we logged in
  }
  setUserLoggedOut(){
    this.userLoggedIn = false; //invoked whenever we logged out
  }
  userRegister(user:any){
    return this.HttpClient.post('http://localhost:3000/register',user);
  }
  showAllUsers(){
    return this.HttpClient.get("http://localhost:3000/fetch");
  }
  getUserByEmailAndPassword(loginForm:any){
    return this.HttpClient.get('http://localhost:3000/login/'+loginForm.email+"/"+loginForm.password).toPromise();
  }
}