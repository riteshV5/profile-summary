import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ModalComponent from "../../components/Modal.ts/ModalComponent";
import { useDarkMode } from "../../hooks/DarkModeThemeProvider";

const Home: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    console.log("Open");
    return () => {
      console.log("return callback");
    };
  },);
  const { darkMode } = useDarkMode();
  const handleResumeClick = () => {
    setOpen(() => true);
  };
  return (
    <Grid container justifyContent={"center"}>
      <Grid item lg={6} sm={12} xs={12}>
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            height: 300,
            background: darkMode ? "#1F2328" : "#ffffff",
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
                flexDirection: "column",
              }}
            >
              <Typography component="div" variant="h5">
                ABC XYZ
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Frontend Developer
              </Typography>
              <div>
                <Button variant="outlined" onClick={handleResumeClick}>
                  Resume
                </Button>
                <Button variant="outlined">Profile</Button>
              </div>
            </CardContent>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 151, height: 150, borderRadius: 200 }}
              image="/src/assets/image.png"
              alt="Live from space album cover"
            />
          </Box>
        </Card>
        <ModalComponent open={open} setOpen={setOpen} />
      </Grid>
    </Grid>
  );
};

export default Home;
