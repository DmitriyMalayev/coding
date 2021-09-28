console.log(1);
console.log(2);

setTimeout(() => {
  //This async function runs after console.log(4)
  console.log("callback function fired");
}, 2000);

console.log(3);
console.log(4);

const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    // Fires every time there is a state change.
    // console.log(request, request.readyState)
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  // request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  // request.open("GET", "./todos.json");

  request.send();
};

getTodos("../callbacks/first_todo.json", (err, data) => {
  console.log(data);
  getTodos("../callbacks/second_todo.json", (err, data) => {
    console.log(data);
    getTodos("../callbacks/third_todo.json", (err, data) => {
      console.log(data);
    });
  });
});
