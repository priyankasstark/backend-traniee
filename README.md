# uranium
Backend cohort March 2022 - June 2022

# TRY CATCH SUMMARY:
// if you get an error in try block, it will not execute the next lines of code inside try
// instead it will jump into catch block and execute the code there
// code in catch block is normallly not executed
//rather catch block is only executed if there is error in try block
// the error( along with message++) gets sent to catch block incase there is an error




# Specific HTTP codes(only impt ones)
// 2xx- Success
// 4xx- something gone wrong..and problem is on user side(client side)
// 5xx- server side problems

// "BAD REQUEST" ...400..say if username password dont match etc..or anything generic( any problem in input on user side or any other unhandled problem)
// "RESOURCE NOT FOUND"...404 //404 page not found...eg. find ("asaijndianud89")...let book =bookModel.findOne({_id:"asaijndianud89"})   if (book){..} else res.status(404).send({})
// "AUTHENTICATION MISSING"...401..login is required...if(token){...} else { res.status(401)}
// "NOT AUTHENTICATED OR FORBIDDEN"..403 // if ( token.userId === userId) {...} else {res.status(403).send({}) }
// -- try catch ....// "SERVER ERROR"...500

// -- ALL GOOD... //status(200)- OK
// --- "ALL GOOD and A NEW RESOURCE WAS SUCCEFULLY CREATED" ...status(201)..e.g a new user registers herself successfully
