import { margin } from "@mui/system";
import React from "react";

const styles = {
  footer: {
    marginTop: "150px",
    display: "flex",

    width: "100vw",
    height: 450,
    backgroundColor: "#252b3d",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 15,
    fontFamily: "Mulish",
  },
  button: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    color: "#4DA0FD",
    fontFamily: "Mulish",
    width: 270,
    height: 50,
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  columnOne: {
    display: "flex",
    flexDirection: "column",
    gap: 50,
  },
};

export const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={{ display: "flex", justifyContent: "center", gap: "100px" }}>
        <div style={styles.columnOne}>
          <div>
            <p
              style={{
                fontFamily: "Mulish",
                fontSize: 30,
                color: "white",
                margin: 0,
              }}
            >
              team.
            </p>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <p style={styles.text}>Instagram</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <p style={styles.text}>Facebook</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <p style={styles.text}>Twitter</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <p style={styles.text}>Instagram</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <p style={styles.text}>Facebook</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <p style={styles.text}>Twitter</p>
            </div>
          </div>
        </div>
        <div style={styles.column}>
          <div>
            <p style={styles.text}>Use Cases</p>
          </div>
          <div>
            <p style={styles.text}>UI design</p>
            <p style={styles.text}>UX design</p>
            <p style={styles.text}>Phototyping</p>
            <p style={styles.text}>UI design</p>
            <p style={styles.text}>UX design</p>
            <p style={styles.text}>Phototyping</p>
          </div>
        </div>
        <div style={styles.column}>
          <div>
            <p style={styles.text}>Explore</p>
          </div>
          <div>
            <p style={styles.text}>Figma</p>
            <p style={styles.text}>Customers</p>
            <p style={styles.text}>Why I Love Figma</p>
            <p style={styles.text}>Figma</p>
            <p style={styles.text}>Customers</p>
            <p style={styles.text}>Why I love Figma</p>
          </div>
        </div>
        <div style={styles.column}>
          <div>
            <p style={styles.text}>Resources</p>
          </div>
          <div>
            <p style={styles.text}>Community Resources hub</p>
            <p style={styles.text}>Support</p>
            <p style={styles.text}>Education</p>
            <p style={styles.text}>Community Resources hub</p>
            <p style={styles.text}>Support</p>
            <p style={styles.text}>Education</p>
          </div>
        </div>
        <div>
          <p
            style={{
              fontfamily: "Mulish",
              fontSize: 18,
              fontWeight: 900,
              color: "white",
            }}
          >
            Subscribe to our newsletter
          </p>
          <button value="Email" style={styles.button}>
            <p>Email</p>
            <p style={{ fontSize: "45px" }}>→</p>
          </button>
        </div>
      </div>
    </div>
  );
};
