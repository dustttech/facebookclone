import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

function SponsorItem({ link, name, img }) {
  const [showHidden, setShowHidden] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowHidden(true)}
      onMouseLeave={() => setShowHidden(false)}
    >
      <a href={link} target="_blank" className="list__item">
        <img className="list__img list__sponsor-img" src={img} alt={name} />
        <div className="list__sponsor-info">
          <span className="name">{name}</span>
          <span className="info">{link}</span>
        </div>
        <HiDotsHorizontal
          className={`list__setting ${!showHidden && "sidebar__hidden"}`}
        />
      </a>
    </li>
  );
}

export default SponsorItem;
