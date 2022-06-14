const l=()=>`
    YANDEX
    <script>window.yaContextCb=window.yaContextCb||[]<\/script>
    <script src="https://yandex.ru/ads/system/context.js" async><\/script>
    <div id="yandex_rtb_R-A-267686-1"></div>
    <script>window.yaContextCb.push(()=>{
      Ya.Context.AdvManager.render({
        renderTo: 'yandex_rtb_R-A-267686-1',
        blockId: 'R-A-267686-1'
      })
    })<\/script>`,u=()=>`
    GOOGLE
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-6430039911615607"
      data-ad-slot="4852376176"
      data-ad-format="auto"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({})<\/script>`,r=["nachni_obuchenie_v_saintcode","prihodi_v_saintcode","stan_frontend_razrabotchikom","effektivnye_kursy_po_js","putaeshsya_v_sintaksise_js","ne_znaesh_s_chego_nachat","boishsya_hodit_na_sobes","hochesh_vo_frontend","bistriy_start_dlya_web_razrabotchika","ne_online_shkola_a_bootcamp","kak_ponyat_frontend","bystro_stat_frontenderom","online_shkoly_nichemu_ne_nauchili","ne_poluchilos_uchitsya_online","udelyaem_vremya_kazhdomu_studentu","slozhno_uchitsya_po_vebinaram"],_=n=>{const{clientWidth:e}=n,t=e>970?970:e>600?768:375,s=r[Math.floor(Math.random()*r.length)],i=`https://ymatuhin.ru/ads/${s}_${t}.svg`;return`SAINT-CODE
    <a href="${`https://saintcode.ru?utm_source=${location.hostname}&utm_medium=banner&utm_campaign=summer_promo_2022&utm_content=${s}&utm_term=ymatuhin`}" target="_blank" style="display:block">
      <img src="${i}" width="${t}" height="90" alt="SaintCode Bootcamp" style="max-width:100%;height:auto;max-height: 150px">
    </a>
  `},o={saintCode:{getHtml:_},google:{getHtml:u},yandex:{hosts:["ymatuhin.ru"],getHtml:l}};h();function h(){const n=document.querySelectorAll("[data-ads]");Array.from(n).forEach((t,s)=>{const[a,i]=m(s);c(t,a),setTimeout(()=>{t.clientHeight<10&&t.clientWidth<10&&c(t,i)},8e3)})}function m(n){const{canReadRussian:e,pageLang:t,canBeYandex:s}=g(),a=[];return e&&n===0&&a.push(o.saintCode),(t==="ru"||t==="be")&&s&&a.push(o.yandex),a.push(o.google),a}function c(n,e){n.innerHTML=e.getHtml(n)}function g(){var e;const n=window.navigator.languages.some(t=>t.includes("ru")||t.includes("uk")||t.includes("be"));return{canBeYandex:(e=o.yandex.hosts)==null?void 0:e.includes(location.hostname),host:location.hostname,pageLang:document.documentElement.lang,userLang:navigator.language.slice(0,2),canReadRussian:n}}
