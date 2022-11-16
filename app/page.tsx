import { Hero } from '../components/hero/Hero';
import { Slider } from '../components/slider/Slider';
import { Posts } from '../components/slider/posts/Posts';

const Page = () => {
  return (
    <>
      <Hero />
      <Slider>
        <Posts />
      </Slider>
    </>
  );
};

export default Page;
