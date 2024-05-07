import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";

const _app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", () => "🦊 Hello Elysia!")
  .listen(3000);

console.log("🔥 BEXLite Started...");
