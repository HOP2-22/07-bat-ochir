import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [desc, setDesc] = useState("");
  const [succes, setSucces] = useState("");
  const [dataa, setDataa] = useState([]);
  const [edit, setEdit] = useState("");
  const [id, setID] = useState("");
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8800/post");
      setDataa(data);
    } catch (error) {
      console.log("erer");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const createPost = async () => {
    try {
      await axios
        .post("http://localhost:8800/post/create", {
          text: desc,
          owneriD: inputValue,
        })
        .then((el) => setSucces(el));
    } catch (error) {
      console.log("erer");
    }
  };

  const DeletePost = async () => {
    try {
      const response = await axios.delete(`http://localhost:8800/post/${id}`);

      const temp = dataa.filter((item) => item._id !== id);
      setDataa(temp);
    } catch (error) {
      console.log("erer");
    }
  };

  const UpdatePost = async () => {
    console.log(edit);
    try {
      const response = await axios.patch(`http://localhost:8800/post/${id}`, {
        text: edit,
      });
      console.log(response); 
    } catch (error) {
      console.log("erer");
    } finally {
      fetchData();
    }
  };
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div
        style={{
          display: "flex",

          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(#e66465, #9198e5);",
          flexDirection: "column",
        }}
      >
        <p style={{ color: "purple", fontStyle: "italic", fontSize: "65px" }}>
          Todo list
        </p>
        <div style={{ display: "flex", gap: "30px" }}>
          <input
            type="text"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="Text"
          />
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="OwnerID"
          />
          <button
            onClick={(e) => {
              createPost();
              console.log("done");
            }}
            style={{ fontSize: "20px", width: "80px" }}
          >
            Add{" "}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            style={{ marginTop: "20px", width: "330px", height: "50px" }}
            placeholder="Edit Post"
            onChange={(e) => {
              setEdit(e.target.value);
            }}
          />
          <button
            onClick={() => {
              UpdatePost();
            }}
            style={{ width: "100px", height: "55px" }}
          >
            Done
          </button>
        </div>
        <div>
          {dataa.map((el) => {
            return (
              <div
                style={{
                  display: "flex",
                  width: "450px",
                  marginTop: "40px",
                  border: "1px solid black",
                  flexDirection: "row",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <p>{el.text}</p>

                <p>{el.owneriD}</p>
                <button
                  onClick={(e) => {
                    setID(el._id);
                    console.log(id);
                  }}
                >
                  Edit
                </button>

                <p
                  style={{ fontSize: "25px" }}
                  onClick={() => {
                    DeletePost(el._id);
                  }}
                >
                  🗑️{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
