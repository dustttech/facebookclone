import React, { useState, useEffect } from "react";

import { Avatar, Row, Tooltip, Modal } from "antd";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImVideoCamera, ImUsers, ImUser, ImUserMinus } from "react-icons/im";
import { IoIosImages } from "react-icons/io";
import { CgSmileMouthOpen } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import {
  BsFillLockFill,
  BsFillCaretDownFill,
  BsArrowLeft,
} from "react-icons/bs";

import { AiOutlineFileGif } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa";
import { RiQuestionnaireFill } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";

import { GiEarthAmerica } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";

function UserUpload() {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [isInValid, setIsInValid] = useState(true);
  const [upLoadData, setUpLoadData] = useState("");
  const [uploadPrivate, setUploadPrivate] = useState("public");
  const [privateActive, setPrivateActive] = useState("Public");

  const [modalStatus, setModalStatus] = useState({
    visible: false,
    content: "home",
    height: "440px",
  });

  const showModal = () => {
    setModalStatus({
      ...modalStatus,
      visible: true,
    });
  };

  const handleOk = () => {
    setModalStatus({ ...modalStatus, visible: false });
  };

  const handleCancel = () => {
    setModalStatus({ ...modalStatus, visible: false });
  };

  const hideItem = { transform: "translateX(100%)", zIndex: 0 };
  const showItem = { transform: "translateX(0%)", zIndex: 1 };
  const moveItem = { transform: "translateX(-100%)" };

  const checkValid = () => {
    if (upLoadData.length === 0) {
      setIsInValid(true);
    } else {
      setIsInValid(false);
    }
  };
  const getHeightModal = () => {
    const addition = 0;
    const homeHeight =
      document.querySelector("#upload-home").scrollHeight + addition + "px";
    const moreHeight =
      document.querySelector("#upload-more").scrollHeight + addition + "px";
    const privateHeight =
      document.querySelector("#upload-private").scrollHeight + addition + "px";
    return {
      homeHeight,
      moreHeight,
      privateHeight,
    };
  };
  const moveModal = (content) => {
    const { homeHeight, moreHeight, privateHeight } = getHeightModal();
    if (content === "more") {
      setModalStatus({ ...modalStatus, content, height: moreHeight });
      return;
    }
    if (content === "private") {
      setModalStatus({ ...modalStatus, content, height: privateHeight });
      return;
    }
    setModalStatus({ ...modalStatus, content, height: homeHeight });
  };

  const setPrivate = (type) => {
    setPrivateActive(type);
    setUploadPrivate(type);
    moveModal("home");
  };

  const privateList = [
    {
      id: 1,
      icon: <GiEarthAmerica />,
      name: "Public",
      details: "Anyone on or off Facebook",
      type: "radio",
    },
    {
      id: 2,
      icon: <ImUsers />,
      name: "Friends",
      details: "Your friends on Facebook",
      type: "radio",
    },
    {
      id: 3,
      icon: <BsFillLockFill />,
      name: "Only me",
      type: "radio",
    },
    {
      id: 4,
      icon: <ImUserMinus />,
      name: "Friends except...",
      details: "Don't show to some friends",
      type: "more",
    },
    {
      id: 5,
      icon: <ImUser />,
      name: "Specific friends",
      details: "Only show to some friends",
      type: "more",
    },
    {
      id: 6,
      icon: <IoSettingsSharp />,
      name: "Custom",
      details: "Include and exclude friends and lists",
      type: "more",
    },
  ];

  useEffect(() => {
    checkValid();
  }, [upLoadData]);
  return (
    <section className="new__item new__item--pad">
      <Row className="new__item--row-big">
        <Link to="/userinfo">
          <Avatar
            className="user__avt--hover user__avt--big"
            src="https://i.pinimg.com/564x/b5/94/7e/b5947e9461776f0b1dc80253c4b4aad3.jpg"
          />
        </Link>
        <span className="btn__trigger" onClick={showModal}>
          Upload something ....
        </span>
      </Row>
      <Row className="new__item--row new__item--row-border">
        <button className=" btn__light btn__big">
          <ImVideoCamera className="upload__icon upload__icon--stream" />
          Live video
        </button>
        <button className=" btn__light btn__big">
          <IoIosImages className="upload__icon upload__icon--photo" />
          Photo/Video
        </button>
        <button className=" btn__light btn__big">
          <CgSmileMouthOpen className="upload__icon upload__icon--acti" />
          Activities/Emotions
        </button>
      </Row>
      <Modal
        className="modal"
        visible={modalStatus.visible}
        bodyStyle={{
          backgroundColor: "#242526",
          padding: 0,
          borderRadius: "inherit",
          height: modalStatus.height,
          transition: "0.2s",
        }}
        closable={false}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="layer__viewport">
          <div
            id="upload-home"
            style={modalStatus.content === "home" ? showItem : moveItem}
            className="layer__item"
          >
            <Row align="middle" justify="center" className="modal__header">
              <span className="modal__title">Create Post</span>
              <VscClose
                onClick={handleCancel}
                className="close__icon close__icon--right"
              />
            </Row>
            <Row>
              <form id="user-upload" action="">
                <Row className="modal__content--header" align="middle">
                  <Link to="/userinfo">
                    <Avatar
                      className="user__avt--hover user__avt--big"
                      src="https://i.pinimg.com/564x/b5/94/7e/b5947e9461776f0b1dc80253c4b4aad3.jpg"
                    />
                  </Link>
                  <div style={{ marginLeft: ".5rem" }}>
                    <span className="avt__name">Lục Phong</span>
                    <div
                      className="private"
                      onClick={() => moveModal("private")}
                    >
                      <BsFillLockFill />
                      <span className="private__name">{uploadPrivate}</span>
                      <BsFillCaretDownFill />
                    </div>
                  </div>
                </Row>
                <div
                  className="upload__input"
                  contentEditable="true"
                  onKeyUp={(e) => setUpLoadData(e.target.innerHTML)}
                ></div>
                <Row
                  align="middle"
                  justify="space-between"
                  className="upload__addition"
                >
                  <span>Add to your post</span>
                  <ul className="upload__links">
                    <Tooltip
                      placement="top"
                      title="Host a Q&A"
                      overlayClassName="navbar__tooltip"
                    >
                      <li className="upload__links--item">
                        <RiQuestionnaireFill className="icon icon--red" />
                      </li>
                    </Tooltip>
                    <Tooltip
                      placement="top"
                      title="Photo/Video"
                      overlayClassName="navbar__tooltip"
                    >
                      <li className="upload__links--item">
                        <IoIosImages className="icon icon--green" />
                      </li>
                    </Tooltip>
                    <Tooltip
                      placement="top"
                      title="Tag friends"
                      overlayClassName="navbar__tooltip"
                    >
                      <li className="upload__links--item">
                        <FaUserPlus className="icon icon--blue" />
                      </li>
                    </Tooltip>
                    <Tooltip
                      placement="top"
                      title="Check in"
                      overlayClassName="navbar__tooltip"
                    >
                      <li className="upload__links--item">
                        <HiLocationMarker className="icon icon--orange" />
                      </li>
                    </Tooltip>
                    <Tooltip
                      placement="top"
                      title="Feeling/Activity"
                      overlayClassName="navbar__tooltip"
                    >
                      <li className="upload__links--item">
                        <CgSmileMouthOpen className="icon icon--yellow" />
                      </li>
                    </Tooltip>
                    <Tooltip
                      placement="top"
                      title="More"
                      overlayClassName="navbar__tooltip"
                    >
                      <li
                        className="upload__links--item"
                        onClick={() => moveModal("more")}
                      >
                        <HiDotsHorizontal className="icon" />
                      </li>
                    </Tooltip>
                  </ul>
                </Row>
                <div className="upload__submit--wrapper">
                  <button
                    disabled={isInValid}
                    className="upload__submit"
                    type="submit"
                  >
                    Post
                  </button>
                </div>
              </form>
            </Row>
          </div>
          <div
            id="upload-more"
            style={modalStatus.content === "more" ? showItem : hideItem}
            className="layer__item"
          >
            <Row align="middle" justify="center" className="modal__header">
              <BsArrowLeft
                className="close__icon close__icon--left"
                onClick={() => moveModal("home")}
              />
              <span className="modal__title">Add to your post</span>
            </Row>
            <Row>
              <ul className="list list__2col">
                <li className="list__item">
                  <RiQuestionnaireFill className="icon icon--medium icon--red" />
                  Host a Q&A
                </li>
                <li className="list__item">
                  <IoIosImages className="icon icon--medium icon--green" />
                  Photo/Video
                </li>
                <li className="list__item">
                  <FaUserPlus className="icon icon--medium icon--blue" />
                  Tag friends
                </li>

                <li className="list__item">
                  <HiLocationMarker className="icon icon--medium icon--orange" />
                  Check in
                </li>
                <li className="list__item">
                  <CgSmileMouthOpen className="icon icon--medium icon--yellow" />
                  Feeling/Activity
                </li>
                <li className="list__item">
                  <AiOutlineFileGif className="icon icon--medium icon--bluesky" />
                  GIF
                </li>
                <li className="list__item">
                  <ImVideoCamera className="icon icon--medium icon--red" />
                  Live video
                </li>
              </ul>
            </Row>
          </div>
          <div
            id="upload-private"
            style={modalStatus.content === "private" ? showItem : hideItem}
            className="layer__item"
          >
            <Row align="middle" justify="center" className="modal__header">
              <BsArrowLeft
                className="close__icon close__icon--left"
                onClick={() => moveModal("home")}
              />
              <span className="modal__title">Select audience</span>
            </Row>
            <Row className="modal__content">
              <div className="modal__content--header">
                <span className="content__heading">
                  Who can see your post ?
                </span>
                <span className="content__info">
                  Your post will appear in News Feed, on your profile and in
                  search results
                </span>
              </div>
              <ul className="list__option">
                {privateList.map((item) => (
                  <li
                    key={item.id}
                    className={`list__option--item ${
                      privateActive === item.name ? "active" : ""
                    }`}
                    onClick={() => setPrivate(item.name)}
                  >
                    <span className="list__option--icon">{item.icon}</span>
                    <div className="list__option--info">
                      <span className="content__heading">{item.name}</span>
                      {item.details && (
                        <span className="content__info">{item.details}</span>
                      )}
                    </div>
                    <i
                      className={`list__option--option option__${item.type}`}
                    ></i>
                  </li>
                ))}
              </ul>
            </Row>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default UserUpload;
