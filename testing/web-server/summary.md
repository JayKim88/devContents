# How to use web server in real time

### All you need are

- http-server library
- npm-watch library
- and some codes in package.json
  <br/>

### Follow below in order

1. http-server  
   http-server is a simple, zero-configuration command-line static HTTP server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development and learning.
2. npm-watch  
   It run scripts from package.json when files change.
3. codes in package.json
   ```json
   //package.json
   "dependencies": {
       ...,
       "npm-watch": "^0.11.0",
       "spa-http-server": "^0.9.0"
     },
     "scripts": {
       ...,
       "serve-build": "serve -s build",
       "serveprod": "http-server --proxy http://localhost:8080? ./build",
       "watch": "npm-watch"
     },
     "watch": {
       "build": {
         "patterns": [
           "src"
         ],
         "extensions": "ts,tsx,js,jsx"
       }
     },
   ```

### Run in Teminal then it works

1. yarn serveprod

2. yarn watch

-> npm-watch-library will detect any changes in accordance with patterns and extensions in watch and rebuild it automatically.

### Source from

- http-server: https://www.npmjs.com/package/http-server
- React router with http-server: https://stackoverflow.com/questions/54511950/react-router-with-http-server
- npm-watch: https://www.npmjs.com/package/npm-watch
