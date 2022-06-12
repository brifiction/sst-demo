# sst-demo

This is a collection of various `serverless-stack` demos, to showcase useful use-cases in building most common forms of CloudFormation.

> The updates for this project will be irregular. When updated, we start using the CLI `npx sst update 1.2.20` - then follow the advised `CHANGELOG` notes & upgrade steps.

## What are the latest SST dependencies?

<p align="center">
  <img alt="@serverless-stack/cli" src="https://img.shields.io/npm/v/@serverless-stack/cli?label=%40serverless-stack%2Fcli&style=flat-square" />
  <img alt="@serverless-stack/resources" src="https://img.shields.io/npm/v/@serverless-stack/resources?label=%40serverless-stack%2Fresources&style=flat-square" />
</p>

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

Just like a sub-module, you can install dependencies you need in these workspaces.

## Getting Started

First, install your `npm` dependencies, in root project folder:

```
cd sst-demo
npm i
```
