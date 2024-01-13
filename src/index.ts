import cron from "@elysiajs/cron";
import { Elysia } from "elysia";

const app = new Elysia().use(
  cron({
      name: 'DiscoveryMeet',
      pattern: '*/30 7-21 * * *',
      run() {
        DiscoveryAutoCancel();
          console.log('Heartbeat')
      }
  })
)
.listen(8080)

async function DiscoveryAutoCancel(){
  var response  = await fetch('https://eos.onefin.app/WeatherForecast/job/meeting/discovery-autocancel');
  console.log(response.status);
}

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
