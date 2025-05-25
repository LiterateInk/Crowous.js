import { getServicesFrom } from "crowous";

const identifier = "bordeaux";
const onlineServices = await getServicesFrom(identifier);

for (const onlineService of onlineServices) {
  console.log(`- ${onlineService.title} : ${onlineService.description ?? "(no description)"} @ ${onlineService.url}`);
}
