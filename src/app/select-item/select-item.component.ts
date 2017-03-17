import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent implements OnInit {
  public items;
  public title = 'james is the greatest';
  // items = [
  //   {
  //     name: 'max',
  //     cost: 0.5
  //   }
  // ];
  constructor(public itemService: ItemService) {
   }

  ngOnInit() {
    this.itemService.onItemsRetrieved((items) => {
      this.items = items;
    })
  }

  onItemSelected(item) {
    this.itemService.setSelectedItem(item);
  }

}
