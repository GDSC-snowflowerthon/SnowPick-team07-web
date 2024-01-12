// Navbar.jsx
import * as S from "./style";

const NavBar = () => {
  return (
    <S.NavContainer>
      <S.NavHeaderText>SnowPick</S.NavHeaderText>
      <S.NavItemContainer>
        <S.StyledNavLink to="/">이미지 만들기</S.StyledNavLink>
        <S.StyledNavLink to="/list">눈송이 구경하기</S.StyledNavLink>
        <S.StyledNavLink to="/gifList">작품 구경하기</S.StyledNavLink>
      </S.NavItemContainer>
    </S.NavContainer>
  );
};

export default NavBar;
