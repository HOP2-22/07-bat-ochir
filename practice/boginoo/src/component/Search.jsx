import React from "react";

const Search = () => {
  return (
    <>
      {" "}
      <div
        style={{
          display: "flex",
          gap: "16px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <input
          placeholder="https://www.web-huudas.mn"
          style={{
            fontSize: "20px",
            width: "581px",
            height: "44px",
            borderRadius: "100px",
            border: "1px solid grey",
          }}
        />
        <button
          style={{
            width: "192px",
            height: "44px",
            border: "none",
            backgroundColor: "#02B589",
            borderRadius: "100px",
            color: "white",
            fontSize: "20px",
          }}
        >
          Богиносгох
        </button>
      </div>
    </>
  );
};

export default Search;
