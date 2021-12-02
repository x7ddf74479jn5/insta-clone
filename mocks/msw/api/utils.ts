import type { DefaultRequestBody, RestRequest } from "msw";

const PORT = "8080";
export const API_ROUTE = `https://localhost:${PORT}/api`;

export const getSearchParams = (req: RestRequest<DefaultRequestBody>) => {
  const hoge = req.headers.get("hoge");
  return { hoge };
};
