import { getServicesFrom } from "crowous";

(async () => {
  const services = await getServicesFrom("bordeaux");

  for (const service of services) {
    console.log(`- ${service.title} : ${service.description ?? "(no description)"} @ ${service.url}`);
  }
})();
