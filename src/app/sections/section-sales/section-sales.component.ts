import { Component, OnInit } from '@angular/core';
import { Server } from '../../shared/server';


const SAMPLE_SERVERS = [
  {id: 1, name: 'Sales', isOnline: true},
  {id: 2, name: 'Web', isOnline: false},
  {id: 3, name: 'Tele', isOnline: true},
  {id: 4, name: 'Customer', isOnline: true}
];

@Component({
  selector: 'app-section-sales',
  templateUrl: './section-sales.component.html',
  styleUrls: ['./section-sales.component.css']
})
export class SectionSalesComponent implements OnInit {

  constructor() { }

  servers: Server [] = SAMPLE_SERVERS;

  ngOnInit(): void {
  }

}
