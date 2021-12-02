---
to: <%= abs_path %>/<%= h.changeCase.pascal(component_name) %>.tsx
---
<% if (have_hooks) { -%>
import { useHook } from './hook'
<% } -%>
<% if (have_style) { -%>
import style from "./style.module.css"
<% } -%>

<% if (have_props) { -%>
export type Props = {
};
<% } -%>

export const <%= h.changeCase.pascal(component_name) %>: <%- type_annotate %> = () => {
<% if (have_hooks) { -%>
  const hook = useHook();
<% } -%>

  return (
<% if (have_style) { -%>
    <<%= tag %> className={style.module}>
<% } else { -%>
    <<%= tag %>>
<% } -%>
    </<%= tag %>>
  );
}