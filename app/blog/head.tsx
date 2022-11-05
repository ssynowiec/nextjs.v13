import SEO from '../../next-seo.config';
import { NextSeo } from 'next-seo';

const BlogHead = () => {
  return <NextSeo {...SEO} title='Blog' />;
};

export default BlogHead;
