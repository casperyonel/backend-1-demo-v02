const express = require('express')
const cors = require('cors')

const app = express()
// Invoking express, all that functionality is now into variable app

app.use(express.json())
app.use(cors())
// cors is a one time thing, that's why we don't need to invoke it to a new var. 
// This is middleware. cors is middleware, it only runs once!

const inventory = [
    "Reese's", 
    "Twix", 
    "Take 5", 
    "Carmello", 
    "5th Avenue", 
    "M&Ms", 
    "Snickers",
    "Sour Patch Watermelon"
]
// Just mimicking a database here through an array

app.get("/api/inventory", (req, res) => {
    if (req.query.item) {
        const filteredItems = inventory.filter(element => element.toLowerCase().includes(req.query.item.toLowerCase()))

        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
})

// Main point is endpoint is same, but in our endpoint we explicity check to see if we have any query itmems (line 26)

// Inventory array is sitting outside of endpoint
// Why no localhost? - backend we already defined the port, but frontend we need to specify which port to request from
// res.status(200) is sending confirmation to frontend, 200 represents hey this is good code
// status codes are just representing something, we send these codes telling developer's what's up with the request
// 404 - endpoint is wrong, status codes are just messages 
// when we inspect we see 200

// can use  console.log(req.query.item) to confirm something, idk... item is the query key that the front end supplied
// filteredItmes is returning our array that is true from our filter
// higher order array METHOD, so we use inventory.filter!
// Make everything lowercase, then check the value to see if it includes our query
// req.query.item is what the person put in, and we're checking if that = whats in our array inventory

// else statement is not a body, since it's not in the form?
// req.query.item where item is the key from the query call on the front end line 28. and req.params.id where id is the param!!

app.get("/api/inventory/:ID", (req, res) => {
    res.status(200).send(inventory[+req.params.ID])
})
// always need to have .params. for when we're accessing a param

// this is received as response.data on the frontend
// .data = what inside of .send()


app.get("/api/inventory", (req, res) => {

})



// ID is going to be a number here since we’re referencing an array, but can be anything, and arrays are indexed as numbers, so we don’t need a query for this demo
// So we use a parameter here








const SERVER_PORT = 5050

app.listen(SERVER_PORT, () => {
    console.log(`You are jammin on ${SERVER_PORT}`)
})