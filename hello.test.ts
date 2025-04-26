import { assertEquals } from "@std/assert";
import { HELLO } from "./mod.ts";
Deno.test("hello", () => {
  assertEquals(HELLO, "world");
});
