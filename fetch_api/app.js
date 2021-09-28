fetch("../callbacks/first_todo.json")
  .then((response) => {
    console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    //data contains output of response.json()
  })
  .catch((error) => {
    console.error("rejected", error);
  });


