import { BrowserModule, Title } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';

const routes: Routes =[
    { path: '', component: IndexPageComponent},
    { path: 'about', component: AboutPageComponent},
    { path: 'test', component: TestPageComponent },
    { path: '**', component: NotfoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AboutPageComponent,
    TestPageComponent,
    NotfoundPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
