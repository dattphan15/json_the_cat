const request = require('request');
const args = process.argv.slice(2);
const breedQuery = `?q=${args[0]}`;

const url = `https://api.thecatapi.com/v1/breeds/search`+ breedQuery;

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length < 1) {
    console.log("Could not find breed based on input");
  } else {
    console.log(data[0].description);
  }
});