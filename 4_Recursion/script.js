/*//Замыкание, Светофор
function initCounter(name) {
    let color = "red";
    let innerCounter = function () {
        //console.log(name + " " + color);
        //return ++counter;
    };
    return innerCounter;
} 

let counter1 = initCounter("first"); // первый счетчик
console.log(counter1()); // 1
/*
alert(counter1()); // 2
alert(counter1()); // 3

let counter2 = initCounter("second"); // второй счетчик 
console.log(counter2()); // 1 - второй счетчик независим от первого
/*
alert(counter()); // 4 - первый счетчик продолжает считать независимо от второго!
*/


function initCounter(name) {
    let color = "red";
    let innerCounter = function () {
      //console.log(name + " " + color);
      if (color == "red") color = "yellow" + " 1";
      else if (color == "yellow" + " 1") color = "green";
      else if (color == "green") color = "yellow" + " 2";
      else if (color == "yellow" + " 2") color = "red";
      return name + " " + color;
    };
    return innerCounter;
  }
  
  let counter1 = initCounter("first"); // первый счетчик
  console.log(counter1()); 
  console.log(counter1()); 
  console.log(counter1()); 
  console.log(counter1()); 
  console.log(counter1()); 
  console.log(counter1()); 
  // 1
  // alert(counter1()); // 2
  // alert(counter1()); // 3
  
  let counter2 = initCounter("second"); // второй счетчик
  console.log(counter2());
  console.log(counter2()); 
  console.log(counter2()); 
  console.log(counter2()); 
  console.log(counter2()); 
  console.log(counter2()); 
  // 1 - второй счетчик независим от первого
  //alert(counter1()); // 4 - первый счетчик продолжает считать независимо от второго!
  