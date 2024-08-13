import { styled, Grid } from "@mui/material";

export const GridContaninerStyled = styled(Grid)<{
  darkMode?: boolean | undefined;
}>(({ darkMode, theme }) => ({
  border: 1,
  [theme.breakpoints.down(480)]: {
    maxWidth: "480px",
    minWidth: "320px",
  },
  marginTop: 5,
  root: {
    background: darkMode ? "#161b22" : "#ffffff",
  },
}));
export const StyledGridProfile = styled(Grid)<{
  darkmode: boolean | undefined;
}>(({ darkmode }) => ({
  background: darkmode ? "#333" : "#fff",
}));
