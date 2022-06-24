import type { NextPage } from 'next';

import styles from '@/styles/pages/Home.module.scss';
import profileImg from '@/assets/images/profile.jpg';
import Head from 'next/head';
import { FaGithub, FaLinkedin, FaDocker, FaNodeJs, FaReact, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import SocialBox from '@/components/SocialBox';
import Divisor from '@/components/Divisor';
import ProjectBox from '@/components/pages/home/ProjectBox';

const Home: NextPage = () => {
  return (
    <div className={styles.infosContainer}>
      <Head>
        <title>Darlan Hermes</title>
      </Head>

      <img className={styles.imageContainer} src={profileImg.src} width={200} height={200} />

      <Divisor size={40} />

      <h3 className={styles.name}>Darlan Hermes</h3>

      <Divisor size={15} />

      <div className={styles.socials}>
        <SocialBox href="https://github.com/darlanhms">
          <FaGithub />
          GitHub
        </SocialBox>
        <SocialBox href="https://www.linkedin.com/in/darlanhms">
          <FaLinkedin />
          Linkedin
        </SocialBox>
      </div>

      <Divisor size={30} />

      <div className={styles.techStacksContainer}>
        <h4>Tech Stack</h4>

        <Divisor size={13} />

        <div className={styles.techStacks}>
          <SiTypescript size={25} />
          <SiJavascript size={25} />
          <FaNodeJs size={25} />
          <FaReact size={25} />
          <FaDocker size={25} />
          <FaAws size={25} />
        </div>
      </div>

      <Divisor size={30} />

      <div className={styles.projectsContainer}>
        <h4>Projetos Principais</h4>

        <Divisor size={20} />

        <div>
          <ProjectBox
            name="Lofhen Beer"
            description="Sistema gerencial de choperias, um ERP básico com regras adicionais específicas para a área"
            link="https://github.com/darlanhms/lofhen-beer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
