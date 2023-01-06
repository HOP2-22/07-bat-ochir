import React, { useEffect } from "react";
import Cart from "./Cart.jsx";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AllCard() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/post",
    headers: {
      "app-id": "636e0d6642c1f665f684f489",
    },
  });
  useEffect(() => {
    const getData = async () => {
      const res = await instance.get("/");
      setData(res.data.data);
    };
    getData();
  }, []);
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
        {data?.map((data, index) => {
          console.log(data);
          return (
            <Grid
              item
              xs={12}
              md={4}
              onClick={() => {
                navigate(`/${data.id}`);
              }}
            >
              <Cart
                image={data.image}
                title={data.text}
                des={data.des}
                avatar={data.avatar}
                name={data.owner.firstName}
                date={data.date}
                key={index}
                like={data.likes}
                text={data.text}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
export default AllCard;
