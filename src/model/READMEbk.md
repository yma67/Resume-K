# TEAM 09

## Driver App Description

#### Driver App Description (Version for Release)
Take a passenger on your next trip to save costs with RideShare9. Sharing is simple with our new App.

##### HOW SIMPLE?
One Step Sign Up - Sign up in a minute to post an advertisement.
Manage Vehicles in Your Way - Have more than one vehicle registered and update information easily.
Have Multiple Stops - Add more stops to find more passengers

#### Driver App Description
##### Sign Up
Users can sign up as a driver through a username and a password on the sign-up page. An error message will be given for an existing username , mismatching passwords or illegal inputs. The sign-up button works only when there is no error. After signing up, the log-in page is displayed.
##### Log In
Users can log in their account and choose to keep logging in for convenience. An error message will be given for non-existent usernames,mismatching passwords  or illegal inputs. The log-in button works only when there is no error. After logging in, the advertisement tab is displayed.
##### Advertisement Tab
Users can post an advertisement in the advertisement tab by typing time, price, stops and selecting a vehicle. 
##### Vehicle Tab
The vehicle tab shows a list of vehicles that a user has registered. Users can add a car by giving model, license plate, colour and number of seats. Users may update or delete any vehicle in the list. 
##### Home Tab
The home tab is a portal that displays user information and the number of their trips. User can also change their statuses here,from on ride to standby and vice versa.


## Passenger App Description

#### Passenger App Description (Version for Release)
Enjoy great trips at low prices with RideShare9. Sharing is more simple and efficient with our new App.

##### HOW SIMPLE?
One Step Sign Up - Sign up in a minute to enjoy your trip.
Find a Trip in Your Way - Browse journey and sort by price, time or stop.
Current Trips and More - See current trips in the home tab and click for a map view.   

#### Passenger App Description (Version for Development and Grading)
##### Sign Up
Users can sign up as a passenger and need to input a username and a password twice on the sign-up page. An error message will be given for an existing username , mismatching passwords  or illegal inputs. The sign-up button works only when there is no error. After signing up, the log-in page is displayed.
##### Log In
Users can log in their account and choose to keep logging in for convenience. An error message will be given for non-existent username,mismatching passwords or illegal inputs. The log-in button works only when there is no error. After logging in, the home tab is displayed.
##### Home Tab
The home tab is a portal where greeting messages and a current & upcoming trip list (if any) are displayed. The trip list is refreshed continuously. By clicking a trip, users can see a map with the destination indicated. In the map view, users can open google map to navigate.
##### Journey Browser Tab
The journey browser tab shows all available trips. User can choose to sort by price, time or stop.
##### User Profile Tab
The user profile tab displays user's information and the number of their trips. Users can log out in this tab.


## Design of Passenger UI

Name | description | features 
------| ------ | ------ 
You | Show user's account info and updateable | features
Home | Show user's current trip | features
Advertisement | Browser for Advertisement list | features

## Update of 2018/10/18: Start of Sprint2: Android Application for Driver and Passenger 

### Features implemented (for both Driver and Passenger) : 
#### 1. Login Activity:

- User can enter username and password to login by send a post request to the backend.
- Can switch to Signup Screen.
- User can check "remeber me" to remeber the password (Achived with sharedpreferences)
#### 2. SignUp Activity:

- User can enter username, password to signup by send a post request to the backend.
- The second password textfield will validate password input,otherwise register button is disabled.

---
## Tips for naming API

- APIs are data-oriented, NOT functional requirement oriented
- API names should follow create, get, delete, update naming convension

## API Endpoints
**IMPORTANT**: A JWT authorization token is given in the response header after the user logs into the app. **All** requests that do **not** have the
Role: GLOBAL will need to provide this authorization token in the headers of the request.
Example:
- Header name: Authorization
- Header value: Bearer 
### Login

 URL | Request | Parameter Format | Parameters | Role (ROLE_) 
 ------| ------ | ------ | ------ | ------ 
 /login | POST | JSON | "username", "password" | GLOBAL 

### UserController

 URL | Request | Parameter Format | Parameters | Role (ROLE_) 
 ------| ------ | ------ | ------ | ------ 
 /user/sign-up | POST | JSON | "username", "password", and "role" (MUST BE ONE OF: {"ROLE_DRIVER","ROLE_PASSENGER","ROLE_ADMIN"}) | GLOBAL 
 /user/get-is-unique | POST | JSON | "username" | GLOBAL 
 /user/get-user-by-uname | POST | JSON | "username" | ADMIN 
 /user/get-logged-user | GET | void | void | ADMIN, PASSENGER, DRIVER 
 /user/get-list-passenger-status | GET | void | void | ADMIN 
 /user/get-list-driver-status | GET | void | void | ADMIN 
 /user/get-list-users | GET | void | void | ADMIN 
 /user/update-status | PUT | JSON | "status" (MUST BE: {"ON_RIDE","STANDBY"}) | ADMIN, PASSENGER, DRIVER 
 /user/delete-usr | DELETE | JSON | "id" | ADMIN 
 /user/mainpg | GET | void | void | GLOBAL 
 /user/hello | GET | void | void | PASSENGER (for test) 

