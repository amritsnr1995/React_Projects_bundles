import React, { useEffect, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import "../testimonials_app/Testimonials.css";

const TestimonialsApp = () => {
  const [testimonials, setTestimonials] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  // const handleClick =()=> {
  //   console.log("clicked");
  // }
  return (
    <section>
      <Title text={"Testimonails App"} />
      <div className="buttons_groups">
        <Button
          text={"posts"}
          icon={<BsFillFileEarmarkPostFill />}
          onClick={() => setTestimonials("Posts")}
        />
        <Button
          text={"Users"}
          icon={<FaUserAlt />}
          onClick={() => setTestimonials("Users")}
        />
        <Button
          text={"Comments"}
          icon={<BiCommentDetail />}
          onClick={() => setTestimonials("Comments")}
        />
      </div>
      <Title text={!testimonials ? "select from above !" : testimonials} />
      
    </section>
  );
};

export default TestimonialsApp;
