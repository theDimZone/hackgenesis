import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from "../../models/product";
import { Offer } from "../../models/offer";
import { ActivatedRoute, Router } from '@angular/router';
import db from "../../offers/";

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css']
})
export class MarketPageComponent implements OnInit {
  public stocks: Offer[];
  public bonds: Offer[];
  public products: Product[];
  public rus_name: string = "";
  public name: string = "";

  constructor(private titleService: Title,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    this.titleService.setTitle("Маркет");

    this.name = activateRoute.snapshot.params['name'];

    if(this.name == "stocks") {
      let stocks = db.stocks as Offer[];
      this.stocks = stocks;
      this.rus_name = "Акции";
    } else if(this.name == "bonds") {
      let bonds = db.bonds as Offer[];
      this.bonds = bonds;
      this.rus_name = "Облигации";
    } else {
      let products = db.products as Product[];
      this.products = products;
      this.rus_name = "Структурные продукты";
    }
  }

  ngOnInit(): void {

  }

}
