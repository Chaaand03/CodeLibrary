import { useEffect } from 'react';

const GTMScript = () => {
  useEffect(() => {
    const gtmId = 'GTM-T27TBT88';

    // Add GTM script to head
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script1);

    // Add GTM inline initialization script
    const script2 = document.createElement('script');
    script2.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(script2);

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);

    // Cleanup on unmount
    return () => {
      const scripts = document.head.querySelectorAll(`script[src*="${gtmId}"]`);
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return null;
};

export default GTMScript;
