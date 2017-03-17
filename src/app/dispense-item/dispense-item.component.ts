import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';


@Component({
  selector: 'app-dispense-item',
  templateUrl: './dispense-item.component.html',
  styleUrls: ['./dispense-item.component.css']
})
export class DispenseItemComponent implements OnInit {


  constructor(public itemService: ItemService, public balanceService: BalanceService) { }

  ngOnInit() {
  }

  onItemDispensed() {
    let hasRemaining = this.itemService.hasRemaining();

    if (hasRemaining === false) {
      alert('None remaining.')
    }
    // if (this.itemService.hasSufficientBalance(this.balanceService.getBalance())) {
    //   this.itemService.dispenseItem(function(){
    //     this.balanceService.deductBalance()
    //   });
    // } else {
    //   alert('not enough cashhh booo');
    // }
  }
}
