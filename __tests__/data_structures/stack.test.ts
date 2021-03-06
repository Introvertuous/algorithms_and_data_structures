import { Stack } from "../../src/data_structures";

test("stack", () => {
  const stack = new Stack<string>();

  stack.push("one");
  stack.push("two");
  stack.push("three");

  expect(stack.pop()).toBe("three");
  expect(stack.pop()).toBe("two");
  expect(stack.pop()).toBe("one");
});
