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
