import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <Box sx={{ marginLeft: "380px", marginBottom: "50px", marginTop: "150px" }}>
      <Typography variant="h2" sx={{ fontSize: "48px" }}>
        Blog posts
      </Typography>
      <Typography sx={{ color: "#6D7D8B", fontSize: "18px" }}>
        Our latest updates and blogs about managing your team
      </Typography>
    </Box>
  );
}

export default Home;
