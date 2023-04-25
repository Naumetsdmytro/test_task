import { useState, useEffect } from 'react';

import { fetchUsersData } from 'components/services/fetchUsersData';
import { TweetsList } from 'components/TweetsList';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { Loader } from 'components/Loader';

import style from './Tweets.module.css';
import { Link } from 'react-router-dom';

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      try {
        const usersData = await fetchUsersData(page);
        if (page > 1) {
          return setUsers(prevstate => [...prevstate, ...usersData]);
        }
        setUsers(usersData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  const handleLoadMoreClick = () => {
    setPage(prevstate => prevstate + 1);
  };

  return (
    <div className={style.container}>
      {!isLoading && (
        <Link to="/">
          <button className={style.buttonGoHome}>Go Home</button>
        </Link>
      )}
      <TweetsList users={users} />
      {users.length < 12 && !isLoading && (
        <ButtonLoadMore handleLoadMoreClick={handleLoadMoreClick} />
      )}
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
    </div>
  );
}
