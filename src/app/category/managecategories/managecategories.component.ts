import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-managecategories',
  templateUrl: './managecategories.component.html',
  styleUrls: ['./managecategories.component.css']
})
export class ManagecategoriesComponent implements OnInit {

    categoryForm: FormGroup;
    categorys$: Observable<Category[]>;

   progress: {percentage:number}={percentage: 0}
   downloadUrl;

  constructor(public angularstore: AngularFireStorage, public afs: AngularFirestore, public categService: CategoryService) { }



  ngOnInit() {
    this.categoryForm = new FormGroup({
      title: new FormControl('',Validators.required),
      avatar: new FormControl('',Validators.required)
    });
    this.categorys$ = this.categService.getAllCategories(ref=>ref);
  }

  upload(event){
      // create a reference to the firebase storage   
    const file: File = event.target.files[0];
    
    const metadata = {'contentType': file.type};
    const path = `Products/${new Date().getTime()}_${file.name}`;
    const bucketStore = firebase.storage().ref(path);
    

    const uploadTask=bucketStore.put(file,metadata);

    console.log("uploading", file.name);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,(uploadSnapshot: firebase.storage.UploadTaskSnapshot)=>{
      this.progress.percentage = Math.round((uploadSnapshot.bytesTransferred/uploadSnapshot.totalBytes)*100)
      console.log(this.progress.percentage)
    })

    uploadTask.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot)=>{
      const percentage = uploadSnapshot.bytesTransferred / uploadSnapshot.totalBytes * 100
      bucketStore.getDownloadURL().then((url)=>{
        this.downloadUrl = url
      })
    
    })
  }

  save(){
    const title = this.categoryForm.get('title').value;
    const avatar = this.downloadUrl;
    this.categService.add({title,avatar})
    this.categoryForm.reset();
  }


}
