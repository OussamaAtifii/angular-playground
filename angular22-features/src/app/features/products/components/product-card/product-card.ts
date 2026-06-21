import { Component, input } from '@angular/core';
import { Product } from '../../models/product-response.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
})
export class ProductCard {
  readonly product = input.required<Product>();
}
