import styles from './styles.module.scss';

interface ProjectBoxProps {
  name: string;
  description: string;
  link: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ name, description, link }) => {
  return (
    <div className={styles.projectBox} onClick={() => window.open(link, '_blank')}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectBox;
