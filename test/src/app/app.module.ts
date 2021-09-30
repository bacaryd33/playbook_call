import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarketlistComponent } from './marketlist/marketlist.component';
import { MarketitemComponent } from './marketitem/marketitem.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketlistComponent,
    MarketitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
