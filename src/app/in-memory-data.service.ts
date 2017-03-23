import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let busyous = [
      { id:1, name:'上杉謙信',img:'assets/images/00005_m.jpg' },
      { id:2, name:'織田信長',img:'assets/images/00001_m.jpg' },
      { id:3, name:'豊臣秀吉',img:'assets/images/00002_m.jpg' },
      { id:4, name:'徳川家康',img:'assets/images/00003_m.jpg' },
      { id:5, name:'武田信玄',img:'assets/images/00004_m.jpg' },
      { id:6, name:'北条氏康',img:'' },
      { id:7, name:'今川義元',img:'' },
      { id:8, name:'浅井長政',img:'' },
      { id:9, name:'伊達正宗',img:'' },
      { id:10, name:'大友宗麟',img:'' },
      { id:11, name:'毛利元就',img:'' },
      { id:12, name:'三好長慶',img:'' },
      { id:13, name:'島津義弘',img:'' },
      { id:14, name:'真田昌幸',img:'' },
      { id:15, name:'真田信幸',img:'' },
      { id:16, name:'真田信繁',img:'' },
      { id:17, name:'真田幸隆',img:'' },
      { id:18, name:'上杉景勝',img:'' },
      { id:19, name:'上杉景虎',img:'' },
      { id:20, name:'北条早雲',img:'' },
      { id:21, name:'北条氏政',img:'' },
      { id:22, name:'徳川秀忠',img:'' },
      { id:23, name:'徳川家光',img:'' },
      { id:24, name:'徳川吉宗',img:'' },
      { id:25, name:'徳川綱吉',img:'' },
      { id:26, name:'徳川家茂',img:'' },
      { id:27, name:'徳川慶喜',img:'' },
    ];

    return {busyous};    
  }

}
