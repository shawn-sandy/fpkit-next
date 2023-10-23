import React from "react";
import { Header, Title } from "@fpkit/react";

export type MainHeaderProps = {
  headerTitle: React.ReactNode;
  headerSubtitle?: React.ReactNode;
  children?: React.ReactNode;
};

const defaultStyles = {};

const MainHeader = ({
  headerTitle,
  headerSubtitle,
  children,
  ...props
}: MainHeaderProps) => {
  return (
    <>
      <Header {...props}>
        <Title elm="h2">{headerTitle}</Title>
        <Title elm="h3">{headerSubtitle}</Title>
        {children}
      </Header>
    </>
  );
};

export default MainHeader;
MainHeader.displayName = "MainHeader";
MainHeader.styles = defaultStyles;
