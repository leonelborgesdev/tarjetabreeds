import React from "react";
import "./TarjetaMovible.css";

export const TarjetaMovible = () => {
  return (
    <div className="card">
      <div className="face front">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fJMY2RcJs4XGfAqm9GVjSxkoqCO2wr7lkg&usqp=CAU" />
        <h3>Japan</h3>
      </div>
      <div className="face back">
        <h3>Japan</h3>
        <p>Lorem</p>
        <div className="link">
          <a href="#">Detail</a>
        </div>
      </div>
    </div>
  );
};
