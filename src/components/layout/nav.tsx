"use client";
import React from "react";

import { Nav as Navbar, List } from "@fpkit/react";
import Link from "next/link";
import { Icon } from "@fpkit/react/icons";

export type NavProps = {
  children?: React.ReactNode;
};

const defaultStyles = {};

const Nav = ({ children, ...props }: NavProps) => {
  return (
    <Navbar {...props}>
      <List>
        <List.ListItem>
          <Link href="/"><Icon.Home /> Home</Link>
        </List.ListItem>
        <List.ListItem>Blog</List.ListItem>
      </List>
      <List>
        <List.ListItem>About</List.ListItem>
        <List.ListItem>Support</List.ListItem>
      </List>
    </Navbar>
  );
};

export default Nav;
Nav.displayName = "Nav";
Nav.styles = defaultStyles;
