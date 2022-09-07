import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import style from "./Loading.module.scss";

function Loading() {
  return (
    <div className={style.load_flex}>
      <ClipLoader color="#a88787" size={100} />
    </div>
  );
}

export default Loading;
