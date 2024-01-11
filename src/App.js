import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as S from "./style";

import HomePage from "./pages/home/HomePage";
import ListPage from "./pages/list/ListPage";
import NavBar from "./pages/layout/Navbar";
import Footer from "./pages/layout/Footer";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Router>
      <S.Wrapper>
        <NavBar />
        <S.ContentWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list" element={<ListPage />} />
          </Routes>
        </S.ContentWrapper>
        <Footer />
      </S.Wrapper>
    </Router>
  );
}

export default App;
