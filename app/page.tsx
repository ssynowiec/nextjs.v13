import { Hero } from '../components/hero/Hero';
import { Slider } from '../components/slider/Slider';
import { Section } from '../components/section/Section';
import { Newsletter } from '../components/newsletter/newsletter';

const Page = () => {
  return (
    <>
      <Hero />
      <Section title='FROM THE BLOG' subtitle='CHECK OUR LATEST NEWS'>
        <Slider />
      </Section>
      <Section title='Newsletter' style='dark'>
        <Newsletter />
      </Section>
    </>
  );
};

export default Page;
