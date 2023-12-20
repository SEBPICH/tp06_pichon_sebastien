import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';


import { NgxsModule } from '@ngxs/store';

import { BrowserModule } from '@angular/platform-browser';
import { CatalogModule } from './catalog/catalog.module';
import { CartComponent } from './cart/cart.component';

import { CartState } from './shared/states/cart-state';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './api.service';
import { ApiHttpInterceptor } from './http-interceptor';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [BrowserModule, CatalogModule, NgxsModule.forRoot([CartState]), RouterModule.forRoot(routes), FormsModule, HttpClientModule],
  declarations: [AppComponent, TetiereComponent, FooterComponent, CartComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    ApiService,
  
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
