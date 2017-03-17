import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.scss'],
  providers: []
})

// tells the class it needs to conform to OnInit
export class InsertCoinComponent implements OnInit {
  coinBalance = 0;
  constructor(public balanceService: BalanceService) { }

  // whenever a component uses this, the balance gets updated
  ngOnInit() {
  	this.balanceService.onBalanceUpdated((balance) => {
  	  this.coinBalance = balance;
  	});
  }

  // this is what we invoke with the click handlers
  addBalance(amount) {
  	this.balanceService.addBalance(amount);
  }

}
