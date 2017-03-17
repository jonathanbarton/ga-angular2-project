import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent implements OnInit {
 public items;
  constructor(public itemService: ItemService, public balanceService: BalanceService) { }

  ngOnInit() {
    this.itemService.onItemsRetrieved((items)=>{
      this.items = items;
    })
  }
  onItemSelected(item){
    this.itemService.setSelectedItem(item)
  }

  onChangeItem(item){
    this.itemService.setSelectedItem(item)
    if(this.itemService.hasSufficientBalance(this.balanceService.getBalance())){
      console.log("fatih")
      this.itemService.dispenseItem(console.log("yeah"))
      this.balanceService.deductBalance(this.itemService.getSelectedItem().cost);
    }
    else{
      let item =   '.display -sm-width';
      console.log("item")
    }
  }
}
