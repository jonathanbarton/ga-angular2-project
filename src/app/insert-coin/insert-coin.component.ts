import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../balance/balance.service';

// NOTE
// a service is an abstraction of business logic that can be extended and
// injected into multiple components
// NOTE

@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.scss'],
  providers: []
})
export class InsertCoinComponent implements OnInit {
  coinBalance = 0;
  constructor(public balanceService: BalanceService) { }


// when there is a new thing, send it to me (see onBalanceUpdated(callback): in balance.service.ts)
  ngOnInit() {
  	this.balanceService.onBalanceUpdated((balance) => {
  	  this.coinBalance = balance;
  	});
  }

  addBalance(amount) {
  	this.balanceService.addBalance(amount);
  }

  returnCoins() {
    this.balanceService.setBalance(0);
    alert('Coins Returned!')
  }

}
