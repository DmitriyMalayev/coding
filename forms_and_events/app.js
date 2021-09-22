const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-z]{6,}$/;

// const username = document.querySelector('#username');

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents the default action of refreshing the page
  // console.log('form submitted');
  // console.log(username.value) references the attribute (id or name) via dot notation;
  console.log(form.username.value);
});

const username = form.username.value

let result = usernamePattern.test(username); //return boolean response
console.log(result);
let results = usernamePattern.test();

if (results) {
  console.log("regex test passed");
} else {
  console.log("regex test failed");
}

if (usernamePattern.test(username)) {
  feedback.textContent = "That username is valid";
} else {
  feedback.textContent =
    "This username is invalid, it can only includes letters and be at least 6 characters long.";
}

let pattern_result = username.search(pattern);
//returns an integer with the index position of where the match has been found.

//Live Feedback
form.username.addEventListener("keyup", (event) => {
  if (usernamePattern.test(event.target.value)) {
    //setAttribute overrides previous attribute
    form.username.setAttribute("class", "success")
  } else {
    form.username.setAttribute("class", "error");
  }
});


