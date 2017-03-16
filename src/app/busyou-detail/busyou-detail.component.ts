import { Component, OnInit,Input } from '@angular/core';

import { Busyou } from '../busyou';

@Component({
  selector: 'app-busyou-detail',
  templateUrl: './busyou-detail.component.html',
  styleUrls: ['./busyou-detail.component.css']
})
export class BusyouDetailComponent implements OnInit {

  @Input()
  busyou:Busyou;

  constructor() { }

  ngOnInit() {
  }

}
