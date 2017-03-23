import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TypeaheadMatch } from 'ng2-bootstrap/typeahead';

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

      this.dataSource = Observable.create((observer:any)=>{
        // runs on every search
        observer.next(this.selectedName);
      })
      .mergeMap((token)=>this.busyouSearchService.search(token));
  }

  gotoDetail(busyou:Busyou):void {
    let link = ['/detail',busyou.id];
    this.router.navigate(link);
  }


  public selectedName:string;
  public dataSource:Observable<any>;

  public typeaheadOnSelect(e:TypeaheadMatch):void {
    console.log('Selected value: ',e.value);
    console.log('Selected e: ',e);
  }
  public names:any[] = [
    {kana:'Shiga',name:'滋賀'},
    {kana:'Kyoto',name:'京都'},
    {kana:'Nara',name:'奈良'},
    {kana:'Osaka',name:'大阪'},
    {kana:'Wakayama',name:'和歌山'},
    {kana:'Hyogo',name:'兵庫'},
    {kana:'Fukui',name:'福井'},
    {kana:'Ishikawa',name:'石川'},
    {kana:'Toyama',name:'富山'},
    {kana:'Mie',name:'三重'},
    {kana:'Aichi',name:'愛知'},
    {kana:'Gifu',name:'岐阜'},
    {kana:'Nagano',name:'長野'},
    {kana:'Niigata',name:'新潟'},
    {kana:'Shizuoka',name:'静岡'},
    {kana:'Kanagawa',name:'神奈川'},
    {kana:'Yamanashi',name:'山梨'},
    {kana:'Tokyo',name:'東京'},
    {kana:'Chiba',name:'千葉'},
    {kana:'Saitama',name:'埼玉'},
    {kana:'Ibaragi',name:'茨城'},
    {kana:'Fukushima',name:'福島'},
    {kana:'Yamagata',name:'山形'},
    {kana:'Akita',name:'秋田'},
    {kana:'Aomori',name:'青森'},
    {kana:'Hokkaido',name:'北海道'}
  ];
}
