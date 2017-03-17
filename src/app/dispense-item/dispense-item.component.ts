import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-dispense-item',
  templateUrl: './dispense-item.component.html',
  styleUrls: ['./dispense-item.component.css']
})
export class DispenseItemComponent implements OnInit {

  constructor(private itemService: ItemService, private balanceService: BalanceService) { }

  ngOnInit() {
  }

  onDispenseClick() {
    let item = this.itemService.getSelectedItem();
    let balance = this.balanceService.getBalance();

    if (this.itemService.hasRemaining() && this.itemService.hasSufficientBalance(balance)) {
      this.itemService.dispenseItem(() => {
        this.balanceService.deductBalance(item.cost);
        alert('Successfully dispensed ' + item.name);
      });
    } else if (!this.itemService.hasRemaining()) {
      alert('No more ' + item.name);
    } else {
      alert('Insufficient funds');
    }
  }
}
