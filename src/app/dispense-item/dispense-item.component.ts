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
    if (this.coinBalance >= this.selectedItem.cost && this.selectedItem.remaining > 0) {
      this.itemService.dispenseItem((item) => {
        alert(`Thank you for purchasing a ${item.name}!!`);
        this.balanceService.deductBalance(0);
      });
      this.balanceService.setBalance(0);
    } else if (this.selectedItem.remaining <= 0){
      this.itemService.dispenseItem((item) => {
        alert(`${item.name} is Sold Out!!`);
      });
    } else {
      alert('You have insufficient balance!');
    }
  }
}
