import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../../models/offer';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offer-block',
  templateUrl: './offer-block.component.html',
  styleUrls: ['./offer-block.component.css']
})
export class OfferBlockComponent implements OnInit {
  @Input() offer: Offer;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  openHistory() {
    //const modalRef = this.modalService.open(NgbdModalContent);
    //modalRef.componentInstance.name = 'history';
  }

  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
