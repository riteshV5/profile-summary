import { Grid, styled } from "@mui/material";

export const StyledHeaderItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  border: "1px solid black",
  marginBottom: "10px",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 20px",
  [theme.breakpoints.down(480)]: {
    width: "100%",
    maxWidth: "480px",
    minWidth: "320px",
  },
}));
