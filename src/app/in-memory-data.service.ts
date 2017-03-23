import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

const BASE = "assets/images/";

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let busyous = [
      { id:1, name:'上杉謙信',img:'00005_m.jpg' },
      { id:2, name:'織田信長',img:'00001_m.jpg' },
      { id:3, name:'豊臣秀吉',img:'00002_m.jpg' },
      { id:4, name:'徳川家康',img:'00003_m.jpg' },
      { id:5, name:'武田信玄',img:'00004_m.jpg' },
      { id:6, name:'北条氏康',img:'00036_m.jpg' },
      { id:7, name:'今川義元',img:'00016_m.jpg' },
      { id:8, name:'浅井長政',img:'00018_m.jpg' },
      { id:9, name:'伊達正宗',img:'00009_m.jpg' },
      { id:10, name:'大友宗麟',img:'' },
      { id:11, name:'毛利元就',img:'00038_m.jpg' },
      { id:12, name:'三好長慶',img:'' },
      { id:13, name:'島津義弘',img:'00020_m.jpg' },
      { id:14, name:'真田昌幸',img:'' },
      { id:15, name:'真田信幸',img:'' },
      { id:16, name:'真田信繁',img:'00010_m.jpg' },
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
      { id:28, name:'明智光秀',img:'00006_m.jpg' },
      { id:29, name:'石田光成',img:'00007_m.jpg' },
      { id:30, name:'直江兼続',img:'00008_m.jpg' },
      { id:31, name:'前田慶次',img:'00011_m.jpg' },
      { id:32, name:'本多忠勝',img:'00017_m.jpg' },
      { id:33, name:'竹中半兵衛',img:'' },
      { id:34, name:'黒田官兵衛',img:'00034_m.jpg' },
      { id:35, name:'黒田長政',img:'' },
      { id:36, name:'長宗我部元親',img:'00029_m.jpg' },
    ];

    return {busyous};    
  }

}
