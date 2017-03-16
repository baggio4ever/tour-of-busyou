import { Component } from '@angular/core';

import { Busyou } from './busyou';

const BUSYOUS:Busyou[] = [
  { id:2, name:'織田信長'},
  { id:3, name:'豊臣秀吉'},
  { id:4, name:'徳川家康'},
  { id:5, name:'武田信玄'},
  { id:6, name:'北条氏康'},
  { id:7, name:'今川義元'},
  { id:8, name:'浅井長政'},
  { id:9, name:'伊達正宗'},
  { id:10, name:'大友宗麟'},
  { id:11, name:'毛利元就'},
  { id:12, name:'三好長慶'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '武将祭り';

  busyou:Busyou = {
      id:1,
      name:'上杉謙信'
  };

  busyous = BUSYOUS;

  selectedBusyou:Busyou;

  onSelect(busyou:Busyou){
    this.selectedBusyou = busyou;
  }
}
