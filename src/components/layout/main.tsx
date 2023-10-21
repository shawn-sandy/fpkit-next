import React from "react";

export type MainProps = {
  children: React.ReactNode;
};

const defaultStyles = {};

const Main = ({ children, ...props }: MainProps) => {
  return (
    <main {...props}>
      <section>{children}</section>
    </main>
  );
};

export default Main;
Main.displayName = "Main";
Main.styles = defaultStyles;
