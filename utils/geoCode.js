const axios = require("axios");

async function geocodeAddress(address) {
  const url = "https://nominatim.openstreetmap.org/search";

  const { data } = await axios.get(url, {
    params: {
      q: address,
      format: "json",
      limit: 1,
    },
    headers: {
      "User-Agent":
        "WanderLustAirbnbClone/1.0 (contact: krishna.dev123@gmail.com)",
      Referer: "http://localhost:8080",
    },
  });

  if (!data.length) {
    throw new Error("Geocoding failed: no results found for this address");
  }

  return {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
  };
}

module.exports = geocodeAddress;
