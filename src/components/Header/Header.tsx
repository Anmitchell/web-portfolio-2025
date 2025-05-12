import styles from './Header.module.css';

interface HeaderProps {
  name: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ name, title }) => {
  return (
    <div className={styles['header-section']}>
      <div className={styles['header']}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Header; 