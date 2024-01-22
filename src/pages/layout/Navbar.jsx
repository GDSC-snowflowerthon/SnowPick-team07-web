// Navbar.jsx
import * as S from "./style";

const NavBar = () => {
  return (
    <S.NavContainer>
      <div>
        <S.MainText>추억사진에</S.MainText>
        <S.MainText>눈을 내려보세요</S.MainText>
      </div>
      <S.NavLinkDiv>
        <S.StyledNavLink to="/">이미지 만들기</S.StyledNavLink>
        <S.StyledNavLink to="/list">눈송이 구경하기</S.StyledNavLink>
        <S.StyledNavLink to="/gifList">작품 구경하기</S.StyledNavLink>
      </S.NavLinkDiv>
    </S.NavContainer>
  );
};

export default NavBar;
