# randombooks

> A React/express project
> To randmoize books from goodreads.


                                          ![randombooks](https://i.imgur.com/lOWmsUT.gif)

## Development Setup

In the Development enivroment the react application (client folder) is using `proxy` to consume the api request coming from the express server.

``` bash
# Open the project folder
cd randombooks && npm install

# Open a second terminal tab simultaneous with the first one and open the client folder
cd client && npm install

# In the randombooks terminal run
node server.js || nodemon server.js

# In the client terminal run
npm start
```

## Producation Setup

In the Producation enviroment, first we build the react app (from Inside the client folder) by running `npm run build`. Then add this line to the `server.js` file, which will serve the app as a static file.

``` bash
# Everytime the server get request, it services as the app from the build folder
app.use(express.static(path.resolve(__dirname, 'build')));
```

``` bash
# From inside the client folder run
npm run build

# From the randombooks folder run
echo “node_modules/” > .gitignore
```
