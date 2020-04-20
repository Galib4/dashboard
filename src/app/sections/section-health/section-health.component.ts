import { Component, OnInit } from '@angular/core';
import { Server } from '../../shared/server';

const SAMPLE_SERVERS = [
  {id: 1, name: 'Dev 1', isOnline: true},
  {id: 2, name: 'Dev 2', isOnline: false},
  {id: 3, name: 'Dev 3', isOnline: true},
  {id: 4, name: 'Dev 4', isOnline: true}
];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server [] = SAMPLE_SERVERS;

  ngOnInit(): void {
  }

}
