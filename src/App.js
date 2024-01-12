import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as S from "./style";

import HomePage from "./pages/home/HomePage";
import ListPage from "./pages/snowList/ListPage";
import NavBar from "./pages/layout/Navbar";
import Footer from "./pages/layout/Footer";
import GifListPage from "./pages/gifList/GifListPage";

function App() {
  return (
    <Router>
      <S.Wrapper>
        <NavBar />
        <S.ContentWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/gifList" element={<GifListPage />} />
          </Routes>
        </S.ContentWrapper>
        <Footer />
      </S.Wrapper>
    </Router>
  );
}

export default App;
