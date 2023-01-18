import React from "react";

function Short() {
  return (
    <>
      <div>
        <div
          style={{
            display: clicked ? "flex" : "none",
            flexDirection: "column",
          }}
        >
          <div>
            <p
              style={{
                opacity: "30%",
              }}
            >
              Өгөгдсөн холбоос:
            </p>
            <p>{value}</p>
          </div>
          <div>
            <p
              style={{
                opacity: "30%",
              }}
            >
              Богино холбоос:
            </p>
            <p>{shortLink}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Short;
