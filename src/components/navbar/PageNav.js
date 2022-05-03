import React, { useEffect, useState } from "react";

import { pageNav } from "./../../data/dataUI";

import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";

function PageNav() {
  const [render, setRender] = useState(false);

  const checkActive = () => {
    const links = document.querySelectorAll("a.navbar__link");
    links.forEach((link) => {
      link.parentNode.classList.remove("active");
      if (link.classList.contains("navbar__link--active")) {
        link.parentNode.classList.add("active");
      }
    });
  };

  useEffect(() => {
    checkActive();
  }, [render]);

  return (
    <div className="col col__middle">
      <ul className="navbar__links container">
        {pageNav.map((link) => {
          return (
            <li key={link.id}>
              <Tooltip
                placement="bottom"
                title={link.name}
                overlayClassName="navbar__tooltip"
                // overlayStyle={{
                //   color: "#222",
                //   borderRadius: "5px",
                //   fontSize: "20px",
                //   padding: ".5rem 1rem",
                // }}
              >
                <NavLink
                  exact
                  activeClassName="navbar__link--active"
                  to={link.location}
                  className="navbar__link"
                  onClick={() => setRender(!render)}
                >
                  {link.icon}
                </NavLink>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PageNav;
<h1>page nav</h1>;
