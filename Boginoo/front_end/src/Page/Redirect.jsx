import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const Redirect = () => {
  const { redirect } = useParams();
  useEffect(() => {
    window.location.href =
      "https://github.com/lovasoa/react-contenteditable/issues/65";
  }, []);
  return <div>Redirect</div>;
};

export default Redirect;
