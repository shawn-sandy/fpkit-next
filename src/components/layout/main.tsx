"use client";
import React from "react";

import { Main as MainSidebar, Aside } from "@fpkit/react";

export type MainProps = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  styles?: React.CSSProperties;
  sidebarStyles?: React.CSSProperties;
};

const defaultStyles: React.CSSProperties = {};

const Main = ({
  sidebar,
  styles,
  sidebarStyles,
  children,
  ...props
}: MainProps) => {
  const style: React.CSSProperties = { ...defaultStyles, ...styles };
  return (
    <MainSidebar {...props} styles={style}>
      <section data-content data-fluid>
        <article>{children}</article>
        {sidebar && <Aside styles={sidebarStyles}>{sidebar}</Aside>}
      </section>
    </MainSidebar>
  );
};

export default Main;
Main.displayName = "MainSection";
Main.styles = defaultStyles;
