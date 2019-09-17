import React, { Component } from "react";
import api from '../api/api_youdu';
import style from "../views/Detail.module.css";

export default class Detail extends Component {
  state={
    detail:'',
  }
  render() {
    return (
      <div>
        <div className={style.BooklibraryShow_Left}>
          <div className={style.BookContent}>
            <div className={style.BookContentB}>
              <div className={style.pic}>
                <img src={this.state.detail.coverImg}/>
              </div>

              <div className={style.title}>
                <span>圣女之眼</span> <em>巫马笑笑 著</em>
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
                <span>{this.state.detail.price}</span> 字&nbsp;&nbsp;&nbsp;&nbsp;<span>{this.state.detail.quantity}</span>{" "}
                点击&nbsp;&nbsp;&nbsp;&nbsp;<span>123</span>{" "}
                收藏&nbsp;&nbsp;&nbsp;&nbsp;本站首发
              </div>

              <div className={style.synopsis}>
                <ul className={style.synopsisTop}>
                  <li className={style.active}>作品简介</li>
                </ul>
              </div>

              <div className={style.synopsisCon}>
                <p>年轻有为的历史学者莱茵，因为参加一个苏美尔遗迹的考古活动，
                  被卷入了神秘领域诡谲的纷争，为了在真实世界中自保不得不成为梦境术士。
                  他将见证五大学派的先贤们拯救人类的伟大过往，一条看似从落后通往先进，
                  实则野蛮暴力，充满前人骸骨、未知恐怖的无知无畏之路。当然，前提是他先活下来。
                  （一个发生在类费伦奇幻大陆上的克系故事。因为不够正统，所以不打DND的标签了。
                  并不是血源的同人，但有个核心设定是从中借鉴的。）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount(){
    let id = "5d7f3f3eb91b9569e466f357"
    // let arr=[]
    api.getProDetail(id).then((data)=>{
      console.log(data.data)
      // console.log(JSON.parse(data.data.descriptions))
      this.setState({detail:data.data})
    })
  }
}
