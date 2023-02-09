import React from "react";

const Scroll = ({children}) => {
  return (
    <div style={{overflow: "scroll", height: "600px", overflowX: "hidden"}}>
      {children}
    </div>
  );
};

export default Scroll;
