import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Busyou } from './busyou';

@Injectable()
export class BusyouSearchService {

  constructor(private http:Http) { }

  search(term:string):Observable<Busyou[]> {
    return this.http
            .get(`app/busyous/?name=${term}`)
            .map( response=>response.json().data as Busyou[] );
  }
}
