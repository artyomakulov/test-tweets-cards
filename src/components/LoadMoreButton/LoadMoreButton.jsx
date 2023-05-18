import React from 'react';
import css from '../LoadMoreButton/LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick, isLoading }) => {
  const handleClick = () => {
    if (!isLoading) {
      onClick();
    }
  };

  return (
    <div className={css.buttonLoadMore}>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

export default LoadMoreButton;
