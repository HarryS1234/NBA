import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">

      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img
            src="https://media.discordapp.net/attachments/1201032938750484521/1267576143393984543/logo-duel_1.png?ex=66b3d5c7&is=66b28447&hm=0417025887c2b6b4e09d09043cc6d23034cc256e806bfeff0f4741902793fd68&=&format=webp&quality=lossless&width=1064&height=1064"
            alt="Logo"
            className="logo-image"
          />
        </Link>
      </div>
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right head">

          <li >
            <h1>NBA Stats Duel</h1>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lookup">Look-up</Link>
          </li>
          <li>
            <Link to="/comparison">Comparison</Link>
          </li>
          <li>
            <Link to="/duel">Duel</Link>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navigation;
