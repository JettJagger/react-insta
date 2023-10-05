import { Avatar } from "@mui/material";
import React from "react";
import "./suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src= {require ("../Avatars/Pert.jpg")}>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Rupert</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src= {require ("../Avatars/oggy.jpg")}>O</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Oggy</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src= {require ("../Avatars/cuthbert.jpg")}>C</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Cuthbert</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src= {require ("../Avatars/Moss.jpg")}>M</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Moss</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;