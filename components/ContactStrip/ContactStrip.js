import React from "react";
import Link from "next/link";
import { ContactStrip as Strip } from "./ContactStrip.style";
import { VscArrowRight } from "react-icons/vsc";

export default function ContactStrip({ text, url }) {
  return (
    <Strip>
      <div className="container">
        <Link href={url}>
          <a>
            <h1>
              {text}
              <span>
                <VscArrowRight />
              </span>
            </h1>
          </a>
        </Link>
      </div>
    </Strip>
  );
}

ContactStrip.defaultProps = {
  url: "/contact",
};
