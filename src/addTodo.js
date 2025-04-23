"use strict";

const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addTodo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { todo } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();

  console.log("addTodo", { todo, createdAt, id });
  const newTodo = {
    id,
    todo,
    createdAt,
    completed: false,
  };

  await dynamodb
    .put({
      TableName: "todo-table",
      Item: newTodo,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ newTodo }),
  };
};

module.exports = { handler: addTodo };
