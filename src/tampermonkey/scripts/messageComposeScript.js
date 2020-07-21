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
    var sendNewMessage = function (dataPayload) { return __awaiter(void 0, void 0, void 0, function () {
        var JSONResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/sendNewMessage', '3333')];
                case 1:
                    JSONResponse = _a.sent();
                    return [2 /*return*/, JSONResponse.data.users];
            }
        });
    }); };

    var closeTabAfterDelay = function (delay, window) { return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var _a;
            console.log("closing tab in " + delay + ".");
            (_a = window.open('https://reddit.com/', '_self')) === null || _a === void 0 ? void 0 : _a.close();
            resolve();
        }, delay);
    }); };
    var randomMessageDelay = function (timer) { return new Promise(function (resolve) {
        var delay = 1000 + Number(timer);
        setTimeout(function () { resolve(); }, delay);
    }); };
    var getTypeQueryString = function (searchString) {
        if (searchString.includes('&')) {
            var arrayWithType = searchString.split('&').filter(function (item) { return item.includes('type='); });
            if (arrayWithType.length === 1) {
                var type = arrayWithType[0].split('=')[1];
                return type;
            }
        }
        return 'reply';
    };
    var getTimerQueryString = function (searchString) {
        if (searchString.includes('&')) {
            var arrayWithTimer = searchString.split('&').filter(function (item) { return item.includes('timer='); });
            if (arrayWithTimer.length === 1) {
                var type = arrayWithTimer[0].split('=')[1];
                return type;
            }
        }
    };

    var UserType;
    (function (UserType) {
        UserType["FreshUser"] = "Fresh User";
        UserType["UserNotRespondedBack"] = "User Not Responded Back";
        UserType["FollowMessageSent"] = "User Follow Message Sent";
        UserType["UserRespondedBack"] = "User Responded Back";
        UserType["UserHostile"] = "Hostile User";
    })(UserType || (UserType = {}));
    var SendMessageType;
    (function (SendMessageType) {
        SendMessageType["StartAdviceStart"] = "start:advice:start";
        SendMessageType["StartAdviceStartAgain"] = "start:advice:startAgain";
        SendMessageType["StartAdviceGeneral"] = "start:advice:general";
        SendMessageType["StartAdviceRelapse"] = "start:advice:relapse";
        SendMessageType["StartAdviceStruggle"] = "start:advice:struggle";
        SendMessageType["StartAdviceAge"] = "start:advice:age";
        SendMessageType["StartAdviceAbstain"] = "start:advice:abstain";
        SendMessageType["StartAdviceFlatline"] = "start:advice:flatline";
        SendMessageType["StartAdviceWetdreamAdvice"] = "start:advice:wetdreamAdvice";
        SendMessageType["StartAdvicePornBlockersAdvice"] = "start:advice:pornBlockersAdvice";
        SendMessageType["StartAdviceIsWatchingPornRelapseAdvice"] = "start:advice:isWatchingPornRelapseAdvice";
        SendMessageType["StartNoReasonToRelapseAdvice"] = "start:advice:noReasonToRelapse";
        SendMessageType["StartAccountabilityPartner"] = "start:accountability:accountabilityPartner";
        // StartStraightToGuide = 'start:advice:straightToGuide',
        SendMessageType["StartPartnerAdvice"] = "start:advice:partner";
        SendMessageType["StartMasturbateWithoutPornAdvice"] = "start:advice:masturbateWithoutPorn";
        SendMessageType["StartBiggestBenefitPostAddictionAdvice"] = "start:advice:biggestBenefitPostAddiction";
        SendMessageType["StartDealingWithUrgesAdvice"] = "start:advice:dealingWithUrges";
        SendMessageType["MiddleGuideIfYouWouldLikeToLearnMore"] = "middle:guide:learnmore";
        SendMessageType["MiddleGuideNoWorries"] = "middle:guide:noworries";
        SendMessageType["MiddleGuideLinkYou"] = "middle:guide:linkyou";
        SendMessageType["MiddleGuideMeditationAdvice"] = "middle:guide:meditationAdvice";
        SendMessageType["FinalHardTime"] = "final:disagree:hardTime";
        SendMessageType["FinalFantastic"] = "final:agree:fantastic";
        SendMessageType["FinalJoinSubreddit"] = "final:join:subreddit";
        SendMessageType["FinalShareResources"] = "final:share:resources";
        SendMessageType["FollowRelapseAdvice"] = "follow:advice:relapse";
        SendMessageType["FollowMeditationAdvice"] = "follow:advice:meditation";
        SendMessageType["FollowStruggleAdvice"] = "follow:advice:struggle";
        SendMessageType["FollowNotSmoothlyAdvice"] = "follow:advice:notSmoothly";
        SendMessageType["UserReplyCustom"] = "user:reply:custom";
        SendMessageType["UserReplyStart"] = "user:reply:start";
        SendMessageType["UserReplyMiddle"] = "user:reply:middle";
        SendMessageType["UserReplyFinal"] = "user:reply:final";
        SendMessageType["UserReplyFollow"] = "user:reply:follow";
        SendMessageType["NFDCustomSend"] = "nfd:custom:send";
        SendMessageType["NA"] = "NA";
    })(SendMessageType || (SendMessageType = {}));
    var MessageType;
    (function (MessageType) {
        MessageType["Historic"] = "Historic";
        MessageType["NonHistoric"] = "NonHistoric";
    })(MessageType || (MessageType = {}));
    var UserForumType;
    (function (UserForumType) {
        UserForumType["NoFap"] = "NoFap";
        UserForumType["Reddit"] = "Reddit";
    })(UserForumType || (UserForumType = {}));

    var iFrame = document.querySelector('iframe');
    var sendMessage = function (_a) {
        var toInput = _a.toInput, subjectInput = _a.subjectInput, messageInput = _a.messageInput, type = _a.type, timer = _a.timer;
        return __awaiter(void 0, void 0, void 0, function () {
            var dataPayload, messageInputAgain;
            var _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        console.log(toInput, subjectInput, messageInput, type, timer);
                        if (!(toInput && subjectInput && messageInput && type)) return [3 /*break*/, 5];
                        ((_b = iFrame === null || iFrame === void 0 ? void 0 : iFrame.contentWindow) === null || _b === void 0 ? void 0 : _b.document.querySelector('#send')).click();
                        dataPayload = {
                            username_sending: 'NeverFapDeluxe',
                            username_receiving: toInput,
                            subject: subjectInput,
                            message: messageInput,
                            send_date: new Date().toString(),
                            forum_type: UserForumType.Reddit,
                            type: type
                        };
                        return [4 /*yield*/, sendNewMessage(dataPayload)];
                    case 1:
                        _g.sent();
                        console.log('message sent to server');
                        return [4 /*yield*/, randomMessageDelay('1')];
                    case 2:
                        _g.sent();
                        messageInputAgain = ((_d = (_c = iFrame === null || iFrame === void 0 ? void 0 : iFrame.contentWindow) === null || _c === void 0 ? void 0 : _c.document) === null || _d === void 0 ? void 0 : _d.querySelectorAll('textarea[name=text]')[1]).value;
                        if (!(messageInputAgain === '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, closeTabAfterDelay(3000, window)];
                    case 3:
                        _g.sent();
                        _g.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        console.log('some fields empty - set click event listener');
                        (_f = (_e = iFrame === null || iFrame === void 0 ? void 0 : iFrame.contentWindow) === null || _e === void 0 ? void 0 : _e.document.querySelector('#send')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
                            main();
                        });
                        _g.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    var main = function () { return __awaiter(void 0, void 0, void 0, function () {
        var toInput, subjectInput, messageInput, type, timer;
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    console.log('START: preparing message');
                    toInput = ((_b = (_a = iFrame === null || iFrame === void 0 ? void 0 : iFrame.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.querySelector('input[name=to]')).value;
                    subjectInput = ((_d = (_c = iFrame === null || iFrame === void 0 ? void 0 : iFrame.contentWindow) === null || _c === void 0 ? void 0 : _c.document) === null || _d === void 0 ? void 0 : _d.querySelector('input[name=subject]')).value;
                    messageInput = ((_f = (_e = iFrame === null || iFrame === void 0 ? void 0 : iFrame.contentWindow) === null || _e === void 0 ? void 0 : _e.document) === null || _f === void 0 ? void 0 : _f.querySelectorAll('textarea[name=text]')[1]).value;
                    type = getTypeQueryString(window.location.search);
                    timer = getTimerQueryString(window.location.search);
                    if (!(toInput && subjectInput && messageInput && type && timer)) return [3 /*break*/, 3];
                    return [4 /*yield*/, randomMessageDelay(timer)];
                case 1:
                    _j.sent();
                    return [4 /*yield*/, sendMessage({
                            toInput: toInput, subjectInput: subjectInput, messageInput: messageInput, type: type, timer: timer
                        })];
                case 2:
                    _j.sent();
                    _j.label = 3;
                case 3:
                    if (!timer) {
                        (_h = (_g = iFrame === null || iFrame === void 0 ? void 0 : iFrame.contentWindow) === null || _g === void 0 ? void 0 : _g.document.querySelector('#send')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', function () {
                            main();
                        });
                    }
                    console.log('END: script complete');
                    return [2 /*return*/];
            }
        });
    }); };
    if (iFrame && !window.location.search.includes('embedded')) {
        iFrame.addEventListener("load", function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    setTimeout(function () {
                        main(); //
                    }, 1500);
                    return [2 /*return*/];
                });
            });
        });
    }

}());
