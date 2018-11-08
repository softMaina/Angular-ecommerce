import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product/product.service';
import * as firebase from 'firebase';
import 'rxjs/add/operator/mergeMap';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  userdetails;
  userdb;
  userid;
  hasShop: boolean = false;
  constructor(public productService: ProductService, private spinner: NgxSpinnerService, public router: Router, public afAuth: AngularFireAuth, public afs: AngularFirestore,public userservice: UserService) {
 


    this.afAuth.authState.subscribe(
      (user) => {
        if(!user){
          console.log('no user authenticated')
        }else{
          this.userid = user.uid;
          this.getSingleDocument();
        }
      }

    )

   }

  ngOnInit() {
    if(this.products$ == null) {
      
      this.products$ = this.productService.getAllProducts(ref=>ref);
    }else{
      this.products$ = this.productService.getAllProducts(ref=>ref);
    }
    
    
    console.log('fetching data from the database...')
    console.log(this.products$)
  }
  getSingleDocument(){
    this.afs.collection('userProfile', ref=> ref.where('id','==',this.userid).limit(1))
    .valueChanges()
    .flatMap(result => result)
    .subscribe(
      v=>{
        let y = JSON.parse(JSON.stringify(v));
        console.log(y.email)
      },
      (error) => {
        console.log(error);
      }, () => {
        console.log('done');
      }
    )
  }



}
