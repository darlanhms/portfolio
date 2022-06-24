import styles from './styles.module.scss';

interface SocialBoxProps extends React.PropsWithChildren {
  href: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ children, href }) => {
  return (
    <a className={styles.box} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default SocialBox;
