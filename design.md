## Step 1: Select Pizzas /

As page opens, want to start on  ## Step 1: Select Your Pizza (STRETCH: create welcome page)
NOTE: I am guessing we don't want NavLinks because this is a sequential process?
If we are comfortable with it, use cards to show off pizzas. We can always start though with just buttons
Each pizza will be a COMPONENT so... PizzaList.js and PizzaListItem.js
Remove functionality will also appear somewhere in here

---------------
|SELECT       |
|             |
|          -> |
---------------

Once pizzas are selected, display total and then hit next button

## Step 2: Customer Information /customer-info
This will have table that gets information from customer 
Need form component
---------------
|INFO         |
|             |
|          -> |
---------------
Pickup or delivery toggle also here
If information is verified (nothing empty), allow next button click
sweetAlert for confirmation of information? Here or checkout?

## Step 3: Checkout /checkout
Show customer information, pizzas selected in a table, total order and once button press goes through, clear cart
and navigate back to step 1
Need table component -> This could be 2 components? Also need to have information (could be its own component)
---------------
|CHECKOUT     |
|             |
|          -> |
---------------

## SECRET STEP: Admin page /admin
will be available to anyone with the url http://localhost:3000/admin
---------------
|ORDERS       |
|             |
|             |
---------------
Show table of customer's name, time order placed, type, and cost

## REDUX STORE PLAN
3 stores: pizza, orders, line_item

--pizza -> GET pizzas (only called when app first mounted) "pizzas should never change"
pizzaReducer
action {type: "GET_PIZZAS"}


--orders -> orderReducer
action {type: "SET_ALL_ORDERS"}

current order -> currentOrderReducer
action {type: "SET_CURRENT_ORDER"}
action {type: "RESET_CURRENT_ORDER"}
customer_name,
street_address,
city,
zip,
type,
total,
pizzas


## STRETCH: 
Add back buttons to all pages
Add list of pizzas ordered to admin order page
turn customer info form into sweetalerts popup



## TODO (updated as of 5pm)
STRETCH:build confirmation page (so "are you sure you want to checkout")
make sure we handle total (display on every page)
change delivery/Pickup to radio input type?
Format and make nice customer information on Checkout Page
FIX ADMIN PAGE
Alert user if data is not filled out on customer form
How to make it so when user refreshes page, they are sent back to "start" (i.e. pizza list page)
Split name into both first and last

At some point... update all pizza images so they display correct image(i.e. do they look correct?)
When all works, remove navlinks
