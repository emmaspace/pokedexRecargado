import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GridComponent } from './components/grid/grid.component';
import { CardComponent } from './components/card/card.component';
import { RandomButtonComponent } from './components/random-button/random-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridComponent,
    CardComponent,
    RandomButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
