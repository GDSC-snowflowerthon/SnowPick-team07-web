import { useLocation } from "react-router-dom";
import * as S from "./style";

const NavBar = () => {
  const location = useLocation();
  let mainText;

  switch (location.pathname) {
    case "/":
      mainText = (
        <>
          <S.MainText>추억사진에</S.MainText>
          <S.MainText>눈을 내려보세요</S.MainText>
          <S.MiddleText>원하는 이미지도 내리게 할 수 있습니다 </S.MiddleText>
        </>
      );
      break;
    case "/list":
      mainText = (
        <>
          <S.MainText>눈송이 구경하기</S.MainText>
          <S.MiddleText>다른 사람의 눈송이를 구경해보세요</S.MiddleText>
        </>
      );
      break;
    case "/gifList":
      mainText = (
        <>
          <S.MainText>작품 구경하기</S.MainText>
          <S.MiddleText>다른 사람의 작품을 구경해보세요</S.MiddleText>
        </>
      );
      break;
    // 여기에 추가 경로들에 대한 case를 추가할 수 있습니다.
    default:
      mainText = (
        <>
          <S.MainText>추억사진에</S.MainText>
          <S.MainText>눈을 내려보세요</S.MainText>
        </>
      );
  }

  return (
    <S.NavContainer>
      <div>{mainText}</div>
      <S.NavLinkDiv>
        <S.StyledNavLink to="/">이미지 만들기</S.StyledNavLink>
        <S.StyledNavLink to="/list">눈송이 구경하기</S.StyledNavLink>
        <S.StyledNavLink to="/gifList">작품 구경하기</S.StyledNavLink>
      </S.NavLinkDiv>
    </S.NavContainer>
  );
};

export default NavBar;
