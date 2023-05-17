import React from 'react';
import css from './Card.module.css';

const Card = ({ user }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img alt="avatar" className={css.avatar}>
          {user.avatar}
        </img>
        <p className={css.tweets}>{user.tweets} tweets</p>
        <p className={css.followers}>{user.followers} followers</p>
        <button>Follow</button>
      </div>
    </div>
  );
};

export default Card;
