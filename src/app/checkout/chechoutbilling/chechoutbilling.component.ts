import { Component, OnInit } from '@angular/core';
import { LocalcartService } from '../../services/localcart.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-chechoutbilling',
  templateUrl: './chechoutbilling.component.html',
  styleUrls: ['./chechoutbilling.component.css']
})
export class ChechoutbillingComponent implements OnInit {
  cartArray = [];
  cartTotal = 0;
  globalCart:any;

  // the checkout will read the amount of money to be charged to the user, it will then 
  // check against the users database bank, if it is enough, it will proceed to the payment 
  // else it is going to alert the user of lack of enough funds 
  // If the payment is successful then the page will redirect to show the order status, 
  // which can be shipping, proccessing, canceled or stalled or any other

  constructor(public localcart: LocalcartService, public globalService: GlobalService) {

    // read the local storage for the items added to cart

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

    console.log(this.cartArray)
    console.log(this.cartTotal)

   }

  ngOnInit() {
  }

}
