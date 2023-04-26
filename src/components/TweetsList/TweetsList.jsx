import { TweetsListItem } from 'components/TweetsListItem';

import style from './TweetsList.module.css';

export const TweetsList = ({ users, handleFollowClick }) => {
  return (
    <>
      {
        <ul className={style.tweetsList}>
          {users.map(({ tweets, avatar, followers, id, user, isFollow }) => {
            return (
              <TweetsListItem
                key={id}
                tweets={tweets}
                avatar={avatar}
                followers={followers}
                id={id}
                handleFollowClick={handleFollowClick}
              />
            );
          })}
        </ul>
      }
    </>
  );
};
