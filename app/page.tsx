import { Hero } from '../components/hero/Hero';
import { Slider } from '../components/slider/Slider';
import { Section } from '../components/section/Section';

const Page = () => {
  return (
    <>
      <Hero />
      <Section title='FROM THE BLOG' subtitle='CHECK OUR LATEST NEWS'>
        <Slider />
      </Section>
    </>
  );
};

export default Page;
