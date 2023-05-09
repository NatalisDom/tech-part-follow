import css from './Tweet.module.css';
import { ReactComponent as BoyImg } from '../../img/Boy.svg';
import { useState } from 'react';

import ButtonFollow from 'components/ButtunFollow/ButtunFollow';

const Tweet = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <article className={css.tweet}>
      <h1 className={css.tweet__title}>tweet</h1>
      <div className={css.tweet__container}>
        <div className={css.tweet__tumb}>
          <BoyImg
            className={css.tweet__boyImg}
            width={80}
            height={80}
            viewBox="5 0 80 80"
          />
        </div>
        <p className={css.tweet__tweet_quantity}> 777 tweets</p>
        <p className={css.tweet__followers_quantity}> 100,500 followers</p>
        <ButtonFollow isActive={isActive} onClick={handleClick} />
      </div>
    </article>
  );
};

export default Tweet;
