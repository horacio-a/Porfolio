
import '@/styles/errorPage.css'
import '@/styles/modernBackground.css'
import { SpeedInsights } from '@vercel/speed-insights/react';

import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default MyApp;