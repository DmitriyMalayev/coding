const now = new Date();
console.log(typeof now); //object

console.log("getFullYear", now.getFullYear()); //2021
console.log("getMonth", now.getMonth()); //8  (0 is January)
console.log("getDate", now.getDate()); //23
console.log("getDay", now.getDay()); //4  (0 is Sunday)
console.log("getHours", now.getHours()); //19
console.log("getMinutes", now.getMinutes()); //30
console.log("getSeconds", now.getSeconds()); //55

//timestamps are in milliseconds since January 1st, 1970
console.log("timestamp", now.getTime()); //1632439855813

//Date Strings
console.log("date string", now.toDateString());
//'Thu Sep 23 2021'

console.log("time string", now.toTimeString());
//'19:30:55 GMT-0400 (Eastern Daylight Time)'

console.log("locale string", now.toLocaleString());
//'9/23/2021, 7:30:55 PM'

const previousDate = new Date("September 23 2021 8:24:59");
const newDate = new Date();

console.log(newDate.getTime(), previousDate.getTime());

const difference = newDate.getTime() - previousDate.getTime();

const mins = Math.round(difference / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

`The blog was written ${days} ago`;

// converting timestamp into date objects
const timestamp = 1632439855813;
console.log(new Date(timestamp));
