function printTable(from, to, step, func) {
    if (func === undefined) {
        return;
    }
    from = from;
    to = to;
    step = step || 1;
    document.write("<table border='1' cellspacing='0'>");
    for (var x = from; x <= to; x += step) {
        document.write("<tr>");
        document.write("<td>" + x + "</td>");
        document.write("<td>" + func(x) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

function quadratic(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

let f;
let expr = prompt("Enter the func");
let Fstr = "f = function(x) { return " + expr + ";}";
eval(Fstr);
printTable(-4, 4, 1, f);

/*
x = x + step
same as
a += step
*/