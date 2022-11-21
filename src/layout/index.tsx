import React, { FC } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "@/styles/layout/layout.scss";

const Layout: FC = () => {
  return (
    <div className="main-wrapper">
      <div className="main-nav">
        <Navbar />
      </div>
      <div className="main-content">
        <Sidebar />
        <div className="content-solt">
          <span>xxx</span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
