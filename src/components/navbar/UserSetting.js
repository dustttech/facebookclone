import React from "react";
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";

import { Avatar, Tooltip } from "antd";

import { userSetting } from "./../../data/dataUI";

function UserSetting(props) {
  return (
    <div className="col col__right navbar__user">
      <Link className="navbar__user--info" to="/userinfo">
        <Avatar icon={<FaUser />} />
        <span className="navbar__user--name">User Name</span>
      </Link>
      <ul className="navbar__user--links">
        {userSetting.map((item) => {
          return (
            <li key={item.id}>
              <Tooltip
                placement="bottom"
                title={item.name}
                overlayClassName="navbar__tooltip"
              >
                <Link to="/" className="navbar__user--link">
                  {item.icon}
                </Link>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserSetting;
