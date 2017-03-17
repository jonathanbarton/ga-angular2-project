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
  dispenseItem() {
    const currentBalance = this.balanceService.getBalance();
    if (this.itemService.hasSufficientBalance(currentBalance)) {
      alert("insufficient balance");
    }
    else if (this.itemService.hasRemaining()) {
      alert("none left");
    }
    else (  this.itemService.dispenseItem((item)=> {
      (this.balanceService.deductBalance(item.cost))
      // alert('enjoy your ', item);
    })
};
