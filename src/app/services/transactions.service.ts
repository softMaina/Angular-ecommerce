import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Wallet } from '../models/wallet';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  cart;

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) { }


  // a simulated function to update the user's wallet

  async bank(walletid, data: Wallet):Promise<void>{
    this.afs.doc<Wallet>(`Wallet/${walletid}`).update(data);
  }

  
}
