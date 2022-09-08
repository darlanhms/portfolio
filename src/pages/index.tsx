import type { NextPage } from 'next';
import Head from 'next/head';
import AnimatedSections from '@/components/AminatedSection';
import PresentationSection from '@/components/Home/Presentation';
import TechnologiesSection from '@/components/Home/Tecnologies';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Darlan Hermes</title>
      </Head>
      <AnimatedSections.Container>
        <PresentationSection />
        <TechnologiesSection />
      </AnimatedSections.Container>
    </>
  );
};

export default Home;
