import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from '../../models/user';
import { Title } from '@angular/platform-browser';
import { Offer } from '../../models/offer';
import { Product } from '../../models/product';

import db_stocks  from "../../offers/";

@Component({
  selector: 'app-helper-page',
  templateUrl: './helper-page.component.html',
  styleUrls: ['./helper-page.component.css']
})
export class HelperPageComponent implements OnInit {
  public user: User;
  public user_offers: Offer[];
  public user_products: Product[];

  constructor(private titleService: Title, private localStorageService: LocalStorageService) {
    this.titleService.setTitle("Помощник");

    this.user = this.localStorageService.getUser();
    console.log(this.user);
  }

  ngOnInit(): void {
    //let stocks = db_stocks as Offer[];


  }


}
