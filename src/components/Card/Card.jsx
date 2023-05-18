import React, { useState, useEffect } from 'react';
import backGroundImg from '../../img/picture.svg';
import css from './Card.module.css';
import LogoGOIT from '../../img/Vector.svg';

const Card = ({ user }) => {
  const [isFollowed, setIsFollowed] = useState(() => {
    const savedFollowedStatus = localStorage.getItem(`card_${user.id}_isFollowed`);
    return savedFollowedStatus !== null ? JSON.parse(savedFollowedStatus) : false;
  });
  
  const [followersCount, setFollowersCount] = useState(() => {
    const savedFollowersCount = localStorage.getItem(`card_${user.id}_followersCount`);
    return savedFollowersCount !== null ? JSON.parse(savedFollowersCount) : user.followers;
  });

  useEffect(() => {
    localStorage.setItem(`card_${user.id}_isFollowed`, JSON.stringify(isFollowed));
  }, [user.id, isFollowed]);

  useEffect(() => {
    localStorage.setItem(`card_${user.id}_followersCount`, JSON.stringify(followersCount));
  }, [user.id, followersCount]);

  const handleFollowClick = () => {
    if (isFollowed) {
      setFollowersCount(prevCount => prevCount - 1);
    } else {
      setFollowersCount(prevCount => prevCount + 1);
    }
    setIsFollowed(prevState => !prevState);
  };

  const followersFormated = followersCount.toLocaleString('en-US');

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
          <p className={css.statsF}>{followersFormated} followers</p>
          <button className={isFollowed ? `${css.button} ${css.buttonActive}` : css.button} onClick={handleFollowClick}>
            {isFollowed ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
