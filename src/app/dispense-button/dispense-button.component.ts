import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-dispense-button',
  templateUrl: './dispense-button.component.html',
  styleUrls: ['./dispense-button.component.css']
})
export class DispenseButtonComponent implements OnInit {
  public message: string;
  constructor(private itemService: ItemService, public balanceService: BalanceService) { }

  ngOnInit() {
  }

  onItemDispensed() {
    let balance = this.balanceService.getBalance();

    if (this.itemService.hasSufficientBalance(balance) && this.itemService.hasRemaining()) {
      this.itemService.dispenseItem((response) => {
        this.balanceService.deductBalance(response.cost);
        this.message = `Enjoy your ${response.name}, NERD`;
      });
    } else if (this.itemService.hasRemaining()) {
      this.message = 'Not enough balance!';
    } else {
      this.message = 'Sold Out! Try another drink';
    }
    // alert(this.item.name);
    // console.log(this.balance);
  }

}
