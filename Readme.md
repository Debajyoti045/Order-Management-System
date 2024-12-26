# Order Management System

A backend application that simulates an Order Management System with dynamic discount logic.

## Features
- **Place an Order:** Create a new order with product details and discounts applied.
- **Order Summary:** Retrieve the details of a specific order.
- **Total Revenue:** Calculate the total revenue from all placed orders.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Debajyoti045/Order-Management-System.git
   cd {projectname}
   npm install
   node index.js


   Route 1: http://localhost:3000/orders (POST)
        
     Body:{
          "productName": "Smartphone",
          "quantity": 6,
          "pricePerUnit": 2000
     }

     Response: {
          "id": 1,
          "productName": "Smartphone",
          "quantity": 6,
          "pricePerUnit": 2000,
          "totalAmount": 10300,
          "discount": 1700,
          "timestamp": "2024-12-26T08:46:50.041Z"
     }

Route 2:  http://localhost:3000/orders/1(GET)

    Response: {
        "id": 1,
        "productName": "Smartphone",
        "quantity": 6,
        "pricePerUnit": 2000,
        "totalAmount": 10300,
        "discount": 1700,
        "timestamp": "2024-12-26T08:46:50.041Z"
    }

    http://localhost:3000/orders/12 (GET)

      Response : {
      "error": "Order not found."
    }
     
 Route 3: http://localhost:3000/revenue(GET)

    Response: {
       "totalRevenue": 10300
    }


