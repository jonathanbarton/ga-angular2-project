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
  // constructor(public balanceService: BalanceService) { }
  ngOnInit() {
    this.itemService.onItemsRetrieved((items)=>{
      this.items = items;
    })
  }

  onItemSelected(item) {
    this.itemService.setSelectedItem(item);
  }

  getDrink() {
    if (this.itemService.hasSufficientBalance(this.balanceService.getBalance())){
      this.itemService.dispenseItem(()=>{
        alert("You got " + this.itemService.getSelectedItem().name);
        this.balanceService.deductBalance(this.itemService.getSelectedItem().cost);
      })
    } else {
      alert("Not Enough money");
    }
  }

}
