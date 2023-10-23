"use client";
import React from "react";

import { Main, Aside } from "@fpkit/react";

export type MainProps = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  styles?: React.CSSProperties;
  sidebarStyles?: React.CSSProperties;
};

const defaultStyles: React.CSSProperties = {};

const MainSection = ({
  sidebar,
  styles,
  sidebarStyles,
  children,
  ...props
}: MainProps) => {
  const style: React.CSSProperties = { ...defaultStyles, ...styles };
  return (
    <Main {...props} styles={style}>
      <section data-content data-fluid>
        <article>{children}</article>
        {sidebar && <Aside styles={sidebarStyles}>{sidebar}</Aside>}
      </section>
    </Main>
  );
};

export default MainSection;
MainSection.displayName = "MainSection";
MainSection.styles = defaultStyles;
