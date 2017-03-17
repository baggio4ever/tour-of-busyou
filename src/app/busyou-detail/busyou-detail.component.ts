import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Busyou } from '../busyou';
import { BusyouService } from '../busyou.service';

@Component({
  moduleId: module.id,
  selector: 'app-busyou-detail',
  templateUrl: './busyou-detail.component.html',
  styleUrls: ['./busyou-detail.component.css']
})
export class BusyouDetailComponent implements OnInit {

  @Input()
  busyou:Busyou;

  constructor(
    private busyouService:BusyouService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap( (params:Params)=>this.busyouService.getBusyou(+params['id']) )
      .subscribe(busyou=>this.busyou=busyou);
  }

  goBack():void {
    this.location.back();
  }
}
