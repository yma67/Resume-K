import future from '../img/future.png';
import mcgill from '../img/McGill_University_CoA.svg';
import blbg from '../img/bloomberg-logo.jpg'
const Education = {
    eduPersistence: [
        {eid: 0, degree: "Bachelor of Software Engineering", institute: "McGill University", dateRange: "August 2016 - Ongoing", imgsrc: mcgill, location: "Montreal, Canada", linkto: "https://www.mcgill.ca/", comment: ["GPA: 3.9", "Dean's Honours List", "Relevant Courses: Software Requirement Engineering, Artificial Intelligence, Database Systems"]},
        {eid: 1, degree: "Minor Finance", institute: "McGill University", dateRange: "August 2016 - Ongoing", imgsrc: mcgill, location: "Montreal, Canada", linkto: "https://www.mcgill.ca/", comment: ["With strong focus on trading strategy and algorithm", "Relevant Courses: Introduction to Finance, Engineering Economy"]},
        {eid: 2, degree: "Bloomberg Market Concepts (BMC)", institute: "Bloomberg for Education", dateRange: "Aug 2018", imgsrc: blbg, location: "Jinan, Shandong, China", linkto: "https://www.bloomberg.com/", comment: ["No Expiration Date"]},
        {eid: 3, degree: "China Futures Association Fundamentals Examination", institute: "China Futures Association", dateRange: "Jul 2018", imgsrc: future, location: "Jinan, Shandong, China", linkto: "http://www.cfachina.org/", comment: ["Expires Jul 2020"]}
    ],
    all: function () { return this.eduPersistence},
    get: function (id) {
        const thisExp = e => e.eid === id;
        return this.eduPersistence.find(thisExp);
    }
};
export default Education;