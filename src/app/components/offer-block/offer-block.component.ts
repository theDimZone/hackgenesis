import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Offer } from '../../models/offer';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offer-block',
  templateUrl: './offer-block.component.html',
  styleUrls: ['./offer-block.component.css']
})
export class OfferBlockComponent implements OnInit {
  @Input() offer: Offer;
  @Input() deposit: number = 0;
  public possible_profit: number = 0;
  public possible_loss: number = 0;

  constructor(private modalService: NgbModal) {}

  count(): void {
    this.possible_profit = Math.floor(this.offer.possible_profit * 0.01 * Math.floor(this.deposit / this.offer.price) * this.offer.price);
    this.possible_loss = Math.floor(this.offer.possible_loss * 0.01 * Math.floor(this.deposit / this.offer.price) * this.offer.price);
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
