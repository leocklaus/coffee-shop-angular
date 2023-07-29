import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsGridComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsListComponent,
  ]
})
export class ProductsListModule { }
