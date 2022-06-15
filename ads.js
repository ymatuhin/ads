const l=()=>`
    <script>window.yaContextCb=window.yaContextCb||[]<\/script>
    <script src="https://yandex.ru/ads/system/context.js" async><\/script>
    <div id="yandex_rtb_R-A-267686-1"></div>
    <script>window.yaContextCb.push(()=>{
      Ya.Context.AdvManager.render({
        renderTo: 'yandex_rtb_R-A-267686-1',
        blockId: 'R-A-267686-1'
      })
    })<\/script>`,_=()=>`
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-6430039911615607"
      data-ad-slot="4852376176"
      data-ad-format="auto"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({})<\/script>`,c=["bistriy_start_dlya_web_razrabotchika","boishsya_hodit_na_sobes","bystro_stat_frontenderom","effektivnye_kursy_po_js","hochesh_vo_frontend","kak_ponyat_frontend","nachni_obuchenie_v_saintcode","ne_online_shkola_a_bootcamp","ne_poluchilos_uchitsya_online","ne_znaesh_s_chego_nachat","online_shkoly_nichemu_ne_nauchili","prihodi_v_saintcode","putaeshsya_v_sintaksise_js","slozhno_uchitsya_po_vebinaram","stan_frontend_razrabotchikom","udelyaem_vremya_kazhdomu_studentu"],u=n=>{const{clientWidth:e}=n,t=e>820?970:e>546?728:375,s=c[Math.floor(Math.random()*c.length)],i=`https://ymatuhin.ru/ads/saint-code/${s}_${t}.svg`;return`
    <a href="${`https://saintcode.ru?utm_source=${location.hostname}&utm_medium=banner&utm_campaign=summer_promo_2022&utm_content=${s}&utm_term=ymatuhin&utm_banner_width=${t}`}" target="_blank" style="display:block">
      <img src="${i}" alt="SaintCode Bootcamp" style="display:block;max-width:100%;height:auto;max-height:160px">
    </a>
  `},o={saintCode:{getHtml:u},google:{getHtml:_},yandex:{hosts:[],getHtml:l}};m();function m(){const n=document.querySelectorAll("[data-ads]");Array.from(n).forEach((t,s)=>{const[a,i]=h(s);r(t,a),setTimeout(()=>{t.clientHeight<10&&t.clientWidth<10&&r(t,i)},8e3)})}function h(n){const{canReadRussian:e,pageLang:t,canBeYandex:s}=g(),a=[];return e&&n===0&&a.push(o.saintCode),(t==="ru"||t==="be")&&s&&a.push(o.yandex),a.push(o.google),a}function r(n,e){n.innerHTML=e.getHtml(n)}function g(){var e;const n=window.navigator.languages.some(t=>t.includes("ru")||t.includes("uk")||t.includes("be"));return{canBeYandex:(e=o.yandex.hosts)==null?void 0:e.includes(location.hostname),host:location.hostname,pageLang:document.documentElement.lang,userLang:navigator.language.slice(0,2),canReadRussian:n}}
