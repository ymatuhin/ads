const h=t=>`<script>window.yaContextCb=window.yaContextCb||[]<\/script>
    <script src="https://yandex.ru/ads/system/context.js" async><\/script>
    <div id="yandex_rtb_${t}"></div>
    <script>window.yaContextCb.push(()=>{
      Ya.Context.AdvManager.render({
        renderTo: 'yandex_rtb_${t}',
        blockId: '${t}'
      })
    })<\/script>`,g=()=>`<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-6430039911615607"
      data-ad-slot="4852376176"
      data-ad-format="auto"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({})<\/script>`,l={bistriy_start_dlya_web_razrabotchika:[[375,160],[550,160],[728,125],[970,125]],boishsya_hodit_na_sobes:[[375,160],[550,160],[728,125],[970,125]],bystro_stat_frontenderom:[[375,160],[550,160],[728,90],[970,90]],effektivnye_kursy_po_js:[[375,160],[550,160],[728,125],[970,125]],hochesh_vo_frontend:[[375,160],[550,160],[728,125],[970,125]],kak_ponyat_frontend:[[375,160],[550,160],[728,125],[970,125]],nachni_obuchenie_v_saintcode:[[375,160],[550,160],[728,90],[970,90]],ne_online_shkola_a_bootcamp:[[375,160],[550,160],[728,125],[970,125]],ne_poluchilos_uchitsya_online:[[375,160],[550,160],[728,125],[970,125]],ne_znaesh_s_chego_nachat:[[375,160],[550,160],[728,125],[970,125]],online_shkoly_nichemu_ne_nauchili:[[375,160],[550,160],[728,125],[970,125]],prihodi_v_saintcode:[[375,160],[550,160],[728,90],[970,90]],putaeshsya_v_sintaksise_js:[[375,160],[550,160],[728,90],[970,90]],slozhno_uchitsya_po_vebinaram:[[375,160],[550,160],[728,125],[970,125]],stan_frontend_razrabotchikom:[[375,160],[550,160],[728,125],[970,125]],udelyaem_vremya_kazhdomu_studentu:[[375,160],[550,160],[728,125],[970,125]]},m=t=>{var c;const{clientWidth:a}=t,{linkUrl:n,imageUrl:s,width:e,height:o}=_(a),i=(c=t.getAttribute("data-ads-align"))!=null?c:"center";return`<a href="${n}" target="_blank" style="display:block;all: initial;cursor:pointer;"><img src="${s}" alt="SaintCode Bootcamp" width="${e}" height="${o}" style="display:block;max-width:100%;height:auto;max-height:160px;margin:${i==="center"?"0 auto":i==="left"?"0":"0 0 0 auto"}"></a>`};function _(t){const a=Object.keys(l),n=a[Math.floor(Math.random()*a.length)],[s,e]=y(l[n],t),i=`https://ymatuhin.ru/ads/saint-code/${n}_${s}.svg`;return{linkUrl:`https://saintcode.ru?utm_source=${location.hostname}&utm_medium=banner&utm_campaign=summer_promo_2022&utm_content=${n}&utm_term=ymatuhin&utm_banner_width=${s}`,imageUrl:i,width:s,height:e}}function y(t,a){const n=t.sort((o,i)=>o[0]-i[0]),s=n[n.length-1],e=n.find(([o])=>o>a);return e!=null?e:s}const r={saintCode:{getHtml:m},google:{getHtml:g},yandex:{hosts:{"lines98.ru":"R-A-267686-1","autoprefixer.github.io":"R-A-268262-1"},getHtml(){var a;const t=(a=this.hosts)!=null?a:{};return h(t[location.hostname])}}};p();function p(){const t=document.querySelectorAll("[data-ads]");Array.from(t).forEach((n,s)=>{const[e,o]=b(s);d(n,e),setTimeout(()=>{n.clientHeight<10&&n.clientWidth<10&&d(n,o)},8e3)})}function b(t){const{canReadRussian:a,pageLang:n,canBeYandex:s}=k(),e=[];return a&&t===0&&e.push(r.saintCode),(n==="ru"||n==="be")&&s&&e.push(r.yandex),e.push(r.google),e}function d(t,a){t.innerHTML=a.getHtml(t)}const f=["uz","be","ro","et","lv","lt","hy","az","ka"];function k(){var n,s;const a=((s=(n=window.navigator)==null?void 0:n.languages)!=null?s:[navigator.language]).some(e=>f.includes(e));return{canBeYandex:location.hostname in(r.yandex.hosts||{}),host:location.hostname,pageLang:document.documentElement.lang,userLang:navigator.language.slice(0,2),canReadRussian:a}}
