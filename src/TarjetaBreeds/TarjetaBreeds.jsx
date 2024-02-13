import React from "react";
import "./TarjetaBreeds.css";

export const TarjetaBreeds = () => {
  return (
    <div className="box">
      <form>
        <h2>Login</h2>
        <div className="inputtBx">
          <span></span>
          <input type="text" placeholder="Username" />
        </div>
        <div className="inputtBx">
          <span></span>
          <input type="password" placeholder="Username" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Sing in" />
        </div>
        <div className="group">
          <a href="">Forget Password</a>
          <a href="">Singup</a>
        </div>
      </form>
    </div>
  );
};
