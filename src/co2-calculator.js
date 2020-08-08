#!/usr/bin/env node

var CO2Calculator = function() {
    this.oTransportationMethods = {
        "small-diesel-car": 142,
        "small-petrol-car": 154,
        "small-plugin-hybrid-car": 73,
        "small-electric-car": 50,
        "medium-diesel-car": 171,
        "medium-petrol-car": 192,
        "medium-plugin-hybrid-car": 110,
        "medium-electric-car": 58,
        "large-diesel-car": 209,
        "large-petrol-car": 282,
        "large-plugin-hybrid-car": 126,
        "large-electric-car": 73,
        "bus": 27,
        "train": 6
    };

};

//Get average emission by car
CO2Calculator.prototype.getAverageEmission = function(transportstionMethod) {
    return this.oTransportationMethods[transportstionMethod]
};

// Get CO2Equivalent in grams
CO2Calculator.prototype.getCo2Equivalent = function(avgEmission, distance, unitOfDistance) {
    const result = unitOfDistance == "m" ? (avgEmission * distance) / 1000 : (avgEmission * distance);
    return result;
}

// Get final result based on user's input
CO2Calculator.prototype.getFinalOutput = function(transportationmethod, distance, unitOfDistance, output) {
    const avgEmission = this.getAverageEmission(transportationmethod);
    if (avgEmission != null) {
        const co2EquivalentInGrams = this.getCo2Equivalent(avgEmission, distance, unitOfDistance);
        const finalOutput = output == "g" ? co2EquivalentInGrams + "g" : co2EquivalentInGrams / 1000 + "kg";
        return finalOutput;
    } else {
        return null;
    }
}

const argv = require('yargs').argv;
var oCo2Calculator = new CO2Calculator();

// Default unitOfDistance "km"
const unitOfDistance = argv.unitOfDistance ? argv.unitOfDistance : "km";

// Default output as "Kg"
const output = argv.output ? argv.output : "kg";

if (argv.transportationmethod && argv.distance) {
    const result = oCo2Calculator.getFinalOutput(argv.transportationmethod, argv.distance, unitOfDistance, output);
    if (result != null) {
        console.log("Your trip caused " + result + " of CO2-equivalent");
    } else {
        console.log("Invalid Vehicle");
    }
} else {
    console.log("Invalid Input");
}
module.exports = CO2Calculator;