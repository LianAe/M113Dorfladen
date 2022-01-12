'use strict';
import { send } from "../deep.js"

export const frontendFiles = context => send(
    context, 
    context.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
});