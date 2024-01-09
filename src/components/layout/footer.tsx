import React from "react";
import { Footer as FooterSection } from "@fpkit/react";

export type FooterProps = {
  children: React.ReactNode;
};

const defaultStyles = {};

const Footer = ({ children, ...props }: FooterProps) => {
  return <FooterSection {...props}>{children}</FooterSection>;
};

export default Footer;
Footer.displayName = "Footer";
Footer.styles = defaultStyles;
