import React from "react";
import "./PerfilCircular.css";

export const PerfilCircular = () => {
  return (
    <div>
      <div className="container_perfil">
        <div className="content">
          <img
            className="image_1"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/800px-Brad_Pitt_2019_by_Glenn_Francis.jpg"
            }
            alt=""
          />
          <img
            className="image_2"
            src="https://i.pinimg.com/originals/37/80/cf/3780cf3893cb952e27e66345bc6074b0.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
