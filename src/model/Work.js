import wk1 from '../img/wk1.svg';
const Work = {
    workPersistence: [
        {wid: 0, title: "Operations Intern, Private Equity Division", institute: "Zhongtai Securities Co., Ltd.", timeRange: "June 2018 - Aug 2018", location: "Jinan, Shandong China", relSkill:["Collected data from financial data platforms, research reports and financial statements to create charts and forms for company valuation", "Used Excel to categorize and index more than 300 documents, making information search efficient ", "Communicated effectively with other departments, organized meetings and followed up project execution "], imgsrc: wk1},
        {wid: 1, title: "Development Intern, R&D Department", institute: "ZhengChen Inc. ", timeRange: "June 2018, Shandong China", location: "Jinan, Shandong China", relSkill:["ZhengChen Inc. is an innovative artificial intelligence and energy-efficient solutions company"], imgsrc: wk1}
    ],
    all: function () { return this.workPersistence},
    get: function (id) {
        const thisExp = e => e.wid === id;
        return this.workPersistence.find(thisExp);
    }
};
export default Work;