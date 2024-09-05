#!/bin/bash

# Exit on error
set -e

# Destroy the CDK stack
npx cdk destroy --all --force

echo "Stack destruction complete."
