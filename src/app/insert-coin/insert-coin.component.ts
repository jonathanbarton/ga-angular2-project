import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.scss'],
  providers: []
})
// OnInit is similar to on document ready as well as a TS interface
export class InsertCoinComponent implements OnInit {
  coinBalance = 0;
  constructor(public balanceService: BalanceService) { }

  ngOnInit() {
  	this.balanceService.onBalanceUpdated((balance) => {
  	  this.coinBalance = balance;
  	});
  }

// this is what gets invoked in our click handlers
  addBalance(amount) {
  	this.balanceService.addBalance(amount);
  }
  returnCoins(){
    this.balanceService.setBalance(0);
    alert('Coins Returned!');

  }

}
