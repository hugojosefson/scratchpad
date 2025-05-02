import { assertEquals } from "@std/assert";
import { HELLO } from "./hello.ts";
Deno.test("hello", () => {
  assertEquals(HELLO, "Hello");
});
