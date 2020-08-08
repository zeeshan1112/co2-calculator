var oCalculator;
beforeAll(function() {
    oCalculator = new CO2Calculator();
});
describe("Testing CO2 Calculator", function() {

    it("average emission of the given vehicle is correct", () => {
        let avgEmission = oCalculator.getAverageEmission("large-electric-car");
        let expectedAvgEmission = 73;
        expect(avgEmission).toEqual(expectedAvgEmission);
    });

    it("Co2 Equivalent of the vehicle is correct in grams", () => {
        let avgEmission = oCalculator.getAverageEmission("large-electric-car");
        let co2Equivalent = oCalculator.getCo2Equivalent(avgEmission, 15, "km");
        let expectedCo2Equivalent = 1095;
        expect(co2Equivalent).toEqual(expectedCo2Equivalent);
    });

    it("Final result based on user's input is correct", () => {
        let result = oCalculator.getFinalOutput("large-electric-car", 15000, "m", "kg");
        let expectedResult = "1.095kg"
        expect(result).toEqual(expectedResult);
        result = oCalculator.getFinalOutput("bmw", 15000, "m", "kg");
        expect(result).toBeNull();
    });
});