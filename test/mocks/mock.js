// Mocked require. As karma was throwing error "Uncaught ReferenceError: require is not defined" on karma start karma.conf.js
var require = function(param) {
    switch (param) {
        case "yargs":
            return {
                argv: function() {
                    return {
                        unitOfDistance: "km",
                        transportationmethod: "train",
                        distance: "15",
                        output: "kg"
                    }
                }
            }
        default:
            return true;
    }
};

//Mocking module.exports
var module = {
    exports: function() {
        return true;
    }
}