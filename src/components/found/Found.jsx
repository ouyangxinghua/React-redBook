import React, { Component } from 'react';
import './found.styl';
import CardList from '../cardList/cardList'
// 0.4320
class Found extends Component {
  state = {
    type: 'star',
    listData: {
      leftlist: [
        { 
          userId: '01',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/895282dd-d018-3d8b-b76e-9be85acc7c5f?imageView2/2/w/400/q/50/format/jpg',
          detailPic: [
            'https: //ci.xiaohongshu.com/895282dd-d018-3d8b-b76e-9be85acc7c5f?imageView2/2/w/828/q/82/format/jpg',
            'https: //ci.xiaohongshu.com/a927977c-2faa-386f-a49b-e91c2dd58ff5?imageView2/2/w/828/q/82/format/jpg',
            ' //ci.xiaohongshu.com/5b0a6e39-8be8-3fd7-88f2-4670646035ad?imageView2/2/w/828/q/82/format/jpg',
            'https: //ci.xiaohongshu.com/70981ad4-02c2-363f-9aea-b38581a77d38?imageView2/2/w/828/q/82/format/jpg',
            'https: //ci.xiaohongshu.com/af94e496-07fb-3966-a363-714b24f68b6f?imageView2/2/w/400/q/50/format/jpg',
            'ttps: //ci.xiaohongshu.com/11fd2c88-6fc8-3f8f-9aa7-a27a6549be98?imageView2/2/w/400/q/50/format/jpg'
          ],
          title: '来一口甜丝丝的半熟奶杏橘果酱！！～',
          author: '是啾一呐',
          avatar: 'https://img.xiaohongshu.com/avatar/5a7753acd2c8a562cbb7adc4.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 145
        },
        { 
          userId: '03',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/d2fdd179-28c3-3233-a929-a6551065afba?imageView2/2/w/400/q/50/format/jpg',
          title: '明星💕杨幂的近期穿搭，荧光色也太夏天了吧',
          author: '客邻尚品',
          avatar: 'https://img.xiaohongshu.com/avatar/8c105007-e167-4b93-9407-cb910faf1698.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 127
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
          userId: '02',
          isVideo: false,
          headPic: ' //ci.xiaohongshu.com/9357c7b4-0ea7-3a6f-8070-0e0bbb042541?imageView2/2/w/400/q/50/format/jpg',
          title: '暑期逆袭‼️八款学习App提升自我超强学习app',
          author: '阿媛酱',
          avatar: 'https://img.xiaohongshu.com/avatar/5c59710eeb5f8f0001f2c23d.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 182
        },
        { 
          userId: '04',
          isVideo: true,
          headPic: ' //ci.xiaohongshu.com/59f9e9b7-0d48-38f7-b32c-bf50a6f4c1ed?imageView2/2/w/400/q/50/format/jpg',
          videoUrl: 'http: //v.xiaohongshu.com/8ba9ecbfc395b3fc561639783860445b24b24670?sign=6345c2b45309693dc2b16cffd033b058&t=5d2b5180',
          title: '法拉利声浪炸街精彩合辑~',
          author: '魅力哥（豪车街拍）',
          avatar: 'https://img.xiaohongshu.com/avatar/5d056afffcb07400013b7717.jpg@80w_80h_90q_1e_1c_1x.jpg',
          starNum: 33
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
    }
  }
  render() {
    const { listData, type } = this.state
    return (
      <div className="Found-container">
        <CardList list={listData} type={type}/>
      </div>
    );
  }
}

export default Found