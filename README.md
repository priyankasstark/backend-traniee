# TOPIC: Middleware2

## Request
- Access headers
- Set headers
- Set attributes

## Response 
- Set headers
- Get headers

## Assignment

TOPIC: Middleware2

- For this assignment you have to create a new branch - assignment/middleware2
- Your user document should look like this
```
{ 
    _id: ObjectId("61951bfa4d9fe0d34da86829"),
    name: "Sabiha Khan",
	balance:100, // Default balance at user registration is 100
	address:"New delhi",
	age: 90,
 	gender: “female” // Allowed values are - “male”, “female”, “other”
	isFreeAppUser: false // Default false value.
}
```

- Your product document should look like this
```
{
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
	name:"Catcher in the Rye",
	category:"book",
	price:70 //mandatory property
}
```

Your Order document looks like this.
```
{
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
	userId: “61951bfa4d9fe0d34da86829”,
	productId: “61951bfa4d9fe0d34da86344”
	amount: 0,
	isFreeAppUser: true, 
	date: “22/11/2021”
}
```


NOTE: In some of the below apis a header validation is to be performed (create user and create order). The name of the header is ‘isFreeAppUser’. Write a header validation that simply checks whether this header is present or not. Please note this validation should only be called in create user and create order apis. Perform this validation in a middleware.

- Write a POST api to create a product from the product details in request body. 
- Write a POST api to create a user that takes user details from the request body. If the header **isFreeAppUser** is not present terminate the request response cycle with an error message that the request is missing a mandatory header
- Write a POST api for order purchase that takes a userId and a productId in request body. 
If the header isFreeAppUser is not present terminate the request response cycle with an error message that the request is missing a mandatory header
If the header is present the control goes to the request handler. Perform the user and product validation. Check if the user exists as well as whether the product exists. Return an error with a suitable error message if either of these validations fail
For every purchase we save an order document in the orders collection. isFreeAppUser property in an Order document depends on the header **isFreeAppUser**. If the **isFreeAppUser** header is true then the balance of the user is not deducted and the amount in order is set to 0 as well the attribute in order **isFreeAppUser** is set to true. If this header has a false value then the product’s price is checked. This value is deducted from the user’s balance and the order amount is set to the product’s price as well as the attrbiute **isFreeAppUser** is set to false in order document.
- Update the logic in middleware to set the **isFreeAppUser** attribute in req. Use this attribute in the route handler for setting the isFreeAppUser attributes of User and Order collection. 

### Hints for problem 3

1. Validate the header in a middleware. Terminate the req-res cycle if this fails.
2. Validate the userId. Send error if userId is invalid
3. Validate the productId. Send the error if productId is invalid
4. Now write the logic for order creation. 3 scenarios
//Scenario 1
For paid user app and the user has sufficient balance. We deduct the balance from user's balance and update the user. We create an order document

//Scenaio 2
For paid app user and the user has insufficient balance. We send an error that the user doesn't have enough balance

//Scenario 3
For free app user, we dont check user's balance and create the order with 0 amount.


