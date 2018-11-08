import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { FormArray, FormControl, FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product/product.service';
import * as firebase from 'firebase';
import { Router, Route, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  productForm: FormGroup;
  downloadUrl;
  categories$: Observable<Category[]>;
  imgUploaded: boolean = false;

  progress: {percentage:number}={percentage: 0}
  
  selectedFile = null;
  constructor(private http: HttpClient, public categService: CategoryService, public route: ActivatedRoute, public prodService: ProductService, public router: Router) { 
    this.productForm = new FormGroup({
      'title':new FormControl('',Validators.required),
      'brief_description':new FormControl('',Validators.required),
      'description':new FormControl(),
      'units':new FormControl(),
      'price':new FormControl(),
      'location':new FormControl(),
      'category_id':new FormControl()
    })
   }

  ngOnInit() {
    this.categories$ = this.categService.getAllCategories(ref=>ref);
    console.log(this.categories$)
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
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
  this.checkUrl()
}


checkUrl(){
  if(this.downloadUrl != ''){
    this.imgUploaded = true
  }else{
    this.imgUploaded = false;
  }
}

  addProduct(){
    console.log(this.productForm.get('brief_description').value)
    const title = this.productForm.get('title').value;
    const brief_description = this.productForm.get('brief_description').value;
    const description = this.productForm.get('description').value;
    const units = this.productForm.get('units').value;
    const price = this.productForm.get('price').value;
    const location = this.productForm.get('location').value;
    const category_id = this.productForm.get('category_id').value;
    const shop_id = this.route.snapshot.paramMap.get('id');
    const image = this.downloadUrl
    
    this.prodService.uploadProduct(title,brief_description,description,units,price,location,category_id,shop_id,image)

  }


  

}
