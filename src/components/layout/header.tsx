import React from "react";
import { Header as MainHeader, Title } from "@fpkit/react";

export type MainHeaderProps = {
  headerTitle: React.ReactNode;
  headerSubtitle?: React.ReactNode;
  children?: React.ReactNode;
};

const defaultStyles = {};

const Header = ({
  headerTitle,
  headerSubtitle,
  children,
  ...props
}: MainHeaderProps) => {
  return (
    <>
      <MainHeader {...props}>
        <Title elm="h2">{headerTitle}</Title>
        <Title elm="h3">{headerSubtitle}</Title>
        {children}
      </MainHeader>
    </>
  );
};

export default Header;
Header.displayName = "Header";
Header.styles = defaultStyles;
