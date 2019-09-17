import React, { Component } from 'react'
import { Select,Button,Card } from 'antd';
import api from '../api/api_qin';
import style from './Add.module.css'

const {Meta} =Card;
const { Option } = Select;
let name='';
function handleChange(value) {
    console.log(value);
    name=value
  return value
}
    // 西幻传说,东方奇幻,游戏异界,科幻时空,都市逸闻,历史军事,克苏鲁,新九州,龙与地下城  

class Add extends Component {
    state={
        name:'',
        books:[]
    }
    render () {
        
        return (
            <div>
                <div style={{margin:"10"}}>
                    <Select defaultValue="请选择书籍类型" style={{ width: 250,marginRight:50 }} onChange={handleChange}>
                        <Option value="西幻传说">西幻传说</Option>
                        <Option value="东方奇幻">东方奇幻</Option>
                        <Option value="游戏异界">游戏异界</Option>
                        <Option value="科幻时空">科幻时空</Option>
                        <Option value="都市逸闻">都市逸闻</Option>
                        <Option value="历史军事">历史军事</Option>
                        <Option value="克苏鲁">克苏鲁</Option>
                        <Option value="新九州">新九州</Option>
                        <Option value="龙与地下城">龙与地下城</Option>
                    </Select>
                    <Button type="primary" shape="round" icon="upload" size='large'onClick={this.add.bind(this)}>添加</Button>
                </div>
                <hr/>
                {this.state.books.map((item,index)=>{
                    let name=item.descriptions.split('/')
                    return(
                        <Card 
                            className={style.book}
                            key={index}
                            hoverable={true}
                            style={{ width: 140 }}
                            cover={<img alt={name[0]} src={item.coverImg} title={name[0]}
                                style={{ width: 140,height:180}}/>}
                        >
                            <Meta title={"《"+name[0]+"》"} description={name[1]+' 著'}/>
                        </Card>
                    )
                })}
            </div>
        )
    }
    add(){
        //书本
        let book=[
                {
                    name:'猎魔传奇',
                    url:'http://alioss.youdubook.com/uploads/20181205/ac0c03d8e7d8e6193698c32339f32fb7.jpg'
                },
                {
                    name:'大唐宦',
                    url:'http://alioss.youdubook.com/uploads/20190719/53becdd0afcf62045ac3a781636e64c7.jpg'
                },
                {
                    name:'狼骑旅行日志',
                    url:'http://alioss.youdubook.com/uploads/20190807/f3a3b17ab7500cfe4344ea4b1c98ff17.jpg'
                },
                {
                    name:'塞伦西亚的渡鸦',
                    url:'http://alioss.youdubook.com/uploads/20190810/83982f40ac72ce9271476dc0e424c7dd.jpg'
                },
                {
                    name:'公主与女巫',
                    url:'http://alioss.youdubook.com/uploads/20190707/5a558a3c0eed8c894bb6525b22e151c5.jpg'
                },
                {
                    name:'变异的万法之书',
                    url:'http://alioss.youdubook.com/uploads/20181205/8e8bbf3f9769b75cf19ff62ac8301460.jpg'
                },
                {
                    name:'来自深渊的暴食兔',
                    url:'http://alioss.youdubook.com/uploads/20190906/e482e6242b093ce5e69045351f4da3e2.jpg'
                },
                {
                    name:'西汉窃龙',
                    url:'http://alioss.youdubook.com/uploads/20190904/a7c43cb4f25242aad07e1433d5109af2.jpg'
                },
                {
                    name:'噩梦边境的猎巫人',
                    url:'http://alioss.youdubook.com/uploads/20190707/ca36951287ab10e7dbabbb543501fa5e.jpg'
                },
                {
                    name:'诡异侦探案件簿',
                    url:'http://alioss.youdubook.com/uploads/20190611/229836ed55da8168972c763fc4ae4a19.jpg'
                },
                {
                    name:'无灵',
                    url:'http://alioss.youdubook.com/uploads/20190819/967beb082fcbda4e0510b8032a3bef5f.jpg'
                },
                {
                    name:'大唐键侠',
                    url:'http://alioss.youdubook.com/uploads/20190908/1d6b6e418b32af2b56c5bc09307377f3.jpg'
                },
                {
                    name:'深渊研究手册',
                    url:'http://alioss.youdubook.com/uploads/20190713/5c533270448b03fe758ab2884ffceb60.jpg'
                },
                {
                    name:'我，大佬！',
                    url:'http://alioss.youdubook.com/uploads/20190908/8a243935f7e68d022b114fb1a4389c05.jpg'
                },
                {
                    name:'苍白的正义',
                    url:'http://alioss.youdubook.com/uploads/20190905/9c9174d23ffb2fda2377f7d979a4845e.png'
                },
                {
                    name:'我，死了么外卖员',
                    url:'http://alioss.youdubook.com/uploads/20190729/fd9dadab79073815bff9013dd5f934a2.jpg'
                },
                {
                    name:'他改变了拜占庭',
                    url:'http://alioss.youdubook.com/uploads/20190724/ab171b282c6bbe66f3537316328e2234.jpg'
                },
                {
                    name:'我是大唐第一生产力',
                    url:'http://alioss.youdubook.com/uploads/20190726/f6c854f36aae76c16b060fcf84d96161.jpg'
                },
                {
                    name:'架空：亚洲风云1690',
                    url:'http://alioss.youdubook.com/uploads/20190719/f0d3b357ebcd51f86e29f6367e87849f.jpg'
                },
                {
                    name:'人外特遣队',
                    url:'http://alioss.youdubook.com/uploads/20190724/d66ddf001fb2680b7c2b5bb6b7417eb5.png'
                },
                {
                    name:'侠非侠',
                    url:'http://alioss.youdubook.com/uploads/20190819/87b8e768c8c3756035d89b9769134640.png'
                },
                {
                    name:'乾元列英传',
                    url:'http://alioss.youdubook.com/uploads/20190819/7fad32c72fa4c3268be5705dbb6f2dbf.jpg'
                },
                {
                    name:'听剑',
                    url:'http://alioss.youdubook.com/uploads/20190627/15bbc9709b1f7a35763686ae10a898c8.png'
                },
                {
                    name:'荒旅之途',
                    url:'http://alioss.youdubook.com/uploads/20181219/c5405db4d2b36fcd530fa574c9b9fa55.jpg'
                },
                {
                    name:'白鹤记',
                    url:'http://alioss.youdubook.com/uploads/20181008/4238139c07a3d673014d1d14199e6a23.jpg'
                },
                {
                    name:'简单的神仙',
                    url:'http://alioss.youdubook.com/uploads/20190218/6e975be12a9d6ac01667a54bab0a99e0.jpg'
                },
                {
                    name:'旧日游戏',
                    url:'http://alioss.youdubook.com/uploads/20180804/e754db7015e3ada3121c983d8945e9d3.jpg'
                },
                {
                    name:'这骰子有毒',
                    url:'http://alioss.youdubook.com/uploads/20180606/2da8d5e5fef464c447704feae77eca91.jpg'
                },
                {
                    name:'他者之神与必朽的盐',
                    url:'http://alioss.youdubook.com/uploads/20180804/7770cfe8f6aa41737490162816c6b4f1.jpg'
                },
                {
                    name:'新英格兰小镇之下',
                    url:'http://alioss.youdubook.com/uploads/20180607/1a3d7bdc4df68956d1494133adae6225.jpg'
                },
                {
                    name:'自外而来',
                    url:'http://alioss.youdubook.com/uploads/20180626/4967233cacfafa4a0228ba65982848a8.jpg'
                },
                {
                    name:'远古的民族',
                    url:'http://alioss.youdubook.com/uploads/20180626/550bc622d890cf927e40cfb027379106.jpg'
                },
                {
                    name:'星之彩',
                    url:'http://alioss.youdubook.com/uploads/20180531/425fb8898df3a5e98df7998045f60728.jpg'
                },
                {
                    name:'我献祭人心一颗',
                    url:'http://alioss.youdubook.com/uploads/20180911/611537efd48950e7a92ead9d73ed837e.jpg'
                },
                {
                    name:'克苏鲁的呼唤',
                    url:'http://alioss.youdubook.com/uploads/20180530/8e4af54589719b153b844f49e38a70f4.jpg'
                },
                {
                    name:'古神重修录',
                    url:'http://alioss.youdubook.com/uploads/20180412/c77495b3c57c7d9e3b645a8ec50ab437.jpg'
                },
                {
                    name:'七王权杖',
                    url:'http://alioss.youdubook.com/uploads/2017-03-14/1708093908.jpg'
                },
                {
                    name:'琉璃魔杖',
                    url:'http://alioss.youdubook.com/uploads/20190720/2e1defd9d27ccde572e6abe9270f4e80.jpg'
                },
                {
                    name:'未燃尽的篇章',
                    url:'http://alioss.youdubook.com/uploads/2017-03-24/1823272357_AUTO.jpg'
                },
                {
                    name:'归乡',
                    url:'http://alioss.youdubook.com/uploads/20190618/98e0f7ecf198f4dc044b1be9ec9ff774.jpg'
                },
                {
                    name:'诺德征服',
                    url:'http://alioss.youdubook.com/uploads/20181228/1864b853d5ed0270f70cf36911b2a803.jpg'
                }
            ]
        //作者
        let arrAuthor =[
            '北山冬青','白羽','泛舟客','一磅炮','快乐的蒜','马铃鼠','雪海深愁','黑羊头','银灰冰霜','艾格纳','归兮北冥','酸黄瓜味','凡尘','北走OD','家徒四壁','黑色小丑','大漠孤烟','远东第三','星芒','老猫','蓝先生','八云里','蓝星枫叶','七星','沐秋'
        ]
        let onebook=book[Math.floor(Math.random()*book.length)]
        if(name==''){
            alert('请选择书籍类型');
            return
        }
        let params = {
            name :name  ,       //书籍类别    
            descriptions : `${onebook.name}/${arrAuthor[Math.floor(Math.random()*arrAuthor.length)]}`,
            quantity:Math.floor(Math.random()*500000),
            price:Math.floor(Math.random()*1000000),
            coverImg :onebook.url,
            productCategory : "5d80936cfe04943d5e53fc76"
        }
        console.log(params);
        let arr=this.state.books
        api.addpro(params).then(res=>{
            console.log(res.data);
            arr.unshift(res.data)
            this.setState({
                books:arr
            })
        })
    }
}

export default Add