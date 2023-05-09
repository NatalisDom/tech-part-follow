import css from './ButtonFollow.module.css';
import clsx from 'clsx';


      
const FollowButton = ({ isActive, onClick }) => {
  return (
    <>
      <button
        className={clsx(css.button, isActive && css.active)}
        type="button"
        onClick={onClick}
      >
        Follow
      </button>
    </>
  );
};

export default FollowButton;
