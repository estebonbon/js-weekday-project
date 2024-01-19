// Write your JavaScript below this line
var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

//console.log(weekday);

if ("Monday" === weekday) {
  console.log("Let’s get this week started!");
} else if ("Tuesday" === weekday) {
  console.log("Worky work");
} else if ("Wednesday" === weekday) {
  console.log("Time is money");
} else if ("Thursday" === weekday) {
  console.log("Do it for the money");
} else if ("Friday" === weekday) {
  console.log("Weenkend is almost here");
} else {
  console.log("It's the Weekend BABY!!!!");
}
