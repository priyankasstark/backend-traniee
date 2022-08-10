const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

// let players =
//   [
//     {
//       "name": "manish",
//       "dob": "1/1/1995",
//       "gender": "male",
//       "city": "jalandhar",
//       "sports": [
//         "swimming"
//       ]
//     },
//     {
//       "name": "gopal",
//       "dob": "1/09/1995",
//       "gender": "male",
//       "city": "delhi",
//       "sports": [
//         "soccer"
//       ],
//     },
//     {
//       "name": "lokesh",
//       "dob": "1/1/1990",
//       "gender": "male",
//       "city": "mumbai",
//       "sports": [
//         "soccer"
//       ],
//     },
//   ]

//   router.post('/players', function (req, res) {
//     //LOGIC WILL COME HERE
//     let newplayer = req.body.player
//     let n = newplayer.name
  
//     for (i = 0; i < players.length; i++) {
//       if (players[i].name == n) {
//         return res.send("Sorry, This name is already exist!")
//       }
//     }
//     players.push(newplayer)
//     res.send({players})
  
//   })

  


let players =
   [
       {
           name: "manish",
           dob: "1/1/1995",
           gender: "male",
           city: "jalandhar",
           sports: ["swimming"],
           bookings: [
               {
                   bookingNumber: 1,
                   sportId: "",
                   centerId: "",
                   type: "private",
                   slot: '1234000000',
                   bookedOn: '31/08/2021',
                   bookedFor: '01/09/2021'
               },
               {
                   bookingNumber: 2,
                   sportId: "",
                   centerId: "",
                   type: "private",
                   slot: '12456000000',
                   bookedOn: '31/08/2001',
                   bookedFor: '01/09/2001'
               },
           ]},
       {
           name: "gopal",
           dob: "1/09/1995",
           gender: "male",
           city: "delhi",
           sports: ["soccer"],
           bookings: []
       },
       {
           name: "lokesh",
           dob: "1/1/1990",
           gender: "male",
           city: "mumbai",
           sports: ["soccer"],
           bookings: [
       
            {
                bookingNumber: 4,
                sportId: "",
                centerId: "",
                type: "private",
                slot: '131245000000',
                bookedOn: '31/08/2020',
                bookedFor: '01/09/2020'
            }
        ]
       }
   ]

//   

router.post('/player/:playerName/booking/:bookingId',function (request, response){
    const playerName = request.params.playerName;
    const bookingId = request.params.bookingId;
    const bookingData = request.body;
    bookingData.bookingNumber = Number(bookingId);
    
    let playerNameStatus = "", bookingIdStatus = "";
    
    for(let i = 0; i < players.length; i++){
    if(players[i].name == playerName){
    playerNameStatus = i;
    break;
    }
    else{
    playerNameStatus = null;
    }
    }
    if(playerNameStatus != null){
    if(players[playerNameStatus].bookings.length == 0){
    bookingIdStatus = players[playerNameStatus].bookings;
    }
    else{
    for(let i = 0; i < players[playerNameStatus].bookings.length; i++){
    if(players[playerNameStatus].bookings[i].bookingNumber == bookingId){
    bookingIdStatus = null;
    break;
    }
    else{
    bookingIdStatus = players[playerNameStatus].bookings;
    }
    }
    }
    if(bookingIdStatus != null){
    bookingIdStatus.push(bookingData);
    response.send(players);
    }
    else{
    response.send("Booking number already exist !");
    }
    }
    else{
    response.send("Player name not found !");
    }
    });

  
   module.exports = router;