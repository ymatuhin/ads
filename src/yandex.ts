export const insertYandexScripts = (_: any, id: string) => {
  const newScript = document.createElement("script");
  newScript.src = "https://yandex.ru/ads/system/context.js";
  newScript.async = true;
  document.head.appendChild(newScript);

  const newScript2 = document.createElement("script");
  const inlineScript = document.createTextNode(`
    window.yaContextCb=window.yaContextCb||[];
    window.yaContextCb.push(()=>{
      Ya.Context.AdvManager.render({
        renderTo: 'yandex_rtb_${id}',
        blockId: '${id}'
      })
    })
  `);
  newScript2.appendChild(inlineScript);
  document.head.appendChild(newScript2);
};

export const getYandexHtml = (_: any, id: string) => {
  return `<div id="yandex_rtb_${id}"></div>`;
};
