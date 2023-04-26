import PropTypes from 'prop-types';

import { TweetsListItem } from 'components/TweetsListItem';

import style from './TweetsList.module.css';

export const TweetsList = ({ users, handleFollowClick }) => {
  return (
    <>
      {
        <ul className={style.tweetsList}>
          {users.map(({ tweets, avatar, followers, id }) => {
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

TweetsList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
  handleFollowClick: PropTypes.func.isRequired,
};
