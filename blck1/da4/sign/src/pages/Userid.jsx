import React from "react";
import { useParams } from "react-router-dom";

export const UserId = () => {
  const { Userid } = useParams();
  console.log(Userid);
  return <div>Userid:{Userid}</div>;
};
