import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Offer } from '../../models/offer';
import { Product } from '../../models/product';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.css']
})
export class ProductBlockComponent implements OnInit {
  @Input() product: Product;
  @Input() deposit: number = 0;
  public possible_profit: number = 0;
  public possible_loss: number = 0;

  constructor(private modalService: NgbModal) {}

  count(): void {
    this.possible_profit = Math.floor(this.product.possible_profit * 0.01 * Math.floor(this.deposit / this.product.price) * this.product.price);
    this.possible_loss = Math.floor(this.product.possible_loss * 0.01 * Math.floor(this.deposit / this.product.price) * this.product.price);
  }

  ngOnInit(): void {
    this.count();
  }

  ngOnChanges(): void {
    this.count();
  }

  openHistory() {
    //const modalRef = this.modalService.open(NgbdModalContent);
    //modalRef.componentInstance.name = 'history';
  }

  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
