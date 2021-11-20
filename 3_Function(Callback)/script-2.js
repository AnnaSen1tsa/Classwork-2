function Calculator() {
    let x1 = +prompt("First Number");
    let sign = prompt("Sign (+, -, *, /)");
    let x2 = +prompt("Second Number");
    let res;
    switch (sign) {
        case '+': res = (x1+x2); break;
        case '-': res = (x1-x2); break;
        case '*': res = (x1*x2); break;
        case '/': res = (x1/x2); break;
        default : res = "Error! Enter the right sign"; break;
    }
    alert(res);
}