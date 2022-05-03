import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Input } from "antd";

//ICON

import { BiSearch } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";

// LOGO IMG
import logo from "./../../assets/imgs/logo.png";

function LogoSearch() {
  const [showInput, setShowInput] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);

  return (
    <div className="col col__left">
      <div className="navbar__search">
        <Link to="/">
          <img className="navbar__img" src={logo} alt="logo" />
          {/* <img className="navbar__img" alt="logo" /> */}
        </Link>
        <Input
          className="navbar__input navbar__input--shrink"
          placeholder="Search on Facebook"
          prefix={
            <BiSearch
              className="navbar__icon"
              onClick={() => setShowInput(true)}
            />
          }
          bordered={false}
          size="large"
          onClick={() => setShowInput(true)}
        ></Input>
        {showInput && (
          <div
            className={
              !isAnimation
                ? `navbar__search--overlay`
                : `navbar__search--overlay unmountedStyle`
            }
            onAnimationEnd={(e) => {
              // console.log("event target: ", e.target);
              // console.log("event name: ", e.animationName);
              // console.log("hide input");
              setShowInput(false);
              setIsAnimation(false);
            }}
          >
            <BsArrowLeft
              className="navbar__close"
              onClick={(e) => {
                setIsAnimation(true);
                // e.stopPropagation();
              }}
              onAnimationEnd={(e) => e.stopPropagation()}
            />
            <Input
              className="navbar__input navbar__input2"
              placeholder="Search on Facebook"
              bordered={false}
              size="large"
              autoFocus
              onAnimationEnd={(e) => e.stopPropagation()}
              // prefix={<BiSearch className="navbar__icon" />} // ?????????????? (if add prefix then the stopPropagation wonn't work)
            ></Input>
          </div>
        )}
      </div>
    </div>
  );
}

export default LogoSearch;
