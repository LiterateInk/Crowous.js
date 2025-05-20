import * as crous from "crowous";

const identifier = "bordeaux";
const houses = await crous.accommodations(identifier);

for (const home of houses) {
  // When the address is not available, we show the longitude and latitude directly.
  console.log(`[${home.area}]: ${home.title} (${home.address ?? `lon: ${home.longitude}, lat: ${home.latitude}`})`);
}
