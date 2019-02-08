import lwf from '../img/lwf.jpg'
import ws from '../img/ws.jpeg'
import sk from '../img/sk.jpeg'
import jx from '../img/jx.jpg'
import ztsx from '../img/ztsx.jpeg'
import tz from '../img/tz.jpeg'
const Hobby = {
    hobbyPersistence: [
        {hid: 0, title: "老王妃", meta: "和后面某条不可描述的相关", description: "捧花接机...", imgsrc: lwf, knowledgeSrc:'https://www.facebook.com/profile.php?id=100009823812893'},
        {hid: 1, title: "王水", meta: "圣培露", description: "从redpath到panniza, 世界上王水最好喝", imgsrc: ws, knowledgeSrc:'https://www.sanpellegrino.com/ca/en'},
        {hid: 2, title: "烧烤", meta: "济南村头烧烤", description: "后头就是村里头村改，就村改把人地占了...人这烤串烤的很好，真是味道好，我家邻居，一星期七天，能有四天在那，就在那吃串。", imgsrc: sk, knowledgeSrc:'https://zh.wikipedia.org/wiki/%E6%B5%8E%E5%8D%97%E5%B8%82'},
        {hid: 3, title: "交响乐", meta: "Place Des Arts", description: "comp 251 quiz? 不存在的, 还是要跟脸神去看歌剧的. 买票的时候也没想到这时候啊! ", imgsrc: jx, knowledgeSrc: "https://placedesarts.com/"},
        {hid: 4, title: "躺着", meta: "家里, 可能是跟脸神", description: "以下内容不可描述", imgsrc: tz, knowledgeSrc: "https://www.facebook.com/profile.php?id=100009823812893"},
        {hid: 5, title: "主体思想", meta: "金正恩是最通晓国际局势的人", description: "别人在睡觉的时候，我问导游要了主体思想的书，学习一个", imgsrc: ztsx, knowledgeSrc: "http://www.kcna.kp"}
    ],
    all: function () { return this.hobbyPersistence},
    get: function (id) {
        const thisExp = e => e.hid === id;
        return this.hobbyPersistence.find(thisExp);
    }
};
export default Hobby;