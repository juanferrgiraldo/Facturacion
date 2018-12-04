import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

import { Product } from '../cash-register/product.interface';

@Injectable()
export class CashService {
  private product = new BehaviorSubject('No se han registrado productos');
  currentProduct = this.product.asObservable();

  registerProduct(product: any) {
    this.product.next(product);
  }
}
