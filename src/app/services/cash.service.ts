import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CashService {
  api = 'http://localhost:3001/facturacion/'
  private product = new BehaviorSubject('No se han registrado productos');
  currentProduct = this.product.asObservable();
  constructor(private _http: HttpClient) { }
  
  registerProduct(product: any) {
    console.log('post');
    
    return this._http.post<any>(this.api + 'buscar', { code: product }).pipe(map(product => {
      this.product.next(product)

    }))        
  }

  pay(products: Array<any>) {
    return this._http.post<any>(this.api + 'pagar', {products: products})
  }
}
