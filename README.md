# Promise has typically 3 states
- Pending : not awaited and hence has not completed yet ( e.g. typically when you dont await an axios or db call)
- Rejected: When promise failed ( wrong url | server down etc)
- Fulfilled: Promise completed succesfully (e.g. db call has completed and returned a result succesfully)
// - settled : referes to a combination of either rejhected or fulfilled


# What is a promise:
- layman's definition: It is something in JS that tells us whether an operation has completed or not (pending)
- technical definition: it is a JS object that represents whether an asynchronous operation(like db or axios call) is completed or not





// GIT link..go thourgh this code thoroughly..it will result in a confusion when you are going though the code- postman se hit kar rhe hai and same axios se bhi hit kar rhe hai ..why?
// a short video ..4-5 mins  summary on what we covered today
// An asignment :
1.  WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
2.  GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further
Create API's to do each of the following:
                    - get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
                    - then change the above to get the temperature only( of London)
                    - Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
                    result should look something like this
                    [
                    {city:"London", temp: 280},
                    {city:"Moscow", temp: 290},
                    {city:"Bangalore", temp: 301.2},
                    .......
                    ]

3. Axios POST request assignment

            1. Get all the memes at Postman (https://api.imgflip.com/get_memes)
            2. Pick a memeId you want (Eg 129242436) for the POST request
            3. Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
            template_id <meme_id>
            text0 <text you want as a caption>
            text1 <optional>
            username chewie12345
            password meme@123

            4. Return a response with a body like this
            "data": {
                    "url": "https://i.imgflip.com/5mvxax.jpg",
                    "page_url": "https://imgflip.com/i/5mvxax"
                }