import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BalanceService {
  private balance: number = 0;
  private subject: Subject<number> = new Subject<number>();

  constructor() { }

  private updateSubject(): void {
    this.subject.next(this.balance);
  }

  setBalance(amount): void {
  	this.balance = amount;
  	this.updateSubject();
  }

  getBalance(): number {
  	return this.balance;
  }

  addBalance(amount): void {
  	this.balance += amount;
    this.balance = Math.round(this.balance * 100) / 100
  	this.updateSubject();
  }

  deductBalance(amount): void {
    this.balance -= amount;
    this.balance = Math.round(this.balance * 100) / 100
    this.updateSubject();
  }

// let this queue whoever is subscribed and run their callbacks (e.g. see ngOnInit() in insert-coin.component.ts)
  onBalanceUpdated(callback): void {
  	this.subject.asObservable().subscribe(callback);
  }
}
