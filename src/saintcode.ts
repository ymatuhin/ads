const banners = [
  "bistriy_start_dlya_web_razrabotchika",
  "boishsya_hodit_na_sobes",
  "bystro_stat_frontenderom",
  "effektivnye_kursy_po_js",
  "hochesh_vo_frontend",
  "kak_ponyat_frontend",
  "nachni_obuchenie_v_saintcode",
  "ne_online_shkola_a_bootcamp",
  "ne_poluchilos_uchitsya_online",
  "ne_znaesh_s_chego_nachat",
  "online_shkoly_nichemu_ne_nauchili",
  "prihodi_v_saintcode",
  "putaeshsya_v_sintaksise_js",
  "slozhno_uchitsya_po_vebinaram",
  "stan_frontend_razrabotchikom",
  "udelyaem_vremya_kazhdomu_studentu",
];

export const getSaintCodeHtml = (block: HTMLElement) => {
  const { clientWidth } = block;
  const size = clientWidth > 970 ? 970 : clientWidth > 600 ? 728 : 375;
  const bannerName = banners[Math.floor(Math.random() * banners.length)];
  const baseUrl = "https://ymatuhin.ru/ads/saint-code";
  const imageUrl = `${baseUrl}/${bannerName}_${size}.svg`;
  const linkUrl = `https://saintcode.ru?utm_source=${location.hostname}&utm_medium=banner&utm_campaign=summer_promo_2022&utm_content=${bannerName}&utm_term=ymatuhin&utm_banner_width=${size}`;

  // location
  return `SAINT-CODE
    <a href="${linkUrl}" target="_blank" style="display:block">
      <img src="${imageUrl}" width="${size}" height="90" alt="SaintCode Bootcamp" style="max-width:100%;height:auto;max-height: 150px">
    </a>
  `;
};
