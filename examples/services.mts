import * as crous from "crowous";

const identifier = "bordeaux";
const onlineServices = await crous.getServices(identifier);

for (const onlineService of onlineServices) {
  console.log(`- ${onlineService.title} : ${onlineService.description ?? "(no description)"} @ ${onlineService.url}`);
}
