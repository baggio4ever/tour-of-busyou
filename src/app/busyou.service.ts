import { Injectable } from '@angular/core';

import { Busyou } from './busyou';
import { BUSYOUS } from './mock-busyous';

@Injectable()
export class BusyouService {

  constructor() { }

  getBusyous(): Promise<Busyou[]> {
    return Promise.resolve(BUSYOUS);
  }

  getBusyousSlowly(): Promise<Busyou[]> {
    return new Promise( resolve => {
      // simulate server latency with 2 sec delay.
      setTimeout(
        ()=>resolve(this.getBusyous()),
        2000
        );
    })
  }

  getBusyou(id:number):Promise<Busyou> {
    return this.getBusyous()
                .then( busyous=>busyous.find( busyou=>busyou.id===id ) );
  }
}
