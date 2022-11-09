import React from "react";
import { data } from "../Data.js";
import Cart from "./Cart.jsx";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function AllCard() {
  return (
    <Container>
      <Grid
        spacing={8}
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.map((data, index) => {
          return (
            <Grid item xs={12} md={4}>
              <Cart
                image={data.image}
                title={data.title}
                des={data.des}
                avatar={data.avatar}
                name={data.name}
                date={data.date}
                key={index}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
export default AllCard;
