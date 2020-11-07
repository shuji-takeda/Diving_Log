import Layout from "../Component/Layout/Layout";
import Header from "../Component/Layout/Header";
import Footer from "../Component/Layout/Footer";
import Head from "next/head";
import Image from "../Component/Top/Image";
import Counter from "../Component/Counter";
import Menu from "../Component/Top/Menu";
import Link from 'next/link';

export default () => {
  return (
    <div>
      <Head>
        <title>Sharering Diving Log</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Counter />
      <Link href="/Sample"><button>Go SamplePage</button></Link>
      <Menu />
      <Footer />
    </div>
  );
};
