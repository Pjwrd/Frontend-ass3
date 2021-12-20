import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-cart/product/product-item/product-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CartItemComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    HomeComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
