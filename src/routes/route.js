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
let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]

router.post('/players', function (req, res) {
    //LOGIC WILL COME HERE
    let newplayer = req.body
    let n = newplayer.name



    for (i = 0; i < players.length; i++) {
        if (players[i].name == n) {
            return res.send("Sorry, This name is already exist!")
        }
    }
    players.push(newplayer)
    res.send(players)

})

let playerbooking = [
    {
        bookingid: 1,
        sportId: 2,
        centerId: 3,
        type: "private",
        slot: 16286598000000,
        bookedOn: "31/08/2021",
        bookedFor: "01/09/2021"
    },
    {
        bookingid: 2,
        sportId: 2,
        centerId: 3,
        type: "private",
        slot: 16286598000000,
        bookedOn: "31/08/2021",
        bookedFor: "01/09/2021"
    }

]

router.post('/player/:playername/booking/:bookingid', (req, res) => {
    //    console.log(req.params)
    let flag = false
    for (let i = 0; i < players.length; i++) {
        let pla = players[i]
        if (pla.name === req.params.playername) {
            flag = true
        return res.send("Player Is already exist in the panel")
        }  
        
         break;
    }
           
    for (let i = 0; i < playerbooking.length; i++) {
        let ele = playerbooking[i]
        if (ele.bookingid == req.params.bookingid) {
            flag = true
            // break;
            return res.send("player is not exist in the panel")
        }
    }
    if (flag == true) {
        return res.send("already booked")
    }
    else {
        let book = req.body
        playerbooking.push(book)
        res.send(playerbooking)
    }

})

let persons= [
  {
  name: "SK",
  age: 10,
  votingStatus: false
},
{
  name: "SK",
  age: 20,
  votingStatus: false
},
{
  name: "AA",
  age: 70,
  votingStatus: false
},
{
  name: "PK",
  age: 5,
  votingStatus: false
},
{
  name: "HO",
  age: 40,
  votingStatus: false
}
]

router.post('/voters',(req,res)=>{

    let param = req.query;
    let age = parseInt(param.age);
    let voterArray = [];
    

   for(let i =0; i < persons.length ; i++){
      if(persons[i].age >= age){
           persons[i].votingStatus = true
          voterArray.push(persons[i])  
      }
   }

  res.send(voterArray)
          
})

module.exports = router;