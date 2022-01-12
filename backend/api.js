'use strict';
import { Router, v4 } from "../deep.js";

let list = [
    {id: v4.generate(), beschreibung: "TestItem"},
];

const router = new Router();

router
.get("/api/allItems", context => context.response.body = list)
.get("/api/newId", context => context.response.body = v4.generate());

export const apiRoutes = router.routes();
