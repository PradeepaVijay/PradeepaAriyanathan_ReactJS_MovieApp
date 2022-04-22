import React from "react";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
import { ReactComponent as HeartSvg } from "../../assets/svg/heart.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/github.svg";

export default function Nav() {
  let badgeContent = useSelector((state) => state.favoriteStore.favorites);
  let size = Object.keys(badgeContent).length;
  return (
    <div className="nav">
      <Link to="/">
        Home
      </Link>
      <h3>Movie App</h3>
      <div className="nav-links">
        <Link to="/favorites" className="favorites-btn">
          <Badge
            color="secondary"
            badgeContent={size}
            classes={{ badge: "badge-style" }}
          >
            <HeartSvg className="svg-filter-grey" />
          </Badge>
        </Link>
        <Link to="/trending">
          Trending
        </Link>
        <Link to="/toprated">
          Top Rated
        </Link>
      </div>
    </div>
  );
}