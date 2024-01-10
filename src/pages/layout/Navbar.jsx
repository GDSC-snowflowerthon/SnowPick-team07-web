import styled from "styled-components";

const NavBar = () => {
  const NavContainer = styled.div`
    height: 75px;
    padding: 1rem;
    color: white;
    background: teal;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <NavContainer>
      <h1>상단 네브바</h1>
      <nav>
        <span>Meun1</span>
        <span>Meun2</span>
      </nav>
    </NavContainer>
  );
};

export default NavBar;
