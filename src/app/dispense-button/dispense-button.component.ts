import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';


@Component({
  selector: 'app-dispense-button',
  templateUrl: './dispense-button.component.html',
  styleUrls: ['./dispense-button.component.css']
})
export class DispenseButtonComponent implements OnInit {
  public item;
  public balance: number;
  public message: string;
  constructor(public itemService: ItemService, public balanceService: BalanceService) { }

  ngOnInit() {
  }

  onItemDispensed() {
    this.item = this.itemService.getSelectedItem();
    this.balance = this.balanceService.getBalance();

    if (this.itemService.hasSufficientBalance(this.balance)) {
      this.itemService.dispenseItem((response) => {
        this.balanceService.deductBalance(response.cost);
        if (response.name === 'Dr Pepper') {
          this.message = 'Good Choice! Dr Pepper is Life'
        } else (
          this.message = "Should've had a Dr Pepper"
        )
      })
    } else if (this.itemService.hasRemaining()) {
      this.message = 'Not enough balance - please insert coins!';
    } else (
      this.message = 'Whomp Whomp Sold Out :-('
    )
  }
}
