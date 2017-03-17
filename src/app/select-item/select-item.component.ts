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
  constructor(public itemService: ItemService, public balanceService: BalanceService) { }

  ngOnInit() {
    this.itemService.onItemsRetrieved((items) => {
      this.items = items;
   })
  }

  onItemSelected(item) {
    this.itemService.setSelectedItem(item);
  }

  itemDispense() {
    const currentBalance = this.balanceService.getBalance();
  	if(!this.hasSufficientBalance(currentBalance)) return;
  	if(!this.hasRemaining()) return;
  	this.itemService.dispenseItem((item) => {
	  alert('Enjoy your ' + item.name);
	  this.balanceService.deductBalance(item.cost);
  	});
  }

  hasSufficientBalance(currentBalance) {
  	const hasBalance = this.itemService.hasSufficientBalance(currentBalance);
  	if(!hasBalance) alert('Insufficient balance');
  	return hasBalance;
  }

  hasRemaining() {
  	const remaining = this.itemService.hasRemaining();
  	if(!remaining) alert('No remaining inventory for this item');
  	return remaining;
  }
}
