import { describe, it, expect } from "vitest";
import { Stack, App } from "@serverless-stack/resources";
import { Template } from "aws-cdk-lib/assertions";
import { BetaApiStack } from "../../stacks/BetaApiStack";

describe("BetaApiStack", () => {
  it("test beta api stack resource count", () => {
    const app = new App();

    const stack = new BetaApiStack(app);

    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::Lambda::Function", 1);
  });
});
