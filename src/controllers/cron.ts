import { Elysia, t } from "elysia";
import { cron } from "@elysiajs/cron";

// Cron Timings

export const cronController = new Elysia({
  prefix: "/cron",
})
  // Set the Cron Job running
  .decorate("getDate", () => Date())
  .use(
    cron({
      name: "heartbeat",
      // Every 10 seconds
      pattern: "*/10 * * * * *",
      //startAt: //
      run() {
        console.log("Heartbeat");
      },
    })
  )
  .use(
    cron({
      name: "heartstart",
      // Every 5 seconds
      pattern: "*/5 * * * * *",
      run() {
        console.log("Heart start");
      },
    })
  )
  //   Stop the cron
  .get(
    "/stop",
    ({
      getDate,
      store: {
        cron: { heartbeat },
      },
    }) => {
      heartbeat.stop();
      const stopDate = getDate().toString();
      console.log(`Heart stopped at ${stopDate}`);
      return "Stop heartbeat";
    }
  )
  .get(
    "/stop-2",
    ({
      getDate,
      store: {
        cron: { heartstart },
      },
    }) => {
      heartstart.stop();
      const stopDate = getDate().toString();
      console.log(`Heart stopped at ${stopDate}`);
      return "Stop heartbeat 2";
    }
  );
