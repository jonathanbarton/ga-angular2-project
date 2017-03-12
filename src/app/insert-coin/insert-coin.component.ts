import { Component, OnInit } from '@angular/core';
import { InsertCoinService } from './insert-coin.service';

@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.scss'],
  providers: [InsertCoinService]
})
export class InsertCoinComponent implements OnInit {
  coinBalance = 0;
  constructor(public insertCoinService: InsertCoinService) { }

  ngOnInit() {
  	this.insertCoinService.onBalanceUpdated((balance) => {
  	  this.coinBalance = balance;
  	});
  }

  addBalance(amount) {
  	this.insertCoinService.addBalance(amount);
  }

}
