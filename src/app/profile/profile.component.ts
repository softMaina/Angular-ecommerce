import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Shop } from '../models/shop';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userdetails;
  
  profileDetails: User = {
    id:'',
    username:'',
    email:'',
    photoURL:'',
  }

  userShops$: any = {}
  haveShop: boolean = false

  editable: boolean;

  constructor(public afAuth: AngularFireAuth,public userServ: UserService, public router: Router, public shopservice: ShopService) {
    this.editable = false
    this.userdetails = this.afAuth.authState.subscribe(
      (user) => {
        if(user){
          this.userdetails = user;
          this.profileDetails.username = user.displayName;
          this.profileDetails.id = user.uid;
          this.profileDetails.photoURL = user.photoURL;
          this.profileDetails.email= user.email;
          console.log(this.profileDetails)
          this.shopservice.getMyShop(this.profileDetails.id)
          .subscribe(
            v=>{
              let y = JSON.parse(JSON.stringify(v));
              this.userShops$ = y
            },
            (error) => {
              console.log(error);
            }, () => {
              console.log('done');
            }
          );
          console.log(this.userShops$)
        }else{
          // give a message for the person to login in 
          // add redirect to the login page
          console.log('you have to login to view this page')
        }
      }
      
    )



   }

  ngOnInit() {
   
  }

  changeName(){
    this.editable = true
  }

  toggleEditable(){
    this.editable = false;
  }

  changePersonalInfo(){
    
  
  }



  saveChanges(){
    this.userServ.update(this.profileDetails.id,this.profileDetails)
    
  }

  createShop(){
    this.router.navigate(['addShop'])
  }

  addProducts(){
    this.router.navigate(['addproduct',this.userShops$.id])
  }

}
