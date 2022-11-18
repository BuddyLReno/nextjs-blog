import Head from 'next/head';

export default function PageTitle({ title = '' }) {
  function format(title) {
    return !!title.trim() ? `${title} | Buddy Reno` : 'Buddy Reno';
  }

  return (
    <>
      <Head>
        <title key="page-title">{format(title)}</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-10JBF1Y2VK"></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-10JBF1Y2VK', {
              page_path: window.location.pathname,
            });
          `,
            }}></script>
      </Head>
    </>
  );
}