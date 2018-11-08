import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import * as firebase from 'firebase';
import { Location } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public userServ: UserService, public router: Router) { }

  user: any = {};
  authid;
  

  ngOnInit() {
  }

  login(){
    this.userServ.login(this.user)
    .then((res)=>{
      this.authid = firebase.auth().currentUser.uid;
      this.router.navigate(['products'])
    })
  }

}
