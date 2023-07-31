import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from 'src/app/products-list/service/product.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit{

  products$!: Observable<Product[]>;

  constructor(private service: ProductService){
  }

  ngOnInit(): void {
    this.products$ = this.service.getProducts();
  }

}
