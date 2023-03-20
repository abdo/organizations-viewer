import Head from 'next/head';
import MainPage from '@/src/MainPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Organizations Viewer</title>
        <meta name='description' content='Organizations Viewer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <MainPage />
    </>
  );
}
