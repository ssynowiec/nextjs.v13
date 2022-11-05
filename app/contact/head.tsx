import SEO from '../../next-seo.config';
import { NextSeo } from 'next-seo';

const ContactHead = () => {
  return <NextSeo {...SEO} title='Contact' />;
};

export default ContactHead;
