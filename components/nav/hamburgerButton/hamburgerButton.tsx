import styles from './hamburgerButton.module.scss';
import { useHeaderContext } from '../../../context/headerContext';
import { clsx } from 'clsx';

export const HamburgerButton = () => {
  const { isMenuVisible, toggleMenu } = useHeaderContext();

  return (
    <button
      className={clsx(styles.hamburgerButton, isMenuVisible && styles.active)}
      onClick={() => toggleMenu}
      aria-label='Menu'
      role='button'
      aria-controls='navigation'
    >
      <span
        className={clsx(
          styles.burgerDash,
          styles.topDash,
          isMenuVisible && styles.active,
        )}
      ></span>
      <span
        className={clsx(
          styles.burgerDash,
          styles.middleDash,
          isMenuVisible && styles.active,
        )}
      ></span>
      <span
        className={clsx(
          styles.burgerDash,
          styles.bottomDash,
          isMenuVisible && styles.active,
        )}
      ></span>
      <span className='visually-hidden'>
        {isMenuVisible ? 'Zamknij menu' : 'Otwórz menu'}
      </span>
    </button>
  );
};
