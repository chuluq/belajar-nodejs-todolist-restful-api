import http from "http";
import { TodolistServices } from "./todolist-service.mjs";

const service = new TodolistServices();
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");

  if (request.method === "GET") {
    service.getTodoList(request, response);
  }
});

server.listen(3000);
