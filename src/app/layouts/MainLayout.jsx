import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "../components/sidenav/SideNav";

import { StandardMenu, AdminMenu } from "../navigation";

import { TopNav } from "../components/topnav/TopNav";

import { useHistory } from "react-router-dom";

const MainLayout = (props) => {
  const history = useHistory();

  const user = props.user;
  const menu = [];

  if (user) {
    if (user.role === "SuperAdmin") {
      menu.length = 0;
      menu.push(...StandardMenu, ...AdminMenu);
    }

    if (user.role === "Admin") {
      menu.length = 0;
      menu.push(...StandardMenu);
    }

    if (user.role === "Officer") {
      menu.length = 0;
      menu.push(...StandardMenu);
    }

    if (user.role === "ImplementationOfficer") {
      menu.length = 0;
      menu.push(...StandardMenu);
    }
  }

  return (
    <>
      <Container fluid className="p-0 m-0">
        <TopNav />
        <div className="d-flex p-0 m-0">
          <SideNav menu={menu} />
          <Col sm={10} style={{ minHeight: "70vh" }} className="p-0 m-0">
            {props.children}
          </Col>
        </div>
      </Container>
    </>
  );
};

export default MainLayout;
