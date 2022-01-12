'use strict';
import { Application } from "./deep.js";
import { apiRoutes } from "./backend/api.js";
import { frontendFiles } from "./backend/fileserver.js";

const app = new Application();

app.use(apiRoutes);
app.use(frontendFiles);
app.listen({ port: 8000 });