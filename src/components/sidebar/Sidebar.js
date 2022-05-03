import React, { useState } from "react";
import { Avatar, Divider } from "antd";

function Sidebar() {
  const [itemToShow, setItemToShow] = useState(7);
  const [showMore, setShowMore] = useState(true);
  const [showHidden, setShowHidden] = useState(false);

  const sideBarLink = [
    {
      id: 1,
      name: "User name",
      type: "avatar",
      img: "https://i.pinimg.com/originals/25/40/de/2540de1db897bbbc4972d348447f0bb8.jpg",
    },
    {
      id: 2,
      name: "Friends",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png",
    },
    {
      id: 3,
      name: "Groups",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
    },
    {
      id: 4,
      name: "Save",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png",
    },
    {
      id: 5,
      name: "Marketplace",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png",
    },
    {
      id: 6,
      name: "Watch",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png",
    },
    {
      id: 7,
      name: "Events",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png",
    },
    {
      id: 8,
      name: "Ads",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png",
    },
    {
      id: 9,
      name: "Crisis Response",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png",
    },
    {
      id: 10,
      name: "Healths",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/vxMUnHhu6Do.png",
    },
    {
      id: 11,
      name: "Facebook Pay",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png",
    },
    {
      id: 12,
      name: "Gaming Video",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/9bekmF_PzNp.png",
    },
    {
      id: 13,
      name: "Weathers",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png",
    },
    {
      id: 14,
      name: "Pages",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png",
    },
    {
      id: 15,
      name: "Messenger",
      type: "icon",
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png",
    },
  ];
  const sideBarGroups = [
    {
      id: 1,
      img: "https://static.boredpanda.com/blog/wp-content/uploads/2020/03/5e6782b89ee19_1nyn34drl0l31__700.jpg",
      name: "Cat fan club hohooho h oh oh oh dohaoh o ho ho h oh oho h",
    },
    {
      id: 2,
      img: "https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1600&q=88&f=b7a44663e082b8041129616b6b73328d",
      name: "Group 2",
    },
    {
      id: 3,
      img: "https://images.ctfassets.net/9l3tjzgyn9gr/photo-160091/48f8c70ec4e78205fc0f8fea62b81731/160091-blackcat15.jpg?fm=jpg&fl=progressive&q=50&w=1200",
      name: "Group 3",
    },
  ];

  return (
    <aside className="sidebar sidebar__left">
      <div className="sidebar__list">
        <ul className="list">
          {sideBarLink
            .slice(0, showMore ? itemToShow : sideBarLink.length)
            .map((item) => (
              <li key={item.id} className="list__item">
                {item.type === "avatar" ? (
                  <Avatar className="list__img" src={item.img} size={34} />
                ) : item.type === "icon" ? (
                  <img className="list__img" src={item.img} />
                ) : null}
                {item.name}
              </li>
            ))}
        </ul>
        <div
          className="list__option--item"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          <span className="list__option--icon sidebar__icon">
            <i
              className={`sidebar__img ${
                showMore ? "sidebar__img--more" : "sidebar__img--less"
              }`}
            ></i>
          </span>
          <span className="sidebar__text">
            {showMore ? "Show more" : "Show less"}
          </span>
        </div>
      </div>
      <Divider className="divider" />
      <div
        className="sidebar__list"
        onMouseEnter={() => setShowHidden(true)}
        onMouseLeave={() => setShowHidden(false)}
      >
        <div className="sidebar__heading">
          <span>Your shortcuts</span>
          <span className={`sidebar__btn ${!showHidden && "sidebar__hidden"}`}>
            Edit
          </span>
        </div>
        <ul className="list">
          {sideBarGroups.map((item) => (
            <li className="list__item" key={item.id}>
              <img
                className="sidebar__group-img"
                src={item.img}
                alt={item.name}
              />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
