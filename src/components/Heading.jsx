import React from "react";

const Heading = ({ clasName, title }) => {
  return (
    <div className={`${clasName} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
