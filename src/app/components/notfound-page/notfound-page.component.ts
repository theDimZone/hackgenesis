import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound-page',
  templateUrl: './notfound-page.component.html',
  styleUrls: ['./notfound-page.component.css']
})
export class NotfoundPageComponent implements OnInit {

  constructor(private titleService: Title ) {
    this.titleService.setTitle("Страница не найдена");
  }

  ngOnInit(): void {
  }

}
