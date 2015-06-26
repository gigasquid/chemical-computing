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
var seq__34214_34218 = cljs.core.seq.call(null,listeners);
var chunk__34215_34219 = null;
var count__34216_34220 = (0);
var i__34217_34221 = (0);
while(true){
if((i__34217_34221 < count__34216_34220)){
var obj_34222__$1 = cljs.core._nth.call(null,chunk__34215_34219,i__34217_34221);
var listener_34223 = obj_34222__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_34223.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_34223.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_34223);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_34223);
}
} else {
}

var G__34224 = seq__34214_34218;
var G__34225 = chunk__34215_34219;
var G__34226 = count__34216_34220;
var G__34227 = (i__34217_34221 + (1));
seq__34214_34218 = G__34224;
chunk__34215_34219 = G__34225;
count__34216_34220 = G__34226;
i__34217_34221 = G__34227;
continue;
} else {
var temp__4126__auto___34228 = cljs.core.seq.call(null,seq__34214_34218);
if(temp__4126__auto___34228){
var seq__34214_34229__$1 = temp__4126__auto___34228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34214_34229__$1)){
var c__16932__auto___34230 = cljs.core.chunk_first.call(null,seq__34214_34229__$1);
var G__34231 = cljs.core.chunk_rest.call(null,seq__34214_34229__$1);
var G__34232 = c__16932__auto___34230;
var G__34233 = cljs.core.count.call(null,c__16932__auto___34230);
var G__34234 = (0);
seq__34214_34218 = G__34231;
chunk__34215_34219 = G__34232;
count__34216_34220 = G__34233;
i__34217_34221 = G__34234;
continue;
} else {
var obj_34235__$1 = cljs.core.first.call(null,seq__34214_34229__$1);
var listener_34236 = obj_34235__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_34236.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_34236.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_34236);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_34236);
}
} else {
}

var G__34237 = cljs.core.next.call(null,seq__34214_34229__$1);
var G__34238 = null;
var G__34239 = (0);
var G__34240 = (0);
seq__34214_34218 = G__34237;
chunk__34215_34219 = G__34238;
count__34216_34220 = G__34239;
i__34217_34221 = G__34240;
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
var get_name = (function (p1__34241_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__34241_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__34241_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__34241_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__34246 = cljs.core.seq.call(null,event_list);
var chunk__34247 = null;
var count__34248 = (0);
var i__34249 = (0);
while(true){
if((i__34249 < count__34248)){
var ev = cljs.core._nth.call(null,chunk__34247,i__34249);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__34250 = seq__34246;
var G__34251 = chunk__34247;
var G__34252 = count__34248;
var G__34253 = (i__34249 + (1));
seq__34246 = G__34250;
chunk__34247 = G__34251;
count__34248 = G__34252;
i__34249 = G__34253;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34246);
if(temp__4126__auto__){
var seq__34246__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34246__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__34246__$1);
var G__34254 = cljs.core.chunk_rest.call(null,seq__34246__$1);
var G__34255 = c__16932__auto__;
var G__34256 = cljs.core.count.call(null,c__16932__auto__);
var G__34257 = (0);
seq__34246 = G__34254;
chunk__34247 = G__34255;
count__34248 = G__34256;
i__34249 = G__34257;
continue;
} else {
var ev = cljs.core.first.call(null,seq__34246__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__34258 = cljs.core.next.call(null,seq__34246__$1);
var G__34259 = null;
var G__34260 = (0);
var G__34261 = (0);
seq__34246 = G__34258;
chunk__34247 = G__34259;
count__34248 = G__34260;
i__34249 = G__34261;
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
var G__34262__i = 0, G__34262__a = new Array(arguments.length -  0);
while (G__34262__i < G__34262__a.length) {G__34262__a[G__34262__i] = arguments[G__34262__i + 0]; ++G__34262__i;}
  event_list = new cljs.core.IndexedSeq(G__34262__a,0);
} 
return remove_listeners__delegate.call(this,event_list);};
remove_listeners.cljs$lang$maxFixedArity = 0;
remove_listeners.cljs$lang$applyTo = (function (arglist__34263){
var event_list = cljs.core.seq(arglist__34263);
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
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__34264_SHARP_){
var seq__34269 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__34264_SHARP_.target));
var chunk__34270 = null;
var count__34271 = (0);
var i__34272 = (0);
while(true){
if((i__34272 < count__34271)){
var el = cljs.core._nth.call(null,chunk__34270,i__34272);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__34269,chunk__34270,count__34271,i__34272,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__34264_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__34264_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__34264_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__34269,chunk__34270,count__34271,i__34272,el))
));

var G__34273 = seq__34269;
var G__34274 = chunk__34270;
var G__34275 = count__34271;
var G__34276 = (i__34272 + (1));
seq__34269 = G__34273;
chunk__34270 = G__34274;
count__34271 = G__34275;
i__34272 = G__34276;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34269);
if(temp__4126__auto__){
var seq__34269__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34269__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__34269__$1);
var G__34277 = cljs.core.chunk_rest.call(null,seq__34269__$1);
var G__34278 = c__16932__auto__;
var G__34279 = cljs.core.count.call(null,c__16932__auto__);
var G__34280 = (0);
seq__34269 = G__34277;
chunk__34270 = G__34278;
count__34271 = G__34279;
i__34272 = G__34280;
continue;
} else {
var el = cljs.core.first.call(null,seq__34269__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__34269,chunk__34270,count__34271,i__34272,el,seq__34269__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__34264_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__34264_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__34264_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__34269,chunk__34270,count__34271,i__34272,el,seq__34269__$1,temp__4126__auto__))
));

var G__34281 = cljs.core.next.call(null,seq__34269__$1);
var G__34282 = null;
var G__34283 = (0);
var G__34284 = (0);
seq__34269 = G__34281;
chunk__34270 = G__34282;
count__34271 = G__34283;
i__34272 = G__34284;
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
var G__34285 = parent;
var G__34286 = child.parentNode;
parent = G__34285;
child = G__34286;
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

//# sourceMappingURL=events.js.map?rel=1435014981254