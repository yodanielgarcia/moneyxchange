import React, { FC } from "react";
import "./Header.scss";

const Header: FC<{}> = () => {
  return (
    <header className="v-flex-center Header">
      <div className="Header__logo">
        <img src="https://www.siliconweek.com/wp-content/uploads/2017/07/AAEAAQAAAAAAAAa5AAAAJDI3ODBlYTM2LTNjZDUtNDRhOS1iMGY3LTMxODEwZDZhZTM4OA.png " width="85px" alt=""/>
      </div>
      <div className="Header__info">
        <div className="alert alert-light" style={{background: "black"}} role="alert">
          Enviar Dinero
        </div>
        <div className="alert alert-light" style={{background: "black"}} role="alert">
          Herramientas
        </div>
        <div className="alert alert-light" style={{background: "black"}} role="alert">
          Otras Monedas
        </div>
        <div className="alert alert-light" style={{background: "black"}} role="alert">
          Otros....
        </div>
      </div>
    </header>
  );
};

export default Header;
