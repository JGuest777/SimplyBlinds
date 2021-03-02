import Head from 'next/head';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Why from '../components/Why';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simply Blinds | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Why />
      <Products />
      <Testimonials />
    </div>
  );
}
