import { Input } from '../input/Input';
import { Button } from '../button/Button';

import styles from './newsletter.module.scss';

export const Newsletter = () => {
  return (
    <form className={styles.newsletter}>
      <Input type='text' />
      <Button type='submit'>Subscribe</Button>
      <Input
        type='checkbox'
        label='I agree to receive the newsletter'
        id='agreement'
      />
    </form>
  );
};
