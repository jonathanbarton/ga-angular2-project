import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent implements OnInit {
  public items;
  public selectedItem;
  constructor(public itemService: ItemService, public balanceService: BalanceService) { }

  ngOnInit() {
    this.itemService.onItemsRetrieved((items) =>  {
      this.items = items;
    })
  }

  onItemSelected(item) {
    this.itemService.setSelectedItem(item);
  }

  onDispenseCan(item) {
    let balance = this.balanceService.getBalance()
    let can = this.itemService.getSelectedItem()
    if (!this.itemService.hasRemaining()){
      alert('no more cans!');
    }
    else if (this.itemService.hasSufficientBalance(balance)) {
      this.itemService.dispenseItem(() => {
        this.balanceService.deductBalance(can.cost)
        const remainingBalance = this.balanceService.getBalance()
        alert('here is your change: ' + remainingBalance)
        this.balanceService.setBalance(0)
      });
    }
    else {
      alert('not enough funds');
    };
  }
}
