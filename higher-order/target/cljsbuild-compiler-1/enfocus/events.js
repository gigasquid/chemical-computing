// Compiled by ClojureScript 0.0-2850 {}
goog.provide('enfocus.events');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('goog.events');

enfocus.events.view_port_monitor = (function (){var G__27497 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27497) : cljs.core.atom.call(null,G__27497));
})();
/**
* needed to support window :resize
*/
enfocus.events.get_vp_monitor = (function get_vp_monitor(){
if(cljs.core.truth_((function (){var G__27501 = enfocus.events.view_port_monitor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27501) : cljs.core.deref.call(null,G__27501));
})())){
var G__27502 = enfocus.events.view_port_monitor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27502) : cljs.core.deref.call(null,G__27502));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(enfocus.events.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));

var G__27503 = enfocus.events.view_port_monitor;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27503) : cljs.core.deref.call(null,G__27503));
}
});
enfocus.events.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){
var obj = (new Object());
obj.listen = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback = (function (){var G__27521 = func;
return (enfocus.events.mouse_enter_leave.cljs$core$IFn$_invoke$arity$1 ? enfocus.events.mouse_enter_leave.cljs$core$IFn$_invoke$arity$1(G__27521) : enfocus.events.mouse_enter_leave.call(null,G__27521));
})();
callback.listen = func;

callback.scope = opt_scope;

if(cljs.core.truth_(opt_handler)){
return opt_handler.listen(elm,cljs.core.name(event),callback);
} else {
var G__27522 = elm;
var G__27523 = cljs.core.name(event);
var G__27524 = callback;
return goog.events.listen(G__27522,G__27523,G__27524);
}
});})(obj))
;

