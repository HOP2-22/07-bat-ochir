import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <Box>
      <Typography variant="h2" sx={{}}>
        Blog posts
      </Typography>
      <Typography>
        Our latest updates and blogs about managing your team
      </Typography>
    </Box>
  );
}

export default Home;
