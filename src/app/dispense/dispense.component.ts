import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.css']
})
export class DispenseComponent implements OnInit {
  public dispense;

  constructor(public itemService: ItemService, public balanceService: BalanceService) {
  }

  ngOnInit() {
  }

  onItemDispensed(callback) {
    // if the price of the item is equal or less than the balance, AND there is inventory
    if((this.itemService.getSelectedItem() <= this.balanceService.getBalance() === true) && (this.itemService.hasRemaining() === true)) {
      // then dispence
      this.itemService.dispenseItem(callback);
      // then update
      let diff = this.itemService.getSelectedItem() - this.balanceService.getBalance()
      this.balanceService.onBalanceUpdated(diff);
      // inform user
      alert('Here you go');
    } else {
      // if it cost more
      if (this.itemService.getSelectedItem() > this.balanceService.getBalance()) {
      // alert user
      alert('Insufficient Balance');
    } else {
      // otherwise it means there are no more.
      alert('Sold out');
    }
    }

  }


}
