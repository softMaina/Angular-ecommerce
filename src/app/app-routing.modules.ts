import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './product/products/products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { CategoriesComponent } from './category/categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { SignupComponent } from './profile/signup/signup.component';
import { SigninComponent } from './profile/signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { AddshopComponent } from './profile/shop/addshop/addshop.component';
import { OrderComponent } from './product/order/order.component';
import { CartComponent } from './product/cart/cart.component';
import { ChechoutshippingComponent } from './checkout/chechoutshipping/chechoutshipping.component';
import { ChechoutbillingComponent } from './checkout/chechoutbilling/chechoutbilling.component';
import { ChechoutpaymentComponent } from './checkout/chechoutpayment/chechoutpayment.component';
import { WalletComponent } from './profile/wallet/wallet.component';


const routes: Routes = [
    {
        path:'products',
        component: ProductsComponent
    },
    {
        path:'cart',
        component: CartComponent
    },
    {
        path:'profile/wallet',
        component: WalletComponent  
    },
    {
        path:'products/order',
        component: OrderComponent
    },
    // {
    //     path: 'checkout',
    //     children:[
    //         {
    //         path:'',
    //         children:[
    //             {path:'delivery', component: ChechoutshippingComponent},
    //             {path:'billing', component: ChechoutbillingComponent},
    //             {path:'payment',component: ChechoutpaymentComponent},
    //         ]
    //     }
    //     ]
    // },
    {
        path:'shipping',
        component: ChechoutshippingComponent
    },{
        path:'billing',
        component: ChechoutbillingComponent
    },
    {
        path:'profile/addproduct',
        component: AddProductComponent
    },
    {
        path:'addShop',
        component: AddshopComponent
    },
    {
        path:'manage-categories',
        component: CategoryComponent
    },
    {
        path:'signup',
        component: SignupComponent
    },
    {
        path:'signin',
        component: SigninComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {
      // preload all modules; optionally we could
      // implement a custom preloading strategy for just some
      // of the modules (PRs welcome 😉)
      preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  