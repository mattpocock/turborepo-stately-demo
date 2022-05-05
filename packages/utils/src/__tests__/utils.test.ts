import { describe, expect, it } from "vitest";
import { add } from "../utils";

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
