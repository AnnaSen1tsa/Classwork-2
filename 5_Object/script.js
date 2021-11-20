let chevy = {
    make: "Chevrolet",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    mileage: 1021
};

let miles = chevy.mileage;

for (let i = 0; i < chevy.passengers; i++) {
    addPersonToCar();
}

document.write(chevy.make);