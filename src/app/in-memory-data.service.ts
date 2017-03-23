import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let busyous = [
      { id:1, name:'上杉謙信'},
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
      { id:13, name:'島津義弘'},
      { id:14, name:'真田昌幸'},
      { id:15, name:'真田信幸'},
      { id:16, name:'真田信繁'},
      { id:17, name:'真田幸隆'},
      { id:18, name:'上杉景勝'},
      { id:19, name:'上杉景虎'},
      { id:20, name:'北条早雲'},
      { id:21, name:'北条氏政'},
      { id:22, name:'徳川秀忠'},
      { id:23, name:'徳川家光'},
      { id:24, name:'徳川吉宗'},
      { id:25, name:'徳川綱吉'},
      { id:26, name:'徳川家茂'},
      { id:27, name:'徳川慶喜'},
    ];

    return {busyous};    
  }

}
