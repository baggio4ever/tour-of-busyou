import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Busyou } from './busyou';
import { BUSYOUS } from './mock-busyous';

@Injectable()
export class BusyouService {
  private busyouUrl = 'api/busyous';  // URL to web api

  constructor(private http:Http) { }

  getBusyous(): Promise<Busyou[]> {
    return this.http.get(this.busyouUrl)
            .toPromise()
            .then( response=>response.json().data as Busyou[] )
            .catch(this.handleError);
  //  return Promise.resolve(BUSYOUS);
  }

  private handleError(error:any):Promise<any> {
    console.error('エラー発生！ ',error);
    return Promise.reject(error.message || error);
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
