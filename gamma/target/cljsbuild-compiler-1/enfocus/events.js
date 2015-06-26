// Compiled by ClojureScript 0.0-2850 {}
goog.provide('enfocus.events');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('goog.events');

enfocus.events.view_port_monitor = (function (){var G__27376 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27376) : cljs.core.atom.call(null,G__27376));
})();
/**
* needed to support window :resize
*/
enfocus.events.get_vp_monitor = (function get_vp_monitor(){
if(cljs.core.truth_((function (){var G__27380 = enfocus.events.view_port_monitor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27380) : cljs.core.deref.call(null,G__27380));
})())){
var G__27381 = enfocus.events.view_port_monitor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27381) : cljs.core.deref.call(null,G__27381));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(enfocus.events.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));

var G__27382 = enfocus.events.view_port_monitor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27382) : cljs.core.deref.call(null,G__27382));
}
});
enfocus.events.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){
var obj = (new Object());
obj.listen = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback = (function (){var G__27400 = func;
return (enfocus.events.mouse_enter_leave.cljs$core$IFn$_invoke$arity$1 ? enfocus.events.mouse_enter_leave.cljs$core$IFn$_invoke$arity$1(G__27400) : enfocus.events.mouse_enter_leave.call(null,G__27400));
})();
callback.listen = func;

callback.scope = opt_scope;

if(cljs.core.truth_(opt_handler)){
return opt_handler.listen(elm,cljs.core.name(event),callback);
} else {
var G__27401 = elm;
var G__27402 = cljs.core.name(event);
var G__27403 = callback;
return goog.events.listen(G__27401,G__27402,G__27403);
}
});})(obj))
;

obj.unlisten = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners = (function (){var G__27404 = elm;
var G__27405 = cljs.core.name(event);
var G__27406 = false;
return goog.events.getListeners(G__27404,G__27405,G__27406);
})();
var seq__27407_27417 = cljs.core.seq(listeners);
var chunk__27408_27418 = null;
var count__27409_27419 = (0);
var i__27410_27420 = (0);
while(true){
if((i__27410_27420 < count__27409_27419)){
var obj_27421__$1 = chunk__27408_27418.cljs$core$IIndexed$_nth$arity$2(null,i__27410_27420);
var listener_27422 = obj_27421__$1.listener;
if(((cljs.core.not(func)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(listener_27422.listen,func))) && ((cljs.core.not(opt_scope)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(listener_27422.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name(event),listener_27422);
} else {
var G__27411_27423 = elm;
var G__27412_27424 = cljs.core.name(event);
var G__27413_27425 = listener_27422;
goog.events.unlisten(G__27411_27423,G__27412_27424,G__27413_27425);
}
} else {
}

var G__27426 = seq__27407_27417;
var G__27427 = chunk__27408_27418;
var G__27428 = count__27409_27419;
var G__27429 = (i__27410_27420 + (1));
seq__27407_27417 = G__27426;
chunk__27408_27418 = G__27427;
count__27409_27419 = G__27428;
i__27410_27420 = G__27429;
continue;
} else {
var temp__4126__auto___27430 = cljs.core.seq(seq__27407_27417);
if(temp__4126__auto___27430){
var seq__27407_27431__$1 = temp__4126__auto___27430;
if(cljs.core.chunked_seq_QMARK_(seq__27407_27431__$1)){
var c__4651__auto___27432 = cljs.core.chunk_first(seq__27407_27431__$1);
var G__27433 = cljs.core.chunk_rest(seq__27407_27431__$1);
var G__27434 = c__4651__auto___27432;
var G__27435 = cljs.core.count(c__4651__auto___27432);
var G__27436 = (0);
seq__27407_27417 = G__27433;
chunk__27408_27418 = G__27434;
count__27409_27419 = G__27435;
i__27410_27420 = G__27436;
continue;
} else {
var obj_27437__$1 = cljs.core.first(seq__27407_27431__$1);
var listener_27438 = obj_27437__$1.listener;
if(((cljs.core.not(func)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(listener_27438.listen,func))) && ((cljs.core.not(opt_scope)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(listener_27438.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name(event),listener_27438);
} else {
var G__27414_27439 = elm;
var G__27415_27440 = cljs.core.name(event);
var G__27416_27441 = listener_27438;
goog.events.unlisten(G__27414_27439,G__27415_27440,G__27416_27441);
}
} else {
}

var G__27442 = cljs.core.next(seq__27407_27431__$1);
var G__27443 = null;
var G__27444 = (0);
var G__27445 = (0);
seq__27407_27417 = G__27442;
chunk__27408_27418 = G__27443;
count__27409_27419 = G__27444;
i__27410_27420 = G__27445;
continue;
}
} else {
}
}
break;
}

return listeners;
});})(obj))
;

