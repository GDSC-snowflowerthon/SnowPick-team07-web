import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  height: 75px;
  padding: 1rem;
  color: white;
  background: teal;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItemContainer = styled.nav`
  margin-right: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  margin-right: 30px;
  text-decoration: none; // 밑줄 제거
  color: inherit; // 부모 요소의 색상 상속

  &:hover {
    text-decoration: none; // 마우스 오버 시 밑줄 제거
    color: blue; // 마우스 오버 시 색상 유지
  }

  &.active {
    color: black; // 활성화된 링크의 색상 유지
  }
`;

export const NavItem = styled.span`
  margin-right: 30px;
  text-decoration: none; // 밑줄 제거
  color: inherit; // 부모 요소의 색상 상속

  &:hover {
    text-decoration: none; // 마우스 오버 시 밑줄 제거
    color: inherit; // 마우스 오버 시 색상 유지
  }

  &.active {
    color: inherit; // 활성화된 링크의 색상 유지
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
