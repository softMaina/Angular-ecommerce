import { Injectable } from '@angular/core';
import { WindowRefService } from '../services/window-ref.service';

@Injectable({
  providedIn: 'root'
})
export class LocalcartService {
  private  _window: Window;

  constructor(
    windowRef: WindowRefService
  ) {
    this._window = windowRef.nativeWindow;
   }

   
  //  clear all items in the cart
  // localstorage cart

  public clearAll(): void{
    this.clearCart();
    // this.clearOrder();
  }

  // clear cart function
  public clearCart(): void{
    this._window.localStorage.setItem('cart',null);
  }

  // calculate the number of items stored in the cart
  public cartHasItems(): boolean {
    return (this._window.localStorage.getItem('cart') !== null);
  }

  // cart get items  
  // returns a json object of all items in the cart

  public cartGetItems(): any{
    if(this.cartHasItems()){
      let cart = this._window.localStorage.getItem('cart');
      cart = JSON.parse(cart);
      return cart; 
    }
    return null
  }

  // clear localstorage order
  public clearOrder(): void{
    this._window.localStorage.setItem('order',null);
  }

  // cartUpdateItems()
  // @params items - Items to store in localstorage cart
  public cartUpdateItems(items: any): void{
    const itemStr = JSON.stringify(items);
    this._window.localStorage.setItem('cart',itemStr);
  }

  

}
