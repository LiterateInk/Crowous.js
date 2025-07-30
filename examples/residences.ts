import { getResidencesFrom } from "crowous";

(async () => {
  const residences = await getResidencesFrom("bordeaux");

  for (const home of residences) {
    console.log(`[${home.area}]: ${home.title} (lon: ${home.longitude}, lat: ${home.latitude})`);
  }
})();
