import React, { useState } from "react";
import { Avatar, Divider, Tooltip } from "antd";
import SponsorItem from "./SponsorItem";

import { MdVideoCall } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import Friend from "./Friend";

function Chat() {
  const sponsorList = [
    {
      id: 1,
      name: "Freshwater tank",
      link: "https://www.youtube.com",
      img: "https://i.pinimg.com/originals/83/59/ef/8359ef1c244da6d9b57b1a126bee6dea.jpg",
    },
    {
      id: 2,
      name: "Saltwater tank",
      link: "https://www.youtube.com",
      img: "https://www.saltwateraquariumadvice.com/wp-content/uploads/2016/09/Thorly-aka-crazy4acros.jpg",
    },
  ];
  const friendsList = [
    {
      id: 1,
      name: "Dustt Friends 1",
      img: "https://styles.redditmedia.com/t5_2r5i1/styles/communityIcon_x4lqmqzu1hi81.jpg",
      state: "active",
    },
    {
      id: 2,
      name: "Dustt Friends 2",
      img: "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
      state: "active",
    },
    {
      id: 3,
      name: "Dustt Friends 3",
      img: "https://i.guim.co.uk/img/media/c356ea76561ab0e0631ad7b532dc4ba81e66fef7/0_146_5131_3079/master/5131.jpg?width=1200&quality=85&auto=format&fit=max&s=5e5c127d5420d43a4028226f43cad3a6",
      state: "active",
    },
    {
      id: 4,
      name: "Dustt Friends 4",
      img: "https://www.theglobalist.com/wordpress/wp-content/uploads/2022/02/snowleopard.jpg",
      state: "active",
    },
    {
      id: 5,
      name: "Dustt Friends 5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBCpv5iE-t-qShr8Ct42Jtu4eWRjzRZX5Gg&usqp=CAU",
      state: "active",
    },
    {
      id: 6,
      name: "Dustt Friends 6",
      img: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8a9923c6f2ff3aee84c28c5eb5217567~c5_720x720.jpeg?x-expires=1651633200&x-signature=tJoMIAlZsrUIdG%2BZZUSXQWLeNQo%3D",
      state: "active",
    },
  ];

  return (
    <aside className="sidebar sidebar__right">
      <div className="sidebar__list">
        <div className="sidebar__heading">
          <span>Sponsors</span>
        </div>
        <ul className="list">
          {sponsorList.map((item) => (
            <SponsorItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
      <Divider className="divider" />
      <div className="sidebar__list">
        <div className="sidebar__heading">
          <span>Contacts</span>
          <div>
            <Tooltip
              placement="bottom"
              title="New room"
              overlayClassName="tooltip__custom"
            >
              <MdVideoCall className="icon icon--white icon--hover" />
            </Tooltip>
            <Tooltip
              placement="bottom"
              title="Search for a name or group"
              overlayClassName="tooltip__custom"
            >
              <BiSearch className="icon icon--white icon--hover" />
            </Tooltip>
            <Tooltip
              placement="bottom"
              title="Options"
              overlayClassName="tooltip__custom"
            >
              <HiDotsHorizontal className="icon icon--white icon--hover" />
            </Tooltip>
          </div>
        </div>
        <ul className="list">
          {friendsList.map((item) => (
            <Friend key={item.id} {...item} />
          ))}
        </ul>
      </div>
      <Divider className="divider" />
      <div className="sidebar__list">
        <div className="sidebar__heading">
          <span>Group conversations</span>
        </div>
        <ul className="list">
          <li className="list__item">
            <span className="list__icon">
              <i className="sidebar__img sidebar__img--plus"></i>
            </span>
            Create New Group
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Chat;
