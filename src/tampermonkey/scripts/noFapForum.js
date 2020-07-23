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

    var startAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". It's great to see you've started!\n\nThe main thing with recovery is to focus on your mental health. Fundamentally, it's about developing the awareness to change your behaviours so you can learn to develop control over your mind. Of course, that's a lot easier said than done, which is why it requires A LOT of practice.\n\nDo you do much for your mental health? Like meditate, and stuff? Personally I do 10 minutes of meditation each day and that's enough for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var startAgainAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". It's great to see you're starting again!\n\nThe main thing with recovery is to focus on your mental health. Fundamentally, it's about developing the awareness to change your behaviours so you can learn to develop control over your mind. Of course, that's a lot easier said than done, which is why it requires A LOT of practice.\n\nDo you do much for your mental health? Like meditate, and stuff? Personally I do 10 minutes of meditation each day and that's enough for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var generalAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nThe main thing with recovery is to focus on your mental health. Fundamentally, it's about developing the awareness to change your behaviours so you can learn to develop control over your mind. Of course, that's a lot easier said than done, which is why it requires A LOT of practice.\n\nDo you do much for your mental health? Like meditate, and stuff? Personally I do 10 minutes of meditation each day and that's enough for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var relapseAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". I'm sorry to hear you relapsed.\n\nThe main thing with recovery is to focus on your mental health. Fundamentally, it's about developing the awareness to change your behaviours so you can learn to develop control over your mind. Of course, that's a lot easier said than done, which is why it requires A LOT of practice.\n\nDo you do much for your mental health? Like meditate, and stuff? Personally I do 10 minutes of meditation each day and that's enough for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var struggleAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". I'm sorry to hear you're struggling.\n\nThe main thing with recovery is to focus on your mental health. Fundamentally, it's about developing the awareness to change your behaviours so you can learn to develop control over your mind. Of course, that's a lot easier said than done, which is why it requires A LOT of practice.\n\nDo you do much for your mental health? Like meditate, and stuff? Personally I do 10 minutes of meditation each day and that's enough for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var flatlineAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nThe main thing with flatline is to focus on the process. Emotions and feelings come and go, but the process always remains the same. This means focusing on your mental health, because all those things you're feeling like low energy and low motivation are merely symptoms, not the cause of the problem.\n\nWhat's your mental health routine look like? Do you meditate daily? I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var wetdreamAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". While wet dreams don't count as relapse, they're best avoided and can be completely mitigated by developing control over your mind.\n\nThe main thing with recovery is to focus on your mental health. Fundamentally, it's about developing the awareness to change your behaviours so you can learn to develop control over your mind. Of course, that's a lot easier said than done, which is why it requires A LOT of practice.\n\nDo you do much for your mental health? Like meditate, and stuff? Personally I do 10 minutes of meditation each day and that's enough for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var ageAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". If it helps I started getting into porn when I was 10, only recently recovered at 25. Now 27.\n\nThe main thing with recovery is to focus on your mental health. Fundamentally, it's about developing the awareness to change your behaviours so you can learn to develop control over your mind. Of course, that's a lot easier said than done, which is why it requires A LOT of practice.\n\nDo you do much for your mental health? Like meditate, and stuff? Personally I do 10 minutes of meditation each day and that's enough for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var pornBlockersAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". Porn blockers don't work because they only address the symptom, not the cause which is having a lack of control over your mind.\n\nThe main thing with recovery is to focus on your mental health. Fundamentally, it's about developing the awareness to change your behaviours so you can learn to develop control over your mind. Of course, that's a lot easier said than done, which is why it requires A LOT of practice.\n\nDo you do much for your mental health? Like meditate, and stuff? Personally I do 10 minutes of meditation each day and that's enough for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var isWatchingPornRelapseAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". Watching porn is not okay, because that's the thing you're primarily addicted to. Not the masturbation.\n\nThe main thing with recovery is to focus on your mental health. Fundamentally, it's about developing the awareness to change your behaviours so you can learn to develop control over your mind. Of course, that's a lot easier said than done, which is why it requires A LOT of practice.\n\nDo you do much for your mental health? Like meditate, and stuff? Personally I do 10 minutes of meditation each day and that's enough for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var noReasonToRelapseAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nThere is literally never any reason to masturbate or watch porn, ever. The only reason why you would have a desire to do it is because you're addicted to it, otherwise you wouldn't be having this thought at all.\n\nThere is no such thing as reasonable when it comes to addiction. I've created a website which explains why, if you're interested.\n"); };
    var accountabilityPartner = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nHappy to be your accountability partner! My name is Julius. I also run an accountability program on Discord (https://discord.com/invite/YETRkSj) and on Reddit (https://www.reddit.com/r/NeverFapDeluxe/) if you're interested in receiving help from others as well.\n"); };
    var partnerAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nIf it helps, I've written a guide to overcoming porn addiction which may help them? It may also help you understand the dynamics of porn addiction as well.\n\nI started watching porn when I was 10, recovered by 25, now 27. So it's definitely something that can be addressed successfully if you focus on your mental health and remain consistent with the process. Now I honestly don't think about porn or masturbation at all.\n"); };
    var masturbateWithoutPornAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nWhile there's nothing inherently wrong with masturbation itself, what I will say is that it makes the process of recovery so much more difficult than it needs to be.\n\nIn most cases it's a trigger to watch porn and orgasm itself also makes it really hard to maintain clarity during recovery. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var biggestBenefitPostAddictionAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ".\n\nPossibly the biggest benefit for me is simply not having to think about porn/masturbation at all. The amount of time saved daily that I can spend on other things is tremendous. Not to mention the cost my addiction had on my mental health, as well as on my ability to concentrate and actually get stuff done.\n\nJust having the mental clarity that I have now is alone worth it for me. It's like I can be fully consistent with my ambitiosn and endeavours without crashing at all. If you'd like to learn more, I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var dealingWithUrgesAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". Sorry to hear you're struggling with urges. If they're a big issue for you then it might mean that you don't quite have the fundamentals down.\n\nUltimately recovery should be relatively struggle free, and the only way you're going to achieve that is by having mental balance. Fundamentally speaking, it's about developing the awareness to change your behaviours so you can learn to develop control over your mind. Once you have that control it becomes trivial.\n\nDo you do much for your mental health? Like meditate, and stuff? Personally I do 10 minutes of meditation each day and that's enough for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    // If you have to ask, then generally yes. Although
    var didIJustRelapseAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". Although not necessarily a relapse, indicates that you don't quite have control over your mind.\n\nThe main thing with recovery is to focus on your mental health. Fundamentally, it's about developing the awareness to change your behaviours so you can learn to develop control over your mind. Of course, that's a lot easier said than done, which is why it requires A LOT of practice.\n\nDo you do much for your mental health? Like meditate, and stuff? Personally I do 10 minutes of meditation each day and that's enough for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };
    var whenDoesItGetEasierAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". Ultimately it gets easier once you learn to develop control over your mind, which comes from daily mental health practice.\n\nThe main thing with recovery is to focus on your mental health. Fundamentally, it's about developing the awareness to change your behaviours so you can learn to develop control over your mind. Of course, that's a lot easier said than done, which is why it requires A LOT of practice.\n\nDo you do much for your mental health? Like meditate, and stuff? Personally I do 10 minutes of meditation each day and that's enough for me. I've also created a website which explains the whole process of overcoming porn addiction, if you're interested.\n"); };

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

    var followRelapseAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". I'm sorry to hear you relapsed. Have you been meditating daily like I suggested? Did you end up reading the NFD website?"); };
    var followMeditationAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". Have you been meditating daily like I suggested? Did you end up reading the NFD website?"); };
    var followStruggleAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". I'm sorry to hear you're struggling.\n\nHave you been meditating daily like I suggested? Did you end up reading the NFD website?"); };
    var followNotSmoothlyAdvice = function (forum) { return ("Hey, I saw your post" + (forum ? " on " + forum : '') + ". I'm sorry things haven't been going smoothly with your recovery.\n\nHave you been meditating daily like I suggested? Did you end up reading the NFD website?"); };

    var createComponentVNode$1 = createComponentVNode;
    var createVNode$2 = createVNode;
    // import ReactTooltip from 'react-tooltip';
    var createStartMessageLink = function (messageType, color, toUsername, messageText, usernameConfig) {
        var prelimUrl = generatePrelimUrl(toUsername, messageText, messageType, usernameConfig);
        // https://forum.nofap.com/index.php?conversations/add&to=YoungRockLee&title=hey
        return (createVNode$2(1, "div", null, createVNode$2(1, "a", null, messageType, 0, { "style": {
                color: color || 'black',
                'margin-top': '0.2rem',
                'margin-bottom': '0.2rem',
                'margin-left': '0.3rem',
                'margin-right': '0.3rem',
                'font-size': '12px',
                display: 'inline-block',
            }, "onclick": function () { return openNewLink(prelimUrl, messageType); } }), 0));
    };
    var UserPanel = function (_a) {
        var dbUser = _a.dbUser, usernameConfig = _a.usernameConfig, hoursAgoText = _a.hoursAgoText;
        return (createVNode$2(1, "div", null, [dbUser.userType !== UserType.FreshUser && (createComponentVNode$1(2, PreviousMessageInformation, { "dbUser": dbUser })), createVNode$2(1, "div", null, [usernameConfig && hoursAgoText && (createComponentVNode$1(2, SetMarkerButton, { "username": dbUser.username, "usernameConfig": usernameConfig, "hoursAgoText": hoursAgoText })), createComponentVNode$1(2, MarkUserChattedButton, { "username": dbUser.username }), createComponentVNode$1(2, MarkUserHostileButton, { "username": dbUser.username })], 0, { "style": { display: 'flex' } }), createComponentVNode$1(2, UserInformation, { "dbUser": dbUser, "usernameConfig": usernameConfig }), createVNode$2(1, "div", null, [createVNode$2(1, "div", null, [createStartMessageLink(SendMessageType.NFDCustomSend, 'purple', dbUser.username, ''), createStartMessageLink(SendMessageType.StartAdviceStart, 'purple', dbUser.username, startAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartAdviceStartAgain, 'purple', dbUser.username, startAgainAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartAdviceGeneral, 'purple', dbUser.username, generalAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartAdviceRelapse, 'purple', dbUser.username, relapseAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig), createVNode$2(1, "h4", null, "Custom", 16), createStartMessageLink(SendMessageType.StartAdviceAge, 'purple', dbUser.username, ageAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartDealingWithUrgesAdvice, 'purple', dbUser.username, dealingWithUrgesAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartMasturbateWithoutPornAdvice, 'purple', dbUser.username, masturbateWithoutPornAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartBiggestBenefitPostAddictionAdvice, 'purple', dbUser.username, biggestBenefitPostAddictionAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartPartnerAdvice, 'purple', dbUser.username, partnerAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartDidIJustRelapseAdvice, 'purple', dbUser.username, didIJustRelapseAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig)], 0, { "style": { display: 'flex', 'flex-direction': 'column' } }), createVNode$2(1, "div", null, [createStartMessageLink(SendMessageType.StartAdviceStruggle, 'purple', dbUser.username, struggleAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartAdviceFlatline, 'purple', dbUser.username, flatlineAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartAdviceWetdreamAdvice, 'purple', dbUser.username, wetdreamAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartAdvicePornBlockersAdvice, 'purple', dbUser.username, pornBlockersAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartAdviceIsWatchingPornRelapseAdvice, 'purple', dbUser.username, isWatchingPornRelapseAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartWhenDoesItGetEasierAdvice, 'purple', dbUser.username, whenDoesItGetEasierAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartNoReasonToRelapseAdvice, 'purple', dbUser.username, noReasonToRelapseAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.StartAccountabilityPartner, 'purple', dbUser.username, accountabilityPartner(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig), createVNode$2(1, "h4", null, "Follow", 16), createStartMessageLink(SendMessageType.FollowRelapseAdvice, 'purple', dbUser.username, followRelapseAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.FollowMeditationAdvice, 'purple', dbUser.username, followMeditationAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.FollowStruggleAdvice, 'purple', dbUser.username, followStruggleAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig),
                    createStartMessageLink(SendMessageType.FollowNotSmoothlyAdvice, 'purple', dbUser.username, followNotSmoothlyAdvice(usernameConfig === null || usernameConfig === void 0 ? void 0 : usernameConfig.forumType), usernameConfig)], 0, { "style": { display: 'flex', 'flex-direction': 'column' } })], 4, { "style": { display: 'flex', 'justify-content': 'space-between', 'margin-top': '1rem', 'margin-bottom': '1rem' } })], 0));
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

    var createComponentVNode$2 = createComponentVNode;
    var getAllNoFapNewUsernamesForum = function () {
        var discussionListItems = document.querySelectorAll('.discussionListItem');
        var usernames = __spreadArrays(discussionListItems).map(function (tag) { return tag.attributes['data-author'].value; });
        return usernames;
    };
    var createPrelimContainerForum = function () {
        var _a;
        var prelimContainer = document.createElement('div');
        prelimContainer.id = 'reade-automate-container';
        var firstElementContainer = document.querySelectorAll('.sectionHeaders')[2];
        (_a = firstElementContainer === null || firstElementContainer === void 0 ? void 0 : firstElementContainer.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(prelimContainer, firstElementContainer);
    };
    var renderUserPanelForum = function (_a) {
        var tag = _a.tag, tagUsername = _a.tagUsername, index = _a.index, dbUser = _a.dbUser, usernameConfig = _a.usernameConfig;
        var tagUsernameFiltered = tagUsername
            .replace('\'', '')
            .replace('&', '');
        var rootId = "r" + tagUsernameFiltered + "-" + index;
        var root = document.createElement('div');
        root.id = rootId;
        tag.parentNode.insertBefore(root, tag);
        // tag.remove();
        var domContainer = document.querySelector("#" + rootId);
        if (domContainer) {
            render(createComponentVNode$2(2, UserPanel, { "dbUser": dbUser, "usernameConfig": usernameConfig }), domContainer);
        }
    };

    var populateWebpageInformation = function (users) {
        createPrelimContainerForum();
        var prelimContainer = document.querySelector('#reade-automate-container');
        var discussionListItems = document.querySelectorAll('.discussionListItem');
        var filteredDiscussionListItems = __spreadArrays(discussionListItems).filter(function (item) { return !__spreadArrays(item.classList).includes('sticky'); });
        console.log('filteredDiscussionListItems', filteredDiscussionListItems);
        // Remember that we need to filter these for the bottom ones.
        // sticky
        console.log(filteredDiscussionListItems);
        filteredDiscussionListItems.forEach(function (tag, index) {
            var _a;
            var tagUsername = tag.attributes['data-author'].value;
            var dbUser = users.find(function (user) { return user.username === tagUsername; });
            if (dbUser) {
                var titleText = ((_a = tag.querySelector('.title')) === null || _a === void 0 ? void 0 : _a.children[0]).innerText;
                // I have no way of getting the messageText, at least easily without making another HTTP request to that webpage and returning the message text.
                // const messageText = [...tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.children[1]?.children[2]?.children[0]?.children[0]?.children as any || []]?.map(item => item?.innerText)?.join('\n') || '';
                // const {
                //   shouldDeleteElementImmediately,
                //   sendMessageType,
                //   prelimUrl,
                // } = noFapNewFilter(dbUser, usernameConfig, undefined, titleText, messageText);
                // if (prelimUrl) {
                //   if (alreadyPrelimUrlUsernameList.includes(dbUser.username)) {
                //     tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove();
                //     return;
                //   }
                //   alreadyPrelimUrlUsernameList.push(dbUser.username);
                //   if (shouldDeleteElementImmediately) {
                //     tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove();
                //     return;
                //   }
                //   if (prelimUrl) {
                //     tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove();
                //     createPrelimLink({
                //       dbUser, titleText, flairText, aLinkHref, prelimUrl, index, sendMessageType, prelimContainer
                //     });
                //     return;
                //   }
                // }
                // if (!prelimUrl) {
                renderUserPanelForum({
                    tag: tag, tagUsername: tagUsername, index: index, dbUser: dbUser,
                    usernameConfig: undefined
                });
                // }
                // forum_type={UserForumType.NoFap}
            }
        });
    };
    var main = function () { return __awaiter(void 0, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('START: start script');
                    return [4 /*yield*/, isServerRunning()];
                case 1:
                    _a.sent();
                    window.localStorage.setItem('delayTimer', '10000');
                    return [4 /*yield*/, checkUsernames({ usernames: getAllNoFapNewUsernamesForum(), forum_type: UserForumType.NoFap })];
                case 2:
                    users = _a.sent();
                    console.log(users);
                    populateWebpageInformation(users);
                    return [2 /*return*/];
            }
        });
    }); };
    main();

}());
