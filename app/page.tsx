import { Hero } from '../components/hero/Hero';
import { Slider } from '../components/slider/Slider';
import { Section } from '../components/section/Section';
import { Newsletter } from '../components/newsletter/Newsletter';

const Page = () => {
  return (
    <>
      <Hero />
      <Section title='FROM THE BLOG' subtitle='CHECK OUR LATEST NEWS'>
        <Slider />
      </Section>
      <Section
        title='Stay in touch'
        subtitle='Sign up to our newsletter'
        style='dark'
      >
        <Newsletter />
      </Section>
      <Section title='They will take care of your project' subtitle='Our Team'>
        ...
      </Section>
    </>
  );
};

export default Page;
