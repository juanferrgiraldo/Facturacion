import { Component, OnInit, Input } from '@angular/core';
import { CashService } from '../services/cash.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

import { Product } from '../cash-register/product.interface';

@Component({
  selector: 'app-cash-user',
  templateUrl: './cash-user.component.html',
  styleUrls: ['./cash-user.component.css']
})
export class CashUserComponent implements OnInit {
  clientForm: FormGroup;
  product: any;
  asyncProduct: Observable<string>;
  constructor(private _cashService: CashService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      product: ['', Validators.required]
    });
    this._cashService.currentProduct.subscribe(product => this.product = product);
    this.asyncProduct = this._cashService.currentProduct.pipe(
      tap(product => this.clientForm.patchValue(product))
    );
  }
}
