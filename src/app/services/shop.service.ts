import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Profile } from '../models/profile';
import { Shop } from '../models/shop';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  

  userId: string;
  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {

    afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
   }

  uploadShop(data){
    const userId = firebase.auth().currentUser.uid;
    const shopId: string = this.afs.createId();
    data.id = shopId;
    return this.afs.doc<Shop>(`shops/${shopId}`)
    .set(data)
  }

  // getMyShops(userid): AngularFirestoreCollection<Shop>{
   
  //   return this.afs.collection('shops',
  //   ref => ref.where('userid','==',userid)
  //   )
  // }

  getMyShop(userid){
   return this.afs.collection('shops', ref=> ref.where('userid','==',userid).limit(1))
    .valueChanges()
    .flatMap(result => result)
    // .subscribe(
    //   v=>{
    //     let y = JSON.parse(JSON.stringify(v));
    //     console.log(y.email)
    //   },
    //   (error) => {
    //     console.log(error);
    //   }, () => {
    //     console.log('done');
    //   }
    // )
  }

  


}
