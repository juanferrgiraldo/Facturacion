import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CashService } from '../services/cash.service';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.css']
})
export class CashRegisterComponent implements OnInit {
  registerForm: FormGroup;
  products: Array<any>= [];
  productsObs: Observable<Array<any>> = from(this.products);
  product: any;
  constructor(private _cashService: CashService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      productCode: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{1,3}")])
    });
    this._cashService.currentProduct.subscribe(product => {
      this.product = product;
      this.product = this.product.product;
      if (this.product) {
        console.log('Register product:', this.product);
        this.products.push(this.product)
        console.log('Register products:', this.products);
      }
    });
  }
  onPay() {
    this._cashService.pay(this.products).subscribe();
    this.products = [];
    this.product = '';
  }
  onRegister() {
    const product = { productCode: this.registerForm.value.productCode };
    this.product = this.registerForm.value.productCode;    
    // this.products.concat(product);
    this._cashService.registerProduct(this.product).subscribe();
    this.registerForm.reset();
  }
}
