import { getYandexHtml } from "./yandex";
import { getGoogleHtml } from "./google";
import { getSaintCodeHtml } from "./saintcode";

export type System = {
  hosts?: string[];
  getHtml: Function;
};

export const systems: Record<string, System> = {
  saintCode: {
    getHtml: getSaintCodeHtml,
  },
  google: {
    getHtml: getGoogleHtml,
  },
  yandex: {
    hosts: [],
    getHtml: getYandexHtml,
  },
};
