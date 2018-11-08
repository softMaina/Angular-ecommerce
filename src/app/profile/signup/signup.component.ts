import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  user:any = {};

  constructor(public userServ: UserService, public router: Router ) { }

  ngOnInit() {
  
  }
  

  register(){
    try{
    this.userServ.register(this.user);
        this.router.navigate(['profile'])  
        }catch(error){
          console.log(error)
        }
  

   }
}
