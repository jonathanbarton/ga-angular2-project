import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-dispense-btn',
  templateUrl: './dispense-btn.component.html',
  styleUrls: ['./dispense-btn.component.css']
})
export class DispenseBtnComponent implements OnInit {
  public dispensedItem;
  public remainingBalance;
  constructor(public itemService: ItemService, public balanceService: BalanceService) { }

  ngOnInit() {
  }

  showGif() {
    const gif = document.createElement('img');
    gif.setAttribute('src', 'https://media.giphy.com/media/m6zpWXifYXOlq/giphy.gif');
    document.querySelector('#img-container').appendChild(gif);
  }

  onDispenseItem() {
    const currbalance = this.balanceService.getBalance();
    const selectedCost = this.itemService.getSelectedItem().cost;
    const itemInventory = this.itemService.getSelectedItem().remaining;

    if (currbalance > selectedCost && itemInventory) {
      this.itemService.dispenseItem((item) => {
        this.dispensedItem = item;
        this.balanceService.deductBalance(this.dispensedItem.cost);
        this.showGif()
        console.log(this.dispensedItem);
        console.log(this.balanceService.getBalance());
      });
    } else if (currbalance < selectedCost) {
      console.log('Please insert more coins.')
    } else if (itemInventory === 0) {
      console.log('Sorry, this item is out-of-stock.');
    }
  }

}
