import { Component, OnInit } from '@angular/core';

import { Busyou } from '../busyou';
import { BusyouService } from '../busyou.service';

@Component({
  selector: 'app-busyou-carousel',
  templateUrl: './busyou-carousel.component.html',
  styleUrls: ['./busyou-carousel.component.css']
})
export class BusyouCarouselComponent implements OnInit {

  busyous:Busyou[] = [];

  constructor(private busyouService:BusyouService) { }

  ngOnInit() {
    this.busyouService.getBusyous()
      .then( busyous => {
        this.busyous=busyous.slice(0,8);
      });
  }

}
