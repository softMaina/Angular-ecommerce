import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router, Route , ActivatedRoute} from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { LocalcartService } from '../../services/localcart.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  globalCart: any;
  product;
  cartTotal: number;

  orderProduct: any;
  productkey:string;
  constructor(public afs: AngularFirestore, public route: ActivatedRoute, public globalservice: GlobalService, public localCart: LocalcartService) {
    this.productkey = this.route.snapshot.paramMap.get('id');
    console.log(this.productkey)
   this.afs.collection('Products',ref=>ref.where('id','==',this.productkey).limit(1)).valueChanges()
    .flatMap(result=>result)
    .subscribe(
      data => {
        this.orderProduct = JSON.parse(JSON.stringify(data));
        this.product = this.orderProduct;
        console.log(this.orderProduct)


        // subscribe to the globalservice cart
        this.globalservice.cart.subscribe((cart)=>{
          this.globalCart = cart;
          if(!cart){
            this.globalCart = {};
          }
          this.localCart.cartUpdateItems(this.globalCart);
          if(this.globalCart && this.globalCart[this.product.id]){
            this.product.quantity = this.globalCart[this.product.id]["quantity"];
          }else{
            this.product.quantity = 1;
            this.product.total = this.product.price;
          }
          
        });
      },
      (error)=>{
        console.log(error)
      }

    ),
    ()=>{
      console.log('successful')
    }
   }

  ngOnInit() {

  }

  addToCart(product){
    this.globalCart[product.id] = product;
    this.globalCart[product.id]["id"] = product.id;
    this.globalCart[product.id]["total"] = (product.quantity * product.price);

    this.globalservice.cart.next(this.globalCart);

    console.log("Added to cart successfully")
    console.log(product)
  }

}
