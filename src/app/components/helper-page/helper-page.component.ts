import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from '../../models/user';
import { Title } from '@angular/platform-browser';
import { Offer } from '../../models/offer';
import { Product } from '../../models/product';

import db from "../../offers/";

@Component({
  selector: 'app-helper-page',
  templateUrl: './helper-page.component.html',
  styleUrls: ['./helper-page.component.css']
})
export class HelperPageComponent implements OnInit {
  public user: User;
  public best_stocks: Offer[] = []; // three
  public best_bonds: Offer[] = []; // three
  public best_products: Product[] = []; // three

  constructor(private titleService: Title, private localStorageService: LocalStorageService) {
    this.titleService.setTitle("Помощник");

    this.user = this.localStorageService.getUser();
    console.log(this.user);

    //let stocks = db.stocks;
    //console.log(stocks);
  }

  ngOnInit(): void {
    let stocks = db.stocks as Offer[];
    for(let stock of stocks) {
        for(let stock_factor in stock.required_factors) {
          if(stock.required_factors[stock_factor] < this.user.factors[stock_factor]) {
            this.best_stocks.push(stock);
          } else {
            continue;
          }
        }
    }

    this.best_stocks.sort((a, b) => a.possible_profit - b.possible_profit);
    console.log(this.best_stocks);

  }


}
