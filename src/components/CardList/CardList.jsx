import React, { useEffect, useState } from 'react';
import Card from 'components/Card/Card';
import axios from 'axios';
import css from './CardList.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://6464aa05043c103502bf6426.mockapi.io/users?completed=false&page=${page}&limit=6`
      )
      .then(res => {
        setUsers(prevUsers => [...prevUsers, ...res.data]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <div>
        <ul className={css.grid}>
          {users.map(user => (
            <li key={user.id}>
              <Card user={user} />
            </li>
          ))}
        </ul>
      </div>
      <div className={css.buttonLoadMore}>
        <button type="button" className="btn btn-primary"  onClick={handleLoadMore}>Load More</button>
      </div>
    </>
  );
};

export default CardList;
