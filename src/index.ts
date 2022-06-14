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

function getInfo() {
  const canReadRussian = window.navigator.languages.some((lang) => {
    return lang.includes("ru") || lang.includes("uk") || lang.includes("be");
  });

  return {
    canBeYandex: systems.yandex.hosts?.includes(location.hostname),
    host: location.hostname,
    pageLang: document.documentElement.lang,
    userLang: navigator.language.slice(0, 2),
    canReadRussian,
  };
}
