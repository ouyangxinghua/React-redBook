import React, { Component } from 'react';
import CartList from '../cardList/cardList'
import './focus.styl';

class Focus extends Component {
  state = {
    listData: {
      leftlist: [
        {
          userId: '31',
          isVideo: false,
          headPic: '//ci.xiaohongshu.com/8600a68f-0d3d-3377-8d82-712699c58975?imageView2/2/w/400/q/50/format/jpg',
          detailPic: [
            'https://ci.xiaohongshu.com/8600a68f-0d3d-3377-8d82-712699c58975?imageView2/2/w/828/q/82/format/jpg',
            'https://ci.xiaohongshu.com/24177354-fd15-3db6-b75c-02c1af912ecf?imageView2/2/w/828/q/82/format/jpg',
            'https://ci.xiaohongshu.com/77f30a7b-2df2-3372-b251-99da6f951eb9?imageView2/2/w/828/q/82/format/jpg',
            'https://ci.xiaohongshu.com/82f17f5d-d9e7-30fc-9703-7c636ccc6b86?imageView2/2/w/828/q/82/format/jpg',
            'https://ci.xiaohongshu.com/17d6c642-1b6e-3a88-aba7-1a80991d312b?imageView2/2/w/828/q/82/format/jpg',
            'https://ci.xiaohongshu.com/f23dc905-70fc-3806-a219-26c37658c712?imageView2/2/w/828/q/82/format/jpg'
          ],
          title: '泫雅女神同款/轻松穿出复古潮流范',
          author: '球球你了-',
          avatar: 'https://img.xiaohongshu.com/avatar/5ab8eb09d1d3b920a2aed85a.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 879
        },
        {
          userId: '33',
          isVideo: false,
          headPic: '//ci.xiaohongshu.com/47da8fc5-accf-39c0-85f8-47753a16bb10?imageView2/2/w/400/q/50/format/jpg',
          title: 'Jennie今日Ins私服，粉色系的香奈儿女孩~',
          author: '明星私服Daily',
          avatar: 'https://img.xiaohongshu.com/avatar/5be07ed1bbf6bc0001ae28fc.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 35
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
          userId: '32',
          isVideo: true,
          headPic: '//ci.xiaohongshu.com/e6124d2d-e6ab-33b1-af7e-d5ec03d794cf?imageView2/2/w/400/q/50/format/jpg',
          videoUrl: 'http://v.xiaohongshu.com/cd773ed105fd44c41582e6e09dcd73f858615b1c?sign=5924de0e35508f800349f51be7d11c56&t=5d2b5180',
          title: '中国手机vs美国手机',
          author: '泥大爷测评',
          avatar: 'https://img.xiaohongshu.com/avatar/5d15807dd66106000175b055.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 7
        },
        {
          userId: '34',
          isVideo: false,
          headPic: '//ci.xiaohongshu.com/37a44846-d18f-3725-bcc7-d056ed1d2324?imageView2/2/w/400/q/50/format/jpg',
          title: '律师行定制商务便当🍱任务顺利完成✅',
          author: '真田大叔的街边美食',
          avatar: 'https://img.xiaohongshu.com/avatar/5ba1b143018ccf0001b1029e.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 64
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
        avatar: 'touxiang7',
        url: 'ouyang',
        title: '发布 hey'
      },
      {
        avatar: 'touxiang1',
        url: '2',
        title: 'hey'
      },
      {
        avatar: 'touxiang2',
        url: '3',
        title: 'hey 记录此刻'
      },
      {
        avatar: 'touxiang3',
        url: '4',
        title: 'hey 减肥打卡'
      },
      {
        avatar: 'touxiang4',
        url: '5',
        title: 'hey 心情打卡'
      },
      {
        avatar: 'touxiang5',
        url: '6',
        title: 'hey 学习打卡'
      },
      {
        avatar: 'touxiang6',
        url: '7',
        title: 'hey 自拍打卡'
      }
    ]
  }
  render() {
    const { listData, header } = this.state;
    return (
      <div className="focus-container">
        <div className="focus-items">
          {
            header.map((item, index) => {
              return (
                <div className="focus-item" key={index}
                style={index === 0 ? {marginRight: '15px'} : {border: '2px solid yellow'}}>
                  <div className="focus-item__flex">
                    <img src={[require(`../../assets/focus/${item.url}.jpg`)]} className="focus-bgc" alt="" />
                    <img src={[require(`../../assets/focus/${item.avatar}.jpg`)]} alt="" className="focus-avatar"/>
                    <span>{item.title}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="focus-cart">
          <CartList list={listData} />
        </div>
      </div>
    );
  }
}

export default Focus