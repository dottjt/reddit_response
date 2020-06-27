(function () {
    'use strict';

    var getItems = function (document) {
        var items = document.querySelectorAll('.itemWrapper');
        var reversedItems = __spreadArrays(items).reverse();
        for (var _i = 0, reversedItems_1 = reversedItems; _i < reversedItems_1.length; _i++) {
            var item = reversedItems_1[_i];
            var title = item.querySelector('.title').children[0].innerText;
            var episodeLink = item.querySelector('.coverCol').firstChild.href;
            var idArray = episodeLink.split('-').filter(function (string) { return string.includes('id'); });
            var shareTemplate = function (firstId, secondId) { return ("<iframe src=\"https://castbox.fm/app/castbox/player/" + firstId + "/" + secondId + "?v=8.22.11&autoplay=0&hide_list=1\" frameborder=\"0\" width=\"100%\" height=\"220\"></iframe>"); };
            var shareLink = shareTemplate(idArray[0], idArray[1]);
            console.log(title);
            console.log(episodeLink);
            console.log(shareLink);
        }
    };
    var main = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('START: start script');
            window.addEventListener('load', function () {
                setTimeout(function () {
                    getItems(document);
                }, 1000);
            });
            console.log('END: script complete');
            return [2 /*return*/];
        });
    }); };
    main();

}());
