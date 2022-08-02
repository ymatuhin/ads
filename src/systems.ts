import { getGoogleHtml, insertGoogleScripts } from "./google";
import { getSaintCodeHtml } from "./saintcode";
import { getYandexHtml, insertYandexScripts } from "./yandex";

export type System = {
  getHtml: Function;
  hosts?: Record<string, string>;
  insertScripts?: Function;
};

export const systems: Record<string, System> = {
  saintCode: {
    getHtml: getSaintCodeHtml,
  },
  google: {
    getHtml: getGoogleHtml,
    insertScripts: insertGoogleScripts,
  },
  yandex: {
    hosts: {
      "lines98.ru": "R-A-267686-1",
      "autoprefixer.github.io": "R-A-268262-1",
    },
    insertScripts: insertYandexScripts,
    getHtml: getYandexHtml,
  },
};
