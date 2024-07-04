import React from "react";
import { Grid } from "@mui/material";
import { StyledHeaderItem } from "./Header.style";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDarkMode } from "../../hooks/DarkModeThemeProvider";

const Header: React.FC = () => {
  const { darkMode, handleDarkMode } = useDarkMode();
  return (
    <>
      <Grid container>
        <StyledHeaderItem item lg={12} sm={12}>
          <p>Profile</p>
          {darkMode ? (
            <LightModeOutlinedIcon onClick={handleDarkMode} />
          ) : (
            <DarkModeIcon onClick={handleDarkMode} />
          )}
        </StyledHeaderItem>
      </Grid>
    </>
  );
};
export default Header;
