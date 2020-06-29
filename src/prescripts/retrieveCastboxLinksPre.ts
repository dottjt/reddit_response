'use strict';

const getItems = (document: Document) => {
  const items = document.querySelectorAll('.itemWrapper');
  const reversedItems = [...items as any].reverse();

  for (const item of reversedItems) {
    const title = item.querySelector('.title').children[0].innerText;
    const episodeLink = item.querySelector('.coverCol').firstChild.href;
    const idArray = episodeLink.split('-').filter(string => string.includes('id'))
    const shareTemplate = (firstId, secondId) => (
      `<iframe src="https://castbox.fm/app/castbox/player/${firstId}/${secondId}?v=8.22.11&autoplay=0&hide_list=1" frameborder="0" width="100%" height="220"></iframe>`
    );
    const shareLink = shareTemplate(idArray[0], idArray[1]);

    console.log(title);
    console.log(episodeLink);
    console.log(shareLink);
  }
}

const main = async () => {
  console.log('START: start script');

  window.addEventListener('load', () => {
    setTimeout(function() {
      getItems(document);
    }, 1000);
  });

  console.log('END: script complete');
}

main();
