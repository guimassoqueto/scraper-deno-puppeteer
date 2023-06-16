import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";

function returnOne(): number {
  return 1
}

Deno.test("sum", () => {
  const result = returnOne()
  assertEquals(result, 1);
});


Deno.test("sum2", () => {
  const result = returnOne() + 1
  assertEquals(result, 2);
});


Deno.test({
  name: "Focus on this test only",
  fn() {
    const result = returnOne() + 1
    assertEquals(result, 2);
  },
});