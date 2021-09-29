class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} has just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} has just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  constructor(username, title) {
    super(username);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
  }
}

const userOne = newUser("dmitriy.malayev", "dmitriy.malayev@gmail.com");

userOne.login().incScore().incScore().logout();

userTwo = new Admin("dmitriy", "dmitriy@gmail.com", "King");

let users = [userOne, userTwo];

userTwo.deleteUser(userOne);
console.log(userTwo);

const numbers = ["one", "two", "three"];
const arrayConstructor = new Array(20, 25, 30);
// arrayConstructor => [20, 25, 30]

const objectConstructor = new Object();
// objectConstructor => {}

/* proto property
Any methods that a particular object has access to are listed in proto

In JavaScript primitive data types become temporarily wrapped and behave like an object so we can call methods on it.
Object Literal Notation vs. Contructor Notation

# Constructor Notation

constructor(){} This is important because it sets the properties

`The "new" keyword`

1. It creates a new empty object without properties
2. It binds the value of "this" to the new empty object
3. It calls the constructor function to "build the object"

We don't need comma separators
Returning the object instance.
Without a return it will be undefined and we won't be able to chain methods. It doesn't have to be return this.
*/

// BEFORE CLASSES
function alsoUsers(username, email) {
  this.username = username;
  this.email = email;
  // this.login = function () {
  // console.log(`${this.username} has logged in as ${this.email}`)
  // }
}

alsoUser = new alsoUsers("Dima", "dima@gmail.com");
alsoUser.login();

User.prototype.login = function () {
  console.log(`${this.username} has logged in as ${this.email}`);
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out as ${this.email}`);
};

/* 
Prototypal Inheritence
We can't user super without a class, we have to use call.
this refers to the object we just created 
*/
function Admin(username, email, admin) {
  User.call(this, username, email);
  this.admin = admin;
}

// Inherit methods from User to be present in Admin

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (username) {
  //example
};
