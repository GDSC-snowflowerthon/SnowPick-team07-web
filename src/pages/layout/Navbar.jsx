import * as S from "./style";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <S.NavContainer>
      <h1>상단 네브바</h1>
      <S.NavItemContainer>
        <NavLink to="/">
          <S.NavItem>Menu1</S.NavItem>
        </NavLink>
        <NavLink to="/list">
          <S.NavItem>Menu2</S.NavItem>
        </NavLink>
      </S.NavItemContainer>
    </S.NavContainer>
  );
};

export default NavBar;
