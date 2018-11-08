import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { QueryFn } from 'angularfire2/firestore/interfaces';
import 'rxjs/add/operator/map';
import DocumentReference = firebase.firestore.DocumentReference;
import { CategoriesComponent } from '../category/categories/categories.component';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly path = 'Categories';

  constructor(private afs: AngularFirestore) { }

  add(data): Promise<DocumentReference>{
    return this.afs.collection<Category>(this.path).add(data);
  }

  update(){

  }
  delete(){

  }
  getAllCategories(ref?: QueryFn): Observable<Category[]>{
    return this.afs.collection<Category>(this.path, ref)
    .snapshotChanges().map(actions => {
      return actions.map(a =>{
        const data = a.payload.doc.data() as Category;
        const id=a.payload.doc.id;
        return {id, ...data};
      })
    })
  }
}
