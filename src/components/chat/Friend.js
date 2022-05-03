import React from "react";
import { Avatar, Popover, Row } from "antd";
import { FaUserFriends } from "react-icons/fa";
import { ImHome2 } from "react-icons/im";

function Friend({ name, img, state }) {
  return (
    <Popover
      overlayClassName="list__popup"
      placement="left"
      title={null}
      color="#242526"
      content={
        <Row align="top" className="list__popup--content">
          <span className="user__avt user__avt--active-big">
            <Avatar className="user__avt--hover" src={img} size={100} />
          </span>
          <div className="list__popup--row">
            <a href="#" className="list__popup--title">
              {name}
            </a>
            <Row align="middle">
              <FaUserFriends className="icon list__popup--icon" />2 mutual
              friends:
              <a href="#" className="new__item--link list__popup--link">
                Jennie
              </a>
              and
              <a href="#" className="new__item--link list__popup--link">
                Lisa
              </a>
            </Row>
            <Row align="middle">
              <ImHome2 className="icon list__popup--icon" />
              Lives in
              <a href="#" className="new__item--link list__popup--link">
                Seoul
              </a>
              ,
              <a href="#" className="new__item--link list__popup--link">
                Korea
              </a>
            </Row>
          </div>
        </Row>
      }
    >
      <li className="list__item">
        <span
          className={`user__avt ${
            state === "active" ? "user__avt--active" : ""
          }`}
        >
          <Avatar src={img} size={45} />
        </span>
        <span>{name}</span>
      </li>
    </Popover>
  );
}

export default Friend;
