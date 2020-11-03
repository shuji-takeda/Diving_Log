import Layout from "../Component/Layout/Layout";
import Head from "next/head";
import ImageDisplay from "../Component/Top/ImageDisplay";
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
        <ImageDisplay />
      </Layout>
    </div>
  );
};
