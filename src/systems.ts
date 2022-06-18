import { getYandexHtml } from "./yandex";
import { getGoogleHtml } from "./google";
import { getSaintCodeHtml } from "./saintcode";

export type System = {
  hosts?: Record<string, string>;
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
    hosts: {
      "lines98.ru": "R-A-267686-1",
      "autoprefixer.github.io": "R-A-268262-1",
    },
    getHtml() {
      const hosts = this.hosts ?? {};
      return getYandexHtml(hosts[location.hostname]);
    },
  },
};
