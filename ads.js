const h=t=>`<script>window.yaContextCb=window.yaContextCb||[]<\/script>
    <script src="https://yandex.ru/ads/system/context.js" async><\/script>
    <div id="yandex_rtb_${t}"></div>
    <script>window.yaContextCb.push(()=>{
      Ya.Context.AdvManager.render({
        renderTo: 'yandex_rtb_${t}',
        blockId: '${t}'
      })
    })<\/script>`,g=()=>`
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6430039911615607"
     crossorigin="anonymous"><\/script>
<!-- Auto size -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-6430039911615607"
     data-ad-slot="4852376176"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
<\/script>
  `,l={bistriy_start_dlya_web_razrabotchika:[[375,160],[550,160],[728,125],[970,125]],boishsya_hodit_na_sobes:[[375,160],[550,160],[728,125],[970,125]],bystro_stat_frontenderom:[[375,160],[550,160],[728,90],[970,90]],effektivnye_kursy_po_js:[[375,160],[550,160],[728,125],[970,125]],hochesh_vo_frontend:[[375,160],[550,160],[728,125],[970,125]],kak_ponyat_frontend:[[375,160],[550,160],[728,125],[970,125]],nachni_obuchenie_v_saintcode:[[375,160],[550,160],[728,90],[970,90]],ne_online_shkola_a_bootcamp:[[375,160],[550,160],[728,125],[970,125]],ne_poluchilos_uchitsya_online:[[375,160],[550,160],[728,125],[970,125]],ne_znaesh_s_chego_nachat:[[375,160],[550,160],[728,125],[970,125]],online_shkoly_nichemu_ne_nauchili:[[375,160],[550,160],[728,125],[970,125]],prihodi_v_saintcode:[[375,160],[550,160],[728,90],[970,90]],putaeshsya_v_sintaksise_js:[[375,160],[550,160],[728,90],[970,90]],slozhno_uchitsya_po_vebinaram:[[375,160],[550,160],[728,125],[970,125]],stan_frontend_razrabotchikom:[[375,160],[550,160],[728,125],[970,125]],udelyaem_vremya_kazhdomu_studentu:[[375,160],[550,160],[728,125],[970,125]]},m=t=>{var c;const{clientWidth:e}=t,{linkUrl:n,imageUrl:a,width:s,height:o}=_(e),i=(c=t.getAttribute("data-ads-align"))!=null?c:"center";return`<a href="${n}" target="_blank" style="display:block;all: initial;cursor:pointer;"><img src="${a}" alt="SaintCode Bootcamp" width="${s}" height="${o}" style="display:block;max-width:100%;height:auto;max-height:160px;margin:${i==="center"?"0 auto":i==="left"?"0":"0 0 0 auto"}"></a>`};function _(t){const e=Object.keys(l),n=e[Math.floor(Math.random()*e.length)],[a,s]=y(l[n],t),i=`https://ymatuhin.ru/ads/saint-code/${n}_${a}.svg`;return{linkUrl:`https://saintcode.ru?utm_source=${location.hostname}&utm_medium=banner&utm_campaign=summer_promo_2022&utm_content=${n}&utm_term=ymatuhin&utm_banner_width=${a}`,imageUrl:i,width:a,height:s}}function y(t,e){const n=t.sort((o,i)=>o[0]-i[0]),a=n[n.length-1],s=n.find(([o])=>o>e);return s!=null?s:a}const r={saintCode:{getHtml:m},google:{getHtml:g},yandex:{hosts:{"lines98.ru":"R-A-267686-1","autoprefixer.github.io":"R-A-268262-1"},getHtml(){var e;const t=(e=this.hosts)!=null?e:{};return h(t[location.hostname])}}};p();function p(){const t=document.querySelectorAll("[data-ads]");Array.from(t).forEach((n,a)=>{d(n,b(a))})}function d(t,e){const[n,...a]=e;f(t,n),setTimeout(()=>{t.clientHeight<10&&t.clientWidth<10&&d(t,a)},4e3)}function b(t){const{canReadRussian:e,pageLang:n,canBeYandex:a}=k(),s=[];return e&&t===0&&s.push(r.saintCode),(n==="ru"||n==="be")&&a&&s.push(r.yandex),s.push(r.google),s}function f(t,e){t.innerHTML=e.getHtml(t)}function k(){var a,s;const t=["ru","uz","be","ro","et","lv","lt","hy","az","ka"],n=((s=(a=window.navigator)==null?void 0:a.languages)!=null?s:[navigator.language]).some(o=>t.includes(o.slice(0,2)));return{canBeYandex:location.hostname in(r.yandex.hosts||{}),host:location.hostname,pageLang:document.documentElement.lang,userLang:navigator.language.slice(0,2),canReadRussian:n}}
