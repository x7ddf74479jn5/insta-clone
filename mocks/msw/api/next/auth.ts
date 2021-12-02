import { API_ROUTE } from "mocks/msw/api/utils";
import type { ResponseResolver, RestContext, RestRequest } from "msw";
import { rest } from "msw";

const mockLogin: ResponseResolver<RestRequest, RestContext> = async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      name: "user",
    })
  );
};

const mockLogout: ResponseResolver<RestRequest, RestContext> = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json("logout"));
};

export const mockAuthHandlers = [
  rest.post(`${API_ROUTE}/login`, mockLogin),
  rest.post(`${API_ROUTE}/logout`, mockLogout),
];
