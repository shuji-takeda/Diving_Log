import Layout from "../Component/Layout/Layout";
import Head from "next/head";
import Image from "../Component/Top/Image";
import Counter from "../Component/Counter";

export default () => {
  return (
    <div>
      <Head>
        <title>Sharering Diving Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout header="Sharing  Divers  log">
        <Counter />
        <Image />
      </Layout>
    </div>
  );
};
