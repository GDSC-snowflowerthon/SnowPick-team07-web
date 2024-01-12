import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  height: 75px;
  padding: 1rem;
  color: white;
  background-color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItemContainer = styled.nav`
  margin-right: 30px;
`;

export const NavHeaderText = styled.div`
  font-size: 44px;
  color: black;
`;

export const StyledNavLink = styled(NavLink)`
  margin-right: 30px;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    text-decoration: none;
    background-color: lightgray;
  }

  &.active {
    background-color: skyblue;
    color: black;
  }
`;

export const NavItem = styled.span`
  margin-right: 30px;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }

  &.active {
    color: inherit;
  }
`;

export const FooterContainer = styled.div`
  border: 1px solid skyblue;
  height: 100px;
`;

export const BlodTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
`;
