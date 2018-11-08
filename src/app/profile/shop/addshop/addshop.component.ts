import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../models/shop';
import { ShopService } from '../../../services/shop.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import * as firebase from 'firebase'
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.css']
})
export class AddshopComponent implements OnInit {

  shopForm: FormGroup;

  constructor(public shopservice: ShopService, public userservice: UserService) { }

  ngOnInit() {
    this.shopForm  = new FormGroup({
      'title': new FormControl(),
      'description': new FormControl(),
      'location': new FormControl(),
      'type': new FormControl()
    })
  }

  save(){
    let userdetail;
    const name = this.shopForm.get('title').value
    const description = this.shopForm.get('description').value
    const location = this.shopForm.get('location').value
    const type = this.shopForm.get('type').value
    const userid = firebase.auth().currentUser.uid
    const ratings = 0;
    this.shopservice.uploadShop({userid,name,description,location,type}).then(() => {
    

   this.userservice.getUser(userid)
      .subscribe(
        v=>{
          let y = JSON.parse(JSON.stringify(v));
        
          userdetail = y
          console.log(userdetail)
          userdetail.shop = true
          this.userservice.update(userdetail.id, userdetail)
        },
        (error) => {
          console.log(error);
        }, () => {
          console.log('done');
        }
      );
       
     
    })
    this.shopForm.reset()
  }

}
