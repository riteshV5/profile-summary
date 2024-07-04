import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PageProfile from "./pages/ProfilePage";
import { GridContaninerStyled } from "./pages/ProfilePage.style";
import Header from "./components/Header/Header";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <GridContaninerStyled justifyContent={"center"}>
        <Router>
          <Routes>
            <Route path={"/profile"} element={<PageProfile />} />
          </Routes>
        </Router>
      </GridContaninerStyled>
    </>
  );
};
export default App;
