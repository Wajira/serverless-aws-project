import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import { LambdaStack } from '../lib/lambda';
import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';

test('Lambda Function Created', () => {
  const app = new cdk.App();
  const stack = new LambdaStack(app, 'TestStack');
  expectCDK(stack).to(matchTemplate({
    "Resources": {
      "ItemsFunction": {
        "Type": "AWS::Lambda::Function",
        "Properties": {
          "Handler": "index.handler",
          "Runtime": "nodejs14.x",
        }
      }
    }
  }, MatchStyle.EXACT));
});
