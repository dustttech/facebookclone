import React from "react";
import "./loading.css";

function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
