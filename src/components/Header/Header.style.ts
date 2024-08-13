import { Grid, styled } from "@mui/material";

export const StyledHeardGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down(480)]: {
    position: "fixed",
    bottom: 0,
  },
}));

export const StyledHeaderItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  border: "1px solid black",
  marginBottom: "10px",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 20px",
  borderRadius: 50,
  [theme.breakpoints.down(480)]: {
    width: "100%",
    maxWidth: "480px",
    minWidth: "320px",
  },
}));

export const StyledIconWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "0px 10px",
});
