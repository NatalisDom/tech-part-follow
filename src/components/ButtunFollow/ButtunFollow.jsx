import css from './ButtonFollow.module.css';
import clsx from 'clsx';
import { getIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';

      
const FollowButton = ({ isActive, onClick }) => {
    const isLoading = useSelector(getIsLoading);
  return (
    <>
      <button
        className={clsx(css.button, isActive && css.active)}
        type="button"
        onClick={onClick}
        disabled={isLoading}
      >
        Follow
      </button>
    </>
  );
};

export default FollowButton;
