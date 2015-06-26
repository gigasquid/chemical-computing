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
var seq__20776_20780 = cljs.core.seq.call(null,listeners);
var chunk__20777_20781 = null;
var count__20778_20782 = (0);
var i__20779_20783 = (0);
while(true){
if((i__20779_20783 < count__20778_20782)){
var obj_20784__$1 = cljs.core._nth.call(null,chunk__20777_20781,i__20779_20783);
var listener_20785 = obj_20784__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_20785.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_20785.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_20785);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_20785);
}
} else {
}

var G__20786 = seq__20776_20780;
var G__20787 = chunk__20777_20781;
var G__20788 = count__20778_20782;
var G__20789 = (i__20779_20783 + (1));
seq__20776_20780 = G__20786;
chunk__20777_20781 = G__20787;
count__20778_20782 = G__20788;
i__20779_20783 = G__20789;
continue;
} else {
var temp__4126__auto___20790 = cljs.core.seq.call(null,seq__20776_20780);
if(temp__4126__auto___20790){
var seq__20776_20791__$1 = temp__4126__auto___20790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20776_20791__$1)){
var c__4602__auto___20792 = cljs.core.chunk_first.call(null,seq__20776_20791__$1);
var G__20793 = cljs.core.chunk_rest.call(null,seq__20776_20791__$1);
var G__20794 = c__4602__auto___20792;
var G__20795 = cljs.core.count.call(null,c__4602__auto___20792);
var G__20796 = (0);
seq__20776_20780 = G__20793;
chunk__20777_20781 = G__20794;
count__20778_20782 = G__20795;
i__20779_20783 = G__20796;
continue;
} else {
var obj_20797__$1 = cljs.core.first.call(null,seq__20776_20791__$1);
var listener_20798 = obj_20797__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_20798.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_20798.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_20798);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_20798);
}
} else {
}

var G__20799 = cljs.core.next.call(null,seq__20776_20791__$1);
var G__20800 = null;
var G__20801 = (0);
var G__20802 = (0);
seq__20776_20780 = G__20799;
chunk__20777_20781 = G__20800;
count__20778_20782 = G__20801;
i__20779_20783 = G__20802;
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
var get_name = (function (p1__20803_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__20803_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__20803_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__20803_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__20808 = cljs.core.seq.call(null,event_list);
var chunk__20809 = null;
var count__20810 = (0);
var i__20811 = (0);
while(true){
if((i__20811 < count__20810)){
var ev = cljs.core._nth.call(null,chunk__20809,i__20811);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__20812 = seq__20808;
var G__20813 = chunk__20809;
var G__20814 = count__20810;
var G__20815 = (i__20811 + (1));
seq__20808 = G__20812;
chunk__20809 = G__20813;
count__20810 = G__20814;
i__20811 = G__20815;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20808);
if(temp__4126__auto__){
var seq__20808__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20808__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__20808__$1);
var G__20816 = cljs.core.chunk_rest.call(null,seq__20808__$1);
var G__20817 = c__4602__auto__;
var G__20818 = cljs.core.count.call(null,c__4602__auto__);
var G__20819 = (0);
seq__20808 = G__20816;
chunk__20809 = G__20817;
count__20810 = G__20818;
i__20811 = G__20819;
continue;
} else {
var ev = cljs.core.first.call(null,seq__20808__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__20820 = cljs.core.next.call(null,seq__20808__$1);
var G__20821 = null;
var G__20822 = (0);
var G__20823 = (0);
seq__20808 = G__20820;
chunk__20809 = G__20821;
count__20810 = G__20822;
i__20811 = G__20823;
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
var G__20824__i = 0, G__20824__a = new Array(arguments.length -  0);
while (G__20824__i < G__20824__a.length) {G__20824__a[G__20824__i] = arguments[G__20824__i + 0]; ++G__20824__i;}
  event_list = new cljs.core.IndexedSeq(G__20824__a,0);
} 
return remove_listeners__delegate.call(this,event_list);};
remove_listeners.cljs$lang$maxFixedArity = 0;
remove_listeners.cljs$lang$applyTo = (function (arglist__20825){
var event_list = cljs.core.seq(arglist__20825);
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
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__20826_SHARP_){
var seq__20831 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__20826_SHARP_.target));
var chunk__20832 = null;
var count__20833 = (0);
var i__20834 = (0);
while(true){
if((i__20834 < count__20833)){
var el = cljs.core._nth.call(null,chunk__20832,i__20834);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__20831,chunk__20832,count__20833,i__20834,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__20826_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__20826_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__20826_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__20831,chunk__20832,count__20833,i__20834,el))
));

var G__20835 = seq__20831;
var G__20836 = chunk__20832;
var G__20837 = count__20833;
var G__20838 = (i__20834 + (1));
seq__20831 = G__20835;
chunk__20832 = G__20836;
count__20833 = G__20837;
i__20834 = G__20838;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20831);
if(temp__4126__auto__){
var seq__20831__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20831__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__20831__$1);
var G__20839 = cljs.core.chunk_rest.call(null,seq__20831__$1);
var G__20840 = c__4602__auto__;
var G__20841 = cljs.core.count.call(null,c__4602__auto__);
var G__20842 = (0);
seq__20831 = G__20839;
chunk__20832 = G__20840;
count__20833 = G__20841;
i__20834 = G__20842;
continue;
} else {
var el = cljs.core.first.call(null,seq__20831__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__20831,chunk__20832,count__20833,i__20834,el,seq__20831__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__20826_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__20826_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__20826_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__20831,chunk__20832,count__20833,i__20834,el,seq__20831__$1,temp__4126__auto__))
));

var G__20843 = cljs.core.next.call(null,seq__20831__$1);
var G__20844 = null;
var G__20845 = (0);
var G__20846 = (0);
seq__20831 = G__20843;
chunk__20832 = G__20844;
count__20833 = G__20845;
i__20834 = G__20846;
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
var G__20847 = parent;
var G__20848 = child.parentNode;
parent = G__20847;
child = G__20848;
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

//# sourceMappingURL=events.js.map