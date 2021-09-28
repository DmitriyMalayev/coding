const userOne = {
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

console.log(userOne.username, userOne.email, userOne.phone);

userOne.login();

const userTwo = {
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
console.log(userTwo.username, userTwo.email, userTwo.phone);


// Classes
// Blueprint for an object which describes how it should be made. 

