import * as crous from "crowous";

const restaurants = await crous.restaurants("limoges");

for (const restaurant of restaurants) {
  console.log(restaurant.title);
  console.log("=>", restaurant.address);
  console.log();
}
