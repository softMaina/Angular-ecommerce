import { loadQueryList } from "@angular/core/src/render3/instructions";
import { CategoriesComponent } from "../category/categories/categories.component";
import { database } from "firebase";

export interface Product {
    id?:string;
    userid?:string;
    title:string;
    brief_description:string;
    description:string;
    category_id:string;
    price:number;
    units?:any;
    location:string;
    lat?:any;
    lng?:any;
    image:string;
    shop_id:string;
    
    
}

// when the application first loads;
// it has to load all the dependency data 
// prior to any user interaction,
// i.e, product categories , user database, and friends data 
// this data will then be persisted to local storage