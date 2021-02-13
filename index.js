const { fetchBreedDescription } = require('./breedFetcher');

// const args = process.argv.slice(2);
// const breedQuery = `${args[0]}`;
const breedName = process.argv[2];


fetchBreedDescription(breedName, (error, description) => {
  
  
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }


});
