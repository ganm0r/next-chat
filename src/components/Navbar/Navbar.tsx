import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import Link from "next/link";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  max-width: 100vw;
  background-color: ${theme.colors["purple-0"]};
  padding: 8px 16px;
  font-family: ${theme.fonts.primary};
  box-shadow: 0px 2px 10px #EF9A9A;

  p {
    margin: 0%;
    font-size: 30px;
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors["grey-1"]};
  }

  a {
    font-size: 30px;
    line-height: 20px;
    text-decoration: none;
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors["grey-1"]};
  }

  a:hover {
    text-decoration: underline;
  }
`;

const StyledDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface NavbarProps {
  username: string | string[] | undefined;
}

interface NavbarLink {
  label: string;
  href: string;
}

const MENU_LINKS: Array<NavbarLink> = [
  {
    label: "NextChat",
    href: "/",
  },
];

const Navbar = ({ username }: NavbarProps): JSX.Element => {
  return (
    <React.Fragment>
      <StyledNav>
        <StyledDiv>
          <ul>
            {MENU_LINKS.map((link) => (
              <Link key={`${link.href}${link.label}`} href={link.href}>
                {link.label}
              </Link>
            ))}
          </ul>
          <StyledDiv style={{ width: "250px" }}>
            { username! && <p>Hello, {username}</p> }
          </StyledDiv>
        </StyledDiv>
      </StyledNav>
    </React.Fragment>
  );
};

export { Navbar };
export type { NavbarProps };
