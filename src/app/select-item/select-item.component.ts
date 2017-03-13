import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.scss']
})
export class SelectItemComponent implements OnInit {
  items = [
		{
		    id: 1,
		    name: 'Sprite',
		    cost: 50
		},
		{
		    id: 2,
		    name: 'Coke',
		    cost: 50
		},
		{
		    id: 3,
		    name: 'Dr. Pepper',
		    cost: 75
		}
	];

  constructor() { }

  ngOnInit() { }

}
