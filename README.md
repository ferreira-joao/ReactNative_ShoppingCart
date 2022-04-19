# React Native Shopping Cart
The app simulate a simple store with a shopping cart. JSON Server was used to simulate a API, having only one Endpoint to get the products.

## Install the JSON Server to use the project
```
npm install -g json-server
```
For more info visit the official repository:
```
https://github.com/typicode/json-server
```
## Initiate the API
Clone the project's repository:
```
git clone https://github.com/ferreira-joao/ReactNative_ShoppingCart.git
```
Add a environment variable containing your IP with the name "API_IP" in the folder:
```
cd ReactNative_ShoppingCart/app
```
Acess the folder:
```
cd ReactNative_ShoppingCart/app/database
```
In the terminal run the command with your IP:
```
json-server --host 192.168.1.XXX db.json
```

## Start the project
Access the folder:
```
cd ReactNative_ShoppingCart/app
```
Install the dependecies:
```
yarn
```
Run the project:
```
yarn start
```
In other terminal:
```
yarn android
```
```
yarn ios
```

## Future optimizations
- Add images for the products
- Decrease the product's stock
- Improve the checkout
