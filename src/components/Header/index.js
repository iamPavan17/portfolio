import React from "react";
import { StyledHeader, StyledList } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <div style={{ fontSize: "20px" }}>PAVAN.</div>
      <nav>
        <StyledList>
          <li>About</li>
          <li>Resume</li>
          <li>Projects</li>
          <li>Contact</li>
        </StyledList>
      </nav>
    </StyledHeader>
  );
}
