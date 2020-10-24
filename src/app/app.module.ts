import { BrowserModule, Title } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestLendingComponent } from './components/test-lending/test-lending.component';

const routes: Routes =[
    { path: '', component: IndexPageComponent},
    { path: 'about', component: AboutPageComponent},
    { path: 'test/:name', component: TestPageComponent },
    { path: 'test-lending', component: TestLendingComponent},
    { path: '**', component: NotfoundPageComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AboutPageComponent,
    TestPageComponent,
    NotfoundPageComponent,
    TestLendingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports: [RouterModule],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
