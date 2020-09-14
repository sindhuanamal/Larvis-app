This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This will also start the node server on port 4000.

This is a coffee ordering application with two user roles beveragemanager and the user himself.

BeverageManager can view the orders from the customers.
User can view his/her placed orders and can also make a new order.

From the landing page, clicking BeverageManager button would show the coffee requests from users. In this view, the BeverageManager can filter the requests based on status.
Also pagination added to the view.

From the landing page, clicking Operator button would show the current orders and user can make a new request. When no orders placed yet, it displays message to user that no
orders are placed yet. When there is an order made, user can view his/her orders.

