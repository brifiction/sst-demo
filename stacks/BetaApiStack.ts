import { StackContext, Api } from "@serverless-stack/resources";

export function BetaApiStack({ stack }: StackContext) {
  stack.setDefaultFunctionProps({
    srcPath: "backend-api-stack-beta",
  });

  const api = new Api(stack, "api", {
    // defaults: {
    //   function: {
    //     srcPath: "backend-api-stack-beta",
    //   },
    // },
    routes: {
      "GET /": "functions/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
