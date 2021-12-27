import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MainLayout.css";

const MainLayout = ({children}) => {
  return (
    <div className="mainlayout">
      {/* sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>
      {/* main section */}
      <div className="hero">{children}</div>
    </div>
  );
};

export default MainLayout;
