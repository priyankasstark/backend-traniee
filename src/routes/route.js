// const express = require('express');
// const abc = require('../introduction/intro')
// const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// router.get('/student-details/:name', function(req, res){
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use any ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')
// })

// module.exports = router;
const express = require('express');
const abc = require('../introduction/intro')
const log=require('../logger/logger')
const hell=require('../util/helper')
const formatt=require('../validator/formatter')

const underScore=require('underscore');
const lodashh=require('lodash');
const { json } = require('body-parser');
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    // console.log("==================MODULE-1=================")
    // //module 1
    // log.kchbhi();
    // console.log("==================MODULE-2=================")
    // //module 2
    // console.log(hell.today());
    // console.log(hell.month());
    // console.log(hell.batchIn());

    // const weeksays=["monday","tuesday"]
    // console.log(underScore.first(weeksays))
    
// console.log("==================MODULE-3=================")
//     //module 3
//     console.log("The string has been trimmed i.e,"+formatt.trim);
//     console.log("The string has been converted to lower case i.e, "+formatt.toLower);
//     console.log("The string has been converted to upper case i.e, "+formatt.toUpper);
    res.send('My second ever api!')


    //lodash
const arr=["Januray","February","march","april","May","june","july","August","september","october","november","december"]
console.log(lodashh.chunk(arr,4))

console.log("=============2=============");
const odd=[1,3,5,7,9,11,13,15,17,19];
console.log(lodashh.tail(odd));
console.log("=============3=============");
const arr1=[1,2,3,4];
const arr2=[2,4,7,9];
const arr3=[4,5,2,8];
const arr4=[90.5,2,3];
const arr5=[3,4,2,7];

console.log(lodashh.uniq(arr1,arr2,arr3,arr4,arr5));
console.log("=============4=============");
const keyVal=[["TONYSTARK","CAPTAINAMERICA"],["BRUCEBANNER","HAWKAYE"],["THOR","BALCKWIDOW"]]
console.log(lodashh.fromPairs(keyVal));
});

router.get('/student-details:name',function(req,res){
    const students=["PRIYANKA",'RDJ'];
    console.log("This is the name " + JSON.stringify(req.params))
    let reqParams=req.params;
    let studentName=reqParams.name;

    res.send(studentName + " DOWNEY")
})

router.get('/test-you', function(req, res){

res.send('This is the second routes implementation')
})

router.get('/test-us',function(req, res){
 

    res.send('This is test-us router')
})
module.exports = router;