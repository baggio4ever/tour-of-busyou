import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Busyou } from '../busyou';
import { BusyouService } from '../busyou.service';

@Component({
  selector: 'app-busyou-list',
  templateUrl: './busyou-list.component.html',
  styleUrls: ['./busyou-list.component.css'],
//  providers: [BusyouService]
})
export class BusyouListComponent implements OnInit {

  busyous :Busyou[];

  selectedBusyou:Busyou;

  constructor(private busyouService:BusyouService,private router:Router) {}

  ngOnInit():void {
    this.getBusyous();
  }

  onSelect( busyou:Busyou ){
    this.selectedBusyou = busyou;
  }

  getBusyous():void {
    this.busyouService.getBusyous().then(busyous => this.busyous = busyous);
//    this.busyouService.getBusyousSlowly().then(busyous => this.busyous = busyous);
  }

  gotoDetail():void {
    this.router.navigate(['/detail',this.selectedBusyou.id]);
  }

  add(name:string):void {
    name = name.trim();
    if( !name ){ return; }
    this.busyouService.create(name)
          .then( busyou=>{
            this.busyous.push(busyou);
            this.selectedBusyou = null;
          });
  }

  delete(busyou:Busyou):void {
    this.busyouService
          .delete(busyou.id)
          .then(()=>{
            this.busyous = this.busyous.filter(b=>b!==busyou);
            if(this.selectedBusyou==busyou){ this.selectedBusyou=null;}
          });
  }
}
