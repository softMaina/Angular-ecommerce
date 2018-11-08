import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { Wallet } from 'src/app/models/wallet';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  credentials;
  photoURL = "https://firebasestorage.googleapis.com/v0/b/hello-49a33.appspot.com/o/profilepics%2Fprofile.jpeg?alt=media&token=820a7986-7461-422d-be2b-0cae9bc64d3a";
  constructor(public afs: AngularFirestore, public afireauth: AngularFireAuth) { }

  // register a new user
  async register(user): Promise<any>{
    
    try{

    await this.afireauth.auth
      .createUserWithEmailAndPassword(
        user.email,
        user.password
      ).then((res)=>{
        this.credentials = res;
      
         res.user.updateProfile({
          displayName: user.username,
          photoURL: this.photoURL
        })
       
      });

  
      // create a wallet for the user 
const walletId = this.createWallet()

      // add the registered user to the database

      const  userProfileDocument: AngularFirestoreDocument<User> = this.afs.doc(`userProfile/${this.credentials.user.uid}`);


      // populate the doc with userdate
      await userProfileDocument.set({
        id:this.credentials.user.uid,
        username: user.username,
        email:user.email,
        shop:false,
        photoURL:this.photoURL,
        walletid:walletId
      });
    }catch (error){
      console.log(this.credentials)
      console.log(error);
    }
  }

  // login a registered user
  async login(login){
    return this.afireauth.auth.signInWithEmailAndPassword(login.email, login.password);
  }

  // update the user data in firebase
  update(id: string, data: User): Promise<void>{
     return this.afs.doc<User>(`userProfile/${id}`).update(data);
    // return this.afireauth.auth.onAuthStateChanged()
  }

  async logout(){
    return this.afireauth.auth.signOut();
  }

  getUser(userid){
    return this.afs.collection('userProfile', ref=> ref.where('id','==',userid).limit(1))
     .valueChanges()
     .flatMap(result => result)

  }

  // create an wallet for the user 
  createWallet(){
    
    const amount = 0;
    const contact = 0;
    const updated_at = null;
    const created_at = new Date();
    const walletid = this.afs.createId();
    // Wallet/walletId
  this.afs.doc<Wallet>(`Wallet/${walletid}`).set({
    userid:firebase.auth().currentUser.uid,
    amount:0,
    contact:null,
    created_at:new Date(),
    updated_at:null,
    id:walletid
  })
  return walletid;
  }
}
