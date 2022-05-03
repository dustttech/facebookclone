import React from "react";

import { AiFillHome, AiOutlineFileGif } from "react-icons/ai";

import { BsBellFill } from "react-icons/bs";

import { IoMdArrowDropdown } from "react-icons/io";

import { FiUsers } from "react-icons/fi";

import { RiGroup2Line, RiVideoFill, RiMessengerFill } from "react-icons/ri";

import { CgMenuGridO } from "react-icons/cg";

import { CgSmileMouthOpen } from "react-icons/cg";
import { ImCamera } from "react-icons/im";
import { BiSticker } from "react-icons/bi";

export const pageNav = [
  {
    id: 1,
    name: "Home",
    icon: <AiFillHome />,
    location: "/",
  },
  {
    id: 2,
    name: "FriendList",
    icon: <FiUsers />,
    location: "/friendlist",
  },
  {
    id: 3,
    name: "Watch Video",
    icon: <RiVideoFill />,
    location: "/watch",
  },
  {
    id: 4,
    name: "Group News",
    icon: <RiGroup2Line />,
    location: "/group",
  },
];
export const userSetting = [
  {
    id: 1,
    name: "Menu",
    icon: <CgMenuGridO />,
    location: "/",
  },
  {
    id: 2,
    name: "Messenger",
    icon: <RiMessengerFill />,
    location: "/",
  },
  {
    id: 3,
    name: "Notifications",
    icon: <BsBellFill />,
    location: "/",
  },
  {
    id: 4,
    name: "Account",
    icon: <IoMdArrowDropdown />,
    location: "/",
  },
];

export const commentExtension = [
  {
    id: 1,
    name: "icon",
    caption: "Insert icon",
    icon: <CgSmileMouthOpen className="extensions__icon" />,
  },
  {
    id: 2,
    name: "photo",
    caption: "Insert picture/photo",
    icon: <ImCamera className="extensions__icon" />,
  },
  {
    id: 3,
    name: "gif",
    caption: "Comment with GIF",
    icon: <AiOutlineFileGif className="extensions__icon" />,
  },
  {
    id: 4,
    name: "sticker",
    caption: "Insert sticker",
    icon: <BiSticker className="extensions__icon" />,
  },
];
