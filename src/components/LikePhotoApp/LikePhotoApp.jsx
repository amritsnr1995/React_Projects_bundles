import React, { useState } from "react";
import {
  
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import PhotoTitle from "./PhotoTitle";
import SakuraImage from "./sakura.jpg";

const LikePhotoApp = () => {
  const [like, setLike]   = useState(false);
  const [count,setCount] = useState(0)
  const handleLike = () => {
    setLike(!like);
    setCount(count+1)
  };
  const handleUnlike = () => {
    setLike(!like);
    setCount(count-1)
  };

  return (
    <div>
      <header>
        <PhotoTitle text={"Like Photo App"} />
        <PhotoTitle text={`Likes: ${count}`} />
      </header>
      <section>
        <div className="card">
          <div className="card__title">
            <h2>Sakura Blossom</h2>
          </div>
          <div className="card__image">
            <img src={SakuraImage} alt="sakuraImage" className="sakura_image" onDoubleClick={handleLike}/>
          </div>
          <div className="card__icons">
            <AiOutlineComment />
            {like ? <AiFillHeart onClick={handleUnlike} /> : <AiOutlineHeart onClick={handleLike} />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LikePhotoApp;
