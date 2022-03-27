import React from "react";
import "./styles.scss";

function Avatar({ part, randomizePart }) {
  return (
    <div className="avatar-wrapper">
      <div className="avatar">
        <img src={`${part.body}`} alt="" style={{ zIndex: 0 }} />
        <img src={`${part.eyes}`} alt="" style={{ zIndex: 1 }} />
        <img src={"/images/nose/1.png"} alt="" style={{ zIndex: 1 }} />
        <img src={`${part.hair}`} alt="" style={{ zIndex: 2 }} />
        <img src={`${part.mouth}`} alt="" style={{ zIndex: 1 }} />
        <img src={`${part.eyebrows}`} alt="" style={{ zIndex: 1 }} />
        <img src={`${part.hat}`} alt="" style={{ zIndex: 3 }} />
        <img src={`${part.glasses}`} alt="" style={{ zIndex: 3 }} />
        <img src={`${part.clothing1}`} alt="" style={{ zIndex: 1 }} />
        <img src={`${part.clothing2}`} alt="" style={{ zIndex: 2 }} />
        <img src={`${part.clothing3}`} alt="" style={{ zIndex: 3 }} />
      </div>
      <div className="btn-random">
        <button className="button" onClick={randomizePart}>
          Randomize
        </button>
      </div>
    </div>
  );
}

export default Avatar;
