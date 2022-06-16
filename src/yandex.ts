export const getYandexHtml = (id: string) => {
  return `<script>window.yaContextCb=window.yaContextCb||[]</script>
    <script src="https://yandex.ru/ads/system/context.js" async></script>
    <div id="yandex_rtb_${id}"></div>
    <script>window.yaContextCb.push(()=>{
      Ya.Context.AdvManager.render({
        renderTo: 'yandex_rtb_${id}',
        blockId: '${id}'
      })
    })</script>`;
};
