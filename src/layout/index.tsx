import React, { FC } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "@/styles/layout/layout.scss";

const Layout: FC = () => {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-solt">
          <span>xxx</span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
