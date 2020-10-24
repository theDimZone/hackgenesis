import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-lending',
  templateUrl: './test-lending.component.html',
  styleUrls: ['./test-lending.component.css']
})
export class TestLendingComponent implements OnInit {

  constructor() { }
  imgURL :string = "https://muzei-mira.com/uploads/posts/2020-09/1600694720_peterburg-bogolubov.jpg"
  ngOnInit(): void {
  }

}
