import React, {Fragment} from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";

import {sidebarOption} from "../../utilities/constants";
import "./Sidebar.css";

const getActiveRoute = (to) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({path: resolved?.pathname, end: true});
  return !!match;
};

const Sidebar = () => {
  return (
    <Fragment>
      {sidebarOption.map(({key, route, Icon}) => (
        <Link key={key} to={`/${route}`} className="route routelink">
          <div className={`sidebar_nav ${getActiveRoute(route) && "active"}`}>
            <Icon sx={{color: "#b6c1de"}} />
            <p>{key}</p>
          </div>
        </Link>
      ))}
    </Fragment>
  );
};

export default Sidebar;
