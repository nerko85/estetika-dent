import React, { useState, useEffect } from "react";
import { Accordion as StyledAccordion } from "./Accordion.style";
import AccordionItem from "./AccordionItem";

export default function Accordion({ children, faqs }) {
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    setCurrent(1);
  }, []);
  return (
    <StyledAccordion>
      <div className="container">
        <div className="inner">
          {children}
          {faqs &&
            faqs.map((faq, id) => (
              <AccordionItem
                key={id}
                id={id}
                question={faq.question}
                answer={faq.answer}
                current={current}
              />
            ))}
        </div>
      </div>
    </StyledAccordion>
  );
}
