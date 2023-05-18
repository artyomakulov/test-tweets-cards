import React, { useEffect, useState } from 'react';
import Card from 'components/Card/Card';
import { getUsers } from '../../services/api';
import css from './CardList.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadMoreButton from '../Button/Button';


const CardList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  
    getUsers(page, 3)
      .then(res => {
        setUsers(prevUsers => [...prevUsers, ...res.data]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, [page]);

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <div className={css.container}>
        <ul className={css.grid}>
          {users.map(user => (
            <li key={user.id}>
              <Card user={user} />
            </li>
          ))}
        </ul>
      </div>
      <LoadMoreButton onClick={handleLoadMoreClick} isLoading={isLoading} />
    </>
  );
};

export default CardList;
