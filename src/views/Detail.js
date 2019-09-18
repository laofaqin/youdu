import React, { Component } from "react";
import api from "../api/api_youdu";
import style from "../views/Detail.module.css";
import { Button } from "antd";

export default class Detail extends Component {
  state = {
    detail: "",
    author: [],
    jianjie: [
      "年轻有为的历史学者莱茵，因为参加一个苏美尔遗迹的考古活动，被卷入了神秘领域诡谲的纷争，为了在真实世界中自保不得不成为梦境术士。他将见证五大学派的先贤们拯救人类的伟大过往，一条看似从落后通往先进，实则野蛮暴力，充满前人骸骨、未知恐怖的无知无畏之路。当然，前提是他先活下来。（一个发生在类费伦奇幻大陆上的克系故事。因为不够正统，所以不打DND的标签了。并不是血源的同人，但有个核心设定是从中借鉴的。）",
      "是不是个人都想攻略我？这无聊的攻略游戏，不知道要陪这些愚蠢的人玩到什么时候………………什么？地宫之后又出现了深渊？！！还有完没完了！！啥时候才能过上安静的太平日子，当一个无忧无虑的吃货……且看一只怠惰的肥兔子如何主宰深渊，拯救世界！",
      "在自称卡俄斯的伟大意志之下所存在的世界，从地狱的奴隶到帝国的王子，从机甲战舰的技到毁天灭地的魔法，从混乱无序的恶魔到恪守教条的圣灵，每个生命都在用自己的方法写着卡俄斯寓言",
      "伟大的牧莱克休斯·阿斯提尔！阿斯提尔家主！北境守护！圣法兰克公爵！矮人与精灵永的朋友！兽人驱逐者！巨魔杀手！恶魔抵御者！亡灵安抚者！欧罗巴大陆所有种族的启明星。。。",
      "享受每场酣畅淋漓的厮杀，饮下每杯甘醇美味的蜜酒，发出每声响彻灵魂的怒嚎，拥抱每个值得等待的灵魂，失落在多元宇宙角落中的特拉瑞姆世界中，突然闯进的一道惊虹。这是血与酒的故事，这是永世神选马格努斯的故事",
      "卡拉迪亚的战火从未停止过，游吟诗人传唱着各种神话、诗歌，罗德不只会唱歌，流连在妇之中，与领主们谈笑风生，斯瓦迪亚来的游吟诗人，将会改变整个大陆的格局",
      "在一次奇怪的穿越之中，造就出了一只不太平凡的小龙。而这个不平凡的小龙，在异界大陆上的旅行，自然也处处充满着惊险与刺激。不过这位小龙的运气，还真不是一般的好！“咦，好大的豹子！”“人工智能？神马东西？你的声音是不是在cosplay光X系列里的X塔娜嗷？”“窝内个去！这里特么的居然有鬼！！！”“嗷！你们几个，能不能别老是咬我的尾巴玩啊！？”在一串的惊叫声之中，这条充满正能量的小龙，开始了在异界大陆上不同寻常的奇幻旅行~",
      "在摸了17个小时的鱼之后，成功搞丢了自己的工作顺带连自己的小命都搞丢了得知这一切的信浓，脸上笑嘻嘻，心里XXX用着17个小时的工作时间，来疯狂搞事吧！",
      "封面暂定...有侵权立马删，大家多发点评论呀，单机的话很难写出好情节的（趴）你知道割叽包治百病么？在光明的中世纪训练有素的医生可以治愈包括癌症在内的一切疾病，只要你舍得某些身体部位...你知道中世纪的星界传送功能么？在光明的中世纪一个在耶路撒冷对抗异教徒的将军可以通过传送直接一秒回到英格兰...在群星齐聚的混乱但是光明（认真）的中世纪，一个身上流淌着十几种种族的血液的半妖少年会掀起怎么样的波澜呢？",
      "醒来之后，发现自己成为了战锤世界中的吸血鬼伯爵，还有了一位“美丽”的吸血鬼夫人看主角成为弗拉德.冯.卡斯坦因伯爵后怎样与西格玛帝国，矮人等势力周旋，并成为世界主"
    ]
  };

  render() {
    return (
      <div>
        <div className={style.BooklibraryShow_Left}>
          <div className={style.BookContent}>
            <div className={style.BookContentB}>
              <div className={style.pic}>
                <img src={this.state.detail.coverImg} />
              </div>

              <div className={style.title}>
                <span>{this.state.author[0]}</span>{" "}
                <em>{this.state.author[1]} 著</em>
              </div>

              <div className={style.label}>
                <ul>
                  <li className={style.a}>连载中</li>
                  <li>签约</li>
                  <li>幻想</li>
                  <li>西幻</li>
                  <li>贪婪洞窟</li>
                  <li>女主是个魔鬼</li>
                </ul>
              </div>

              <div className={style.font}>
                <span>{this.state.detail.price}</span>{" "}
                字&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{this.state.detail.quantity}</span>{" "}
                点击&nbsp;&nbsp;&nbsp;&nbsp;<span>123</span>{" "}
                收藏&nbsp;&nbsp;&nbsp;&nbsp;本站首发
              </div>

              <div className={style.synopsis}>
                <ul className={style.synopsisTop}>
                  <li className={style.active}>作品简介</li>
                </ul>
              </div>

              <div className={style.synopsisCon}>
                <p>
                  {
                    this.state.jianjie[
                      Math.floor(Math.random() * this.state.jianjie.length)
                    ]
                  }
                </p>
              </div>
              
              <hr/>

              <Button type="primary" 
                      className={style.btn} 
                      onClick={this.back.bind(this)}
              >
                返回
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  back(){
    this.props.history.goBack()
  }

  componentDidMount() {
    // console.log(this.props.match.params.id);
    let id = this.props.match.params.id;
    // let arr=[]
    api.getProDetail(id).then(data => {
      // console.log(data.data);
      // console.log(JSON.parse(data.data.descriptions))
      // console.log(data.data.descriptions);

      this.setState({
        detail: data.data,
        author: data.data.descriptions.split("/")
      });
    });
  }
}
