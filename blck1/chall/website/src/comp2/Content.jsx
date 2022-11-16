import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AllCard from "./AllCard";

function Home() {
  return (
    <Box pt={13} sx={{ backgroundColor: "lightblue" }}>
      <Box ml={47} mb={5}>
        <Typography variant="h2" sx={{ fontSize: "48px" }}>
          Blog posts
        </Typography>
        <Typography sx={{ color: "#6D7D8B", fontSize: "18px" }}>
          Our latest updates and blogs about managing your team
        </Typography>
      </Box>
      <AllCard />
    </Box>
  );
}

export default Home;
