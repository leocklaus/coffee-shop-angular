import { Component } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent {

  products: Product[] = [
    {
      id: 1,
      name: "COFFEE WITH MIL",
      value: "$3.7",
      image: "product1.png"
    },
    {
      id: 2,
      name: "COFFEE WITH MIL",
      value: "$3.7",
      image: "product2.png"
    },
    {
      id: 3,
      name: "COFFEE WITH MIL",
      value: "$3.7",
      image: "product3.png"
    },
    {
      id: 4,
      name: "COFFEE WITH MIL",
      value: "$3.7",
      image: "product4.png"
    },
  ]

}
