import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

interface Props extends LinkProps {
  children: ReactNode;
}

const NoScrollLink = ({ children, href }: Props): JSX.Element => (
  <Link href={href} scroll={false}>
    {children}
  </Link>
);

export default NoScrollLink;
