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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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
        SendMessageType["StartDidIJustRelapseAdvice"] = "start:advice:didIJustRelapseAdvice";
        SendMessageType["StartWhenDoesItGetEasierAdvice"] = "start:advice:whenDoesItGetEasierAdvice";
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

    // <content>Hey, I saw your post on r/NoFap. I&apos;m sorry to hear you relapsed. How are you currently coping? Were you meditating daily in order to help deal with your feelings and emotions?
    var middleWrittenGuide = ("If you'd like to learn more the homepage should cover 90% of how NeverFap Deluxe works and is an excellent preface to the guide, which is also a lot more in-depth. A lot of people also find the NeverFap Deluxe Podcast useful as well. It goes into meditation, healthy coping mechanisms and the basics of recovery.\n\nhttps://neverfapdeluxe.com/\n\nAlso happy to have you join the #accountability program on Discord once you've become familiar with the material. Our bot tracks your days and progress.\n\nhttps://discord.gg/TuwARWk\n");
    var middleGuideNoWorries = ("No worries! The homepage should cover 90% of how NeverFap Deluxe works and is an excellent preface to the guide, which is also a lot more in-depth. A lot of people also find the NeverFap Deluxe Podcast useful as well. It goes into meditation, healthy coping mechanisms and the basics of recovery.\n\nhttps://neverfapdeluxe.com/\n\nAlso happy to have you join the #accountability program on Discord once you've become familiar with the material. Our bot tracks your days and progress.\n\nhttps://discord.gg/TuwARWk\n");
    var middleGuideLinkYou = ("I'll link you! The homepage should cover 90% of how NeverFap Deluxe works and is an excellent preface to the guide, which is also a lot more in-depth. A lot of people also find the NeverFap Deluxe Podcast useful as well. It goes into meditation, healthy coping mechanisms and the basics of recovery.\n\nhttps://neverfapdeluxe.com/\n\nAlso happy to have you join the #accountability program on Discord once you've become familiar with the material. Our bot tracks your days and progress.\n\nhttps://discord.gg/TuwARWk\n");
    var middleGuideMeditationAdvice = ("Ultimately meditation is about learning to become aware of your senses. So for example, sitting there and noticing your emotions and physical sensations, as well as observing your surroundings in a non-judgemental way.\n\nThis article explains the basics of it:\n\nhttps://neverfapdeluxe.com/practices/observe-your-senses\n\nFeel free to ask if you have any questions! I'm more than happy to help!\n\nThe homepage on the other hand should cover 90% of how NeverFap Deluxe works and is an excellent preface to the guide, which is also a lot more in-depth. A lot of people also find the NeverFap Deluxe Podcast useful as well. It goes into meditation, healthy coping mechanisms and the basics of recovery.\n\nhttps://neverfapdeluxe.com/\n\nAlso happy to have you join the #accountability program on Discord once you've become familiar with the material. Our bot tracks your days and progress.\n\nhttps://discord.gg/TuwARWk\n");

    var finalJoinSubreddit = ("No worries! I also have a subreddit if you're interested in joining the community and following up on updates to NeverFap Deluxe! r/NeverFapDeluxe");
    var finalFantastic = ("That's fantastic to hear! It sounds like you're on the right track.\n\nI also have a subreddit if you're interested in joining the community and following up on updates to NeverFap Deluxe! r/NeverFapDeluxe\n");
    var finalShareResources = ("Thank you! Feel free to share these resources if you find them useful :D");
    var finalHardTime = ("Yeah, you might have a hard time addressing your addiction without maintaining a consistent mental health routine. Especially given addiction is a mental health problem at it's core.\n\nUltimately the important thing is being consistent with your mental health. Usually this means at least 10 minutes meditation each day. So if you can commit to that you'll be fine.\n\nI also have a subreddit if you're interested in joining the community and following up on updates to NeverFap Deluxe! r/NeverFapDeluxe\n");

    var toNotRespond = function (messagePayload) {
        return new RegExp(/no (thank|sorry)/i).test(messagePayload.message)
            || new RegExp(/(I'm|I’m|I am|im) not interest/i).test(messagePayload.message)
            || new RegExp(/I was interest/i).test(messagePayload.message)
            || new RegExp(/not going to read/i).test(messagePayload.message)
            || new RegExp(/fuck off/i).test(messagePayload.message)
            || new RegExp(/not interested/i).test(messagePayload.message)
            || new RegExp(/No I (don’t|dont|don't) meditate/i).test(messagePayload.message);
    };

    var toMeditateGuide = function (messagePayload) {
        return new RegExp(/would love to (mediate|meditate)/i).test(messagePayload.message)
            || new RegExp(/(don't|dont|don’t) know (how|where) to start/i).test(messagePayload.message)
            || new RegExp(/tips on meditating\?/i).test(messagePayload.message)
            || new RegExp(/I (don’t|dont|don't) know how to (do meditation|meditate). Can you please suggest something/i).test(messagePayload.message)
            || new RegExp(/^How do (u|you) meditate?$/i).test(messagePayload.message);
    };

    var toHardTime = function (messagePayload) {
        return new RegExp(/I (don’t|dont|don't) ?(really)? do (anything|much|a whole lot|a lot) for my mental health/i).test(messagePayload.message)
            || new RegExp(/do nothing for my mental health/i).test(messagePayload.message)
            || new RegExp(/I (don’t|dont|don't) (meditate|do much)/i).test(messagePayload.message)
            || new RegExp(/I haven't done much/i).test(messagePayload.message)
            || new RegExp(/I just distract myself/i).test(messagePayload.message)
            || new RegExp(/I used to ?(do)? meditation/i).test(messagePayload.message)
            || new RegExp(/I used to ?(do)? meditation/i).test(messagePayload.message);
    };

    var toNoWorriesGuide = function (messagePayload) {
        return new RegExp(/(What's|What’s|please share|share|to see|send|sending me|send me|leave me|give|gimme|give me|provide me|interested in|link|me know|show me|show|link me|have|appreciate|look at|provide|like|let me see|link|drop|post|to explore|dm me) ?(please)? (a|the|that|ur|your|you|for the|to ur|to the|to your|with the) (url|web|website|guide|site|link|address)/i).test(messagePayload.message)
            || new RegExp(/took up/i).test(messagePayload.message)
            // YES
            || new RegExp(/^sure$/i).test(messagePayload.message)
            || new RegExp(/^yes$/i).test(messagePayload.message)
            // || new RegExp(/^yes/i).test(messagePayload.message) // too broad
            || new RegExp(/(Yaa|ya) sure/i).test(messagePayload.message)
            || new RegExp(/yes please/i).test(messagePayload.message)
            || new RegExp(/(im|I'm|i m) in./i).test(messagePayload.message)
            || new RegExp(/(yes|yeah) (for sure|I am)/i).test(messagePayload.message)
            // CHECK
            || new RegExp(/(check|read| get |see|visit|hear about|curious about|know about|look into|share) ?(of)? ?(that|the|about|ur|your|this)? (any|it|site|link|web|guide|content|page)/i).test(messagePayload.message)
            || new RegExp(/(name of|checking out|check|checkout|check out|take a look at) (ur|your|the|that|to the) (article|site|link|web|guide|content|page)/i).test(messagePayload.message)
            || new RegExp(/I’ll check the link if you have it/i).test(messagePayload.message)
            // SEND
            || new RegExp(/(sent|send) me the (site|link|web|guide|content|page)/i).test(messagePayload.message)
            || new RegExp(/pass me your website/i).test(messagePayload.message)
            || new RegExp(/send website link/i).test(messagePayload.message)
            || new RegExp(/send that my way/i).test(messagePayload.message)
            || new RegExp(/send over the link/i).test(messagePayload.message)
            || new RegExp(/(send it|do share)/i).test(messagePayload.message)
            || new RegExp(/go ahead and send/i).test(messagePayload.message)
            || new RegExp(/share ?(me)? the/i).test(messagePayload.message)
            || new RegExp(/give (ur|your) (site|link|web|guide|content|page) a visit/i).test(messagePayload.message)
            || new RegExp(/hit me (up|with)/i).test(messagePayload.message)
            || new RegExp(/please pass on (the|that) website info/i).test(messagePayload.message)
            || new RegExp(/send me your website/i).test(messagePayload.message)
            // PASSIVE ASK
            || new RegExp(/May I know (your|the) website/i).test(messagePayload.message)
            || new RegExp(/could I get a link/i).test(messagePayload.message)
            || new RegExp(/could send the website/i).test(messagePayload.message)
            || new RegExp(/you could share/i).test(messagePayload.message)
            || new RegExp(/could you please direct me to it/i).test(messagePayload.message)
            || new RegExp(/Feel free to link (that|your|the) website/i).test(messagePayload.message)
            || new RegExp(/feel free to share it/i).test(messagePayload.message)
            || new RegExp(/(can|could) you ?(please)? link/i).test(messagePayload.message)
            || new RegExp(/comfortable with sharing it/i).test(messagePayload.message)
            || new RegExp(/if you sent ?(me)? the (site|link|web|guide|content|page)/i).test(messagePayload.message)
            // INTERESTED
            || new RegExp(/(I'm|I’m|I am|iam|im|I'd be) ?(certainly|really|super)? (interested|intrested|interessted|interesting)/i).test(messagePayload.message)
            || new RegExp(/(definetly|definitely|totally|I am|I'm|I’m|im|I'd|id) ?(be)? (interested|intrested)/i).test(messagePayload.message)
            || new RegExp(/(interested|intrested|interesting) (about|to know about|with|in|in viewing|in seeing) (ur|your|the) (site|link|web|guide|content|page)/i).test(messagePayload.message)
            || new RegExp(/website sounds .* interesting/i).test(messagePayload.message)
            || new RegExp(/i would be interested/i).test(messagePayload.message)
            || new RegExp(/the website (sound|sounds) interesting/i).test(messagePayload.message)
            || new RegExp(/like to here about your/i).test(messagePayload.message)
            || new RegExp(/shoot me the link/i).test(messagePayload.message)
            || new RegExp(/Yea absolutely that'd be interesting/i).test(messagePayload.message)
            || new RegExp(/interested./i).test(messagePayload.message)
            || new RegExp(/(Sure I am|Yeah sure|Sure Bro)/i).test(messagePayload.message)
            || new RegExp(/to know more about your website/i).test(messagePayload.message)
            || new RegExp(/nice if you linked the website/i).test(messagePayload.message)
            || new RegExp(/wanna visit (ur|your) site/i).test(messagePayload.message)
            || new RegExp(/tell me more/i).test(messagePayload.message)
            || new RegExp(/like to look around at your site/i).test(messagePayload.message)
            || new RegExp(/interested in seeing your website/i).test(messagePayload.message)
            || new RegExp(/actually really interested in your website/i).test(messagePayload.message)
            || new RegExp(/I’d like to try any resources you’re willing to share/i).test(messagePayload.message)
            // GRATEFUL
            || new RegExp(/the website would be quite helpful/i).test(messagePayload.message)
            || new RegExp(/glad to (have|take) a look/i).test(messagePayload.message)
            || new RegExp(/That would be very welcome/i).test(messagePayload.message)
            || new RegExp(/would like to see what the website is/i).test(messagePayload.message)
            || new RegExp(/that website would be nice/i).test(messagePayload.message)
            || new RegExp(/yes that would be helpful/i).test(messagePayload.message)
            || new RegExp(/that would be really helpful/i).test(messagePayload.message)
            || new RegExp(/appreciate viewing your website/i).test(messagePayload.message)
            || new RegExp(/the (website|link) would be cool/i).test(messagePayload.message)
            || new RegExp(/will have a look on your website/i).test(messagePayload.message)
            || new RegExp(/I would really (appreaciate|appreciate) that/i).test(messagePayload.message)
            || new RegExp(/(it|that|link) would be (super|awesome|great|cool)/i).test(messagePayload.message)
            || new RegExp(/happy to check out the (url|web|website|guide|site|link|address|resource)/i).test(messagePayload.message)
            // LOVE
            || new RegExp(/(id|I'd) love/i).test(messagePayload.message)
            || new RegExp(/love to (see|know) (the|your) website/i).test(messagePayload.message)
            || new RegExp(/I would love to learn more about it/i).test(messagePayload.message)
            || new RegExp(/would love to visit/i).test(messagePayload.message)
            || new RegExp(/love to see the website/i).test(messagePayload.message)
            || new RegExp(/would love that website/i).test(messagePayload.message)
            || new RegExp(/website sounds like a huge help/i).test(messagePayload.message)
            || new RegExp(/Would love to see/i).test(messagePayload.message)
            || new RegExp(/take a look at your website/i).test(messagePayload.message)
            || new RegExp(/like to see (it|that)/i).test(messagePayload.message)
            // NEUTRAL
            || new RegExp(/(yah|ya|yeah) why not/i).test(messagePayload.message)
            // NAME
            || new RegExp(/name of (ur|your|the) (site|link|web|guide|content|page)/i).test(messagePayload.message)
            || new RegExp(/how is your website called/i).test(messagePayload.message)
            || new RegExp(/Whats is the website called/i).test(messagePayload.message)
            || new RegExp(/url for this (site|link|web|guide|content|page)/i).test(messagePayload.message)
            // CHECK
            || new RegExp(/check on your website/i).test(messagePayload.message)
            // LINK ME
            || new RegExp(/link ?(me)? to ur (site|link|web|guide|content|page)/i).test(messagePayload.message)
            || new RegExp(/I'll take the link/i).test(messagePayload.message)
            // UNSORTED
            || new RegExp(/Sure, I am looking for source material/i).test(messagePayload.message);
    };

    var toLinkYouGuide = function (messagePayload) {
        return new RegExp(/(what's|What’s|what is|whats) the (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
            || new RegExp(/name of (ur|your) website/i).test(messagePayload.message)
            || new RegExp(/(what is|whats|what's|called) (ur|your|the) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
            || new RegExp(/Tell me ?(about|the name of)? ?(ur|your|the)? (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
            || new RegExp(/What site have you/i).test(messagePayload.message)
            || new RegExp(/Where can I find this resource/i).test(messagePayload.message)
            || new RegExp(/what is this website\?/i).test(messagePayload.message)
            || new RegExp(/where can i find the website/i).test(messagePayload.message)
            || new RegExp(/links to any resources/i).test(messagePayload.message)
            || new RegExp(/What website is it/i).test(messagePayload.message)
            || new RegExp(/what website would that be/i).test(messagePayload.message);
    };

    var toJoinSubreddit = function (messagePayload) {
        return new RegExp(/(ty|thank you|thanks|thankyou|thank u)/i).test(messagePayload.message)
            || new RegExp(/(I'll||I’ll|ill|I will) ?(.*) (check|checkout|check it|check out)/i).test(messagePayload.message)
            || new RegExp(/will visit/i).test(messagePayload.message)
            || new RegExp(/visit ?(.*) today/i).test(messagePayload.message)
            || new RegExp(/(wow|cheers)/i).test(messagePayload.message)
            || new RegExp(/I ?(genuinely)? appreciate/i).test(messagePayload.message)
            || new RegExp(/for sharing/i).test(messagePayload.message)
            || new RegExp(/thanks for/i).test(messagePayload.message)
            || new RegExp(/thanks (man|bro)/i).test(messagePayload.message)
            || new RegExp(/great resource/i).test(messagePayload.message);
    };

    var toInboxFilter = function (messagePayload, moreThanOneMessage) {
        var compiledUser = messagePayload.compiledUser;
        var lastSentMessage = compiledUser.lastSentMessage;
        var lastReceivedMessage = compiledUser.lastReceivedMessage;
        // EDGE
        // Are you a bot?
        if (compiledUser.userType === UserType.UserHostile
            || new RegExp(/(paid|free)/i).test(messagePayload.message)
            || toNotRespond(messagePayload)) {
            return {
                messageText: undefined,
                messageType: undefined,
            };
        }
        if ((lastSentMessage === null || lastSentMessage === void 0 ? void 0 : lastSentMessage.type.includes('advice')) &&
            ((lastSentMessage === null || lastSentMessage === void 0 ? void 0 : lastSentMessage.type.includes('start')) || (lastSentMessage === null || lastSentMessage === void 0 ? void 0 : lastSentMessage.type.includes('follow'))) &&
            ((lastReceivedMessage === null || lastReceivedMessage === void 0 ? void 0 : lastReceivedMessage.type.includes('start')) || (lastReceivedMessage === null || lastReceivedMessage === void 0 ? void 0 : lastReceivedMessage.type.includes('follow')))) {
            // No Worries
            if (toNoWorriesGuide(messagePayload)) {
                return {
                    messageText: middleGuideNoWorries,
                    messageType: SendMessageType.MiddleGuideNoWorries,
                };
            }
            // Link You
            if (toLinkYouGuide(messagePayload)) {
                return {
                    messageText: middleGuideLinkYou,
                    messageType: SendMessageType.MiddleGuideLinkYou,
                };
            }
            // Meditation
            if (toMeditateGuide(messagePayload)) {
                return {
                    messageText: middleGuideMeditationAdvice,
                    messageType: SendMessageType.MiddleGuideMeditationAdvice,
                };
            }
            // That's fantastic
            // so if all else fails and they don't want the link, BUT they say they meditate then I can throw them a That's fantastic link.
            // I will have to careful check that it DOES NOT contain certain things.
            // if (
            //   new RegExp(//i).test(messagePayload.message)
            //   || new RegExp(//i).test(messagePayload.message) // will need to actually test this.
            // ) {
            //   return {
            //     messageText: finalFantastic,
            //     messageType: SendMessageType.FinalFantastic,
            //   }
            // }
            if (toHardTime(messagePayload)) {
                return {
                    messageText: finalHardTime,
                    messageType: SendMessageType.FinalHardTime,
                };
            }
        }
        if (!moreThanOneMessage && (lastReceivedMessage === null || lastReceivedMessage === void 0 ? void 0 : lastReceivedMessage.type.includes('middle')) && (lastSentMessage === null || lastSentMessage === void 0 ? void 0 : lastSentMessage.type.includes('middle'))) {
            // Join Subreddit
            if (toJoinSubreddit(messagePayload)) {
                return {
                    messageText: finalJoinSubreddit,
                    messageType: SendMessageType.FinalJoinSubreddit,
                };
            }
        }
        return {
            messageText: undefined,
            messageType: undefined,
        };
    };

    var isArray = Array.isArray;
    function isStringOrNumber(o) {
        var type = typeof o;
        return type === 'string' || type === 'number';
    }
    function isNullOrUndef(o) {
        return o === void 0 || o === null;
    }
    function isInvalid(o) {
        return o === null || o === false || o === true || o === void 0;
    }
    function isFunction(o) {
        return typeof o === 'function';
    }
    function isString(o) {
        return typeof o === 'string';
    }
    function isNumber(o) {
        return typeof o === 'number';
    }
    function isNull(o) {
        return o === null;
    }
    function isUndefined(o) {
        return o === void 0;
    }
    function combineFrom(first, second) {
        var out = {};
        if (first) {
            for (var key in first) {
                out[key] = first[key];
            }
        }
        if (second) {
            for (var key$1 in second) {
                out[key$1] = second[key$1];
            }
        }
        return out;
    }
    // object.event should always be function, otherwise its badly created object.
    function isLinkEventObject(o) {
        return !isNull(o) && typeof o === 'object';
    }

    // We need EMPTY_OBJ defined in one place.
    // Its used for comparison so we cant inline it into shared
    var EMPTY_OBJ = {};
    function normalizeEventName(name) {
        return name.substr(2).toLowerCase();
    }
    function appendChild(parentDOM, dom) {
        parentDOM.appendChild(dom);
    }
    function insertOrAppend(parentDOM, newNode, nextNode) {
        if (isNull(nextNode)) {
            appendChild(parentDOM, newNode);
        }
        else {
            parentDOM.insertBefore(newNode, nextNode);
        }
    }
    function documentCreateElement(tag, isSVG) {
        if (isSVG) {
            return document.createElementNS('http://www.w3.org/2000/svg', tag);
        }
        return document.createElement(tag);
    }
    function replaceChild(parentDOM, newDom, lastDom) {
        parentDOM.replaceChild(newDom, lastDom);
    }
    function removeChild(parentDOM, childNode) {
        parentDOM.removeChild(childNode);
    }
    function callAll(arrayFn) {
        for (var i = 0; i < arrayFn.length; i++) {
            arrayFn[i]();
        }
    }
    function findChildVNode(vNode, startEdge, flags) {
        var children = vNode.children;
        if (flags & 4 /* ComponentClass */) {
            return children.$LI;
        }
        if (flags & 8192 /* Fragment */) {
            return vNode.childFlags === 2 /* HasVNodeChildren */ ? children : children[startEdge ? 0 : children.length - 1];
        }
        return children;
    }
    function findDOMfromVNode(vNode, startEdge) {
        var flags;
        while (vNode) {
            flags = vNode.flags;
            if (flags & 2033 /* DOMRef */) {
                return vNode.dom;
            }
            vNode = findChildVNode(vNode, startEdge, flags);
        }
        return null;
    }
    function removeVNodeDOM(vNode, parentDOM) {
        do {
            var flags = vNode.flags;
            if (flags & 2033 /* DOMRef */) {
                removeChild(parentDOM, vNode.dom);
                return;
            }
            var children = vNode.children;
            if (flags & 4 /* ComponentClass */) {
                vNode = children.$LI;
            }
            if (flags & 8 /* ComponentFunction */) {
                vNode = children;
            }
            if (flags & 8192 /* Fragment */) {
                if (vNode.childFlags === 2 /* HasVNodeChildren */) {
                    vNode = children;
                }
                else {
                    for (var i = 0, len = children.length; i < len; ++i) {
                        removeVNodeDOM(children[i], parentDOM);
                    }
                    return;
                }
            }
        } while (vNode);
    }
    function moveVNodeDOM(vNode, parentDOM, nextNode) {
        do {
            var flags = vNode.flags;
            if (flags & 2033 /* DOMRef */) {
                insertOrAppend(parentDOM, vNode.dom, nextNode);
                return;
            }
            var children = vNode.children;
            if (flags & 4 /* ComponentClass */) {
                vNode = children.$LI;
            }
            if (flags & 8 /* ComponentFunction */) {
                vNode = children;
            }
            if (flags & 8192 /* Fragment */) {
                if (vNode.childFlags === 2 /* HasVNodeChildren */) {
                    vNode = children;
                }
                else {
                    for (var i = 0, len = children.length; i < len; ++i) {
                        moveVNodeDOM(children[i], parentDOM, nextNode);
                    }
                    return;
                }
            }
        } while (vNode);
    }
    function createDerivedState(instance, nextProps, state) {
        if (instance.constructor.getDerivedStateFromProps) {
            return combineFrom(state, instance.constructor.getDerivedStateFromProps(nextProps, state));
        }
        return state;
    }
    var renderCheck = {
        v: false
    };
    var options = {
        componentComparator: null,
        createVNode: null,
        renderComplete: null
    };
    function setTextContent(dom, children) {
        dom.textContent = children;
    }
    // Calling this function assumes, nextValue is linkEvent
    function isLastValueSameLinkEvent(lastValue, nextValue) {
        return (isLinkEventObject(lastValue) &&
            lastValue.event === nextValue.event &&
            lastValue.data === nextValue.data);
    }
    function mergeUnsetProperties(to, from) {
        for (var propName in from) {
            if (isUndefined(to[propName])) {
                to[propName] = from[propName];
            }
        }
        return to;
    }
    function safeCall1(method, arg1) {
        return !!isFunction(method) && (method(arg1), true);
    }

    var keyPrefix = '$';
    function V(childFlags, children, className, flags, key, props, ref, type) {
        this.childFlags = childFlags;
        this.children = children;
        this.className = className;
        this.dom = null;
        this.flags = flags;
        this.key = key === void 0 ? null : key;
        this.props = props === void 0 ? null : props;
        this.ref = ref === void 0 ? null : ref;
        this.type = type;
    }
    function createVNode(flags, type, className, children, childFlags, props, key, ref) {
        var childFlag = childFlags === void 0 ? 1 /* HasInvalidChildren */ : childFlags;
        var vNode = new V(childFlag, children, className, flags, key, props, ref, type);
        if (options.createVNode) {
            options.createVNode(vNode);
        }
        if (childFlag === 0 /* UnknownChildren */) {
            normalizeChildren(vNode, vNode.children);
        }
        return vNode;
    }
    function mergeDefaultHooks(flags, type, ref) {
        if (flags & 4 /* ComponentClass */) {
            return ref;
        }
        var defaultHooks = (flags & 32768 /* ForwardRef */ ? type.render : type).defaultHooks;
        if (isNullOrUndef(defaultHooks)) {
            return ref;
        }
        if (isNullOrUndef(ref)) {
            return defaultHooks;
        }
        return mergeUnsetProperties(ref, defaultHooks);
    }
    function mergeDefaultProps(flags, type, props) {
        // set default props
        var defaultProps = (flags & 32768 /* ForwardRef */ ? type.render : type).defaultProps;
        if (isNullOrUndef(defaultProps)) {
            return props;
        }
        if (isNullOrUndef(props)) {
            return combineFrom(defaultProps, null);
        }
        return mergeUnsetProperties(props, defaultProps);
    }
    function resolveComponentFlags(flags, type) {
        if (flags & 12 /* ComponentKnown */) {
            return flags;
        }
        if (type.prototype && type.prototype.render) {
            return 4 /* ComponentClass */;
        }
        if (type.render) {
            return 32776 /* ForwardRefComponent */;
        }
        return 8 /* ComponentFunction */;
    }
    function createComponentVNode(flags, type, props, key, ref) {
        flags = resolveComponentFlags(flags, type);
        var vNode = new V(1 /* HasInvalidChildren */, null, null, flags, key, mergeDefaultProps(flags, type, props), mergeDefaultHooks(flags, type, ref), type);
        if (options.createVNode) {
            options.createVNode(vNode);
        }
        return vNode;
    }
    function createTextVNode(text, key) {
        return new V(1 /* HasInvalidChildren */, isNullOrUndef(text) || text === true || text === false ? '' : text, null, 16 /* Text */, key, null, null, null);
    }
    function createFragment(children, childFlags, key) {
        var fragment = createVNode(8192 /* Fragment */, 8192 /* Fragment */, null, children, childFlags, null, key, null);
        switch (fragment.childFlags) {
            case 1 /* HasInvalidChildren */:
                fragment.children = createVoidVNode();
                fragment.childFlags = 2 /* HasVNodeChildren */;
                break;
            case 16 /* HasTextChildren */:
                fragment.children = [createTextVNode(children)];
                fragment.childFlags = 4 /* HasNonKeyedChildren */;
                break;
        }
        return fragment;
    }
    /*
     * Fragment is different than normal vNode,
     * because when it needs to be cloned we need to clone its children too
     * But not normalize, because otherwise those possibly get KEY and re-mount
     */
    function cloneFragment(vNodeToClone) {
        var clonedChildren;
        var oldChildren = vNodeToClone.children;
        var childFlags = vNodeToClone.childFlags;
        if (childFlags === 2 /* HasVNodeChildren */) {
            clonedChildren = directClone(oldChildren);
        }
        else if (childFlags & 12 /* MultipleChildren */) {
            clonedChildren = [];
            for (var i = 0, len = oldChildren.length; i < len; ++i) {
                clonedChildren.push(directClone(oldChildren[i]));
            }
        }
        return createFragment(clonedChildren, childFlags, vNodeToClone.key);
    }
    function directClone(vNodeToClone) {
        var flags = vNodeToClone.flags & -16385 /* ClearInUse */;
        var props = vNodeToClone.props;
        if (flags & 14 /* Component */) {
            if (!isNull(props)) {
                var propsToClone = props;
                props = {};
                for (var key in propsToClone) {
                    props[key] = propsToClone[key];
                }
            }
        }
        if ((flags & 8192 /* Fragment */) === 0) {
            return new V(vNodeToClone.childFlags, vNodeToClone.children, vNodeToClone.className, flags, vNodeToClone.key, props, vNodeToClone.ref, vNodeToClone.type);
        }
        return cloneFragment(vNodeToClone);
    }
    function createVoidVNode() {
        return createTextVNode('', null);
    }
    function _normalizeVNodes(nodes, result, index, currentKey) {
        for (var len = nodes.length; index < len; index++) {
            var n = nodes[index];
            if (!isInvalid(n)) {
                var newKey = currentKey + keyPrefix + index;
                if (isArray(n)) {
                    _normalizeVNodes(n, result, 0, newKey);
                }
                else {
                    if (isStringOrNumber(n)) {
                        n = createTextVNode(n, newKey);
                    }
                    else {
                        var oldKey = n.key;
                        var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;
                        if (n.flags & 81920 /* InUseOrNormalized */ || isPrefixedKey) {
                            n = directClone(n);
                        }
                        n.flags |= 65536 /* Normalized */;
                        if (!isPrefixedKey) {
                            if (isNull(oldKey)) {
                                n.key = newKey;
                            }
                            else {
                                n.key = currentKey + oldKey;
                            }
                        }
                        else if (oldKey.substring(0, currentKey.length) !== currentKey) {
                            n.key = currentKey + oldKey;
                        }
                    }
                    result.push(n);
                }
            }
        }
    }
    function normalizeChildren(vNode, children) {
        var newChildren;
        var newChildFlags = 1 /* HasInvalidChildren */;
        // Don't change children to match strict equal (===) true in patching
        if (isInvalid(children)) {
            newChildren = children;
        }
        else if (isStringOrNumber(children)) {
            newChildFlags = 16 /* HasTextChildren */;
            newChildren = children;
        }
        else if (isArray(children)) {
            var len = children.length;
            for (var i = 0; i < len; ++i) {
                var n = children[i];
                if (isInvalid(n) || isArray(n)) {
                    newChildren = newChildren || children.slice(0, i);
                    _normalizeVNodes(children, newChildren, i, '');
                    break;
                }
                else if (isStringOrNumber(n)) {
                    newChildren = newChildren || children.slice(0, i);
                    newChildren.push(createTextVNode(n, keyPrefix + i));
                }
                else {
                    var key = n.key;
                    var needsCloning = (n.flags & 81920 /* InUseOrNormalized */) > 0;
                    var isNullKey = isNull(key);
                    var isPrefixed = isString(key) && key[0] === keyPrefix;
                    if (needsCloning || isNullKey || isPrefixed) {
                        newChildren = newChildren || children.slice(0, i);
                        if (needsCloning || isPrefixed) {
                            n = directClone(n);
                        }
                        if (isNullKey || isPrefixed) {
                            n.key = keyPrefix + i;
                        }
                        newChildren.push(n);
                    }
                    else if (newChildren) {
                        newChildren.push(n);
                    }
                    n.flags |= 65536 /* Normalized */;
                }
            }
            newChildren = newChildren || children;
            if (newChildren.length === 0) {
                newChildFlags = 1 /* HasInvalidChildren */;
            }
            else {
                newChildFlags = 8 /* HasKeyedChildren */;
            }
        }
        else {
            newChildren = children;
            newChildren.flags |= 65536 /* Normalized */;
            if (children.flags & 81920 /* InUseOrNormalized */) {
                newChildren = directClone(children);
            }
            newChildFlags = 2 /* HasVNodeChildren */;
        }
        vNode.children = newChildren;
        vNode.childFlags = newChildFlags;
        return vNode;
    }
    function normalizeRoot(input) {
        if (isInvalid(input) || isStringOrNumber(input)) {
            return createTextVNode(input, null);
        }
        if (isArray(input)) {
            return createFragment(input, 0 /* UnknownChildren */, null);
        }
        return input.flags & 16384 /* InUse */ ? directClone(input) : input;
    }

    var xlinkNS = 'http://www.w3.org/1999/xlink';
    var xmlNS = 'http://www.w3.org/XML/1998/namespace';
    var namespaces = {
        'xlink:actuate': xlinkNS,
        'xlink:arcrole': xlinkNS,
        'xlink:href': xlinkNS,
        'xlink:role': xlinkNS,
        'xlink:show': xlinkNS,
        'xlink:title': xlinkNS,
        'xlink:type': xlinkNS,
        'xml:base': xmlNS,
        'xml:lang': xmlNS,
        'xml:space': xmlNS
    };

    function getDelegatedEventObject(v) {
        return {
            onClick: v,
            onDblClick: v,
            onFocusIn: v,
            onFocusOut: v,
            onKeyDown: v,
            onKeyPress: v,
            onKeyUp: v,
            onMouseDown: v,
            onMouseMove: v,
            onMouseUp: v,
            onTouchEnd: v,
            onTouchMove: v,
            onTouchStart: v
        };
    }
    var attachedEventCounts = getDelegatedEventObject(0);
    var attachedEvents = getDelegatedEventObject(null);
    var syntheticEvents = getDelegatedEventObject(true);
    function updateOrAddSyntheticEvent(name, dom) {
        var eventsObject = dom.$EV;
        if (!eventsObject) {
            eventsObject = dom.$EV = getDelegatedEventObject(null);
        }
        if (!eventsObject[name]) {
            if (++attachedEventCounts[name] === 1) {
                attachedEvents[name] = attachEventToDocument(name);
            }
        }
        return eventsObject;
    }
    function unmountSyntheticEvent(name, dom) {
        var eventsObject = dom.$EV;
        if (eventsObject && eventsObject[name]) {
            if (--attachedEventCounts[name] === 0) {
                document.removeEventListener(normalizeEventName(name), attachedEvents[name]);
                attachedEvents[name] = null;
            }
            eventsObject[name] = null;
        }
    }
    function handleSyntheticEvent(name, lastEvent, nextEvent, dom) {
        if (isFunction(nextEvent)) {
            updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;
        }
        else if (isLinkEventObject(nextEvent)) {
            if (isLastValueSameLinkEvent(lastEvent, nextEvent)) {
                return;
            }
            updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;
        }
        else {
            unmountSyntheticEvent(name, dom);
        }
    }
    // When browsers fully support event.composedPath we could loop it through instead of using parentNode property
    function getTargetNode(event) {
        return isFunction(event.composedPath) ? event.composedPath()[0] : event.target;
    }
    function dispatchEvents(event, isClick, name, eventData) {
        var dom = getTargetNode(event);
        do {
            // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
            // because the event listener is on document.body
            // Don't process clicks on disabled elements
            if (isClick && dom.disabled) {
                return;
            }
            var eventsObject = dom.$EV;
            if (eventsObject) {
                var currentEvent = eventsObject[name];
                if (currentEvent) {
                    // linkEvent object
                    eventData.dom = dom;
                    currentEvent.event ? currentEvent.event(currentEvent.data, event) : currentEvent(event);
                    if (event.cancelBubble) {
                        return;
                    }
                }
            }
            dom = dom.parentNode;
        } while (!isNull(dom));
    }
    function stopPropagation() {
        this.cancelBubble = true;
        if (!this.immediatePropagationStopped) {
            this.stopImmediatePropagation();
        }
    }
    function isDefaultPrevented() {
        return this.defaultPrevented;
    }
    function isPropagationStopped() {
        return this.cancelBubble;
    }
    function extendEventProperties(event) {
        // Event data needs to be object to save reference to currentTarget getter
        var eventData = {
            dom: document
        };
        event.isDefaultPrevented = isDefaultPrevented;
        event.isPropagationStopped = isPropagationStopped;
        event.stopPropagation = stopPropagation;
        Object.defineProperty(event, 'currentTarget', {
            configurable: true,
            get: function get() {
                return eventData.dom;
            }
        });
        return eventData;
    }
    function rootClickEvent(name) {
        return function (event) {
            if (event.button !== 0) {
                // Firefox incorrectly triggers click event for mid/right mouse buttons.
                // This bug has been active for 17 years.
                // https://bugzilla.mozilla.org/show_bug.cgi?id=184051
                event.stopPropagation();
                return;
            }
            dispatchEvents(event, true, name, extendEventProperties(event));
        };
    }
    function rootEvent(name) {
        return function (event) {
            dispatchEvents(event, false, name, extendEventProperties(event));
        };
    }
    function attachEventToDocument(name) {
        var attachedEvent = name === 'onClick' || name === 'onDblClick' ? rootClickEvent(name) : rootEvent(name);
        document.addEventListener(normalizeEventName(name), attachedEvent);
        return attachedEvent;
    }

    function isSameInnerHTML(dom, innerHTML) {
        var tempdom = document.createElement('i');
        tempdom.innerHTML = innerHTML;
        return tempdom.innerHTML === dom.innerHTML;
    }

    function triggerEventListener(props, methodName, e) {
        if (props[methodName]) {
            var listener = props[methodName];
            if (listener.event) {
                listener.event(listener.data, e);
            }
            else {
                listener(e);
            }
        }
        else {
            var nativeListenerName = methodName.toLowerCase();
            if (props[nativeListenerName]) {
                props[nativeListenerName](e);
            }
        }
    }
    function createWrappedFunction(methodName, applyValue) {
        var fnMethod = function (e) {
            var vNode = this.$V;
            // If vNode is gone by the time event fires, no-op
            if (!vNode) {
                return;
            }
            var props = vNode.props || EMPTY_OBJ;
            var dom = vNode.dom;
            if (isString(methodName)) {
                triggerEventListener(props, methodName, e);
            }
            else {
                for (var i = 0; i < methodName.length; ++i) {
                    triggerEventListener(props, methodName[i], e);
                }
            }
            if (isFunction(applyValue)) {
                var newVNode = this.$V;
                var newProps = newVNode.props || EMPTY_OBJ;
                applyValue(newProps, dom, false, newVNode);
            }
        };
        Object.defineProperty(fnMethod, 'wrapped', {
            configurable: false,
            enumerable: false,
            value: true,
            writable: false
        });
        return fnMethod;
    }

    function attachEvent(dom, eventName, handler) {
        var previousKey = "$" + eventName;
        var previousArgs = dom[previousKey];
        if (previousArgs) {
            if (previousArgs[1].wrapped) {
                return;
            }
            dom.removeEventListener(previousArgs[0], previousArgs[1]);
            dom[previousKey] = null;
        }
        if (isFunction(handler)) {
            dom.addEventListener(eventName, handler);
            dom[previousKey] = [eventName, handler];
        }
    }

    function isCheckedType(type) {
        return type === 'checkbox' || type === 'radio';
    }
    var onTextInputChange = createWrappedFunction('onInput', applyValueInput);
    var wrappedOnChange = createWrappedFunction(['onClick', 'onChange'], applyValueInput);
    /* tslint:disable-next-line:no-empty */
    function emptywrapper(event) {
        event.stopPropagation();
    }
    emptywrapper.wrapped = true;
    function inputEvents(dom, nextPropsOrEmpty) {
        if (isCheckedType(nextPropsOrEmpty.type)) {
            attachEvent(dom, 'change', wrappedOnChange);
            attachEvent(dom, 'click', emptywrapper);
        }
        else {
            attachEvent(dom, 'input', onTextInputChange);
        }
    }
    function applyValueInput(nextPropsOrEmpty, dom) {
        var type = nextPropsOrEmpty.type;
        var value = nextPropsOrEmpty.value;
        var checked = nextPropsOrEmpty.checked;
        var multiple = nextPropsOrEmpty.multiple;
        var defaultValue = nextPropsOrEmpty.defaultValue;
        var hasValue = !isNullOrUndef(value);
        if (type && type !== dom.type) {
            dom.setAttribute('type', type);
        }
        if (!isNullOrUndef(multiple) && multiple !== dom.multiple) {
            dom.multiple = multiple;
        }
        if (!isNullOrUndef(defaultValue) && !hasValue) {
            dom.defaultValue = defaultValue + '';
        }
        if (isCheckedType(type)) {
            if (hasValue) {
                dom.value = value;
            }
            if (!isNullOrUndef(checked)) {
                dom.checked = checked;
            }
        }
        else {
            if (hasValue && dom.value !== value) {
                dom.defaultValue = value;
                dom.value = value;
            }
            else if (!isNullOrUndef(checked)) {
                dom.checked = checked;
            }
        }
    }

    function updateChildOptions(vNode, value) {
        if (vNode.type === 'option') {
            updateChildOption(vNode, value);
        }
        else {
            var children = vNode.children;
            var flags = vNode.flags;
            if (flags & 4 /* ComponentClass */) {
                updateChildOptions(children.$LI, value);
            }
            else if (flags & 8 /* ComponentFunction */) {
                updateChildOptions(children, value);
            }
            else if (vNode.childFlags === 2 /* HasVNodeChildren */) {
                updateChildOptions(children, value);
            }
            else if (vNode.childFlags & 12 /* MultipleChildren */) {
                for (var i = 0, len = children.length; i < len; ++i) {
                    updateChildOptions(children[i], value);
                }
            }
        }
    }
    function updateChildOption(vNode, value) {
        var props = vNode.props || EMPTY_OBJ;
        var dom = vNode.dom;
        // we do this as multiple may have changed
        dom.value = props.value;
        if (props.value === value || (isArray(value) && value.indexOf(props.value) !== -1)) {
            dom.selected = true;
        }
        else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
            dom.selected = props.selected || false;
        }
    }
    var onSelectChange = createWrappedFunction('onChange', applyValueSelect);
    function selectEvents(dom) {
        attachEvent(dom, 'change', onSelectChange);
    }
    function applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode) {
        var multiplePropInBoolean = Boolean(nextPropsOrEmpty.multiple);
        if (!isNullOrUndef(nextPropsOrEmpty.multiple) && multiplePropInBoolean !== dom.multiple) {
            dom.multiple = multiplePropInBoolean;
        }
        var index = nextPropsOrEmpty.selectedIndex;
        if (index === -1) {
            dom.selectedIndex = -1;
        }
        var childFlags = vNode.childFlags;
        if (childFlags !== 1 /* HasInvalidChildren */) {
            var value = nextPropsOrEmpty.value;
            if (isNumber(index) && index > -1 && dom.options[index]) {
                value = dom.options[index].value;
            }
            if (mounting && isNullOrUndef(value)) {
                value = nextPropsOrEmpty.defaultValue;
            }
            updateChildOptions(vNode, value);
        }
    }

    var onTextareaInputChange = createWrappedFunction('onInput', applyValueTextArea);
    var wrappedOnChange$1 = createWrappedFunction('onChange');
    function textAreaEvents(dom, nextPropsOrEmpty) {
        attachEvent(dom, 'input', onTextareaInputChange);
        if (nextPropsOrEmpty.onChange) {
            attachEvent(dom, 'change', wrappedOnChange$1);
        }
    }
    function applyValueTextArea(nextPropsOrEmpty, dom, mounting) {
        var value = nextPropsOrEmpty.value;
        var domValue = dom.value;
        if (isNullOrUndef(value)) {
            if (mounting) {
                var defaultValue = nextPropsOrEmpty.defaultValue;
                if (!isNullOrUndef(defaultValue) && defaultValue !== domValue) {
                    dom.defaultValue = defaultValue;
                    dom.value = defaultValue;
                }
            }
        }
        else if (domValue !== value) {
            /* There is value so keep it controlled */
            dom.defaultValue = value;
            dom.value = value;
        }
    }

    /**
     * There is currently no support for switching same input between controlled and nonControlled
     * If that ever becomes a real issue, then re design controlled elements
     * Currently user must choose either controlled or non-controlled and stick with that
     */
    function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
        if (flags & 64 /* InputElement */) {
            applyValueInput(nextPropsOrEmpty, dom);
        }
        else if (flags & 256 /* SelectElement */) {
            applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);
        }
        else if (flags & 128 /* TextareaElement */) {
            applyValueTextArea(nextPropsOrEmpty, dom, mounting);
        }
        if (isControlled) {
            dom.$V = vNode;
        }
    }
    function addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {
        if (flags & 64 /* InputElement */) {
            inputEvents(dom, nextPropsOrEmpty);
        }
        else if (flags & 256 /* SelectElement */) {
            selectEvents(dom);
        }
        else if (flags & 128 /* TextareaElement */) {
            textAreaEvents(dom, nextPropsOrEmpty);
        }
    }
    function isControlledFormElement(nextPropsOrEmpty) {
        return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
    }
    function unmountRef(ref) {
        if (ref) {
            if (!safeCall1(ref, null) && ref.current) {
                ref.current = null;
            }
        }
    }
    function mountRef(ref, value, lifecycle) {
        if (ref && (isFunction(ref) || ref.current !== void 0)) {
            lifecycle.push(function () {
                if (!safeCall1(ref, value) && ref.current !== void 0) {
                    ref.current = value;
                }
            });
        }
    }

    function remove(vNode, parentDOM) {
        unmount(vNode);
        removeVNodeDOM(vNode, parentDOM);
    }
    function unmount(vNode) {
        var flags = vNode.flags;
        var children = vNode.children;
        var ref;
        if (flags & 481 /* Element */) {
            ref = vNode.ref;
            var props = vNode.props;
            unmountRef(ref);
            var childFlags = vNode.childFlags;
            if (!isNull(props)) {
                var keys = Object.keys(props);
                for (var i = 0, len = keys.length; i < len; i++) {
                    var key = keys[i];
                    if (syntheticEvents[key]) {
                        unmountSyntheticEvent(key, vNode.dom);
                    }
                }
            }
            if (childFlags & 12 /* MultipleChildren */) {
                unmountAllChildren(children);
            }
            else if (childFlags === 2 /* HasVNodeChildren */) {
                unmount(children);
            }
        }
        else if (children) {
            if (flags & 4 /* ComponentClass */) {
                if (isFunction(children.componentWillUnmount)) {
                    children.componentWillUnmount();
                }
                unmountRef(vNode.ref);
                children.$UN = true;
                unmount(children.$LI);
            }
            else if (flags & 8 /* ComponentFunction */) {
                ref = vNode.ref;
                if (!isNullOrUndef(ref) && isFunction(ref.onComponentWillUnmount)) {
                    ref.onComponentWillUnmount(findDOMfromVNode(vNode, true), vNode.props || EMPTY_OBJ);
                }
                unmount(children);
            }
            else if (flags & 1024 /* Portal */) {
                remove(children, vNode.ref);
            }
            else if (flags & 8192 /* Fragment */) {
                if (vNode.childFlags & 12 /* MultipleChildren */) {
                    unmountAllChildren(children);
                }
            }
        }
    }
    function unmountAllChildren(children) {
        for (var i = 0, len = children.length; i < len; ++i) {
            unmount(children[i]);
        }
    }
    function clearDOM(dom) {
        // Optimization for clearing dom
        dom.textContent = '';
    }
    function removeAllChildren(dom, vNode, children) {
        unmountAllChildren(children);
        if (vNode.flags & 8192 /* Fragment */) {
            removeVNodeDOM(vNode, dom);
        }
        else {
            clearDOM(dom);
        }
    }

    function wrapLinkEvent(nextValue) {
        // This variable makes sure there is no "this" context in callback
        var ev = nextValue.event;
        return function (e) {
            ev(nextValue.data, e);
        };
    }
    function patchEvent(name, lastValue, nextValue, dom) {
        if (isLinkEventObject(nextValue)) {
            if (isLastValueSameLinkEvent(lastValue, nextValue)) {
                return;
            }
            nextValue = wrapLinkEvent(nextValue);
        }
        attachEvent(dom, normalizeEventName(name), nextValue);
    }
    // We are assuming here that we come from patchProp routine
    // -nextAttrValue cannot be null or undefined
    function patchStyle(lastAttrValue, nextAttrValue, dom) {
        if (isNullOrUndef(nextAttrValue)) {
            dom.removeAttribute('style');
            return;
        }
        var domStyle = dom.style;
        var style;
        var value;
        if (isString(nextAttrValue)) {
            domStyle.cssText = nextAttrValue;
            return;
        }
        if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
            for (style in nextAttrValue) {
                // do not add a hasOwnProperty check here, it affects performance
                value = nextAttrValue[style];
                if (value !== lastAttrValue[style]) {
                    domStyle.setProperty(style, value);
                }
            }
            for (style in lastAttrValue) {
                if (isNullOrUndef(nextAttrValue[style])) {
                    domStyle.removeProperty(style);
                }
            }
        }
        else {
            for (style in nextAttrValue) {
                value = nextAttrValue[style];
                domStyle.setProperty(style, value);
            }
        }
    }
    function patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom) {
        var lastHtml = (lastValue && lastValue.__html) || '';
        var nextHtml = (nextValue && nextValue.__html) || '';
        if (lastHtml !== nextHtml) {
            if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
                if (!isNull(lastVNode)) {
                    if (lastVNode.childFlags & 12 /* MultipleChildren */) {
                        unmountAllChildren(lastVNode.children);
                    }
                    else if (lastVNode.childFlags === 2 /* HasVNodeChildren */) {
                        unmount(lastVNode.children);
                    }
                    lastVNode.children = null;
                    lastVNode.childFlags = 1 /* HasInvalidChildren */;
                }
                dom.innerHTML = nextHtml;
            }
        }
    }
    function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode) {
        switch (prop) {
            case 'children':
            case 'childrenType':
            case 'className':
            case 'defaultValue':
            case 'key':
            case 'multiple':
            case 'ref':
            case 'selectedIndex':
                break;
            case 'autoFocus':
                dom.autofocus = !!nextValue;
                break;
            case 'allowfullscreen':
            case 'autoplay':
            case 'capture':
            case 'checked':
            case 'controls':
            case 'default':
            case 'disabled':
            case 'hidden':
            case 'indeterminate':
            case 'loop':
            case 'muted':
            case 'novalidate':
            case 'open':
            case 'readOnly':
            case 'required':
            case 'reversed':
            case 'scoped':
            case 'seamless':
            case 'selected':
                dom[prop] = !!nextValue;
                break;
            case 'defaultChecked':
            case 'value':
            case 'volume':
                if (hasControlledValue && prop === 'value') {
                    break;
                }
                var value = isNullOrUndef(nextValue) ? '' : nextValue;
                if (dom[prop] !== value) {
                    dom[prop] = value;
                }
                break;
            case 'style':
                patchStyle(lastValue, nextValue, dom);
                break;
            case 'dangerouslySetInnerHTML':
                patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom);
                break;
            default:
                if (syntheticEvents[prop]) {
                    handleSyntheticEvent(prop, lastValue, nextValue, dom);
                }
                else if (prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110) {
                    patchEvent(prop, lastValue, nextValue, dom);
                }
                else if (isNullOrUndef(nextValue)) {
                    dom.removeAttribute(prop);
                }
                else if (isSVG && namespaces[prop]) {
                    // We optimize for isSVG being false
                    // If we end up in this path we can read property again
                    dom.setAttributeNS(namespaces[prop], prop, nextValue);
                }
                else {
                    dom.setAttribute(prop, nextValue);
                }
                break;
        }
    }
    function mountProps(vNode, flags, props, dom, isSVG) {
        var hasControlledValue = false;
        var isFormElement = (flags & 448 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = isControlledFormElement(props);
            if (hasControlledValue) {
                addFormElementEventHandlers(flags, dom, props);
            }
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue, null);
        }
        if (isFormElement) {
            processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }

    function renderNewInput(instance, props, context) {
        var nextInput = normalizeRoot(instance.render(props, instance.state, context));
        var childContext = context;
        if (isFunction(instance.getChildContext)) {
            childContext = combineFrom(context, instance.getChildContext());
        }
        instance.$CX = childContext;
        return nextInput;
    }
    function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
        var instance = new Component(props, context);
        var usesNewAPI = (instance.$N = Boolean(Component.getDerivedStateFromProps || instance.getSnapshotBeforeUpdate));
        instance.$SVG = isSVG;
        instance.$L = lifecycle;
        vNode.children = instance;
        instance.$BS = false;
        instance.context = context;
        if (instance.props === EMPTY_OBJ) {
            instance.props = props;
        }
        if (!usesNewAPI) {
            if (isFunction(instance.componentWillMount)) {
                instance.$BR = true;
                instance.componentWillMount();
                var pending = instance.$PS;
                if (!isNull(pending)) {
                    var state = instance.state;
                    if (isNull(state)) {
                        instance.state = pending;
                    }
                    else {
                        for (var key in pending) {
                            state[key] = pending[key];
                        }
                    }
                    instance.$PS = null;
                }
                instance.$BR = false;
            }
        }
        else {
            instance.state = createDerivedState(instance, props, instance.state);
        }
        instance.$LI = renderNewInput(instance, props, context);
        return instance;
    }

    function mount(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
        var flags = (vNode.flags |= 16384 /* InUse */);
        if (flags & 481 /* Element */) {
            mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
        }
        else if (flags & 4 /* ComponentClass */) {
            mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
        }
        else if (flags & 8 /* ComponentFunction */) {
            mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
            mountFunctionalComponentCallbacks(vNode, lifecycle);
        }
        else if (flags & 512 /* Void */ || flags & 16 /* Text */) {
            mountText(vNode, parentDOM, nextNode);
        }
        else if (flags & 8192 /* Fragment */) {
            mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle);
        }
        else if (flags & 1024 /* Portal */) {
            mountPortal(vNode, context, parentDOM, nextNode, lifecycle);
        }
    }
    function mountPortal(vNode, context, parentDOM, nextNode, lifecycle) {
        mount(vNode.children, vNode.ref, context, false, null, lifecycle);
        var placeHolderVNode = createVoidVNode();
        mountText(placeHolderVNode, parentDOM, nextNode);
        vNode.dom = placeHolderVNode.dom;
    }
    function mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle) {
        var children = vNode.children;
        var childFlags = vNode.childFlags;
        // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
        // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements
        if (childFlags & 12 /* MultipleChildren */ && children.length === 0) {
            childFlags = vNode.childFlags = 2 /* HasVNodeChildren */;
            children = vNode.children = createVoidVNode();
        }
        if (childFlags === 2 /* HasVNodeChildren */) {
            mount(children, parentDOM, nextNode, isSVG, nextNode, lifecycle);
        }
        else {
            mountArrayChildren(children, parentDOM, context, isSVG, nextNode, lifecycle);
        }
    }
    function mountText(vNode, parentDOM, nextNode) {
        var dom = (vNode.dom = document.createTextNode(vNode.children));
        if (!isNull(parentDOM)) {
            insertOrAppend(parentDOM, dom, nextNode);
        }
    }
    function mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
        var flags = vNode.flags;
        var props = vNode.props;
        var className = vNode.className;
        var children = vNode.children;
        var childFlags = vNode.childFlags;
        var dom = (vNode.dom = documentCreateElement(vNode.type, (isSVG = isSVG || (flags & 32 /* SvgElement */) > 0)));
        if (!isNullOrUndef(className) && className !== '') {
            if (isSVG) {
                dom.setAttribute('class', className);
            }
            else {
                dom.className = className;
            }
        }
        if (childFlags === 16 /* HasTextChildren */) {
            setTextContent(dom, children);
        }
        else if (childFlags !== 1 /* HasInvalidChildren */) {
            var childrenIsSVG = isSVG && vNode.type !== 'foreignObject';
            if (childFlags === 2 /* HasVNodeChildren */) {
                if (children.flags & 16384 /* InUse */) {
                    vNode.children = children = directClone(children);
                }
                mount(children, dom, context, childrenIsSVG, null, lifecycle);
            }
            else if (childFlags === 8 /* HasKeyedChildren */ || childFlags === 4 /* HasNonKeyedChildren */) {
                mountArrayChildren(children, dom, context, childrenIsSVG, null, lifecycle);
            }
        }
        if (!isNull(parentDOM)) {
            insertOrAppend(parentDOM, dom, nextNode);
        }
        if (!isNull(props)) {
            mountProps(vNode, flags, props, dom, isSVG);
        }
        mountRef(vNode.ref, dom, lifecycle);
    }
    function mountArrayChildren(children, dom, context, isSVG, nextNode, lifecycle) {
        for (var i = 0; i < children.length; ++i) {
            var child = children[i];
            if (child.flags & 16384 /* InUse */) {
                children[i] = child = directClone(child);
            }
            mount(child, dom, context, isSVG, nextNode, lifecycle);
        }
    }
    function mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
        var instance = createClassComponentInstance(vNode, vNode.type, vNode.props || EMPTY_OBJ, context, isSVG, lifecycle);
        mount(instance.$LI, parentDOM, instance.$CX, isSVG, nextNode, lifecycle);
        mountClassComponentCallbacks(vNode.ref, instance, lifecycle);
    }
    function renderFunctionalComponent(vNode, context) {
        return vNode.flags & 32768 /* ForwardRef */ ? vNode.type.render(vNode.props || EMPTY_OBJ, vNode.ref, context) : vNode.type(vNode.props || EMPTY_OBJ, context);
    }
    function mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
        mount((vNode.children = normalizeRoot(renderFunctionalComponent(vNode, context))), parentDOM, context, isSVG, nextNode, lifecycle);
    }
    function createClassMountCallback(instance) {
        return function () {
            instance.componentDidMount();
        };
    }
    function mountClassComponentCallbacks(ref, instance, lifecycle) {
        mountRef(ref, instance, lifecycle);
        if (isFunction(instance.componentDidMount)) {
            lifecycle.push(createClassMountCallback(instance));
        }
    }
    function createOnMountCallback(ref, vNode) {
        return function () {
            ref.onComponentDidMount(findDOMfromVNode(vNode, true), vNode.props || EMPTY_OBJ);
        };
    }
    function mountFunctionalComponentCallbacks(vNode, lifecycle) {
        var ref = vNode.ref;
        if (!isNullOrUndef(ref)) {
            safeCall1(ref.onComponentWillMount, vNode.props || EMPTY_OBJ);
            if (isFunction(ref.onComponentDidMount)) {
                lifecycle.push(createOnMountCallback(ref, vNode));
            }
        }
    }

    function replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle) {
        unmount(lastVNode);
        if ((nextVNode.flags & lastVNode.flags & 2033 /* DOMRef */) !== 0) {
            mount(nextVNode, null, context, isSVG, null, lifecycle);
            // Single DOM operation, when we have dom references available
            replaceChild(parentDOM, nextVNode.dom, lastVNode.dom);
        }
        else {
            mount(nextVNode, parentDOM, context, isSVG, findDOMfromVNode(lastVNode, true), lifecycle);
            removeVNodeDOM(lastVNode, parentDOM);
        }
    }
    function patch(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
        var nextFlags = (nextVNode.flags |= 16384 /* InUse */);
        if (lastVNode.flags !== nextFlags || lastVNode.type !== nextVNode.type || lastVNode.key !== nextVNode.key || nextFlags & 2048 /* ReCreate */) {
            if (lastVNode.flags & 16384 /* InUse */) {
                replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle);
            }
            else {
                // Last vNode is not in use, it has crashed at application level. Just mount nextVNode and ignore last one
                mount(nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
            }
        }
        else if (nextFlags & 481 /* Element */) {
            patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle);
        }
        else if (nextFlags & 4 /* ComponentClass */) {
            patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
        }
        else if (nextFlags & 8 /* ComponentFunction */) {
            patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
        }
        else if (nextFlags & 16 /* Text */) {
            patchText(lastVNode, nextVNode);
        }
        else if (nextFlags & 512 /* Void */) {
            nextVNode.dom = lastVNode.dom;
        }
        else if (nextFlags & 8192 /* Fragment */) {
            patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle);
        }
        else {
            patchPortal(lastVNode, nextVNode, context, lifecycle);
        }
    }
    function patchSingleTextChild(lastChildren, nextChildren, parentDOM) {
        if (lastChildren !== nextChildren) {
            if (lastChildren !== '') {
                parentDOM.firstChild.nodeValue = nextChildren;
            }
            else {
                setTextContent(parentDOM, nextChildren);
            }
        }
    }
    function patchContentEditableChildren(dom, nextChildren) {
        if (dom.textContent !== nextChildren) {
            dom.textContent = nextChildren;
        }
    }
    function patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle) {
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var lastChildFlags = lastVNode.childFlags;
        var nextChildFlags = nextVNode.childFlags;
        var nextNode = null;
        // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
        // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements
        if (nextChildFlags & 12 /* MultipleChildren */ && nextChildren.length === 0) {
            nextChildFlags = nextVNode.childFlags = 2 /* HasVNodeChildren */;
            nextChildren = nextVNode.children = createVoidVNode();
        }
        var nextIsSingle = (nextChildFlags & 2 /* HasVNodeChildren */) !== 0;
        if (lastChildFlags & 12 /* MultipleChildren */) {
            var lastLen = lastChildren.length;
            // We need to know Fragment's edge node when
            if (
            // It uses keyed algorithm
            (lastChildFlags & 8 /* HasKeyedChildren */ && nextChildFlags & 8 /* HasKeyedChildren */) ||
                // It transforms from many to single
                nextIsSingle ||
                // It will append more nodes
                (!nextIsSingle && nextChildren.length > lastLen)) {
                // When fragment has multiple children there is always at least one vNode
                nextNode = findDOMfromVNode(lastChildren[lastLen - 1], false).nextSibling;
            }
        }
        patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lastVNode, lifecycle);
    }
    function patchPortal(lastVNode, nextVNode, context, lifecycle) {
        var lastContainer = lastVNode.ref;
        var nextContainer = nextVNode.ref;
        var nextChildren = nextVNode.children;
        patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, context, false, null, lastVNode, lifecycle);
        nextVNode.dom = lastVNode.dom;
        if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {
            var node = nextChildren.dom;
            removeChild(lastContainer, node);
            appendChild(nextContainer, node);
        }
    }
    function patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle) {
        var dom = (nextVNode.dom = lastVNode.dom);
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var isFormElement = false;
        var hasControlledValue = false;
        var nextPropsOrEmpty;
        isSVG = isSVG || (nextFlags & 32 /* SvgElement */) > 0;
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
            nextPropsOrEmpty = nextProps || EMPTY_OBJ;
            if (nextPropsOrEmpty !== EMPTY_OBJ) {
                isFormElement = (nextFlags & 448 /* FormElement */) > 0;
                if (isFormElement) {
                    hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
                }
                for (var prop in nextPropsOrEmpty) {
                    var lastValue = lastPropsOrEmpty[prop];
                    var nextValue = nextPropsOrEmpty[prop];
                    if (lastValue !== nextValue) {
                        patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode);
                    }
                }
            }
            if (lastPropsOrEmpty !== EMPTY_OBJ) {
                for (var prop$1 in lastPropsOrEmpty) {
                    if (isNullOrUndef(nextPropsOrEmpty[prop$1]) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                        patchProp(prop$1, lastPropsOrEmpty[prop$1], null, dom, isSVG, hasControlledValue, lastVNode);
                    }
                }
            }
        }
        var nextChildren = nextVNode.children;
        var nextClassName = nextVNode.className;
        // inlined patchProps  -- ends --
        if (lastVNode.className !== nextClassName) {
            if (isNullOrUndef(nextClassName)) {
                dom.removeAttribute('class');
            }
            else if (isSVG) {
                dom.setAttribute('class', nextClassName);
            }
            else {
                dom.className = nextClassName;
            }
        }
        if (nextFlags & 4096 /* ContentEditable */) {
            patchContentEditableChildren(dom, nextChildren);
        }
        else {
            patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, dom, context, isSVG && nextVNode.type !== 'foreignObject', null, lastVNode, lifecycle);
        }
        if (isFormElement) {
            processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
        }
        var nextRef = nextVNode.ref;
        var lastRef = lastVNode.ref;
        if (lastRef !== nextRef) {
            unmountRef(lastRef);
            mountRef(nextRef, dom, lifecycle);
        }
    }
    function replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle) {
        unmount(lastChildren);
        mountArrayChildren(nextChildren, parentDOM, context, isSVG, findDOMfromVNode(lastChildren, true), lifecycle);
        removeVNodeDOM(lastChildren, parentDOM);
    }
    function patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, parentVNode, lifecycle) {
        switch (lastChildFlags) {
            case 2 /* HasVNodeChildren */:
                switch (nextChildFlags) {
                    case 2 /* HasVNodeChildren */:
                        patch(lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                        break;
                    case 1 /* HasInvalidChildren */:
                        remove(lastChildren, parentDOM);
                        break;
                    case 16 /* HasTextChildren */:
                        unmount(lastChildren);
                        setTextContent(parentDOM, nextChildren);
                        break;
                    default:
                        replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle);
                        break;
                }
                break;
            case 1 /* HasInvalidChildren */:
                switch (nextChildFlags) {
                    case 2 /* HasVNodeChildren */:
                        mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                        break;
                    case 1 /* HasInvalidChildren */:
                        break;
                    case 16 /* HasTextChildren */:
                        setTextContent(parentDOM, nextChildren);
                        break;
                    default:
                        mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                        break;
                }
                break;
            case 16 /* HasTextChildren */:
                switch (nextChildFlags) {
                    case 16 /* HasTextChildren */:
                        patchSingleTextChild(lastChildren, nextChildren, parentDOM);
                        break;
                    case 2 /* HasVNodeChildren */:
                        clearDOM(parentDOM);
                        mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                        break;
                    case 1 /* HasInvalidChildren */:
                        clearDOM(parentDOM);
                        break;
                    default:
                        clearDOM(parentDOM);
                        mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                        break;
                }
                break;
            default:
                switch (nextChildFlags) {
                    case 16 /* HasTextChildren */:
                        unmountAllChildren(lastChildren);
                        setTextContent(parentDOM, nextChildren);
                        break;
                    case 2 /* HasVNodeChildren */:
                        removeAllChildren(parentDOM, parentVNode, lastChildren);
                        mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                        break;
                    case 1 /* HasInvalidChildren */:
                        removeAllChildren(parentDOM, parentVNode, lastChildren);
                        break;
                    default:
                        var lastLength = lastChildren.length | 0;
                        var nextLength = nextChildren.length | 0;
                        // Fast path's for both algorithms
                        if (lastLength === 0) {
                            if (nextLength > 0) {
                                mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                            }
                        }
                        else if (nextLength === 0) {
                            removeAllChildren(parentDOM, parentVNode, lastChildren);
                        }
                        else if (nextChildFlags === 8 /* HasKeyedChildren */ && lastChildFlags === 8 /* HasKeyedChildren */) {
                            patchKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, parentVNode, lifecycle);
                        }
                        else {
                            patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, lifecycle);
                        }
                        break;
                }
                break;
        }
    }
    function createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle) {
        lifecycle.push(function () {
            instance.componentDidUpdate(lastProps, lastState, snapshot);
        });
    }
    function updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, force, nextNode, lifecycle) {
        var lastState = instance.state;
        var lastProps = instance.props;
        var usesNewAPI = Boolean(instance.$N);
        var hasSCU = isFunction(instance.shouldComponentUpdate);
        if (usesNewAPI) {
            nextState = createDerivedState(instance, nextProps, nextState !== lastState ? combineFrom(lastState, nextState) : nextState);
        }
        if (force || !hasSCU || (hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context))) {
            if (!usesNewAPI && isFunction(instance.componentWillUpdate)) {
                instance.componentWillUpdate(nextProps, nextState, context);
            }
            instance.props = nextProps;
            instance.state = nextState;
            instance.context = context;
            var snapshot = null;
            var nextInput = renderNewInput(instance, nextProps, context);
            if (usesNewAPI && isFunction(instance.getSnapshotBeforeUpdate)) {
                snapshot = instance.getSnapshotBeforeUpdate(lastProps, lastState);
            }
            patch(instance.$LI, nextInput, parentDOM, instance.$CX, isSVG, nextNode, lifecycle);
            // Dont update Last input, until patch has been succesfully executed
            instance.$LI = nextInput;
            if (isFunction(instance.componentDidUpdate)) {
                createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle);
            }
        }
        else {
            instance.props = nextProps;
            instance.state = nextState;
            instance.context = context;
        }
    }
    function patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
        var instance = (nextVNode.children = lastVNode.children);
        // If Component has crashed, ignore it to stay functional
        if (isNull(instance)) {
            return;
        }
        instance.$L = lifecycle;
        var nextProps = nextVNode.props || EMPTY_OBJ;
        var nextRef = nextVNode.ref;
        var lastRef = lastVNode.ref;
        var nextState = instance.state;
        if (!instance.$N) {
            if (isFunction(instance.componentWillReceiveProps)) {
                instance.$BR = true;
                instance.componentWillReceiveProps(nextProps, context);
                // If instance component was removed during its own update do nothing.
                if (instance.$UN) {
                    return;
                }
                instance.$BR = false;
            }
            if (!isNull(instance.$PS)) {
                nextState = combineFrom(nextState, instance.$PS);
                instance.$PS = null;
            }
        }
        updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, false, nextNode, lifecycle);
        if (lastRef !== nextRef) {
            unmountRef(lastRef);
            mountRef(nextRef, instance, lifecycle);
        }
    }
    function patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
        var shouldUpdate = true;
        var nextProps = nextVNode.props || EMPTY_OBJ;
        var nextRef = nextVNode.ref;
        var lastProps = lastVNode.props;
        var nextHooksDefined = !isNullOrUndef(nextRef);
        var lastInput = lastVNode.children;
        if (nextHooksDefined && isFunction(nextRef.onComponentShouldUpdate)) {
            shouldUpdate = nextRef.onComponentShouldUpdate(lastProps, nextProps);
        }
        if (shouldUpdate !== false) {
            if (nextHooksDefined && isFunction(nextRef.onComponentWillUpdate)) {
                nextRef.onComponentWillUpdate(lastProps, nextProps);
            }
            var type = nextVNode.type;
            var nextInput = normalizeRoot(nextVNode.flags & 32768 /* ForwardRef */ ? type.render(nextProps, nextRef, context) : type(nextProps, context));
            patch(lastInput, nextInput, parentDOM, context, isSVG, nextNode, lifecycle);
            nextVNode.children = nextInput;
            if (nextHooksDefined && isFunction(nextRef.onComponentDidUpdate)) {
                nextRef.onComponentDidUpdate(lastProps, nextProps);
            }
        }
        else {
            nextVNode.children = lastInput;
        }
    }
    function patchText(lastVNode, nextVNode) {
        var nextText = nextVNode.children;
        var dom = (nextVNode.dom = lastVNode.dom);
        if (nextText !== lastVNode.children) {
            dom.nodeValue = nextText;
        }
    }
    function patchNonKeyedChildren(lastChildren, nextChildren, dom, context, isSVG, lastChildrenLength, nextChildrenLength, nextNode, lifecycle) {
        var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
        var i = 0;
        var nextChild;
        var lastChild;
        for (; i < commonLength; ++i) {
            nextChild = nextChildren[i];
            lastChild = lastChildren[i];
            if (nextChild.flags & 16384 /* InUse */) {
                nextChild = nextChildren[i] = directClone(nextChild);
            }
            patch(lastChild, nextChild, dom, context, isSVG, nextNode, lifecycle);
            lastChildren[i] = nextChild;
        }
        if (lastChildrenLength < nextChildrenLength) {
            for (i = commonLength; i < nextChildrenLength; ++i) {
                nextChild = nextChildren[i];
                if (nextChild.flags & 16384 /* InUse */) {
                    nextChild = nextChildren[i] = directClone(nextChild);
                }
                mount(nextChild, dom, context, isSVG, nextNode, lifecycle);
            }
        }
        else if (lastChildrenLength > nextChildrenLength) {
            for (i = commonLength; i < lastChildrenLength; ++i) {
                remove(lastChildren[i], dom);
            }
        }
    }
    function patchKeyedChildren(a, b, dom, context, isSVG, aLength, bLength, outerEdge, parentVNode, lifecycle) {
        var aEnd = aLength - 1;
        var bEnd = bLength - 1;
        var j = 0;
        var aNode = a[j];
        var bNode = b[j];
        var nextPos;
        var nextNode;
        // Step 1
        // tslint:disable-next-line
        outer: {
            // Sync nodes with the same key at the beginning.
            while (aNode.key === bNode.key) {
                if (bNode.flags & 16384 /* InUse */) {
                    b[j] = bNode = directClone(bNode);
                }
                patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
                a[j] = bNode;
                ++j;
                if (j > aEnd || j > bEnd) {
                    break outer;
                }
                aNode = a[j];
                bNode = b[j];
            }
            aNode = a[aEnd];
            bNode = b[bEnd];
            // Sync nodes with the same key at the end.
            while (aNode.key === bNode.key) {
                if (bNode.flags & 16384 /* InUse */) {
                    b[bEnd] = bNode = directClone(bNode);
                }
                patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
                a[aEnd] = bNode;
                aEnd--;
                bEnd--;
                if (j > aEnd || j > bEnd) {
                    break outer;
                }
                aNode = a[aEnd];
                bNode = b[bEnd];
            }
        }
        if (j > aEnd) {
            if (j <= bEnd) {
                nextPos = bEnd + 1;
                nextNode = nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge;
                while (j <= bEnd) {
                    bNode = b[j];
                    if (bNode.flags & 16384 /* InUse */) {
                        b[j] = bNode = directClone(bNode);
                    }
                    ++j;
                    mount(bNode, dom, context, isSVG, nextNode, lifecycle);
                }
            }
        }
        else if (j > bEnd) {
            while (j <= aEnd) {
                remove(a[j++], dom);
            }
        }
        else {
            patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle);
        }
    }
    function patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle) {
        var aNode;
        var bNode;
        var nextPos;
        var i = 0;
        var aStart = j;
        var bStart = j;
        var aLeft = aEnd - j + 1;
        var bLeft = bEnd - j + 1;
        var sources = new Int32Array(bLeft + 1);
        // Keep track if its possible to remove whole DOM using textContent = '';
        var canRemoveWholeContent = aLeft === aLength;
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLength < 4 || (aLeft | bLeft) < 32) {
            for (i = aStart; i <= aEnd; ++i) {
                aNode = a[i];
                if (patched < bLeft) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i + 1;
                            if (canRemoveWholeContent) {
                                canRemoveWholeContent = false;
                                while (aStart < i) {
                                    remove(a[aStart++], dom);
                                }
                            }
                            if (pos > j) {
                                moved = true;
                            }
                            else {
                                pos = j;
                            }
                            if (bNode.flags & 16384 /* InUse */) {
                                b[j] = bNode = directClone(bNode);
                            }
                            patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
                            ++patched;
                            break;
                        }
                    }
                    if (!canRemoveWholeContent && j > bEnd) {
                        remove(aNode, dom);
                    }
                }
                else if (!canRemoveWholeContent) {
                    remove(aNode, dom);
                }
            }
        }
        else {
            var keyIndex = {};
            // Map keys by their index
            for (i = bStart; i <= bEnd; ++i) {
                keyIndex[b[i].key] = i;
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; ++i) {
                aNode = a[i];
                if (patched < bLeft) {
                    j = keyIndex[aNode.key];
                    if (j !== void 0) {
                        if (canRemoveWholeContent) {
                            canRemoveWholeContent = false;
                            while (i > aStart) {
                                remove(a[aStart++], dom);
                            }
                        }
                        sources[j - bStart] = i + 1;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        bNode = b[j];
                        if (bNode.flags & 16384 /* InUse */) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
                        ++patched;
                    }
                    else if (!canRemoveWholeContent) {
                        remove(aNode, dom);
                    }
                }
                else if (!canRemoveWholeContent) {
                    remove(aNode, dom);
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (canRemoveWholeContent) {
            removeAllChildren(dom, parentVNode, a);
            mountArrayChildren(b, dom, context, isSVG, outerEdge, lifecycle);
        }
        else if (moved) {
            var seq = lis_algorithm(sources);
            j = seq.length - 1;
            for (i = bLeft - 1; i >= 0; i--) {
                if (sources[i] === 0) {
                    pos = i + bStart;
                    bNode = b[pos];
                    if (bNode.flags & 16384 /* InUse */) {
                        b[pos] = bNode = directClone(bNode);
                    }
                    nextPos = pos + 1;
                    mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge, lifecycle);
                }
                else if (j < 0 || i !== seq[j]) {
                    pos = i + bStart;
                    bNode = b[pos];
                    nextPos = pos + 1;
                    moveVNodeDOM(bNode, dom, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge);
                }
                else {
                    j--;
                }
            }
        }
        else if (patched !== bLeft) {
            // when patched count doesn't match b length we need to insert those new ones
            // loop backwards so we can use insertBefore
            for (i = bLeft - 1; i >= 0; i--) {
                if (sources[i] === 0) {
                    pos = i + bStart;
                    bNode = b[pos];
                    if (bNode.flags & 16384 /* InUse */) {
                        b[pos] = bNode = directClone(bNode);
                    }
                    nextPos = pos + 1;
                    mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge, lifecycle);
                }
            }
        }
    }
    var result;
    var p;
    var maxLen = 0;
    // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
    function lis_algorithm(arr) {
        var arrI = 0;
        var i = 0;
        var j = 0;
        var k = 0;
        var u = 0;
        var v = 0;
        var c = 0;
        var len = arr.length;
        if (len > maxLen) {
            maxLen = len;
            result = new Int32Array(len);
            p = new Int32Array(len);
        }
        for (; i < len; ++i) {
            arrI = arr[i];
            if (arrI !== 0) {
                j = result[k];
                if (arr[j] < arrI) {
                    p[i] = j;
                    result[++k] = i;
                    continue;
                }
                u = 0;
                v = k;
                while (u < v) {
                    c = (u + v) >> 1;
                    if (arr[result[c]] < arrI) {
                        u = c + 1;
                    }
                    else {
                        v = c;
                    }
                }
                if (arrI < arr[result[u]]) {
                    if (u > 0) {
                        p[i] = result[u - 1];
                    }
                    result[u] = i;
                }
            }
        }
        u = k + 1;
        var seq = new Int32Array(u);
        v = result[u - 1];
        while (u-- > 0) {
            seq[u] = v;
            v = p[v];
            result[u] = 0;
        }
        return seq;
    }

    var hasDocumentAvailable = typeof document !== 'undefined';
    if (hasDocumentAvailable) {
        /*
         * Defining $EV and $V properties on Node.prototype
         * fixes v8 "wrong map" de-optimization
         */
        if (window.Node) {
            Node.prototype.$EV = null;
            Node.prototype.$V = null;
        }
    }
    function __render(input, parentDOM, callback, context) {
        var lifecycle = [];
        var rootInput = parentDOM.$V;
        renderCheck.v = true;
        if (isNullOrUndef(rootInput)) {
            if (!isNullOrUndef(input)) {
                if (input.flags & 16384 /* InUse */) {
                    input = directClone(input);
                }
                mount(input, parentDOM, context, false, null, lifecycle);
                parentDOM.$V = input;
                rootInput = input;
            }
        }
        else {
            if (isNullOrUndef(input)) {
                remove(rootInput, parentDOM);
                parentDOM.$V = null;
            }
            else {
                if (input.flags & 16384 /* InUse */) {
                    input = directClone(input);
                }
                patch(rootInput, input, parentDOM, context, false, null, lifecycle);
                rootInput = parentDOM.$V = input;
            }
        }
        callAll(lifecycle);
        renderCheck.v = false;
        if (isFunction(callback)) {
            callback();
        }
        if (isFunction(options.renderComplete)) {
            options.renderComplete(rootInput, parentDOM);
        }
    }
    function render(input, parentDOM, callback, context) {
        if ( callback === void 0 ) callback = null;
        if ( context === void 0 ) context = EMPTY_OBJ;

        __render(input, parentDOM, callback, context);
    }

    var QUEUE = [];
    var nextTick = typeof Promise !== 'undefined'
        ? Promise.resolve().then.bind(Promise.resolve())
        : function (a) {
            window.setTimeout(a, 0);
        };
    var microTaskPending = false;
    function queueStateChanges(component, newState, callback, force) {
        var pending = component.$PS;
        if (isFunction(newState)) {
            newState = newState(pending ? combineFrom(component.state, pending) : component.state, component.props, component.context);
        }
        if (isNullOrUndef(pending)) {
            component.$PS = newState;
        }
        else {
            for (var stateKey in newState) {
                pending[stateKey] = newState[stateKey];
            }
        }
        if (!component.$BR) {
            if (!renderCheck.v) {
                if (QUEUE.length === 0) {
                    applyState(component, force);
                    if (isFunction(callback)) {
                        callback.call(component);
                    }
                    return;
                }
            }
            if (QUEUE.indexOf(component) === -1) {
                QUEUE.push(component);
            }
            if (!microTaskPending) {
                microTaskPending = true;
                nextTick(rerender);
            }
            if (isFunction(callback)) {
                var QU = component.$QU;
                if (!QU) {
                    QU = component.$QU = [];
                }
                QU.push(callback);
            }
        }
        else if (isFunction(callback)) {
            component.$L.push(callback.bind(component));
        }
    }
    function callSetStateCallbacks(component) {
        var queue = component.$QU;
        for (var i = 0; i < queue.length; ++i) {
            queue[i].call(component);
        }
        component.$QU = null;
    }
    function rerender() {
        var component;
        microTaskPending = false;
        while ((component = QUEUE.shift())) {
            if (!component.$UN) {
                applyState(component, false);
                if (component.$QU) {
                    callSetStateCallbacks(component);
                }
            }
        }
    }
    function applyState(component, force) {
        if (force || !component.$BR) {
            var pendingState = component.$PS;
            component.$PS = null;
            var lifecycle = [];
            renderCheck.v = true;
            updateClassComponent(component, combineFrom(component.state, pendingState), component.props, findDOMfromVNode(component.$LI, true).parentNode, component.context, component.$SVG, force, null, lifecycle);
            callAll(lifecycle);
            renderCheck.v = false;
        }
        else {
            component.state = component.$PS;
            component.$PS = null;
        }
    }
    var Component = function Component(props, context) {
        // Public
        this.state = null;
        // Internal properties
        this.$BR = false; // BLOCK RENDER
        this.$BS = true; // BLOCK STATE
        this.$PS = null; // PENDING STATE (PARTIAL or FULL)
        this.$LI = null; // LAST INPUT
        this.$UN = false; // UNMOUNTED
        this.$CX = null; // CHILDCONTEXT
        this.$QU = null; // QUEUE
        this.$N = false; // Uses new lifecycle API Flag
        this.$L = null; // Current lifecycle of this component
        this.$SVG = false; // Flag to keep track if component is inside SVG tree
        this.props = props || EMPTY_OBJ;
        this.context = context || EMPTY_OBJ; // context should not be mutable
    };
    Component.prototype.forceUpdate = function forceUpdate (callback) {
        if (this.$UN) {
            return;
        }
        // Do not allow double render during force update
        queueStateChanges(this, {}, callback, true);
    };
    Component.prototype.setState = function setState (newState, callback) {
        if (this.$UN) {
            return;
        }
        if (!this.$BS) {
            queueStateChanges(this, newState, callback, false);
        }
    };
    Component.prototype.render = function render (_nextProps, _nextState, _nextContext) {
        return null;
    };

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
    var populateReceivedMessage = function (dataPayload) { return __awaiter(void 0, void 0, void 0, function () {
        var JSONResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/populateReceivedMessage', '3333')];
                case 1:
                    JSONResponse = _a.sent();
                    return [2 /*return*/, JSONResponse.data.compiledUser];
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
    var sendNewUserNote = function (dataPayload) { return __awaiter(void 0, void 0, void 0, function () {
        var JSONResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/sendNewUserNote', '3333')];
                case 1:
                    JSONResponse = _a.sent();
                    return [2 /*return*/, JSONResponse.data.message];
            }
        });
    }); };
    var markUserHostile = function (dataPayload) { return __awaiter(void 0, void 0, void 0, function () {
        var JSONResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/markUserHostile', '3333')];
                case 1:
                    JSONResponse = _a.sent();
                    return [2 /*return*/, JSONResponse.data.message];
            }
        });
    }); };
    var markUserChatted = function (dataPayload) { return __awaiter(void 0, void 0, void 0, function () {
        var JSONResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/markUserChatted', '3333')];
                case 1:
                    JSONResponse = _a.sent();
                    return [2 /*return*/, JSONResponse.data.message];
            }
        });
    }); };
    var latestUnreadMessagesInformation = function (dataPayload) { return __awaiter(void 0, void 0, void 0, function () {
        var JSONResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/latestUnreadMessagesInformation', '3333')];
                case 1:
                    JSONResponse = _a.sent();
                    return [2 /*return*/, JSONResponse.data.user];
            }
        });
    }); };
    var setLastInboxMessageUsername = function (dataPayload) { return __awaiter(void 0, void 0, void 0, function () {
        var JSONResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/setLastInboxMessageUsername', '3333')];
                case 1:
                    JSONResponse = _a.sent();
                    return [2 /*return*/, JSONResponse.data.message];
            }
        });
    }); };

    // export const USERNAME = 'NA';
    var ForumType;
    (function (ForumType) {
        ForumType["rNofapForum"] = "r/NoFap";
        ForumType["rPornFreeForum"] = "r/pornfree";
        ForumType["rPornAddictionForum"] = "r/PornAddiction";
        ForumType["rNofapChristiansForum"] = "r/NoFapChristians";
        ForumType["rNofapTeensForum"] = "r/NoFapTeens";
        ForumType["rSemenRetentionForum"] = "r/Semenretention";
        ForumType["rMuslimNofapForum"] = "r/MuslimNoFap";
    })(ForumType || (ForumType = {}));
    var INBOX_LAST_MESSAGE_USER = 'vijay_st';

    var openReplyLink = function (containerDiv) { return __awaiter(void 0, void 0, void 0, function () {
        var entry, replyLink, replyALink;
        return __generator(this, function (_a) {
            entry = containerDiv.children[4];
            replyLink = getReplyLink(entry);
            if (replyLink) {
                replyALink = replyLink.children[0];
                console.log(replyALink);
                replyALink.click();
            }
            return [2 /*return*/];
        });
    }); };
    var getReplyLink = function (entry) {
        switch (entry.children.length) {
            case 5: {
                var entryLinks = entry.children[3];
                return entryLinks.children[7];
            }
            case 4: {
                var entryLinks = entry.children[2];
                return entryLinks.children[5];
            }
            default: {
                return null;
            }
        }
    };
    var populateMessageAndSend = function (messageText, previousMessageInformation, containerDiv, toUsername, messageType, sendImmediate) { return __awaiter(void 0, void 0, void 0, function () {
        var textArea, submitButton, dataPayload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    openReplyLink(containerDiv);
                    textArea = containerDiv.querySelector('textarea');
                    submitButton = containerDiv.querySelector('.save');
                    if (!(textArea && submitButton)) return [3 /*break*/, 4];
                    textArea.value = messageText;
                    if (!sendImmediate) return [3 /*break*/, 2];
                    dataPayload = {
                        username_sending: 'NeverFapDeluxe',
                        username_receiving: toUsername,
                        subject: previousMessageInformation.subjectReplyToTitle,
                        message: textArea.value,
                        send_date: new Date().toString(),
                        type: messageType,
                        forum_type: UserForumType.Reddit
                    };
                    return [4 /*yield*/, sendNewMessage(dataPayload)];
                case 1:
                    _a.sent();
                    submitButton.click();
                    return [3 /*break*/, 3];
                case 2:
                    submitButton.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
                        var textArea, dataPayload;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    textArea = containerDiv.querySelector('textarea');
                                    if (!textArea) return [3 /*break*/, 2];
                                    dataPayload = {
                                        username_sending: 'NeverFapDeluxe',
                                        username_receiving: toUsername,
                                        subject: previousMessageInformation.subjectReplyToTitle,
                                        message: textArea.value,
                                        send_date: new Date().toString(),
                                        type: messageType,
                                        forum_type: UserForumType.Reddit
                                    };
                                    return [4 /*yield*/, sendNewMessage(dataPayload)];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); });
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    console.log('cannot find textArea or submitButton');
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };

    var timeSince = function (date) {
        var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    };

    var createTextVNode$1 = createTextVNode;
    var createVNode$1 = createVNode;
    var PreviousMessageInformation = function (_a) {
        var dbUser = _a.dbUser;
        return (createVNode$1(1, "div", null, [createVNode$1(1, "p", null, createVNode$1(1, "b", null, "NFD Sent", 16, { "style": { 'font-weight': 900 } }), 2), dbUser.lastSentMessage ? (createVNode$1(1, "p", null, dbUser.lastSentMessage.text, 0, { "style": { 'padding-top': '0.2rem', 'padding-bottom': '0.2rem' } })) : createVNode$1(1, "p", null, "NA", 16), createVNode$1(1, "p", null, createVNode$1(1, "b", null, [dbUser.username, createTextVNode$1(" Sent")], 0, { "style": { 'font-weight': 900 } }), 2), dbUser.lastReceivedMessage ? (createVNode$1(1, "p", null, dbUser.lastReceivedMessage.text, 0, { "style": { 'padding-top': '0.2rem', 'padding-bottom': '0.2rem' } })) : createVNode$1(1, "p", null, "NA", 16)], 0));
    };
    var UserInformation = function (_a) {
        var dbUser = _a.dbUser, usernameConfig = _a.usernameConfig;
        return (createVNode$1(1, "div", null, [(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.usernameValue) === dbUser.username ? createVNode$1(1, "h1", null, "LASTUSER", 16, { "id": "last-user-reade", "style": { 'font-size': '4.5rem' } }) : '', createVNode$1(1, "span", null, [dbUser.username, createTextVNode$1(" | "), dbUser.user_chat_function_utilised ? createVNode$1(1, "span", null, "(Chatted)", 16, { "style": { color: 'black' } }) : ''], 0, { "style": { 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: dbUser.userColor } }), createVNode$1(1, "span", null, [createTextVNode$1("Type: "), dbUser.userType, createTextVNode$1(" |")], 0, { "style": { 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: dbUser.userColor } }), createVNode$1(1, "span", null, [createTextVNode$1("Sent: "), dbUser.sentCount], 0, { "style": { 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: 'blue' } }), createVNode$1(1, "br"), createVNode$1(1, "span", null, dbUser.lastReceivedMessage && timeSince(new Date(dbUser.lastReceivedMessage.send_date)) + " since last received message.", 0, { "style": { 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: 'black', 'margin-top': '0.6rem' } }), createVNode$1(1, "span", null, dbUser.lastSentMessage && timeSince(new Date(dbUser.lastSentMessage.send_date)) + " since last sent message.", 0, { "style": { 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: 'black', 'margin-top': '0.6rem' } })], 0, { "style": { 'margin-top': '1rem', 'margin-bottom': '1rem' } }));
    };
    var SendUserNoteForm = /** @class */ (function (_super) {
        __extends(SendUserNoteForm, _super);
        function SendUserNoteForm(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                message: ''
            };
            return _this;
        }
        SendUserNoteForm.prototype.render = function () {
            var _this = this;
            var _a;
            return (createVNode$1(1, "div", null, [createVNode$1(64, "input", null, null, 1, { "value": (_a = this.state) === null || _a === void 0 ? void 0 : _a.message, "onChange": function (e) { return _this.setState({ message: e.target.value }); }, "style": { 'margin-right': '1rem' } }), createVNode$1(1, "button", null, "Send Note", 16, { "onclick": function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, sendNewUserNote({
                                        username: this.props.username,
                                        message: (_a = this.state) === null || _a === void 0 ? void 0 : _a.message,
                                        forum_type: this.props.forum_type
                                    })];
                                case 1:
                                    _b.sent();
                                    this.setState({ message: '' });
                                    return [2 /*return*/];
                            }
                        });
                    }); } })], 4));
        };
        return SendUserNoteForm;
    }(Component));
    var MarkUserHostileButton = function (_a) {
        var username = _a.username;
        return (createVNode$1(1, "button", null, "Mark User Hostile", 16, { "style": { border: '1px solid black', 'margin-right': '0.4rem' }, "onclick": function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, markUserHostile({ username: username })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); } }));
    };
    var MarkUserChattedButton = function (_a) {
        var username = _a.username;
        return (createVNode$1(1, "button", null, "Mark User Chatted", 16, { "style": { border: '1px solid black', 'margin-right': '0.4rem' }, "onclick": function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, markUserChatted({ username: username })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); } }));
    };
    var SetLastInboxMessageUsernameButton = function (_a) {
        var username = _a.username, message = _a.message;
        return (createVNode$1(1, "button", null, "Set Last Inbox Message", 16, { "style": { border: '1px solid black', 'margin-right': '0.4rem' }, "onclick": function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, setLastInboxMessageUsername({ username: username, message: message })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); } }));
    };

    var createTextVNode$2 = createTextVNode;
    var createComponentVNode$1 = createComponentVNode;
    var createVNode$2 = createVNode;
    var createReplyMessageLink = function (messageType, color, toUsername, messageText, containerDiv, previousMessageInformation, sendImmediate) {
        var style = {
            color: color || 'black',
            'margin-top': '0.2rem',
            'margin-bottom': '0.2rem',
            'margin-left': '0.3rem',
            'margin-right': '0.3rem',
            'font-size': '12px',
            display: 'inline-block',
        };
        var dataTipId = messageType + "-" + toUsername;
        return (createVNode$2(1, "div", null, createVNode$2(1, "a", null, messageType, 0, { "data-tip": true, "data-for": dataTipId, "style": style, "onclick": function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, populateMessageAndSend(messageText, previousMessageInformation, containerDiv, toUsername, messageType, sendImmediate)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, "target": "_blank" }), 0));
    };
    var ReplyUserPanel = function (_a) {
        var _b, _c;
        var dbUser = _a.dbUser, containerDiv = _a.containerDiv, previousMessageInformation = _a.previousMessageInformation, numberOfMessagesFromThisUser = _a.numberOfMessagesFromThisUser, isUserLastMessagedUser = _a.isUserLastMessagedUser, otherUserMessages = _a.otherUserMessages, forum_type = _a.forum_type;
        return (createVNode$2(1, "div", null, [isUserLastMessagedUser && (createVNode$2(1, "p", null, "Last Messaged User", 16, { "style": { 'font-size': '1rem', 'padding-top': '1.2rem', 'padding-bottom': '1.2rem', 'padding-left': '0.4rem', 'margin-right': '0.4rem', 'background': 'mediumpurple', 'color': 'white' } })), createComponentVNode$1(2, UserInformation, { "dbUser": dbUser, "numberOfMessagesFromThisUser": numberOfMessagesFromThisUser }), createVNode$2(1, "div", null, [createComponentVNode$1(2, SendUserNoteForm, { "username": dbUser.username, "forum_type": forum_type }), createComponentVNode$1(2, MarkUserChattedButton, { "username": dbUser.username }), createComponentVNode$1(2, MarkUserHostileButton, { "username": dbUser.username }), createComponentVNode$1(2, SetLastInboxMessageUsernameButton, { "username": dbUser.username, "message": "" })], 4, { "style": { display: 'flex' } }), createComponentVNode$1(2, PreviousMessageInformation, { "dbUser": dbUser }), createVNode$2(1, "div", null, [createVNode$2(1, "div", null, [!((_b = dbUser === null || dbUser === void 0 ? void 0 : dbUser.lastSentMessage) === null || _b === void 0 ? void 0 : _b.type.includes('middle')) && (createVNode$2(1, "div", null, [createVNode$2(1, "h4", null, "Send", 16), createReplyMessageLink(SendMessageType.MiddleGuideIfYouWouldLikeToLearnMore, 'purple', dbUser.username, middleWrittenGuide, containerDiv, previousMessageInformation, false), createReplyMessageLink(SendMessageType.MiddleGuideNoWorries, 'purple', dbUser.username, middleGuideNoWorries, containerDiv, previousMessageInformation, false), createReplyMessageLink(SendMessageType.MiddleGuideLinkYou, 'purple', dbUser.username, middleGuideLinkYou, containerDiv, previousMessageInformation, false), createReplyMessageLink(SendMessageType.MiddleGuideMeditationAdvice, 'purple', dbUser.username, middleGuideMeditationAdvice, containerDiv, previousMessageInformation, false)], 0)), createVNode$2(1, "h4", null, "Final", 16, { "style": { 'margin-top': '0.3rem', 'margin-left': '0.4rem', 'margin-right': '0.4rem' } }), createReplyMessageLink(SendMessageType.FinalJoinSubreddit, 'purple', dbUser.username, finalJoinSubreddit, containerDiv, previousMessageInformation, false), createReplyMessageLink(SendMessageType.FinalHardTime, 'purple', dbUser.username, finalHardTime, containerDiv, previousMessageInformation, false), createReplyMessageLink(SendMessageType.FinalFantastic, 'purple', dbUser.username, finalFantastic, containerDiv, previousMessageInformation, false), createReplyMessageLink(SendMessageType.FinalShareResources, 'purple', dbUser.username, finalShareResources, containerDiv, previousMessageInformation, false), createVNode$2(1, "h4", null, "Custom", 16, { "style": { 'margin-top': '0.3rem', 'margin-left': '0.4rem', 'margin-right': '0.4rem' } }), createReplyMessageLink(SendMessageType.NFDCustomSend, 'purple', dbUser.username, '', containerDiv, previousMessageInformation, false)], 0, { "style": { display: 'flex', 'flex-direction': 'column' } }), createVNode$2(1, "div", null, [!((_c = dbUser === null || dbUser === void 0 ? void 0 : dbUser.lastSentMessage) === null || _c === void 0 ? void 0 : _c.type.includes('middle')) && (createVNode$2(1, "div", null, [createVNode$2(1, "h4", null, "Send Immediate", 16), createReplyMessageLink(SendMessageType.MiddleGuideIfYouWouldLikeToLearnMore, 'purple', dbUser.username, middleWrittenGuide, containerDiv, previousMessageInformation, true), createReplyMessageLink(SendMessageType.MiddleGuideNoWorries, 'purple', dbUser.username, middleGuideNoWorries, containerDiv, previousMessageInformation, true), createReplyMessageLink(SendMessageType.MiddleGuideLinkYou, 'purple', dbUser.username, middleGuideLinkYou, containerDiv, previousMessageInformation, true), createReplyMessageLink(SendMessageType.MiddleGuideMeditationAdvice, 'purple', dbUser.username, middleGuideMeditationAdvice, containerDiv, previousMessageInformation, true)], 0)), createVNode$2(1, "h4", null, "Final Immediate", 16, { "style": { 'margin-top': '0.3rem', 'margin-left': '0.4rem', 'margin-right': '0.4rem' } }), createReplyMessageLink(SendMessageType.FinalJoinSubreddit, 'purple', dbUser.username, finalJoinSubreddit, containerDiv, previousMessageInformation, true), createReplyMessageLink(SendMessageType.FinalHardTime, 'purple', dbUser.username, finalHardTime, containerDiv, previousMessageInformation, true), createReplyMessageLink(SendMessageType.FinalFantastic, 'purple', dbUser.username, finalFantastic, containerDiv, previousMessageInformation, true), createReplyMessageLink(SendMessageType.FinalShareResources, 'purple', dbUser.username, finalShareResources, containerDiv, previousMessageInformation, true)], 0, { "style": { display: 'flex', 'flex-direction': 'column' } })], 4, { "id": "cake", "style": { display: 'flex', 'margin-top': '1rem', 'margin-bottom': '1rem' } }), createVNode$2(1, "div", null, numberOfMessagesFromThisUser && "Message count: " + numberOfMessagesFromThisUser, 0, { "style": { 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: 'black' } }), createVNode$2(1, "p", null, dbUser.absoluteLastSentMessageType.type, 0, { "style": { 'font-size': '1rem', 'padding-top': '1.2rem', 'padding-bottom': '1.2rem', 'padding-left': '0.4rem', 'margin-right': '0.4rem', 'background': dbUser.absoluteLastSentMessageType.colour, 'color': 'black' } }), otherUserMessages.length > 0 && (createVNode$2(1, "div", null, otherUserMessages.map(function (message) { return (createVNode$2(1, "p", null, [message.message, createTextVNode$2(" | "), message.order], 0, { "style": { 'font-size': '1rem', 'padding-top': '1.2rem', 'padding-bottom': '1.2rem', 'padding-left': '0.4rem', 'margin-right': '0.4rem', 'border': '1px solid black' } })); }), 0))], 0));
    };

    var createComponentVNode$2 = createComponentVNode;
    // messageInboxScriptPre.tsx
    var generateReplyMessageList = function (pageMessages) { return (__spreadArrays(pageMessages).map(function (containerDiv) {
        var subjectTag = containerDiv.children[1];
        var subjectReplyToTitle = subjectTag.children[0].innerText;
        var subject;
        if (subjectTag.children.length === 1 && !subjectReplyToTitle.includes('re:')) {
            subject = subjectReplyToTitle;
        }
        else {
            subject = subjectReplyToTitle + ' (no subject/reply)';
        }
        if (subjectTag.children.length === 2) {
            subject = subjectTag.children[1].innerText;
        }
        var entry = containerDiv.children[4];
        var headerTag = entry.children[0].children[1];
        var recipient = headerTag.children[0].innerText;
        var dateTag = headerTag.children[1];
        var date = dateTag.attributes.length === 3 ? dateTag.attributes[1].nodeValue : undefined;
        var message = entry.children[1].children[0].innerText;
        return {
            containerDiv: containerDiv,
            subject: subject,
            subjectReplyToTitle: subjectReplyToTitle,
            username_receiving: 'NeverFapDeluxe',
            username_sending: recipient,
            message: message,
            date: date,
            type: SendMessageType.UserReplyCustom,
            forum_type: UserForumType.Reddit
        };
    })); };
    var filterReplyMessageList = function (messageList) { return messageList.filter(function (message) { return message.date &&
        !message.subjectReplyToTitle.includes("Tips to") &&
        !message.subjectReplyToTitle.includes("Tips for") &&
        !message.subjectReplyToTitle.includes("comment reply") &&
        !message.subjectReplyToTitle.includes("post reply") &&
        !message.subjectReplyToTitle.includes("Welcome to") &&
        !message.subjectReplyToTitle.includes("Snoosletter"); }); };
    var retrieveUserResponseType = function (NFDResponseTypeString) {
        switch (NFDResponseTypeString) {
            case 'start': return SendMessageType.UserReplyStart;
            case 'middle': return SendMessageType.UserReplyMiddle;
            case 'final': return SendMessageType.UserReplyFinal;
            case 'follow': return SendMessageType.UserReplyFollow;
            default: return SendMessageType.UserReplyCustom;
        }
    };
    var compileReplyMessageList = function (filteredMessageList) { return __awaiter(void 0, void 0, void 0, function () {
        var finalMessageList, _loop_1, _i, filteredMessageList_1, item;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    finalMessageList = [];
                    _loop_1 = function (item) {
                        var compiledUser, isUserLastMessagedUser, otherUserMessages, NFDResponseTypeString, userResponseType, numberOfMessagesFromThisUser, updatedItem, updatedCompiledUser;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, latestUnreadMessagesInformation({ username: item.username_sending, forum_type: UserForumType.Reddit })];
                                case 1:
                                    compiledUser = _a.sent();
                                    isUserLastMessagedUser = INBOX_LAST_MESSAGE_USER === compiledUser.username;
                                    otherUserMessages = filteredMessageList
                                        .filter(function (messageItem) { return messageItem.username_sending === compiledUser.username && messageItem.message !== item.message; })
                                        .reduce(function (acc, messageItem, index) {
                                        var itemIndex = filteredMessageList.findIndex(function (innerItem) { return innerItem.message === item.message; });
                                        var filterItemIndex = filteredMessageList.findIndex(function (innerItem) { return innerItem.message === messageItem.message; });
                                        var order = itemIndex < filterItemIndex ? 'below' : 'above';
                                        return acc.concat({
                                            order: order,
                                            message: messageItem.message
                                        });
                                    }, []);
                                    NFDResponseTypeString = (_b = (_a = compiledUser === null || compiledUser === void 0 ? void 0 : compiledUser.lastSentMessage) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.split(':')[0];
                                    userResponseType = retrieveUserResponseType(NFDResponseTypeString);
                                    numberOfMessagesFromThisUser = filteredMessageList.filter(function (item) { return item.username_sending === compiledUser.username; }).length;
                                    updatedItem = __assign(__assign({}, item), { type: userResponseType });
                                    return [4 /*yield*/, populateReceivedMessage({ message: updatedItem })];
                                case 2:
                                    updatedCompiledUser = _a.sent();
                                    finalMessageList.push(__assign(__assign({}, updatedItem), { compiledUser: updatedCompiledUser, isUserLastMessagedUser: isUserLastMessagedUser,
                                        otherUserMessages: otherUserMessages,
                                        numberOfMessagesFromThisUser: numberOfMessagesFromThisUser }));
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, filteredMessageList_1 = filteredMessageList;
                    _c.label = 1;
                case 1:
                    if (!(_i < filteredMessageList_1.length)) return [3 /*break*/, 4];
                    item = filteredMessageList_1[_i];
                    return [5 /*yield**/, _loop_1(item)];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, finalMessageList];
            }
        });
    }); };
    var messageInboxAutomatedMessageSend = function (item, messageText, messageType) { return __awaiter(void 0, void 0, void 0, function () {
        var replyDelay, replyDelayNumber;
        return __generator(this, function (_a) {
            replyDelay = localStorage.getItem('replyDelay');
            replyDelayNumber = Number(replyDelay);
            localStorage.setItem('replyDelay', (replyDelayNumber + 1100).toString());
            setTimeout(function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("send automatically - " + item.compiledUser.username + " - " + messageType + " - delay: " + replyDelayNumber);
                                return [4 /*yield*/, populateMessageAndSend(messageText, item, item.containerDiv, item.compiledUser.username, messageType, true)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            }, replyDelayNumber);
            return [2 /*return*/];
        });
    }); };
    var renderReplyUserPanel = function (item, documentSub, counter) {
        var _a;
        console.log("no match - " + item.compiledUser.username);
        var rootId = "r" + item.username_sending + "-" + counter;
        if (!rootId.includes('[')) {
            var root = document.createElement('div');
            root.id = rootId;
            (_a = item.containerDiv.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(root, item.containerDiv);
            var domContainer = documentSub.querySelector("#" + rootId);
            if (domContainer) {
                render(createComponentVNode$2(2, ReplyUserPanel, { "dbUser": item.compiledUser, "forum_type": UserForumType.Reddit, "previousMessageInformation": item, "otherUserMessages": item.otherUserMessages, "numberOfMessagesFromThisUser": item.numberOfMessagesFromThisUser, "isUserLastMessagedUser": item.isUserLastMessagedUser, "containerDiv": item.containerDiv }), domContainer);
            }
        }
    };

    var iFrame = document.querySelector('iframe');
    var saveNewUnreadPageMessages = function (pageMessages, documentSub) { return __awaiter(void 0, void 0, void 0, function () {
        var messageList, filteredMessageList, finalMessageList, counter, _loop_1, _i, finalMessageList_1, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    messageList = generateReplyMessageList(pageMessages);
                    filteredMessageList = filterReplyMessageList(messageList);
                    return [4 /*yield*/, compileReplyMessageList(filteredMessageList)];
                case 1:
                    finalMessageList = _a.sent();
                    console.log('finalMessageList', finalMessageList);
                    counter = 0;
                    _loop_1 = function (item) {
                        var moreThanOneMessage, _a, messageText, messageType;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    moreThanOneMessage = finalMessageList.filter(function (msgItem) { return msgItem.username_sending === item.username_sending; }).length > 1;
                                    _a = toInboxFilter(item, moreThanOneMessage), messageText = _a.messageText, messageType = _a.messageType;
                                    if (!(messageText && messageType)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, messageInboxAutomatedMessageSend(item, messageText, messageType)];
                                case 1:
                                    _b.sent();
                                    _b.label = 2;
                                case 2:
                                    if (!messageText && !messageType) {
                                        counter += 1;
                                        renderReplyUserPanel(item, documentSub, counter);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, finalMessageList_1 = finalMessageList;
                    _a.label = 2;
                case 2:
                    if (!(_i < finalMessageList_1.length)) return [3 /*break*/, 5];
                    item = finalMessageList_1[_i];
                    return [5 /*yield**/, _loop_1(item)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var main = function () { return __awaiter(void 0, void 0, void 0, function () {
        var mainLogic;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mainLogic = function (documentSub, windowSub) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            console.log('START: preparing page');
                            localStorage.setItem('replyDelay', '1100');
                            setTimeout(function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var pageMessages;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                pageMessages = documentSub.querySelectorAll('.message');
                                                if (!pageMessages) return [3 /*break*/, 2];
                                                return [4 /*yield*/, saveNewUnreadPageMessages(pageMessages, documentSub)];
                                            case 1:
                                                _a.sent();
                                                windowSub.scrollTo(0, 0);
                                                // click button to next page
                                                // iFrame.contentWindow.document.querySelector('.next-button').children[0].click();
                                                console.log('END: next page');
                                                _a.label = 2;
                                            case 2: return [2 /*return*/];
                                        }
                                    });
                                });
                            }, 400);
                            return [2 /*return*/];
                        });
                    }); };
                    if (!(iFrame && !window.location.search.includes('count'))) return [3 /*break*/, 1];
                    if (!window.location.search.includes('true')) {
                        console.log('In iFrame');
                        iFrame.addEventListener("load", function () {
                            var _a;
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, mainLogic((_a = iFrame === null || iFrame === void 0 ? void 0 : iFrame.contentWindow) === null || _a === void 0 ? void 0 : _a.document, iFrame === null || iFrame === void 0 ? void 0 : iFrame.contentWindow)];
                                        case 1:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                    }
                    return [3 /*break*/, 3];
                case 1:
                    console.log('Not in iFrame');
                    return [4 /*yield*/, mainLogic(document, window)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    main();

}());
