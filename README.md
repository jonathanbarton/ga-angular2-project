Vending Machine Kata: Drinking the ngCola?
====================

In this exercise you will build the brains of a vending machine.  It will accept money, maintain
inventory, and dispense products.  All the things that you might expect a vending machine to accomplish.

The point of this kata is to provide a larger than trivial exercise that will enhance your understanding of Typescript and Angular 2.  A significant
portion of the effort will be in determining how to create your components and interact with the provided Angular services for managing communication across components and external API calls.

Setup
=====
Prerequisites: _ng-cli_

Install dependencies:
```
npm install
```

Install `json-server`:
```
npm install -g json-server
```

Start the API Server:
```
npm run api
```
NOTE: Data for the API server is found in `db.json` in the root project folder.

Start the app:
```
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Features
========

Insert Coin
-----------

_As a vendor_  
_I want a vending machine that accepts coins_  
_So that I can collect money from the customer_ 

- The vending machine will accept valid coins (nickels, dimes, and quarters). Coins represented by three buttons.
- When a valid coin is inserted (button pressed) the amount of the coin will be added to the current balance and the machine's display will be updated.
- When there are no coins inserted, the machine displays INSERT COIN.

Select Item
-----------

_As a vendor_  
_I want customers to select items_  
_So that I can give them an incentive to put money in the machine_

- The machine shows a list of items with their price and remaining inventory. List represented as radio button group.
- List of items is populated from item.service, which uses the external API to return an array of item objects.

Dispense Item
-------------
_As a customer_  
_I want to be told whether my item has been dispensed_  
_So that I can know whether my transaction has completed_  

- A button labeled 'Dispense' when pressed dispenses the selected item if there is enough current balance and the selected item has remaining stock.
- The machine responds with "Insufficient Balance" or "No Inventory Remaining," respectively if there is an error, and cancels dispensing of item.
- The machine responds with success message (developer's choice :) ) when item is successfully dispensed.
- The machine deducts item cost after successfully dispensing item.
