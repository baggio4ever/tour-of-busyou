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
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Busyou';
  busyou:Busyou = {
      id:1,
      name:'上杉謙信'
  };

  busyous = BUSYOUS;
}
