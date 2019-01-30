import FaHeart from "react-icons/lib/fa/thumbs-up";
import React from "react";

export default function({ count = "1000", onClick }) {
  return (
    <div onClick={onClick} className="it">
      {" "}
      <FaHeart />
      <div className="tx">{count}</div>
    </div>
  );
}
