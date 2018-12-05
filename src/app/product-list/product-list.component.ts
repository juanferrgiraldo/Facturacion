import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<any>= [];
  productsObs: Observable<Array<any>> = of(this.products);
  product: any;
  
  constructor() { }

  ngOnInit() {
  }

}
