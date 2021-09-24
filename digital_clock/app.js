const clock = document.querySelector(".clock");
const now = new Date();
const tick = () => {
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
  <span>${h}</span>:
  <span>${m}</span>:
  <span>${s}</span>
  `;
  clock.innerHTML = html;
};

setInterval(tick, 1000);

console.log(dateFns.isToday(now));

//formatting options
console.log(dateFns.format(now, "YYYY")); //2021
console.log(dateFns.format(now, "MMMM")); //September
console.log(dateFns.format(now, "MMM")); //Sep
console.log(dateFns.format(now, "dddd")); //Thursday
console.log(dateFns.format(now, "Do")); //23rd
console.log(dateFns.format(now, "dddd, Do, MMMM, YYYY"));
//Thursday, 23rd, September, 2021

const previousDate = new Date("September 23 2021 8:24:59");

console.log(dateFns.distanceInWords(now, previousDate));
console.log(dateFns.distanceInWords(now, previousDate, {addSuffix: true}));