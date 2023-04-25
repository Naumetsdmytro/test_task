import { Oval } from 'react-loader-spinner';

import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <Oval
        height={130}
        width={130}
        color="#000"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#000"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
