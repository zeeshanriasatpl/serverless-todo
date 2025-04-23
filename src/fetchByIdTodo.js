"use strict";

const AWS = require("aws-sdk");
const { v4 } = require("uuid");

const fetchByIdTodo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  try {
    const params = {
      TableName: "todo-table",
      Key: { id },
    };
    const result = await dynamodb.get(params).promise();
    const todo = result.Item;

    if (!todo) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Todo not found" }),
      };
    }
  } catch (error) {
    console.error("Error fetching todos:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch todos" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ todo }),
  };
};

module.exports = { handler: fetchByIdTodo };
