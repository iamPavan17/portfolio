import React from "react";
import { Text } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import { StyledHeader, StyledList } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <Text fontSize={textTheme.fontSize.h4} fontWeight={"bold"}>
        PORTFOLIO .
      </Text>
      <nav>
        <StyledList>
          <li>
            <Text fontSize={textTheme.fontSize.h5}>About</Text>
          </li>
          <li>
            <Text fontSize={textTheme.fontSize.h5}>Resume</Text>
          </li>
          <li>
            <Text fontSize={textTheme.fontSize.h5}>Projects</Text>
          </li>
          <li>
            <Text fontSize={textTheme.fontSize.h5}>Contact</Text>
          </li>
        </StyledList>
      </nav>
    </StyledHeader>
  );
}
