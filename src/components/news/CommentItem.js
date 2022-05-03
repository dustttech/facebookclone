import React, { useState } from "react";

import { BsDot } from "react-icons/bs";
import { Avatar, Row } from "antd";
import { HiDotsHorizontal } from "react-icons/hi";

function CommentItem({ name, avatar, content }) {
  const [showCommentSetting, setShowCommentSetting] = useState(false);

  return (
    <Row className="comments__item">
      <Avatar className="user__avt--hover" src={avatar} />
      <div>
        <Row
          onMouseOver={() => setShowCommentSetting(true)}
          onMouseLeave={() => setShowCommentSetting(false)}
          align="middle"
        >
          <div className="comments__item--info">
            <a href="/" className="new__item--link comments__item--author">
              {name.author_firstname} {name.author_lastname}
            </a>
            <p className="comments__item--content">{content}</p>
          </div>
          {showCommentSetting && (
            <HiDotsHorizontal className="new__item--setting comments__item--setting" />
          )}
        </Row>
        <ul className="comments__item--interaction">
          <li>
            <span className="new__item--link">Like</span>
          </li>
          <li>
            <BsDot />
            <span className="new__item--link">Reply</span>
          </li>
          <li>
            <BsDot />
            <span className="new__item--link">Date</span>
          </li>
        </ul>
      </div>
    </Row>
  );
}

export default CommentItem;
