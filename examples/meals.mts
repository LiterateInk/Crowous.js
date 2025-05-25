import { getMealsForDate, getRestaurantsFrom } from "crowous";

const identifier = "limoges";
const restaurants = await getRestaurantsFrom(identifier);

for (const restaurant of restaurants) {
  if (restaurant.title !== "RU La Borie") continue;

  console.log(`Found ${restaurant.title} (kind: ${restaurant.kind})`);
  console.log("->", restaurant.address);

  const payment_methods_as_str = restaurant.paymentMethods.join(", ");
  console.log("Payment Methods:", payment_methods_as_str);

  // Get the meals for today.
  const meals = getMealsForDate(restaurant, new Date());
  if (typeof meals === "undefined") {
    console.log("Meals data is unavailable for the given date.");
  }
  else if (meals.length === 0) {
    console.log("No meals for today.");
  }
  else {
    console.log("Meals:");
    for (const meal of meals) {
      console.log(`- ${meal.moment} (${meal.information ?? "No information"})`);
      for (const category of meal.categories) {
        console.log(`  - ${category.name}: ${category.dishes.join(", ")}`);
      }
    }
  }
}
