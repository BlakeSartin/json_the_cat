const request = require("request");
const input = process.argv.slice(2).toString().toLowerCase();
const breed = `https://api.thecatapi.com/v1/breeds/search?q=${input.slice(0,4)}`;

request(breed, function(error, respsone, body) {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found");
  } else {
    console.log(data[0].description);
  }
});
