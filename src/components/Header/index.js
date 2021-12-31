import React from "react";
import { Text, Link } from "components/UI";

import {
  ABOUT_ROUTE,
  RESUME_ROUTE,
  PROJECTS_ROUTE,
  CONTACT_ROUTE,
} from "App/routes";
import { textTheme } from "App/theme/text.theme";
import { StyledHeader, StyledList, onHoverStyle } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <Link to={ABOUT_ROUTE}>
        <Text fontSize={textTheme.fontSize.h3} fontWeight={"bold"}>
          PORTFOLIO .
        </Text>
      </Link>
      <nav>
        <StyledList>
          <Link to={ABOUT_ROUTE} css={onHoverStyle}>
            <li>
              <Text fontSize={textTheme.fontSize.h5}>About</Text>
            </li>
          </Link>

          <Link to={RESUME_ROUTE} css={onHoverStyle}>
            <li>
              <Text fontSize={textTheme.fontSize.h5}>Resume</Text>
            </li>
          </Link>

          <Link to={PROJECTS_ROUTE} css={onHoverStyle}>
            <li>
              <Text fontSize={textTheme.fontSize.h5}>Projects</Text>
            </li>
          </Link>

          <Link to={CONTACT_ROUTE} css={onHoverStyle}>
            <li>
              <Text fontSize={textTheme.fontSize.h5}>Contact</Text>
            </li>
          </Link>
        </StyledList>
      </nav>
    </StyledHeader>
  );
}
