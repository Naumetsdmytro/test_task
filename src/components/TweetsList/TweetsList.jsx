import { TweetsListItem } from 'components/TweetsListItem';
import { useEffect } from 'react';

import style from './TweetsList.module.css';

export const TweetsList = ({ users }) => {
  const processedUsers = users.map(user => ({ id: user.id, isFollow: false }));

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(processedUsers));
  }, [processedUsers]);
  return (
    <>
      {
        <ul className={style.tweetsList}>
          {users.map(({ tweets, avatar, followers, id, user }) => {
            return (
              <TweetsListItem
                key={id}
                tweets={tweets}
                avatar={avatar}
                followers={followers}
                user={user}
                id={id}
              />
            );
          })}
        </ul>
      }
    </>
  );
};
