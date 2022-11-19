import { Input } from '../input/Input';
import { Button } from '../button/Button';

import styles from './newsletter.module.scss';

export const Newsletter = () => {
  return (
    <form className={styles.newsletter}>
      <div className={styles.form}>
        <Input type='text' />
        <Button type='submit'>Subscribe</Button>
      </div>
      <div>
        <Input
          type='checkbox'
          label='I agree to receive the newsletter'
          id='agreement'
        />
      </div>
    </form>
  );
};
