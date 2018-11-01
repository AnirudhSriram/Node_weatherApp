# Node_weatherApp

##### A simple Node application to make asynchronous callback chaining to get weather information based on address 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

```
NodeJs
npm
```

### Installing


clone the repository onto your system using 

```
git@github.com:Terrorbladezz/Node_weatherApp.git
```

And 

```
cd Node_weatherApp
npm install
```
Create two text files ``` geocodeCred.txt ``` and ```weatherKey.txt ``` in the root of the application to store your google API key and dark weather API key .

## Creating and running the app successfully

#### Example to get weather
```
node app.js  --a="Staples center" 
node app.js  --a="560043"
