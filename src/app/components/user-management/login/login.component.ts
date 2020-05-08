import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  msg='';
  constructor(private _router : Router) { 
    this.user=new User();
  }

  ngOnInit(): void {
  }

  loginUser(){
    this._router.navigate(['/loginsuccess'])
    /*this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/loginsuccess'])
      },
      error => {
        console.log("exception occured");
        this.msg="Bad credintial, please enter valid Userid";
      }
    )*/

  }
  gotoregistration(){
    this._router.navigate(['/registration'])
  }

}