return obj;
});
enfocus.events.wrapper_register = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$41,enfocus.events.gen_enter_leave_wrapper(cljs.core.constant$keyword$43),cljs.core.constant$keyword$42,enfocus.events.gen_enter_leave_wrapper(cljs.core.constant$keyword$44)], null);
/**
* adding an event to the selected nodes
*/
enfocus.events.listen = (function listen(event,func){
var wrapper = (function (){var G__27456 = event;
return (enfocus.events.wrapper_register.cljs$core$IFn$_invoke$arity$1 ? enfocus.events.wrapper_register.cljs$core$IFn$_invoke$arity$1(G__27456) : enfocus.events.wrapper_register.call(null,G__27456));
})();
return ((function (wrapper){
return (function (pnod){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$45,event)) && ((window === pnod))){
var G__27457 = enfocus.events.get_vp_monitor();
var G__27458 = "resize";
var G__27459 = func;
return goog.events.listen(G__27457,G__27458,G__27459);
} else {
if((wrapper == null)){
var G__27460 = pnod;
var G__27461 = cljs.core.name(event);
var G__27462 = func;
return goog.events.listen(G__27460,G__27461,G__27462);
} else {
var G__27463 = pnod;
var G__27464 = wrapper;
var G__27465 = func;
return goog.events.listenWithWrapper(G__27463,G__27464,G__27465);
}
}
});
;})(wrapper))
});
/**
* removing all listeners of a given event type from the selected nodes
* @param {...*} var_args
*/
enfocus.events.remove_listeners = (function() { 
var remove_listeners__delegate = function (event_list){
var get_name = (function (p1__27466_SHARP_){
return cljs.core.name(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27466_SHARP_,cljs.core.constant$keyword$41))?cljs.core.constant$keyword$43:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27466_SHARP_,cljs.core.constant$keyword$42))?cljs.core.constant$keyword$44:p1__27466_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__27475 = cljs.core.seq(event_list);
var chunk__27476 = null;
var count__27477 = (0);
var i__27478 = (0);
while(true){
if((i__27478 < count__27477)){
var ev = chunk__27476.cljs$core$IIndexed$_nth$arity$2(null,i__27478);
var G__27479_27483 = pnod;
var G__27480_27484 = get_name(ev);
goog.events.removeAll(G__27479_27483,G__27480_27484);

var G__27485 = seq__27475;
var G__27486 = chunk__27476;
var G__27487 = count__27477;
var G__27488 = (i__27478 + (1));
seq__27475 = G__27485;
chunk__27476 = G__27486;
count__27477 = G__27487;
i__27478 = G__27488;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__27475);
if(temp__4126__auto__){
var seq__27475__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27475__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__27475__$1);
var G__27489 = cljs.core.chunk_rest(seq__27475__$1);
var G__27490 = c__4651__auto__;
var G__27491 = cljs.core.count(c__4651__auto__);
var G__27492 = (0);
seq__27475 = G__27489;
chunk__27476 = G__27490;
count__27477 = G__27491;
i__27478 = G__27492;
continue;
} else {
var ev = cljs.core.first(seq__27475__$1);
var G__27481_27493 = pnod;
var G__27482_27494 = get_name(ev);
goog.events.removeAll(G__27481_27493,G__27482_27494);

var G__27495 = cljs.core.next(seq__27475__$1);
var G__27496 = null;
var G__27497 = (0);
var G__27498 = (0);
seq__27475 = G__27495;
chunk__27476 = G__27496;
count__27477 = G__27497;
i__27478 = G__27498;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(get_name))
};
var remove_listeners = function (var_args){
var event_list = null;
if (arguments.length > 0) {
var G__27499__i = 0, G__27499__a = new Array(arguments.length -  0);
while (G__27499__i < G__27499__a.length) {G__27499__a[G__27499__i] = arguments[G__27499__i + 0]; ++G__27499__i;}
  event_list = new cljs.core.IndexedSeq(G__27499__a,0);
} 
return remove_listeners__delegate.call(this,event_list);};
remove_listeners.cljs$lang$maxFixedArity = 0;
remove_listeners.cljs$lang$applyTo = (function (arglist__27500){
var event_list = cljs.core.seq(arglist__27500);
return remove_listeners__delegate(event_list);
});
remove_listeners.cljs$core$IFn$_invoke$arity$variadic = remove_listeners__delegate;
return remove_listeners;
})()
;
/**
* removing a specific event from the selected nodes
*/
enfocus.events.unlisten = (function() {
var unlisten = null;
var unlisten__1 = (function (event){
return enfocus.events.remove_listeners.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([event], 0));
});
var unlisten__2 = (function (event,func){
var wrapper = (function (){var G__27508 = event;
return (enfocus.events.wrapper_register.cljs$core$IFn$_invoke$arity$1 ? enfocus.events.wrapper_register.cljs$core$IFn$_invoke$arity$1(G__27508) : enfocus.events.wrapper_register.call(null,G__27508));
})();
return ((function (wrapper){
return (function (pnod){
if((wrapper == null)){
var G__27509 = pnod;
var G__27510 = cljs.core.name(event);
var G__27511 = func;
return goog.events.unlisten(G__27509,G__27510,G__27511);
} else {
var G__27512 = pnod;
var G__27513 = wrapper;
var G__27514 = func;
return goog.events.unlistenWithWrapper(G__27512,G__27513,G__27514);
}
});
;})(wrapper))
});
unlisten = function(event,func){
switch(arguments.length){
case 1:
return unlisten__1.call(this,event);
case 2:
return unlisten__2.call(this,event,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten.cljs$core$IFn$_invoke$arity$1 = unlisten__1;
unlisten.cljs$core$IFn$_invoke$arity$2 = unlisten__2;
return unlisten;
})()
;
enfocus.events.get_node_chain = (function get_node_chain(top,node){
if(((node == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,top))){
return cljs.core.List.EMPTY;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(get_node_chain(top,node.parentNode),node);
}
});
enfocus.events.create_event = (function create_event(cur,cur_event){
var event = (function (){var G__27518 = cur_event;
return goog.object.clone(G__27518);
})();
event.currentTarget = cur;

return event;
});
enfocus.events.listen_live = (function listen_live(event,selector,func){
return (function (node){
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.array_seq([enfocus.events.listen(event,(function (p1__27519_SHARP_){
var seq__27526 = cljs.core.seq(enfocus.events.get_node_chain(node,p1__27519_SHARP_.target));
var chunk__27527 = null;
var count__27528 = (0);
var i__27529 = (0);
while(true){
if((i__27529 < count__27528)){
var el = chunk__27527.cljs$core$IIndexed$_nth$arity$2(null,i__27529);
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(el,cljs.core.array_seq([enfocus.core.filter(enfocus.core.match_QMARK_(selector),((function (seq__27526,chunk__27527,count__27528,i__27529,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event(el,p1__27519_SHARP_);
var G__27530_27532 = event_copy;
(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(G__27530_27532) : func.call(null,G__27530_27532));

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__27519_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__27519_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__27526,chunk__27527,count__27528,i__27529,el))
)], 0));

var G__27533 = seq__27526;
var G__27534 = chunk__27527;
var G__27535 = count__27528;
var G__27536 = (i__27529 + (1));
seq__27526 = G__27533;
chunk__27527 = G__27534;
count__27528 = G__27535;
i__27529 = G__27536;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__27526);
if(temp__4126__auto__){
var seq__27526__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27526__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__27526__$1);
var G__27537 = cljs.core.chunk_rest(seq__27526__$1);
var G__27538 = c__4651__auto__;
var G__27539 = cljs.core.count(c__4651__auto__);
var G__27540 = (0);
seq__27526 = G__27537;
chunk__27527 = G__27538;
count__27528 = G__27539;
i__27529 = G__27540;
continue;
} else {
var el = cljs.core.first(seq__27526__$1);
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(el,cljs.core.array_seq([enfocus.core.filter(enfocus.core.match_QMARK_(selector),((function (seq__27526,chunk__27527,count__27528,i__27529,el,seq__27526__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event(el,p1__27519_SHARP_);
var G__27531_27541 = event_copy;
(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(G__27531_27541) : func.call(null,G__27531_27541));

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__27519_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__27519_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__27526,chunk__27527,count__27528,i__27529,el,seq__27526__$1,temp__4126__auto__))
)], 0));

var G__27542 = cljs.core.next(seq__27526__$1);
var G__27543 = null;
var G__27544 = (0);
var G__27545 = (0);
seq__27526 = G__27542;
chunk__27527 = G__27543;
count__27528 = G__27544;
i__27529 = G__27545;
continue;
}
} else {
return null;
}
}
break;
}
}))], 0));
});
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.events.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.not(child)){
return false;
} else {
if((parent === child)){
return false;
} else {
if((child.parentNode === parent)){
return true;
} else {
var G__27546 = parent;
var G__27547 = child.parentNode;
parent = G__27546;
child = G__27547;
continue;

}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
enfocus.events.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re = e.relatedTarget;
var this$ = e.currentTarget;
if((!((re === this$))) && (!(enfocus.events.child_of_QMARK_(this$,re)))){
var G__27549 = e;
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(G__27549) : func.call(null,G__27549));
} else {
return null;
}
});
});
