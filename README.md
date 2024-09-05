# Welcome to your CDK TypeScript project
# Serverless AWS Project with CDK

## Overview

This project demonstrates a serverless application using AWS services:
- **API Gateway**: Handles HTTP requests.
- **Lambda Function**: Processes requests and interacts with DynamoDB.
- **DynamoDB**: Stores and manages data.

## Folder Structure

- **`cdk/`**: Contains AWS CDK configuration.
  - **`bin/`**: CDK entry point.
  - **`lib/`**: CDK stack definitions.
  - **`test/`**: CDK test files.
- **`lambda/`**: Contains Lambda function code.
- **`.gitignore`**: Specifies files to ignore in Git.
- **`README.md`**: Project overview and setup instructions.

## Setup Instructions

1. **Install AWS CDK CLI**:
   ```bash
   npm install -g aws-cdk

   ## Setup Instructions

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
