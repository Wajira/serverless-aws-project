import request from 'supertest';
import * as cdk from '@aws-cdk/core';
import { LambdaStack } from '../lib/lambda';
import { ApiGatewayStack } from '../lib/api-gateway';

let apiUrl: string;

beforeAll(() => {
  const app = new cdk.App();
  const lambdaStack = new LambdaStack(app, 'LambdaStack');
  const apiGatewayStack = new ApiGatewayStack(app, 'ApiGatewayStack', {
    lambdaFunction: lambdaStack.lambdaFunction,
  });

  apiUrl = apiGatewayStack.apiUrl; // Ensure this is correctly set
  if (!apiUrl) {
    throw new Error('API URL is not defined');
  }
});

test('API Endpoint Returns 200', async () => {
  const response = await request(apiUrl).get('/items/1');
  expect(response.status).toBe(200);
});
