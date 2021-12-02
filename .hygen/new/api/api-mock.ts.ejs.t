---
to: "<%= have_mock ? `${mock_path}${api_name}.ts` : null %>" 
---
import type { ResponseResolver, RestContext, RestRequest } from "msw";
import { rest } from "msw";

export const mock<%= h.changeCase.pascal(api_name) %>: ResponseResolver<RestRequest, RestContext> = async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({

    })
  );
};

export const mock<%= h.changeCase.pascal(api_name) %>Handlers = [rest.get(`api_url`, mock<%= h.changeCase.pascal(api_name) %>)];