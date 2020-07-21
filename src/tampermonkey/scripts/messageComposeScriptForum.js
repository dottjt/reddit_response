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
    var getMessageQueryString = function (searchString) {
        if (searchString.includes('&')) {
            var arrayWithType = searchString.split('&').filter(function (item) { return item.includes('message='); });
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
    var main = function () { return __awaiter(void 0, void 0, void 0, function () {
        var toInput, subjectInput, messageInput, type, timer;
        return __generator(this, function (_a) {
            console.log('START: preparing message');
            toInput = document.querySelector('input[name=recipients]').value;
            subjectInput = document.querySelector('input[name=title]').value;
            messageInput = getMessageQueryString(window.location.search);
            type = getTypeQueryString(window.location.search);
            timer = getTimerQueryString(window.location.search);
            console.log('toInput', toInput);
            console.log('subjectInput', subjectInput);
            console.log('messageInput', decodeURI(messageInput).replace(/%2C/, ','));
            console.log('type', type);
            console.log('timer', timer);
            // if (toInput && subjectInput && messageInput && type && timer) {
            //   await randomMessageDelay(timer);
            //   await sendMessage({
            //     toInput, subjectInput, messageInput, type, timer
            //   });
            // }
            // I need to input this.
            // document.querySelector('.redactor_MessageEditor').contentWindow.document.children[0].children[1]
            // TODO
            // if (!timer) {
            //   iFrame?.contentWindow?.document.querySelector('#send')?.addEventListener('click', () => {
            //     main();
            //   });
            // }
            console.log('END: script complete');
            return [2 /*return*/];
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
