import { Component, inject, linkedSignal } from '@angular/core';
import { ProductCard } from './components/product-card/product-card';
import { ProductsStore } from './services/products-store';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
})
export class Products {
  protected productsStore = inject(ProductsStore);
}