### AdvertisementController

 URL | Request | Parameter Format | Parameters | Role (ROLE_)
 ------| ------ | ------ | ------ | ------ 
 /adv/create-adv | POST | JSON | "id", "title", "startTime",  "startLocation", "seatAvailable",  "stops", "vehicle" | DRIVER 
 /adv/get-adv-search | POST | JSON | Essential: "stop", "startLocation", "startTimeX", "startTimeY", "sortByPrice"; Optional: "vColor", "vModel" | ADMIN, PASSENGER, DRIVER 
 /adv/get-logged-adv | GET | void | void | DRIVER 
 /adv/get-top-drivers | POST | "startTimeX", "startTimeY" | void | ADMIN, PASSENGER, DRIVER 
 /adv/get-list-adv | GET | void | void | ADMIN, PASSENGER, DRIVER 
 /adv/get-by-id/{id} | GET | integer | "id" | ADMIN, PASSENGER, DRIVER
 /adv/update-adv | PUT | JSON | Essential: "id", "stops"; Optional: "title", "startTime",  "startLocation", "seatAvailable", "vehicle" | DRIVER 
 /adv/delete-adv | DELETE | JSON | "id" | DRIVER
 
 Note: "Stop" attribute in update-adv overshadowed all previous records in a list
 
 ### MapperController
 used to add passengers to an advertised trip.
 
 URL | Request | Parameter Format | Parameters | Role (ROLE_)
 ------| ------ | ------ | ------ | ------
 /map/add-map | POST | Path Parameter | "adv_id" | PASSENGER
 /map/admin/delete/{mapper_id} | DELETE | Path Variable | "mapper_id" | PASSENGER
 /map/list-top-passengers | POST | "startTimeX", "startTimeY" | void | ADMIN
 
 ### VehicleController
 URL | Request | Parameter Format | Parameters | Role (ROLE_)
 ------| ------ | ------ | ------ | ------
 /vehicle/add-car | POST | JSON | "color", "licencePlate", "maxSeat", "model" | DRIVER
 /vehicle/remove-car | DELETE | JSON | "id" | DRIVER, ADMIN
 /vehicle/get-cars | GET | void | void | DRIVER, ADMIN
 /vehicle/change-cars | PUT | JSON | "id"; Optional: "color", "licencePlate", "maxSeat", "model" | DRIVER
 /vehicle/get-by-id/{id} | GET | void | void | DRIVER, ADMIN
 
 ### StopController
 URL | Request | Parameter Format | Parameters | Role (ROLE_)
 ------| ------ | ------ | ------ | ------
 /stop/get-by-id/{id} | GET | integer | "id" | DRIVER, PASSENGER, ADMIN
 /stop/add-stop | POST | JSON | "stopName", "price" | DRIVER
 /stop/change-stop | PUT | JSON | "id"; Optional: "stopName", "price" | DRIVER
 /stop/del-stop | DELETE | JSON | "id" | DRIVER
 /stop/get-stop-by-name/{name} | GET | Path Variable | "name" | DRIVER

## User Stories

### Admin

- As an admin, I would like to check the **status** of all **active** drivers and passengers in the network, such that I can gain an overview of the ride sharing network. 
- As an admin, I would like to listing top drivers and passengers based on **historical data**, such that I can gain an overview of the ride sharing network.

probably we need a state for users:
```java
 enum{ON_RIDE, STANDBY} 
```

### Passenger

- As an passenger, I would like to search ads for drivers who are willing to **start** at my location and **stop** at my destination, such that I can select an appropriate journey to join from the list of results based on start and stop location. 
- As an passenger, I would like to sort results by relevant criteria (e.g., **car type**, **price**), such that I can select an appropriate journey to join.

### Driver

- As an driver, I would like to advertise journeys to passengers with 
> 1. information about the **vehicle**, 
> 2. the **available seating**, 
> 3. the locations that the driver is willing to **stop**, 
> 4. the **cost** of travel for passengers going to *each stop*

such that I can deliver accurate information to potential passengers. 

## Added login, authorization, and security feature

Pull my branch, and change application.yml: 

username, password: they must be the granted with access to local database "carpool"

if there is no "carpool", 

```mysql
mysql> CREATE DATABASE carpool; 

mysql> USE carpool; 

mysql> GRANT ALL PRIVILEGES ON carpool TO 'YOUR_DATABASE_GRANTED_USERNAME'@'localhost'; 

```
use local host if you are not remotely accessing database

Then, set up application.yml

```
server:
  port: 8080
spring:
  application:
    name: auth-service
  datasource:
    url : jdbc:mysql://localhost:3306/carpool
    username : YOUR_DATABASE_GRANTED_USERNAME
    password : PASSWORD_FOR_YOUR_DATABASE_GRANTED_USERNAME
    driverClassName : com.mysql.jdbc.Driver
  jpa:
    database : MYSQL
    show-sql : true
    schema: classpath:schema.sql
    data: data.sql
    hibernate:
      ddl-auto : update
      naming-strategy : org.hibernate.cfg.ImprovedNamingStrategy
    properties:
      hibernate:
        dialect : org.hibernate.dialect.MySQL5Dialect
logging:
  level:
    root: INFO
    org.hibernate: INFO
    org.hibernate.type.descriptor.sql.BasicBinder: TRACE
    org.hibernate.type.descriptor.sql.BasicExtractor: TRACE
    com.itmuch.youran.persistence: ERROR
```

Then, you are good to go! Enjoy using Chrome or Postman! 
Pay attention to format of JSON.  Good
