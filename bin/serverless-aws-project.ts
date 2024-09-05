import * as cdk from '@aws-cdk/core';
import { ServerlessAwsProjectStack } from '../lib/serverless-aws-project-stack';

const app = new cdk.App();
new ServerlessAwsProjectStack(app, 'ServerlessAwsProjectStack');
