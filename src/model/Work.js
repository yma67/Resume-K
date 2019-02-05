import wk1 from '../component/wk1.svg'; 
import wk2 from '../component/wk2.svg';
const Work = {

    workPersistence: [
        {wid: 0, title: "CTO兼任首席研发王", institute: "邻居家研究所", timeRange: "June 2017", relSkill:["Software Engineering", "Electrical Engineering", "Design", "Engineering Project Management"], imgsrc: wk1},
        {wid: 1, title: "交易王", institute: "邻居家券商", timeRange: "June 2018", relSkill:["Applied Financial Investment", "期货交易"], imgsrc: wk2},
        {wid: 2, title: "机器学习量化交易王", institute: "德国某大学", timeRange: "June 2019", relSkill:["应用强化学习多赚了20%的钱", "量化交易策略辅助强化学习算法"], imgsrc: wk1},
        {wid: 2, title: "软件需求工程王", institute: "McGill University", timeRange: "June 2018 - ongoing", relSkill:["Applied Financial Investment", "期货交易"], imgsrc: wk2}

    ],
    all: function () { return this.workPersistence},
    get: function (id) {
        const thisExp = e => e.wid === id;
        return this.workPersistence.find(thisExp);
    }
};
export default Work;