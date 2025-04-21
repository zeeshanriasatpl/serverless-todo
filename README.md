# AWS Serverless API

A simple serverless API using AWS Lambda and API Gateway.

## Prerequisites

- Node.js installed
- AWS CLI configured with your credentials
- Serverless Framework installed (`npm install -g serverless`)

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Deploy to AWS:
   ```
   serverless deploy
   ```

## Endpoints

- GET /hello - Returns a hello message

## Local Development

To test locally:
```
serverless invoke local -f hello
```
