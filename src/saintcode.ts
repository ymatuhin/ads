const banners: Record<string, [number, number][]> = {
  bistriy_start_dlya_web_razrabotchika: [
    [375, 160],
    [550, 160],
    [728, 125],
    [970, 125],
  ],
  boishsya_hodit_na_sobes: [
    [375, 160],
    [550, 160],
    [728, 125],
    [970, 125],
  ],
  bystro_stat_frontenderom: [
    [375, 160],
    [550, 160],
    [728, 90],
    [970, 90],
  ],
  effektivnye_kursy_po_js: [
    [375, 160],
    [550, 160],
    [728, 125],
    [970, 125],
  ],
  hochesh_vo_frontend: [
    [375, 160],
    [550, 160],
    [728, 125],
    [970, 125],
  ],
  kak_ponyat_frontend: [
    [375, 160],
    [550, 160],
    [728, 125],
    [970, 125],
  ],
  nachni_obuchenie_v_saintcode: [
    [375, 160],
    [550, 160],
    [728, 90],
    [970, 90],
  ],
  ne_online_shkola_a_bootcamp: [
    [375, 160],
    [550, 160],
    [728, 125],
    [970, 125],
  ],
  ne_poluchilos_uchitsya_online: [
    [375, 160],
    [550, 160],
    [728, 125],
    [970, 125],
  ],
  ne_znaesh_s_chego_nachat: [
    [375, 160],
    [550, 160],
    [728, 125],
    [970, 125],
  ],
  online_shkoly_nichemu_ne_nauchili: [
    [375, 160],
    [550, 160],
    [728, 125],
    [970, 125],
  ],
  prihodi_v_saintcode: [
    [375, 160],
    [550, 160],
    [728, 90],
    [970, 90],
  ],
  putaeshsya_v_sintaksise_js: [
    [375, 160],
    [550, 160],
    [728, 90],
    [970, 90],
  ],
  slozhno_uchitsya_po_vebinaram: [
    [375, 160],
    [550, 160],
    [728, 125],
    [970, 125],
  ],
  stan_frontend_razrabotchikom: [
    [375, 160],
    [550, 160],
    [728, 125],
    [970, 125],
  ],
  udelyaem_vremya_kazhdomu_studentu: [
    [375, 160],
    [550, 160],
    [728, 125],
    [970, 125],
  ],
};

export const getSaintCodeHtml = (block: HTMLElement) => {
  const { clientWidth } = block;
  const { linkUrl, imageUrl, width, height } = getBanner(clientWidth);
  const align = block.getAttribute("data-ads-align") ?? "center";
  const margin =
    align === "center" ? "0 auto" : align === "left" ? "0" : "0 0 0 auto";

  // location
  return `<a href="${linkUrl}" target="_blank" style="display:block;all: initial;cursor:pointer;"><img src="${imageUrl}" alt="SaintCode Bootcamp" width="${width}" height="${height}" style="display:block;max-width:100%;height:auto;max-height:160px;margin:${margin}"></a>`;
};

function getBanner(blockWidth: number) {
  const items = Object.keys(banners);
  const bannerName = items[
    Math.floor(Math.random() * items.length)
  ] as keyof typeof banners;
  const [width, height] = findSize(banners[bannerName], blockWidth);
  const baseUrl = "https://ymatuhin.ru/ads/saint-code";
  const imageUrl = `${baseUrl}/${bannerName}_${width}.svg`;
  const linkUrl = `https://saintcode.ru?utm_source=${location.hostname}&utm_medium=banner&utm_campaign=summer_promo_2022&utm_content=${bannerName}&utm_term=ymatuhin&utm_banner_width=${width}`;
  return { linkUrl, imageUrl, width, height };
}

function findSize(sizes: [number, number][], blockWidth: number) {
  // smaller come first
  const sortedByWidth = sizes.sort((a, b) => a[0] - b[0]);
  const max = sortedByWidth[sortedByWidth.length - 1];
  const size = sortedByWidth.find(([width]) => width > blockWidth);
  return (size ?? max) as [number, number];
}
