import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Text, Link, Flex } from "components/UI";

import {
  HOME_ROUTE,
  ABOUT_ROUTE,
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
  MobileNav,
} from "./styles";
import Logo from "./assets/logo.png";

export default function Header() {
  let location = useLocation();
  let [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [location]);

  const menuItems = [
    { id: 1, url: ABOUT_ROUTE, text: "About" },
    { id: 2, url: PROJECTS_ROUTE, text: "Projects" },
    { id: 3, url: CONTACT_ROUTE, text: "Contact" },
  ];

  return (
    <StyledHeader>
      <Link to={HOME_ROUTE}>
        <img src={Logo} style={{ height: "95px" }} alt="Logo " />
      </Link>
      <Flex>
        <StyledList>
          {menuItems.map((menuItem) => (
            <Link
              className={active ? "desktop active" : "desktop"}
              to={menuItem.url}
              key={menuItem.id}
            >
              <li>
                <Text fontSize={textTheme.fontSize.title}>{menuItem.text}</Text>
              </li>
            </Link>
          ))}
        </StyledList>

        <MenuIconWrapper onClick={() => setActive(!active)}>
          <LineOne className={active ? "active-line-one" : ""}></LineOne>
          <LineTwo className={active ? "active-line-two" : ""}></LineTwo>
        </MenuIconWrapper>
      </Flex>

      <MobileNav className={active ? "mobile-nav-active" : ""}>
        {menuItems.map((menuItem) => (
          <Link
            // className={active ? "desktop active" : "desktop"}
            to={menuItem.url}
            key={menuItem.id}
          >
            <li>
              <Text className="list-text" fontSize={textTheme.fontSize.title}>
                {menuItem.text}
              </Text>
            </li>
          </Link>
        ))}
      </MobileNav>
    </StyledHeader>
  );
}
