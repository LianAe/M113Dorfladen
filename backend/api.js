'use strict';
import { Router, v4 } from "../deps.js";

let list = [
    {id: v4.generate(), beschreibung: "TestItem"},
];

const router = new Router();

router
.get("/api/allItems", context => context.response.body = list)
.get("/api/newId", context => context.response.body = v4.generate())
.post("/api/list", async context => {
    const newItem = await context.request.body({type: "json" }).value;
    console.log("requestBody: ", newItem);
    list = [
        ...list,
        newItem
    ];
    context.response.status = 200;
});

export const apiRoutes = router.routes();
