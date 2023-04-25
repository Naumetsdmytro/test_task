import { useEffect, useState } from 'react';

import cardPicture from '../../images/cardPicture.png';
import logo from '../../images/logo.png';

import style from './TweetsListItem.module.css';

export const TweetsListItem = ({ tweets, avatar, followers, user }) => {
  const [isFollow, setFollow] = useState(() => {
    const isFollowSaved = localStorage.getItem('users');
    if (isFollowSaved !== null) {
      return JSON.parse(isFollowSaved);
    }
    return false;
  });

  useEffect(() => {
    console.log(isFollow);
    localStorage.setItem('isFollow', isFollow);
  }, [isFollow]);

  const followersActions = () => {
    return isFollow ? followers + 1 : followers;
  };

  const handleFollowClick = () => {
    setFollow(prevstate => !prevstate);
  };

  return (
    <li className={style.tweetsListItem}>
      <div className={style.cardContainer}>
        <img src={logo} alt="logo" className={style.logo} />
        <img
          src={cardPicture}
          alt="card background"
          className={style.cardPicture}
        />
        <img src={avatar} alt={user} className={style.cardAvatar} />
        <p className={style.cardTextTweets}>{tweets} tweets</p>
        <p className={style.cardTextFollowers}>
          {followersActions().toLocaleString('en-US')} followers
        </p>
        <button
          type="button"
          onClick={handleFollowClick}
          className={isFollow ? style.followingButton : style.followButton}
        >
          {isFollow ? 'FOLLOWING' : 'FOLLOW'}
        </button>
      </div>
    </li>
  );
};

// export const FollowButton = () => {
//   const [follow, setFollow] = useState(false);

//   const handleFollowClick = () => {
//     setFollow(prevstate => !prevstate);
//   };

//   return (
//     <button type="button" onClick={handleFollowClick}>
//       {follow ? 'following' : 'follow'}
//     </button>
//   );
// };
