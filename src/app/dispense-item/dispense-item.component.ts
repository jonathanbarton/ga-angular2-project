import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-dispense-item',
  templateUrl: './dispense-item.component.html',
  styleUrls: ['./dispense-item.component.css']
})
export class DispenseItemComponent implements OnInit {
  public items;
  coinBalance = 0;
  public selectedItem;
  constructor(public itemService: ItemService, public balanceService: BalanceService) { }

  ngOnInit() {
    this.itemService.onItemsRetrieved((items) => this.items = items);
    this.balanceService.onBalanceUpdated((balance) => {
      this.coinBalance = balance;
    });
  }

  onDispenseItem() {
    this.selectedItem = this.itemService.getSelectedItem();
    if (this.coinBalance >= this.selectedItem.cost && this.itemService.hasRemaining()) {
      this.itemService.dispenseItem((item) => {
        this.balanceService.deductBalance(item.cost);
        this.balanceService.setBalance(0);
        alert('Thank you for purchase!! Coins returned!');
      });
    } else if (!this.itemService.hasRemaining()) {
      alert('SOLD OUT!!!');
    }
    else {
      alert('Insufficient Balance!!!');
    }

  }
}
