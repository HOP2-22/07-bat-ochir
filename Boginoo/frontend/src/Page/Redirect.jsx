import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Redirect = () => {
  const { redirect } = useParams();
  useEffect(() => {
    const redToURL = async () => {
      try {
        const res = await axios.get(
          `https://boginoo-web-app-batuka.onrender.com//link/next/${redirect}`
        );
        window.location.href = res.data.orignal_link;
      } catch (error) {
        console.log("aldaa");
      }
    };
    redToURL();
  }, []);
  return <div>Redirect</div>;
};

export default Redirect;
