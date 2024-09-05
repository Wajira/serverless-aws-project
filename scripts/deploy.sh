#!/bin/bash

# Exit on error
set -e

# Ensure the project is built
npm run build

# Deploy the CDK stack
npx cdk deploy --all --require-approval never

# Print the endpoint URL if applicable
echo "Deployment complete."
