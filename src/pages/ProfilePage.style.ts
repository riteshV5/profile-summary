import { styled, Grid } from "@mui/material";

export const GridContaninerStyled = styled(Grid)(({ theme }) => ({
  border: 1,
  height: "100vh",
  [theme.breakpoints.down(480)]: {
    maxWidth: "480px",
    minWidth: "320px",
  },
  marginTop: 5,
}));
export const StyledGridProfile = styled(Grid)<{
  darkmode: boolean | undefined;
}>(({ darkmode }) => ({
  background: darkmode ? "#333" : "#fff",
}));
