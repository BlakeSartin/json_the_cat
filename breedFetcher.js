const request = require("request");
const fetchBreedDescription = function (breedName, callback) {
  const breed = `https://api.thecatapi.com/v1/breeds/search?q=${breedName.slice(
    0,
    4
  )}`;

  request(breed, function (error, response, body) {
    const data = JSON.parse(body);
    if(error) {
      callback(error, null);
      return;
    }
    if (data.length === 0) {
      callback("Breed not found", null);
      return;
    } else {
      callback(null, data[0].description);
      return;
    }
  });
};

module.exports = { fetchBreedDescription };
