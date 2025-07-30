import { getAccommodationsFrom } from "crowous";

(async () => {
  const accommodations = await getAccommodationsFrom("bordeaux");

  for (const home of accommodations) {
    console.log(`[${home.area}]: ${home.title} (lon: ${home.longitude}, lat: ${home.latitude})`);
  }
})();
