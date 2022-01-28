const request = require("request");
const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response, body) => {
    const data = JSON.parse(body);
    if(error) {
      callback(error, null);
      return;
    }
    console.log(body)
    if (data.length === 0) {
      callback("Breed not found", null);
      return;
    } else {
      callback(null, data[0].description);
      return;
    }
  });
}



module.exports = { fetchBreedDescription };
