import React from "react";

const Button = ({ text , icon,onClick }) => {
  return (
    <section>
      <button onClick={onClick}>
        {icon}
        {!text?"click":text}</button>
    </section>
  );
};

export default Button;
