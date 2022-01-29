### Demo
https://www.gigacore.in/demos/react-weather-forecast/


## Run
```
git clone
cd react-weather-forecast
npm i
```


## Start the dev server
```

npm run start:dev

```

## Build
```

npm run build

```

#### Notes:
* Running the build bundles all your updates to ```bundle.js``` and ```bundle.css``` in dist folder.
* If you insist to automate the build upon appending changes to files, use ```webpack --watch```

## Test
```

npm run test

```

#### Notes:
* Unit testing can be done manually by executing the above command.
* It will be done automatically prior committing the updates to the repo as a pre-commit hook.

### TODOs
- [x] Provide an option for user to choose location of their choice by Name, Lat/Long etc
- [x] Unit testing
- [x] Identify and address edgecases.
- [x] Revisit the code to improve performance. Such as sorting, looping, searching etc.
- [x] Use a proper loading spinner icon on page load
- [x] Detect location automatically
- [x] Display hourly forecasts.
- [ ] Add an option to choose Units in either Metric or Imperial.
- [ ] Display higher-level of weather information such as Wind Speed, Precipitation etc
- [ ] Fix lint issues and config the eslintrc to support "no-vars-used" for Imports
- [ ] Better and more functional UI
- [ ] Prevent fetching new data on every refresh by caching the data for a set duration of session.

### Tech Stack

* React.js
* Redux
* JavaScript (ES6)
* HTML5
* SASS
* Jest + Enzyme

