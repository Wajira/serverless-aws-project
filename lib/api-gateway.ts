import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';

interface ApiGatewayStackProps extends cdk.StackProps {
  lambdaFunction: lambda.IFunction;
}

export class ApiGatewayStack extends cdk.Stack {
  public readonly apiUrl: string;

  constructor(scope: cdk.Construct, id: string, props: ApiGatewayStackProps) {
    super(scope, id, props);

    const api = new apigateway.LambdaRestApi(this, 'ItemsApi', {
      handler: props.lambdaFunction,
      proxy: false, // Disable proxy integration for custom routing
    });

    // Expose the API URL
    this.apiUrl = api.url;
  }
}

