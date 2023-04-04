import React from "react";

const Title = ({ text }) => {
  return (
    <section>
      <h1>{!text ? "noName" : text}</h1>
    </section>
  );
};

export default Title;
