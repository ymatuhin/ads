export const insertGoogleScripts = () => {
  const newScript = document.createElement("script");
  newScript.src =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6430039911615607";
  newScript.crossOrigin = "anonymous";
  newScript.async = true;
  document.head.appendChild(newScript);

  const newScript2 = document.createElement("script");
  newScript2.appendChild(
    document.createTextNode(`
      (adsbygoogle = window.adsbygoogle || []).push({});
    `),
  );
  document.head.appendChild(newScript2);
};

export const getGoogleHtml = () => {
  return `<!-- Auto size -->
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-6430039911615607"
      data-ad-slot="4852376176"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  `;
};
