import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { QueryFn } from 'angularfire2/firestore/interfaces';
import 'rxjs/add/operator/mergeMap';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly path = 'Products'

  constructor(public afs: AngularFirestore) { }

  uploadProduct(title:string,brief_description:string,description:string,units:number,price:number,location:string,category_id:string,shop_id:string,image:string){
    const productId: string = this.afs.createId();
    
    return this.afs.doc<Product>(`Products/${productId}`)
    .set({
    id: productId,
    title,
    brief_description,
    description,
    units,
    price,
    location,
    category_id,
    shop_id,
    image
    })
  }

  updateProduct(){
    
  }

  deleteProduct(){

  
  }

  getAllProducts(ref?: QueryFn): Observable<Product[]>{
    return this.afs.collection<Product>(this.path, ref)
    .snapshotChanges().map(actions => {
      return actions.map(a =>{
        const data = a.payload.doc.data() as Product;
        const id=a.payload.doc.id;
        return {id, ...data};
      })
    })
  }

  // get a single product from the database
  getProduct(id: String){
  return  this.afs.collection(this.path, ref=> ref.where('value', '==',true).limit(1))
    .valueChanges().flatMap(result => result);
  }




}
