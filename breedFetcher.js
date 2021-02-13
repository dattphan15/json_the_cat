const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=`+ breedName;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length < 1) {
      callback("Could not find breed based on input", null);
    } else {
      callback(null, data[0].description);
    }
  });

};

module.exports = { fetchBreedDescription };