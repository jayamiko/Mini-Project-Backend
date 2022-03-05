# MINI-PROJECT - JAVASCRIPT BACKEND

## Instruction

### PART A

1. Create on API project to fetch covid data with node.js, express.js and save it to postgre/mongodb <img width="40px" src="https://image.pngaaa.com/193/5498193-middle.png">
1. Save additional & total number of positife, hospitalized, recovered, pass away <img width="40px" src="https://image.pngaaa.com/193/5498193-middle.png">

### PART B

1. Create a sheduler. Everyday at 11.59pm, call the API and automatically post to the database <img width="40px" src="https://image.pngaaa.com/193/5498193-middle.png">
1. Id there are changes to the data when you fetch it, save it as a new data point + create a log <img width="40px" src="https://image.pngaaa.com/193/5498193-middle.png">

## Technology used

1. Javascript
1. Node.Js
1. MongoDB

## Dependencies

1. Express
1. Mongoose
1. Esm
1. Node-Fetch
1. Nodemon
1. Node-Schedule

## Getting started

### Installation && How to use

1. Download MongoDB at `https://www.mongodb.com/try/download/community`
1. Installation guide MongoDB, look here `https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/` (for Windows)
1. Don't forget to turn on the MongoDB service
1. Create a database first
1. Clone repo `https://github.com/jayamiko/Mini-Project-Backend.git`
1. Install all depedencies

```sh
npm install
```

1. run the project

```sh
npm start
```

1. Do restAPI using Postman or Thunder Client or something else
1. Use `http://localhost:5000/api/v1/` + pathname you want to use
1. Here you can get data and add data. And add auto data every 11.59 PM
