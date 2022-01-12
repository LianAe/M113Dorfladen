'use strict';
import { Router, v4, renderFileToString } from "../deep.js";

let list = [
    {id: v4.generate(), beschreibung: "TestItem"},
];

const router = new Router();

router
.get("/", async (context) => {
    try {
        context.response.body = await renderFileToString(Deno.cwd() + 
        "\\frontend\\index.ejs", { });
        context.response.type = "html";           
    } catch (error) {
        console.log(error);
    }
})
.get("/api/allItems", context => context.response.body = list)
.get("/api/newId", context => context.response.body = v4.generate())
.post("/api/newItem", async context => {
    console.log(context.request.body({type: "form" }));
    const newItem = await context.request.body({type: "form" });
    console.log("requestBody: ", newItem);
    list = [
        ...list,
        newItem
    ];
    context.response.status = 200;
});

export const apiRoutes = router.routes();
