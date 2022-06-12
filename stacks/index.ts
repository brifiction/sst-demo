import { ApiStack } from "./ApiStack";
import { App } from "@serverless-stack/resources";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    bundle: {
      format: "esm",
    },
  });
  // Demo 1 - API Stack
  app.stack(ApiStack);
}
