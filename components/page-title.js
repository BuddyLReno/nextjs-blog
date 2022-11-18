import Head from 'next/head';

export default function PageTitle({ title = '' }) {
  function format(title) {
    return !!title.trim() ? `${title} | Buddy Reno` : 'Buddy Reno';
  }

  return (
    <>
      <Head>
        <title key="page-title">{format(title)}</title>
        
      </Head>
    </>
  );
}