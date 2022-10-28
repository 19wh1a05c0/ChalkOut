import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-todo-list';
  constructor(private service: UserService, private router:Router){
  //   setTimeout(() => {
  //     this.title = "Changed title";
  // }, 2000);
  
  }
  loggedin(){
    return this.service.getUserLoggedIn();
  }
  onLogout(){
    this.service.setUserLoggedOut();
    this.router.navigate(['login']);
  }
}
