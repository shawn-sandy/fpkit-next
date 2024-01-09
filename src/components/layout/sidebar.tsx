import React from "react";

import { Aside } from "@fpkit/react";

export type MainSidebarProps = {
  children: React.ReactNode;
};

const defaultStyles = {};

const Sidebar = ({ children, ...props }: MainSidebarProps) => {
  return <Aside {...props}>{children}</Aside>;
};

export default Sidebar;
Sidebar.displayName = "Sidebar";
Sidebar.styles = defaultStyles;
