import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Offer } from '../../models/offer';
import { Product } from '../../models/product';
import db from "../../offers/";

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']

})
export class IndexPageComponent implements OnInit {
  public toggle1: boolean = true;
  public toggleStock: boolean = false;
  public toggleBonds: boolean = false;
  public toggleProducts: boolean = false;

  public stocks: Offer[];
  public bonds: Offer[];
  public products: Product[];

  constructor(private titleService: Title ) {
    this.titleService.setTitle("Главная");
  }

  init_data(): void {
    let stocks = db.stocks as Offer[];
    this.stocks = stocks;

    let bonds = db.bonds as Offer[];
    this.bonds = bonds;

    let products = db.products as Product[];
    this.products = products;

  }

  ngOnInit(): void {
    this.init_data();
  }

  showStock(){
  this.toggle1 = !this.toggle1
  this.toggleStock = !this.toggleStock
  }

  showBonds(){
    this.toggle1 = !this.toggle1
    this.toggleBonds = !this.toggleBonds
  }


  showProducts(){
    this.toggle1 = !this.toggle1
    this.toggleProducts = !this.toggleProducts
  }

//    this.toggle1 = !this.toggle1
//    this.toggle2 = !this.toggle2
//  }
}
