```js
const user1 = {
  username: "dmitriy.malayev",
  email: "dmitriy.malayev@gmail.com",
  phone: "347-761-4403",
  login() {
    console.log("The user has logged in successfully");
  },
  logout() {
    console.log("The user has logged out successfully");
  },
};

console.log(user1.username, user1.email, user1.phone);

userOne.login();

const user2 = {
  username: "dmitriy",
  email: "dmitriy@gmail.com",
  phone: "718-699-4403",
  login() {
    console.log("The user has logged in successfully");
  },
  logout() {
    console.log("The user has logged out successfully");
  },
};
console.log(user2.username, user2.email, user2.phone);
```

Classes
Blueprint for an object which describes how it should be made.

Prototypes 
Every object in JavaScript has a prototype property
Prototypes contain all of the methods for that object type
The methods are stored in the prototype object.

Date prototype
  getDay()
  getMonth()
  etc. 
Array prototype
  sort()
  filter()
  etc.
Method Chaining
  In order for us to do method chaining we need to make sure we have a return statement