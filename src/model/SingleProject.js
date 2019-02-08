import rapp from '../img/rideshareapp.png'
import rdb from '../img/ridesharedb.png'
import pxnc from '../img/pxonic.jpg'
import wb from './READMEwb.md'
import bk from './READMEbk.md'
import mlmd from './project1_all_final_version/project1_all_final_version.md'
import mlp from '../img/ml.png'
import resto from '../img/resto.png'
const SingleProject = {
    projectPersistence: [
        { number: 0, name: "RideShare9 Backend", dateRange: "September 2018 - November 2018", description: "A carpool program with backend and android. ", github:"https://github.com/ECSE321-Fall2018/t09", imgsrc: rdb, rdme: bk },
        { number: 1, name: "RideShare9 Frontend", dateRange: "November 2018 - December 2018", description: "Web frontend of the carpool app, designed for system administrators. ", github:"https://github.com/ECSE321-Fall2018/t09-web", imgsrc: rapp, rdme: wb },
        { number: 2, name: "Resto App", dateRange: "June 2018 - July 2018", description: "AR/VR driving assistant solution, with support of AI/ML technology. ", github:"https://github.com/MartiniChauchat/RestaurantManagementSystem", imgsrc: resto, rdme: wb },
        { number: 3, name: "Machine Learning Projects", dateRange: "January 2019 - ongoing", description: "Various Machine Learning Projects", github:"https://github.com/yma67/cs551proj1", imgsrc: mlp, rdme: mlmd }
    ],
    all: function() { return this.projectPersistence},
    get: function(id) {
        const isPlayer = p => p.number === id;
        return this.projectPersistence.find(isPlayer)
    }
}

export default SingleProject