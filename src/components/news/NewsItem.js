import React, { useState, useEffect, useRef } from "react";

import { Avatar, Row, Tooltip, Button, List } from "antd";
import { Link } from "react-router-dom";

// REACT ICON
import like from "./../../assets/imgs/like.svg";
import care from "./../../assets/imgs/care.svg";
import wow from "./../../assets/imgs/wow.svg";
import love from "./../../assets/imgs/love.svg";
import angry from "./../../assets/imgs/angry.svg";
import haha from "./../../assets/imgs/haha.svg";

import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { IoMdShareAlt } from "react-icons/io";
import { VscTriangleDown } from "react-icons/vsc";
import CommentItem from "./CommentItem";
import { FaUser } from "react-icons/fa";

import { commentExtension, commentxtension } from "./../../data/dataUI";

function NewsItem({
  author_firstname,
  author_lastname,
  avatar,
  caption,
  createdAt,
  img,
}) {
  const [showComments, setShowComments] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const convertDate = function (date) {
    let dateconvert = new Date(date).toUTCString();
    return dateconvert;
  };
  const commentsFake = [
    {
      postId: 1,
      id: 1,
      name: {
        author_firstname: "Phong",
        author_lastname: "Luc",
      },
      content: "test Content djaoihd oiwhdiowahd oiawho dhwaodh iowh dwo.",
      like: 3,
      dislike: 5,
      avatar: "https://cdn.fakercloud.com/avatars/snowwrite_128.jpg",
    },
    {
      postId: 1,
      id: 2,
      name: {
        author_firstname: "Dust",
        author_lastname: "Phong",
      },
      content: "test Content djaoihd oiwhdiowahd oiawho dhwaodh iowh dwo.",
      like: 3,
      dislike: 5,
      avatar: "https://cdn.fakercloud.com/avatars/snowwrite_128.jpg",
    },
    {
      postId: 1,
      id: 3,
      name: {
        author_firstname: "HiHi",
        author_lastname: "Ho",
      },
      content: "test Content djaoihd oiwhdiowahd oiawho dhwaodh iowh dwo.",
      like: 3,
      dislike: 5,
      avatar: "https://cdn.fakercloud.com/avatars/snowwrite_128.jpg",
    },
  ];

  return (
    <article className="new__item ">
      <Row align="middle" className="new__item--top">
        <Avatar className="user__avt--hover user__avt--big" src={avatar} />
        <div className="new__item--info">
          <div>
            <a href="#" className="new__item--link new__item--author">
              {author_firstname} {author_lastname}
            </a>
            <a href="#" className="new__item--link new__item--date">
              {convertDate(createdAt)}.
            </a>
          </div>
          <HiDotsHorizontal className="new__item--setting" />
        </div>
        <p className="new__item--caption">{caption}</p>
      </Row>
      <img className="new__item--img" src={img} alt="image news" />
      <div className="new__item--bottom">
        <Row className="new__item--row" justify="space-between">
          <div className="new__item--icons">
            <div className="new__item--iconwrapper">
              <Tooltip
                placement="bottom"
                title="Like"
                overlayClassName="navbar__tooltip"
              >
                <img className="icon" src={like} alt="like" />
              </Tooltip>
              <Tooltip
                placement="bottom"
                title="Haha"
                overlayClassName="navbar__tooltip"
              >
                <img className="icon" src={haha} alt="like" />
              </Tooltip>
              <Tooltip
                placement="bottom"
                title="Love"
                overlayClassName="navbar__tooltip"
              >
                <img className="icon" src={love} alt="like" />
              </Tooltip>
            </div>
            <span className="new__item--counting">300</span>
          </div>
          <div>
            <a href="#" className="new__item--link new__item--counting">
              100 comments
            </a>
            <a href="#" className="new__item--link new__item--counting">
              100 shares
            </a>
          </div>
        </Row>
        <Row className="new__item--row-border">
          <button id="like-btn" className="btn__light">
            <AiOutlineLike className="btn-icon" />
            Like
          </button>
          <button
            id="comment-btn"
            className="btn__light"
            onClick={() => setShowComments(!showComments)}
          >
            <GoComment className="btn-icon" />
            Comment
          </button>
          <button id="share-btn" className="btn__light">
            <IoMdShareAlt className="btn-icon" />
            Share
          </button>
        </Row>
        {showComments && (
          <>
            <Row className="new__item--row-border">
              <div className="comments__filter-wrapper">
                <span className="comments__filter new__item--link">
                  All comments
                  <VscTriangleDown className="comments__icon" />
                </span>
              </div>
              {showComments &&
                commentsFake.map((item) => (
                  <CommentItem key={item.id} {...item} />
                ))}
            </Row>
            <Row align="middle" className="comments__user--comment">
              <Link className="user__avt user__avt--active" to="/userinfo">
                <Avatar icon={<FaUser />} />
              </Link>
              <form method="post" className="comments__user--input">
                <button type="submit" hidden></button>
                <input
                  defaultValue={inputValue}
                  id="user__holding__input"
                  hidden
                  type="text"
                />
                <div
                  id="user__input"
                  contentEditable="true"
                  data-ph="Write your comment..."
                  onKeyUp={(e) => setInputValue(e.target.innerHTML)}
                />
                <ul className="comments__user--extensions">
                  {commentExtension.map((item) => (
                    <Tooltip
                      placement="bottom"
                      title={item.caption}
                      overlayClassName="navbar__tooltip"
                      key={item.id}
                    >
                      <li>{item.icon}</li>
                    </Tooltip>
                  ))}
                </ul>
              </form>
            </Row>
          </>
        )}
      </div>
    </article>
  );
}

export default NewsItem;
