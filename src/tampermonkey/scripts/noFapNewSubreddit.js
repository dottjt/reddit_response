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
    var checkUsernames = function (dataPayload) { return __awaiter(void 0, void 0, void 0, function () {
        var JSONResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/checkUsernames', '3333')];
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
    var setMarker = function (dataPayload) { return __awaiter(void 0, void 0, void 0, function () {
        var JSONResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPostRequest(dataPayload, '/setMarker', '3333')];
                case 1:
                    JSONResponse = _a.sent();
                    return [2 /*return*/, JSONResponse.data.message];
            }
        });
    }); };
    var checkServerRunning = function () { return __awaiter(void 0, void 0, void 0, function () {
        var JSONResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPostRequest({}, '/checkServerRunning', '3333')];
                case 1:
                    JSONResponse = _a.sent();
                    return [2 /*return*/, JSONResponse.data.isRunning];
            }
        });
    }); };

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

    var startAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". It's great to see you've started!\n\nUltimately recovery is about focusing on your mental health. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Of course, that's a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var startAgainAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". It's great to see you're starting again!\n\nUltimately recovery is about focusing on your mental health. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Of course, that's a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var generalAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nUltimately recovery is about focusing on your mental health. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Of course, that's a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var relapseAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". I'm sorry to hear you relapsed.\n\nUltimately recovery is about focusing on your mental health. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Of course, that's a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var struggleAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". I'm sorry to hear you're struggling.\n\nUltimately recovery is about focusing on your mental health. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Of course, that's a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var flatlineAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nThe main thing with flatline is to focus on the process. Emotions and feelings come and go, but the process always remains the same. This means focusing on your mental health, because all those things you're feeling like low energy and low motivation are merely symptoms, not the cause of the problem.\n\nWhat's your mental health routine look like? Do you meditate daily? I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var wetdreamAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". While wet dreams don't count as relapse, they're best avoided and can be completely mitigated by developing control over your mind.\n\nUltimately recovery is about focusing on your mental health. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Of course, that's a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var ageAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". If it helps I started getting into porn when I was 10, only recently recovered at 25. Now 27.\n\nUltimately recovery is about focusing on your mental health. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Of course, that's a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var pornBlockersAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". Porn blockers don't work because they only address the symptom, not the cause which is having a lack of control over your mind.\n\nUltimately recovery is about focusing on your mental health. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Of course, that's a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var isWatchingPornRelapseAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". Watching porn is not okay, because that's the thing you're primarily addicted to. Not the masturbation.\n\nUltimately recovery is about focusing on your mental health. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Of course, that's a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var noReasonToRelapseAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nThere is literally never any reason to masturbate or watch porn, ever. The only reason why you would have a desire to do it is because you've lost balance over your mind.\n\nUltimately recovery is about focusing on your mental health. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Of course, that's a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var accountabilityPartner = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nHappy to be your accountability partner! My name is Julius. I also run an accountability program on Discord (https://discord.com/invite/YETRkSj) and on Reddit (https://www.reddit.com/r/NeverFapDeluxe/) if you're interested in receiving help from others as well.\n"); };
    var partnerAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nIf it helps, I've written a guide to overcoming porn addiction which may help them? It may also help you understand the dynamics of porn addiction as well.\n\nI started watching porn when I was 10, recovered by 25, now 27. So it's definitely something that can be addressed successfully if you focus on your mental health and remain consistent with the process. Now I honestly don't think about porn or masturbation at all.\n"); };
    var masturbateWithoutPornAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nWhile there's nothing inherently wrong with masturbation itself, what I will say is that it makes the process of recovery so much more difficult than it needs to be.\n\nIn most cases it's a trigger to watch porn and orgasm itself also makes it really hard to maintain clarity during recovery. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var biggestBenefitPostAddictionAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nPossibly the biggest benefit for me is simply not having to think about porn/masturbation at all. The amount of time saved daily that I can spend on other things is tremendous. Not to mention the cost my addiction had on my mental health, as well as on my ability to concentrate and actually get stuff done.\n\nJust having the mental clarity that I have now is alone worth it for me. It's like I can be fully consistent with my ambitiosn and endeavours without crashing at all. If you'd like to learn more, I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var dealingWithUrgesAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". If you're struggling with urges then it might help to revise the fundamentals, because with sufficient mental balance you shouldn't be having any urges at all. Period.\n\nUltimately recovery is about mental balance. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Which is a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    // If you have to ask, then generally yes. Although
    var didIJustRelapseAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". Although not necessarily a relapse, indicates that you don't quite have control over your mind.\n\nUltimately recovery is about focusing on your mental health. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Of course, that's a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var whenDoesItGetEasierAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". Ultimately it gets easier once you learn to develop control over your mind, which comes from daily mental health practice.\n\nUltimately recovery is about focusing on your mental health. Fundamentally it's about developing the awareness to change your behaviours so you can have control over your mind. Of course, that's a lot easier said than done which is why it requires consistent practice.\n\nDo you have a mental health routine? Have you tried meditation? Personally I do 10 minutes of meditation before bed each day and that does the trick for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };

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
    var isLessThan24Hours = function (date) {
        var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return false;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return false;
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return false;
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return true;
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return true;
        }
        return true;
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
    var SetMarkerButton = function (_a) {
        var username = _a.username, usernameConfig = _a.usernameConfig, hoursAgoText = _a.hoursAgoText;
        return (createVNode$1(1, "button", null, "Set Marker", 16, { "style": { border: '1px solid black', 'margin-right': '0.4rem' }, "onclick": function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, setMarker({ username: username, usernameConfig: usernameConfig, hoursAgoText: hoursAgoText })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); } }));
    };

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
    var fakeConfigType = {
        usernameValue: 'NA',
        usernameTimestamp: 'NA',
        forumType: ForumType.rNofapForum,
    };
    var R_NOFAP_USERNAME = 'OllieOul';
    var R_NOFAP_TIMESTAMP = '2 hours ago';
    var R_PORN_FREE_USERNAME = 'puff_mcgruff';
    var R_PORN_FREE_TIMESTAMP = '1 hour ago';
    var R_PORN_ADDICTION_USERNAME = 'Deanfare129';
    var R_PORN_ADDICTION_TIMESTAMP = '2 hours ago';
    var R_NOFAP_CHRISTIANS_USERNAME = '';
    var R_NOFAP_CHRISTIANS_TIMESTAMP = '';
    var R_NOFAP_TEENS_USERNAME = '';
    var R_NOFAP_TEENS_TIMESTAMP = '';
    var R_SEMEN_RETENTION_USERNAME = '';
    var R_SEMEN_RETENTION_TIMESTAMP = '';
    var R_MUSLIM_NOFAP_USERNAME = '';
    var R_MUSLIM_NOFAP_TIMESTAMP = '';
    var TIMEFRAME = 'NA';
    // export const TIMEFRAME = '1 hour ago';
    // export const TIMEFRAME = '2 hours ago';
    // export const TIMEFRAME = '3 hours ago';
    // export const TIMEFRAME = '4 hours ago';
    // export const TIMEFRAME = '5 hours ago';
    // export const TIMEFRAME = '6 hours ago';
    // export const TIMEFRAME = '7 hours ago';
    // export const TIMEFRAME = '8 hours ago';
    // export const TIMEFRAME = '9 hours ago';
    // export const TIMEFRAME = '10 hours ago';
    // export const TIMEFRAME = '11 hours ago';
    // export const TIMEFRAME = '12 hours ago';
    // export const TIMEFRAME = '13 hours ago';
    // export const TIMEFRAME = '14 hours ago';
    // export const TIMEFRAME = '15 hours ago';
    var getUsernameMarker = function (location) {
        if (location.pathname.toLowerCase().includes('/nofap/new')) {
            return {
                usernameValue: R_NOFAP_USERNAME,
                usernameTimestamp: R_NOFAP_TIMESTAMP,
                forumType: ForumType.rNofapForum
            };
        }
        if (location.pathname.toLowerCase().includes('/pornfree/new')) {
            return {
                usernameValue: R_PORN_FREE_USERNAME,
                usernameTimestamp: R_PORN_FREE_TIMESTAMP,
                forumType: ForumType.rPornFreeForum
            };
        }
        if (location.pathname.toLowerCase().includes('/pornaddiction/new')) {
            return {
                usernameValue: R_PORN_ADDICTION_USERNAME,
                usernameTimestamp: R_PORN_ADDICTION_TIMESTAMP,
                forumType: ForumType.rPornAddictionForum
            };
        }
        if (location.pathname.toLowerCase().includes('/nofapchristians/new')) {
            return {
                usernameValue: R_NOFAP_CHRISTIANS_USERNAME,
                usernameTimestamp: R_NOFAP_CHRISTIANS_TIMESTAMP,
                forumType: ForumType.rNofapChristiansForum
            };
        }
        if (location.pathname.toLowerCase().includes('/nofapteens/new')) {
            return {
                usernameValue: R_NOFAP_TEENS_USERNAME,
                usernameTimestamp: R_NOFAP_TEENS_TIMESTAMP,
                forumType: ForumType.rNofapTeensForum
            };
        }
        if (location.pathname.toLowerCase().includes('/semenretention/new')) {
            return {
                usernameValue: R_SEMEN_RETENTION_USERNAME,
                usernameTimestamp: R_SEMEN_RETENTION_TIMESTAMP,
                forumType: ForumType.rSemenRetentionForum
            };
        }
        if (location.pathname.toLowerCase().includes('/muslimnofap/new')) {
            return {
                usernameValue: R_MUSLIM_NOFAP_USERNAME,
                usernameTimestamp: R_MUSLIM_NOFAP_TIMESTAMP,
                forumType: ForumType.rMuslimNofapForum
            };
        }
        // // NO FAP forumns
        // if (location.pathname.toLowerCase().includes('index.php')) {
        //   if (location.search.includes('self-improvement')) {
        //     //
        //   }
        // }
        return {
            usernameValue: '',
            usernameTimestamp: '',
            forumType: ForumType.rNofapForum
        };
    };

    var createVNode$2 = createVNode;
    var insert = function (arr, index, newItem) { return __spreadArrays(arr.slice(0, index), [
        newItem
    ], arr.slice(index)); };
    var flatten = function (arr) { return arr.reduce(function (flat, next) { return flat.concat(next); }, []); };
    var stepOneFindAllMatches = function (relevantText, matchesArray) {
        var splitArray = matchesArray.reduce(function (acc, valueAndRegex) {
            var newSplitArray = acc.splitArray.map(function (textObj) {
                // TODO I don't think this logic is right.
                var splitTextArray = textObj.text.split(valueAndRegex.value).map(function (mapText) {
                    var isTrue = acc.splitArray.find(function (item) { return item.isMatch === true && item.text === mapText; });
                    return ({ text: mapText, isMatch: isTrue ? true : false });
                });
                if (splitTextArray.length === 1)
                    return splitTextArray;
                var finalSplitArray = insert(splitTextArray, 1, { text: valueAndRegex.value, isMatch: true });
                return finalSplitArray;
            });
            return { splitArray: flatten(newSplitArray) };
        }, { splitArray: [{ text: relevantText, isMatch: false }] }).splitArray;
        return splitArray;
    };
    var stepTwoTrimArray = function (splitArray, relevantKey) {
        //     if (Boolean(splitArray[0])) {
        //       const firstPartOfSentence: string[] = splitArray[0].split('.').filter(p => p)
        //       if (firstPartOfSentence.length > 0) {
        //         const firstText = firstPartOfSentence[firstPartOfSentence.length - 1];
        //         splitArray[0] = firstText;
        //       }
        //     } // it would be good to split it to the nearest .
        // I imagine it would have to be come kind of complex reduce, where you track sentences backwards, collecting sentence length.
        if (relevantKey !== 'replyTextMatch') {
            // NOTE: Means there has been no match
            if (splitArray.length === 1) {
                splitArray[0].text = splitArray[0].text.slice(0, 200);
                return splitArray;
            }
            splitArray[0].text = splitArray[0].text.slice(-80);
            splitArray[splitArray.length - 1].text = splitArray[splitArray.length - 1].text.slice(0, 80);
        }
        return splitArray;
    };
    var stepThreeToJSX = function (splitArrayTrim, isReact) {
        return splitArrayTrim.map(function (textMatch) {
            var color = textMatch.isMatch ? 'red' : 'black';
            if (isReact) {
                return createVNode$2(1, "span", null, textMatch.text, 0, { "style": { color: color, 'line-height': '1.4rem' } });
            }
            else {
                return "<span style=\"color: " + color + "; line-height: 1.4rem;\">" + textMatch.text + "</span>";
            }
        });
    };
    var highlightSyntax = function (relevantText, messageMatch, isReact) {
        if (relevantText && messageMatch.length > 0) {
            var _a = messageMatch.reduce(function (acc, regexFilterResult) {
                if (!acc.foundMatch) {
                    var relevantKey = Object.keys(regexFilterResult)[0];
                    var splitArray = stepOneFindAllMatches(relevantText, regexFilterResult[relevantKey]);
                    var splitArrayTrim = stepTwoTrimArray(splitArray, relevantKey);
                    var newArray = stepThreeToJSX(splitArrayTrim, isReact);
                    return __assign(__assign({}, acc), { expressionArray: newArray, foundMatch: true });
                }
                return acc;
            }, { relevantText: relevantText, expressionArray: [], foundMatch: false }), expressionArray = _a.expressionArray, foundMatch = _a.foundMatch;
            if (foundMatch)
                return expressionArray;
        }
        return isReact ? [createVNode$2(1, "span", null, (relevantText === null || relevantText === void 0 ? void 0 : relevantText.slice(0, 200)) || '', 0)] : [relevantText || ''];
    };

    var increaseDelayTimer = function () {
        var delayTimer = window.localStorage.getItem('delayTimer');
        var delayTimerNumber = parseInt(delayTimer) + 26000;
        window.localStorage.setItem('delayTimer', delayTimerNumber.toString());
    };
    var openNewLink = function (prelimUrl, messageType) {
        var url = "" + prelimUrl;
        if (messageType !== 'custom') {
            var delayTimer = window.localStorage.getItem('delayTimer');
            url = url + ("&timer=" + delayTimer);
            increaseDelayTimer();
        }
        window.open(url, '_blank');
    };
    var generatePrelimUrl = function (toUsername, messageText, messageType, usernameConfig) {
        if (usernameConfig) {
            return "https://www.reddit.com/message/compose/?to=" + toUsername + "&subject=Hey&message=" + encodeURIComponent(messageText) + "&type=" + messageType;
        }
        return "https://forum.nofap.com/index.php?conversations/add&title=Hey&to=" + toUsername + "&message=" + encodeURIComponent(messageText) + "&type=" + messageType;
    };

    var followRelapseAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". I'm sorry to hear you relapsed. Have you been meditating daily like I suggested? Did you end up reading the NeverFap Deluxe website?"); };
    var followMeditationAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". Have you been meditating daily like I suggested? Did you end up reading the NeverFap Deluxe website?"); };
    var followStruggleAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". I'm sorry to hear you're struggling.\n\nHave you been meditating daily like I suggested? Did you end up reading the NeverFap Deluxe website?"); };
    var followNotSmoothlyAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". I'm sorry things haven't been going smoothly with your recovery.\n\nHave you been meditating daily like I suggested? Did you end up reading the NeverFap Deluxe website?"); };

    var createComponentVNode$1 = createComponentVNode;
    var createVNode$3 = createVNode;
    // import ReactTooltip from 'react-tooltip';
    var createStartMessageLink = function (messageType, color, toUsername, messageText, usernameConfig) {
        var prelimUrl = generatePrelimUrl(toUsername, messageText, messageType, usernameConfig);
        // https://forum.nofap.com/index.php?conversations/add&to=YoungRockLee&title=hey
        return (createVNode$3(1, "div", null, createVNode$3(1, "a", null, messageType, 0, { "style": {
                color: color || 'black',
                'margin-top': '0.2rem',
                'margin-bottom': '0.2rem',
                'margin-left': '0.3rem',
                'margin-right': '0.3rem',
                'font-size': '12px',
                display: 'inline-block',
            }, "onclick": function () { return openNewLink(prelimUrl, messageType); } }), 0));
    };
    var UserPanel = /** @class */ (function (_super) {
        __extends(UserPanel, _super);
        function UserPanel(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                borderClass: '3px solid white'
            };
            return _this;
        }
        UserPanel.prototype.render = function () {
            var _this = this;
            var _a;
            var _b = this.props, dbUser = _b.dbUser, usernameConfig = _b.usernameConfig, hoursAgoText = _b.hoursAgoText;
            return (createVNode$3(1, "div", null, [dbUser.userType !== UserType.FreshUser && (createComponentVNode$1(2, PreviousMessageInformation, { "dbUser": dbUser })), createVNode$3(1, "div", null, [usernameConfig && hoursAgoText && (createComponentVNode$1(2, SetMarkerButton, { "username": dbUser.username, "usernameConfig": usernameConfig, "hoursAgoText": hoursAgoText })), createComponentVNode$1(2, MarkUserChattedButton, { "username": dbUser.username }), createComponentVNode$1(2, MarkUserHostileButton, { "username": dbUser.username })], 0, { "style": { display: 'flex' } }), createComponentVNode$1(2, UserInformation, { "dbUser": dbUser, "usernameConfig": usernameConfig }), createVNode$3(1, "div", null, [createVNode$3(1, "div", null, [createStartMessageLink(SendMessageType.NFDCustomSend, 'purple', dbUser.username, '', fakeConfigType), createStartMessageLink(SendMessageType.StartAdviceStart, 'purple', dbUser.username, startAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartAdviceStartAgain, 'purple', dbUser.username, startAgainAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartAdviceGeneral, 'purple', dbUser.username, generalAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartAdviceRelapse, 'purple', dbUser.username, relapseAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig), createVNode$3(1, "h4", null, "Custom", 16), createStartMessageLink(SendMessageType.StartAdviceAge, 'purple', dbUser.username, ageAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartDealingWithUrgesAdvice, 'purple', dbUser.username, dealingWithUrgesAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartMasturbateWithoutPornAdvice, 'purple', dbUser.username, masturbateWithoutPornAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartBiggestBenefitPostAddictionAdvice, 'purple', dbUser.username, biggestBenefitPostAddictionAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartPartnerAdvice, 'purple', dbUser.username, partnerAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartDidIJustRelapseAdvice, 'purple', dbUser.username, didIJustRelapseAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig)], 0, { "style": { display: 'flex', 'flex-direction': 'column' } }), createVNode$3(1, "div", null, [createStartMessageLink(SendMessageType.StartAdviceStruggle, 'purple', dbUser.username, struggleAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartAdviceFlatline, 'purple', dbUser.username, flatlineAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartAdviceWetdreamAdvice, 'purple', dbUser.username, wetdreamAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartAdvicePornBlockersAdvice, 'purple', dbUser.username, pornBlockersAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartAdviceIsWatchingPornRelapseAdvice, 'purple', dbUser.username, isWatchingPornRelapseAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartWhenDoesItGetEasierAdvice, 'purple', dbUser.username, whenDoesItGetEasierAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartNoReasonToRelapseAdvice, 'purple', dbUser.username, noReasonToRelapseAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.StartAccountabilityPartner, 'purple', dbUser.username, accountabilityPartner(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig), createVNode$3(1, "h4", null, "Follow", 16), createStartMessageLink(SendMessageType.FollowRelapseAdvice, 'purple', dbUser.username, followRelapseAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.FollowMeditationAdvice, 'purple', dbUser.username, followMeditationAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.FollowStruggleAdvice, 'purple', dbUser.username, followStruggleAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                        createStartMessageLink(SendMessageType.FollowNotSmoothlyAdvice, 'purple', dbUser.username, followNotSmoothlyAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig)], 0, { "style": { display: 'flex', 'flex-direction': 'column' } })], 4, { "style": { display: 'flex', 'justify-content': 'space-between', 'margin-top': '1rem', 'margin-bottom': '1rem' } })], 0, { "style": { border: (_a = this.state) === null || _a === void 0 ? void 0 : _a.borderClass, padding: '1rem' }, "onclick": function () { return _this.setState({ borderClass: '3px solid red' }); } }));
        };
        return UserPanel;
    }(Component));

    var createTextVNode$2 = createTextVNode;
    var createVNode$4 = createVNode;
    var CreatePrelimLink = /** @class */ (function (_super) {
        __extends(CreatePrelimLink, _super);
        function CreatePrelimLink(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                borderClass: '1px solid black'
            };
            return _this;
        }
        CreatePrelimLink.prototype.render = function () {
            var _this = this;
            var _a;
            var _b = this.props, dbUser = _b.dbUser, titleText = _b.titleText, messageText = _b.messageText, flairText = _b.flairText, aLinkHref = _b.aLinkHref, prelimUrl = _b.prelimUrl, index = _b.index, sendMessageType = _b.sendMessageType, prelimContainer = _b.prelimContainer, messageMatch = _b.messageMatch;
            return (createVNode$4(1, "div", null, [createVNode$4(1, "a", null, [createVNode$4(1, "p", null, [dbUser.username, createTextVNode$2(" - "), sendMessageType], 0, { "style": { 'margin-bottom': '0.5rem', 'margin-right': '0.5rem', color: 'purple' } }), createVNode$4(1, "p", null, [createVNode$4(1, "b", null, "Title:", 16, { "style": { 'font-weight': 900, 'margin-right': '0.3rem' } }), highlightSyntax(titleText, messageMatch, true).map(function (element) { return element; })], 0, { "style": { 'margin-bottom': '0.5rem', 'line-height': '1.4rem' } }), createVNode$4(1, "p", null, [createVNode$4(1, "b", null, "Message:", 16, { "style": { 'font-weight': 900, 'margin-right': '0.3rem' } }), highlightSyntax(messageText, messageMatch, true).map(function (element) { return element; })], 0, { "style": { 'margin-bottom': '0.5rem', 'line-height': '1.4rem' } }), createVNode$4(1, "p", null, [createVNode$4(1, "b", null, "Flair:", 16, { "style": { 'font-weight': 900, 'margin-right': '0.3rem' } }), highlightSyntax(flairText, messageMatch, true).map(function (element) { return element; })], 0, { "style": { 'margin-bottom': '0.5rem', 'line-height': '1.4rem' } })], 4, { "style": { display: 'block', background: 'white', color: 'black', padding: '1rem', 'margin-top': '0.6rem', 'margin-bottom': '0.6rem', cursor: 'pointer', border: (_a = this.state) === null || _a === void 0 ? void 0 : _a.borderClass }, "onclick": function () {
                        _this.setState({ borderClass: '1px solid red' });
                        openNewLink(prelimUrl, SendMessageType.NA);
                    } }), createVNode$4(1, "a", null, "Show Post", 16, { "data-click-id": "body", "href": "" + aLinkHref })], 4));
        };
        return CreatePrelimLink;
    }(Component));

    var createComponentVNode$2 = createComponentVNode;
    var getAllNoFapNewUsernames = function () {
        var allATags = document.querySelectorAll('a');
        var filteredATags = __spreadArrays(allATags).filter(function (tag) { return tag.innerText.includes('u/'); });
        var usernames = filteredATags.map(function (tag) { return tag.innerText.split('/')[1]; });
        return usernames;
    };
    var createPrelimContainer = function (filteredATags) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var prelimContainer = document.createElement('div');
        prelimContainer.id = 'reade-automate-container';
        var secondElementContainer = filteredATags[1];
        // this doesn't really work
        // the only way to get this to work is to put everything into an array THEN render. I can do that, I think
        // const secondLastElementContainer = filteredATags[filteredATags.length - 2];
        // NOTE: This first one is one more i.e. the parent of the element it's inserting it before.
        (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = secondElementContainer.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.parentNode) === null || _g === void 0 ? void 0 : _g.parentNode) === null || _h === void 0 ? void 0 : _h.parentNode.insertBefore(prelimContainer, (_q = (_p = (_o = (_m = (_l = (_k = (_j = secondElementContainer.parentNode) === null || _j === void 0 ? void 0 : _j.parentNode) === null || _k === void 0 ? void 0 : _k.parentNode) === null || _l === void 0 ? void 0 : _l.parentNode) === null || _m === void 0 ? void 0 : _m.parentNode) === null || _o === void 0 ? void 0 : _o.parentNode) === null || _p === void 0 ? void 0 : _p.parentNode) === null || _q === void 0 ? void 0 : _q.parentNode);
    };
    var getNextHoursAgoValueToSearch = function (timestamp) {
        if (timestamp !== '') {
            if (timestamp.includes('now') || timestamp.includes('minute')) {
                return '1 hour ago';
            }
            if (timestamp.includes('hour')) {
                var nextTimeNumber_1 = parseInt(timestamp.split(' ')[0]) + 1;
                return nextTimeNumber_1 + " hours ago";
            }
            var nextTimeNumber = parseInt(timestamp.split(' ')[0]) + 1;
            return nextTimeNumber + " days ago";
        }
        return undefined;
    };
    var scrollToSpecifiedDate = function (dateString, usernameConfig) { return new Promise(function (resolve) {
        var interval;
        var nextHoursAgoValueToSearch = getNextHoursAgoValueToSearch(usernameConfig.usernameTimestamp);
        interval = setInterval(function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            {
                window.scrollTo(0, document.body.scrollHeight);
                if (dateString !== 'NA') {
                    console.log('scrollToSpecifiedDate - run');
                    var allTimeStamps = document.querySelectorAll('a[data-click-id="timestamp"]');
                    for (var _i = 0, _k = allTimeStamps; _i < _k.length; _i++) {
                        var timeStampElement = _k[_i];
                        var doesTextContainXXX = timeStampElement.innerText.includes(dateString);
                        if (doesTextContainXXX) {
                            console.log('Found scroll date.');
                            clearInterval(interval);
                            resolve('Found scroll date.');
                        }
                        else {
                            if (timeStampElement) {
                                timeStampElement.remove();
                            }
                        }
                    }
                }
                else {
                    console.log('scrollToSpecifiedUsername - run');
                    var usernames = getAllNoFapNewUsernames();
                    var _loop_1 = function (username) {
                        var allATags = document.querySelectorAll('a');
                        var usernameTag = __spreadArrays(allATags).filter(function (tag) { return tag.innerText.includes(username); })[0];
                        var hoursAgoText = (_j = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = usernameTag === null || usernameTag === void 0 ? void 0 : usernameTag.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode.children[1]) === null || _f === void 0 ? void 0 : _f.children[0]) === null || _g === void 0 ? void 0 : _g.children[0]) === null || _h === void 0 ? void 0 : _h.children[0].querySelectorAll('a')[1]) === null || _j === void 0 ? void 0 : _j.innerText;
                        var doesTextContainXXX = username === usernameConfig.usernameValue;
                        var doesTimestampContainXXX = nextHoursAgoValueToSearch ? hoursAgoText === nextHoursAgoValueToSearch : false;
                        if (doesTextContainXXX) {
                            console.log('Found scroll username.');
                            clearInterval(interval);
                            resolve('Found scroll username.');
                        }
                        if (doesTimestampContainXXX) {
                            console.log('Found scroll timestamp instead.');
                            clearInterval(interval);
                            resolve('Found scroll timestamp instead.');
                        }
                    };
                    for (var _l = 0, _m = usernames; _l < _m.length; _l++) {
                        var username = _m[_l];
                        _loop_1(username);
                    }
                }
            }
        }, 800);
    }); };
    var scrollToMarker = function () {
        setTimeout(function () { console.log('delay, bby'); }, 800);
        var lastUserMarkerElement = document.querySelector('#last-user-reade');
        console.log(lastUserMarkerElement);
        if (lastUserMarkerElement) {
            var y = lastUserMarkerElement.getBoundingClientRect().top + window.scrollY - 350;
            console.log(y);
            window.scroll({
                top: y,
                behavior: 'smooth'
            });
        }
    };
    var isServerRunning = function () { return __awaiter(void 0, void 0, void 0, function () {
        var message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, checkServerRunning()];
                case 1:
                    message = _a.sent();
                    console.log('serverRunning', message);
                    return [2 /*return*/];
            }
        });
    }); };
    var createPrelimLink = function (_a) {
        var dbUser = _a.dbUser, titleText = _a.titleText, messageText = _a.messageText, flairText = _a.flairText, aLinkHref = _a.aLinkHref, prelimUrl = _a.prelimUrl, index = _a.index, sendMessageType = _a.sendMessageType, prelimContainer = _a.prelimContainer, messageMatch = _a.messageMatch;
        var nodeContainer = document.createElement('div');
        nodeContainer.id = "r" + dbUser.username + "-" + index;
        render(createComponentVNode$2(2, CreatePrelimLink, { "dbUser": dbUser, "titleText": titleText, "messageText": messageText, "flairText": flairText, "aLinkHref": aLinkHref, "prelimUrl": prelimUrl, "index": index, "sendMessageType": sendMessageType, "prelimContainer": prelimContainer, "messageMatch": messageMatch }), nodeContainer);
        prelimContainer === null || prelimContainer === void 0 ? void 0 : prelimContainer.appendChild(nodeContainer);
    };
    var renderUserPanel = function (_a) {
        var tag = _a.tag, tagUsername = _a.tagUsername, index = _a.index, dbUser = _a.dbUser, usernameConfig = _a.usernameConfig, hoursAgoText = _a.hoursAgoText;
        var rootId = "r" + tagUsername + "-" + index;
        var root = document.createElement('div');
        root.id = rootId;
        tag.parentNode.insertBefore(root, tag);
        tag.remove();
        var domContainer = document.querySelector("#" + rootId);
        if (domContainer) {
            render(createComponentVNode$2(2, UserPanel, { "dbUser": dbUser, "hoursAgoText": hoursAgoText, "usernameConfig": usernameConfig }), domContainer);
        }
    };

    var RegExpFilterLogic;
    (function (RegExpFilterLogic) {
        RegExpFilterLogic["AND"] = "AND";
        RegExpFilterLogic["OR"] = "OR";
    })(RegExpFilterLogic || (RegExpFilterLogic = {}));
    var extractRegexMatch = function (matchArray) {
        var items = matchArray.map(function (item) {
            var keys = Object.keys(item);
            var mappedKeysToString = keys.map(function (key) {
                var matchItems = item[key];
                var val = matchItems.map(function (matchItemIndividual) { return key + ": " + matchItemIndividual.value; });
                var join = val.join('');
                return join;
            });
            var finalString = mappedKeysToString.join(' - ');
            return finalString;
        });
        var actualFinalString = items[0];
        return actualFinalString;
    };
    var both = { options: { both: true } };

    var toRemoveMotivationVictoryLectureRegexArray = [
        // LECTURE
        { titleText: /my benefits/i },
        { titleText: /read this if you/i },
        { titleText: /a piece of advice/i },
        __assign(__assign({}, both), { titleText: /(here’s|here's|here is) what helped me/i }),
        __assign(__assign({}, both), { titleText: /once a wise man/i }),
        __assign(__assign({}, both), { titleText: /(NoFap|no fap|no-fap) taught me/i }),
        __assign(__assign({}, both), { titleText: /\d+ (NoFap|no fap|no-fap) benefits/i }),
        __assign(__assign({}, both), { titleText: /pro tip for (NoFap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /for those who relapse/i }),
        __assign(__assign({}, both), { titleText: /to those struggling/i }),
        __assign(__assign({}, both), { titleText: /one habit that helped me/i }),
        __assign(__assign({}, both), { titleText: /HERE ARE THE TRUE BENEFITS/i }),
        __assign(__assign({}, both), { titleText: /the key is/i }),
        __assign(__assign({}, both), { titleText: /(a ?(friendly)? reminder|remember this)/i }),
        __assign(__assign({}, both), { titleText: /strange benefit/i }),
        __assign(__assign({}, both), { titleText: /found a method/i }),
        __assign(__assign({}, both), { titleText: /the key to (everything|(NoFap|no fap|no-fap))/i }),
        __assign(__assign({}, both), { titleText: /methods that you might like to/i }),
        __assign(__assign({}, both), { titleText: /Tip that might help you/i }),
        __assign(__assign({}, both), { titleText: /an awesome tip/i }),
        __assign(__assign({}, both), { titleText: /if you find yourself/i }),
        __assign(__assign({}, both), { titleText: /ask me anything/i }),
        __assign(__assign({}, both), { titleText: /d+ tips that helped me/i }),
        __assign(__assign({}, both), { titleText: /helped me reach \d+ days/i }),
        __assign(__assign({}, both), { titleText: /wrote this poem/i }),
        __assign(__assign({}, both), { titleText: /wrote this poem/i }),
        // VICTORY
        { titleText: /^going strong$/i },
        { titleText: /overcame my worst urge/i },
        { titleText: /I am proud of myself/i },
        { titleText: /Instead of (masturbating|PMO) i/i },
        { titleText: /finally crossed a/i },
        { titleText: /years without porn/i },
        { titleText: /(0|zero) urges to fap/i },
        { titleText: /I feel amazing/i },
        { titleText: /benefits ?(are)? becoming apparent/i },
        { titleText: /(didnt|didn't) relapse today/i },
        { titleText: /i made it/i },
        { titleText: /went for first .* in (weeks|months)/i },
        { titleText: /(celebrate)/i },
        { titleText: /found something that/i },
        { titleText: /streak for the first time/i },
        { titleText: /double digit/i },
        { titleText: /so proud of myself/i },
        { titleText: /Today marks my longest streak/i },
        { titleText: /still going strong/i },
        { titleText: /not bragging/i },
        { titleText: /just completed a/i },
        { titleText: /accomplishments on (NoFap|no fap|no-fap)/i },
        { titleText: /achieved my goal/i },
        { titleText: /finally reached \d+ days/i },
        { titleText: /(previous record|milestone)/i },
        { titleText: /small success/i },
        { titleText: /a month of not fapping/i },
        { titleText: /finally made it to (day|week)/i },
        { titleText: /feels so .* good/i },
        { titleText: /reached day \d+ for the (first time|firsttime)/i },
        { titleText: /(1st|first) (successful|sucessful|succesful|sucesful) (week|month)/i },
        { titleText: /\d+ (days|weeks|months|years) free$/i },
        { titleText: /longest streak yet/i },
        __assign(__assign({}, both), { titleText: /absolutely amazing/i }),
        __assign(__assign({}, both), { titleText: /never felt happier/i }),
        __assign(__assign({}, both), { titleText: /feeling amazing/i }),
        __assign(__assign({}, both), { titleText: /SUPERPOWERS ARE REAL/i }),
        __assign(__assign({}, both), { titleText: /Instead of jerking off/i }),
        __assign(__assign({}, both), { titleText: /just made it to \d+ days without/i }),
        __assign(__assign({}, both), { titleText: /finally hit .* (weeks|days) again/i }),
        __assign(__assign({}, both), { titleText: /On my way to triumph/i }),
        __assign(__assign({}, both), { titleText: /pretty easy so far/i }),
        __assign(__assign({}, both), { titleText: /new record/i }),
        __assign(__assign({}, both), { titleText: /feeling great/i }),
        // MOTIVATION
        { titleText: /(we will all make it|we will make it|you will make it|you can do it)/i },
        { titleText: /(Don't|Don't|dont) give up$/i },
        { titleText: /love you guys/i },
        { titleText: /(NoFap|no fap|no-fap) works/i },
        { titleText: /^Instead of watching porn/i },
        { titleText: /(NoFap|no fap|no-fap) is changing my life/i },
        { titleText: /(its|It's|It’s) never too late/i },
        { titleText: /quote/i },
        { titleText: /motivational thought/i },
        { titleText: /motivational speaker/i },
        { titleText: /(NoFap|no fap|no-fap) is ?(really)? worth it/i },
        { titleText: /do not relapse/i },
        { titleText: /^keep going/i },
        { titleText: /Our Greatest Fear Is/i },
        { titleText: /Awesome benefits/i },
        __assign(__assign({}, both), { titleText: /a poem/i }),
        __assign(__assign({}, both), { titleText: /(I'm|I’m|I am|im|i m) so proud of (you|us)/i }),
        __assign(__assign({}, both), { titleText: /greatest (NoFap|no fap|no-fap) inspiration/i }),
    ];

    var toRemoveCounter = [
        // COUNTER
        { titleText: /profile/i },
        { titleText: /(days|day) flair/i },
        { titleText: /name tag/i },
        { titleText: /(Don't|Don't|dont) mind me/i },
        { titleText: /journal entry/i },
        { titleText: /journal check in/i },
        { titleText: /diary/i },
        { titleText: /libido/i },
        { titleText: /(weekly|daily) journal/i },
        { titleText: /(tracker|counting|counter)/i },
        { titleText: /accountability post/i },
        __assign(__assign({}, both), { titleText: /^counter$/i }),
        __assign(__assign({}, both), { titleText: /update my flair/i }),
        __assign(__assign({}, both), { titleText: /How do I start a counter/i }),
        __assign(__assign({}, both), { titleText: /How do u get a number/i }),
        __assign(__assign({}, both), { titleText: /numbers by ur name/i }),
        __assign(__assign({}, both), { titleText: /just to see the days/i }),
        __assign(__assign({}, both), { titleText: /add that day count/i }),
        __assign(__assign({}, both), { titleText: /to see my streak/i }),
        __assign(__assign({}, both), { titleText: /I want a flair/i }),
        __assign(__assign({}, both), { titleText: /checking my day count/i }),
        __assign(__assign({}, both), { titleText: /How Do I Put The Numbers Of Days/i }),
        __assign(__assign({}, both), { titleText: /How to reset the timer/i }),
        __assign(__assign({}, both), { titleText: /How do you add ?(the)? days/i }),
        __assign(__assign({}, both), { titleText: /tell me how to add days/i }),
        __assign(__assign({}, both), { titleText: /How do I get the number of days/i }),
        __assign(__assign({}, both), { titleText: /next to (ur|your) (name|tag)/i }),
        __assign(__assign({}, both), { titleText: /tag that shows your streak/i }),
        __assign(__assign({}, both), { titleText: /Where is the tag that/i }),
        __assign(__assign({}, both), { titleText: /someone put a counter/i }),
        __assign(__assign({}, both), { titleText: /How to add day streak/i }),
        __assign(__assign({}, both), { titleText: /How to add how many days/i }),
        __assign(__assign({}, both), { titleText: /Where can I see my (NoFap|no fap|no-fap) counter/i }),
    ];

    // TODO This needs to be more specific not to include day 1 or day 0
    var toRemoveInitialDay = function (titleText, flairText, messageText) {
        return (new RegExp(/^(day|days|week) \d+(\.|\!*)?$/i).test(titleText)
            || new RegExp(/^(day|days|week) \d+ (passed|completed|done)$/i).test(titleText)
            || new RegExp(/^\d+ (day|days|week) (baby|bby)/i).test(titleText)
            || new RegExp(/profile/i).test(titleText)
            || new RegExp(/^day \d+ clean/i).test(titleText)
            || new RegExp(/^d\+th (day|week)\.?$/i).test(titleText)) &&
            (new RegExp(/^finally$/i).test(messageText)
                || new RegExp(/^day \d+ clean/i).test(titleText)
                || new RegExp(/^(day|days|week) \d+(\.|\!*)?$/i).test(messageText)
                || new RegExp(/^(day|days|week) \d+ (passed|completed|done)/i).test(titleText)
                || new RegExp(/^\d+ (day|days|week) (baby|bby)/i).test(titleText)
                || new RegExp(/had no urges/i).test(messageText)
                || new RegExp(/sparta/i).test(messageText)
                || new RegExp(/\./i).test(messageText)
                || new RegExp(/^d\+th (day|week)\.?$/i).test(titleText));
    };
    // TODO Fix this up
    var toRemoveInitialRegexArray = __spreadArrays([
        { titleText: /\".*\"/i },
        { titleText: /\“.*\“/i },
        // DAY MILESTONES
        { titleText: /180 day/i }
    ], toRemoveCounter, [
        __assign(__assign({}, both), { titleText: /CAN'T WE POST PICTURES ANYMORE/i }),
        __assign(__assign({}, both), { titleText: /I need methods to keep count/i }),
        __assign(__assign({}, both), { titleText: /How to get the number of days/i }),
        { messageText: /get a tag with your streak/i },
        __assign(__assign({}, both), { titleText: /How does the day counter work/i })
    ], toRemoveMotivationVictoryLectureRegexArray, [
        // RATIONALISATIONS
        { titleText: /(down side|downside)/i },
        // { titleText: /finally made it to/i },
        { titleText: /relapsed intentionally/i },
        { titleText: /any evidence that/i },
        { titleText: /harmful effect/i },
        { titleText: /a study/i },
        { titleText: /future (son|daughter)/i },
        __assign(__assign({}, both), { titleText: /(balls|pelvic|genital|testic)/i }),
        __assign(__assign({}, both), { titleText: /hair line/i }),
        __assign(__assign({}, both), { titleText: /(prostatitis)/i }),
        __assign(__assign({}, both), { titleText: /cause cancer/i }),
        __assign(__assign({}, both), { titleText: /(erectile|disfunction|erectile dysfunction)/i }),
        __assign(__assign({}, both), { titleText: /(grip|syndrome)/i }),
        __assign(__assign({}, both), { titleText: /acne/i }),
        __assign(__assign({}, both), { titleText: /(skin|hair) condition/i }),
        __assign(__assign({}, both), { titleText: /medication/i }),
        __assign(__assign({}, both), { titleText: /(premature)/i }),
        __assign(__assign({}, both), { titleText: /(pied|peid|get it up|shrink)/i }),
        __assign(__assign({}, both), { titleText: /(semen|urine|anal)/i }),
        __assign(__assign({}, both), { titleText: /(pe induced)/i }),
        __assign(__assign({}, both), { titleText: /blue balls/i }),
        __assign(__assign({}, both), { titleText: /hocd/i }),
        __assign(__assign({}, both), { titleText: /scientific/i }),
        __assign(__assign({}, both), { titleText: /prostate cancer/i }),
        __assign(__assign({}, both), { titleText: /hair loss/i }),
        __assign(__assign({}, both), { titleText: /deeper voice/i }),
        __assign(__assign({}, both), { titleText: /(improved|better) vision/i }),
        __assign(__assign({}, both), { titleText: /Penis size/i }),
        __assign(__assign({}, both), { titleText: /increase ?(in)? testosterone/i }),
        __assign(__assign({}, both), { titleText: /vasectomy/i }),
        __assign(__assign({}, both), { titleText: /penile sensitivity/i }),
        __assign(__assign({}, both), { titleText: /super sensitive/i }),
        __assign(__assign({}, both), { titleText: /testosterone/i }),
        __assign(__assign({}, both), { titleText: /baldness/i }),
        __assign(__assign({}, both), { titleText: /weight loss/i }),
        __assign(__assign({}, both), { titleText: /health problems/i }),
        __assign(__assign({}, both), { titleText: /hypnotherapy/i }),
        __assign(__assign({}, both), { titleText: /hypnosis/i }),
        __assign(__assign({}, both), { titleText: /circumcised/i }),
        __assign(__assign({}, both), { titleText: /take until ED goes away/i }),
        __assign(__assign({}, both), { titleText: /inflammation/i }),
        __assign(__assign({}, both), { titleText: /increase my size/i }),
        __assign(__assign({}, both), { titleText: /sperm count/i }),
        { titleText: /(boner|morning wood)/i },
        // SEX / WOMEN
        { titleText: /finally got a girlfriend/i },
        { titleText: /sexting/i },
        { titleText: /(virgin|virginity)/i },
        { titleText: /women attraction/i },
        { titleText: /chastity cage/i },
        { titleText: /got laid (1st|first) time/i },
        // POINTLESS QUESTIONS
        { titleText: /counts as relapse/i },
        { titleText: /why do you fap\?/i },
        { titleText: /Why quit porn\?/i },
        // IRRELEVANT TOPICS
        { titleText: /muslim/i },
        { titleText: /christian/i },
        { titleText: /song/i },
        { titleText: /Playlist/i },
        { titleText: /beast mode/i },
        { titleText: /physical pain/i },
        { titleText: /Erotica/i },
        { titleText: /gift/i },
        { titleText: /hunger/i },
        { titleText: /(insta|instagram)/i },
        { titleText: /illusion/i },
        { titleText: /monk/i },
        { titleText: /moral/i },
        { titleText: /(mum|dad)/i },
        { titleText: /(vivid|weird) dream/i },
        { titleText: /(tik tok|tiktok)/i },
        { titleText: /Youtube/i },
        { titleText: /(wim hof)/i },
        { titleText: /weed/i },
        { titleText: /imagination more vivid/i },
        { titleText: /receiving nudes/i },
        __assign(__assign({}, both), { titleText: /petition/i }),
        __assign(__assign({}, both), { titleText: /sex before marriage/i }),
        // DOUBTS
        { titleText: /placebo/i },
        // OTHER TOPICS
        { titleText: /is (it|nofap|no fap) worth it/i },
        { titleText: /libido/i },
        { titleText: /(shemale|she male)/i },
        __assign(__assign({}, both), { titleText: /sex (during|on) (nofap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /having sex breaks the/i }),
        __assign(__assign({}, both), { titleText: /Is having sex/i }),
        __assign(__assign({}, both), { titleText: /WHY are you doing no fap/i }),
        { titleText: /no urges yet/i },
        // { titleText: /(hard mode|hardmode)/i }, // this needs to be more specific
        { titleText: /cold shower/i },
        { titleText: /book recommendation/i },
        __assign(__assign({}, both), { titleText: /does having sex break (NoFap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /I (don’t|dont|don't) see any benefits/i }),
        __assign(__assign({}, both), { titleText: /negatives of masturbating/i }),
        __assign(__assign({}, both), { titleText: /am I addicted to (porn|pron)/i }),
        __assign(__assign({}, both), { titleText: /What does PMO stand for/i }),
        __assign(__assign({}, both), { titleText: /^staying strong(\.)?$/i }),
        __assign(__assign({}, both), { titleText: /human traff/i }),
        __assign(__assign({}, both), { titleText: /what is edging/i }),
        __assign(__assign({}, both), { titleText: /what is PMO/i }),
        __assign(__assign({}, both), { titleText: /strange dreams/i }),
        __assign(__assign({}, both), { titleText: /NOT GETTING URGES/i }),
        __assign(__assign({}, both), { titleText: /Recommended books/i }),
        __assign(__assign({}, both), { titleText: /Can (you|i) still have sex/i }),
        __assign(__assign({}, both), { titleText: /(ejaculate|cum) too quick/i }),
        __assign(__assign({}, both), { titleText: /day \d+ (bby|baby)/i }),
        // UNSORTED
        { titleText: /benefits till now/i },
        { titleText: /does not fap/i },
        { titleText: /download the app/i },
        { titleText: /interesting dream/i },
        { titleText: /just rejected a ?(hot)? girl/i },
        { titleText: /remember these \d+/i },
        { titleText: /really helpful app/i },
        { titleText: /too nervous to get hard/i },
        { titleText: /App for Quitting Porn/i },
        { titleText: /message to myself/i },
        __assign(__assign({}, both), { titleText: /Completed 90 days/i }),
    ]);
    var toRemoveFinalRegexArray = [
        { titleText: /^(day|week) \d+ (complete|done|free|strong)/i },
        { titleText: /\d+ (week|day).* (complete|done|free|strong)/i },
        { titleText: /(1st|first) (week|month) (complete|done|free|strong)/i },
        { titleText: /(1st|first) \d+ day streak/i },
        { titleText: /mission \.*? accomplished/i },
        { titleText: /first time reaching /i },
        { titleText: /completed \d+ (days|weeks) today/i },
        __assign(__assign({}, both), { titleText: /celebrating (1|one) (week|month)/i }),
        __assign(__assign({}, both), { titleText: /90 days (clean|complete|done)/i }),
        { messageText: /Officially hit a month of nofap/i },
    ];

    var toRelapseAdviceRegexArray = [
        { titleText: /I relapsed/i },
        { titleText: /^Major relapse/i },
        { titleText: /^\d+ days relapse/i },
        __assign(__assign({}, both), { titleText: /lost at \d+ days/i }),
        __assign(__assign({}, both), { titleText: /Relapsed \d+ times in/i }),
        __assign(__assign({}, both), { titleText: /Relapse... again/i }),
        __assign(__assign({}, both), { titleText: /welp relapsed/i }),
        __assign(__assign({}, both), { titleText: /Worst relapse ever/i }),
        __assign(__assign({}, both), { titleText: /relapse \:\(/i }),
        __assign(__assign({}, both), { titleText: /again 0 days/i }),
        __assign(__assign({}, both), { titleText: /Day (zero|0) Again/i }),
        __assign(__assign({}, both), { titleText: /failed first attempt/i }),
        __assign(__assign({}, both), { titleText: /Failed my \d+ day streak/i }),
        __assign(__assign({}, both), { titleText: /relapse report/i }),
        __assign(__assign({}, both), { titleText: /(I've|just) ?(have)? (relapsed|failed)/i }),
        __assign(__assign({}, both), { titleText: /(failed|lost) (at|on) day/i }),
        __assign(__assign({}, both), { titleText: /(I’ve|I've) PMOed again/i }),
        __assign(__assign({}, both), { titleText: /I have relapsed today/i }),
        __assign(__assign({}, both), { titleText: /I failed today/i }),
        __assign(__assign({}, both), { titleText: /I messed up today/i }),
        __assign(__assign({}, both), { titleText: /relapsed hard/i }),
        __assign(__assign({}, both), { titleText: /^relapsed\./i }),
        __assign(__assign({}, both), { titleText: /Relapsed Yet Again/i }),
        __assign(__assign({}, both), { titleText: /^I Failed$/i }),
        __assign(__assign({}, both), { titleText: /^failed again$/i }),
        __assign(__assign({}, both), { titleText: /(broke my|broke a|broke the|lost my|lost a|lost an) ?(.*) (streak)/i }),
        __assign(__assign({}, both), { titleText: /^relapsed\.?$/i }),
        __assign(__assign({}, both), { titleText: /^relapse\.?$/i }),
        __assign(__assign({}, both), { titleText: /^relapsed (last night|today|yesterday)/i }),
        __assign(__assign({}, both), { titleText: /I relapsed (last night|today|yesterday)/i }),
        __assign(__assign({}, both), { titleText: /^failed\.?$/i }),
        __assign(__assign({}, both), { titleText: /Just PMO’d (for|after)/i }),
        __assign(__assign({}, both), { titleText: /I released my load yesterday/i }),
        __assign(__assign({}, both), { titleText: /Full blown relapse/i }),
        __assign(__assign({}, both), { titleText: /I ruined my streak of/i }),
        __assign(__assign({}, both), { titleText: /I recently relapsed/i }),
        __assign(__assign({}, both), { titleText: /After a \d+ (day|days) streak/i }),
        __assign(__assign({}, both), { titleText: /^slipped$/i }),
        __assign(__assign({}, both), { titleText: /Guys I had bad relapse/i }),
        __assign(__assign({}, both), { titleText: /Relapsed now feeling/i }),
        __assign(__assign({}, both), { titleText: /I relapsed a few (hours|minutes)/i }),
        __assign(__assign({}, both), { titleText: /I jerked off today/i }),
        __assign(__assign({}, both), { titleText: /i did a relapse/i }),
        __assign(__assign({}, both), { titleText: /i lost after \d+ days/i }),
        __assign(__assign({}, both), { titleText: /Relapsed on \d+(th)? day/i }),
        __assign(__assign({}, both), { titleText: /I fucking relapsed/i }),
        __assign(__assign({}, both), { titleText: /Relapsed on day \d+/i }),
        __assign(__assign({}, both), { titleText: /and relapsed today/i }),
        __assign(__assign({}, both), { titleText: /Back to day \d+/i }),
        __assign(__assign({}, both), { titleText: /binged \d+ times in/i }),
        __assign(__assign({}, both), { titleText: /I relapsed guys/i }),
        __assign(__assign({}, both), { titleText: /then I relapsed/i }),
        __assign(__assign({}, both), { titleText: /relapsing after a/i }),
        __assign(__assign({}, both), { titleText: /relapsed once again/i }),
        __assign(__assign({}, both), { titleText: /relapsed \d+ times today/i }),
        __assign(__assign({}, both), { titleText: /any tips after a relapse/i }),
        __assign(__assign({}, both), { titleText: /(Relapsed|relapse) at \d+ days/i }),
        __assign(__assign({}, both), { titleText: /(Relapsed|relapse) at day \d+/i }),
        __assign(__assign({}, both), { titleText: /I slipped/i }),
        __assign(__assign({}, both), { titleText: /^Failed after/i }),
        __assign(__assign({}, both), { titleText: /^terrible relapse$/i }),
        __assign(__assign({}, both), { titleText: /made it .* and relapsed/i }),
        __assign(__assign({}, both), { titleText: /my first fail/i }),
        __assign(__assign({}, both), { titleText: /I had a relapse/i }),
        __assign(__assign({}, both), { titleText: /.* made me relapse$/i }),
        __assign(__assign({}, both), { titleText: /back to day (one|1)/i }),
        __assign(__assign({}, both), { titleText: /lost my streak of/i }),
        __assign(__assign({}, both), { titleText: /Failed \.* again/i }),
        __assign(__assign({}, both), { titleText: /Ended my \d+ day streak/i }),
        __assign(__assign({}, both), { titleText: /I lost ?(the)? battle today/i }),
        __assign(__assign({}, both), { titleText: /Gave in last night/i }),
        __assign(__assign({}, both), { titleText: /caved into a relapse already/i }),
        __assign(__assign({}, both), { titleText: /Relaspsed because i had/i }),
        __assign(__assign({}, both), { titleText: /Slipped up again today/i }),
        __assign(__assign({}, both), { titleText: /Goodbye \d+ day streak/i }),
        __assign(__assign({}, both), { titleText: /Relapse on \d+th Day/i }),
        __assign(__assign({}, both), { titleText: /had my longest ever streak end/i }),
        __assign(__assign({}, both), { titleText: /encouragement to start again/i }),
        __assign(__assign({}, both), { titleText: /I relapse on my \d+/i }),
        { messageText: /was going strong till today/i },
        { messageText: /Yesterday I relapsed again/i },
        __assign(__assign({}, both), { titleText: /relapsed (after|on day|again)/i }),
        __assign(__assign({}, both), { titleText: /relapse (after|on day)/i }),
    ];

    // TODO fix this up
    var toStartAdviceRegexArray = [
        // NEW
        { titleText: /^newbie/i },
        { titleText: /first try/i },
        { titleText: /wish me luck/i },
        { titleText: /my first post/i },
        { titleText: /^First day$/i },
        { titleText: /here for (nofap|no fap|no-fap)/i },
        __assign(__assign({}, both), { titleText: /today I quit masturbation/i }),
        __assign(__assign({}, both), { titleText: /quit from fapping today/i }),
        __assign(__assign({}, both), { titleText: /will finally commit to (nofap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /I start now/i }),
        __assign(__assign({}, both), { titleText: /I just started trying/i }),
        __assign(__assign({}, both), { titleText: /Beginning of a new Chapter/i }),
        __assign(__assign({}, both), { titleText: /I just joined today/i }),
        __assign(__assign({}, both), { titleText: /a new beginning/i }),
        __assign(__assign({}, both), { titleText: /^new beginning$/i }),
        __assign(__assign({}, both), { titleText: /changing for the better/i }),
        __assign(__assign({}, both), { titleText: /decided (I’m|I'm|im|I am) quitting this/i }),
        __assign(__assign({}, both), { titleText: /committing to a new lifestyle/i }),
        __assign(__assign({}, both), { titleText: /(I’ve|I've|I have) made the right decision/i }),
        __assign(__assign({}, both), { titleText: /finally admitting that (I’m|I'm|im|I am) addicted/i }),
        __assign(__assign({}, both), { titleText: /(I’m|I'm|im|I am) finally quitting/i }),
        __assign(__assign({}, both), { titleText: /finally try to get things turned around/i }),
        __assign(__assign({}, both), { titleText: /my decision to start (NoFap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /(I’m|I'm|im|I am) done with this ?(.*) feeling/i }),
        __assign(__assign({}, both), { titleText: /stopping for good/i }),
        __assign(__assign({}, both), { titleText: /Going on a \d+ day trial/i }),
        __assign(__assign({}, both), { titleText: /Going to try \d+ day/i }),
        __assign(__assign({}, both), { titleText: /(it’s|it's|its|it is) time to (quit|change)/i }),
        __assign(__assign({}, both), { titleText: /Just starting out on day/i }),
        __assign(__assign({}, both), { titleText: /this ends now/i }),
        __assign(__assign({}, both), { titleText: /(Let's|let’s|lets) (start|do this)/i }),
        __assign(__assign({}, both), { titleText: /(start|beginning) (of a|of my|my) (nofap|no fap|no-fap|journey)/i }),
        __assign(__assign({}, both), { titleText: /joined (nofap|no fap|no-fap) yesterday/i }),
        __assign(__assign({}, both), { titleText: /a new life begin/i }),
        __assign(__assign({}, both), { titleText: /this is the start/i }),
        __assign(__assign({}, both), { titleText: /I just started (nofap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /Starting out today/i }),
        __assign(__assign({}, both), { titleText: /day (1|one) begins now/i }),
        __assign(__assign({}, both), { titleText: /My first (nofap|no fap|no-fap) journey/i }),
        __assign(__assign({}, both), { titleText: /(it’s|it's|its|it is) time to stop/i }),
        __assign(__assign({}, both), { titleText: /advice for starting/i }),
        __assign(__assign({}, both), { titleText: /Just started officially/i }),
        __assign(__assign({}, both), { titleText: /Let the challenge begin/i }),
        __assign(__assign({}, both), { titleText: /Have decided to start/i }),
        __assign(__assign({}, both), { titleText: /How to begin\?/i }),
        __assign(__assign({}, both), { titleText: /This is the day where i begin my journey/i }),
        __assign(__assign({}, both), { titleText: /(I’m|I'm|im) starting this journey because/i }),
        __assign(__assign({}, both), { titleText: /(I’m|I'm|im) joining in for the challenge/i }),
        __assign(__assign({}, both), { titleText: /day (one|1) (.*)? here we go/i }),
        __assign(__assign({}, both), { titleText: /(I’m|I'm|im) new to Reddit/i }),
        __assign(__assign({}, both), { titleText: /(I’m|I'm|im) new and need some help/i }),
        __assign(__assign({}, both), { titleText: /I will be attempting (NoFap|no fap|no-fap) for the first time/i }),
        __assign(__assign({}, both), { titleText: /help me start/i }),
        __assign(__assign({}, both), { titleText: /Today I decided to try ?(the)? (nofap|no fap|no-fap) challenge/i }),
        __assign(__assign({}, both), { titleText: /try to do this (NoFap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /(masturbated|watched porn|fapped) for the last time today/i }),
        __assign(__assign({}, both), { titleText: /start of something amazing/i }),
        __assign(__assign({}, both), { titleText: /going to (stop|quit) (.*)? today/i }),
        __assign(__assign({}, both), { titleText: /(I’m|I'm|im|I am) gonna try this ?(nofap|no fap|no-fap)? Challenge/i }),
        __assign(__assign({}, both), { titleText: /(I’m|I'm|im|I am) starting my (nofap|no fap|no-fap) journey from today/i }),
        __assign(__assign({}, both), { titleText: /I have started my journey/i }),
        __assign(__assign({}, both), { titleText: /(Here's|here’s) to a new beginning/i }),
        __assign(__assign({}, both), { titleText: /Might as well start now/i }),
        __assign(__assign({}, both), { titleText: /starting day (1|one) today/i }),
        __assign(__assign({}, both), { titleText: /going to start my new journey/i }),
        __assign(__assign({}, both), { titleText: /yesterday i started my journey/i }),
        __assign(__assign({}, both), { titleText: /any tips on getting started/i }),
        __assign(__assign({}, both), { titleText: /any tips for starting/i }),
        __assign(__assign({}, both), { titleText: /Advice on How to Start/i }),
        __assign(__assign({}, both), { titleText: /just joined (nofap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /new here/i }),
        __assign(__assign({}, both), { titleText: /^(I’m|I'm|im|I am) new/i }),
        __assign(__assign({}, both), { titleText: /new to (NoFap|no fap|no-fap|this)/i }),
        __assign(__assign({}, both), { titleText: /we start today/i }),
        __assign(__assign({}, both), { titleText: /starting (NoFap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /(I’m|I'm|im|I am) a new member/i }),
        __assign(__assign({}, both), { titleText: /today is my first day/i }),
        __assign(__assign({}, both), { titleText: /today I start/i }),
        __assign(__assign({}, both), { titleText: /(NoFap|no fap|no-fap) from today/i }),
        __assign(__assign({}, both), { titleText: /(gonna|going to) start today/i }),
        __assign(__assign({}, both), { titleText: /(quitting|quiting|starting) ?(NoFap|no fap|no-fap)? (now|today)/i }),
        __assign(__assign({}, both), { titleText: /(gonna|going) ?(to)? start (nofap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /gonna start to stop watching porn from now/i }),
        __assign(__assign({}, both), { titleText: /journey (start|begins)/i }),
        __assign(__assign({}, both), { titleText: /it begins here/i }),
        __assign(__assign({}, both), { titleText: /(here|now) it begins/i }),
        __assign(__assign({}, both), { titleText: /the cycle stops here/i }),
        __assign(__assign({}, both), { titleText: /officially starting (NoFap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /beginning of my Journey in (NoFap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /beginning the Challenge/i }),
        __assign(__assign({}, both), { titleText: /Today starts my journey/i }),
        __assign(__assign({}, both), { titleText: /So finally (Let's|let’s|lets) begin/i }),
        // START
        { titleText: /^day one/i },
        { titleText: /day (1|one) (bby|baby)/i },
        { titleText: /why I stopped fapping/i },
        { titleText: /the beginning/i },
        __assign(__assign({}, both), { titleText: /about to start/i }),
        __assign(__assign({}, both), { titleText: /How to start\?/i }),
        __assign(__assign({}, both), { titleText: /a new start/i }),
        __assign(__assign({}, both), { titleText: /trying to begin/i }),
        __assign(__assign({}, both), { titleText: /(I’m|I'm|im|I am) ready to start/i }),
        __assign(__assign({}, both), { titleText: /I start my journey from now/i }),
        __assign(__assign({}, both), { titleText: /joined reddit today/i }),
        __assign(__assign({}, both), { titleText: /where to start/i }),
        __assign(__assign({}, both), { titleText: /(wanna|want|trying) to start/i }),
        __assign(__assign({}, both), { titleText: /started yesterday/i }),
        __assign(__assign({}, both), { titleText: /Start of \d+ days/i }),
        __assign(__assign({}, both), { titleText: /how do I start\?/i }),
        __assign(__assign({}, both), { titleText: /why (I’m|I'm|im|I am) starting/i }),
        __assign(__assign({}, both), { titleText: /^(starting|started)(\.|\!)?$/i }),
        __assign(__assign({}, both), { titleText: /starting my journey/i }),
        __assign(__assign({}, both), { titleText: /Starting this properly now/i }),
        __assign(__assign({}, both), { titleText: /finally starting tonight/i }),
        __assign(__assign({}, both), { titleText: /(starting|started|starts) (now|today)/i }),
        __assign(__assign({}, both), { titleText: /(starting|started) .* (streak|first|run)/i }),
        __assign(__assign({}, both), { titleText: /(starting|started) days of (nofap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /starting .* challenge/i }),
        __assign(__assign({}, both), { titleText: /(I’m|I'm|im|I am) starting/i }),
        __assign(__assign({}, both), { titleText: /starting .* journey/i }),
        __assign(__assign({}, both), { titleText: /just starting/i }),
        __assign(__assign({}, both), { titleText: /today I stop forever/i }),
        // { titleText: /starting (NoFap|no fap|no-fap)/i }, // too broad in my opinion
        { messageText: /starting ?(from)? today/i },
        { messageText: /starting today i am done/i },
        __assign(__assign({}, both), { titleText: /starting at \d+/i }),
        __assign(__assign({}, both), { titleText: /started (nofap|no fap|no-fap) today/i }),
        __assign(__assign({}, both), { titleText: /(just) (begun|started)/i }),
        __assign(__assign({}, both), { titleText: /getting started/i }),
        __assign(__assign({}, both), { titleText: /\d+ year(s)? old starting (nofap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /how do I begin/i }),
        __assign(__assign({}, both), { titleText: /Streak starts here/i }),
        __assign(__assign({}, both), { titleText: /(decided|deciding) to start/i }),
        __assign(__assign({}, both), { titleText: /start to my Journey/i }),
        __assign(__assign({}, both), { titleText: /Just began my journey/i }),
        __assign(__assign({}, both), { titleText: /journey to porn free/i }),
        __assign(__assign({}, both), { titleText: /start of (a new|the) journey/i }),
        __assign(__assign({}, both), { titleText: /I decided it's time to quit porn/i }),
        { messageText: /Today (starts|i start) my journey/i },
        { messageText: /(I’m|I'm|im|i am) starting today/i },
        __assign(__assign({}, both), { titleText: /day (one|1) of /i }),
        __assign(__assign({}, both), { titleText: /day (one|1) without fapping/i }),
        __assign(__assign({}, both), { titleText: /this is day (one|1)/i }),
        __assign(__assign({}, both), { titleText: /day (one|1) Started/i }),
        __assign(__assign({}, both), { titleText: /day (one|1) (Let's|let’s|lets) go/i }),
        __assign(__assign({}, both), { titleText: /(Let's|let’s|lets) go (nofap|no fap|no-fap) day (one|1)/i }),
        __assign(__assign({}, both), { titleText: /(Let's|let’s|lets) get this started/i }),
        __assign(__assign({}, both), { titleText: /(nofap|no fap|no-fap) day (1|one)/i }),
        __assign(__assign({}, both), { titleText: /day (1|one) (nofap|no fap|no-fap) /i }),
        __assign(__assign({}, both), { titleText: /^day 1(\.|\!)?$/i }),
        __assign(__assign({}, both), { titleText: /^day 1 /i }),
        __assign(__assign({}, both), { titleText: /^day 1 of (nofap|no fap|no-fap) journey/i }),
        __assign(__assign({}, both), { titleText: /^1 day of (nofap|no fap|no-fap) journey/i }),
        __assign(__assign({}, both), { titleText: /Day 1(\:|\.)? Here we go/i }),
        __assign(__assign({}, both), { titleText: /officially day (1|one)/i }),
        __assign(__assign({}, both), { titleText: /today is day (1|one)/i }),
        __assign(__assign({}, both), { titleText: /^day (one|1) of (no fap|reboot|re boot)/i }),
        __assign(__assign({}, both), { titleText: /^day (one|1) no/i }),
        __assign(__assign({}, both), { titleText: /^day (one|1)$/i }),
        // FIRST
        { titleText: /first post/i },
        { titleText: /first time doing this/i },
        { titleText: /^first time/i },
        { titleText: /(first|1st) (day)/i },
        __assign(__assign({}, both), { titleText: /(it is|it's|it’s) my first day in this Journey/i }),
        __assign(__assign({}, both), { titleText: /first time ?(on)? (nofap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /first time .* looking for advice/i }),
        __assign(__assign({}, both), { titleText: /New beginnings/i }),
        __assign(__assign({}, both), { titleText: /Trying this again after/i }),
        __assign(__assign({}, both), { titleText: /First day without/i }),
        __assign(__assign({}, both), { titleText: /first timer/i }),
        __assign(__assign({}, both), { titleText: /Today I start my journey/i }),
        __assign(__assign({}, both), { titleText: /here for the first time/i }),
        __assign(__assign({}, both), { titleText: /Starting this day/i }),
        __assign(__assign({}, both), { titleText: /not sure I can beat this/i }),
        { messageText: /this is gonna be my first day to nofap/i },
    ];

    var toStartAgainAdviceRegexArray = [
        __assign(__assign({}, both), { titleText: /(begin|(Let's|let’s|lets) do this) again/i }),
        __assign(__assign({}, both), { titleText: /gonna try again/i }),
        __assign(__assign({}, both), { titleText: /^Beginning Again$/i }),
        __assign(__assign({}, both), { titleText: /trying ?(nofap|no fap|no-fap|this|it)? again/i }),
        __assign(__assign({}, both), { titleText: /Trying to start ?(nofap|no fap|no-fap|this)? again/i }),
        __assign(__assign({}, both), { titleText: /decided to try ?(nofap|no fap|no-fap|this)? again/i }),
        __assign(__assign({}, both), { titleText: /^trying again$/i }),
        __assign(__assign({}, both), { titleText: /day (1|one) again/i }),
        __assign(__assign({}, both), { titleText: /starting, again/i }),
        __assign(__assign({}, both), { titleText: /^Starting again../i }),
        __assign(__assign({}, both), { titleText: /giving (nofap|no fap|no-fap|this) another go/i }),
        __assign(__assign({}, both), { titleText: /(Let's|let’s|lets) try this again/i }),
        __assign(__assign({}, both), { titleText: /gonna reboot again/i }),
        __assign(__assign({}, both), { titleText: /give it another go/i }),
        __assign(__assign({}, both), { titleText: /Starting up again/i }),
        __assign(__assign({}, both), { titleText: /Finally back on/i }),
        __assign(__assign({}, both), { titleText: /This is my .* time trying/i }),
        __assign(__assign({}, both), { titleText: /Any advices for my second attempt/i }),
        __assign(__assign({}, both), { titleText: /I going to restart/i }),
        __assign(__assign({}, both), { titleText: /going to try again/i }),
        __assign(__assign({}, both), { titleText: /give this another shot/i }),
        __assign(__assign({}, both), { titleText: /gonna start over today/i }),
        __assign(__assign({}, both), { titleText: /starting (nofap|no fap|no-fap) again/i }),
        __assign(__assign({}, both), { titleText: /^starting ?(nofap|no fap|no-fap|this|it)? again(\.)?$/i }),
        __assign(__assign({}, both), { titleText: /doing (nofap|no fap|no-fap) again/i }),
        __assign(__assign({}, both), { titleText: /(Let's|let’s|lets) start ?(nofap|no fap|no-fap|this)? again/i }),
        __assign(__assign({}, both), { titleText: /Back at it again/i }),
        __assign(__assign({}, both), { titleText: /(It’s|It's|its) my second attempt/i }),
        __assign(__assign({}, both), { titleText: /once again (going for|attempt)/i }),
        __assign(__assign({}, both), { titleText: /day (1|0) yet again/i }),
        __assign(__assign({}, both), { titleText: /back on my ?(nofap|no fap|no-fap)? journey/i }),
        __assign(__assign({}, both), { titleText: /coming back to (nofap|no fap|no-fap)/i }),
        // TRY AGAIN
        { titleText: /one last try/i, },
        { titleText: /starting over/i },
        { titleText: /need to start fresh/i, },
        { messageText: /I will give (nofap|no fap|no-fap|it) another try/i, },
    ];

    // TODO FIX THIS UP
    var toGeneralAdviceRegexArray = [
        // MOTIVATION
        { titleText: /please I need motivation/i },
        { titleText: /I have a serious addiction to masturbation/i },
        { titleText: /I really need help/i },
        { titleText: /help please/i },
        { titleText: /How to stop/i },
        __assign(__assign({}, both), { titleText: /need some ?(more|serious)? (inspiration|motivation)/i }),
        { messageText: /any motivation or advice is welcome/i },
        { messageText: /any words of encouragement/i },
        { messageText: /(I’ll|ill|I'll)  definitely be open to anything/i },
        // ADVICE
        { titleText: /I need ?(.*) help/i },
        { titleText: /^I need advice$/i },
        { titleText: /^tips\?$/i },
        { titleText: /.* any tips\?$/i },
        { titleText: /^need tips$/i },
        { titleText: /^Looking for advice$/i },
        { titleText: /^Need advice$/i },
        { titleText: /^help required$/i },
        __assign(__assign({}, both), { titleText: /For those with long streaks/i }),
        __assign(__assign({}, both), { titleText: /need motivation/i }),
        __assign(__assign({}, both), { titleText: /Any tips how to stop/i }),
        __assign(__assign({}, both), { titleText: /this has to stop/i }),
        __assign(__assign({}, both), { titleText: /Feeling like quitting (this|the) streak/i }),
        __assign(__assign({}, both), { titleText: /give me tips on how/i }),
        __assign(__assign({}, both), { titleText: /asking for advice and motivation/i }),
        __assign(__assign({}, both), { titleText: /tips on how to do it/i }),
        __assign(__assign({}, both), { titleText: /I feel helpless/i }),
        __assign(__assign({}, both), { titleText: /Looking for Tips/i }),
        __assign(__assign({}, both), { titleText: /could use some advice/i }),
        __assign(__assign({}, both), { titleText: /Beginner, need some advice/i }),
        __assign(__assign({}, both), { titleText: /How do you do it?/i }),
        __assign(__assign({}, both), { titleText: /what other steps/i }),
        __assign(__assign({}, both), { titleText: /any help or advice/i }),
        __assign(__assign({}, both), { titleText: /does anyone have tips/i }),
        __assign(__assign({}, both), { titleText: /(It’s|its|It's|it is) already hard/i }),
        __assign(__assign({}, both), { titleText: /please give me some/i }),
        __assign(__assign({}, both), { titleText: /Tried many times and always fail/i }),
        __assign(__assign({}, both), { titleText: /confused and lost/i }),
        __assign(__assign({}, both), { titleText: /I always fail/i }),
        __assign(__assign({}, both), { titleText: /stuck in this cycle/i }),
        __assign(__assign({}, both), { titleText: /I so badly want/i }),
        __assign(__assign({}, both), { titleText: /guys I need your help/i }),
        __assign(__assign({}, both), { titleText: /how do I avoid relapse/i }),
        __assign(__assign({}, both), { titleText: /need your suggestion/i }),
        __assign(__assign({}, both), { titleText: /how do i do this/i }),
        __assign(__assign({}, both), { titleText: /what can I do to/i }),
        __assign(__assign({}, both), { titleText: /any help appreciated/i }),
        __assign(__assign({}, both), { titleText: /(cant|can't|can’t) seem to make it past/i }),
        __assign(__assign({}, both), { titleText: /(all|Any) tips (are|will be) welcome/i }),
        __assign(__assign({}, both), { titleText: /some (advice|tips) to stay strong/i }),
        __assign(__assign({}, both), { titleText: /need some help/i }),
        __assign(__assign({}, both), { titleText: /I want to stop any advice/i }),
        __assign(__assign({}, both), { titleText: /would love to know how you/i }),
        __assign(__assign({}, both), { titleText: /if you could give me some tips/i }),
        __assign(__assign({}, both), { titleText: /How did you ?(guys)? break this bad habit/i }),
        __assign(__assign({}, both), { titleText: /(cant|can't|can’t) manage to stop/i }),
        __assign(__assign({}, both), { titleText: /What are your best strategies/i }),
        __assign(__assign({}, both), { titleText: /Please send me some tips how to not get horny/i }),
        __assign(__assign({}, both), { titleText: /What finally gave you success/i }),
        __assign(__assign({}, both), { titleText: /how does one quit porn/i }),
        __assign(__assign({}, both), { titleText: /porn addiction is killing me/i }),
        __assign(__assign({}, both), { titleText: /how do guys quit porn/i }),
        __assign(__assign({}, both), { titleText: /need tips and tricks/i }),
        __assign(__assign({}, both), { titleText: /link of your (web)?site/i }),
        __assign(__assign({}, both), { titleText: /pl(z|s) link me/i }),
        __assign(__assign({}, both), { titleText: /Does anyone have some (tips|advice)/i }),
        __assign(__assign({}, both), { titleText: /stop me from watching porn/i }),
        __assign(__assign({}, both), { titleText: /no matter what I do/i }),
        __assign(__assign({}, both), { titleText: /if anyone can offer tips/i }),
        __assign(__assign({}, both), { titleText: /I (cant|can't|can’t) go longer than a day/i }),
        __assign(__assign({}, both), { titleText: /I (cant|can't|can’t) control my self/i }),
        __assign(__assign({}, both), { titleText: /(cant|can't|can’t) stop watching porn/i }),
        __assign(__assign({}, both), { titleText: /I (don’t|don't|dont) know how I should stop/i }),
        __assign(__assign({}, both), { titleText: /I need help or advice or anything/i }),
        __assign(__assign({}, both), { titleText: /I (don’t|don't|dont) know how to start/i }),
        __assign(__assign({}, both), { titleText: /(I’m|im|I'm|I am) so addicted I don’t even want to quit/i }),
        __assign(__assign({}, both), { titleText: /How did you manage to stop\?/i }),
        __assign(__assign({}, both), { titleText: /Tips to help in times of struggle\?/i }),
        __assign(__assign({}, both), { titleText: /appreciate anything you guys have to say/i }),
        __assign(__assign({}, both), { titleText: /I have no way out right now/i }),
        __assign(__assign({}, both), { titleText: /Got any tips for/i }),
        __assign(__assign({}, both), { titleText: /could share some tips/i }),
        __assign(__assign({}, both), { titleText: /What should I do\?/i }),
        __assign(__assign({}, both), { titleText: /Tips on how to stop/i }),
        __assign(__assign({}, both), { titleText: /Any Tips or Tricks/i }),
        __assign(__assign({}, both), { titleText: /advice on how to keep/i }),
        __assign(__assign({}, both), { titleText: /if someone guided me/i }),
        __assign(__assign({}, both), { titleText: /Can you guys give me tips/i }),
        __assign(__assign({}, both), { titleText: /give me tips on how to stop it/i }),
        __assign(__assign({}, both), { titleText: /What am I doing wrong\?/i }),
        __assign(__assign({}, both), { titleText: /can you tell me some tips or some ways you can fight the urges/i }),
        __assign(__assign({}, both), { titleText: /Can you give me a advice to make it easier/i }),
        __assign(__assign({}, both), { titleText: /any ideas or advice on (quitting|quiting)/i }),
        __assign(__assign({}, both), { titleText: /any tips on how to maintain a ?(long)? streak/i }),
        __assign(__assign({}, both), { titleText: /please give your suggestions and tips/i }),
        __assign(__assign({}, both), { titleText: /please suggest how can I/i }),
        __assign(__assign({}, both), { titleText: /Looking for advice on my relapses/i }),
        __assign(__assign({}, both), { titleText: /need (NoFap|no fap|no-fap) tips/i }),
        __assign(__assign({}, both), { titleText: /any tips to stop (fapping|mast)/i }),
        __assign(__assign({}, both), { titleText: /any tips to (stop|quit)\?/i }),
        __assign(__assign({}, both), { titleText: /any tips on how to (stop|quit|get back)/i }),
        __assign(__assign({}, both), { titleText: /any tips on how to (stop|quit)\?/i }),
        __assign(__assign({}, both), { titleText: /Tips for (quitting|quiting) (porn|masturbation)/i }),
        __assign(__assign({}, both), { titleText: /need any advice or help/i }),
        __assign(__assign({}, both), { titleText: /Any Tips for surviving/i }),
        __assign(__assign({}, both), { titleText: /(I’m|im|I'm|I am) desperate for help/i }),
        __assign(__assign({}, both), { titleText: /I honestly (cant|can't|can’t) do it/i }),
        __assign(__assign({}, both), { titleText: /what you guys recommend me/i }),
        __assign(__assign({}, both), { titleText: /If i stop will i get back to normal/i }),
        __assign(__assign({}, both), { titleText: /Anything would be massively appreciated/i }),
        __assign(__assign({}, both), { titleText: /I need some advice/i }),
        __assign(__assign({}, both), { titleText: /need some general advice/i }),
        __assign(__assign({}, both), { titleText: /I really want to stop fapping and watching porn/i }),
        __assign(__assign({}, both), { titleText: /scared that i will relapse(,)? some tips/i }),
        __assign(__assign({}, both), { titleText: /Need Advice to fight porn addiction/i }),
        __assign(__assign({}, both), { titleText: /(I’m|im|I'm|I am) an addict please help me with some advice/i }),
        __assign(__assign({}, both), { titleText: /if anyone has (advice|tips) for a (beginner|novice)/i }),
        __assign(__assign({}, both), { titleText: /(I’m|im|I'm|I am) \d+ and addicted to/i }),
        __assign(__assign({}, both), { titleText: /(I’ve|ive|I've|I have) tried so many things(,)? but/i }),
        __assign(__assign({}, both), { titleText: /What are your methods for dealing with failure/i }),
        __assign(__assign({}, both), { titleText: /Any tips to get me past the first week/i }),
        __assign(__assign({}, both), { titleText: /I (want to|wanna) stop this immediately/i }),
        __assign(__assign({}, both), { titleText: /I appreciate anyone who can give some tips/i }),
        __assign(__assign({}, both), { titleText: /share how (you|u) dealt with this problem/i }),
        __assign(__assign({}, both), { titleText: /can someone ?(please)? help me/i }),
        __assign(__assign({}, both), { titleText: /please someone motivate me/i }),
        __assign(__assign({}, both), { titleText: /please help me/i }),
        __assign(__assign({}, both), { titleText: /I feel ?(really)? guilty/i }),
        __assign(__assign({}, both), { titleText: /give me some (advice|advise|tips)/i }),
        __assign(__assign({}, both), { titleText: /(don’t|don't|dont) know how to stop/i }),
        __assign(__assign({}, both), { titleText: /still (cant|can't|can’t) quit masturbation/i }),
        __assign(__assign({}, both), { titleText: /How do I keep going\?/i }),
        __assign(__assign({}, both), { titleText: /how do you avoid temptation/i }),
        __assign(__assign({}, both), { titleText: /Tips on resisting/i }),
        __assign(__assign({}, both), { titleText: /suggest me some ways to help/i }),
        __assign(__assign({}, both), { titleText: /Can anyone help me/i }),
        __assign(__assign({}, both), { titleText: /What do (you|u) do when (you|u) really want to do it/i }),
        __assign(__assign({}, both), { titleText: /what can I do to change/i }),
        __assign(__assign({}, both), { titleText: /give me some pointers/i }),
        __assign(__assign({}, both), { titleText: /any tips on how to do it/i }),
        __assign(__assign({}, both), { titleText: /looking for something that will make me stop/i }),
        __assign(__assign({}, both), { titleText: /I wanted to know any advice/i }),
        __assign(__assign({}, both), { titleText: /Any advice is ?(much)? appreci/i }),
        __assign(__assign({}, both), { titleText: /anybody could help/i }),
        __assign(__assign({}, both), { titleText: /I would appreciate (any|all the) advice/i }),
        __assign(__assign({}, both), { titleText: /please tell me what (should I|to) do\?/i }),
        __assign(__assign({}, both), { titleText: /share their conclusions about how they overcame/i }),
        __assign(__assign({}, both), { titleText: /any improvements are welcome/i }),
        __assign(__assign({}, both), { titleText: /wondering if there are other techniques and suggestions/i }),
        __assign(__assign({}, both), { titleText: /advices about what to do if I relapse/i }),
        __assign(__assign({}, both), { titleText: /would appreciate the guidance/i }),
        __assign(__assign({}, both), { titleText: /How (can|do) I get back on track/i }),
        __assign(__assign({}, both), { titleText: /give me help/i }),
        __assign(__assign({}, both), { titleText: /Help needed/i }),
        __assign(__assign({}, both), { titleText: /experienced can you help/i }),
        __assign(__assign({}, both), { titleText: /i try to resist but i fail/i }),
        __assign(__assign({}, both), { titleText: /how to prevent myself/i }),
        __assign(__assign({}, both), { titleText: /I need some support/i }),
        __assign(__assign({}, both), { titleText: /getting tough now/i }),
        __assign(__assign({}, both), { titleText: /Pl(z|s)* help/i }),
        __assign(__assign({}, both), { titleText: /how the fuck can I stop/i }),
        __assign(__assign({}, both), { titleText: /Advice for getting over the/i }),
        __assign(__assign({}, both), { titleText: /How do I take back control/i }),
        __assign(__assign({}, both), { titleText: /Help keep relapsing/i }),
        __assign(__assign({}, both), { titleText: /I feel kind of lost/i }),
        __assign(__assign({}, both), { titleText: /what tips do you have to someone struggling/i }),
        __assign(__assign({}, both), { titleText: /Is there a light at the end of the tunnel/i }),
        __assign(__assign({}, both), { titleText: /If anyone can give me advice/i }),
        __assign(__assign({}, both), { titleText: /Motivation needed!/i }),
        __assign(__assign({}, both), { titleText: /can someone guide me/i }),
        __assign(__assign({}, both), { titleText: /how does one overcome/i }),
        __assign(__assign({}, both), { titleText: /any tips on how to/i }),
        __assign(__assign({}, both), { titleText: /Any replies would be/i }),
        __assign(__assign({}, both), { titleText: /can't seem to go past/i }),
        __assign(__assign({}, both), { titleText: /What should I do to try/i }),
        __assign(__assign({}, both), { titleText: /I need motivation/i }),
        __assign(__assign({}, both), { titleText: /I need support/i }),
        __assign(__assign({}, both), { titleText: /In need of advice/i }),
        __assign(__assign({}, both), { titleText: /\d+M and need help/i }),
        { titleText: /^(no fap|nofap|no-fap)(\.)?$/i, messageText: /(Any)? (help|advice|tips)\?/i },
        __assign(__assign({}, both), { titleText: /I keep failing/i }),
        __assign(__assign({}, both), { titleText: /I ?(still)? (don’t|don't|dont) know what to do/i }),
        __assign(__assign({}, both), { titleText: /still (cant|can't|can’t) do it/i }),
        { messageText: /How do I stop\?/i },
        { messageText: /anyone plzzzz/i },
        { messageText: /I (don’t|don't|dont) know how to convince (my self|myself) to give ?(it)? up/i },
        { messageText: /if you can please give a better advice/i },
        { messageText: [/need suggestions/i, /feel stuck/i] },
        __assign(__assign({}, both), { titleText: /How Do I Quit Porn/i }),
        __assign(__assign({}, both), { titleText: /I cannot do this/i }),
        __assign(__assign({}, both), { titleText: /I keep trying over and over/i }),
        __assign(__assign({}, both), { titleText: /trying for so long/i }),
        __assign(__assign({}, both), { titleText: /have advice to not relapse/i }),
        __assign(__assign({}, both), { titleText: /Your (support|comments|messages)/i }),
        __assign(__assign({}, both), { titleText: /Any help would be appreciated/i }),
        __assign(__assign({}, both), { titleText: /Looking how to start/i }),
        __assign(__assign({}, both), { titleText: /^how to quit(\?)?$/i }),
        __assign(__assign({}, both), { titleText: /best way to stop masturbating\?/i }),
        __assign(__assign({}, both), { titleText: /how can I (stop|survive this journey)/i }),
        __assign(__assign({}, both), { titleText: /how do I avoid relapsing/i }),
        __assign(__assign({}, both), { titleText: /How not to get into an Addiction/i }),
        __assign(__assign({}, both), { titleText: /how to get past .* (week|days|day)/i }),
        __assign(__assign({}, both), { titleText: /someone tell me how to (stop|quit)/i }),
        __assign(__assign({}, both), { titleText: /How do I regain (self control|self-control)/i }),
        __assign(__assign({}, both), { titleText: /What are some things I should do to keep my mind/i }),
        __assign(__assign({}, both), { titleText: /Can (somebody|some body|someone|some one) who made it tell me/i }),
        __assign(__assign({}, both), { titleText: /guys, I need help/i }),
        __assign(__assign({}, both), { titleText: /Been trying to quit for years/i }),
        __assign(__assign({}, both), { titleText: /How do I beat this addiction\?/i }),
        __assign(__assign({}, both), { titleText: /How do I stop\!\?/i }),
        __assign(__assign({}, both), { titleText: /How to maintain a long streak\!\?/i }),
        __assign(__assign({}, both), { titleText: /How do I conquer this habit/i }),
        __assign(__assign({}, both), { titleText: /How do I stop binging/i }),
        __assign(__assign({}, both), { titleText: /How do I let go of this habit/i }),
        __assign(__assign({}, both), { titleText: /Any tips for a ?(new)? beginner/i }),
        __assign(__assign({}, both), { titleText: /Is it even possible to free yourself from/i }),
        __assign(__assign({}, both), { titleText: /if anyone has successfully gotten out/i }),
        __assign(__assign({}, both), { titleText: /i want to stop ?(it)? but i dont know how/i }),
        __assign(__assign({}, both), { titleText: /ask for some useful advice/i }),
        __assign(__assign({}, both), { titleText: /ask for some advice to stop fapping/i }),
        __assign(__assign({}, both), { titleText: /no (masterbation|masturbation) is hard for me/i }),
        __assign(__assign({}, both), { titleText: /shit is getting rough/i }),
        __assign(__assign({}, both), { titleText: /(It’s|its|It's|it is) impossible/i }),
        __assign(__assign({}, both), { titleText: /trying for years/i }),
        __assign(__assign({}, both), { titleText: /(failing|falling|struggling) badly/i }),
        __assign(__assign({}, both), { titleText: /addicted like hell/i }),
        __assign(__assign({}, both), { titleText: /(I've|I’ve|Ive) failed countless/i }),
        __assign(__assign({}, both), { titleText: /feel like shit/i }),
        __assign(__assign({}, both), { titleText: /things are getting worse/i }),
        __assign(__assign({}, both), { titleText: /Trying Nofap .* years/i }),
        __assign(__assign({}, both), { titleText: /(cant|can't|can’t) make it more than/i }),
        __assign(__assign({}, both), { titleText: /I feel like relapsing/i }),
        __assign(__assign({}, both), { titleText: /I (cant|can't|can’t) do it/i }),
        __assign(__assign({}, both), { titleText: /Why do I feel guilty/i }),
        __assign(__assign({}, both), { titleText: /Anyone else get crazy depressed/i }),
        __assign(__assign({}, both), { titleText: /I ?(really)? (don’t|don't|dont) know what to do/i }),
        // HELP
        { titleText: /^Need help/i },
        { titleText: /^help(\.)?$/i },
        { titleText: /^Please help/i },
        { titleText: /^please help me(\.|\?)?$/i },
        { titleText: /^help me please(\.|\?)?$/i },
        { titleText: /^help me$/i },
        __assign(__assign({}, both), { titleText: /really needing some help/i }),
        __assign(__assign({}, both), { titleText: /How can I abstain from/i }),
        __assign(__assign({}, both), { titleText: /need help and advice/i }),
        __assign(__assign({}, both), { titleText: /I really, really need help/i }),
        __assign(__assign({}, both), { titleText: /How do i recover my (mind|body)/i }),
        __assign(__assign({}, both), { titleText: /need ?(some)? help with stopping/i }),
        __assign(__assign({}, both), { titleText: /(cant|can't|can’t) control help me please/i }),
        __assign(__assign({}, both), { titleText: /help me out from relapsing/i }),
        __assign(__assign({}, both), { titleText: /hope someone can tell me/i }),
        __assign(__assign({}, both), { titleText: /Wanna stop but how/i }),
        __assign(__assign({}, both), { titleText: /How do I overcome this/i }),
        __assign(__assign({}, both), { titleText: /(Anyone|any one) have any tips to overcome/i }),
        __assign(__assign({}, both), { titleText: /How do you stop masturbating/i }),
        __assign(__assign({}, both), { titleText: /any tips to avoid fapping/i }),
        __assign(__assign({}, both), { titleText: /I (cant|can't|can’t) keep doing this/i }),
        __assign(__assign({}, both), { titleText: /Can someone give me a few tips/i }),
        __assign(__assign({}, both), { titleText: /i tried everything to stop/i }),
        __assign(__assign({}, both), { titleText: /I JUST WANT TO STOP/i }),
        __assign(__assign({}, both), { titleText: /Would love if you help me/i }),
        __assign(__assign({}, both), { titleText: /having a hard time/i }),
        __assign(__assign({}, both), { titleText: /(cant|can't|can’t) get over \d+ days/i }),
        __assign(__assign({}, both), { titleText: /(cant|can't|can’t) seem to get past \d+ days/i }),
        __assign(__assign({}, both), { titleText: /how to get more motivation/i }),
        __assign(__assign({}, both), { titleText: /Please give me advice on how to/i }),
        __assign(__assign({}, both), { titleText: /How to stop having a dirty mind/i }),
        __assign(__assign({}, both), { titleText: /any tips on quitting/i }),
        __assign(__assign({}, both), { titleText: /Any help would be much appreciated/i }),
        __assign(__assign({}, both), { titleText: /can take my mind off it/i }),
        __assign(__assign({}, both), { titleText: /have ways to combat this/i }),
        __assign(__assign({}, both), { titleText: /help me with this addiction/i }),
        { messageText: /So please guys, I need your help/i },
        __assign(__assign({}, both), { titleText: /I just want to stop this thing/i }),
        __assign(__assign({}, both), { titleText: /What did you guys do to stop ?(thinking about)? (porn|fapping)/i }),
        __assign(__assign({}, both), { titleText: /need some guidance/i }),
        __assign(__assign({}, both), { titleText: /looking for some guidance/i }),
        __assign(__assign({}, both), { titleText: /would like some help/i }),
        __assign(__assign({}, both), { titleText: /need some advice from pro/i }),
        __assign(__assign({}, both), { titleText: /tell me the secret/i }),
        __assign(__assign({}, both), { titleText: /what steps should I take\?/i }),
        __assign(__assign({}, both), { titleText: /someone please guide me/i }),
        __assign(__assign({}, both), { titleText: /I would be grateful if someone could help me (on|in) this journey?/i }),
        __assign(__assign({}, both), { titleText: /What tips do you ?(guys)? have to build (self discipline|self-discipline)\?/i }),
        __assign(__assign({}, both), { titleText: /What has helped you the most during your/i }),
        __assign(__assign({}, both), { titleText: /keep relapsing everyday/i }),
        __assign(__assign({}, both), { titleText: /how to stop relapsing on day/i }),
        __assign(__assign({}, both), { titleText: /(need|want) to (quit|stop) (masturbating|porn)/i }),
        __assign(__assign({}, both), { titleText: /(It’s|its|It's|it is)  time to stop/i }),
        __assign(__assign({}, both), { titleText: /what have I become?/i }),
        __assign(__assign({}, both), { titleText: /trying to make this attempt count/i }),
        __assign(__assign({}, both), { titleText: /need help before (It’s|its|It's|it is) too late/i }),
        __assign(__assign({}, both), { titleText: /I (don’t|don't|dont) (wanna|want to) masturbate anymore/i }),
        __assign(__assign({}, both), { titleText: /How did you stop Edging/i }),
        __assign(__assign({}, both), { titleText: /trying hard to stop/i }),
        __assign(__assign({}, both), { titleText: /How can you ?(guys)? just stop/i }),
    ];

    var toWetdreamAdviceRegexArray = [
        { titleText: /^(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)$/i },
        __assign(__assign({}, both), { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) advice/i }),
        __assign(__assign({}, both), { titleText: /had a (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /how to stop (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /how to deal with (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /wet dreamed this morning/i }),
        __assign(__assign({}, both), { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) on day/i }),
        __assign(__assign({}, both), { titleText: /are (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) a sign of progress/i }),
        __assign(__assign({}, both), { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) considered as relapse/i }),
        __assign(__assign({}, both), { titleText: /How do I stop (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /Feeling low after a (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /I('|’)m having (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /Does (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) relapse/i }),
        __assign(__assign({}, both), { titleText: /Is it ok to have (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /Is (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) a relapse/i }),
        __assign(__assign({}, both), { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) are killing me/i }),
        __assign(__assign({}, both), { titleText: /did you get (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /Do (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) count/i }),
        __assign(__assign({}, both), { titleText: /Do (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) breaks ?(NoFap|no fap|no-fap)? streak/i }),
        __assign(__assign({}, both), { titleText: /Lose benefits after a (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)\?/i }),
        __assign(__assign({}, both), { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) after a/i }),
        __assign(__assign({}, both), { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) (wont|won't|won’t) stop/i }),
        __assign(__assign({}, both), { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) every \d+/i }),
        __assign(__assign({}, both), { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) bad\?/i }),
        __assign(__assign({}, both), { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) = relapse/i }),
        __assign(__assign({}, both), { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) count as a relapse/i }),
        __assign(__assign({}, both), { titleText: /Does (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) is considered as a relapse/i }),
        __assign(__assign({}, both), { titleText: /Anybody have tips to avoid (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /had a (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) is it a relapse/i }),
        __assign(__assign({}, both), { titleText: /Is having ?(a)? (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /What if i have (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /Do (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) interfere with (NoFap|no fap|no-fap) benefits/i }),
        __assign(__assign({}, both), { titleText: /does (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) end my/i }),
        __assign(__assign({}, both), { titleText: /Experienced a (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /what to do after a (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        __assign(__assign({}, both), { titleText: /Does (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) break my streak/i }),
        __assign(__assign({}, both), { titleText: /I (had a|had|got) (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) (after|in the)/i }),
        __assign(__assign({}, both), { titleText: /way(s)? to reduce (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i }),
        // TITLE + MESSAGE
        { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /any solutions\?/ },
        { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /ways to avoid it\?/ },
        { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Is this normal\?/ },
        { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Does it reset progress\?/ },
        { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Should I worry about it/ },
        { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Any advice/ },
        { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /how do I avoid/ },
        { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Does it break my/ },
        { messageText: [/Is it normal/, /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i] },
    ];

    // remove from
    // I was about to relapse again
    // (almost) lost my longest streak
    var toStruggleAdviceRegexArray = [
        // STRUGGLE
        { titleText: /Feel like ?(I’m|I'm|im|I am)? slipping/i, },
        { titleText: /(I’m|I'm|im|I am) really struggling/i, },
        { titleText: /^help!$/i, },
        { titleText: /I CANT STOP(P)? HELP/i, },
        { titleText: /this is getting harder/i, },
        { titleText: /I really (can’t|can't|cant) stop/i, },
        { titleText: /why is this so hard/i, },
        { titleText: /am struggling every/i, },
        { titleText: /I (can’t|can't|cant) get past the .* mark/i, },
        { titleText: /(can’t|can't|cant) stop relapsing/i, },
        { titleText: /^Almost Failed$/i, },
        { titleText: /(starting|started) to feel depressed and hopeless/i, },
        { titleText: /I (can’t|can't|cant) get past day .*/i, },
        { titleText: /(can’t|can't|cant) get a streak going/i, },
        { titleText: /Struggling to (break|kick) this addiction/i, },
        { titleText: /Struggling to to get a new streak/i, },
        { titleText: /^Struggling$/i, },
        { titleText: /^Struggling on day /i, },
        { titleText: /been failing miserably/i, },
        { titleText: /already tempted to relapse/i, },
        { titleText: /tried countless of times before/i, },
        { titleText: /I (can’t|can't|cant) get my mind (of|off) it/i, },
        { titleText: /Still Struggling/i, },
        { titleText: /I just have to stop/i, },
        { titleText: /how do i get past day 1\?/i, },
        { titleText: /I ?(just)? (give up|(can’t|can't|cant) stop)/i },
        __assign(__assign({}, both), { titleText: /feeling very (depressed|aggressive)/i }),
        __assign(__assign({}, both), { titleText: /verge of slipping up/i }),
        __assign(__assign({}, both), { titleText: /tips on how to get over it/i }),
        __assign(__assign({}, both), { titleText: /losing my motivation to/i }),
        __assign(__assign({}, both), { titleText: /I have no motivation no energy nothing/i }),
        __assign(__assign({}, both), { titleText: /I want to kill myself badly/i }),
        __assign(__assign({}, both), { titleText: /Now I feel so shit/i }),
        __assign(__assign({}, both), { titleText: /I keep losing/i }),
        __assign(__assign({}, both), { titleText: /feel close to Giving (Up|in)/i }),
        __assign(__assign({}, both), { titleText: /guys (I’m|I'm|im|I am) struggling/i }),
        __assign(__assign({}, both), { titleText: /It literally feels impossible to quit/i }),
        __assign(__assign({}, both), { titleText: /^struggling (now|today|tonight)$/i }),
        __assign(__assign({}, both), { titleText: /back to my addiction .* I cannot stop/i }),
        __assign(__assign({}, both), { titleText: /urges hitting hard/i }),
        __assign(__assign({}, both), { titleText: /I honestly do not know what to do/i }),
        __assign(__assign({}, both), { titleText: /i (don’t|don't|dont) know how to just stop it/i }),
        __assign(__assign({}, both), { titleText: /I (can’t|can't|cant) (stop|quit) (masturbating|porn)/i }),
        __assign(__assign({}, both), { titleText: /not able to start .* journey again/i }),
        __assign(__assign({}, both), { titleText: /failed many times/i }),
        __assign(__assign({}, both), { titleText: /feeling extremely lonely/i }),
        __assign(__assign({}, both), { titleText: /stuck in the loop of relapse/i }),
        __assign(__assign({}, both), { titleText: /So tired of relapsing/i }),
        __assign(__assign({}, both), { titleText: /having a really hard time controlling my urges\?/i }),
        __assign(__assign({}, both), { titleText: /How can I get out of this hole\?/i }),
        __assign(__assign({}, both), { titleText: /reasons so that I (don’t|don't|dont) (.*)? relapse/i }),
        __assign(__assign({}, both), { titleText: /I (don’t|don't|dont) know what to do and I need help/i }),
        __assign(__assign({}, both), { titleText: /I (don’t|don't|dont) want this anymore/i }),
        __assign(__assign({}, both), { titleText: /not sure if I can reason my way through it any longer/i }),
        __assign(__assign({}, both), { titleText: /never (been|felt) so depressed/i }),
        __assign(__assign({}, both), { titleText: /might relapse tonight/i }),
        __assign(__assign({}, both), { titleText: /please I need help/i }),
        __assign(__assign({}, both), { titleText: /struggling right now/i }),
        __assign(__assign({}, both), { titleText: /been struggling with streak/i }),
        __assign(__assign({}, both), { titleText: /I (can’t|can't|cant) even pass 2 days /i }),
        // ABOUT TO RELAPSE
        { titleText: /(I’m|I'm|im|I am) about to relapse/i, },
        { titleText: /(I’m|I'm|im|I am) ?(really)? close to relapsing/i, },
        { titleText: /encourage me not to/i, },
        { titleText: /I keep relapsing/i, },
        { titleText: /^almost relapsed(\.)?$/i, },
        { titleText: /Feel Like (I’m|I'm|im|I am) Going To Relapse/i, },
        // EXHAUSTED
        { titleText: /^emotionally exhausted$/i, },
        { titleText: /So desensitized I literally feel nothing/i, },
        // * MESSAGES *
        { messageText: /Help me guys/i, },
        { messageText: /Any motivation would be great now/i, },
        { messageText: /Please motivate me to do better/i, },
        { messageText: /I have a very severe porn addiction/i, },
        __assign(__assign({}, both), { titleText: /I am losing my mind/i }),
        __assign(__assign({}, both), { titleText: /struggling so hard/i }),
        __assign(__assign({}, both), { titleText: /The struggle is real/i }),
        __assign(__assign({}, both), { titleText: /Struggling with addiction/i }),
        __assign(__assign({}, both), { titleText: /help guys what i should do/i }),
        __assign(__assign({}, both), { titleText: /Please help me out of this/i }),
        __assign(__assign({}, both), { titleText: /I (can’t|can't|cant) really keep any consistency/i }),
        __assign(__assign({}, both), { titleText: /I always end up binging/i }),
        __assign(__assign({}, both), { titleText: /I keep ?(on)? struggling with PMO/i }),
        __assign(__assign({}, both), { titleText: /I really need you guys to help me out here please/i }),
        __assign(__assign({}, both), { titleText: /feel loss and defeated/i }),
        __assign(__assign({}, both), { titleText: /I am relapsing again and again/i }),
        __assign(__assign({}, both), { titleText: /I cannot win this battle/i }),
    ];

    var toAccountabilityPartnerRegexArray = [
        { titleText: /^accountability(\.)?$/i },
        __assign(__assign({}, both), { titleText: /seeking a (Parter|partner)/i }),
        __assign(__assign({}, both), { titleText: /Looking for an accountability/i }),
        __assign(__assign({}, both), { titleText: /accountability (Parter|partner)/i }),
        __assign(__assign({}, both), { titleText: /accountability (Parter|partner)/i }),
        __assign(__assign({}, both), { titleText: /need (AP|accountability (Parter|partner))/i }),
    ];

    var toDealingWithUrgesAdviceRegexArray = [
        // URGES
        { titleText: /heavy urges/i },
        { titleText: /^getting (urges|the urge|cravings)$/i },
        { titleText: /(urges|the urge|cravings) at night/i },
        { titleText: /(urges|the urge|cravings) are strong/i },
        { titleText: /^strong urges$/i },
        __assign(__assign({}, both), { titleText: /urges are coming/i }),
        __assign(__assign({}, both), { titleText: /advice on how to beat the urge/i }),
        __assign(__assign({}, both), { titleText: /do to get over urges/i }),
        __assign(__assign({}, both), { titleText: /the urges are super strong/i }),
        __assign(__assign({}, both), { titleText: /I have an urge right now/i }),
        __assign(__assign({}, both), { titleText: /feeling the urge to release/i }),
        __assign(__assign({}, both), { titleText: /having a really strong urge right now/i }),
        __assign(__assign({}, both), { titleText: /^(urges|the urge|cravings)(\.)?$/i }),
        __assign(__assign({}, both), { titleText: /(urges|the urge|cravings)(\.)? Help me/i }),
        __assign(__assign({}, both), { titleText: /(I’m|im|I m|i'm) having (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /I (don’t|dont|don't) know if I can hold it/i }),
        __assign(__assign({}, both), { titleText: /usually deal with (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /How long does it take for the urges/i }),
        __assign(__assign({}, both), { titleText: /do the urges ever stop coming/i }),
        __assign(__assign({}, both), { titleText: /tired and have urges/i }),
        __assign(__assign({}, both), { titleText: /feel the urge to do it/i }),
        __assign(__assign({}, both), { titleText: /advice for preventing urges/i }),
        __assign(__assign({}, both), { titleText: /Some days ?(just)? seem harder/i }),
        __assign(__assign({}, both), { titleText: /Still having trouble with urges/i }),
        __assign(__assign({}, both), { titleText: /insane urges/i }),
        __assign(__assign({}, both), { titleText: /so hard to ignore the urges/i }),
        __assign(__assign({}, both), { titleText: /the urges come back/i }),
        __assign(__assign({}, both), { titleText: /I HAVE A SERIOUS URGE/i }),
        __assign(__assign({}, both), { titleText: /Trying to control my urge/i }),
        __assign(__assign({}, both), { titleText: /getting urges now/i }),
        __assign(__assign({}, both), { titleText: /Getting urge right now/i }),
        __assign(__assign({}, both), { titleText: /Advice for beating urges/i }),
        __assign(__assign({}, both), { titleText: /Just ended my best streak/i }),
        __assign(__assign({}, both), { titleText: /How do YOU cope with (.*)? urges/i }),
        { messageText: /someone tell me when (these|this) (urge|urges) will/i },
        // ARRAY - TODO test to see if this actually works
        { messageText: [/strong (urge|urges)/i, /(don’t|dont|don't) know how to deal with it/i] },
        { messageText: [/been getting urges/i, /motivate me/i] },
        __assign(__assign({}, both), { titleText: /(cant|can't|can’t) control my (urges|the urge|cravings) for more than one day/i }),
        __assign(__assign({}, both), { titleText: /constant urges/i }),
        __assign(__assign({}, both), { titleText: /getting urges help/i }),
        __assign(__assign({}, both), { titleText: /having strong urges/i }),
        __assign(__assign({}, both), { titleText: /advice on (fighting|resisting) (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /help (w|with) persistent urge/i }),
        __assign(__assign({}, both), { titleText: /help make me stop letting my urges/i }),
        __assign(__assign({}, both), { titleText: /help stop my (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /When (urges|the urge|cravings) get strong(,)? what should I do/i }),
        __assign(__assign({}, both), { titleText: /my (urges|the urge|cravings) at night/i }),
        __assign(__assign({}, both), { titleText: /Does anyone get (urges|the urge|cravings) at night when/i }),
        __assign(__assign({}, both), { titleText: /suggestions to stop the (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /any tips on things to do when you have (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /Any tips for controlling (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /Any tips cause the (urges|the urge|cravings) are to intense/i }),
        __assign(__assign({}, both), { titleText: /urges are getting (the)? better of me/i }),
        __assign(__assign({}, both), { titleText: /How do I (fight|resist) (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /How do I overcome ?(.*) (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /How to (control|handle|deal with) ?(these|the)? (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /how to beat .* (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /How do you guys keep fantasizing in check/i }),
        __assign(__assign({}, both), { titleText: /How do you stop the unsurmountable (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /how did you overcome the urge/i }),
        __assign(__assign({}, both), { titleText: /how do i survive the urge of/i }),
        __assign(__assign({}, both), { titleText: /How to kill a strong urge/i }),
        __assign(__assign({}, both), { titleText: /urges all the time/i }),
        __assign(__assign({}, both), { titleText: /use to beat the urges/i }),
        __assign(__assign({}, both), { titleText: /How to stop thinking about/i }),
        __assign(__assign({}, both), { titleText: /How do I stop these urges/i }),
        __assign(__assign({}, both), { titleText: /having urges while/i }),
        __assign(__assign({}, both), { titleText: /How to stop that urge/i }),
        __assign(__assign({}, both), { titleText: /advices about resisting those urges/i }),
        __assign(__assign({}, both), { titleText: /trying to resist my urges/i }),
        __assign(__assign({}, both), { titleText: /Very strong urge to relapse/i }),
        __assign(__assign({}, both), { titleText: /Couldn(’|')?t control the urge/i }),
        __assign(__assign({}, both), { titleText: /urges from hell/i }),
        __assign(__assign({}, both), { titleText: /getting the urges really bad/i }),
        __assign(__assign({}, both), { titleText: /very strong urges/i }),
        __assign(__assign({}, both), { titleText: /the urges are unreal/i }),
        __assign(__assign({}, both), { titleText: /just got the biggest urge ever/i }),
        __assign(__assign({}, both), { titleText: /Really struggling with fighting (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /having trouble fighting (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /need some advice to fight (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /struggling with (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /the (urges|the urge|cravings) are really bad/i }),
        __assign(__assign({}, both), { titleText: /temptation to peak is too damn high/i }),
        __assign(__assign({}, both), { titleText: /best way to fight (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /(couple of|past few) days .* constant (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /(it’s|it's|its|it is) hard to resist/i }),
        __assign(__assign({}, both), { titleText: /today was ?(really)? hard on (for me|me) to control the (urges|the urge|cravings)/i }),
        __assign(__assign({}, both), { titleText: /urges are ?(getting|becoming)? bigger and bigger/i }),
    ];

    var toPornBlockersAdviceRegexArray = [
        { titleText: /block porn site/i },
        { titleText: /^Porn blocker(s)?$/i },
        { titleText: /what website blocker/i },
        { titleText: /Website-blocking software/i },
        __assign(__assign({}, both), { titleText: /Porn blocker for (android|iPhone|pc|mac)/i }),
        __assign(__assign({}, both), { titleText: /how to block porn/i }),
        __assign(__assign({}, both), { titleText: /way to ban porn/i }),
        __assign(__assign({}, both), { titleText: /(perfect|best) porn blocker/i }),
        __assign(__assign({}, both), { titleText: /ban porn sites/i }),
        __assign(__assign({}, both), { titleText: /internet filters/i }),
        __assign(__assign({}, both), { titleText: /way to block porn/i }),
        __assign(__assign({}, both), { titleText: /Advice on Porn Block/i }),
        __assign(__assign({}, both), { titleText: /please advice any porn block/i }),
        __assign(__assign({}, both), { titleText: /Mac site blockers/i }),
        __assign(__assign({}, both), { titleText: /block adult content/i }),
        __assign(__assign({}, both), { titleText: /Good Blocker\?/i }),
        __assign(__assign({}, both), { titleText: /finding a porn blocker/i }),
        __assign(__assign({}, both), { titleText: /can I block porn on reddit/i }),
        __assign(__assign({}, both), { titleText: /How do I block NSFW/i }),
        __assign(__assign({}, both), { titleText: /need a porn (.*)? blocker/i }),
        __assign(__assign({}, both), { titleText: /what programs do you use to block porn/i }),
        __assign(__assign({}, both), { titleText: /any good (plugins|websites|apps|programs) .* blocks/i }),
        __assign(__assign({}, both), { titleText: /looking for more ways to block porn/i }),
        __assign(__assign({}, both), { titleText: /is there an app .* that blocks/i }),
        __assign(__assign({}, both), { titleText: /Good porn blockers for (mac|pc)/i }),
        __assign(__assign({}, both), { titleText: /Has anyone found a .* blocker/i }),
        __assign(__assign({}, both), { titleText: /Any ?(good)? porn blockers for/i }),
        __assign(__assign({}, both), { titleText: /Blockers for adult content/i }),
        __assign(__assign({}, both), { titleText: /looking for a way to block/i }),
        __assign(__assign({}, both), { titleText: /know any browser extensions/i }),
        __assign(__assign({}, both), { titleText: /can i block a website/i }),
        __assign(__assign({}, both), { titleText: /some way of blocking/i }),
        __assign(__assign({}, both), { titleText: /help applying filters/i }),
        __assign(__assign({}, both), { titleText: /how can I disable my/i }),
        __assign(__assign({}, both), { titleText: /Need Porn blocker/i }),
        __assign(__assign({}, both), { titleText: /recommend an app to block/i }),
        __assign(__assign({}, both), { titleText: /program that disables/i }),
        { messageText: [/an app/, /can block websites/] },
    ];

    var toMasturbateWithoutPornAdviceRegexArray = [
        __assign(__assign({}, both), { titleText: /Can (I|you) still mast(u|e)rbate (while (on|doing)|during) (NoFap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /Is masturbating without porn ?(a)? relapse/i }),
        __assign(__assign({}, both), { titleText: /Can I mast(u|e)rbate without porn/i }),
        // IS IT OKAY
        { titleText: /masturbation without porn/i },
        __assign(__assign({}, both), { titleText: /is it OK to mast(u|e)rbate/i }),
        __assign(__assign({}, both), { titleText: /is it OK to fap/i }),
        __assign(__assign({}, both), { titleText: /Is it still ?(a)? relapse if you mast(u|e)rbate/i }),
        __assign(__assign({}, both), { titleText: /a healthy way to (fap|mast(u|e)rbate)/i }),
        __assign(__assign({}, both), { titleText: /Is it ok to mast(u|e)rbate without watching porn/i }),
        __assign(__assign({}, both), { titleText: /is it better to fap without porn/i }),
        __assign(__assign({}, both), { titleText: /Do you ?(guys)? still mast(u|e)rbate?/i }),
        __assign(__assign({}, both), { titleText: /Is it ok to only fap once a/i }),
        __assign(__assign({}, both), { titleText: /is masturbating to thoughts as bad as/i }),
        __assign(__assign({}, both), { titleText: /confused on weather masturbating to your own thoughts is as bad/i }),
        __assign(__assign({}, both), { titleText: /Is it ok to (fap|mast(u|e)rbate) without porn/i }),
        __assign(__assign({}, both), { titleText: /Is masturbation ok\?/i }),
        __assign(__assign({}, both), { titleText: /good moderation for masturbation/i }),
        __assign(__assign({}, both), { titleText: /Is fapping without porn okay/i }),
        __assign(__assign({}, both), { titleText: /thoughts on fapping without porn/i }),
        __assign(__assign({}, both), { titleText: /What about fapping without porn/i }),
        __assign(__assign({}, both), { titleText: /Can I jerk off without porn/i }),
        __assign(__assign({}, both), { titleText: /ok to masterbate once ?(in)? a while/i }),
        __assign(__assign({}, both), { titleText: /Is it as bad if I mast(u|e)rbate/i }),
        __assign(__assign({}, both), { titleText: /mast(u|e)rbate without watching porn\?/i }),
        __assign(__assign({}, both), { titleText: /is fapping without porn better\?/i }),
        __assign(__assign({}, both), { titleText: /Should I (give up|stop) (masturbating|masturbation)/i }),
        __assign(__assign({}, both), { titleText: /can I touch my pp during nofap/i }),
        __assign(__assign({}, both), { titleText: /Is masturbation without watching porn/i }),
        __assign(__assign({}, both), { titleText: /Is it bad to mast(u|e)rbate/ }),
        __assign(__assign({}, both), { titleText: /Bad to mast(u|e)rbate in general/ }),
        __assign(__assign({}, both), { titleText: /fapping to ?(the)? girlfriend/ }),
        __assign(__assign({}, both), { titleText: /opinions towards fapping without porn/i }),
    ];

    var toDidIJustRelapseAdviceRegexArray = [
        __assign(__assign({}, both), { titleText: /^relapse\?/i }),
        __assign(__assign({}, both), { titleText: /did I ?(just)? relapse/i }),
        __assign(__assign({}, both), { titleText: /did I lose\?/i }),
        __assign(__assign({}, both), { titleText: /Is this ?(a)? relapse/i }),
        __assign(__assign({}, both), { titleText: /Have I relapsed/i }),
        __assign(__assign({}, both), { titleText: /was it a relapse/i }),
        __assign(__assign({}, both), { titleText: /Does (this|that) count as a/i }),
        __assign(__assign({}, both), { titleText: /count as ?(a)? relapse/i }),
        __assign(__assign({}, both), { titleText: /do I have to (restart|reset) my streak/i }),
        __assign(__assign({}, both), { titleText: /does that mean I failed\?/i }),
        __assign(__assign({}, both), { titleText: /Did i break the rules/i }),
        __assign(__assign({}, both), { titleText: /Do i need to start again/i }),
        __assign(__assign({}, both), { titleText: /Does precum count/i }),
    ];

    var toWhenDoesItGetEasierAdviceRegexArray = [
        __assign(__assign({}, both), { titleText: /does it get (better|easier)/i }),
        __assign(__assign({}, both), { titleText: /do they ever go away\?/i }),
        __assign(__assign({}, both), { titleText: /wondering if it gets easier/i }),
        __assign(__assign({}, both), { titleText: /When does the withdrawal period depression start to fade\?/i }),
        __assign(__assign({}, both), { titleText: /How long before the effects of porn disappear\?/i }),
        __assign(__assign({}, both), { titleText: /How does it (get|become) easier to\?/i }),
        __assign(__assign({}, both), { titleText: /Does it ?(ever)? (get|become) easier\?/i }),
    ];

    var matchMultiple = function (keyString, stringObjectToMatch, regex) {
        var matchResponse = {};
        var matchArray = regex.map(function (regexSingle) {
            var match = stringObjectToMatch[keyString].match(regexSingle);
            // TODO I don't think this is correct
            return {
                value: match ? match[0] : undefined,
                regex: String(regexSingle)
            };
        }).filter(function (item) { return item.value; });
        if (matchArray.every((function (item) { return item.value; })) && matchArray.length === regex.length) {
            matchResponse[keyString + "Match"] = matchArray;
        }
        return matchResponse;
    };
    var matchTextBoth = function (stringObjectToMatch, regex) {
        var _a, _b;
        // TODO this should actually be part of matchOne.
        var matchResponse = {};
        var matchText = (_a = stringObjectToMatch.titleText) === null || _a === void 0 ? void 0 : _a.match(regex);
        if (matchText) {
            matchResponse.titleTextMatch = [{
                    value: matchText[0],
                    regex: String(regex),
                }];
        }
        var matchMessage = (_b = stringObjectToMatch.messageText) === null || _b === void 0 ? void 0 : _b.match(regex);
        if (matchMessage) {
            matchResponse.messageTextMatch = [{
                    value: matchMessage[0],
                    regex: String(regex),
                }];
        }
        return matchResponse;
    };
    var matchOne = function (keyString, stringObjectToMatch, regex) {
        var _a;
        var matchResponse = {};
        var match = (_a = stringObjectToMatch[keyString]) === null || _a === void 0 ? void 0 : _a.match(regex);
        if (match) {
            matchResponse[keyString + "Match"] = [{
                    value: match[0],
                    regex: String(regex)
                }];
        }
        return matchResponse;
    };
    var calculateMatch = function (regexCollection, matchResponse, regexKeys) {
        var _a, _b, _c;
        // if OR logic, then only one match needs to exist
        // if both logic, then only one match needs to exist
        if (((_a = regexCollection === null || regexCollection === void 0 ? void 0 : regexCollection.options) === null || _a === void 0 ? void 0 : _a.logic) === RegExpFilterLogic.OR || ((_b = regexCollection === null || regexCollection === void 0 ? void 0 : regexCollection.options) === null || _b === void 0 ? void 0 : _b.both)) {
            if (Object.keys(matchResponse).length > 0) {
                return { matchArray: [matchResponse], matchFound: true };
            }
        }
        // if AND logic, then all matches need to exist.
        if (((_c = regexCollection === null || regexCollection === void 0 ? void 0 : regexCollection.options) === null || _c === void 0 ? void 0 : _c.logic) === RegExpFilterLogic.AND) {
            if (Object.keys(matchResponse).length === regexKeys.length) {
                return { matchArray: [matchResponse], matchFound: true };
            }
        }
        // default to AND
        if (Object.keys(matchResponse).length === regexKeys.length) {
            return { matchArray: [matchResponse], matchFound: true };
        }
        return { matchArray: [], matchFound: false };
    };
    var matchRegexReduceMatchedObject = function (regexKeys, regexCollection, stringObjectToMatch) {
        var matchResponse = regexKeys.reduce(function (acc, keyString) {
            var _a;
            var regex = regexCollection[keyString];
            if (acc.allFound) {
                var matchResponse_1 = {};
                if (((_a = regexCollection === null || regexCollection === void 0 ? void 0 : regexCollection.options) === null || _a === void 0 ? void 0 : _a.both) && keyString === 'titleText') {
                    matchResponse_1 = matchTextBoth(stringObjectToMatch, regex);
                }
                else {
                    if (Array.isArray(regex)) {
                        matchResponse_1 = matchMultiple(keyString, stringObjectToMatch, regex);
                    }
                    else {
                        matchResponse_1 = matchOne(keyString, stringObjectToMatch, regex);
                    }
                }
                if (Object.keys(matchResponse_1).length > 0) {
                    return { matchResponse: __assign(__assign({}, acc.matchResponse), matchResponse_1), allFound: true };
                }
            }
            return __assign(__assign({}, acc), { allFound: false });
        }, { matchResponse: {}, allFound: true }).matchResponse;
        return { matchResponse: matchResponse };
    };
    var matchRegex = function (regexArray, stringObjectToMatch) {
        var matchArray = regexArray.reduce(function (acc, regexCollection) {
            if (!acc.matchFound) {
                var regexKeys = Object.keys(regexCollection).filter(function (item) { return item !== 'options'; });
                var matchResponse = matchRegexReduceMatchedObject(regexKeys, regexCollection, stringObjectToMatch).matchResponse;
                var _a = calculateMatch(regexCollection, matchResponse, regexKeys), matchArray_1 = _a.matchArray, matchFound = _a.matchFound;
                if (matchFound)
                    return { matchArray: matchArray_1, matchFound: matchFound };
            }
            return acc;
            // FUTURE remove matchFound if you would like it to search through every single possibility, although this may take a long time.
        }, { matchArray: [], matchFound: false }).matchArray;
        return matchArray;
    };

    var toBiggestBenefitPostAddictionAdviceRegexArray = [
        // TITLE BENEFITS
        { titleText: /^beneftis(\?|.)?$/i },
        { titleText: /^(NoFap|no fap|no-fap) benefits(\?|.)?$/i },
        __assign(__assign({}, both), { titleText: /I want to know the benefits of (NoFap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /what are the benefits (of|to) quitting/i }),
        __assign(__assign({}, both), { titleText: /Can anyone explain the benefits/i }),
        __assign(__assign({}, both), { titleText: /Benefits from quitting\?/i }),
        __assign(__assign({}, both), { titleText: /pros and cons/i }),
        __assign(__assign({}, both), { titleText: /What are the benefits\?/i }),
        __assign(__assign({}, both), { titleText: /Why should one stop fapping/i }),
        __assign(__assign({}, both), { titleText: /(you have|you've|you’ve) noticed since stopping/i }),
        __assign(__assign({}, both), { titleText: /(which|What) benefits did you gain/i }),
        __assign(__assign({}, both), { titleText: /benefits that you have gained/i }),
        __assign(__assign({}, both), { titleText: /reasons to stop/i }),
        __assign(__assign({}, both), { titleText: /what is the effects on health/i }),
        __assign(__assign({}, both), { titleText: /what are the benefits (of|to) (NoFap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /Are there any benefits from (NoFap|no fap|no-fap)/i }),
        __assign(__assign({}, both), { titleText: /benefits of semen retention/i }),
        __assign(__assign({}, both), { titleText: /the effort is really worth/i }),
        __assign(__assign({}, both), { titleText: /is it really worth the effort/i }),
        __assign(__assign({}, both), { titleText: /share some ?(overall)? benefits you (have|guys) experienced/i }),
        __assign(__assign({}, both), { titleText: /Can you ?(guys)? share some benefits/i }),
    ];

    var toPartnerAdviceRegexArray = [
        __assign(__assign({}, both), { titleText: /My husband is starting his nofap journey/i }),
        __assign(__assign({}, both), { titleText: /How can I be supportive to him/i }),
        __assign(__assign({}, both), { titleText: /How would I support/i }),
        __assign(__assign({}, both), { titleText: /My boyfriend has been struggling/i }),
        __assign(__assign({}, both), { titleText: /Trying to help him/i }),
        __assign(__assign({}, both), { titleText: /Partner with a porn addiction/i }),
        __assign(__assign({}, both), { titleText: /help me support my partner/i }),
        { titleText: [/Partner/i, /porn addiction/i] },
    ];

    var toIsWatchingPornRelapseAdviceRegexArray = [
        __assign(__assign({}, both), { titleText: /is it bad to watch porn/i }),
        __assign(__assign({}, both), { titleText: /okay to still watch porn/i }),
        __assign(__assign({}, both), { titleText: /Is it ok to watch porn/i }),
        __assign(__assign({}, both), { titleText: /Is it okay(,)? to watch pornography/i }),
    ];

    var toNoReasonToRelapseAdviceRegexArray = [
        __assign(__assign({}, both), { titleText: /Should I relapse/i }),
        __assign(__assign({}, both), { titleText: /Should I PMO/i }),
        __assign(__assign({}, both), { titleText: /Should i reset/i }),
        __assign(__assign({}, both), { titleText: /might (fail|break) my streak today/i }),
    ];

    var toAgeAdviceRegexArray = [
        { titleText: /How long can take a reboot/i },
    ];

    var toFlatlineAdviceRegexArray = [
        { titleText: /\d+ days in and flatl/i },
        { titleText: /flatl/i, messageText: /Any advice on whether this is normal/i },
        __assign(__assign({}, both), { titleText: /^flatline$/i }),
        __assign(__assign({}, both), { titleText: /How long do flatlines last/i }),
        __assign(__assign({}, both), { titleText: /Flatline depression\?/i }),
        __assign(__assign({}, both), { titleText: /(what's|What’s) the flatline/i }),
        __assign(__assign({}, both), { titleText: /\d+ days and flatlining/i }),
        __assign(__assign({}, both), { titleText: /having flatlines/i }),
        __assign(__assign({}, both), { titleText: /Currently Flatlining/i }),
        __assign(__assign({}, both), { titleText: /How do you get over flatlines/i }),
        __assign(__assign({}, both), { titleText: /how does one know when (they're|they’re) going through ?(the)? flatline/i }),
        { messageText: [/flatline/i, /solutions/i], },
    ];

    var deleteImmediately = {
        shouldDeleteElementImmediately: true,
        sendMessageType: undefined,
        prelimUrl: undefined,
        messageMatch: undefined
    };
    var lessThanOneDayAgo = function (date) {
        var DAY = 24 * 60 * 60 * 1000;
        var aDayAgo = Date.now() - DAY;
        return date.getTime() > aDayAgo;
    };
    var calculateSubRegexArray = function (freshUserRegexArray, compiledUser, stringObjectToMatch, usernameConfig) { return (freshUserRegexArray.reduce(function (acc, regexItem) {
        if (!acc.matchFound) {
            var matchArray = matchRegex(regexItem.regexArray, stringObjectToMatch);
            if (regexItem.condition && matchArray.length > 0) {
                return {
                    matchObject: {
                        shouldDeleteElementImmediately: regexItem.delete,
                        sendMessageType: regexItem.sendMessageType,
                        prelimUrl: generatePrelimUrl(compiledUser.username, regexItem.regexUrlGenerator(usernameConfig.forumType), regexItem.sendMessageType, usernameConfig),
                        messageMatch: matchArray
                    },
                    matchFound: true
                };
            }
        }
        return acc;
    }, { matchObject: undefined, matchFound: false })); };

    var toSubFilter = function (compiledUser, usernameConfig, flairText, titleText, messageText) {
        var _a, _b, _c;
        var stringObjectToMatch = { titleText: titleText, flairText: flairText, messageText: messageText };
        // TO REMOVE
        var toRemoveInitialDayResult = toRemoveInitialDay(titleText, flairText, messageText);
        var toRemoveInitialMatch = matchRegex(toRemoveInitialRegexArray, stringObjectToMatch);
        if (flairText !== 'New to NoFap' && flairText !== 'Relapse Report') {
            if (toRemoveInitialDayResult || toRemoveInitialMatch.length > 0) {
                if (!toRemoveInitialDayResult) {
                    console.log("Deleted: Regex: " + extractRegexMatch(toRemoveInitialMatch) + " - Title: " + titleText.slice(0, 30) + " - Message: " + messageText.slice(0, 30) + " - Flair: " + flairText + " - Username: " + compiledUser.username);
                    // TODO Do I need to highlight syntax this?
                    // console.log(`Regex: ${extractRegexMatch(toRemoveInitialMatch)} - Title: ${titleText}`);
                }
                else {
                    console.log('toRemoveInitialDay - whatever value it matched');
                }
                return deleteImmediately;
            }
        }
        // LESS THAN 24 HOURS SINCE LAST MESSAGE
        if ((compiledUser === null || compiledUser === void 0 ? void 0 : compiledUser.lastSentMessage) && isLessThan24Hours(new Date((_a = compiledUser === null || compiledUser === void 0 ? void 0 : compiledUser.lastSentMessage) === null || _a === void 0 ? void 0 : _a.send_date))) {
            return deleteImmediately;
        }
        // USER HOSTILE
        if (compiledUser.userType === UserType.UserHostile || compiledUser.userType === UserType.UserRespondedBack || compiledUser.userType === UserType.FollowMessageSent) {
            return deleteImmediately;
        }
        // USER NOT RESPONDED
        if (compiledUser.userType === UserType.UserNotRespondedBack) {
            // FOLLOW MESSAGES
            if ((_b = compiledUser === null || compiledUser === void 0 ? void 0 : compiledUser.lastSentMessage) === null || _b === void 0 ? void 0 : _b.type.includes('start')) {
                // TO RELAPSE FOLLOW
                var toRelapseAdviceMatch = matchRegex(toRelapseAdviceRegexArray, stringObjectToMatch);
                if (toRelapseAdviceMatch.length > 0) {
                    return {
                        shouldDeleteElementImmediately: false,
                        sendMessageType: SendMessageType.FollowRelapseAdvice,
                        prelimUrl: generatePrelimUrl(compiledUser.username, followRelapseAdvice(usernameConfig.forumType), SendMessageType.FollowRelapseAdvice, usernameConfig),
                        messageMatch: toRelapseAdviceMatch
                    };
                }
                // TO STRUGGLE FOLLOW
                var toStruggleAdviceMatch = matchRegex(toStruggleAdviceRegexArray, stringObjectToMatch);
                if (toStruggleAdviceMatch.length > 0) {
                    return {
                        shouldDeleteElementImmediately: false,
                        sendMessageType: SendMessageType.FollowStruggleAdvice,
                        prelimUrl: generatePrelimUrl(compiledUser.username, followStruggleAdvice(usernameConfig.forumType), SendMessageType.FollowStruggleAdvice, usernameConfig),
                        messageMatch: toStruggleAdviceMatch
                    };
                }
            }
            var messageSendDate = (_c = compiledUser === null || compiledUser === void 0 ? void 0 : compiledUser.lastSentMessage) === null || _c === void 0 ? void 0 : _c.send_date;
            if (messageSendDate && lessThanOneDayAgo(new Date(messageSendDate))) {
                return deleteImmediately;
            }
        }
        // FRESH USER
        if (compiledUser.userType === UserType.FreshUser) {
            var freshUserRegexArray = [
                // SPECIFIC
                { sendMessageType: SendMessageType.StartAdviceWetdreamAdvice, regexArray: toWetdreamAdviceRegexArray, regexUrlGenerator: wetdreamAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartAccountabilityPartner, regexArray: toAccountabilityPartnerRegexArray, regexUrlGenerator: accountabilityPartner, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartAdviceStruggle, regexArray: toStruggleAdviceRegexArray, regexUrlGenerator: struggleAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartDealingWithUrgesAdvice, regexArray: toDealingWithUrgesAdviceRegexArray, regexUrlGenerator: dealingWithUrgesAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartAdvicePornBlockersAdvice, regexArray: toPornBlockersAdviceRegexArray, regexUrlGenerator: pornBlockersAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartMasturbateWithoutPornAdvice, regexArray: toMasturbateWithoutPornAdviceRegexArray, regexUrlGenerator: masturbateWithoutPornAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartDidIJustRelapseAdvice, regexArray: toDidIJustRelapseAdviceRegexArray, regexUrlGenerator: didIJustRelapseAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartWhenDoesItGetEasierAdvice, regexArray: toWhenDoesItGetEasierAdviceRegexArray, regexUrlGenerator: whenDoesItGetEasierAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartBiggestBenefitPostAddictionAdvice, regexArray: toBiggestBenefitPostAddictionAdviceRegexArray, regexUrlGenerator: biggestBenefitPostAddictionAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartPartnerAdvice, regexArray: toPartnerAdviceRegexArray, regexUrlGenerator: partnerAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartNoReasonToRelapseAdvice, regexArray: toNoReasonToRelapseAdviceRegexArray, regexUrlGenerator: noReasonToRelapseAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartAdviceIsWatchingPornRelapseAdvice, regexArray: toIsWatchingPornRelapseAdviceRegexArray, regexUrlGenerator: isWatchingPornRelapseAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartAdviceFlatline, regexArray: toFlatlineAdviceRegexArray, regexUrlGenerator: flatlineAdvice, condition: true, delete: false },
                // GENERIC
                { sendMessageType: SendMessageType.StartAdviceRelapse, regexArray: toRelapseAdviceRegexArray, regexUrlGenerator: relapseAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartAdviceStart, regexArray: toStartAdviceRegexArray, regexUrlGenerator: startAdvice, condition: !titleText.includes('again') || !titleText.includes('yet again'), delete: false },
                { sendMessageType: SendMessageType.StartAdviceStartAgain, regexArray: toStartAgainAdviceRegexArray, regexUrlGenerator: startAgainAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartAdviceGeneral, regexArray: toGeneralAdviceRegexArray, regexUrlGenerator: generalAdvice, condition: true, delete: false },
                { sendMessageType: SendMessageType.StartAdviceAge, regexArray: toAgeAdviceRegexArray, regexUrlGenerator: ageAdvice, condition: true, delete: false },
                // FLAIRS
                // { sendMessageType: SendMessageType.StartAdviceStruggle, regexArray: [ { flairText: /Slip-Up Prevention/ } ], regexUrlGenerator: struggleAdvice, condition: true, delete: false }, // it's just not reliable
                { sendMessageType: SendMessageType.StartAdviceStruggle, regexArray: [{ flairText: /Victory/ }, { flairText: /Success Story/ }], regexUrlGenerator: generalAdvice, condition: true, delete: true },
                { sendMessageType: SendMessageType.StartAdviceRelapse, regexArray: [{ flairText: /Relapse Report/ }], regexUrlGenerator: relapseAdvice, condition: true, delete: false },
            ];
            var matchObject = calculateSubRegexArray(freshUserRegexArray, compiledUser, stringObjectToMatch, usernameConfig).matchObject;
            if (matchObject) {
                return matchObject;
            }
        }
        // Final Delete
        var toRemoveFinalMatch = matchRegex(toRemoveFinalRegexArray, stringObjectToMatch);
        if (toRemoveFinalMatch.length > 0) {
            return {
                shouldDeleteElementImmediately: true,
                sendMessageType: undefined,
                prelimUrl: undefined,
                messageMatch: toRemoveFinalMatch
            };
        }
        return {
            shouldDeleteElementImmediately: false,
            sendMessageType: undefined,
            prelimUrl: undefined,
            messageMatch: undefined,
        };
    };

    var populateWebpageInformation = function (users, usernameConfig) {
        var allATags = document.querySelectorAll('a');
        var filteredATags = __spreadArrays(allATags).filter(function (tag) { return tag.innerText.includes('u/') && !tag.innerText.includes(' '); });
        createPrelimContainer(filteredATags);
        var prelimContainer = document.querySelector('#reade-automate-container');
        var alreadyPrelimUrlUsernameList = [];
        filteredATags.forEach(function (tag, index) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53;
            var tagUsername = tag.innerText.split('/')[1];
            var dbUser = users.find(function (user) { return user.username === tagUsername; });
            if (dbUser) {
                var flairText = (_m = (_l = (_k = (_j = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = tag === null || tag === void 0 ? void 0 : tag.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.children[1]) === null || _g === void 0 ? void 0 : _g.children[1]) === null || _h === void 0 ? void 0 : _h.children[1]) === null || _j === void 0 ? void 0 : _j.children[1]) === null || _k === void 0 ? void 0 : _k.children[0]) === null || _l === void 0 ? void 0 : _l.children[0]) === null || _m === void 0 ? void 0 : _m.innerText;
                var titleText = (_z = (_y = (_x = (_w = (_v = (_u = (_t = (_s = (_r = (_q = (_p = (_o = tag === null || tag === void 0 ? void 0 : tag.parentNode) === null || _o === void 0 ? void 0 : _o.parentNode) === null || _p === void 0 ? void 0 : _p.parentNode) === null || _q === void 0 ? void 0 : _q.parentNode) === null || _r === void 0 ? void 0 : _r.parentNode) === null || _s === void 0 ? void 0 : _s.parentNode) === null || _t === void 0 ? void 0 : _t.children[1]) === null || _u === void 0 ? void 0 : _u.children[1]) === null || _v === void 0 ? void 0 : _v.children[0]) === null || _w === void 0 ? void 0 : _w.children[0]) === null || _x === void 0 ? void 0 : _x.children[0]) === null || _y === void 0 ? void 0 : _y.children[0]) === null || _z === void 0 ? void 0 : _z.innerText;
                var messageText = ((_11 = (_10 = __spreadArrays(((_9 = (_8 = (_7 = (_6 = (_5 = (_4 = (_3 = (_2 = (_1 = (_0 = tag === null || tag === void 0 ? void 0 : tag.parentNode) === null || _0 === void 0 ? void 0 : _0.parentNode) === null || _1 === void 0 ? void 0 : _1.parentNode) === null || _2 === void 0 ? void 0 : _2.parentNode) === null || _3 === void 0 ? void 0 : _3.parentNode) === null || _4 === void 0 ? void 0 : _4.parentNode) === null || _5 === void 0 ? void 0 : _5.children[1]) === null || _6 === void 0 ? void 0 : _6.children[2]) === null || _7 === void 0 ? void 0 : _7.children[0]) === null || _8 === void 0 ? void 0 : _8.children[0]) === null || _9 === void 0 ? void 0 : _9.children) || [])) === null || _10 === void 0 ? void 0 : _10.map(function (item) { return item === null || item === void 0 ? void 0 : item.innerText; })) === null || _11 === void 0 ? void 0 : _11.join('\n')) || '';
                var aLinkHref = (_20 = (_19 = (_18 = (_17 = (_16 = (_15 = (_14 = (_13 = (_12 = tag === null || tag === void 0 ? void 0 : tag.parentNode) === null || _12 === void 0 ? void 0 : _12.parentNode) === null || _13 === void 0 ? void 0 : _13.parentNode) === null || _14 === void 0 ? void 0 : _14.parentNode) === null || _15 === void 0 ? void 0 : _15.parentNode) === null || _16 === void 0 ? void 0 : _16.parentNode) === null || _17 === void 0 ? void 0 : _17.children[1]) === null || _18 === void 0 ? void 0 : _18.children[1]) === null || _19 === void 0 ? void 0 : _19.children[0]) === null || _20 === void 0 ? void 0 : _20.children[0].href;
                var hoursAgoText = (_29 = (_28 = (_27 = (_26 = (_25 = (_24 = (_23 = (_22 = (_21 = tag === null || tag === void 0 ? void 0 : tag.parentNode) === null || _21 === void 0 ? void 0 : _21.parentNode) === null || _22 === void 0 ? void 0 : _22.parentNode) === null || _23 === void 0 ? void 0 : _23.parentNode) === null || _24 === void 0 ? void 0 : _24.parentNode) === null || _25 === void 0 ? void 0 : _25.parentNode.children[1]) === null || _26 === void 0 ? void 0 : _26.children[0]) === null || _27 === void 0 ? void 0 : _27.children[0]) === null || _28 === void 0 ? void 0 : _28.children[0].querySelectorAll('a')[1]) === null || _29 === void 0 ? void 0 : _29.innerText;
                if (titleText) {
                    var _54 = toSubFilter(dbUser, usernameConfig, flairText, titleText, messageText), shouldDeleteElementImmediately = _54.shouldDeleteElementImmediately, sendMessageType = _54.sendMessageType, prelimUrl = _54.prelimUrl, messageMatch = _54.messageMatch;
                    // if (messageMatch) {
                    // TODO all these messages to the
                    // recordTextMatch({
                    //   flairText,
                    //   titleText,
                    //   postLink: aLinkHref,
                    //   messageText,
                    //   username: dbUser.username,
                    // });
                    // }
                    if (index !== 0 && dbUser.username !== usernameConfig.usernameValue) {
                        if (alreadyPrelimUrlUsernameList.includes(dbUser.username)) {
                            (_37 = (_36 = (_35 = (_34 = (_33 = (_32 = (_31 = (_30 = tag === null || tag === void 0 ? void 0 : tag.parentNode) === null || _30 === void 0 ? void 0 : _30.parentNode) === null || _31 === void 0 ? void 0 : _31.parentNode) === null || _32 === void 0 ? void 0 : _32.parentNode) === null || _33 === void 0 ? void 0 : _33.parentNode) === null || _34 === void 0 ? void 0 : _34.parentNode) === null || _35 === void 0 ? void 0 : _35.parentNode) === null || _36 === void 0 ? void 0 : _36.parentNode) === null || _37 === void 0 ? void 0 : _37.remove();
                            return;
                        }
                        alreadyPrelimUrlUsernameList.push(dbUser.username);
                        if (shouldDeleteElementImmediately) {
                            (_45 = (_44 = (_43 = (_42 = (_41 = (_40 = (_39 = (_38 = tag === null || tag === void 0 ? void 0 : tag.parentNode) === null || _38 === void 0 ? void 0 : _38.parentNode) === null || _39 === void 0 ? void 0 : _39.parentNode) === null || _40 === void 0 ? void 0 : _40.parentNode) === null || _41 === void 0 ? void 0 : _41.parentNode) === null || _42 === void 0 ? void 0 : _42.parentNode) === null || _43 === void 0 ? void 0 : _43.parentNode) === null || _44 === void 0 ? void 0 : _44.parentNode) === null || _45 === void 0 ? void 0 : _45.remove();
                            return;
                        }
                        if (prelimUrl && messageMatch) {
                            (_53 = (_52 = (_51 = (_50 = (_49 = (_48 = (_47 = (_46 = tag === null || tag === void 0 ? void 0 : tag.parentNode) === null || _46 === void 0 ? void 0 : _46.parentNode) === null || _47 === void 0 ? void 0 : _47.parentNode) === null || _48 === void 0 ? void 0 : _48.parentNode) === null || _49 === void 0 ? void 0 : _49.parentNode) === null || _50 === void 0 ? void 0 : _50.parentNode) === null || _51 === void 0 ? void 0 : _51.parentNode) === null || _52 === void 0 ? void 0 : _52.parentNode) === null || _53 === void 0 ? void 0 : _53.remove();
                            // TODO pass in message text.
                            createPrelimLink({
                                dbUser: dbUser, titleText: titleText, messageText: messageText, flairText: flairText, aLinkHref: aLinkHref, prelimUrl: prelimUrl, index: index, sendMessageType: sendMessageType, prelimContainer: prelimContainer, messageMatch: messageMatch
                            });
                            return;
                        }
                    }
                    if (!prelimUrl || index === 0) {
                        renderUserPanel({
                            tag: tag, tagUsername: tagUsername, index: index, dbUser: dbUser, usernameConfig: usernameConfig, hoursAgoText: hoursAgoText
                        });
                    }
                }
            }
        });
    };
    var main = function () { return __awaiter(void 0, void 0, void 0, function () {
        var usernameConfig, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('START: start script');
                    return [4 /*yield*/, isServerRunning()];
                case 1:
                    _a.sent();
                    usernameConfig = getUsernameMarker(location);
                    window.localStorage.setItem('delayTimer', '10000');
                    if (!(usernameConfig.usernameValue !== '')) return [3 /*break*/, 4];
                    console.log('timeframe:', usernameConfig.usernameTimestamp, 'username: ', usernameConfig.usernameValue);
                    return [4 /*yield*/, scrollToSpecifiedDate(TIMEFRAME, usernameConfig)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, checkUsernames({ usernames: getAllNoFapNewUsernames(), forum_type: UserForumType.Reddit })];
                case 3:
                    users = _a.sent();
                    populateWebpageInformation(users, usernameConfig);
                    setTimeout(function () {
                        scrollToMarker();
                    }, 1000);
                    console.log('END: script complete');
                    return [3 /*break*/, 5];
                case 4:
                    console.log('You did not set the username marker or it has never been set.');
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    main();

}());
