import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties = [
    { Id: 1, Name: 'Property 1', Type: 'A', Price: 23 },
    { Id: 2, Name: 'Property 2', Type: 'B', Price: 45 },
    { Id: 2, Name: 'Property 2', Type: 'B', Price: 45 },
    { Id: 2, Name: 'Property 2', Type: 'B', Price: 45 },
    { Id: 2, Name: 'Property 2', Type: 'B', Price: 45 },
    { Id: 2, Name: 'Property 2', Type: 'B', Price: 45 },
  ];

  constructor() { }

  ngOnInit(): void { }
}
