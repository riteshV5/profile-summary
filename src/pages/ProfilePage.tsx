import React from "react";
import { Grid } from "@mui/material";
import { StyledGridProfile } from "./ProfilePage.style";
import { PROFILE_SUMMARY } from "../constants/profilePage.constants";
import { useDarkMode } from "../hooks/DarkModeThemeProvider";

const ProfilePage: React.FC = () => {
  const { darkMode } = useDarkMode();
  return (
    <StyledGridProfile
      container
      spacing={2}
      justifyContent={"center"}
      darkmode={darkMode ? darkMode : undefined}
    >
      <Grid
        item
        lg={2}
        style={{ background: "white", border: "1px solid black" }}
      >
        <p>Photo</p>
      </Grid>
      <Grid
        item
        lg={8}
        style={{ background: "white", border: "1px solid black" }}
      >
        <p>{PROFILE_SUMMARY}</p>
      </Grid>
    </StyledGridProfile>
  );
};
export default ProfilePage;
