import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']

})
export class IndexPageComponent implements OnInit {
  toggle1 = true;
  toggleStock = false;
  toggleBonds = false;
  toggleProducts = false;
  constructor(private titleService: Title ) {
    this.titleService.setTitle("Главная");
  }

  ngOnInit(): void {
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
