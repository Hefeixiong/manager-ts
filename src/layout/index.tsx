import React, { FC } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout: FC = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Layout;
