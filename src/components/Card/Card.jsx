import React, { useState, useEffect } from 'react';
import backGroundImg from '../../img/picture.svg';
import css from './Card.module.css';
import LogoGOIT from '../../img/Vector.svg';

const Card = ({ user }) => {
  const [isFollow, setIsFollow] = useState(() => {
    const savedFollowStatus = localStorage.getItem(`card_${user.id}_isFollow`);
    return savedFollowStatus !== null ? JSON.parse(savedFollowStatus) : false;
  });

  const [followersNumber, setFollowersNumber] = useState(() => {
    const savedFollowersNumber = localStorage.getItem(
      `card_${user.id}_followersNumber`
    );
    return savedFollowersNumber !== null
      ? JSON.parse(savedFollowersNumber)
      : user.followers;
  });

  useEffect(() => {
    localStorage.setItem(`card_${user.id}_isFollow`, JSON.stringify(isFollow));
  }, [user.id, isFollow]);

  useEffect(() => {
    localStorage.setItem(
      `card_${user.id}_followersNumber`,
      JSON.stringify(followersNumber)
    );
  }, [user.id, followersNumber]);

  const handleFollowClick = () => {
    if (isFollow) {
      setFollowersNumber(prevCount => prevCount - 1);
    } else {
      setFollowersNumber(prevCount => prevCount + 1);
    }
    setIsFollow(prevState => !prevState);
  };

  const followersFormated = followersNumber.toLocaleString('en-US');

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
          <button
            className={
              isFollow ? `${css.button} ${css.buttonActive}` : css.button
            }
            onClick={handleFollowClick}
          >
            {isFollow ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
