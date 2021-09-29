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
