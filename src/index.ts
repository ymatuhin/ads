import type { System } from "./systems";
import { systems } from "./systems";

init();

function init() {
  const blocks = document.querySelectorAll("[data-ads]");
  const blocksArr = Array.from(blocks) as HTMLElement[];

  blocksArr.forEach((block: HTMLElement, index: number) => {
    handleAdsBlock(block, getSystems(index));
  });
}

function handleAdsBlock(block: HTMLElement, systems: System[]) {
  const [system, ...rest] = systems;
  insertAds(block, system);

  setTimeout(() => {
    const isBlockEmpty = block.clientHeight < 4 || block.clientWidth < 4;
    if (isBlockEmpty && rest.length) handleAdsBlock(block, rest);
  }, 4000);
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
  const id = system.hosts?.[location.hostname];
  block.innerHTML = system.getHtml(block, id);
  system.insertScripts?.(block, id);
}

function getInfo() {
  const localesThatMaybeCanReadRussian = [
    "ru", // Russian
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

  const languages = window.navigator?.languages ?? [navigator.language];
  const canReadRussian = languages.some((lang) => {
    return localesThatMaybeCanReadRussian.includes(lang.slice(0, 2));
  });

  return {
    canBeYandex: location.hostname in (systems.yandex.hosts || {}),
    host: location.hostname,
    pageLang: document.documentElement.lang,
    userLang: navigator.language.slice(0, 2),
    canReadRussian,
  };
}
