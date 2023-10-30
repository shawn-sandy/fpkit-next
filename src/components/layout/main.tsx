"use client";
import React from "react";

import { Main as MainSection, Aside } from "@fpkit/react";
import Sidebar from "./sidebar";

export type MainProps = {
  children: React.ReactNode;
  sidebar?: Boolean;
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
    <>
      <MainSection {...props} styles={style} data-style="cover">
        <section data-content data-fluid>
          <article>{children}</article>
          {sidebar && (
            <Aside styles={sidebarStyles}>
              <Sidebar>
                Nostrud non non est voluptate sit in laboris dolore labore id
                proident tempor. Ex cillum aliqua laborum mollit aliquip
                exercitation occaecat dolore sit. Excepteur fugiat dolor sint
                nostrud elit aliquip voluptate amet eu id ea cillum. Eiusmod
                aliqua voluptate deserunt veniam qui consectetur pariatur ipsum
                ipsum.
              </Sidebar>
            </Aside>
          )}
        </section>
      </MainSection>
    </>
  );
};

export default Main;
Main.displayName = "MainSection";
Main.styles = defaultStyles;
