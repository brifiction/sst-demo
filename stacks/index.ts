import { App } from "@serverless-stack/resources";
import { AlphaApiStack } from "./AlphaApiStack";
import { BetaApiStack } from "./BetaApiStack";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    bundle: {
      format: "esm",
    },
  });
  // Demo 1 - API Stack Alpha
  app.stack(AlphaApiStack);
  // Demo 2 - API Stack Beta
  app.stack(BetaApiStack);
}
