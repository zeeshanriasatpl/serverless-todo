"use strict";

const AWS = require("aws-sdk");
const { v4 } = require("uuid");

const fetchTodo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  let todos;

  try {
    const params = {
      TableName: "todo-table",
    };
    const result = await dynamodb.scan(params).promise();
    todos = result.Items;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch todos" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ todos }),
  };
};

module.exports = { handler: fetchTodo };
