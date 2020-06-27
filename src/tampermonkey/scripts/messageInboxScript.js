this.messageInboxScript = this.messageInboxScript || {};
this.messageInboxScript.js = (function () {
	'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

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

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}

	function __param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	}

	function __metadata(metadataKey, metadataValue) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	}

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

	var __createBinding = Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	});

	function __exportStar(m, exports) {
	    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
	}

	function __values(o) {
	    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	    if (m) return m.call(o);
	    if (o && typeof o.length === "number") return {
	        next: function () {
	            if (o && i >= o.length) o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}

	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}

	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}

	function __spreadArrays() {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	}
	function __await(v) {
	    return this instanceof __await ? (this.v = v, this) : new __await(v);
	}

	function __asyncGenerator(thisArg, _arguments, generator) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var g = generator.apply(thisArg, _arguments || []), i, q = [];
	    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
	    function fulfill(value) { resume("next", value); }
	    function reject(value) { resume("throw", value); }
	    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	}

	function __asyncDelegator(o) {
	    var i, p;
	    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	}

	function __asyncValues(o) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var m = o[Symbol.asyncIterator], i;
	    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
	}

	function __makeTemplateObject(cooked, raw) {
	    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	    return cooked;
	}
	var __setModuleDefault = Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	};

	function __importStar(mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	}

	function __importDefault(mod) {
	    return (mod && mod.__esModule) ? mod : { default: mod };
	}

	function __classPrivateFieldGet(receiver, privateMap) {
	    if (!privateMap.has(receiver)) {
	        throw new TypeError("attempted to get private field on non-instance");
	    }
	    return privateMap.get(receiver);
	}

	function __classPrivateFieldSet(receiver, privateMap, value) {
	    if (!privateMap.has(receiver)) {
	        throw new TypeError("attempted to set private field on non-instance");
	    }
	    privateMap.set(receiver, value);
	    return value;
	}

	var tslib_es6 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		__extends: __extends,
		get __assign () { return __assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__createBinding: __createBinding,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__spreadArrays: __spreadArrays,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault,
		__classPrivateFieldGet: __classPrivateFieldGet,
		__classPrivateFieldSet: __classPrivateFieldSet
	});

	var tslib_1 = getCjsExportFromNamespace(tslib_es6);

	var httpResponses = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sendNewMessage = exports.populateReceivedMessages = exports.checkUsernamesFetch = void 0;

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
	var sendPostRequest = function (dataPayload, urlEndpoint) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	    var response, JSONResponse, error_1;
	    return tslib_1.__generator(this, function (_a) {
	        switch (_a.label) {
	            case 0:
	                _a.trys.push([0, 3, , 4]);
	                return [4 /*yield*/, fetch("http://localhost:3333" + urlEndpoint, HTTPPOSToptions(dataPayload))];
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
	exports.checkUsernamesFetch = function (dataPayload) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	    var JSONResponse;
	    return tslib_1.__generator(this, function (_a) {
	        switch (_a.label) {
	            case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/checkUsernames')];
	            case 1:
	                JSONResponse = _a.sent();
	                return [2 /*return*/, JSONResponse.data.users];
	        }
	    });
	}); };
	exports.populateReceivedMessages = function (dataPayload) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	    var JSONResponse;
	    return tslib_1.__generator(this, function (_a) {
	        switch (_a.label) {
	            case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/populateReceivedMessages')];
	            case 1:
	                JSONResponse = _a.sent();
	                return [2 /*return*/, JSONResponse.data.message]; // basically a success message.
	        }
	    });
	}); };
	exports.sendNewMessage = function (dataPayload) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	    var JSONResponse;
	    return tslib_1.__generator(this, function (_a) {
	        switch (_a.label) {
	            case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/sendNewMessage')];
	            case 1:
	                JSONResponse = _a.sent();
	                return [2 /*return*/, JSONResponse.data.users];
	        }
	    });
	}); };

	});

	var messageInboxScriptPre = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var iFrame = document.querySelector('iframe');
	var generateMessageList = function (pageMessages) { return (tslib_1.__spreadArrays(pageMessages).map(function (containerDiv) {
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
	        subject: subject,
	        subjectReplyToTitle: subjectReplyToTitle,
	        recipient: recipient,
	        message: message,
	        date: date,
	    };
	})); };
	var getPageMessages = function (pageMessages) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	    var messageList, filteredMessageList, dataPayload;
	    return tslib_1.__generator(this, function (_a) {
	        switch (_a.label) {
	            case 0:
	                messageList = generateMessageList(pageMessages);
	                filteredMessageList = messageList.filter(function (message) { return message.date &&
	                    !message.subjectReplyToTitle.includes("Tips to") &&
	                    !message.subjectReplyToTitle.includes("Tips for") &&
	                    !message.subjectReplyToTitle.includes("comment reply") &&
	                    !message.subjectReplyToTitle.includes("post reply") &&
	                    !message.subjectReplyToTitle.includes("Welcome to") &&
	                    !message.subjectReplyToTitle.includes("Snoosletter"); });
	                console.log('filteredMessageList', filteredMessageList);
	                dataPayload = { messages: filteredMessageList };
	                return [4 /*yield*/, httpResponses.populateReceivedMessages(dataPayload)];
	            case 1:
	                _a.sent();
	                return [2 /*return*/];
	        }
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
	var populatePageMessages = function (pageMessages) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	    return tslib_1.__generator(this, function (_a) {
	        tslib_1.__spreadArrays(pageMessages).map(function (containerDiv) {
	            var entry = containerDiv.children[4];
	            var replyLink = getReplyLink(entry);
	            if (replyLink) {
	                var replyALink = replyLink.children[0];
	                console.log(replyALink);
	                replyALink.click();
	            }
	        });
	        return [2 /*return*/];
	    });
	}); };
	// const populateMessagePanel = async (pageMessages) => {
	//   [...pageMessages].map(containerDiv => {
	//     const child = containerDiv.children[5];
	//     const messagePanel = document.createElement('div');
	//     messagePanel.appendChild(createMiddleMessageLinkNode())
	//     child.parentNode.insertBefore(, child);
	//     if (replyLink) {
	//       const replyALink = replyLink.children[0];
	//       console.log(replyALink);
	//       replyALink.click();
	//     }
	//   });
	// };
	var main = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	    var mainLogic;
	    return tslib_1.__generator(this, function (_a) {
	        switch (_a.label) {
	            case 0:
	                mainLogic = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	                    var pageMessages;
	                    var _a;
	                    return tslib_1.__generator(this, function (_b) {
	                        switch (_b.label) {
	                            case 0:
	                                console.log('START: preparing page');
	                                pageMessages = (_a = iFrame === null || iFrame === void 0 ? void 0 : iFrame.contentWindow) === null || _a === void 0 ? void 0 : _a.document.querySelectorAll('.message');
	                                if (!pageMessages) return [3 /*break*/, 3];
	                                return [4 /*yield*/, getPageMessages(pageMessages)];
	                            case 1:
	                                _b.sent();
	                                return [4 /*yield*/, populatePageMessages(pageMessages)];
	                            case 2:
	                                _b.sent();
	                                // await populateMessagePanel(pageMessages);
	                                window.scrollTo(0, 0);
	                                // iFrame.contentWindow.document.querySelector('.next-button').children[0].click();
	                                // document.querySelector('.next-button').children[0].click();
	                                console.log('END: next page');
	                                _b.label = 3;
	                            case 3: return [2 /*return*/];
	                        }
	                    });
	                }); };
	                if (!(iFrame && !window.location.search.includes('count'))) return [3 /*break*/, 1];
	                if (!window.location.search.includes('true')) {
	                    iFrame.addEventListener("load", function () {
	                        return tslib_1.__awaiter(this, void 0, void 0, function () {
	                            return tslib_1.__generator(this, function (_a) {
	                                switch (_a.label) {
	                                    case 0: return [4 /*yield*/, mainLogic()];
	                                    case 1:
	                                        _a.sent();
	                                        return [2 /*return*/];
	                                }
	                            });
	                        });
	                    });
	                }
	                return [3 /*break*/, 3];
	            case 1: return [4 /*yield*/, mainLogic()];
	            case 2:
	                _a.sent();
	                _a.label = 3;
	            case 3: return [2 /*return*/];
	        }
	    });
	}); };
	main();

	});

	var messageInboxScriptPre$1 = /*@__PURE__*/unwrapExports(messageInboxScriptPre);

	return messageInboxScriptPre$1;

}());
