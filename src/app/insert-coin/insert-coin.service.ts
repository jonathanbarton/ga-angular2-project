import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InsertCoinService {
  private balance: number = 0;
  private subject: Subject<number> = new Subject<number>();

  constructor() { }
  
  setBalance(amount): void { 
  	this.balance = amount; 
  	this.updateSubject();
  }
  
  getBalance(): Observable<number> { 
  	return this.subject.asObservable(); 
  }
  
  addBalance(amount): void { 
  	this.balance += amount;
  	this.updateSubject(); 
  }
  
  updateSubject(): void {
  	this.subject.next(this.balance);
  }

  onBalanceUpdated(callback): void {
  	this.getBalance().subscribe(callback);
  }
}
