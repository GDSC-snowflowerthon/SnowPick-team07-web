import * as S from "./style";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <S.NavContainer>
      <h1>상단 네브바</h1>
      <S.NavItemContainer>
        <NavLink to="/">
          <S.NavItem>Home</S.NavItem>
        </NavLink>
        <NavLink to="/list">
          <S.NavItem>ImageList</S.NavItem>
        </NavLink>
      </S.NavItemContainer>
    </S.NavContainer>
  );
};

export default NavBar;
