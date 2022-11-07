import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Header() {
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
