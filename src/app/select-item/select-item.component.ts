import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';


@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css'],
 providers: []

})
export class SelectItemComponent implements OnInit {
public items;
  constructor(public itemService: ItemService) { }

  ngOnInit() {
    	this.itemService.onItemsRetrieved((items) => {
        this.items = items;
    })
  }

onItemSelected(item) {
  this.itemService.setSelectedItem(item);
}
  }
