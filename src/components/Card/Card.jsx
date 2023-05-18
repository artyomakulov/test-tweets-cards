import React from 'react';
import backGroundImg from '../../img/picture.svg';
import css from './Card.module.css';
import LogoGOIT from '../../img/Vector.svg';

const Card = ({ user }) => {
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
          <p className={css.statsF}>{user.followers} followers</p>
          <button className={css.button}>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
