import type { NextPage } from 'next';
import Head from 'next/head';
import AnimatedSections from '@/components/AminatedSection';
import PresentationSection from '@/components/Home/Presentation';
import TechnologiesSection from '@/components/Home/Tecnologies';
import ProfessionalExperienceSection from '@/components/Home/ProfessionalExperience';
import ContactSection from '@/components/Home/Contact';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Darlan Hermes</title>
      </Head>
      <AnimatedSections.Container>
        <PresentationSection />
        <TechnologiesSection />
        <ProfessionalExperienceSection />
        <ContactSection />
      </AnimatedSections.Container>
    </>
  );
};

export default Home;
