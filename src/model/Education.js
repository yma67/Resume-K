const Education = {
    eduPersistence: [
        {eid: 0, degree: "Bachelor of Software Engineering", institute: "McGill University", grade: "3.9", award: "Dean's Honours List", relCourse:"Software Requirement Engineering, Artificial Intelligence, Database Systems"},
        {eid: 1, degree: "Minor Finance", institute: "McGill University", grade: "3.9", award: "Yudi Xie Honours List", relCourse:"Intro to Finance, Engineering Economy, Micro/Marco-Economics"}
    ],
    all: function () { return this.eduPersistence},
    get: function (id) {
        const thisExp = e => e.eid === id;
        return this.eduPersistence.find(thisExp);
    }
};
export default Education;