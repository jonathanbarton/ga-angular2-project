import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.scss'],
  providers: []
})
export class SelectItemComponent implements OnInit {
  items = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() { 
  	this.itemService.onItemsRetrieved((items) => this.items = items);
  }

  onSelectionChange(item) {
  	this.itemService.setSelectedItem(item);
  }
}
