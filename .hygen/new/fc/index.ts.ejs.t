---
to: <%= abs_path %>/index.ts
---
export { <%= h.changeCase.pascal(component_name) %> } from './<%= h.changeCase.pascal(component_name) %>'