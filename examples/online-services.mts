import * as crous from "crowous";

const identifier = "bordeaux";
const onlineServices = await crous.onlineServices(identifier);

for (const onlineService of onlineServices) {
  console.log(`- ${onlineService.title} : ${onlineService.shortDescription ?? "(no description)"} @ ${onlineService.url}`);
}
