const banners = [
  "nachni_obuchenie_v_saintcode",
  "prihodi_v_saintcode",
  "stan_frontend_razrabotchikom",
  "effektivnye_kursy_po_js",
  "putaeshsya_v_sintaksise_js",
  "ne_znaesh_s_chego_nachat",
  "boishsya_hodit_na_sobes",
  "hochesh_vo_frontend",
  "bistriy_start_dlya_web_razrabotchika",
  "ne_online_shkola_a_bootcamp",
  "kak_ponyat_frontend",
  "bystro_stat_frontenderom",
  "online_shkoly_nichemu_ne_nauchili",
  "ne_poluchilos_uchitsya_online",
  "udelyaem_vremya_kazhdomu_studentu",
  "slozhno_uchitsya_po_vebinaram",
];

export const getSaintCodeHtml = (block: HTMLElement) => {
  const { clientWidth } = block;
  const size = clientWidth > 970 ? 970 : clientWidth > 600 ? 768 : 375;
  const bannerName = banners[Math.floor(Math.random() * banners.length)];
  const baseUrl = "https://ymatuhin.ru/ads";
  const imageUrl = `${baseUrl}/${bannerName}_${size}.svg`;
  const linkUrl = `https://saintcode.ru?utm_source=${location.hostname}&utm_medium=banner&utm_campaign=summer_promo_2022&utm_content=${bannerName}&utm_term=ymatuhin`;

  // location
  return `SAINT-CODE
    <a href="${linkUrl}" target="_blank" style="display:block">
      <img src="${imageUrl}" width="${size}" height="90" alt="SaintCode Bootcamp" style="max-width:100%;height:auto;max-height: 150px">
    </a>
  `;
};
