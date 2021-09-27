import React from "react";
import { Location as StyledLocation } from "./Location.style";
import {
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaPhoneSquareAlt,
} from "react-icons/fa";

export default function Location({ company }) {
  return (
    <StyledLocation>
      {company && (
        <div className="location--item">
          <ul>
            <li>
              <span>
                <FaMapMarkerAlt />
              </span>
              Adresa: {company.address}
            </li>
            <li>
              <span>
                <FaPhoneSquareAlt />
              </span>
              {company.phone}
            </li>
            <li>
              <span>
                <FaMobileAlt />
              </span>
              {company.phone}
            </li>
            <li>
              <span>
                <FaEnvelope />
              </span>
              {company.email}
            </li>
          </ul>
        </div>
      )}
    </StyledLocation>
  );
}
