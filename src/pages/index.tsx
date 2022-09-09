import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AnimatedSections from '@/components/AnimatedSection';
import PresentationSection from '@/components/Home/Presentation';
import TechnologiesSection from '@/components/Home/Technologies';
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) {
    return {
      props: {},
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default Home;
