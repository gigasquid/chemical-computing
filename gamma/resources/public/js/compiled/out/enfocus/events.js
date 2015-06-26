// Compiled by ClojureScript 0.0-2850 {}
goog.provide('enfocus.events');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('goog.events');

enfocus.events.view_port_monitor = cljs.core.atom.call(null,null);
/**
* needed to support window :resize
*/
enfocus.events.get_vp_monitor = (function get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.events.view_port_monitor))){
return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
} else {
cljs.core.swap_BANG_.call(null,enfocus.events.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));

return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
}
});
enfocus.events.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){
var obj = (new Object());
obj.listen = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback = enfocus.events.mouse_enter_leave.call(null,func);
callback.listen = func;

callback.scope = opt_scope;

if(cljs.core.truth_(opt_handler)){
return opt_handler.listen(elm,cljs.core.name.call(null,event),callback);
} else {
return goog.events.listen(elm,cljs.core.name.call(null,event),callback);
}
});})(obj))
;

obj.unlisten = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);
var seq__22588_22592 = cljs.core.seq.call(null,listeners);
var chunk__22589_22593 = null;
var count__22590_22594 = (0);
var i__22591_22595 = (0);
while(true){
if((i__22591_22595 < count__22590_22594)){
var obj_22596__$1 = cljs.core._nth.call(null,chunk__22589_22593,i__22591_22595);
var listener_22597 = obj_22596__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_22597.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_22597.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_22597);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_22597);
}
} else {
}

var G__22598 = seq__22588_22592;
var G__22599 = chunk__22589_22593;
var G__22600 = count__22590_22594;
var G__22601 = (i__22591_22595 + (1));
seq__22588_22592 = G__22598;
chunk__22589_22593 = G__22599;
count__22590_22594 = G__22600;
i__22591_22595 = G__22601;
continue;
} else {
var temp__4126__auto___22602 = cljs.core.seq.call(null,seq__22588_22592);
if(temp__4126__auto___22602){
var seq__22588_22603__$1 = temp__4126__auto___22602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22588_22603__$1)){
var c__4651__auto___22604 = cljs.core.chunk_first.call(null,seq__22588_22603__$1);
var G__22605 = cljs.core.chunk_rest.call(null,seq__22588_22603__$1);
var G__22606 = c__4651__auto___22604;
var G__22607 = cljs.core.count.call(null,c__4651__auto___22604);
var G__22608 = (0);
seq__22588_22592 = G__22605;
chunk__22589_22593 = G__22606;
count__22590_22594 = G__22607;
i__22591_22595 = G__22608;
continue;
} else {
var obj_22609__$1 = cljs.core.first.call(null,seq__22588_22603__$1);
var listener_22610 = obj_22609__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_22610.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_22610.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_22610);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_22610);
}
} else {
}

