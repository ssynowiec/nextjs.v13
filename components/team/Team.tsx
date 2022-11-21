import styles from './team.module.scss';
import { Employee } from './employee/Employee';

export const Team = () => {
  return (
    <div className={styles.team}>
      <Employee name='John Doe' position='CEO' image='/images/team/CEO.jpg' />
      <Employee
        name='Aryaan Huff'
        position='Project Manager'
        image='/images/team/Project Manager.jpg'
      />
      <Employee
        name='Shamima Brookes'
        position='accountant'
        image='/images/team/accountant.jpg'
      />
    </div>
  );
};
