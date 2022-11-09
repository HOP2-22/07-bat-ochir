import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ColorModeContext } from "../context/ThemeContext";
import { useContext } from "react";
import Switch from "@mui/material/Switch";
import ThemeContext from "../context/ThemeContext";

const label = { inputProps: { "aria-label": "Switch demo" } };
function Header() {
  const { theme, changeTheme } = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Box>
        <Typography variant="h4" color="initial">
          Team.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Switch
          {...label}
          defaultChecked
          onChange={(e) => {
            changeTheme(e.target.checked);
          }}
        />

        <Typography
          sx={{
            textDecoration: "underline",
            color: "grey",
          }}
        >
          Products
        </Typography>
        <Typography
          sx={{
            textDecoration: "underline",
            color: "grey",
          }}
        >
          Services
        </Typography>
        <Typography
          sx={{
            textDecoration: "underline",
            color: "grey",
          }}
        >
          Contact
        </Typography>
        <Typography
          sx={{
            textDecoration: "underline",
            color: "grey",
          }}
        >
          Log in
        </Typography>
        <Button
          variant="outlined"
          sx={{
            border: "2px solid ",
          }}
        >
          Get Access
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
