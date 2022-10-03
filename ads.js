const d=()=>{const t=document.createElement("script");t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6430039911615607",t.crossOrigin="anonymous",t.async=!0,document.head.appendChild(t);const e=document.createElement("script");e.appendChild(document.createTextNode(`
      (adsbygoogle = window.adsbygoogle || []).push({});
    `)),document.head.appendChild(e)},r=()=>`<!-- Auto size -->
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-6430039911615607"
      data-ad-slot="4852376176"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  `,l=(t,e)=>{const n=document.createElement("script");n.src="https://yandex.ru/ads/system/context.js",n.async=!0,document.head.appendChild(n);const a=document.createElement("script"),o=document.createTextNode(`
    window.yaContextCb=window.yaContextCb||[];
    window.yaContextCb.push(()=>{
      Ya.Context.AdvManager.render({
        renderTo: 'yandex_rtb_${e}',
        blockId: '${e}'
      })
    })
  `);a.appendChild(o),document.head.appendChild(a)},u=(t,e)=>`<div id="yandex_rtb_${e}"></div>`,s={google:{getHtml:r,insertScripts:d},yandex:{hosts:{"lines98.ru":"R-A-267686-1","autoprefixer.github.io":"R-A-268262-1"},insertScripts:l,getHtml:u}};g();function g(){const t=document.querySelectorAll("[data-ads]");Array.from(t).forEach(n=>{c(n,p())})}function c(t,e){const[n,...a]=e;h(t,n),setTimeout(()=>{(t.clientHeight<4||t.clientWidth<4)&&a.length&&c(t,a)},4e3)}function p(){const{canReadRussian:t,canBeYandex:e}=m(),n=[];return t&&e&&n.push(s.yandex),n.push(s.google),n}function h(t,e){var a,o;const n=(a=e.hosts)==null?void 0:a[location.hostname];t.innerHTML=e.getHtml(t,n),(o=e.insertScripts)==null||o.call(e,t,n)}function m(){var a,o;const t=["ru","uz","be","ro","et","lv","lt","hy","az","ka"],n=((o=(a=window.navigator)==null?void 0:a.languages)!=null?o:[navigator.language]).some(i=>t.includes(i.slice(0,2)));return{canBeYandex:location.hostname in(s.yandex.hosts||{}),host:location.hostname,pageLang:document.documentElement.lang,userLang:navigator.language.slice(0,2),canReadRussian:n}}
