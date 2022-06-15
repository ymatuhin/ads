export const getYandexHtml = () => {
  return `<script>window.yaContextCb=window.yaContextCb||[]</script>
    <script src="https://yandex.ru/ads/system/context.js" async></script>
    <div id="yandex_rtb_R-A-267686-1"></div>
    <script>window.yaContextCb.push(()=>{
      Ya.Context.AdvManager.render({
        renderTo: 'yandex_rtb_R-A-267686-1',
        blockId: 'R-A-267686-1'
      })
    })</script>`;
};
