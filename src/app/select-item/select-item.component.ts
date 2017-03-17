import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent implements OnInit {
  public items;
  constructor(public itemService: ItemService) { }

  // event handler instead instead of callback going into jquery it is going into code already written to be called later
  ngOnInit() {
    this.itemService.onItemsRetrieved((items) => {
      this.items = items;
    })
  }

  onItemSelected(item) {
    this.itemService.setSelectedItem(item);
  }
}
