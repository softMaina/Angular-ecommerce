import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public afAuth: AngularFireAuth){
    this.checkLogin()
  }

  checkLogin(){ 
  this.afAuth.auth.setPersistence('local');
  this.afAuth.authState.subscribe(
    (user) => {
      if(!user){
        console.log(user)
      }else{
        console.log(user)
      }
    }
  )
  }
}
