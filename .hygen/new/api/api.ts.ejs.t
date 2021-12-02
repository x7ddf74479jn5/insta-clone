---
to: <%= abs_path %>/index.page.ts
---
import type { NextApiRequest, NextApiResponse } from "next";

const <%= api_name %> = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({

  });
};

export default <%= api_name %>;
