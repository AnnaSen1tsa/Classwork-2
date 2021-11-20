function initCounter(name) {
  let color = "red";
  let innerCounter = function () {
    if (color == "red") color = "yellow" + " 1";
    else if (color == "yellow" + " 1") color = "green";
    else if (color == "green") color = "yellow" + " 2";
    else if (color == "yellow" + " 2") color = "red";
    return name + " " + color;
  };
  return innerCounter;
}

let counter1 = initCounter("first");
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

let counter2 = initCounter("second");
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
