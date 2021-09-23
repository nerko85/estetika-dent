import React from "react";
import { AccordionItem as Item } from "./Accordion.style";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function AccordionItem({ id, question, answer, current }) {
  const handleClick = () => {
    console.log("test");
  };
  return (
    <Item className={id === current ? "active" : ""}>
      <div className="title">
        {current === id ? (
          <AiOutlinePlusCircle onClick={handleClick} />
        ) : (
          <AiOutlineMinusCircle onClick={handleClick} />
        )}
        <h3>{question}</h3>
      </div>
      <p>{answer}</p>
    </Item>
  );
}
