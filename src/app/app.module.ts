import { BrowserModule, Title } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestLendingComponent } from './components/test-lending/test-lending.component';
import { HelperPageComponent } from './components/helper-page/helper-page.component';
import { OfferBlockComponent } from './components/offer-block/offer-block.component';
import { ProductBlockComponent } from './components/product-block/product-block.component';
import { MarketPageComponent } from './components/market-page/market-page.component';

const routes: Routes =[
    { path: 'main', component: IndexPageComponent},
    { path: '', component: TestLendingComponent},
    { path: 'about', component: AboutPageComponent},
    { path: 'helper', component: HelperPageComponent},
    { path: 'test/:name', component: TestPageComponent },
    { path: 'market/:name', component: MarketPageComponent },
    { path: 'about-helper', component: TestLendingComponent},
    { path: '**', component: NotfoundPageComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AboutPageComponent,
    TestPageComponent,
    NotfoundPageComponent,
    TestLendingComponent,
    HelperPageComponent,
    OfferBlockComponent,
    ProductBlockComponent,
    MarketPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports: [RouterModule],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
