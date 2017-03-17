import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InsertCoinComponent } from './insert-coin/insert-coin.component';

import { ItemService } from './item/item.service';
import { BalanceService } from './balance/balance.service';
import { SelectItemComponent } from './select-item/select-item.component';
import { DispenseButtonComponent } from './dispense-button/dispense-button.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertCoinComponent,
    SelectItemComponent,
    DispenseButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ItemService,
    BalanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
