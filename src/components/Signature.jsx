import React, { useState } from "react";
import Title from "./Title";

const Signature = () => {
    const inputControls = {
        display:"flex",
        justifyContent:"center",
        gap:"20px",
        

    }
  const [text, setText] = useState("Raju Kandel");
  const [date, setDate] = useState();
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  return (
    <section>
      <Title text={text} />
      <Title text={!date ? "nodate" : date} />
      <p>This is the react app to understand the concepts</p>
      <div style ={inputControls}>
        <input type="date" value={date} onChange={onChangeDate} />
        <input
          type="text"
          placeholder="Person name here .."
          value={text}
          onChange={onChangeText}
        />
      </div>
    </section>
  );
};
export default Signature;
