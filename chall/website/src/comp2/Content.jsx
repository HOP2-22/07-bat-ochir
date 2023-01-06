import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AllCard from "./AllCard";
import { useContext, React } from "react";
import { ColorModeContext } from "../Context/Context";

function Home() {
  const { theme, changeTheme } = useContext(ColorModeContext);
  console.log(theme);
  return (
    <div>
      <Box pt={13} sx={{}}>
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
    </div>
  );
}

export default Home;
