const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes---app---upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://yhus9b9jpa.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_lrveEeNVD",
    APP_CLIENT_ID: "7tq9umu3k876sg68lt4jsm2psc",
    IDENTITY_POOL_ID: "us-east-1:e7677d82-8805-4cf3-b33c-78af6e8574f4",
  },
};

export default config;