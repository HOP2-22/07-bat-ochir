import React from "react";
import users from "../users.json";
import { Link, useParams } from "react-router-dom";
import App from "../App.css";
const styles = {
  userCardContainer: {
    display: "flex",
    border: "1px solid black",
    borderRadius: "8px",
    margin: "12px",
    width: "400px",
  },
};

const Fullinfo = () => {
  //   return <div>hi</div>;
  const { username } = useParams();
  const userData = users.find((user) => user.username === username);
  return (
    <div className="cartbo">
      <img
        src={userData.avatar}
        width={100}
        height={100}
        alt={userData.username}
      />
      <div>
        <div>UserName: {userData.username}</div>
        <p>Email: {userData.email}</p>
        <p>Birth: {userData.date_of_birth}</p>
        <p>Country:{userData.address.country}</p>
        <p>Adress : {userData.address.city}</p>
        <p> Gernder : {userData.gender}</p>
      </div>
    </div>
  );
};

export default Fullinfo;
