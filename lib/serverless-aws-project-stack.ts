import * as cdk from '@aws-cdk/core';
import { LambdaStack } from './lambda';
import { DynamoDbStack } from './dynamodb';
import { ApiGatewayStack } from './api-gateway';

export class ServerlessAwsProjectStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dynamoStack = new DynamoDbStack(this, 'DynamoDbStack');
    const lambdaStack = new LambdaStack(this, 'LambdaStack');
    new ApiGatewayStack(this, 'ApiGatewayStack', {
      lambdaFunction: lambdaStack.lambdaFunction,
    });
  }
}
