//async function always returns a promise

const getTodos = async () => {
  const response = await fetch("../callbacks/first_todo.json");
  if (response.statusCode !== 200) {
    throw new Error("cannot fetch data");
  }

  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => {
    console.log("resolved:", data);
  })
  .catch((err) => {
    console.log("rejected:", err.message);
  });

// const test = getTodos();
// console.log(test); //will return a promise even through nothing is there
