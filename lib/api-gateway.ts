import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';

interface ApiGatewayStackProps extends cdk.StackProps {
  lambdaFunction: lambda.IFunction;
}

export class ApiGatewayStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: ApiGatewayStackProps) {
    super(scope, id, props);

    // Define your API Gateway
    new apigateway.LambdaRestApi(this, 'ItemsApi', {
      handler: props.lambdaFunction, // Use the Lambda function passed in props
      proxy: false, // Disable proxy integration for custom routing
    });
  }
}
