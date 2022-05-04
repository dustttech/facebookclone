import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// ANT DESIGN UI
import { Row, Col } from "antd";

// COMPONENT
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";

// PAGE

import FriendRequest from "./pages/FriendRequest";
import WatchList from "./pages/WatchList";
import GroupNews from "./pages/GroupNews";
import UserInfo from "./pages/UserInfo";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <Navbar />
      {/* END NAVBAR */}
      {/* CONTENT */}
      <Row className="content-wrapper">
        {/* SIDEBAR */}
        <Col span={5}>
          <Sidebar />
        </Col>
        {/* END SIDEBAR */}
        {/* NEWSFEED */}
        <Col className="content" span={14}>
          <Switch>
            <Route exact path="/">
              <Home className="content" />
            </Route>
            <Route path="/friendlist">
              <FriendRequest />
            </Route>
            <Route path="/watch">
              <WatchList />
            </Route>
            <Route path="/group">
              <GroupNews />
            </Route>
            <Route path="/userinfo">
              <UserInfo />
            </Route>
          </Switch>
        </Col>
        {/* END NEWSFEED */}
        {/* CHAT */}
        <Col span={5}>
          <Chat />
        </Col>
        {/* END CHAT */}
      </Row>
      {/* END CONTENT */}
    </Router>
  );
}

export default App;
