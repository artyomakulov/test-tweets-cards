import React, { useState } from 'react';
import backGroundImg from '../../img/picture.svg';
import css from './Card.module.css';
import LogoGOIT from '../../img/Vector.svg';

const Card = ({ user }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followersCount, setFollowersCount] = useState(user.followers);

  const handleFollow = () => {
    if (isFollowed) {
      setFollowersCount(prevCount => prevCount - 1);
    } else {
      setFollowersCount(prevCount => prevCount + 1);
    }
    setIsFollowed(prevState => !prevState);
  };

  const formattedFollowers = followersCount.toLocaleString('en-US'); 

  return (
    <div className={css.card}>
      <div className={css.centerLine}></div>
      <div className={css.logoContainer}>
        <img alt="logo" src={LogoGOIT} />
      </div>
      <div>
        <img alt="background" className={css.logo} src={backGroundImg} />
      </div>
      <div>
        <div>
          <div>
            <img alt={user.user} className={css.avatar} src={user.avatar} />
          </div>
        </div>
        <div className={css.info}>
          <p className={css.statsT}>{user.tweets} tweets</p>
          <p className={css.statsF}>{formattedFollowers} followers</p>
          <button className={isFollowed ? `${css.button} ${css.buttonFollowed}` : css.button} onClick={handleFollow}>
            {isFollowed ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
