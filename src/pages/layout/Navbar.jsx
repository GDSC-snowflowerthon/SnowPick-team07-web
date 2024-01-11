// Navbar.jsx
import * as S from "./style";

const NavBar = () => {
  return (
    <S.NavContainer>
      <h1>상단 네브바</h1>
      <S.NavItemContainer>
        <S.StyledNavLink to="/">이미지 만들기</S.StyledNavLink>
        <S.StyledNavLink to="/list">구경하기</S.StyledNavLink>
      </S.NavItemContainer>
    </S.NavContainer>
  );
};

export default NavBar;
