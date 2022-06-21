import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  share() {
    window.alert('The product has been shared!');
  }
  ngOnInit(): void {
  }

  onNotify(name: string) {
    window.alert('You will be notified when the product goes on sale ' + String(name));
  }
}
