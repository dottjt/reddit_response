(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var HTTPPOSToptions = function (data) { return ({
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ data: data }) // body data type must match "Content-Type" header
    }); };
    var sendPostRequest = function (dataPayload, urlEndpoint, port) { return __awaiter(void 0, void 0, void 0, function () {
        var response, JSONResponse, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:" + port + urlEndpoint, HTTPPOSToptions(dataPayload))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    JSONResponse = _a.sent();
                    return [2 /*return*/, JSONResponse];
                case 3:
                    error_1 = _a.sent();
                    console.log('Server not started.');
                    throw new Error(urlEndpoint + " - " + error_1);
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateCastboxLinks = function (dataPayload) { return __awaiter(void 0, void 0, void 0, function () {
        var JSONResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/updateCastboxLinks', '3232')];
                case 1:
                    JSONResponse = _a.sent();
                    return [2 /*return*/, JSONResponse.data.isRunning];
            }
        });
    }); };

    var getItems = function (document) { return __awaiter(void 0, void 0, void 0, function () {
        var items, reversedItems, itemsAdded, _i, reversedItems_1, item, title, episodeLink, idArray, shareTemplate, shareLink;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    items = document.querySelectorAll('.itemWrapper');
                    reversedItems = __spreadArrays(items).reverse();
                    itemsAdded = [];
                    for (_i = 0, reversedItems_1 = reversedItems; _i < reversedItems_1.length; _i++) {
                        item = reversedItems_1[_i];
                        title = item.querySelector('.title').children[0].innerText;
                        episodeLink = item.querySelector('.coverCol').firstChild.href;
                        idArray = episodeLink.split('-').filter(function (string) { return string.includes('id'); });
                        shareTemplate = function (firstId, secondId) { return ("<iframe src=\"https://castbox.fm/app/castbox/player/" + firstId + "/" + secondId + "?v=8.22.11&autoplay=0&hide_list=1\" frameborder=\"0\" width=\"100%\" height=\"220\"></iframe>"); };
                        shareLink = shareTemplate(idArray[0], idArray[1]);
                        console.log(title);
                        console.log(episodeLink);
                        console.log(shareLink);
                        itemsAdded.push({
                            title: title,
                            episodeLink: episodeLink,
                            shareLink: shareLink,
                        });
                    }
                    return [4 /*yield*/, updateCastboxLinks({ castboxLinks: itemsAdded })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var main = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('START: start script');
            window.addEventListener('load', function () {
                setTimeout(function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getItems(document)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                }, 1000);
            });
            console.log('END: script complete');
            return [2 /*return*/];
        });
    }); };
    main();

}());
