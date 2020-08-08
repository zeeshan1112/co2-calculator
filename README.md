# co2-calculator
A mini project on Node.js project to return the amount of C02-equivalent that will be caused when travelling a given distance using a given transportation method.

## How to setup the project
1. Make sure node and npm is installed in your system.
2. Clone the project.
3. From the root folder, run the following command `npm install`

### Command line arguments
- transportationmethod
- distance
- unitOfDistance
- output

The default unit of distance is "km" and default output is "g"

**Run the following command from the root folder:** 
`./src/co2-calculator.js --transportationmethod large-electric-car --distance 15000 --unitOfDistance m --output kg`

**You should expect the follwowing output:**
> Your trip caused 1.095kg of CO2-equivalent

The below command should also return the same result since it is a default arguments are triggered.
`./src/co2-calculator.js --transportationmethod large-electric-car --distance 15`

##### Transportation methods in Co2e per passenger per km:

- Small cars:
  - small-diesel-car : 142g
  - small-petrol-car : 154g
  - small-plugin-hybrid-car : 73g
  - small-electric-car : 50g
  
- Medium cars:
  - medium-diesel-car : 171g
  - medium-petrol-car : 192g
  - medium-plugin-hybrid-car : 110g
  - medium-electric-car : 58g
  
- Large cars:
  - large-diesel-car : 209g
  - large-petrol-car : 282g
  - large-plugin-hybrid-car : 126g
  - large-electric-car : 73g
  
- bus : 27g
- train : 6g

### How to run unit tests

Run the follwoing command in the root folder to run tests on chrome browser.

`./node_modules/karma/bin/karma start`

A **target** folder will be generated in the root folder. Navigate to **target/coverage/report-html/** and open **index.html** to see the line coverage report in browser.

Add the following parameter to debug the jasmine based unit tests:

`./node_modules/karma/bin/karma start --debug`


