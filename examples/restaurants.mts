import { getRestaurantsFrom } from "crowous";

const restaurants = await getRestaurantsFrom("limoges");

for (const restaurant of restaurants) {
  console.log(restaurant.title);
  console.log("=>", restaurant.address);
  console.log();
}
