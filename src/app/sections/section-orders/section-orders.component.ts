import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order [] = [
    {id: 1, customer: {id: 1, name: 'ABC', state: 'co', email: 'abc@gmail.com', },
      total: 220, placed: new Date(219, 10, 5),
      fulfilled: new Date(2020, 4, 2)},

    {id: 2, customer: {id: 1, name: 'ABC', state: 'co', email: 'abc@gmail.com', },
    total: 220, placed: new Date(219, 10, 5), fulfilled: new Date(2020, 4, 2)},

    {id: 3, customer: {id: 1, name: 'ABC', state: 'co',
     email: 'abc@gmail.com', }, total: 220, placed: new Date(219, 10, 5),
      fulfilled: new Date(2020, 4, 2)},

    {id: 4, customer: {id: 1, name: 'ABC', state: 'co',
    email: 'abc@gmail.com', }, total: 220, placed: new Date(219, 10, 5),
     fulfilled: new Date(2020, 4, 2)},

    {id: 5, customer: {id: 1, name: 'ABC', state: 'co',
     email: 'abc@gmail.com', }, total: 220, placed: new Date(219, 10, 5),
     fulfilled: new Date(2020, 4, 2)},
  ];

  ngOnInit(): void {
  }

}
