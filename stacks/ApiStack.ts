import { StackContext, Api } from "@serverless-stack/resources";

export function ApiStack({ stack }: StackContext) {
  stack.setDefaultFunctionProps({
    srcPath: "backend-api-stack",
  });

  const api = new Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
