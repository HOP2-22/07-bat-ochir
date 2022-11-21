import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import photo1 from "../imgs/photo1.jpg";

import { Box, Avatar } from "@mui/material";
function Cart({ image, title, des, avatar, name, date, like, text }) {
  return (
    <Card sx={{ maxWidth: 345, paddingBottom: "20px" }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
        src=""
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {des}
        </Typography>
      </CardContent>
      <Box
        sx={{
          marginLeft: "-70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <Typography sx={{ marginLeft: "-180px", color: "red" }}>
          likes:{like}
        </Typography>
        <Typography sx={{ color: "blue", width: "250px", marginLeft: "10px" }}>
          {text}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              marginLeft: "-70px",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Avatar alt="Remy Sharp" src={image} />
            <Typography
              sx={{
                color: " #6D7D8B",
                fontSize: "22px",
              }}
            >
              {name}
            </Typography>
          </Box>

          <Typography
            sx={{
              color: " #6D7D8B",
              fontSize: "12px",
            }}
          >
            {date}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
export default Cart;
