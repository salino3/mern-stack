import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../router";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={switchRoutes.root}>Home</Link>
        </li>
        <li>
          <Link to={switchRoutes.newtask}>Create task</Link>
        </li>
      </ul>
    </nav>
  );
};
