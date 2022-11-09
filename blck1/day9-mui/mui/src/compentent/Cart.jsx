import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import photo1 from "../imgs/photo1.jpg";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
function Cart({ image, title, des, avatar, name, date }) {
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
          flexDirection: "row",
          justifyContent: "center",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <Avatar alt="Remy Sharp" src={avatar} />
        <Typography
          sx={{
            color: " #6D7D8B",
            fontSize: "12px",
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            color: " #6D7D8B",
            fontSize: "12px",
          }}
        >
          {date}
        </Typography>
      </Box>
    </Card>
  );
}
export default Cart;
