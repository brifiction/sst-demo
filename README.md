# sst-demo

This is a collection of various `serverless-stack` demos, to showcase useful use-cases in building most common forms of CloudFormation.

## What are the latest SST dependencies?

<p align="center">
  <img alt="@serverless-stack/cli" src="https://img.shields.io/npm/v/@serverless-stack/cli?label=%40serverless-stack%2Fcli&style=flat-square" />
  <img alt="@serverless-stack/resources" src="https://img.shields.io/npm/v/@serverless-stack/resources?label=%40serverless-stack%2Fresources&style=flat-square" />
</p>

> The updates for this project will be irregular. When updated, we start using the CLI `npx sst update 1.2.20` - then follow the advised `CHANGELOG` notes & upgrade steps.

**Will there be vulnerabilities discovered in SST peer dependencies?** Yes, as these discoveries does occur, and it's our job to identify & patch them - if found, please report them to the [`serverless-stack` community](https://github.com/serverless-stack/serverless-stack).

For more information, see `package.json`, `tsconfig.json` and `sst.json` files.

## How does this project work?

In AWS CloudFormation, a CloudFormation build is can build one Stack with N Resources - and you can build N Stack(s) at any time. Thus, the association 1:N, 1 Stack can have many Resources.

Now, let's take a look at the folders:

1. `backend-api-stack`

These folders can be defined as your workspace(s), as seen in `package.json` file and example below:

```
  "workspaces": [
    "backend-api-stack",
    "backend-database-only-stack",
    "backend-s3-only-stack"
  ]
```

Just like a sub-module, you can install dependencies you need in these workspaces. For more information, see https://docs.npmjs.com/cli/v8/using-npm/workspaces.

## Getting Started

First, install your `npm` dependencies, in root project folder:

```
cd sst-demo
npm i
```

## References

1. SST | Overview - https://docs.serverless-stack.com/constructs
2. SST | App - https://docs.serverless-stack.com/constructs/App
3. SST | Stack - https://docs.serverless-stack.com/constructs/Stack
4. SST | Function - https://docs.serverless-stack.com/constructs/Function
5. AWS CDK 2.27.0 | API Reference - https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html
