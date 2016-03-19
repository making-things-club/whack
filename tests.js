import assert from "assert";
import {name as appName} from "./whack.js";

describe("whack", () => {
  it("should export its name", () => {
    assert.strictEqual(appName, "whack");
  });
});
