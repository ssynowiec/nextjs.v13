import styles from './employee.module.scss';
import Image from 'next/image';

type EmployeeProps = {
  name: string;
  position: string;
  image: string;
};

export const Employee = ({ name, position, image }: EmployeeProps) => {
  return (
    <div className={styles.employee}>
      <Image alt={name} src={image} width={200} height={300} />
      <div className={styles.employeeInfo}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
        <div>
          <a href='tel:' className={styles.link}>
            <span className='material-symbols-outlined'>call</span>
          </a>
          <a href='mailto:' className={styles.link}>
            <span className='material-symbols-outlined'>mail</span>
          </a>
        </div>
      </div>
    </div>
  );
};
