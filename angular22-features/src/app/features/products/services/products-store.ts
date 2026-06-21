import { httpResource } from '@angular/common/http';
import { computed, Service, signal } from '@angular/core';
import { ProductResponse } from '../models/product-response.model';

@Service()
export class ProductsStore {
  private readonly BASE_URL = 'https://dummyjson.com/products';

  readonly productsResource = httpResource<ProductResponse>(() => this.BASE_URL, {
    defaultValue: { products: [], limit: 0, total: 0, skip: 0 },
  });

  public products = computed(() => this.productsResource.value().products);
}
