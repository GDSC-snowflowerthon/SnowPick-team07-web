import styled from "styled-components";
import { NavLink } from "react-router-dom";

// export const NavContainer = styled.div`
//   height: 75px;
//   padding: 1rem;
//   color: white;
//   background-color: rgba(255, 255, 255, 0.7);
//   font-weight: bold;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const NavItemContainer = styled.nav`
//   margin-right: 30px;
// `;

// export const NavHeaderText = styled.div`
//   font-size: 44px;
//   color: black;
// `;

// export const StyledNavLink = styled(NavLink)`
//   margin-right: 30px;
//   text-decoration: none;
//   padding: 10px;
//   border-radius: 5px;

//   &:hover {
//     text-decoration: none;
//     background-color: lightgray;
//   }

//   &.active {
//     background-color: skyblue;
//     color: black;
//   }
// `;

// export const NavItem = styled.span`
//   margin-right: 30px;
//   text-decoration: none;
//   color: inherit;

//   &:hover {
//     text-decoration: none;
//     color: inherit;
//   }

//   &.active {
//     color: inherit;
//   }
// `;

// export const FooterContainer = styled.div`
//   border: 1px solid skyblue;
//   height: 100px;
// `;

// export const BlodTitle = styled.p`
//   font-weight: bold;
//   font-size: 24px;
// `;

export const NavContainer = styled.div`
  /* height: 75px; */
  margin: 0 auto;
  padding-top: 4rem;
  width: 55%;
  color: white;
  /* background-color: rgba(255, 255, 255, 1); */
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const NavItemContainer = styled.nav`
  margin-right: 30px;
`;

export const NavHeaderText = styled.div`
  font-size: 44px;
  color: black;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;

  color: black;
  background-color: white;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 10px;

  &:hover {
    text-decoration: none;
    background-color: lightgray;
    /* color: ; */
  }

  &.active {
    background-color: grey;
    color: black;
  }
  width: calc(33.333% - 13.333px); /* 각 요소의 너비를 조정합니다 */
  margin-right: 20px; /* 오른쪽 마진 적용 */

  &:last-child {
    margin-right: 0; /* 마지막 요소에는 마진을 적용하지 않음 */
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

export const MainText = styled.div`
  font-weight: bold;
  font-size: 3rem;
  padding-bottom: 1rem;
`;

// export const

export const NavLinkDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MiddleText = styled.div`
  font-weight: 100;
  font-size: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;