var G__22611 = cljs.core.next.call(null,seq__22588_22603__$1);
var G__22612 = null;
var G__22613 = (0);
var G__22614 = (0);
seq__22588_22592 = G__22611;
chunk__22589_22593 = G__22612;
count__22590_22594 = G__22613;
i__22591_22595 = G__22614;
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
enfocus.events.wrapper_register = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseover","mouseover",-484272303)),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890))], null);
/**
* adding an event to the selected nodes
*/
enfocus.events.listen = (function listen(event,func){
var wrapper = enfocus.events.wrapper_register.call(null,event);
return ((function (wrapper){
return (function (pnod){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resize","resize",297367086),event)) && ((window === pnod))){
return goog.events.listen(enfocus.events.get_vp_monitor.call(null),"resize",func);
} else {
if((wrapper == null)){
return goog.events.listen(pnod,cljs.core.name.call(null,event),func);
} else {
return goog.events.listenWithWrapper(pnod,wrapper,func);
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
var get_name = (function (p1__22615_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__22615_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__22615_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__22615_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__22620 = cljs.core.seq.call(null,event_list);
var chunk__22621 = null;
var count__22622 = (0);
var i__22623 = (0);
while(true){
if((i__22623 < count__22622)){
var ev = cljs.core._nth.call(null,chunk__22621,i__22623);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__22624 = seq__22620;
var G__22625 = chunk__22621;
var G__22626 = count__22622;
var G__22627 = (i__22623 + (1));
seq__22620 = G__22624;
chunk__22621 = G__22625;
count__22622 = G__22626;
i__22623 = G__22627;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22620);
if(temp__4126__auto__){
var seq__22620__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22620__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__22620__$1);
var G__22628 = cljs.core.chunk_rest.call(null,seq__22620__$1);
var G__22629 = c__4651__auto__;
var G__22630 = cljs.core.count.call(null,c__4651__auto__);
var G__22631 = (0);
seq__22620 = G__22628;
chunk__22621 = G__22629;
count__22622 = G__22630;
i__22623 = G__22631;
continue;
} else {
var ev = cljs.core.first.call(null,seq__22620__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__22632 = cljs.core.next.call(null,seq__22620__$1);
var G__22633 = null;
var G__22634 = (0);
var G__22635 = (0);
seq__22620 = G__22632;
chunk__22621 = G__22633;
count__22622 = G__22634;
i__22623 = G__22635;
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
var G__22636__i = 0, G__22636__a = new Array(arguments.length -  0);
while (G__22636__i < G__22636__a.length) {G__22636__a[G__22636__i] = arguments[G__22636__i + 0]; ++G__22636__i;}
  event_list = new cljs.core.IndexedSeq(G__22636__a,0);
} 
return remove_listeners__delegate.call(this,event_list);};
remove_listeners.cljs$lang$maxFixedArity = 0;
remove_listeners.cljs$lang$applyTo = (function (arglist__22637){
var event_list = cljs.core.seq(arglist__22637);
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
return enfocus.events.remove_listeners.call(null,event);
});
var unlisten__2 = (function (event,func){
var wrapper = enfocus.events.wrapper_register.call(null,event);
return ((function (wrapper){
return (function (pnod){
if((wrapper == null)){
return goog.events.unlisten(pnod,cljs.core.name.call(null,event),func);
} else {
return goog.events.unlistenWithWrapper(pnod,wrapper,func);
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
if(((node == null)) || (cljs.core._EQ_.call(null,node,top))){
return cljs.core.List.EMPTY;
} else {
return cljs.core.conj.call(null,get_node_chain.call(null,top,node.parentNode),node);
}
});
enfocus.events.create_event = (function create_event(cur,cur_event){
var event = goog.object.clone(cur_event);
event.currentTarget = cur;

return event;
});
enfocus.events.listen_live = (function listen_live(event,selector,func){
return (function (node){
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__22638_SHARP_){
var seq__22643 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__22638_SHARP_.target));
var chunk__22644 = null;
var count__22645 = (0);
var i__22646 = (0);
while(true){
if((i__22646 < count__22645)){
var el = cljs.core._nth.call(null,chunk__22644,i__22646);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__22643,chunk__22644,count__22645,i__22646,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__22638_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__22638_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__22638_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__22643,chunk__22644,count__22645,i__22646,el))
));

var G__22647 = seq__22643;
var G__22648 = chunk__22644;
var G__22649 = count__22645;
var G__22650 = (i__22646 + (1));
seq__22643 = G__22647;
chunk__22644 = G__22648;
count__22645 = G__22649;
i__22646 = G__22650;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22643);
if(temp__4126__auto__){
var seq__22643__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22643__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__22643__$1);
var G__22651 = cljs.core.chunk_rest.call(null,seq__22643__$1);
var G__22652 = c__4651__auto__;
var G__22653 = cljs.core.count.call(null,c__4651__auto__);
var G__22654 = (0);
seq__22643 = G__22651;
chunk__22644 = G__22652;
count__22645 = G__22653;
i__22646 = G__22654;
continue;
} else {
var el = cljs.core.first.call(null,seq__22643__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__22643,chunk__22644,count__22645,i__22646,el,seq__22643__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__22638_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__22638_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__22638_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__22643,chunk__22644,count__22645,i__22646,el,seq__22643__$1,temp__4126__auto__))
));

var G__22655 = cljs.core.next.call(null,seq__22643__$1);
var G__22656 = null;
var G__22657 = (0);
var G__22658 = (0);
seq__22643 = G__22655;
chunk__22644 = G__22656;
count__22645 = G__22657;
i__22646 = G__22658;
continue;
}
} else {
return null;
}
}
break;
}
})));
});
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.events.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.not.call(null,child)){
return false;
} else {
if((parent === child)){
return false;
} else {
if((child.parentNode === parent)){
return true;
} else {
var G__22659 = parent;
var G__22660 = child.parentNode;
parent = G__22659;
child = G__22660;
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
if((!((re === this$))) && (!(enfocus.events.child_of_QMARK_.call(null,this$,re)))){
return func.call(null,e);
} else {
return null;
}
});
});

//# sourceMappingURL=events.js.map?rel=1435268445338