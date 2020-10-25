import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from '../../models/user';
import { Title } from '@angular/platform-browser';
import { Offer } from '../../models/offer';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

import db from "../../offers/";

@Component({
  selector: 'app-helper-page',
  templateUrl: './helper-page.component.html',
  styleUrls: ['./helper-page.component.css'],
  providers: [LocalStorageService]
})
export class HelperPageComponent implements OnInit {
  public user: User;
  public best_stocks: Offer[] = []; // three
  public best_bonds: Offer[] = []; // three
  public best_products: Product[] = []; // three

  constructor(private titleService: Title,
              private localStorageService: LocalStorageService,
              private router: Router) {
    this.titleService.setTitle("Помощник");

    this.user = this.localStorageService.getUser();
    if(this.user.passed_tests.length == 0) {
      this.router.navigate(['/about-helper']);
    }

    console.log(this.user);
  }

  findBestOffers(offers: Offer[]): Offer[] {
    let best_offers: Offer[] = [];

    for(let offer of offers) {
        for(let offer_factor in offer.required_factors) {
          if(offer.required_factors[offer_factor] < this.user.factors[offer_factor]) {
            best_offers.push(offer);
          } else {
            continue;
          }
        }
    }

    best_offers.sort((a, b) => a.possible_profit - b.possible_profit);
    return best_offers;
  }

  findBestProducts(products: Product[]): Product[] {
    let best_products: Product[] = [];

    for(let product of products) {
        for(let product_factor in product.required_factors) {
          if(product.required_factors[product_factor] < this.user.factors[product_factor]) {
            best_products.push(product);
          } else {
            continue;
          }
        }
    }

    best_products.sort((a, b) => a.possible_profit - b.possible_profit);
    return best_products;
  }

  ngOnInit(): void {
    let stocks = db.stocks as Offer[];
    this.best_stocks = this.findBestOffers(stocks);

    let bonds = db.bonds as Offer[];
    this.best_bonds = this.findBestOffers(bonds);

    let products = db.products as Product[];
    this.best_products = this.findBestProducts(products);



    console.log(this.best_stocks);

  }


}
