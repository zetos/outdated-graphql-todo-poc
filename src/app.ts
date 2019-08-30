"use strict";

import { schema } from "./schemas";
import { TodoApp } from "./server";

const server: TodoApp = new TodoApp(process.env.API_PORT || 3000);
// starting the server
server.startServer();

const graphqlHTTP = require("express-graphql");

private initAppRoutes(); {
  this.app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
  }));
}
