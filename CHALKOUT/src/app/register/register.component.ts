import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userdetails : any;
 
  constructor(private httpClient:HttpClient,private service:UserService,private router:Router) {
    this.userdetails={sname:' ',email : ' ',password : ' '};
  }

  ngOnInit(): void {
  }
  checkPwd(){
    console.log("Check");

  }
  async signUp(loginForm:any){
    // alert(this.email);
    console.log(loginForm.password);
    console.log(loginForm.c_password);
    this.userdetails.sname = loginForm.sname;
    this.userdetails.email = loginForm.email;
    this.userdetails.password = loginForm.password;
    console.log(this.userdetails.sname);
    console.log(this.userdetails.email);
    console.log(this.userdetails.password);
    if(loginForm.password===loginForm.c_password){
      // this.service.signUp(this.userdetails).subscribe();
      this.userRegister();
      // alert("Registered");

    }
    else{
      alert("Check your password");
    }
  }
  // userRegister(){
  //   this.service.userRegister(this.userdetails).subscribe();
  // }
  userRegister(){
    this.service.userRegister(this.userdetails).subscribe();
    // this.service.showAllUsers().subscribe();
    //alert("Registered");
    this.router.navigate(['/login']);
  }

}
