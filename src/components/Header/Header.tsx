import React, { useEffect } from "react";
import { Box, Card, CardContent, Grid } from "@mui/material";
import {
  StyledHeaderItem,
  StyledHeardGrid,
  StyledIconWrapper,
} from "./Header.style";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDarkMode } from "../../hooks/DarkModeThemeProvider";
import ContactMe from "../contact-me/ContactMe";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

type headerComponentType = {
  showContactList: boolean;
  handleContactClick: () => void;
};
const Header: React.FC<headerComponentType> = ({
  showContactList,
  handleContactClick,
}) => {
  const { darkMode, handleDarkMode } = useDarkMode();
  return (
    <>
      <StyledHeardGrid container>
        <StyledHeaderItem item lg={12} sm={12}>
          <Grid item lg={1} sm={1}>
            <p>Profile</p>
          </Grid>
          <Grid item lg={2} sm={2} display={"flex"} flexDirection={"row"}>
            <StyledIconWrapper>
              {darkMode ? (
                <LightModeOutlinedIcon onClick={handleDarkMode} />
              ) : (
                <DarkModeIcon onClick={handleDarkMode} />
              )}
            </StyledIconWrapper>

            <ContactMe
              showContactList={showContactList}
              handleContactClick={handleContactClick}
            />
          </Grid>
        </StyledHeaderItem>
        {showContactList && (
          <div
            role="presentation"
            style={{
              zIndex: 1,
              transition: "1s",
              position: "fixed",
              bottom: 60,
            }}
          >
            <Card
              sx={{
                display: "flex",
                justifyContent: "right",
                width: "100%",
                zIndex: 600,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px !important",
                  }}
                >
                  <StyledIconWrapper>
                    <PhoneRoundedIcon />{" "}
                    <a href="tel: +91 9721573024">+91 9721573024</a>
                  </StyledIconWrapper>
                  <StyledIconWrapper>
                    <LinkedInIcon />
                  </StyledIconWrapper>
                  <StyledIconWrapper>
                    <EmailOutlinedIcon />
                  </StyledIconWrapper>
                </CardContent>
              </Box>
            </Card>
          </div>
        )}
      </StyledHeardGrid>
    </>
  );
};
export default Header;
