const getTodos = (resource, callback) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);

    request.send();
  });
};

getTodos("../callbacks/first_todo.json")
  .then((data) => {
    console.log("first promise resolved:", data);
    return getTodos("../callbacks/second_todo.json");
  })
  .then((data) => {
    console.log("second promise resolved:", data);
    return getTodos("../callbacks/third_todo.json", data);
  })
  .then((data) => {
    console.log("third promise resolved:", data);
  })
  .catch((error) => {
    console.log("promise rejected:", error);
  });

const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something
    resolve("some data");
    reject("some error");
  });
};

getSomething()
  .then((data) => {
    //resolve
    console.log(data);
  })
  .catch((error) => {
    //reject
    console.error(error);
  });
