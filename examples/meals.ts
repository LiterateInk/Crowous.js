import { getRestaurantsFrom, Moment, PaymentMethod } from "crowous";

(async () => {
  const restaurants = await getRestaurantsFrom("limoges");

  for (const restaurant of restaurants) {
    if (restaurant.title !== "RU La Borie") continue;

    console.log(`Found ${restaurant.title} (kind: ${restaurant.kind})`);
    console.log("->", restaurant.address);

    const paymentMethods = restaurant.paymentMethods.map((method) => PaymentMethod[method]).join(", ");
    console.log("Payment Methods:", paymentMethods);

    // Get the meals for today.
    const meals = restaurant.getMeals(new Date());
    if (!meals) {
      console.log("Meals data is unavailable for the given date.");
    }
    else if (meals.length === 0) {
      console.log("No meals for today.");
    }
    else {
      console.log("Meals:");
      for (const meal of meals) {
        console.log(`- ${Moment[meal.moment]} (${meal.information ?? "No information"})`);
        for (const category of meal.categories) {
          console.log(`  - ${category.name}: ${category.dishes.join(", ")}`);
        }
      }
    }
  }
})();
