import type { VFC } from "react";
import { NavLink } from "src/components/atoms/buttons/";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];
export const Header: VFC = () => {
  return (
    <header>
      <h1>Title</h1>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="">
              <a style={{ display: "inline-block", padding: 12 }}>{label}</a>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};
