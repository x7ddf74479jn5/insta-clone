import type { LinkProps } from "next/link";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { cloneElement } from "react";

type Props = LinkProps & { children: ReactElement; activeClassName: string };

export const NavLink = (props: Props) => {
  const { children, activeClassName, ...linkProps } = props;
  const router = useRouter();

  const className =
    linkProps.href === router.pathname
      ? `${activeClassName} ${children.props.className ?? ""}`
      : children.props.className ?? "";

  return <Link {...linkProps}>{cloneElement(children, { className })}</Link>;
};
