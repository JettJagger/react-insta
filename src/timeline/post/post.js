import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import cutherbertImg from "../../Avatars/cuthbert.jpg";
import rufusImg from "../../Avatars/Rufus.jpg";
import mossImg from "../../Avatars/Moss.jpg";
import pertImg from "../../Avatars/Pert.jpg";
import tazImg from "../../Avatars/taz.avif";
import oggyImg from "../../Avatars/oggy.jpg";
import mauwImg from "../../Avatars/mauw.jpg";
import winnieImg from "../../Avatars/Winnie.jpg";
import pussImg from "../../Avatars/Puss.jpg";
import peggyImg from "../../Avatars/Peggy.jpg";
import mtImg from "../../Avatars/MT.jpg";

function Post({ user, postImage, likes, timestamp }) {
  const[avatarImg, setAvatarImg] = useState()


 
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          {(user == "Cuthbert") && <Avatar src= {cutherbertImg} style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>} 
          {(user == "Rufus") && <Avatar src= {rufusImg} style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>} 
          {(user == "Rupert") && <Avatar src= {pertImg} style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>} 
          {(user == "Winnie") && <Avatar src= {winnieImg} style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>} 
          {(user == "Pussington") && <Avatar src= {pussImg} style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>} 
          {(user == "Peggy") && <Avatar src= {peggyImg} style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>} 
          {(user == "Oggy") && <Avatar src= {oggyImg} style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>} 
          {(user == "Taz") && <Avatar src= {tazImg} style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>} 
          {(user == "Moss") && <Avatar src= {mossImg} style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>} 
          {(user == "Miss Mauw") && <Avatar src= {mauwImg} style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>} 
          {(user == "MT") && <Avatar src= {mtImg} style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>} 
          
          {" "}
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  );
}

export default Post;