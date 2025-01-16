import React from "react";

const Heading = ({ clasName, title, text }) => {
  return (
    <div className={`${clasName} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 to-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
