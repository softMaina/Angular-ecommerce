import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {


  walletid: string;
  walletDetails: Wallet = {
    id:'',
    amount: null,
    userid:'',
    created_at: null,
    updated_at: null,
    contact:''

  }

  constructor(public transaction: TransactionsService) {
    this.walletDetails.id = '71YYYxd9Vqbiw0XXK3zy';
    this.walletDetails.amount = 1000;
    this.walletDetails.userid = '6xwPT98J9rXMztY0b4LBUgTEHr73';
    this.walletDetails.contact = '0719546525';
    this.walletDetails.updated_at = new Date();

    this.walletid = '71YYYxd9Vqbiw0XXK3zy';
   }

  ngOnInit() {
  }

  simulate(){
    this.transaction.bank(this.walletid, this.walletDetails)
  }

}
