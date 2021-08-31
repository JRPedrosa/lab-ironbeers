const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + '/views'));

app.use(express.static(path.join(__dirname + '/public')));

hbs.registerPartials(path.join(__dirname, '/views/partials'));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render("index");
});

//PROMISES
  //Promises are JavaScript objects that might have or not a value in the near future

//Traditional way to consume promises
// app.get('/beers', (req, res) => {
//   punkAPI.getBeers().then((beers) => {
//     console.log(beers);
//     res.render('beers', { beers });
//   });
// });


//Modern way to consume promises
app.get('/beers', async (req, res) => {
  const beers = await punkAPI.getBeers();
  res.render('beers', { beers });
});


app.get('/random-beer', async (req, res) => {
  const randBeer = await punkAPI.getRandom();
  res.render('random-beer', { randBeer });
});



app.listen(3000, () => console.log('🏃‍ on port 3000'));
