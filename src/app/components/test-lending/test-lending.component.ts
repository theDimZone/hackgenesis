import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-test-lending',
  templateUrl: './test-lending.component.html',
  styleUrls: ['./test-lending.component.css'],
  providers: [LocalStorageService]
})
export class TestLendingComponent implements OnInit {
  private test_name: string = "test1";

  constructor(private titleService: Title,
              private localStorageService: LocalStorageService,
              private router: Router,
              private activateRoute: ActivatedRoute,
            ) {
              this.titleService.setTitle("Ваш личный помощник");
              }

  public imgURL: string = "https://muzei-mira.com/uploads/posts/2020-09/1600694720_peterburg-bogolubov.jpg";

  ngOnInit(): void {
    if(this.router.url === '/') {
      if(this.localStorageService.getUserParameter("is_helper_skiped") == true
        || this.localStorageService.getUserParameter("passed_tests").includes(this.test_name)) {
          this.router.navigate(['/main'])
      }
    }
  }

  skip(): void {
    this.localStorageService.setUserParameter("is_helper_skiped", true);
    this.router.navigate(['/main']);
  }
}
