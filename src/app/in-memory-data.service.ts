import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

//const BASE = "assets/images/";

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let busyous = [
      { id:1, name:'上杉謙信',kana:'うえすぎ けんしん',
        param_buryoku:100,param_seiji:50,param_chiryaku:70,
        img:'00005_m.jpg' },
      { id:2, name:'織田信長',kana:'おだ のぶなが',
        param_buryoku:80,param_seiji:70,param_chiryaku:70,
        img:'00001_m.jpg' },
      { id:3, name:'豊臣秀吉',kana:'とよとみ ひでよし',
        param_buryoku:70,param_seiji:80,param_chiryaku:80,
        img:'00002_m.jpg' },
      { id:4, name:'徳川家康',kana:'とくがわ いえやす',
        param_buryoku:80,param_seiji:90,param_chiryaku:80,
        img:'00003_m.jpg' },
      { id:5, name:'武田信玄',kana:'たけだ しんげん',
        param_buryoku:90,param_seiji:80,param_chiryaku:90,
        img:'00004_m.jpg' },
      { id:6, name:'北条氏康',kana:'ほうじょう うじやす',
        param_buryoku:80,param_seiji:85,param_chiryaku:90,
        img:'00036_m.jpg' },
      { id:7, name:'今川義元',kana:'いまがわ よしもと',
        param_buryoku:83,param_seiji:88,param_chiryaku:80,
        img:'00016_m.jpg' },
      { id:8, name:'浅井長政',kana:'あざい ながまさ',
        param_buryoku:85,param_seiji:60,param_chiryaku:60,
        img:'00018_m.jpg' },
      { id:9, name:'伊達政宗',kana:'だて まさむね',
        param_buryoku:80,param_seiji:80,param_chiryaku:85,
        img:'00009_m.jpg' },
      { id:10, name:'大友宗麟',kana:'おおとも そうりん',
        param_buryoku:77,param_seiji:82,param_chiryaku:78,
        img:'00047_m.jpg' },
      { id:11, name:'毛利元就',kana:'もうり もとなり',
        param_buryoku:90,param_seiji:95,param_chiryaku:96,
        img:'00038_m.jpg' },
      { id:12, name:'三好長慶',kana:'みよし ながよし',
        param_buryoku:70,param_seiji:80,param_chiryaku:80,
        img:'00154_m.jpg' },
      { id:13, name:'島津義弘',kana:'しまづ よしひろ',
        param_buryoku:88,param_seiji:82,param_chiryaku:76,
        img:'00020_m.jpg' },
      { id:14, name:'真田昌幸',kana:'さなだ まさゆき',
        param_buryoku:82,param_seiji:85,param_chiryaku:97,
        img:'00079_m.jpg' },
      { id:15, name:'真田信幸',kana:'さなだ のぶゆき',
        param_buryoku:70,param_seiji:85,param_chiryaku:85,
        img:'00080_m.jpg' },
      { id:16, name:'真田信繁',kana:'さなだ のぶしげ',
        param_buryoku:94,param_seiji:60,param_chiryaku:85,
        img:'00010_m.jpg' },
      { id:17, name:'真田幸隆',kana:'さなだ ゆきたか',
        param_buryoku:77,param_seiji:83,param_chiryaku:89,
        img:'00178_m.jpg' },
      { id:18, name:'上杉景勝',kana:'うえすぎ かげかつ',
        param_buryoku:88,param_seiji:78,param_chiryaku:80,
        img:'00120_m.jpg' },
      { id:19, name:'上杉景虎',kana:'うえすぎ かげとら',
        param_buryoku:70,param_seiji:70,param_chiryaku:70,
        img:'00156_m.jpg' },
      { id:20, name:'北条早雲',kana:'ほうじょう そううん',
        param_buryoku:90,param_seiji:90,param_chiryaku:90,
        img:'00198_m.jpg' },
      { id:21, name:'北条氏政',kana:'ほうじょう うじまさ',
        param_buryoku:70,param_seiji:60,param_chiryaku:65,
        img:'00048_m.jpg' },
      { id:22, name:'徳川秀忠',kana:'とくがわ ひでただ',
        param_buryoku:70,param_seiji:65,param_chiryaku:65,
        img:'00086_m.jpg' },
//      { id:23, name:'徳川家光',img:'' },
//      { id:24, name:'徳川吉宗',img:'' },
//      { id:25, name:'徳川綱吉',img:'' },
//      { id:26, name:'徳川家茂',img:'' },
      { id:27, name:'徳川慶喜',kana:'とくがわ よしのぶ',
        param_buryoku:50,param_seiji:70,param_chiryaku:60,
        img:'img_0.jpeg' },
      { id:28, name:'明智光秀',kana:'あけち みつひで',
        param_buryoku:50,param_seiji:85,param_chiryaku:80,
        img:'00006_m.jpg' },
      { id:29, name:'石田光成',kana:'いしだ みつなり',
        param_buryoku:40,param_seiji:88,param_chiryaku:75,
        img:'00007_m.jpg' },
      { id:30, name:'直江兼続',kana:'なおえ かねつぐ',
        param_buryoku:84,param_seiji:88,param_chiryaku:92,
        img:'00008_m.jpg' },
      { id:31, name:'前田慶次',kana:'まえだ けいじ',
        param_buryoku:96,param_seiji:10,param_chiryaku:40,
        img:'00011_m.jpg' },
      { id:32, name:'本多忠勝',kana:'ほんだ ただかつ',
        param_buryoku:94,param_seiji:55,param_chiryaku:58,
        img:'00017_m.jpg' },
      { id:33, name:'竹中半兵衛',kana:'たけなか はんべえ',
        param_buryoku:50,param_seiji:75,param_chiryaku:99,
        img:'00037_m.jpg' },
      { id:34, name:'黒田官兵衛',kana:'くろだ かんべえ',
        param_buryoku:70,param_seiji:86,param_chiryaku:98,
        img:'00034_m.jpg' },
      { id:35, name:'黒田長政',kana:'くろだ ながまさ',
        param_buryoku:78,param_seiji:75,param_chiryaku:78,
        img:'00070_m.jpg' },
      { id:36, name:'長宗我部元親',kana:'ちょうそかべ もとちか',
        param_buryoku:85,param_seiji:82,param_chiryaku:80,
        img:'00029_m.jpg' },
      { id:37, name:'藤堂高虎',kana:'とうどう たかとら',
        param_buryoku:79,param_seiji:81,param_chiryaku:85,
        img:'00110_m.jpg' },
      { id:38, name:'大谷吉継',kana:'おおたに よしつぐ',
        param_buryoku:65,param_seiji:83,param_chiryaku:87,
        img:'00043_m.jpg' },
      { id:37, name:'加藤清正',kana:'かとう きよまさ',
        param_buryoku:90,param_seiji:81,param_chiryaku:77,
        img:'00033_m.jpg' },
      { id:38, name:'立花宗茂',kana:'たちばな むねしげ',
        param_buryoku:89,param_seiji:70,param_chiryaku:70,
        img:'00035_m.jpg' },
      { id:39, name:'福島正則',kana:'ふくしま まさのり',
        param_buryoku:91,param_seiji:71,param_chiryaku:67,
        img:'00039_m.jpg' },
      { id:40, name:'佐竹義重',kana:'さたけ よししげ',
        param_buryoku:87,param_seiji:80,param_chiryaku:83,
        img:'00053_m.jpg' },
      { id:41, name:'井伊直政',kana:'いい なおまさ',
        param_buryoku:80,param_seiji:67,param_chiryaku:72,
        img:'00105_m.jpg' },
      { id:42, name:'榊原康政',kana:'さかきはら やすまさ',
        param_buryoku:78,param_seiji:70,param_chiryaku:66,
        img:'00104_m.jpg' },
      { id:43, name:'宇佐美定満',kana:'うさみ さだみつ',
        param_buryoku:0,param_seiji:0,param_chiryaku:0,
        img:'00227_m.jpg' },
      { id:44, name:'立花道雪',kana:'たちばな どうせつ',
        param_buryoku:0,param_seiji:0,param_chiryaku:0,
        img:'00191_m.jpg' },
      { id:45, name:'片倉小十郎',kana:'かたくら こじゅうろう',
        param_buryoku:0,param_seiji:0,param_chiryaku:0,
        img:'00040_m.jpg' },
      { id:46, name:'島左近',kana:'しま さこん',
        param_buryoku:0,param_seiji:0,param_chiryaku:0,
        img:'00019_m.jpg' },
      { id:47, name:'浅井久政',kana:'あさい ひさまさ',
        param_buryoku:0,param_seiji:0,param_chiryaku:0,
        img:'00082_m.jpg' },
      { id:48, name:'山内一豊',kana:'やまうち かずとよ',
        param_buryoku:0,param_seiji:0,param_chiryaku:0,
        img:'00099_m.jpg' },
      { id:49, name:'細川忠興',kana:'ほそかわ ただおき',
        param_buryoku:0,param_seiji:0,param_chiryaku:0,
        img:'00122_m.jpg' },
    ];

    return {busyous};    
  }

}
