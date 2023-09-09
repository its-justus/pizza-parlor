# React Pizza Parlor

# Archive Notice
I am archiving this repo as it has not seen any updates since it's completion. Feel free to fork as you wish.
- Ian

The purpose of this application is to simulate a website in which customers can select pizzas from a menu, 
enter in their information, and then review their order and information before checkout.
NOTE: this does NOT include actual money transfer functionality. Please enter personal information at your own risk.

It will also have a special page (accesible through `http://localhost:3000/admin`) that displays the
name, time, and order total for each of the orders placed.

### SETUP

Server side code for baseline functionality has been provided. 
Create a database titled: `pizza_parlor` 

**Import data**

See database.sql for information on creating tables within your database.

**Start your server**

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

**Start your client**

```
npm run client
```

## Base Mode ad API DOCS


### GET PIZZA  

`/api/pizza`

**Returns** an array of objects with *

*, *name*, *description*, *image_path* and *cost* properties. 

### POST ORDER

`/api/order`

**Post Data** should be an object that contains user information, *customer name*, *street address*, *city*, *zip*, *order_total* and an array of pizza id's as object. 

**Example JSON Post Data:**

```JSON
{
  "customer_name": "Donatello",
  "street_address": "20 W 34th St",
  "city": "New York",
  "zip": "10001",
  "total": "27.98",
  "type": "Pickup",
  "pizzas": [{
    "id": "1",
    "quantity": "1"
  },{
    "id": "2",
    "quantity": "1"
  }]
}
```

### GET ORDERS

`/api/order`

**Returns** an array of orders.


## BASE REQUIREMENTS

### ORDER - SELECT PIZZA

When visiting [http://localhost:3000/](http://localhost:3000/) display all of the pizzas on the screen. Allow users to add or remove each pizza they would like to order. **In this mode, we only allow the user to have one of each pizza in their cart.** Total cost of items in the cart is shown on the page. 

This page has a next button that brings the user to the **enter order details page**.

![Select Pizza View](/images_readme/select_pizza.png?raw=true)

### ORDER - ENTER CUSTOMER INFORMATION

This page collects user information, *name*, *street address*, *city* and *zip*. This page has an option to select pickup vs. delivery. The total cost of the order appears in the top right of this page. This page has a next button that brings the user to the **checkout** page.

![Select Pizza View](/images_readme/customer_info.png?raw=true)

### ORDER - CHECKOUT

Users do not have the ability to modify items on this screen. When they click checkout, the user information, order total and array of pizzas are sent to the server. After the checkout is complete, the user is navigated back to the **select pizza** page.

![Select Pizza View](/images_readme/confirmation.png?raw=true)

### ADMIN - ORDERS

This page does not appear on any nav bar. The client would like to add authentication but for now, this page will be available to anyone with the url [http://localhost:3000/admin](http://localhost:3000/admin). This page displays the name, time and order total for each of the orders placed.

![Admin Page](images_readme/admin.png?raw=true)


## STRETCH GOALS

X Improve the styling of the app using Material-UI cards, buttons, nav bar and icons.
X Allow the user to go back to previous pages (until they've completed checkout).
X Display a list of pizzas for each order on the orders page.
- Add pictures to the `public/images` folder and update the image url for each pizza in the database.
- Add a button on the orders page to track delivery status.
- Allow admins to click on an order and see all of the details for that order (which pizzas were a part of that particular order). For the details of the order with `id` of `1`, it will be available to anyone with the url [http://localhost:3000/order/1](http://localhost:3000/order/1). This route is not built on the server, so you will need to create it.

## LICENSE
MIT

## ACKNOWLEDGMENT
Thanks for eveyone's teamwork as well as Emerging Digital Academy for this opportunity!

## SUPPORT
