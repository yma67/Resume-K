# rideshare9

> rideshare9's webapp
https://ride-sharer.herokuapp.com/

# Build System
When a new commit is pushed to the master branch, it is Herok automatically starts installing the app's dependencies. Then runs the build script (postinstall in package.json). When the build finishes it deploys the app to the ride-sharer webapp.

## Make sure adblockers are turned off!
## Browser Support (deployed version on Heroku)
**Should support all browsers**


## Browser Support (under development mode - npm run dev)


**IE**: ?

**Safari**: Ok (with CORS enabled)

**FireFox**: Ok

**Chrome**: Not working (Fleet Overview excepted)

**Opera**: Ok

## Unit Test

Please check the unit test with command 'npm run unit'

## Login

Please login with:  
#### Username: boss6  
#### Password: 12345

## Ranking Overview

This view shows the ranking of all Drivers and Passengers, based on how many trips they have involved in 
a specific time interval. 
The view also ranking of the most popular routes in this time interval, based on
how many advertisements have choose this route. 

#### Most popular routes
- The Top popular routes section shows the most completed trip route based on their startlocation and destination, 
regardless what specific stops they will drive by. 
- When click on one of the routes, the number of trips completed on this route will be shown. 

#### Drivers and Passengers
- The top performing drivers section will show the list of drivers based on number of trips they have completed.
- When click on one of the driver, the number of completed trips involved will be shown.
- Note this list only considered the drivers that **have completed at least one trip**
- The top royal passengers section will also show the list of passengers based on number of trips they have completed. 
- Same as the drivers' section, this list only considered the passengers that **have completed at least one trip**.


## Fleet Overview 

This view shows the Active Trips (ones that have yet to be completed) along with all Drivers and Passengers. 

The Fleet Overview is divided into three columns: Trips, Drivers, and Passengers.
#### Trips
- List all currently active trips created on the RideShare App.
- Case-insensitive searching.
- Trip status filtering (All, Registering Passengers, Registration Complete, On Route).
- When a trip is clicked on, a panel displaying information on the trip becomes visible.
#### Drivers and Passengers
- Lists all currently active drivers and passengers signed up on the RideShare App.
- Case-insensitive searching.
- When a driver or passenger is clicked on, a panel displaying information on the trip becomes visible.

Information | Active Trips | Drivers | Passengers
------| ------ | ------ | ------ 
Title | Trip Title | Username | Username
Upon Click | Driver, Date and Time, Start Location, End Location, Seats Remaining, Status, Vehicle Information, Stops | Status | Status

Trip Statuses: All, Registering Passengers, Registration Complete, On Route

Driver and Passenger Statuses: On ride, standby

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
