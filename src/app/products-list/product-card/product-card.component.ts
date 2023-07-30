import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  readonly BASE_IMG_URL: string = "assets/images/";

  getImageUrl():string{
    return this.BASE_IMG_URL+this.product.image;
  }
}
