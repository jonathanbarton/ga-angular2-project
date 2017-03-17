import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent implements OnInit {
  items = [
    {
      name: 'Jonathan',
      cost: .5
    },
    {
      name: 'Max',
      cost: .5
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
