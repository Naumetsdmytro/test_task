import PropTypes from 'prop-types';

import style from './ButtonLoadMore.module.css';

export const ButtonLoadMore = ({ handleLoadMoreClick }) => {
  return (
    <button onClick={handleLoadMoreClick} className={style.buttonLoadMore}>
      Load More
    </button>
  );
};

ButtonLoadMore.propTypes = {
  handleLoadMoreClick: PropTypes.func.isRequired,
};
