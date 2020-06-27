(function () {
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
	exports.sendPostRequest = void 0;

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
	exports.sendPostRequest = function (dataPayload, urlEndpoint) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	    var response, json, error_1;
	    return tslib_1.__generator(this, function (_a) {
	        switch (_a.label) {
	            case 0:
	                _a.trys.push([0, 3, , 4]);
	                return [4 /*yield*/, fetch("http://localhost:3333" + urlEndpoint, HTTPPOSToptions(dataPayload))];
	            case 1:
	                response = _a.sent();
	                return [4 /*yield*/, response.json()];
	            case 2:
	                json = _a.sent();
	                return [2 /*return*/, json];
	            case 3:
	                error_1 = _a.sent();
	                console.log('Server not started.');
	                throw new Error(urlEndpoint + " - " + error_1);
	            case 4: return [2 /*return*/];
	        }
	    });
	}); };

	});

	// and here I am at 250+ days. What's hard is convincing people to do it though, myself included. I resisted for years, but the moment I started doing it, I felt like such an idiot for being so stubborn haha.
	// Meditation also isn't effective if it's not consistent. It's a bit like dieting. You can't just diet for a week, and then splurge afterwards. It's about creating that lifestyle of balance and developing a mental health routine which allows you to develop control over your mind. So definitely it's something you should be doing daily.

	var start = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var start_1 = getCjsExportFromNamespace(start);

	var createNodes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.appendUserInformation = void 0;

	var createNode = function (text, color) {
	    var node = document.createElement('span');
	    node.style.color = color || 'black';
	    node.style.fontSize = '20px';
	    var textnode = document.createTextNode(text + ' '); // Create a text node
	    node.appendChild(textnode);
	    return node;
	};
	// function submitForm() {
	//   var http = new XMLHttpRequest();
	//   http.open("POST", "<<whereverTheFormIsGoing>>", true);
	//   http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//   var params = "search=" + <<get search value>>; // probably use document.getElementById(...).value
	//   http.send(params);
	//   http.onload = function() {
	//       alert(http.responseText);
	//   }
	// }
	// const createOneFieldForm = (buttonClickSubmit) => {
	//   var formElement = document.createElement("form");
	//   formElement.setAttribute('method',"post");
	//   formElement.setAttribute('action',"http://localhost:3333/sendUserNote");
	//   var inputUserNote = document.createElement("input"); //input element, text
	//   inputUserNote.setAttribute('type',"text");
	//   inputUserNote.setAttribute('name',"user_note");
	//   inputUserNote.style.border = '1px solid black';
	//   var submitButton = document.createElement('input');
	//   submitButton.setAttribute('type', 'submit');
	//   submitButton.setAttribute('value', 'Send Note');
	//   submitButton.style.border = '1px solid black';
	//   submitButton.addEventListener('click', buttonClickSubmit);
	//   formElement.appendChild(inputUserNote);
	//   formElement.appendChild(submitButton);
	//   return formElement;
	// }
	var createStartMessageLinkNode = function (name, color, username, message) {
	    var node = document.createElement('a');
	    var url = "https://www.reddit.com/message/compose/?to=" + username + "&subject=Hey&message=" + message + "&type=" + name;
	    node.href = url;
	    node.style.color = color || 'black';
	    node.style.fontSize = '16px';
	    node.style.marginTop = '0.8rem';
	    node.style.marginBottom = '0.8rem';
	    node.style.marginLeft = '0.3rem';
	    node.style.marginRight = '0.3rem';
	    node.style.display = 'inline-block'; //
	    node.target = "_blank";
	    var textnode = document.createTextNode(name + ' '); // Create a text node
	    node.appendChild(textnode);
	    return node;
	};
	// const createMiddleMessageLinkNode = (name, color, username, message, key) => {
	//   const node = document.createElement('div');
	//   node.style.color = color || 'black';
	//   node.style.fontSize = '16px';
	//   node.style.marginTop = '0.3rem';
	//   node.style.marginBottom = '0.3rem';
	//   node.style.marginLeft = '0.3rem';
	//   node.style.marginRight = '0.3rem';
	//   // node.target = "_blank"
	//   var textnode = document.createTextNode(name + ' ');         // Create a text node
	//   node.appendChild(textnode);
	//   return node;
	// }
	exports.appendUserInformation = function (tag, dbUser) {
	    tag.innerText = '';
	    tag.style.marginTop = '1rem';
	    tag.style.marginBottom = '1rem';
	    tag.style.marginLeft = '1rem';
	    tag.style.marginRight = '1rem';
	    // tag.appendChild()
	    tag.appendChild(createNode(dbUser.username, dbUser.userColor));
	    tag.appendChild(createNode("Type: " + dbUser.userType, dbUser.userColor));
	    tag.appendChild(createNode("Sent: " + dbUser.sentCount, 'blue'));
	    // const lastSentTextcontainer = document.createElement('div');
	    // var textnode = document.createTextNode(dbUser.lastSentMessage); // Create a text node
	    // lastSentTextcontainer.appendChild(textnode);
	    var container = document.createElement('div');
	    container.style.marginTop = '1rem';
	    container.style.marginBottom = '1rem';
	    container.style.cursor = 'default';
	    // container.appendChild(createOneFieldForm(() => sendUserNoteHTTP()))
	    container.appendChild(createStartMessageLinkNode('customMessage', 'purple', dbUser.username, ''));
	    container.appendChild(createStartMessageLinkNode('straightToGuide', 'purple', dbUser.username, start_1.straightToGuide));
	    container.appendChild(createStartMessageLinkNode('startAdvice', 'purple', dbUser.username, start_1.startAdvice));
	    container.appendChild(createStartMessageLinkNode('generalAdvice', 'purple', dbUser.username, start_1.generalAdvice));
	    container.appendChild(createStartMessageLinkNode('mentalhealthNotExerciseAdvice', 'purple', dbUser.username, start_1.mentalhealthNotExerciseAdvice));
	    container.appendChild(createStartMessageLinkNode('amIAddictedAdvice', 'purple', dbUser.username, start_1.amIAddictedAdvice));
	    container.appendChild(createStartMessageLinkNode('flatlineAdvice', 'purple', dbUser.username, start_1.flatlineAdvice));
	    container.appendChild(createStartMessageLinkNode('struggleBasics', 'purple', dbUser.username, start_1.struggleBasics));
	    container.appendChild(createStartMessageLinkNode('biggestDifference', 'purple', dbUser.username, start_1.biggestDifference));
	    container.appendChild(createStartMessageLinkNode('noReasonToRelapse', 'purple', dbUser.username, start_1.noReasonToRelapse));
	    container.appendChild(createStartMessageLinkNode('accountabilityPartner', 'purple', dbUser.username, start_1.accountabilityPartner));
	    container.appendChild(createStartMessageLinkNode('sorryToHearYouRelapsed', 'purple', dbUser.username, start_1.sorryToHearYouRelapsed));
	    // tag.parentNode.insertBefore(lastSentTextcontainer, container);
	    tag.parentNode.insertBefore(container, tag.nextSibling);
	};
	// NOTE: This is not possible, because there are hundreds of these on a page and only one key.
	// document.addEventListener('keypress', function(event) {
	//   if (event.key === key) {
	//     window.open(url, '_blank');
	//     window.focus();
	//   }
	// })

	});

	var noFapNewSubredditPre = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var TIMEFRAME = '1 hour ago';
	// const TIMEFRAME = '2 hours ago'; //
	// const TIMEFRAME = '1 day ago';
	// const TIMEFRAME = '2 days ago';
	var scrollToSpecifiedDate = function (dateString) { return new Promise(function (resolve) {
	    var interval;
	    interval = setInterval(function () {
	        window.scrollTo(0, document.body.scrollHeight);
	        var allTimeStamps = document.querySelectorAll('a[data-click-id="timestamp"]');
	        for (var _i = 0, _a = allTimeStamps; _i < _a.length; _i++) {
	            var timeStampElement = _a[_i];
	            var doesTextContainDate = timeStampElement.innerText.includes(dateString);
	            if (doesTextContainDate) {
	                console.log('Complete: date reached');
	                clearInterval(interval);
	                resolve('Complete: date reached');
	            }
	            else {
	                timeStampElement.remove();
	            }
	        }
	    }, 500);
	}); };
	var getAllUsernames = function () {
	    var allATags = document.querySelectorAll('a');
	    var filteredATags = tslib_1.__spreadArrays(allATags).filter(function (tag) { return tag.innerText.includes('u/'); });
	    var usernames = filteredATags.map(function (tag) { return tag.innerText.split('/')[1]; });
	    return usernames;
	};
	var populateWebpageInformation = function (users) {
	    var allATags = document.querySelectorAll('a');
	    var filteredATags = tslib_1.__spreadArrays(allATags).filter(function (tag) { return tag.innerText.includes('u/'); });
	    filteredATags.forEach(function (tag) {
	        var tagUsername = tag.innerText.split('/')[1];
	        var dbUser = users.find(function (user) { return user.username === tagUsername; });
	        if (dbUser) {
	            createNodes.appendUserInformation(tag, dbUser);
	        }
	    });
	};
	var main = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	    var textUsernames, dataPayload, usernamesResponse, users;
	    return tslib_1.__generator(this, function (_a) {
	        switch (_a.label) {
	            case 0:
	                console.log('START: start script');
	                return [4 /*yield*/, scrollToSpecifiedDate(TIMEFRAME)];
	            case 1:
	                _a.sent();
	                textUsernames = getAllUsernames();
	                dataPayload = { usernames: textUsernames };
	                return [4 /*yield*/, httpResponses.sendPostRequest(dataPayload, '/checkUsernames')];
	            case 2:
	                usernamesResponse = _a.sent();
	                users = usernamesResponse.data.users;
	                populateWebpageInformation(users);
	                console.log('END: script complete');
	                return [2 /*return*/];
	        }
	    });
	}); };
	main();

	});

	var noFapNewSubredditPre$1 = /*@__PURE__*/unwrapExports(noFapNewSubredditPre);

	return noFapNewSubredditPre$1;

}());
