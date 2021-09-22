import React from "react";

import defaultClasses from "./main.css";

const Main = (props) => {
  const { children } = props;
  return (
    <main className={defaultClasses.root}>
      <div className={defaultClasses.page}>{children}</div>
    </main>
  );
};

export default Main;
