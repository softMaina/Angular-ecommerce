import { Component } from '@angular/core';
import {  UserService } from '../../services/user/user.service';
import { GlobalService } from '../../services/global.service';
@Component({
    selector: 'app-layout-header',
    templateUrl: './header-component.html'
})
export class HeaderComponent{
    today: number  = Date.now();
    globalCart: any;
    cartItems = 0;
    constructor(public userServ: UserService, public globalservice: GlobalService){

        globalservice.cart.subscribe((cart) => {
            this.globalCart = cart;

            if(this.globalCart){
                const cartArray = (<any>Object).values(this.globalCart);
                this.cartItems =cartArray.reduce((sum, cartItem)=> sum + cartItem.quantity, 0);
            }else{
                this.cartItems = 0
            }
        })
    }

    logout(){
        try{
        this.userServ.logout()
        }
        catch(error){
            console.log(error)
        }
    }
}