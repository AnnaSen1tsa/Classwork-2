/*
//Лямда-функции, анонимные функлии, высшого порядка, первоклассные функции:

//1
let func = function () {
    alert('hello!');
};

//2
(function(name) {
    alert("Привет, " + name);
    }
)("Вася");

//3
let double = function (x) { // double - функциональное выражение, удваивающее пришедшее число
    return x * 2; 
};

 function f (d, n){ // функция f может принять функциональное выражение как первый параметр d, второй параметр - число n
     alert( d(n) ); // вызов функции double(5), которая вернет 10
}
 
f(double, 5); // 10 - функциональное выражение double передается в качестве первого аргумента, 5 - второй аргумент


// jshint


// callback function

var as = [4, 8, 21, 3];
as.sort(); 
document.write(as); //21, 3, 4, 8

function comp(a, b) {
    return a < b ? -1 : (a == b ? 0 : 1); 
}
 
var an = [4,8,21,3];
an.sort(comp); // имя функции передается как параметр 
document.write(an);// 3,4,8,21

function comp(a, b) {
    let x = a < b ? -1 : a == b ? 0 : 1; // краткая форма
    return x;
}

function comp(a, b) {
    if (a < b) return -1;
    else if (a == b) return 0;
    else return 1;
}
  
*/  


/*
let products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
{ name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
{ name: "Water", calories: 0, color: "clear", sold: 62123 }
];

function printProducts(products) {
    for (let i = 0; i < products.length; i++) {
      document.write("Name: " + products[i].name +
        ", Calories: " + products[i].calories +
        ", Color: " + products[i].color +
        ", Sold: " + products[i].sold + "</br>");
    }
  }

  
  //Hometask
  //WebKola, 
  */var arr = {'log1':'pas1', 'log2':'pas2'}; for (var k in arr) { document.write(k +':' + arr[k] + ' '); }