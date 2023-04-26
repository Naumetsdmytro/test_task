import cardPicture from '../../images/cardPicture.png';
import logo from '../../images/logo.png';
import { loadFromStorage } from 'components/services/storage';

import style from './TweetsListItem.module.css';

export const TweetsListItem = ({
  tweets,
  avatar,
  followers,
  id,
  handleFollowClick,
}) => {
  const isFollow = loadFromStorage(`tweet_${id}`) === true;

  return (
    <li className={style.tweetsListItem}>
      <div className={style.cardContainer}>
        <img src={logo} alt="logo" className={style.logo} />
        <img
          src={cardPicture}
          alt="card background"
          className={style.cardPicture}
        />
        <img src={avatar} alt="user name" className={style.cardAvatar} />
        <p className={style.cardTextTweets}>{tweets} tweets</p>
        <p className={style.cardTextFollowers}>
          {followers.toLocaleString('en-US')} followers
        </p>
        <button
          type="button"
          onClick={() => handleFollowClick(id, isFollow)}
          className={isFollow ? style.followingButton : style.followButton}
        >
          {isFollow ? 'FOLLOWING' : 'FOLLOW'}
        </button>
      </div>
    </li>
  );
};
