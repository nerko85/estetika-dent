import React from "react";
import { AccordionItem as Item } from "./Accordion.style";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { motion } from "framer-motion";

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
  const variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { type: "spring", duration: 0.6, origin: "top" },
    },
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
      {current === id && (
        <motion.p
          key={current}
          style={{ originY: 0 }}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {answer}
        </motion.p>
      )}
    </Item>
  );
}
