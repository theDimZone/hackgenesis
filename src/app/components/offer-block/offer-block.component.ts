import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../../models/offer';

@Component({
  selector: 'app-offer-block',
  templateUrl: './offer-block.component.html',
  styleUrls: ['./offer-block.component.css']
})
export class OfferBlockComponent implements OnInit {
  @Input() offer: Offer;

  constructor() { }

  ngOnInit(): void {
  }

}
