import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import App from "../App.css";
const zurag = {
  img: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg",
};
function Full() {
  const [data, setData] = useState();
  const { id } = useParams();
  const instance = axios.create({
    baseURL: `https://dummyapi.io/data/v1/post/${id}`,
    headers: {
      "app-id": "636e0d6642c1f665f684f489",
    },
  });
  useEffect(() => {
    const getData = async () => {
      const res = await instance.get("/");
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <div className="full-big">
      <h1 className="full-data">{data?.text}</h1>
      <div className="row-2">
        <img className="full-row2" src={data?.image}></img>
        <div style={{ display: "flex", Direction: "row", gap: "20px" }}>
          <div className="">{data?.owner.firstName}</div>
          <div className="">{data?.publishDate}</div>
        </div>
      </div>
      <img className="dogge" src={data?.image}></img>
      <div className="full-des">{data?.text}</div>
      <div className="">
        <div className="full-comment">
          <img src={data?.image} className="full-row2"></img>
          <div className="">
            <p className="">Written by</p>
            <p className="">{data?.owner.firstName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Full;
