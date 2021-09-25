/* 
Asynchronous JavaScript (starts now finishes later)
JS can run ONE statement at a time (Single Threaded)
  console.log("line one")
  console.log("line two")
  console.log("line three")
*/


console.log(1)
console.log(2);

setTimeout(()=>{   //This async function runs after console.log(4)
  console.log("callback function fired")
}, 2000)

console.log(3);
console.log(4);



/*
HTTP Requests
We make HTTP requests to API endpoints in order to get data from another server
The response is in JSON formatw
*/



const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  // Fires every time there is a state change.
  // console.log(request, request.readyState)
  if (request.readyState === 4) {
    console.log(request.responseText)}
})
request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send();

















