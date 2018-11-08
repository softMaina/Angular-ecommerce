import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FooterComponent, HeaderComponent } from './shared';
import { AppComponent } from './app.component';
import { SignupComponent } from './profile/signup/signup.component';
import { SigninComponent } from './profile/signin/signin.component';
import { ProductsComponent } from './product/products/products.component';
import { CategoriesComponent } from './category/categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './product/order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AppRoutingModule } from './app-routing.modules';
import { AddProductComponent } from './product/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ManagecategoriesComponent } from './category/managecategories/managecategories.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AddshopComponent } from './profile/shop/addshop/addshop.component';
import { MyproductsComponent } from './product/myproducts/myproducts.component';
import { CartComponent } from './product/cart/cart.component';
import { MyordersComponent } from './profile/myorders/myorders.component';
import { SalesComponent } from './profile/sales/sales.component';
import { WalletComponent } from './profile/wallet/wallet.component';
import { ChechoutbillingComponent } from './checkout/chechoutbilling/chechoutbilling.component';
import { ChechoutconfirmationComponent } from './checkout/chechoutconfirmation/chechoutconfirmation.component';
import { ChechoutpaymentComponent } from './checkout/chechoutpayment/chechoutpayment.component';
import { ChechoutreviewComponent } from './checkout/chechoutreview/chechoutreview.component';
import { ChechoutshippingComponent } from './checkout/chechoutshipping/chechoutshipping.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ProductsComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductComponent,
    OrderComponent,
    ProfileComponent,
    TransactionsComponent,
    FooterComponent,
    HeaderComponent,
    AddProductComponent,
    ManagecategoriesComponent,
    AddshopComponent,
    MyproductsComponent,
    CartComponent,
    MyordersComponent,
    SalesComponent,
    WalletComponent,
    ChechoutbillingComponent,
    ChechoutconfirmationComponent,
    ChechoutpaymentComponent,
    ChechoutreviewComponent,
    ChechoutshippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
