const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(req.Params))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    let studentDetail = studentName + "" + studentName
    res.send(studentDetail)
})
/////////////////////////////////////////////////////////////////////
//1st//
router.get('/GET/movies',function(req, res){ //student detail api he 
    let movies= ['ENDGAME','THE JUDGE','RESTORATION','SHERLOCK HOLMES']//api is implementation is used to send response for request
    res.send(movies)//movies wala iske jese krna he
})

//////////////////////////////////////////////////////////////////////
//// 2nd/////

router.get('/GET/movies/:indexNumber',function(req, res){ //student detail api he 
    
    const movies=[' ENDGAME ','THE JUDGE','RESTORATION','SHERLOCK HOLMES']
    let reqParams=req.params;
    let index=reqParams.indexNumber;
    if(index>=0 && index<=movies.length-1){
        res.send(movies[index])
    }else{
        res.send("Wrong index");
    }

})


/////////////////////////////////////////////////////////////
///////    3rd //////////////////////////////////////
router.get('/movies/:indexNumber', function (req, res){ //student detail api he 
    
    let movies=['ENDGAME','THE JUDGE','RESTORATION','SHERLOCK HOLMES']
    let index = req.params.indexNumber;
    if (index < 4) {
        res.send(movies[index]);
        console.log(movies[index])
    } else {
        res.send("use a valid index");
        console.log("use a valid index")
    }


})


////////////////////////////////////////////////////////////
///////////// 4th ////////////////////
//forth wala idhar he
router.get('/GET/films',function(req,res){ //student detail api he    

    let moviesName=[ {"id": 1,"name": "ENDGAME"}, 
 {"id": 2,"name": "THE JUDGE"}, 
 {"id": 3,"name": "RESTORATION"},
  {"id": 4,"name": "SHERLOCK HOLMES"}]
    res.send(moviesName)
})

//////////////////////////////////////////////////
////////////// 5th /////////////////////////////////
router.get('/films/:indexNumber', function (req, res) { //student detail api he    

    let movies=[ {"id": 1,"name": "INFINITY WAR"}, 
 {"id": 2,"name": "ENDGAME"}, 
 {"id": 3,"name": "THE JUDGE"},
  {"id": 4,"name": "SHERLOCK HOLMES"}]
  let index = req.params.indexNumber;
  if (index > movies.length) {
      return res.send("no movie exist with this id")
  } else {
      res.send(movies[index])
  }
})




module.exports = router;

