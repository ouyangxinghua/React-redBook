import React, { Component } from 'react';
import { fetchGet } from '../../api/axios'
import CartList from '../cardList/cardList';
import Swiper from 'swiper/dist/js/swiper.js'
import './city.styl';

class City extends Component {
  state = {
    // type: 'star',
    listData1: {},
    listData: {
      leftlist: [
        {
          userId: '21',
          isVideo: false,
          headPic: '//ci.xiaohongshu.com/9ba889d4-56c1-373c-918b-2bba54e35570?imageView2/2/w/400/q/50/format/jpg',
          detailPic: [
            'https://ci.xiaohongshu.com/9ba889d4-56c1-373c-918b-2bba54e35570?imageView2/2/w/828/q/82/format/jpg',
            'https://ci.xiaohongshu.com/4cb824f9-b13a-32f7-b461-07c6f77ae323?imageView2/2/w/828/q/82/format/jpg',
            'https://ci.xiaohongshu.com/506a4b56-d854-3cec-acd1-24449f784634?imageView2/2/w/828/q/82/format/jpg',
            'https://ci.xiaohongshu.com/9d8ef04e-8b04-34f5-85b5-70ed7d5b787c?imageView2/2/w/828/q/82/format/jpg',
            'https://ci.xiaohongshu.com/32407a9f-8115-35a6-9389-c0ebff0158fa?imageView2/2/w/828/q/82/format/jpg',
            'https://ci.xiaohongshu.com/7ae4e19a-6730-3772-a457-dbf0b080fff8?imageView2/2/w/400/q/50/format/jpg'
          ],
          title: '新加坡当地人最爱🇸🇬一定要来吃这家海鲜',
          author: '痣多欣',
          avatar: 'https://img.xiaohongshu.com/avatar/5d01928b1c452a00016b9fbd.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 59
        },
        {
          userId: '23',
          isVideo: false,
          headPic: '//ci.xiaohongshu.com/4451e75e-490c-3c9b-861b-ed8cc46f181f?imageView2/2/w/400/q/50/format/jpg',
          title: '南昌探店｜𝐶𝑖𝑛𝑠法甜🍰繁忙中的温柔小曲',
          author: '马马马Annie',
          avatar: 'https://img.xiaohongshu.com/avatar/5cac9aedd21b670001c4668e.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 45
        },
        {
          userId: '05',
          isVideo: true,
          headPic: ' //ci.xiaohongshu.com/12aefae4-1d25-33de-9105-00bbd2409a39?imageView2/2/w/400/q/50/format/jpg',
          videoUrl: 'http: //v.xiaohongshu.com/10830b98138c6ed127c6b99d0be640bbb31fe2ae?sign=fe5943f8fdd5f193db4c77db10b77280&t=5d2b5180',
          title: '腿部日常训练必做的六个动作',
          author: '帅soserious',
          avatar: 'https://img.xiaohongshu.com/avatar/5c24ad256d224f00015ca556.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 203
        },
        {
          userId: '07',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/838d9082-44be-30c6-824a-6d09119c96bd?imageView2/2/w/400/q/50/format/jpg',
          title: '#selflove人生自信力#',
          author: '廖蹄花',
          avatar: 'https://img.xiaohongshu.com/avatar/5b7a22fc40461d0001d3c891.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 93
        },
        {
          userId: '09',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/5411fea8-e4b5-31f7-878a-53e202b95b74?imageView2/2/w/400/q/50/format/jpg',
          title: '我拥有的最便宜的奢侈品包包',
          author: '贫民窟吕孩不许哭',
          avatar: 'https://img.xiaohongshu.com/avatar/5cfb639b75649b00013637b4.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 135
        },
        {
          userId: '11',
          isVideo: true,
          headPic: ' //ci.xiaohongshu.com/edb2cfde-8083-38da-b6e9-7be04462c61c?imageView2/2/w/400/q/50/format/jpg',
          videoUrl: 'http: //v.xiaohongshu.com/9aaf9a949eafe7445f1f25879e48af487aec89ce?sign=ef72ac67e20d39f3f27ca7ef13a1bf04&t=5d2b5180',
          title: '剪头发了',
          author: '美妆小丸子',
          avatar: 'https://img.xiaohongshu.com/avatar/5bd877e47cd91400016a68bf.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 1342
        },
        {
          userId: '13',
          isVideo: true,
          headPic: ' //ci.xiaohongshu.com/1da580ce-6b19-31c2-8cba-257c50092536?imageView2/2/w/400/q/50/format/jpg',
          videoUrl: 'http: //v.xiaohongshu.com/8ba9ecbfc395b3fc561639783860445b24b24670?sign=6345c2b45309693dc2b16cffd033b058&t=5d2b5180',
          title: '蝴蝶少女✨超美珠光大盒史莱姆',
          author: '龙龙:D',
          avatar: 'https://img.xiaohongshu.com/avatar/5d1ab9799e8ffa00013baaab.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 94
        },
        {
          userId: '15',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/cf6b85d3-baa6-3693-8489-84fdf0420fac?imageView2/2/w/400/q/50/format/jpg',
          title: '💓今夏最爱💓100元的单鞋能穿一个夏！！！',
          author: 'Style J',
          avatar: 'https://img.xiaohongshu.com/avatar/5b973af4615e317d1c67a1f4.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 2679
        },
        {
          userId: '17',
          isVideo: true,
          headPic: ' //ci.xiaohongshu.com/03f2d72c-890e-38dd-a504-8f2e5974027b?imageView2/2/w/400/q/50/format/jpg',
          videoUrl: 'http: //v.xiaohongshu.com/8ba9ecbfc395b3fc561639783860445b24b24670?sign=6345c2b45309693dc2b16cffd033b058&t=5d2b5180',
          title: '重庆美食攻略|十次路过九次排队的龙虾店',
          author: '果小姐啊',
          avatar: 'https://img.xiaohongshu.com/avatar/5b2be922d1d3b90dd27e91df.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 94
        },
        {
          userId: '19',
          isVideo: true,
          headPic: ' //ci.xiaohongshu.com/a1b92251-2d98-353d-addb-0372cd9cff29?imageView2/2/w/400/q/50/format/jpg',
          videoUrl: 'http: //v.xiaohongshu.com/8ba9ecbfc395b3fc561639783860445b24b24670?sign=6345c2b45309693dc2b16cffd033b058&t=5d2b5180',
          title: '小仙女驾到🧚‍♀️Eva感受中国传统服装魅力！',
          author: '混血宝贝Eva',
          avatar: 'https://img.xiaohongshu.com/avatar/5b8e843cff6a9f000134ff34.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 159
        },
      ],
      rightList: [
        {
          userId: '22',
          isVideo: false,
          headPic: '//ci.xiaohongshu.com/de6fd14e-a285-3f4e-b465-774b578511c9?imageView2/2/w/400/q/50/format/jpg',
          title: '三亚网红山海天大酒店 傲途格精选（上篇）',
          author: '姗杉ss_',
          avatar: 'https://img.xiaohongshu.com/avatar/5cb3cbf73f79890001f2bdcb.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 47
        },
        {
          userId: '24',
          isVideo: false,
          headPic: '//ci.xiaohongshu.com/48373b45-31e3-38ce-86f9-ee331137c227?imageView2/2/w/400/q/50/format/jpg',
          title: '3️⃣0️⃣年老字号陈添记❗️广州最好吃的鱼皮😍',
          author: '暴走的美少女💓',
          avatar: 'https://img.xiaohongshu.com/avatar/5d280a47e7e7c300016531a3.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 104
        },
        {
          userId: '06',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/3632cef3-7a8c-3ed9-afef-88416c66ea89?imageView2/2/w/400/q/50/format/jpg',
          title: '好书推荐.📖 弘一法师 人生没什么不可放下',
          author: 'TVXQai朱朱',
          avatar: 'https://img.xiaohongshu.com/avatar/5b549b9414de4156a6b8305c.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 299
        },
        {
          userId: '08',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/f0f80264-ad99-3e8f-ad40-eb354878d692?imageView2/2/w/400/q/50/format/jpg',
          title: '蜜桃晓喵的最佳马甲线训练方法',
          author: '🍑蜜桃晓喵',
          avatar: 'https://img.xiaohongshu.com/avatar/5d25e948be50b40001de2cc1.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 61
        },
        {
          userId: '10',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/40db6085-5d7f-3f3b-9c49-1eb55e8c4b01?imageView2/2/w/400/q/50/format/jpg',
          title: '家庭第二辆车，30岁礼物，宝马X3',
          author: '方妖妖妖怪',
          avatar: 'https://img.xiaohongshu.com/avatar/5b8b5b2ac179770001514ebd.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 59
        },
        {
          userId: '12',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/82ef8cfe-14ca-3313-9f98-05ff234f0c08?imageView2/2/w/400/q/50/format/jpg',
          title: '头胎10分钟超快顺产🔊感谢自己孕期做的努力，原来生孩子并没有想象中那么难！！ ',
          author: '蔓妃玉',
          avatar: 'https://img.xiaohongshu.com/avatar/5d19ca90882bea000192490c.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 435
        },
        {
          userId: '14',
          isVideo: true,
          headPic: ' //ci.xiaohongshu.com/ecbc5976-88a0-3608-8cd3-8dca09100838?imageView2/2/w/400/q/50/format/jpg',
          videoUrl: 'http: //v.xiaohongshu.com/8ba9ecbfc395b3fc561639783860445b24b24670?sign=6345c2b45309693dc2b16cffd033b058&t=5d2b5180',
          title: '几十秒教会你红烧鲅鱼，一家人没吃够',
          author: '火哥美食🔥灿灿',
          avatar: 'https://img.xiaohongshu.com/avatar/5bd447d40ab0b900018617e0.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 574
        },
        {
          userId: '16',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/39c6e790-4211-31a4-a720-b54799210542?imageView2/2/w/400/q/50/format/jpg',
          title: '【考研倒计时167天】',
          author: 'Dear whaphong',
          avatar: 'https://img.xiaohongshu.com/avatar/5b03bcd6b46c5d6172518d77.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 64
        },
        {
          userId: '18',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/17862ded-c5c3-3e5a-8de9-a4dfab60d25e?imageView2/2/w/400/q/50/format/jpg',
          title: '日系穿搭|开挂了的优衣库',
          author: 'cici&mila',
          avatar: 'https://img.xiaohongshu.com/avatar/5d17077be24ebf000179d83a.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 441
        },
        {
          userId: '20',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/10ece43e-3ed0-3a06-8a0d-6fcdded28039?imageView2/2/w/400/q/50/format/jpg',
          title: '《陈翔六点半之重楼别》爱奇艺正在热映中！',
          author: '陈翔六点半',
          avatar: 'https://img.xiaohongshu.com/avatar/5bad947bd3fb4a0001de8ce6.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 268
        }
      ]
    },
    header: [
      {
        url: 'shiwu',
        title: '餐厅'
      },
      {
        url: 'xaiwuxha',
        title: '下午茶'
      },
      {
        url: 'shan',
        title: '周边游'
      },
      {
        url: 'scene',
        title: '景点'
      },
      {
        url: 'bianmei',
        title: '变美'
      }
    ]
  }
  render() {
    const { listData, type, listData1, header } = this.state
    return (
      <div className="city">
        <div className="header-items">
          {
            header.map((item, index) => {
              return (
                <div className="header-item" key={index}>
                  <div className="header-item__flex">
                    <img src={[require(`../../assets/city/${item.url}.png`)]} alt="" />
                    <span>{item.title}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="city-cartlist">
          <CartList list={listData} type={listData1} />
        </div>
      </div>
    );
  }
}

export default City