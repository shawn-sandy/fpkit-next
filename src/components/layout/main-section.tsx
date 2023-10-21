"use client";
import React from "react";

import { Main } from "@fpkit/react";

export type MainProps = {
  children: React.ReactNode;
};

const defaultStyles = {};

const MainSection = ({ children, ...props }: MainProps) => {
  return (
    <Main {...props}>
      <section>{children}</section>
    </Main>
  );
};

export default MainSection;
MainSection.displayName = "MainSection";
MainSection.styles = defaultStyles;
