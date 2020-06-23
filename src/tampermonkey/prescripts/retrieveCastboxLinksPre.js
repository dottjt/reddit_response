// ==UserScript==
// @name         Castbox Retrieve Castbox Links
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://castbox.fm/creator/episodes
// @match        https://castbox.fm/creator/episodes/
// @match        https://castbox.fm/creator/episodes?*
// @require      file:///Users/julius.reade/Code/PER/reddit_response/src/tampermonkey/scripts/retrieveCastboxLinks.js
// @grant        none
// ==/UserScript==

(async function() {
  'use strict';

  const getItems = (document) => {
    var items = document.querySelectorAll('.itemWrapper');
    const reversedItems = [...items].reverse();

    const itemsAdded = [];

    for (var item of reversedItems) {
      var title = item.querySelector('.title').children[0].innerText;
      var episodeLink = item.querySelector('.coverCol').firstChild.href;
      const idArray = episodeLink.split('-').filter(string => string.includes('id'))
      const shareTemplate = (firstId, secondId) => `<iframe src="https://castbox.fm/app/castbox/player/${firstId}/${secondId}?v=8.22.11&autoplay=0&hide_list=1" frameborder="0" width="100%" height="220"></iframe>`
      const shareLink = shareTemplate(idArray[0], idArray[1]);

      console.log(title);
      console.log(episodeLink);
      console.log(shareLink);

      itemsAdded.push({
        title,
        episodeLink,
        shareLink,
      })
    }
    console.log(itemsAdded);
  }

  console.log('START: start script');

  window.addEventListener('load', (event) => {
    setTimeout(function() {
      console.log('DOM fully loaded and parsed');
      getItems(document);
    }, 1000);
  });

  console.log('END: script complete');
})();
