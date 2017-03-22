import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject  } from 'rxjs/Subject';

// Observable classs extenstions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Busyou } from '../busyou';
import { BusyouSearchService } from '../busyou-search.service';

@Component({
  moduleId: module.id,
  selector: 'app-busyou-search',
  templateUrl: './busyou-search.component.html',
  styleUrls: ['./busyou-search.component.css'],
  providers: [
    BusyouSearchService
  ]
})
export class BusyouSearchComponent implements OnInit {

  busyous:Observable<Busyou[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private busyouSearchService:BusyouSearchService,
    private router:Router
  ) { }

  search(term:string):void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.busyous = this.searchTerms
      .debounceTime(300)  // wait 300msec after keystroke before considering the term
      .distinctUntilChanged()  // ignore if next search is same as previous
      .switchMap( term=> term  // switch to new observable each time the term change
        // return the http search observable
        ?this.busyouSearchService.search(term)
        // or the observable of empty if there is no search term 
        :Observable.of<Busyou[]>([]))
      .catch(error=>{
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Busyou[]>([]);
      })
  }

  gotoDetail(busyou:Busyou):void {
    let link = ['/detail',busyou.id];
    this.router.navigate(link);
  }
}
