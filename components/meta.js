import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <script 
        async 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_KEY}`} 
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.GOOGLE_ANALYTICS_KEY}', {
          page_path: window.location.pathname,
        });
        `
      }}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex" />
      <meta name="Description" content={`The work of Eric Frommelt`} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/beu6szp.css"></link>
    </Head>
  )
}