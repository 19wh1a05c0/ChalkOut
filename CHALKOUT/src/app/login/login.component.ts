import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string;
  password : string;
  user : any;

  constructor(private router:Router, private service:UserService) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
    this.service.showAllUsers().subscribe((result:any) =>{
      this.user = result;
    });
  }
  loginSubmit(loginForm:any) {
    this.user.forEach((u:any) =>{
      if(u.email === loginForm.loginId && u.password === loginForm.password){
        this.service.setUserLoggedIn();
        this.router.navigate(['todos']);
      }
    })
  }
}