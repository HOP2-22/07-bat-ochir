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
      <div className="">{data.text}</div>
      <div className="">
        <p className=""></p>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}

export default Full;
