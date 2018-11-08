import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { GlobalService } from '../../services/global.service';
import { LocalcartService } from '../../services/localcart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  globalCart:any;
  cartArray: any;
  cartTotal: Number;


  constructor(public router: Router, public globalService: GlobalService, public localCart: LocalcartService) {

    this.cartArray = [];
    this.cartTotal = 0;
    
    globalService.cart.subscribe((cart)=>{
      this.cartArray = [];
      this.cartTotal = 0;
      this.globalCart = cart;
      if(this.globalCart){
        this.cartArray = (<any>Object).values(this.globalCart);
        for(let i = 0; i < this.cartArray.length; i++){
          this.cartTotal += this.cartArray[i].total;
        }
        globalService.order.next({items: this.cartArray, shipping:{}, billing: {}, total: this.cartTotal});
      }
    });
    
   }

  ngOnInit() {
  }

  updateCart(product) {
    this.globalCart[product.id] = product;
    this.globalCart[product.id] = (product.quantity * product.price);
    this.globalService.cart.next(this.globalCart);
  }

  removeItem(product){
    delete this.globalCart[product.item];
    this.globalService.cart.next(this.globalCart);

    
  }

}
