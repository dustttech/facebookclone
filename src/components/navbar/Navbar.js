import React from "react";

import { Row } from "antd";

import LogoSearch from "./LogoSearch";
import UserSetting from "./UserSetting";
import PageNav from "./PageNav";

function Navbar() {
  return (
    <Row className="navbar">
      {/* LOGO SEARCH */}
      <LogoSearch />
      {/* LOGO SEARCH */}
      {/* NEWSFEED */}
      <PageNav />
      {/* END NEWSFEED */}
      {/* USER SETTING */}
      <UserSetting />
      {/* USER SETTING */}
    </Row>
  );
}

export default Navbar;
