import Elysia from "elysia";
import { index } from "./index";

import { html } from "@elysiajs/html";

export const pages = new Elysia().use(html()).use(index);
