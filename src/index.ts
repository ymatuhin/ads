import type { System } from "./systems";
import { systems } from "./systems";

init();

function init() {
  const blocks = document.querySelectorAll("[data-ads]");
  const blocksArr = Array.from(blocks) as HTMLElement[];

  blocksArr.forEach((block: HTMLElement, index: number) => {
    const [primary, secondary] = getSystems(index);
    insertAds(block, primary);
    setTimeout(() => {
      const isBlockEmpty = block.clientHeight < 10 && block.clientWidth < 10;
      if (isBlockEmpty) insertAds(block, secondary);
    }, 8000);
  });
}

function getSystems(index: number) {
  const { canReadRussian, pageLang, canBeYandex } = getInfo();

  const list = [];
  if (canReadRussian && index === 0) list.push(systems.saintCode);
  if ((pageLang === "ru" || pageLang === "be") && canBeYandex) {
    list.push(systems.yandex);
  }
  list.push(systems.google);

  return list;
}

function insertAds(block: HTMLElement, system: System) {
  block.innerHTML = system.getHtml(block);
}

const localesThatMaybeCanReadRussian = [
  "uz", // Uzbek
  "be", // Belarusian
  "ro", // Romanian
  "et", // Estonian
  "lv", // Latvian
  "lt", // Lithuanian
  "hy", // Armenian
  "az", // Azerbaijani
  "ka", // Georgian
];

function getInfo() {
  const languages = window.navigator?.languages ?? [navigator.language];
  const canReadRussian = languages.some((lang) => {
    return localesThatMaybeCanReadRussian.includes(lang);
  });

  return {
    canBeYandex: location.hostname in (systems.yandex.hosts || {}),
    host: location.hostname,
    pageLang: document.documentElement.lang,
    userLang: navigator.language.slice(0, 2),
    canReadRussian,
  };
}
