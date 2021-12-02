---
to: <%= abs_path %>/<%= api_name %>.test.ts
---
import { mockReq, mockRes } from "jest/test-utils";
import type { NextApiRequest } from "next";

import <%= api_name %> from "./index.page";

describe("<%= path %>", () => {
  it("", async () => {
    const _mockReq = {
      ...mockReq,
    } as unknown as NextApiRequest;

    await <%= api_name %>(_mockReq, mockRes);
  });
});