import * as S from "./style";

const NavBar = () => {
  return (
    <S.NavContainer>
      <h1>상단 네브바</h1>
      <S.NavItemContainer>
        <S.NavItem>Meun1</S.NavItem>
        <S.NavItem>Meun2</S.NavItem>
      </S.NavItemContainer>
    </S.NavContainer>
  );
};

export default NavBar;
