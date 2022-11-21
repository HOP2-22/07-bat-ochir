import { height } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import App from "../App.css";
const zurag = {
  img: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg",
};
function Full() {
  const [clear, setClear] = useState("");
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
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
  const AddComment = () => {
    setInputValue("");
    setList([...list, inputValue]);
  };
  const Delete = (id) => {
    setList(list?.filter((_, index) => index !== id));
  };

  return (
    <div className="full-big">
      <h1 className="full-data">{data?.text}</h1>
      <div className="row-2">
        <img className="full-row2" src={data?.image}></img>
        <div style={{ display: "flex", Direction: "row", gap: "20px" }}>
          <div className="" style={{ color: "grey" }}>
            {data?.owner.firstName}
          </div>
          <div className="" style={{ color: "grey" }}>
            {data?.publishDate}
          </div>
        </div>
      </div>
      <img
        className="dogge"
        src={data?.image}
        style={{ marginLeft: "500px", marginTop: "50px" }}
      ></img>
      <div className="full-des">
        <p style={{ width: "700px", fontSize: "18px", marginLeft: "600px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          numquam at pariatur obcaecati qui quas animi tenetur. Soluta earum rem
          vel ut molestias non incidunt alias, facere, totam voluptas ipsam!
        </p>
        <p style={{ width: "700px", fontSize: "18px", marginLeft: "600px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          numquam at pariatur obcaecati qui quas animi tenetur. Soluta earum rem
          vel ut molestias non incidunt alias, facere, totam voluptas ipsam!
        </p>
        <p style={{ width: "700px", fontSize: "18px", marginLeft: "600px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          numquam at pariatur obcaecati qui quas animi tenetur. Soluta earum rem
          vel ut molestias non incidunt alias, facere, totam voluptas ipsam!
        </p>
        <p style={{ width: "800px", fontSize: "18px", marginLeft: "600px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          numquam at pariatur obcaecati qui quas animi tenetur. Soluta earum rem
          vel ut molestias non incidunt alias, facere, totam voluptas ipsam!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginLeft: "590px",
        }}
      >
        <img
          className=""
          src={data?.image}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "56px",
          }}
        ></img>
        <div className="">
          <p className="" style={{ fontSize: "14px", color: "#25313C" }}>
            Written by
          </p>
          <p className="" style={{ fontSize: "24px", color: "#25313C" }}>
            Shedrack Eze
          </p>
          <p className="" style={{ fontSize: "14px", color: "#989898" }}>
            CEO Team App
          </p>
        </div>
      </div>
      <div
        style={{
          width: "800px",
          height: "1px",
          backgroundColor: "grey",
          marginLeft: "550px",
          marginTop: "50px",
        }}
      ></div>
      <div className="">
        <div
          className="full-comment"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {list?.map((list, index) => {
            console.log(list);
            return (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={data?.image}
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "56px",
                    }}
                  ></img>
                  <div
                    style={{
                      marginLeft: "15px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className=""
                      style={{ marginLeft: "50px", width: "200px" }}
                    >
                      <div>{data?.owner.firstName}</div>
                      <div style={{ fontSize: "24px", color: "blue" }}>
                        {list}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{ marginLeft: "300px" }}
                      onClick={() => Delete(index)}
                    >
                      🗑️
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "500px",
          gap: "40px",
        }}
      >
        <div className="">
          <p style={{ fontSize: "24px", color: "grey" }}>
            Join the conversation
          </p>
        </div>
        <div
          className=""
          style={{ display: "flex", gap: "15px", alignItems: "center" }}
        >
          <img
            src={data?.image}
            style={{ width: "56px", height: "56px", borderRadius: "56px" }}
          ></img>
          <input
            placeholder="Comments"
            style={{
              marginTop: "-29px",
              width: "830px",
              height: "148px",
              backgroundColor: "transparent",
              borderRadius: "5px",
              border: "1px solid grey",
            }}
            type={"text"}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            onClick={() => AddComment()}
            style={{
              backgroundColor: "transparent",
              width: "150px",
              height: "50px",
              border: "1px solid grey",
              borderRadius: "5px",
            }}
          >
            add comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Full;
