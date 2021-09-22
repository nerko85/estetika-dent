import React from "react";
import { ContactStrip as Strip } from "./ContactStrip.style";
import { VscArrowRight } from "react-icons/vsc";

export default function ContactStrip({ text }) {
  return (
    <Strip>
      <div className="container">
        <h1>
          {text}{" "}
          <span>
            <VscArrowRight />
          </span>
        </h1>
      </div>
    </Strip>
  );
}
