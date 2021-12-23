import React from "react";
import { Text } from "components/UI";
import { StyledHeader, StyledList } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <Text fontSize={2} fontWeight="bold">
        PORTFOLIO .
      </Text>
      <nav>
        <StyledList>
          <li>
            <Text fontSize={1.8}>About</Text>
          </li>
          <li>
            <Text fontSize={1.8}>Resume</Text>
          </li>
          <li>
            <Text fontSize={1.8}>Projects</Text>
          </li>
          <li>
            <Text fontSize={1.8}>Contact</Text>
          </li>
        </StyledList>
      </nav>
    </StyledHeader>
  );
}
