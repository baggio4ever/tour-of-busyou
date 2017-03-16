import { Component } from '@angular/core';

import { Busyou } from './busyou';

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
}
