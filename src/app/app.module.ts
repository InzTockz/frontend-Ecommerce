import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailProductComponent } from './components/cart/detail-product/detail-product.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin/product', component: ProductListComponent},
  {path: 'admin/product/addproduct', component: ProductAddComponent},
  {path: 'admin/product/update/:id', component: ProductAddComponent},
  {path: 'admin/category', component: CategoryListComponent},
  {path: 'admin/category/addcategory', component: CategoryAddComponent},
  {path: 'admin/category/update/:id', component: CategoryAddComponent},
  {path: 'cart/detailproduct/:id', component: DetailProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    HeaderAdminComponent,
    ProductAddComponent,
    CategoryListComponent,
    CategoryAddComponent,
    DetailProductComponent,
    HeaderUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
