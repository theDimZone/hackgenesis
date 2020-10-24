import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../../models/offer';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.css']
})
export class ProductBlockComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
