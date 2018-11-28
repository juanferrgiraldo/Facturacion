import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CashService } from '../services/cash.service';

@Component({
  selector: 'app-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.css']
})
export class CashRegisterComponent implements OnInit {
  registerForm: FormGroup;
  products: Array<any>;
  product: string;
  constructor(private _cashService: CashService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      productCode: new FormControl(null, Validators.required)
    });
  }

  onRegister() {
    const product = {productCode: this.registerForm.value.productCode};
    this.product = this.registerForm.value.productCode;
    console.log(this.product);
    // this.products.concat(product);
    this._cashService.registerProduct(this.product);
  }
}
