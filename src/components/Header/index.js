import React, { useState } from "react";
import { Text, Link } from "components/UI";

import {
  ABOUT_ROUTE,
  RESUME_ROUTE,
  PROJECTS_ROUTE,
  CONTACT_ROUTE,
} from "App/routes";
import { textTheme } from "App/theme/text.theme";
import {
  StyledHeader,
  StyledList,
  MenuIconWrapper,
  LineOne,
  LineTwo,
} from "./styles";

export default function Header() {
  let [active, setActive] = useState(false);

  return (
    <StyledHeader>
      <Link to={ABOUT_ROUTE}>
        <Text fontSize={textTheme.fontSize.h3} fontWeight={"bold"}>
          PORTFOLIO .
        </Text>
      </Link>
      <nav>
        <StyledList>
          <Link className={active ? "active" : ""} to={ABOUT_ROUTE}>
            <li>
              <Text fontSize={textTheme.fontSize.title}>About</Text>
            </li>
          </Link>

          <Link className={active ? "active" : ""} to={RESUME_ROUTE}>
            <li>
              <Text fontSize={textTheme.fontSize.title}>Resume</Text>
            </li>
          </Link>

          <Link className={active ? "active" : ""} to={PROJECTS_ROUTE}>
            <li>
              <Text fontSize={textTheme.fontSize.title}>Projects</Text>
            </li>
          </Link>

          <Link className={active ? "active" : ""} to={CONTACT_ROUTE}>
            <li>
              <Text fontSize={textTheme.fontSize.title}>Contact</Text>
            </li>
          </Link>
          <MenuIconWrapper onClick={() => setActive(!active)}>
            <LineOne className={active ? "active-line-one" : ""}></LineOne>
            <LineTwo className={active ? "active-line-two" : ""}></LineTwo>
          </MenuIconWrapper>
        </StyledList>
      </nav>
    </StyledHeader>
  );
}
