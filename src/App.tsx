import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PageProfile from "./pages/profile-page/ProfilePage";
import { GridContaninerStyled } from "./pages/profile-page/ProfilePage.style";
import Header from "./components/Header/Header";
import React, { useState } from "react";
import Home from "./pages/home-page/Home";
import { useDarkMode } from "./hooks/DarkModeThemeProvider";

const App: React.FC = () => {
  const [showContactList, setShowCOntactList] = useState<boolean>(false);
  const { darkMode } = useDarkMode();

  const handleContactClick = () => {
    setShowCOntactList(!showContactList);
  };
  return (
    <div className={darkMode ? "dark-app-root" : "light-app-root"}>
      <Header
        showContactList={showContactList}
        handleContactClick={handleContactClick}
      />
      <GridContaninerStyled
        justifyContent={"center"}
        darkMode={darkMode ? darkMode : undefined}
        sx={{ background: darkMode ? "#0d1117" : "#ffffff" }}
      >
        <Router>
          <Routes>
            <Route path={"/profile"} element={<PageProfile />} />
            <Route path={"/home"} element={<Home />} />
          </Routes>
        </Router>
      </GridContaninerStyled>
    </div>
  );
};
export default App;
