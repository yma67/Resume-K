import rapp from '../component/rideshareapp.png'
import rdb from '../component/ridesharedb.png'
import pxnc from '../component/pxonic.jpg'
import wb from './READMEwb.md'
import adder from '../component/adder.png'
const SingleProject = {
    projectPersistence: [
        { number: 0, name: "RideShare9 App", dateRange: "September 2018 - December 2018", description: "A carpool program with backend, frontend, and android. ", github:"https://github.com/ECSE321-Fall2018/t09-web", imgsrc: rapp, rdme: wb },
        { number: 1, name: "RideShare9 Database", dateRange: "January 2019 - ongoing", description: "Optimized database design for RideShare9. ", github:"https://github.com/ECSE321-Fall2018/t09", imgsrc: rdb, rdme: wb },
        { number: 2, name: "Pixonic Industry", dateRange: "June 2018 - July 2018", description: "AR/VR driving assistant solution, with support of AI/ML technology. ", github:"https://github.com/ECSE321-Fall2018/t09", imgsrc: pxnc, rdme: wb },
        { number: 3, name: "超大规模加法器 (大ADDER)", dateRange: "June 2018 - July 2018", description: "AR/VR driving assistant solution, with support of AI/Machine Learning", github:"https://github.com/ECSE321-Fall2018/t09", imgsrc: adder, rdme: wb }
    ],
    all: function() { return this.projectPersistence},
    get: function(id) {
        const isPlayer = p => p.number === id
        return this.projectPersistence.find(isPlayer)
    }
}

export default SingleProject