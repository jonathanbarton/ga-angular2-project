import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-dispense-item',
  templateUrl: './dispense-item.component.html',
  styleUrls: ['./dispense-item.component.scss'],
  providers: []
})
export class DispenseItemComponent implements OnInit {

  constructor(private itemService: ItemService, private balanceService: BalanceService) { }

  ngOnInit() {
    dispenseItem() {
      const currentBalance = this.balanceService.getBalance();
      if (!this.itemService.hasSufficientBalance(currentBalance)) {
        alert("insufficient balance");
      } else if (!this.itemService.hasRemaining()) {
        alert("none remaining");
      } else {
        // itemSerice.dispenseItem
        this.itemService.dispenseItem((item) => {
          alert('Enjoy your ' + item.name);
          this.balanceService.deductBalance(item.cost);
        })
      }
    }
  }
}
