import { Component, OnInit, Input } from '@angular/core';
import { CashService } from '../services/cash.service';

@Component({
  selector: 'app-cash-user',
  templateUrl: './cash-user.component.html',
  styleUrls: ['./cash-user.component.css']
})
export class CashUserComponent implements OnInit {
  product: any;
  constructor(private _cashService: CashService) { }

  ngOnInit() {
    this._cashService.currentProduct.subscribe(product => {
      this.product = product;
      this.product = this.product.product;
    });
  }
}
