import { Component, OnInit } from '@angular/core';
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

//  @Input()
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

  save():void {
    this.busyouService.update(this.busyou)
      .then( ()=>this.goBack() );
  }

  get diagnostic() {
    return JSON.stringify(this.busyou);
  }

  clearBusyou():void {
    this.busyou = {id:this.busyou.id,name:'',kana:'',param_buryoku:0,param_chibou:0,param_seiji:0,img:''};
  }

  onSubmit():void {
    console.info('onSubmit!');

    this.save();
  }

  public alerts: any = [];
 
  public ddd(): void {
    let val = Math.random();
    if(val>0.6){
        this.alerts.push({
          type: 'info',
          msg: `オッス！オラ ${this.busyou.name}！！`,
          timeout: 5000
        });

    } else if(val>0.3) {
        this.alerts.push({
          type: 'success',
          msg: `はい！私  ${this.busyou.name} でございます！！`,
          timeout: 5000
        });

    } else {
        this.alerts.push({
          type: 'danger',
          msg: `イェェェェイ！我こそは ${this.busyou.name}！！ジャァァァスティス！！！`,
          timeout: 5000
        });

    }
  }
}
