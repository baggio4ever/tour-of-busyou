import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Busyou } from './busyou';
//import { BUSYOUS } from './mock-busyous';

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

  getBusyou(id:number):Promise<Busyou> {
    const url=`${this.busyouUrl}/${id}`;
    console.info(url);

    return this.http.get(url)
            .toPromise()
            .then( response=>response.json().data as Busyou )
            .catch(this.handleError);
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

  private headers = new Headers({'Content-Type':'application/json'});

  update( busyou:Busyou ):Promise<Busyou> {
    const url = `${this.busyouUrl}/${busyou.id}`;
    return this.http
            .put(url,JSON.stringify(busyou),{headers:this.headers})
            .toPromise()
            .then(()=>busyou)
            .catch(this.handleError);
  }

  create(name:string):Promise<Busyou> {
    return this.http
            .post(this.busyouUrl,JSON.stringify({name:name}),{headers:this.headers})
            .toPromise()
            .then(res=>res.json().data)
            .catch(this.handleError);
  }

  delete(id:number):Promise<void> {
    const url = `${this.busyouUrl}/${id}`;
    return this.http.delete(url,{headers:this.headers})
            .toPromise()
            .then(()=>null)
            .catch(this.handleError);
  }
/*
  getBusyou(id:number):Promise<Busyou> {
    return this.getBusyous()
                .then( busyous=>busyous.find( busyou=>busyou.id===id ) );
  }
*/
  getBusyouPortrait(busyou:Busyou):string {
    const BASE = 'assets/images/';

    if(busyou.img != '') {
      return BASE + busyou.img;
    } else {
      return BASE + 'no_portrait.jpg';
    }
  }
}