obj.unlisten = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners = (function (){var G__27525 = elm;
var G__27526 = cljs.core.name(event);
var G__27527 = false;
return goog.events.getListeners(G__27525,G__27526,G__27527);
})();
var seq__27528_27538 = cljs.core.seq(listeners);
var chunk__27529_27539 = null;
var count__27530_27540 = (0);
var i__27531_27541 = (0);
while(true){
if((i__27531_27541 < count__27530_27540)){
var obj_27542__$1 = chunk__27529_27539.cljs$core$IIndexed$_nth$arity$2(null,i__27531_27541);
var listener_27543 = obj_27542__$1.listener;
if(((cljs.core.not(func)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(listener_27543.listen,func))) && ((cljs.core.not(opt_scope)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(listener_27543.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name(event),listener_27543);
} else {
var G__27532_27544 = elm;
var G__27533_27545 = cljs.core.name(event);
var G__27534_27546 = listener_27543;
goog.events.unlisten(G__27532_27544,G__27533_27545,G__27534_27546);
}
} else {
}

var G__27547 = seq__27528_27538;
var G__27548 = chunk__27529_27539;
var G__27549 = count__27530_27540;
var G__27550 = (i__27531_27541 + (1));
seq__27528_27538 = G__27547;
chunk__27529_27539 = G__27548;
count__27530_27540 = G__27549;
i__27531_27541 = G__27550;
continue;
} else {
var temp__4126__auto___27551 = cljs.core.seq(seq__27528_27538);
if(temp__4126__auto___27551){
var seq__27528_27552__$1 = temp__4126__auto___27551;
if(cljs.core.chunked_seq_QMARK_(seq__27528_27552__$1)){
var c__4602__auto___27553 = cljs.core.chunk_first(seq__27528_27552__$1);
var G__27554 = cljs.core.chunk_rest(seq__27528_27552__$1);
var G__27555 = c__4602__auto___27553;
var G__27556 = cljs.core.count(c__4602__auto___27553);
var G__27557 = (0);
seq__27528_27538 = G__27554;
chunk__27529_27539 = G__27555;
count__27530_27540 = G__27556;
i__27531_27541 = G__27557;
continue;
} else {
var obj_27558__$1 = cljs.core.first(seq__27528_27552__$1);
var listener_27559 = obj_27558__$1.listener;
if(((cljs.core.not(func)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(listener_27559.listen,func))) && ((cljs.core.not(opt_scope)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(listener_27559.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name(event),listener_27559);
} else {
var G__27535_27560 = elm;
var G__27536_27561 = cljs.core.name(event);
var G__27537_27562 = listener_27559;
goog.events.unlisten(G__27535_27560,G__27536_27561,G__27537_27562);
}
} else {
}

var G__27563 = cljs.core.next(seq__27528_27552__$1);
var G__27564 = null;
var G__27565 = (0);
var G__27566 = (0);
seq__27528_27538 = G__27563;
chunk__27529_27539 = G__27564;
count__27530_27540 = G__27565;
i__27531_27541 = G__27566;
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
var wrapper = (function (){var G__27577 = event;
return (enfocus.events.wrapper_register.cljs$core$IFn$_invoke$arity$1 ? enfocus.events.wrapper_register.cljs$core$IFn$_invoke$arity$1(G__27577) : enfocus.events.wrapper_register.call(null,G__27577));
})();
return ((function (wrapper){
return (function (pnod){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$45,event)) && ((window === pnod))){
var G__27578 = enfocus.events.get_vp_monitor();
var G__27579 = "resize";
var G__27580 = func;
return goog.events.listen(G__27578,G__27579,G__27580);
} else {
if((wrapper == null)){
var G__27581 = pnod;
var G__27582 = cljs.core.name(event);
var G__27583 = func;
return goog.events.listen(G__27581,G__27582,G__27583);
} else {
var G__27584 = pnod;
var G__27585 = wrapper;
var G__27586 = func;
return goog.events.listenWithWrapper(G__27584,G__27585,G__27586);
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
var get_name = (function (p1__27587_SHARP_){
return cljs.core.name(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27587_SHARP_,cljs.core.constant$keyword$41))?cljs.core.constant$keyword$43:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27587_SHARP_,cljs.core.constant$keyword$42))?cljs.core.constant$keyword$44:p1__27587_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__27596 = cljs.core.seq(event_list);
var chunk__27597 = null;
var count__27598 = (0);
var i__27599 = (0);
while(true){
if((i__27599 < count__27598)){
var ev = chunk__27597.cljs$core$IIndexed$_nth$arity$2(null,i__27599);
var G__27600_27604 = pnod;
var G__27601_27605 = get_name(ev);
goog.events.removeAll(G__27600_27604,G__27601_27605);

var G__27606 = seq__27596;
var G__27607 = chunk__27597;
var G__27608 = count__27598;
var G__27609 = (i__27599 + (1));
seq__27596 = G__27606;
chunk__27597 = G__27607;
count__27598 = G__27608;
i__27599 = G__27609;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__27596);
if(temp__4126__auto__){
var seq__27596__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27596__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__27596__$1);
var G__27610 = cljs.core.chunk_rest(seq__27596__$1);
var G__27611 = c__4602__auto__;
var G__27612 = cljs.core.count(c__4602__auto__);
var G__27613 = (0);
seq__27596 = G__27610;
chunk__27597 = G__27611;
count__27598 = G__27612;
i__27599 = G__27613;
continue;
} else {
var ev = cljs.core.first(seq__27596__$1);
var G__27602_27614 = pnod;
var G__27603_27615 = get_name(ev);
goog.events.removeAll(G__27602_27614,G__27603_27615);

var G__27616 = cljs.core.next(seq__27596__$1);
var G__27617 = null;
var G__27618 = (0);
var G__27619 = (0);
seq__27596 = G__27616;
chunk__27597 = G__27617;
count__27598 = G__27618;
i__27599 = G__27619;
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
var G__27620__i = 0, G__27620__a = new Array(arguments.length -  0);
while (G__27620__i < G__27620__a.length) {G__27620__a[G__27620__i] = arguments[G__27620__i + 0]; ++G__27620__i;}
  event_list = new cljs.core.IndexedSeq(G__27620__a,0);
} 
return remove_listeners__delegate.call(this,event_list);};
remove_listeners.cljs$lang$maxFixedArity = 0;
remove_listeners.cljs$lang$applyTo = (function (arglist__27621){
var event_list = cljs.core.seq(arglist__27621);
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
var wrapper = (function (){var G__27629 = event;
return (enfocus.events.wrapper_register.cljs$core$IFn$_invoke$arity$1 ? enfocus.events.wrapper_register.cljs$core$IFn$_invoke$arity$1(G__27629) : enfocus.events.wrapper_register.call(null,G__27629));
})();
return ((function (wrapper){
return (function (pnod){
if((wrapper == null)){
var G__27630 = pnod;
var G__27631 = cljs.core.name(event);
var G__27632 = func;
return goog.events.unlisten(G__27630,G__27631,G__27632);
} else {
var G__27633 = pnod;
var G__27634 = wrapper;
var G__27635 = func;
return goog.events.unlistenWithWrapper(G__27633,G__27634,G__27635);
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
var event = (function (){var G__27639 = cur_event;
return goog.object.clone(G__27639);
})();
event.currentTarget = cur;

return event;
});
enfocus.events.listen_live = (function listen_live(event,selector,func){
return (function (node){
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.array_seq([enfocus.events.listen(event,(function (p1__27640_SHARP_){
var seq__27647 = cljs.core.seq(enfocus.events.get_node_chain(node,p1__27640_SHARP_.target));
var chunk__27648 = null;
var count__27649 = (0);
var i__27650 = (0);
while(true){
if((i__27650 < count__27649)){
var el = chunk__27648.cljs$core$IIndexed$_nth$arity$2(null,i__27650);
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(el,cljs.core.array_seq([enfocus.core.filter(enfocus.core.match_QMARK_(selector),((function (seq__27647,chunk__27648,count__27649,i__27650,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event(el,p1__27640_SHARP_);
var G__27651_27653 = event_copy;
(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(G__27651_27653) : func.call(null,G__27651_27653));

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__27640_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__27640_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__27647,chunk__27648,count__27649,i__27650,el))
)], 0));

var G__27654 = seq__27647;
var G__27655 = chunk__27648;
var G__27656 = count__27649;
var G__27657 = (i__27650 + (1));
seq__27647 = G__27654;
chunk__27648 = G__27655;
count__27649 = G__27656;
i__27650 = G__27657;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__27647);
if(temp__4126__auto__){
var seq__27647__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27647__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__27647__$1);
var G__27658 = cljs.core.chunk_rest(seq__27647__$1);
var G__27659 = c__4602__auto__;
var G__27660 = cljs.core.count(c__4602__auto__);
var G__27661 = (0);
seq__27647 = G__27658;
chunk__27648 = G__27659;
count__27649 = G__27660;
i__27650 = G__27661;
continue;
} else {
var el = cljs.core.first(seq__27647__$1);
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(el,cljs.core.array_seq([enfocus.core.filter(enfocus.core.match_QMARK_(selector),((function (seq__27647,chunk__27648,count__27649,i__27650,el,seq__27647__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event(el,p1__27640_SHARP_);
var G__27652_27662 = event_copy;
(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(G__27652_27662) : func.call(null,G__27652_27662));

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__27640_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__27640_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__27647,chunk__27648,count__27649,i__27650,el,seq__27647__$1,temp__4126__auto__))
)], 0));

var G__27663 = cljs.core.next(seq__27647__$1);
var G__27664 = null;
var G__27665 = (0);
var G__27666 = (0);
seq__27647 = G__27663;
chunk__27648 = G__27664;
count__27649 = G__27665;
i__27650 = G__27666;
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
var G__27667 = parent;
var G__27668 = child.parentNode;
parent = G__27667;
child = G__27668;
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
var G__27670 = e;
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(G__27670) : func.call(null,G__27670));
} else {
return null;
}
});
});
