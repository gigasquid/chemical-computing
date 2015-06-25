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
var seq__34353_34357 = cljs.core.seq.call(null,listeners);
var chunk__34354_34358 = null;
var count__34355_34359 = (0);
var i__34356_34360 = (0);
while(true){
if((i__34356_34360 < count__34355_34359)){
var obj_34361__$1 = cljs.core._nth.call(null,chunk__34354_34358,i__34356_34360);
var listener_34362 = obj_34361__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_34362.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_34362.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_34362);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_34362);
}
} else {
}

var G__34363 = seq__34353_34357;
var G__34364 = chunk__34354_34358;
var G__34365 = count__34355_34359;
var G__34366 = (i__34356_34360 + (1));
seq__34353_34357 = G__34363;
chunk__34354_34358 = G__34364;
count__34355_34359 = G__34365;
i__34356_34360 = G__34366;
continue;
} else {
var temp__4126__auto___34367 = cljs.core.seq.call(null,seq__34353_34357);
if(temp__4126__auto___34367){
var seq__34353_34368__$1 = temp__4126__auto___34367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34353_34368__$1)){
var c__16932__auto___34369 = cljs.core.chunk_first.call(null,seq__34353_34368__$1);
var G__34370 = cljs.core.chunk_rest.call(null,seq__34353_34368__$1);
var G__34371 = c__16932__auto___34369;
var G__34372 = cljs.core.count.call(null,c__16932__auto___34369);
var G__34373 = (0);
seq__34353_34357 = G__34370;
chunk__34354_34358 = G__34371;
count__34355_34359 = G__34372;
i__34356_34360 = G__34373;
continue;
} else {
var obj_34374__$1 = cljs.core.first.call(null,seq__34353_34368__$1);
var listener_34375 = obj_34374__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_34375.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_34375.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_34375);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_34375);
}
} else {
}

var G__34376 = cljs.core.next.call(null,seq__34353_34368__$1);
var G__34377 = null;
var G__34378 = (0);
var G__34379 = (0);
seq__34353_34357 = G__34376;
chunk__34354_34358 = G__34377;
count__34355_34359 = G__34378;
i__34356_34360 = G__34379;
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
var get_name = (function (p1__34380_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__34380_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__34380_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__34380_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__34385 = cljs.core.seq.call(null,event_list);
var chunk__34386 = null;
var count__34387 = (0);
var i__34388 = (0);
while(true){
if((i__34388 < count__34387)){
var ev = cljs.core._nth.call(null,chunk__34386,i__34388);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__34389 = seq__34385;
var G__34390 = chunk__34386;
var G__34391 = count__34387;
var G__34392 = (i__34388 + (1));
seq__34385 = G__34389;
chunk__34386 = G__34390;
count__34387 = G__34391;
i__34388 = G__34392;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34385);
if(temp__4126__auto__){
var seq__34385__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34385__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__34385__$1);
var G__34393 = cljs.core.chunk_rest.call(null,seq__34385__$1);
var G__34394 = c__16932__auto__;
var G__34395 = cljs.core.count.call(null,c__16932__auto__);
var G__34396 = (0);
seq__34385 = G__34393;
chunk__34386 = G__34394;
count__34387 = G__34395;
i__34388 = G__34396;
continue;
} else {
var ev = cljs.core.first.call(null,seq__34385__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__34397 = cljs.core.next.call(null,seq__34385__$1);
var G__34398 = null;
var G__34399 = (0);
var G__34400 = (0);
seq__34385 = G__34397;
chunk__34386 = G__34398;
count__34387 = G__34399;
i__34388 = G__34400;
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
var G__34401__i = 0, G__34401__a = new Array(arguments.length -  0);
while (G__34401__i < G__34401__a.length) {G__34401__a[G__34401__i] = arguments[G__34401__i + 0]; ++G__34401__i;}
  event_list = new cljs.core.IndexedSeq(G__34401__a,0);
} 
return remove_listeners__delegate.call(this,event_list);};
remove_listeners.cljs$lang$maxFixedArity = 0;
remove_listeners.cljs$lang$applyTo = (function (arglist__34402){
var event_list = cljs.core.seq(arglist__34402);
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
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__34403_SHARP_){
var seq__34408 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__34403_SHARP_.target));
var chunk__34409 = null;
var count__34410 = (0);
var i__34411 = (0);
while(true){
if((i__34411 < count__34410)){
var el = cljs.core._nth.call(null,chunk__34409,i__34411);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__34408,chunk__34409,count__34410,i__34411,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__34403_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__34403_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__34403_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__34408,chunk__34409,count__34410,i__34411,el))
));

var G__34412 = seq__34408;
var G__34413 = chunk__34409;
var G__34414 = count__34410;
var G__34415 = (i__34411 + (1));
seq__34408 = G__34412;
chunk__34409 = G__34413;
count__34410 = G__34414;
i__34411 = G__34415;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34408);
if(temp__4126__auto__){
var seq__34408__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34408__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__34408__$1);
var G__34416 = cljs.core.chunk_rest.call(null,seq__34408__$1);
var G__34417 = c__16932__auto__;
var G__34418 = cljs.core.count.call(null,c__16932__auto__);
var G__34419 = (0);
seq__34408 = G__34416;
chunk__34409 = G__34417;
count__34410 = G__34418;
i__34411 = G__34419;
continue;
} else {
var el = cljs.core.first.call(null,seq__34408__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__34408,chunk__34409,count__34410,i__34411,el,seq__34408__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__34403_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__34403_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__34403_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__34408,chunk__34409,count__34410,i__34411,el,seq__34408__$1,temp__4126__auto__))
));

var G__34420 = cljs.core.next.call(null,seq__34408__$1);
var G__34421 = null;
var G__34422 = (0);
var G__34423 = (0);
seq__34408 = G__34420;
chunk__34409 = G__34421;
count__34410 = G__34422;
i__34411 = G__34423;
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
var G__34424 = parent;
var G__34425 = child.parentNode;
parent = G__34424;
child = G__34425;
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

//# sourceMappingURL=events.js.map?rel=1435015536261