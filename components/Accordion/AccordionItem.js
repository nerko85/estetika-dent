import React from "react";
import { AccordionItem as Item } from "./Accordion.style";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function AccordionItem({
  id,
  question,
  answer,
  current,
  setCurrent,
}) {
  const handleClick = (id) => {
    setCurrent(id);
  };
  return (
    <Item
      className={id === current ? "active" : ""}
      onClick={(e) => handleClick(id)}
    >
      <div className="title">
        {current === id ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
        <h3>{question}</h3>
      </div>
      {current === id && <p>{answer}</p>}
    </Item>
  );
}
