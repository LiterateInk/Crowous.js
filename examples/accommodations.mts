import { getAccommodations } from "crowous";

const accommodations = await getAccommodations("bordeaux");

for (const home of accommodations) {
  // When the address is not available, we show the longitude and latitude directly.
  console.log(`[${home.area}]: ${home.title} (${home.address ?? `lon: ${home.longitude}, lat: ${home.latitude}`})`);
}
