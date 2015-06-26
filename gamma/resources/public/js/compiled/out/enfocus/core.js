// Compiled by ClojureScript 0.0-2850 {}
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('domina.css');
goog.require('goog.Timer');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('domina');
goog.require('goog.async.Delay');
goog.require('goog.events');
goog.require('domina.xpath');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('enfocus.enlive.syntax');







enfocus.core.ISelector = (function (){var obj21462 = {};
return obj21462;
})();

enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){
if((function (){var and__3852__auto__ = this$;
if(and__3852__auto__){
return this$.enfocus$core$ISelector$select$arity$1;
} else {
return and__3852__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$1(this$);
} else {
var x__4508__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3864__auto__ = (enfocus.core.select[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (enfocus.core.select["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){
if((function (){var and__3852__auto__ = this$;
if(and__3852__auto__){
return this$.enfocus$core$ISelector$select$arity$2;
} else {
return and__3852__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else {
var x__4508__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3864__auto__ = (enfocus.core.select[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (enfocus.core.select["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){
if((function (){var and__3852__auto__ = this$;
if(and__3852__auto__){
return this$.enfocus$core$ISelector$select$arity$3;
} else {
return and__3852__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else {
var x__4508__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3864__auto__ = (enfocus.core.select[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (enfocus.core.select["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root,id_mask);
}
});
select = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return select__1.call(this,this$);
case 2:
return select__2.call(this,this$,root);
case 3:
return select__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$core$IFn$_invoke$arity$1 = select__1;
select.cljs$core$IFn$_invoke$arity$2 = select__2;
select.cljs$core$IFn$_invoke$arity$3 = select__3;
return select;
})()
;


enfocus.core.ITransform = (function (){var obj21464 = {};
return obj21464;
})();

enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){
if((function (){var and__3852__auto__ = this$;
if(and__3852__auto__){
return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else {
return and__3852__auto__;
}
})()){
return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else {
var x__4508__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3864__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){
if((function (){var and__3852__auto__ = this$;
if(and__3852__auto__){
return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else {
return and__3852__auto__;
}
})()){
return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else {
var x__4508__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3864__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes,callback);
}
});
apply_transform = function(this$,nodes,callback){
switch(arguments.length){
case 2:
return apply_transform__2.call(this,this$,nodes);
case 3:
return apply_transform__3.call(this,this$,nodes,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_transform.cljs$core$IFn$_invoke$arity$2 = apply_transform__2;
apply_transform.cljs$core$IFn$_invoke$arity$3 = apply_transform__3;
return apply_transform;
})()
;

enfocus.core.debug = false;
enfocus.core.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3852__auto__ = enfocus.core.debug;
if(cljs.core.truth_(and__3852__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__3852__auto__;
}
})())){
return console.log(mesg);
} else {
return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){
return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return (tst instanceof NodeList);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){
if((nl === window)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else {
return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){

return cljs.core.mapcat.call(null,(function (p1__21465_SHARP_){
if(typeof p1__21465_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__21465_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__21465_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__21472_21478 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__21473_21479 = null;
var count__21474_21480 = (0);
var i__21475_21481 = (0);
while(true){
if((i__21475_21481 < count__21474_21480)){
var vec__21476_21482 = cljs.core._nth.call(null,chunk__21473_21479,i__21475_21481);
var attr_21483 = cljs.core.nth.call(null,vec__21476_21482,(0),null);
var value_21484 = cljs.core.nth.call(null,vec__21476_21482,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_21483),value_21484);

var G__21485 = seq__21472_21478;
var G__21486 = chunk__21473_21479;
var G__21487 = count__21474_21480;
var G__21488 = (i__21475_21481 + (1));
seq__21472_21478 = G__21485;
chunk__21473_21479 = G__21486;
count__21474_21480 = G__21487;
i__21475_21481 = G__21488;
continue;
} else {
var temp__4126__auto___21489 = cljs.core.seq.call(null,seq__21472_21478);
if(temp__4126__auto___21489){
var seq__21472_21490__$1 = temp__4126__auto___21489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21472_21490__$1)){
var c__4651__auto___21491 = cljs.core.chunk_first.call(null,seq__21472_21490__$1);
var G__21492 = cljs.core.chunk_rest.call(null,seq__21472_21490__$1);
var G__21493 = c__4651__auto___21491;
var G__21494 = cljs.core.count.call(null,c__4651__auto___21491);
var G__21495 = (0);
seq__21472_21478 = G__21492;
chunk__21473_21479 = G__21493;
count__21474_21480 = G__21494;
i__21475_21481 = G__21495;
continue;
} else {
var vec__21477_21496 = cljs.core.first.call(null,seq__21472_21490__$1);
var attr_21497 = cljs.core.nth.call(null,vec__21477_21496,(0),null);
var value_21498 = cljs.core.nth.call(null,vec__21477_21496,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_21497),value_21498);

var G__21499 = cljs.core.next.call(null,seq__21472_21490__$1);
var G__21500 = null;
var G__21501 = (0);
var G__21502 = (0);
seq__21472_21478 = G__21499;
chunk__21473_21479 = G__21500;
count__21474_21480 = G__21501;
i__21475_21481 = G__21502;
continue;
}
} else {
}
}
break;
}

return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){
var seq__21507 = cljs.core.seq.call(null,values);
var chunk__21508 = null;
var count__21509 = (0);
var i__21510 = (0);
while(true){
if((i__21510 < count__21509)){
var attr = cljs.core._nth.call(null,chunk__21508,i__21510);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__21511 = seq__21507;
var G__21512 = chunk__21508;
var G__21513 = count__21509;
var G__21514 = (i__21510 + (1));
seq__21507 = G__21511;
chunk__21508 = G__21512;
count__21509 = G__21513;
i__21510 = G__21514;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21507);
if(temp__4126__auto__){
var seq__21507__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21507__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__21507__$1);
var G__21515 = cljs.core.chunk_rest.call(null,seq__21507__$1);
var G__21516 = c__4651__auto__;
var G__21517 = cljs.core.count.call(null,c__4651__auto__);
var G__21518 = (0);
seq__21507 = G__21515;
chunk__21508 = G__21516;
count__21509 = G__21517;
i__21510 = G__21518;
continue;
} else {
var attr = cljs.core.first.call(null,seq__21507__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__21519 = cljs.core.next.call(null,seq__21507__$1);
var G__21520 = null;
var G__21521 = (0);
var G__21522 = (0);
seq__21507 = G__21519;
chunk__21508 = G__21520;
count__21509 = G__21521;
i__21510 = G__21522;
continue;
}
} else {
return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){
return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){
return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function pix_round(step){
if((step < (0))){
return Math.floor.call(null,step);
} else {
return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){
if(cljs.core.truth_(elem)){
if(cljs.core.map_QMARK_.call(null,ats)){
var seq__21529_21535 = cljs.core.seq.call(null,ats);
var chunk__21530_21536 = null;
var count__21531_21537 = (0);
var i__21532_21538 = (0);
while(true){
if((i__21532_21538 < count__21531_21537)){
var vec__21533_21539 = cljs.core._nth.call(null,chunk__21530_21536,i__21532_21538);
var k_21540 = cljs.core.nth.call(null,vec__21533_21539,(0),null);
var v_21541 = cljs.core.nth.call(null,vec__21533_21539,(1),null);
add_map_attrs.call(null,elem,k_21540,v_21541);

var G__21542 = seq__21529_21535;
var G__21543 = chunk__21530_21536;
var G__21544 = count__21531_21537;
var G__21545 = (i__21532_21538 + (1));
seq__21529_21535 = G__21542;
chunk__21530_21536 = G__21543;
count__21531_21537 = G__21544;
i__21532_21538 = G__21545;
continue;
} else {
var temp__4126__auto___21546 = cljs.core.seq.call(null,seq__21529_21535);
if(temp__4126__auto___21546){
var seq__21529_21547__$1 = temp__4126__auto___21546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21529_21547__$1)){
var c__4651__auto___21548 = cljs.core.chunk_first.call(null,seq__21529_21547__$1);
var G__21549 = cljs.core.chunk_rest.call(null,seq__21529_21547__$1);
var G__21550 = c__4651__auto___21548;
var G__21551 = cljs.core.count.call(null,c__4651__auto___21548);
var G__21552 = (0);
seq__21529_21535 = G__21549;
chunk__21530_21536 = G__21550;
count__21531_21537 = G__21551;
i__21532_21538 = G__21552;
continue;
} else {
var vec__21534_21553 = cljs.core.first.call(null,seq__21529_21547__$1);
var k_21554 = cljs.core.nth.call(null,vec__21534_21553,(0),null);
var v_21555 = cljs.core.nth.call(null,vec__21534_21553,(1),null);
add_map_attrs.call(null,elem,k_21554,v_21555);

var G__21556 = cljs.core.next.call(null,seq__21529_21547__$1);
var G__21557 = null;
var G__21558 = (0);
var G__21559 = (0);
seq__21529_21535 = G__21556;
chunk__21530_21536 = G__21557;
count__21531_21537 = G__21558;
i__21532_21538 = G__21559;
continue;
}
} else {
}
}
break;
}

return elem;
} else {
return null;
}
} else {
return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);

return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_map_attrs.cljs$core$IFn$_invoke$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$core$IFn$_invoke$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,(0));
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div = goog.dom.createDom("div",enfocus.core.hide_style);
if(cljs.core._EQ_.call(null,child.nodeType,(11))){
goog.dom.appendChild(div,child);
} else {
enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));

var seq__21564_21568 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__21565_21569 = null;
var count__21566_21570 = (0);
var i__21567_21571 = (0);
while(true){
if((i__21567_21571 < count__21566_21570)){
var node_21572 = cljs.core._nth.call(null,chunk__21565_21569,i__21567_21571);
goog.dom.appendChild(div,node_21572);

var G__21573 = seq__21564_21568;
var G__21574 = chunk__21565_21569;
var G__21575 = count__21566_21570;
var G__21576 = (i__21567_21571 + (1));
seq__21564_21568 = G__21573;
chunk__21565_21569 = G__21574;
count__21566_21570 = G__21575;
i__21567_21571 = G__21576;
continue;
} else {
var temp__4126__auto___21577 = cljs.core.seq.call(null,seq__21564_21568);
if(temp__4126__auto___21577){
var seq__21564_21578__$1 = temp__4126__auto___21577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21564_21578__$1)){
var c__4651__auto___21579 = cljs.core.chunk_first.call(null,seq__21564_21578__$1);
var G__21580 = cljs.core.chunk_rest.call(null,seq__21564_21578__$1);
var G__21581 = c__4651__auto___21579;
var G__21582 = cljs.core.count.call(null,c__4651__auto___21579);
var G__21583 = (0);
seq__21564_21568 = G__21580;
chunk__21565_21569 = G__21581;
count__21566_21570 = G__21582;
i__21567_21571 = G__21583;
continue;
} else {
var node_21584 = cljs.core.first.call(null,seq__21564_21578__$1);
goog.dom.appendChild(div,node_21584);

var G__21585 = cljs.core.next.call(null,seq__21564_21578__$1);
var G__21586 = null;
var G__21587 = (0);
var G__21588 = (0);
seq__21564_21568 = G__21585;
chunk__21565_21569 = G__21586;
count__21566_21570 = G__21587;
i__21567_21571 = G__21588;
continue;
}
} else {
}
}
break;
}
}

goog.dom.appendChild(goog.dom.getDocument().documentElement,div);

return div;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child = div.childNodes;
var frag = document.createDocumentFragment();
goog.dom.append(frag,child);

goog.dom.removeNode(div);

return frag;
});
enfocus.core.last_element_child = (function last_element_child(node){

return goog.dom.getLastElementChild(node);
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function() {
var replace_ids = null;
var replace_ids__1 = (function (text){
return replace_ids.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join(''),text);
});
var replace_ids__2 = (function (id_mask,text){
var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,((function (re){
return (function (a,b,c,d){
return [cljs.core.str(b),cljs.core.str(id_mask),cljs.core.str(c),cljs.core.str(d)].join('');
});})(re))
)], null);
});
replace_ids = function(id_mask,text){
switch(arguments.length){
case 1:
return replace_ids__1.call(this,id_mask);
case 2:
return replace_ids__2.call(this,id_mask,text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_ids.cljs$core$IFn$_invoke$arity$1 = replace_ids__1;
replace_ids.cljs$core$IFn$_invoke$arity$2 = replace_ids__2;
return replace_ids;
})()
;
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (id_nodes,nod_col){
return (function (p1__21589_SHARP_){
var id = p1__21589_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__21589_SHARP_.setAttribute("id",rid);
});})(id_nodes,nod_col))
,nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);

var req = (new goog.net.XhrIo());
var callback = ((function (req){
return (function (req__$1){
var text = req__$1.getResponseText();
var vec__21591 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__21591,(0),null);
var txt = cljs.core.nth.call(null,vec__21591,(1),null);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;
goog.events.listen(req,goog.net.EventType.COMPLETE,((function (req,callback){
return (function (){
callback.call(null,req);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
});})(req,callback))
);

return req.send(uri,"GET");
} else {
return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){
var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));
var frag = document.createDocumentFragment();
enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));

var seq__21596_21600 = cljs.core.seq.call(null,dfa);
var chunk__21597_21601 = null;
var count__21598_21602 = (0);
var i__21599_21603 = (0);
while(true){
if((i__21599_21603 < count__21598_21602)){
var df_21604 = cljs.core._nth.call(null,chunk__21597_21601,i__21599_21603);
goog.dom.append(frag,df_21604);

var G__21605 = seq__21596_21600;
var G__21606 = chunk__21597_21601;
var G__21607 = count__21598_21602;
var G__21608 = (i__21599_21603 + (1));
seq__21596_21600 = G__21605;
chunk__21597_21601 = G__21606;
count__21598_21602 = G__21607;
i__21599_21603 = G__21608;
continue;
} else {
var temp__4126__auto___21609 = cljs.core.seq.call(null,seq__21596_21600);
if(temp__4126__auto___21609){
var seq__21596_21610__$1 = temp__4126__auto___21609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21596_21610__$1)){
var c__4651__auto___21611 = cljs.core.chunk_first.call(null,seq__21596_21610__$1);
var G__21612 = cljs.core.chunk_rest.call(null,seq__21596_21610__$1);
var G__21613 = c__4651__auto___21611;
var G__21614 = cljs.core.count.call(null,c__4651__auto___21611);
var G__21615 = (0);
seq__21596_21600 = G__21612;
chunk__21597_21601 = G__21613;
count__21598_21602 = G__21614;
i__21599_21603 = G__21615;
continue;
} else {
var df_21616 = cljs.core.first.call(null,seq__21596_21610__$1);
goog.dom.append(frag,df_21616);

var G__21617 = cljs.core.next.call(null,seq__21596_21610__$1);
var G__21618 = null;
var G__21619 = (0);
var G__21620 = (0);
seq__21596_21600 = G__21617;
chunk__21597_21601 = G__21618;
count__21598_21602 = G__21619;
i__21599_21603 = G__21620;
continue;
}
} else {
}
}
break;
}

return frag;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);
if(cljs.core.truth_(nod)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else {
return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str = enfocus.core.create_sel_str.call(null,sel);
var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));
if(cljs.core.truth_(cache)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else {
var vec__21623 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__21623,(0),null);
var tdom = cljs.core.nth.call(null,vec__21623,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__21623,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__21621_SHARP_){
return p1__21621_SHARP_.outerHTML;
});})(vec__21623,sym,tdom,dom,tsnip,sel_str,cache))
,tsnip));
enfocus.core.remove_node_return_child.call(null,dom);

cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
* wrapper function for extractors that maps the extraction to
* all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function() {
var extr_multi_node = null;
var extr_multi_node__1 = (function (func){
return extr_multi_node.call(null,func,null);
});
var extr_multi_node__2 = (function (func,filt){
var trans = (function trans(pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result = cljs.core.map.call(null,func,pnod_col);
var result__$1 = (cljs.core.truth_(filt)?cljs.core.filter.call(null,filt,result):result);
if((cljs.core.count.call(null,result__$1) <= (1))){
return cljs.core.first.call(null,result__$1);
} else {
return result__$1;
}
});
if(typeof enfocus.core.t21628 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t21628 = (function (trans,filt,func,extr_multi_node,meta21629){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta21629 = meta21629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t21628.prototype.call = ((function (trans){
return (function() {
var G__21632 = null;
var G__21632__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__21632__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__21632 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__21632__2.call(this,self__,nodes);
case 3:
return G__21632__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21632.cljs$core$IFn$_invoke$arity$2 = G__21632__2;
G__21632.cljs$core$IFn$_invoke$arity$3 = G__21632__3;
return G__21632;
})()
;})(trans))
;

enfocus.core.t21628.prototype.apply = ((function (trans){
return (function (self__,args21631){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21631)));
});})(trans))
;

enfocus.core.t21628.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t21628.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t21628.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t21628.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t21628.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t21628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_21630){
var self__ = this;
var _21630__$1 = this;
return self__.meta21629;
});})(trans))
;

enfocus.core.t21628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_21630,meta21629__$1){
var self__ = this;
var _21630__$1 = this;
return (new enfocus.core.t21628(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta21629__$1));
});})(trans))
;

enfocus.core.t21628.cljs$lang$type = true;

enfocus.core.t21628.cljs$lang$ctorStr = "enfocus.core/t21628";

enfocus.core.t21628.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"enfocus.core/t21628");
});})(trans))
;

enfocus.core.__GT_t21628 = ((function (trans){
return (function __GT_t21628(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta21629){
return (new enfocus.core.t21628(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta21629));
});})(trans))
;

}

return (new enfocus.core.t21628(trans,filt,func,extr_multi_node,cljs.core.PersistentArrayMap.EMPTY));
});
extr_multi_node = function(func,filt){
switch(arguments.length){
case 1:
return extr_multi_node__1.call(this,func);
case 2:
return extr_multi_node__2.call(this,func,filt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
extr_multi_node.cljs$core$IFn$_invoke$arity$1 = extr_multi_node__1;
extr_multi_node.cljs$core$IFn$_invoke$arity$2 = extr_multi_node__2;
return extr_multi_node;
})()
;
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.multi_node_chain = (function() {
var multi_node_chain = null;
var multi_node_chain__1 = (function (func){
var trans = (function (nodes,chain){
var val = func.call(null,nodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t21642 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t21642 = (function (trans,func,multi_node_chain,meta21643){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta21643 = meta21643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t21642.prototype.call = ((function (trans){
return (function() {
var G__21650 = null;
var G__21650__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__21650__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__21650 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__21650__2.call(this,self__,nodes);
case 3:
return G__21650__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21650.cljs$core$IFn$_invoke$arity$2 = G__21650__2;
G__21650.cljs$core$IFn$_invoke$arity$3 = G__21650__3;
return G__21650;
})()
;})(trans))
;

enfocus.core.t21642.prototype.apply = ((function (trans){
return (function (self__,args21645){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21645)));
});})(trans))
;

enfocus.core.t21642.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t21642.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t21642.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t21642.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t21642.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t21642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_21644){
var self__ = this;
var _21644__$1 = this;
return self__.meta21643;
});})(trans))
;

enfocus.core.t21642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_21644,meta21643__$1){
var self__ = this;
var _21644__$1 = this;
return (new enfocus.core.t21642(self__.trans,self__.func,self__.multi_node_chain,meta21643__$1));
});})(trans))
;

enfocus.core.t21642.cljs$lang$type = true;

enfocus.core.t21642.cljs$lang$ctorStr = "enfocus.core/t21642";

enfocus.core.t21642.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"enfocus.core/t21642");
});})(trans))
;

enfocus.core.__GT_t21642 = ((function (trans){
return (function __GT_t21642(trans__$1,func__$1,multi_node_chain__$1,meta21643){
return (new enfocus.core.t21642(trans__$1,func__$1,multi_node_chain__$1,meta21643));
});})(trans))
;

}

return (new enfocus.core.t21642(trans,func,multi_node_chain,cljs.core.PersistentArrayMap.EMPTY));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__21633_SHARP_){
return domina.nodes.call(null,p1__21633_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t21646 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t21646 = (function (trans,func,values,multi_node_chain,meta21647){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta21647 = meta21647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t21646.prototype.call = ((function (trans){
return (function() {
var G__21651 = null;
var G__21651__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__21651__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__21651 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__21651__2.call(this,self__,nodes);
case 3:
return G__21651__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21651.cljs$core$IFn$_invoke$arity$2 = G__21651__2;
G__21651.cljs$core$IFn$_invoke$arity$3 = G__21651__3;
return G__21651;
})()
;})(trans))
;

enfocus.core.t21646.prototype.apply = ((function (trans){
return (function (self__,args21649){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21649)));
});})(trans))
;

enfocus.core.t21646.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t21646.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t21646.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t21646.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t21646.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t21646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_21648){
var self__ = this;
var _21648__$1 = this;
return self__.meta21647;
});})(trans))
;

enfocus.core.t21646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_21648,meta21647__$1){
var self__ = this;
var _21648__$1 = this;
return (new enfocus.core.t21646(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta21647__$1));
});})(trans))
;

enfocus.core.t21646.cljs$lang$type = true;

enfocus.core.t21646.cljs$lang$ctorStr = "enfocus.core/t21646";

enfocus.core.t21646.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"enfocus.core/t21646");
});})(trans))
;

enfocus.core.__GT_t21646 = ((function (trans){
return (function __GT_t21646(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta21647){
return (new enfocus.core.t21646(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta21647));
});})(trans))
;

}

return (new enfocus.core.t21646(trans,func,values,multi_node_chain,cljs.core.PersistentArrayMap.EMPTY));
});
multi_node_chain = function(values,func){
switch(arguments.length){
case 1:
return multi_node_chain__1.call(this,values);
case 2:
return multi_node_chain__2.call(this,values,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_node_chain.cljs$core$IFn$_invoke$arity$1 = multi_node_chain__1;
multi_node_chain.cljs$core$IFn$_invoke$arity$2 = multi_node_chain__2;
return multi_node_chain;
})()
;
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__21652_SHARP_,p2__21653_SHARP_){
domina.destroy_children_BANG_.call(null,p1__21652_SHARP_);

return domina.append_BANG_.call(null,p1__21652_SHARP_,p2__21653_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21654__i = 0, G__21654__a = new Array(arguments.length -  0);
while (G__21654__i < G__21654__a.length) {G__21654__a[G__21654__i] = arguments[G__21654__i + 0]; ++G__21654__i;}
  values = new cljs.core.IndexedSeq(G__21654__a,0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__21655){
var values = cljs.core.seq(arglist__21655);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){
return enfocus.core.multi_node_chain.call(null,(function (p1__21656_SHARP_){
return domina.set_html_BANG_.call(null,p1__21656_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__21657_SHARP_){
var seq__21664 = cljs.core.seq.call(null,pairs);
var chunk__21665 = null;
var count__21666 = (0);
var i__21667 = (0);
while(true){
if((i__21667 < count__21666)){
var vec__21668 = cljs.core._nth.call(null,chunk__21665,i__21667);
var name = cljs.core.nth.call(null,vec__21668,(0),null);
var value = cljs.core.nth.call(null,vec__21668,(1),null);
domina.set_attr_BANG_.call(null,p1__21657_SHARP_,name,value);

var G__21670 = seq__21664;
var G__21671 = chunk__21665;
var G__21672 = count__21666;
var G__21673 = (i__21667 + (1));
seq__21664 = G__21670;
chunk__21665 = G__21671;
count__21666 = G__21672;
i__21667 = G__21673;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21664);
if(temp__4126__auto__){
var seq__21664__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21664__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__21664__$1);
var G__21674 = cljs.core.chunk_rest.call(null,seq__21664__$1);
var G__21675 = c__4651__auto__;
var G__21676 = cljs.core.count.call(null,c__4651__auto__);
var G__21677 = (0);
seq__21664 = G__21674;
chunk__21665 = G__21675;
count__21666 = G__21676;
i__21667 = G__21677;
continue;
} else {
var vec__21669 = cljs.core.first.call(null,seq__21664__$1);
var name = cljs.core.nth.call(null,vec__21669,(0),null);
var value = cljs.core.nth.call(null,vec__21669,(1),null);
domina.set_attr_BANG_.call(null,p1__21657_SHARP_,name,value);

var G__21678 = cljs.core.next.call(null,seq__21664__$1);
var G__21679 = null;
var G__21680 = (0);
var G__21681 = (0);
seq__21664 = G__21678;
chunk__21665 = G__21679;
count__21666 = G__21680;
i__21667 = G__21681;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
};
var set_attr = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21682__i = 0, G__21682__a = new Array(arguments.length -  0);
while (G__21682__i < G__21682__a.length) {G__21682__a[G__21682__i] = arguments[G__21682__i + 0]; ++G__21682__i;}
  values = new cljs.core.IndexedSeq(G__21682__a,0);
} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__21683){
var values = cljs.core.seq(arglist__21683);
return set_attr__delegate(values);
});
set_attr.cljs$core$IFn$_invoke$arity$variadic = set_attr__delegate;
return set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_attr = (function() { 
var remove_attr__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__21684_SHARP_){
var seq__21689 = cljs.core.seq.call(null,values);
var chunk__21690 = null;
var count__21691 = (0);
var i__21692 = (0);
while(true){
if((i__21692 < count__21691)){
var name = cljs.core._nth.call(null,chunk__21690,i__21692);
domina.remove_attr_BANG_.call(null,p1__21684_SHARP_,name);

var G__21693 = seq__21689;
var G__21694 = chunk__21690;
var G__21695 = count__21691;
var G__21696 = (i__21692 + (1));
seq__21689 = G__21693;
chunk__21690 = G__21694;
count__21691 = G__21695;
i__21692 = G__21696;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21689);
if(temp__4126__auto__){
var seq__21689__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21689__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__21689__$1);
var G__21697 = cljs.core.chunk_rest.call(null,seq__21689__$1);
var G__21698 = c__4651__auto__;
var G__21699 = cljs.core.count.call(null,c__4651__auto__);
var G__21700 = (0);
seq__21689 = G__21697;
chunk__21690 = G__21698;
count__21691 = G__21699;
i__21692 = G__21700;
continue;
} else {
var name = cljs.core.first.call(null,seq__21689__$1);
domina.remove_attr_BANG_.call(null,p1__21684_SHARP_,name);

var G__21701 = cljs.core.next.call(null,seq__21689__$1);
var G__21702 = null;
var G__21703 = (0);
var G__21704 = (0);
seq__21689 = G__21701;
chunk__21690 = G__21702;
count__21691 = G__21703;
i__21692 = G__21704;
continue;
}
} else {
return null;
}
}
break;
}
}));
};
var remove_attr = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21705__i = 0, G__21705__a = new Array(arguments.length -  0);
while (G__21705__i < G__21705__a.length) {G__21705__a[G__21705__i] = arguments[G__21705__i + 0]; ++G__21705__i;}
  values = new cljs.core.IndexedSeq(G__21705__a,0);
} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__21706){
var values = cljs.core.seq(arglist__21706);
return remove_attr__delegate(values);
});
remove_attr.cljs$core$IFn$_invoke$arity$variadic = remove_attr__delegate;
return remove_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.set_prop = (function() { 
var set_prop__delegate = function (forms){
return (function (node){
var h = cljs.core.mapcat.call(null,(function (p__21709){
var vec__21710 = p__21709;
var n = cljs.core.nth.call(null,vec__21710,(0),null);
var v = cljs.core.nth.call(null,vec__21710,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,(2),forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;
if (arguments.length > 0) {
var G__21711__i = 0, G__21711__a = new Array(arguments.length -  0);
while (G__21711__i < G__21711__a.length) {G__21711__a[G__21711__i] = arguments[G__21711__i + 0]; ++G__21711__i;}
  forms = new cljs.core.IndexedSeq(G__21711__a,0);
} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__21712){
var forms = cljs.core.seq(arglist__21712);
return set_prop__delegate(forms);
});
set_prop.cljs$core$IFn$_invoke$arity$variadic = set_prop__delegate;
return set_prop;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
return goog.dom.classes.hasClass(el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__21713_SHARP_){
var seq__21718 = cljs.core.seq.call(null,values);
var chunk__21719 = null;
var count__21720 = (0);
var i__21721 = (0);
while(true){
if((i__21721 < count__21720)){
var val = cljs.core._nth.call(null,chunk__21719,i__21721);
domina.add_class_BANG_.call(null,p1__21713_SHARP_,val);

var G__21722 = seq__21718;
var G__21723 = chunk__21719;
var G__21724 = count__21720;
var G__21725 = (i__21721 + (1));
seq__21718 = G__21722;
chunk__21719 = G__21723;
count__21720 = G__21724;
i__21721 = G__21725;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21718);
if(temp__4126__auto__){
var seq__21718__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21718__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__21718__$1);
var G__21726 = cljs.core.chunk_rest.call(null,seq__21718__$1);
var G__21727 = c__4651__auto__;
var G__21728 = cljs.core.count.call(null,c__4651__auto__);
var G__21729 = (0);
seq__21718 = G__21726;
chunk__21719 = G__21727;
count__21720 = G__21728;
i__21721 = G__21729;
continue;
} else {
var val = cljs.core.first.call(null,seq__21718__$1);
domina.add_class_BANG_.call(null,p1__21713_SHARP_,val);

var G__21730 = cljs.core.next.call(null,seq__21718__$1);
var G__21731 = null;
var G__21732 = (0);
var G__21733 = (0);
seq__21718 = G__21730;
chunk__21719 = G__21731;
count__21720 = G__21732;
i__21721 = G__21733;
continue;
}
} else {
return null;
}
}
break;
}
}));
};
var add_class = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21734__i = 0, G__21734__a = new Array(arguments.length -  0);
while (G__21734__i < G__21734__a.length) {G__21734__a[G__21734__i] = arguments[G__21734__i + 0]; ++G__21734__i;}
  values = new cljs.core.IndexedSeq(G__21734__a,0);
} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__21735){
var values = cljs.core.seq(arglist__21735);
return add_class__delegate(values);
});
add_class.cljs$core$IFn$_invoke$arity$variadic = add_class__delegate;
return add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_class = (function() { 
var remove_class__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__21736_SHARP_){
var seq__21741 = cljs.core.seq.call(null,values);
var chunk__21742 = null;
var count__21743 = (0);
var i__21744 = (0);
while(true){
if((i__21744 < count__21743)){
var val = cljs.core._nth.call(null,chunk__21742,i__21744);
domina.remove_class_BANG_.call(null,p1__21736_SHARP_,val);

var G__21745 = seq__21741;
var G__21746 = chunk__21742;
var G__21747 = count__21743;
var G__21748 = (i__21744 + (1));
seq__21741 = G__21745;
chunk__21742 = G__21746;
count__21743 = G__21747;
i__21744 = G__21748;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21741);
if(temp__4126__auto__){
var seq__21741__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21741__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__21741__$1);
var G__21749 = cljs.core.chunk_rest.call(null,seq__21741__$1);
var G__21750 = c__4651__auto__;
var G__21751 = cljs.core.count.call(null,c__4651__auto__);
var G__21752 = (0);
seq__21741 = G__21749;
chunk__21742 = G__21750;
count__21743 = G__21751;
i__21744 = G__21752;
continue;
} else {
var val = cljs.core.first.call(null,seq__21741__$1);
domina.remove_class_BANG_.call(null,p1__21736_SHARP_,val);

var G__21753 = cljs.core.next.call(null,seq__21741__$1);
var G__21754 = null;
var G__21755 = (0);
var G__21756 = (0);
seq__21741 = G__21753;
chunk__21742 = G__21754;
count__21743 = G__21755;
i__21744 = G__21756;
continue;
}
} else {
return null;
}
}
break;
}
}));
};
var remove_class = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21757__i = 0, G__21757__a = new Array(arguments.length -  0);
while (G__21757__i < G__21757__a.length) {G__21757__a[G__21757__i] = arguments[G__21757__i + 0]; ++G__21757__i;}
  values = new cljs.core.IndexedSeq(G__21757__a,0);
} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__21758){
var values = cljs.core.seq(arglist__21758);
return remove_class__delegate(values);
});
remove_class.cljs$core$IFn$_invoke$arity$variadic = remove_class__delegate;
return remove_class;
})()
;
/**
* Sets the specified classes on the selected element
* @param {...*} var_args
*/
enfocus.core.set_class = (function() { 
var set_class__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__21759_SHARP_){
return domina.set_classes_BANG_.call(null,p1__21759_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21760__i = 0, G__21760__a = new Array(arguments.length -  0);
while (G__21760__i < G__21760__a.length) {G__21760__a[G__21760__i] = arguments[G__21760__i + 0]; ++G__21760__i;}
  values = new cljs.core.IndexedSeq(G__21760__a,0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__21761){
var values = cljs.core.seq(arglist__21761);
return set_class__delegate(values);
});
set_class.cljs$core$IFn$_invoke$arity$variadic = set_class__delegate;
return set_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.do__GT_ = (function() { 
var do__GT___delegate = function (forms){

return (function (pnod){
var seq__21766 = cljs.core.seq.call(null,forms);
var chunk__21767 = null;
var count__21768 = (0);
var i__21769 = (0);
while(true){
if((i__21769 < count__21768)){
var fun = cljs.core._nth.call(null,chunk__21767,i__21769);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__21770 = seq__21766;
var G__21771 = chunk__21767;
var G__21772 = count__21768;
var G__21773 = (i__21769 + (1));
seq__21766 = G__21770;
chunk__21767 = G__21771;
count__21768 = G__21772;
i__21769 = G__21773;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21766);
if(temp__4126__auto__){
var seq__21766__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21766__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__21766__$1);
var G__21774 = cljs.core.chunk_rest.call(null,seq__21766__$1);
var G__21775 = c__4651__auto__;
var G__21776 = cljs.core.count.call(null,c__4651__auto__);
var G__21777 = (0);
seq__21766 = G__21774;
chunk__21767 = G__21775;
count__21768 = G__21776;
i__21769 = G__21777;
continue;
} else {
var fun = cljs.core.first.call(null,seq__21766__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__21778 = cljs.core.next.call(null,seq__21766__$1);
var G__21779 = null;
var G__21780 = (0);
var G__21781 = (0);
seq__21766 = G__21778;
chunk__21767 = G__21779;
count__21768 = G__21780;
i__21769 = G__21781;
continue;
}
} else {
return null;
}
}
break;
}
});
};
var do__GT_ = function (var_args){
var forms = null;
if (arguments.length > 0) {
var G__21782__i = 0, G__21782__a = new Array(arguments.length -  0);
while (G__21782__i < G__21782__a.length) {G__21782__a[G__21782__i] = arguments[G__21782__i + 0]; ++G__21782__i;}
  forms = new cljs.core.IndexedSeq(G__21782__a,0);
} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__21783){
var forms = cljs.core.seq(arglist__21783);
return do__GT___delegate(forms);
});
do__GT_.cljs$core$IFn$_invoke$arity$variadic = do__GT___delegate;
return do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.append = (function() { 
var append__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__21784_SHARP_,p2__21785_SHARP_){
return domina.append_BANG_.call(null,p1__21784_SHARP_,p2__21785_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21786__i = 0, G__21786__a = new Array(arguments.length -  0);
while (G__21786__i < G__21786__a.length) {G__21786__a[G__21786__i] = arguments[G__21786__i + 0]; ++G__21786__i;}
  values = new cljs.core.IndexedSeq(G__21786__a,0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__21787){
var values = cljs.core.seq(arglist__21787);
return append__delegate(values);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.prepend = (function() { 
var prepend__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__21788_SHARP_,p2__21789_SHARP_){
return domina.prepend_BANG_.call(null,p1__21788_SHARP_,p2__21789_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21790__i = 0, G__21790__a = new Array(arguments.length -  0);
while (G__21790__i < G__21790__a.length) {G__21790__a[G__21790__i] = arguments[G__21790__i + 0]; ++G__21790__i;}
  values = new cljs.core.IndexedSeq(G__21790__a,0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__21791){
var values = cljs.core.seq(arglist__21791);
return prepend__delegate(values);
});
prepend.cljs$core$IFn$_invoke$arity$variadic = prepend__delegate;
return prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.before = (function() { 
var before__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__21792_SHARP_,p2__21793_SHARP_){
return domina.insert_before_BANG_.call(null,p1__21792_SHARP_,p2__21793_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21794__i = 0, G__21794__a = new Array(arguments.length -  0);
while (G__21794__i < G__21794__a.length) {G__21794__a[G__21794__i] = arguments[G__21794__i + 0]; ++G__21794__i;}
  values = new cljs.core.IndexedSeq(G__21794__a,0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__21795){
var values = cljs.core.seq(arglist__21795);
return before__delegate(values);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.after = (function() { 
var after__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__21796_SHARP_,p2__21797_SHARP_){
return domina.insert_after_BANG_.call(null,p1__21796_SHARP_,p2__21797_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21798__i = 0, G__21798__a = new Array(arguments.length -  0);
while (G__21798__i < G__21798__a.length) {G__21798__a[G__21798__i] = arguments[G__21798__i + 0]; ++G__21798__i;}
  values = new cljs.core.IndexedSeq(G__21798__a,0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__21799){
var values = cljs.core.seq(arglist__21799);
return after__delegate(values);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.substitute = (function() { 
var substitute__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__21800_SHARP_,p2__21801_SHARP_){
return domina.swap_content_BANG_.call(null,p1__21800_SHARP_,p2__21801_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21802__i = 0, G__21802__a = new Array(arguments.length -  0);
while (G__21802__i < G__21802__a.length) {G__21802__a[G__21802__i] = arguments[G__21802__i + 0]; ++G__21802__i;}
  values = new cljs.core.IndexedSeq(G__21802__a,0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__21803){
var values = cljs.core.seq(arglist__21803);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){
return enfocus.core.multi_node_chain.call(null,(function (p1__21804_SHARP_){
return domina.detach_BANG_.call(null,p1__21804_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){
return (function (pnod){
var elem = goog.dom.createElement(cljs.core.name.call(null,elm));
enfocus.core.add_map_attrs.call(null,elem,mattr);

enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));

return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
});
});
/**
* replaces a node with all its children
*/
enfocus.core.unwrap = (function unwrap(){
return (function (pnod){
var frag = document.createDocumentFragment();
goog.dom.append(frag,pnod.childNodes);

return goog.dom.replaceNode(frag,pnod);
});
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.set_style = (function() { 
var set_style__delegate = function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__21805_SHARP_){
var seq__21812 = cljs.core.seq.call(null,pairs);
var chunk__21813 = null;
var count__21814 = (0);
var i__21815 = (0);
while(true){
if((i__21815 < count__21814)){
var vec__21816 = cljs.core._nth.call(null,chunk__21813,i__21815);
var name = cljs.core.nth.call(null,vec__21816,(0),null);
var value = cljs.core.nth.call(null,vec__21816,(1),null);
domina.set_style_BANG_.call(null,p1__21805_SHARP_,name,value);

var G__21818 = seq__21812;
var G__21819 = chunk__21813;
var G__21820 = count__21814;
var G__21821 = (i__21815 + (1));
seq__21812 = G__21818;
chunk__21813 = G__21819;
count__21814 = G__21820;
i__21815 = G__21821;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21812);
if(temp__4126__auto__){
var seq__21812__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21812__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__21812__$1);
var G__21822 = cljs.core.chunk_rest.call(null,seq__21812__$1);
var G__21823 = c__4651__auto__;
var G__21824 = cljs.core.count.call(null,c__4651__auto__);
var G__21825 = (0);
seq__21812 = G__21822;
chunk__21813 = G__21823;
count__21814 = G__21824;
i__21815 = G__21825;
continue;
} else {
var vec__21817 = cljs.core.first.call(null,seq__21812__$1);
var name = cljs.core.nth.call(null,vec__21817,(0),null);
var value = cljs.core.nth.call(null,vec__21817,(1),null);
domina.set_style_BANG_.call(null,p1__21805_SHARP_,name,value);

var G__21826 = cljs.core.next.call(null,seq__21812__$1);
var G__21827 = null;
var G__21828 = (0);
var G__21829 = (0);
seq__21812 = G__21826;
chunk__21813 = G__21827;
count__21814 = G__21828;
i__21815 = G__21829;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
};
var set_style = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21830__i = 0, G__21830__a = new Array(arguments.length -  0);
while (G__21830__i < G__21830__a.length) {G__21830__a[G__21830__i] = arguments[G__21830__i + 0]; ++G__21830__i;}
  values = new cljs.core.IndexedSeq(G__21830__a,0);
} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__21831){
var values = cljs.core.seq(arglist__21831);
return set_style__delegate(values);
});
set_style.cljs$core$IFn$_invoke$arity$variadic = set_style__delegate;
return set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.remove_style = (function() { 
var remove_style__delegate = function (values){
return (function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
});
};
var remove_style = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21832__i = 0, G__21832__a = new Array(arguments.length -  0);
while (G__21832__i < G__21832__a.length) {G__21832__a[G__21832__i] = arguments[G__21832__i + 0]; ++G__21832__i;}
  values = new cljs.core.IndexedSeq(G__21832__a,0);
} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__21833){
var values = cljs.core.seq(arglist__21833);
return remove_style__delegate(values);
});
remove_style.cljs$core$IFn$_invoke$arity$variadic = remove_style__delegate;
return remove_style;
})()
;
/**
* calls the focus function on the selected node
*/
enfocus.core.focus = (function focus(){
return (function (node){
return node.focus();
});
});
/**
* calls the blur function on the selected node
*/
enfocus.core.blur = (function blur(){
return (function (node){
return node.blur();
});
});
/**
* addes key value pair of data to the selected nodes. Only use clojure data structures when setting
*/
enfocus.core.set_data = (function set_data(ky,val){
return enfocus.core.multi_node_chain.call(null,(function (p1__21834_SHARP_){
return domina.set_data_BANG_.call(null,p1__21834_SHARP_,ky,val);
}));
});
/**
* delays and action by a set timeout, note this is an async operations
* @param {...*} var_args
*/
enfocus.core.delay = (function() { 
var delay__delegate = function (ttime,funcs){
return (function (pnod){
return enfocus.core.setTimeout.call(null,(function (){
return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
};
var delay = function (ttime,var_args){
var funcs = null;
if (arguments.length > 1) {
var G__21835__i = 0, G__21835__a = new Array(arguments.length -  1);
while (G__21835__i < G__21835__a.length) {G__21835__a[G__21835__i] = arguments[G__21835__i + 1]; ++G__21835__i;}
  funcs = new cljs.core.IndexedSeq(G__21835__a,0);
} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__21836){
var ttime = cljs.core.first(arglist__21836);
var funcs = cljs.core.rest(arglist__21836);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){
var rep_str = (function rep_str(text){
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__21838_SHARP_,p2__21837_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__21837_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__21863_21871 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__21864_21872 = null;
var count__21865_21873 = (0);
var i__21866_21874 = (0);
while(true){
if((i__21866_21874 < count__21865_21873)){
var idx_21875 = cljs.core._nth.call(null,chunk__21864_21872,i__21866_21874);
var attr_21876 = pnod.attributes.item(idx_21875);
if(cljs.core.truth_(attr_21876.specified)){
attr_21876.value = rep_str.call(null,attr_21876.value);
} else {
}

var G__21877 = seq__21863_21871;
var G__21878 = chunk__21864_21872;
var G__21879 = count__21865_21873;
var G__21880 = (i__21866_21874 + (1));
seq__21863_21871 = G__21877;
chunk__21864_21872 = G__21878;
count__21865_21873 = G__21879;
i__21866_21874 = G__21880;
continue;
} else {
var temp__4126__auto___21881 = cljs.core.seq.call(null,seq__21863_21871);
if(temp__4126__auto___21881){
var seq__21863_21882__$1 = temp__4126__auto___21881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21863_21882__$1)){
var c__4651__auto___21883 = cljs.core.chunk_first.call(null,seq__21863_21882__$1);
var G__21884 = cljs.core.chunk_rest.call(null,seq__21863_21882__$1);
var G__21885 = c__4651__auto___21883;
var G__21886 = cljs.core.count.call(null,c__4651__auto___21883);
var G__21887 = (0);
seq__21863_21871 = G__21884;
chunk__21864_21872 = G__21885;
count__21865_21873 = G__21886;
i__21866_21874 = G__21887;
continue;
} else {
var idx_21888 = cljs.core.first.call(null,seq__21863_21882__$1);
var attr_21889 = pnod.attributes.item(idx_21888);
if(cljs.core.truth_(attr_21889.specified)){
attr_21889.value = rep_str.call(null,attr_21889.value);
} else {
}

var G__21890 = cljs.core.next.call(null,seq__21863_21882__$1);
var G__21891 = null;
var G__21892 = (0);
var G__21893 = (0);
seq__21863_21871 = G__21890;
chunk__21864_21872 = G__21891;
count__21865_21873 = G__21892;
i__21866_21874 = G__21893;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core._EQ_.call(null,pnod.nodeType,(3))){
return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else {
var seq__21867 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__21868 = null;
var count__21869 = (0);
var i__21870 = (0);
while(true){
if((i__21870 < count__21869)){
var cnode = cljs.core._nth.call(null,chunk__21868,i__21870);
rep_node.call(null,cnode);

var G__21894 = seq__21867;
var G__21895 = chunk__21868;
var G__21896 = count__21869;
var G__21897 = (i__21870 + (1));
seq__21867 = G__21894;
chunk__21868 = G__21895;
count__21869 = G__21896;
i__21870 = G__21897;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21867);
if(temp__4126__auto__){
var seq__21867__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21867__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__21867__$1);
var G__21898 = cljs.core.chunk_rest.call(null,seq__21867__$1);
var G__21899 = c__4651__auto__;
var G__21900 = cljs.core.count.call(null,c__4651__auto__);
var G__21901 = (0);
seq__21867 = G__21898;
chunk__21868 = G__21899;
count__21869 = G__21900;
i__21870 = G__21901;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__21867__$1);
rep_node.call(null,cnode);

var G__21902 = cljs.core.next.call(null,seq__21867__$1);
var G__21903 = null;
var G__21904 = (0);
var G__21905 = (0);
seq__21867 = G__21902;
chunk__21868 = G__21903;
count__21869 = G__21904;
i__21870 = G__21905;
continue;
}
} else {
return null;
}
}
break;
}
}
});
});
enfocus.core.exists_in_QMARK_ = (function exists_in_QMARK_(col_or_val,val){
if(cljs.core.coll_QMARK_.call(null,col_or_val)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([val], true),col_or_val);
} else {
return cljs.core._EQ_.call(null,col_or_val,val);
}
});
/**
* sets the value of a form input (text,select,checkbox,etc...)
* format (at node (set-form-input value))
*/
enfocus.core.set_form_input = (function set_form_input(val){
return (function (el){
if((cljs.core._EQ_.call(null,el.type,"checkbox")) || (cljs.core._EQ_.call(null,el.type,"radio"))){
return el.checked = enfocus.core.exists_in_QMARK_.call(null,val,el.value);
} else {
var nval = (((cljs.core.coll_QMARK_.call(null,val)) && (!(typeof val === 'string')))?cljs.core.vec.call(null,val):((cljs.core._EQ_.call(null,el.type,"select-multiple"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null):val));
return goog.dom.forms.setValue(el,cljs.core.clj__GT_js.call(null,nval));
}
});
});
/**
* sets the values of a form based on a map
* (set-form {:val1 'val' :val2 'val'})
*/
enfocus.core.set_form = (function set_form(value_map){
return (function (form_node){
if(cljs.core._EQ_.call(null,form_node.nodeName,"FORM")){
var seq__21910 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__21911 = null;
var count__21912 = (0);
var i__21913 = (0);
while(true){
if((i__21913 < count__21912)){
var idx = cljs.core._nth.call(null,chunk__21911,i__21913);
var el_21914 = (form_node.elements[idx]);
var ky_21915 = cljs.core.keyword.call(null,el_21914.name);
var val_21916 = ky_21915.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_21915)){
var val_21917__$1 = (cljs.core.truth_(val_21916)?val_21916:"");
enfocus.core.set_form_input.call(null,val_21917__$1).call(null,el_21914);
} else {
}

var G__21918 = seq__21910;
var G__21919 = chunk__21911;
var G__21920 = count__21912;
var G__21921 = (i__21913 + (1));
seq__21910 = G__21918;
chunk__21911 = G__21919;
count__21912 = G__21920;
i__21913 = G__21921;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21910);
if(temp__4126__auto__){
var seq__21910__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21910__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__21910__$1);
var G__21922 = cljs.core.chunk_rest.call(null,seq__21910__$1);
var G__21923 = c__4651__auto__;
var G__21924 = cljs.core.count.call(null,c__4651__auto__);
var G__21925 = (0);
seq__21910 = G__21922;
chunk__21911 = G__21923;
count__21912 = G__21924;
i__21913 = G__21925;
continue;
} else {
var idx = cljs.core.first.call(null,seq__21910__$1);
var el_21926 = (form_node.elements[idx]);
var ky_21927 = cljs.core.keyword.call(null,el_21926.name);
var val_21928 = ky_21927.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_21927)){
var val_21929__$1 = (cljs.core.truth_(val_21928)?val_21928:"");
enfocus.core.set_form_input.call(null,val_21929__$1).call(null,el_21926);
} else {
}

var G__21930 = cljs.core.next.call(null,seq__21910__$1);
var G__21931 = null;
var G__21932 = (0);
var G__21933 = (0);
seq__21910 = G__21930;
chunk__21911 = G__21931;
count__21912 = G__21932;
i__21913 = G__21933;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
});
/**
* takes clojure data structure and emits a document element
*/
enfocus.core.html = (function html(node_spec){
if(typeof node_spec === 'string'){
return document.createTextNode(node_spec);
} else {
if(cljs.core.vector_QMARK_.call(null,node_spec)){
var vec__21943 = node_spec;
var tag = cljs.core.nth.call(null,vec__21943,(0),null);
var vec__21944 = cljs.core.nthnext.call(null,vec__21943,(1));
var m = cljs.core.nth.call(null,vec__21944,(0),null);
var ms = cljs.core.nthnext.call(null,vec__21944,(1));
var more = vec__21944;
var vec__21945 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__21945,(0),null);
var segments = cljs.core.nthnext.call(null,vec__21945,(1));
var id = cljs.core.some.call(null,((function (vec__21943,tag,vec__21944,m,ms,more,vec__21945,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__21943,tag,vec__21944,m,ms,more,vec__21945,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__21943,tag,vec__21944,m,ms,more,vec__21945,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__21943,tag,vec__21944,m,ms,more,vec__21945,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__21946_21952 = cljs.core.seq.call(null,attrs__$2);
var chunk__21947_21953 = null;
var count__21948_21954 = (0);
var i__21949_21955 = (0);
while(true){
if((i__21949_21955 < count__21948_21954)){
var vec__21950_21956 = cljs.core._nth.call(null,chunk__21947_21953,i__21949_21955);
var key_21957 = cljs.core.nth.call(null,vec__21950_21956,(0),null);
var val_21958 = cljs.core.nth.call(null,vec__21950_21956,(1),null);
node.setAttribute(cljs.core.name.call(null,key_21957),val_21958);

var G__21959 = seq__21946_21952;
var G__21960 = chunk__21947_21953;
var G__21961 = count__21948_21954;
var G__21962 = (i__21949_21955 + (1));
seq__21946_21952 = G__21959;
chunk__21947_21953 = G__21960;
count__21948_21954 = G__21961;
i__21949_21955 = G__21962;
continue;
} else {
var temp__4126__auto___21963 = cljs.core.seq.call(null,seq__21946_21952);
if(temp__4126__auto___21963){
var seq__21946_21964__$1 = temp__4126__auto___21963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21946_21964__$1)){
var c__4651__auto___21965 = cljs.core.chunk_first.call(null,seq__21946_21964__$1);
var G__21966 = cljs.core.chunk_rest.call(null,seq__21946_21964__$1);
var G__21967 = c__4651__auto___21965;
var G__21968 = cljs.core.count.call(null,c__4651__auto___21965);
var G__21969 = (0);
seq__21946_21952 = G__21966;
chunk__21947_21953 = G__21967;
count__21948_21954 = G__21968;
i__21949_21955 = G__21969;
continue;
} else {
var vec__21951_21970 = cljs.core.first.call(null,seq__21946_21964__$1);
var key_21971 = cljs.core.nth.call(null,vec__21951_21970,(0),null);
var val_21972 = cljs.core.nth.call(null,vec__21951_21970,(1),null);
node.setAttribute(cljs.core.name.call(null,key_21971),val_21972);

var G__21973 = cljs.core.next.call(null,seq__21946_21964__$1);
var G__21974 = null;
var G__21975 = (0);
var G__21976 = (0);
seq__21946_21952 = G__21973;
chunk__21947_21953 = G__21974;
count__21948_21954 = G__21975;
i__21949_21955 = G__21976;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(content)){
return domina.append_BANG_.call(null,node,content);
} else {
return null;
}
} else {
if(cljs.core.sequential_QMARK_.call(null,node_spec)){
return cljs.core.flatten.call(null,cljs.core.map.call(null,html,node_spec));
} else {
return document.createTextNode([cljs.core.str(node_spec)].join(''));

}
}
}
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_attr = (function get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the text value of the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_text = (function get_text(){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.get_data = (function() {
var get_data = null;
var get_data__1 = (function (ky){
return get_data.call(null,ky,false);
});
var get_data__2 = (function (ky,bubble){
return enfocus.core.extr_multi_node.call(null,(function (node){
return domina.get_data.call(null,node,ky,bubble);
}));
});
get_data = function(ky,bubble){
switch(arguments.length){
case 1:
return get_data__1.call(this,ky);
case 2:
return get_data__2.call(this,ky,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$1 = get_data__1;
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
return get_data;
})()
;
/**
* returns the property on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_prop = (function get_prop(prop){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
* this function takes a map, key and value.  It will check if
* the value exists and create a seq of values if one exits.
*/
enfocus.core.merge_form_val = (function merge_form_val(form_map,ky,val){
var mval = form_map.call(null,ky);
if(cljs.core.truth_(val)){
if((cljs.core.coll_QMARK_.call(null,mval)) && (cljs.core.coll_QMARK_.call(null,val))){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.into.call(null,mval,val));
} else {
if(cljs.core.coll_QMARK_.call(null,mval)){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else {
if(cljs.core.truth_(mval)){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.PersistentHashSet.fromArray([mval,val], true));
} else {
return cljs.core.assoc.call(null,form_map,ky,val);

}
}
}
} else {
return form_map;
}
});
/**
* returns the value of a given form input (text,select,checkbox,etc...)    If more than  one value exists it will return a set of values.
*/
enfocus.core.read_form_input = (function read_form_input(){
var trans = (function (nodes,chain){
var nod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var result = cljs.core.reduce.call(null,((function (nod_col){
return (function (p1__21978_SHARP_,p2__21977_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__21977_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__21978_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__21978_SHARP_,vals);
} else {
return p1__21978_SHARP_;
}
}
});})(nod_col))
,cljs.core.PersistentHashSet.EMPTY,nod_col);
if(cljs.core.empty_QMARK_.call(null,result)){
return null;
} else {
if((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,result))) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["checkbox",null,"select-multiple",null], null), null).call(null,cljs.core.first.call(null,nod_col).type)))){
return cljs.core.first.call(null,result);
} else {
return result;

}
}
});
if(typeof enfocus.core.t21983 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t21983 = (function (trans,read_form_input,meta21984){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta21984 = meta21984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t21983.prototype.call = ((function (trans){
return (function() {
var G__21987 = null;
var G__21987__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__21987__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__21987 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__21987__2.call(this,self__,nodes);
case 3:
return G__21987__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21987.cljs$core$IFn$_invoke$arity$2 = G__21987__2;
G__21987.cljs$core$IFn$_invoke$arity$3 = G__21987__3;
return G__21987;
})()
;})(trans))
;

enfocus.core.t21983.prototype.apply = ((function (trans){
return (function (self__,args21986){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21986)));
});})(trans))
;

enfocus.core.t21983.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t21983.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t21983.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t21983.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t21983.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t21983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_21985){
var self__ = this;
var _21985__$1 = this;
return self__.meta21984;
});})(trans))
;

enfocus.core.t21983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_21985,meta21984__$1){
var self__ = this;
var _21985__$1 = this;
return (new enfocus.core.t21983(self__.trans,self__.read_form_input,meta21984__$1));
});})(trans))
;

enfocus.core.t21983.cljs$lang$type = true;

enfocus.core.t21983.cljs$lang$ctorStr = "enfocus.core/t21983";

enfocus.core.t21983.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"enfocus.core/t21983");
});})(trans))
;

enfocus.core.__GT_t21983 = ((function (trans){
return (function __GT_t21983(trans__$1,read_form_input__$1,meta21984){
return (new enfocus.core.t21983(trans__$1,read_form_input__$1,meta21984));
});})(trans))
;

}

return (new enfocus.core.t21983(trans,read_form_input,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__21989_SHARP_,p2__21988_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__21988_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__21989_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__21988_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__21988_SHARP_)));
} else {
return p1__21989_SHARP_;
}
});})(inputs))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,inputs.length));
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.filter = (function filter(tst,trans){
return enfocus.core.multi_node_chain.call(null,(function() {
var filt = null;
var filt__1 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__2 = (function (pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res = cljs.core.filter.call(null,ttest,pnod_col);
if((chain == null)){
return enfocus.core.apply_transform.call(null,trans,res);
} else {
return enfocus.core.apply_transform.call(null,trans,res,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filt.cljs$core$IFn$_invoke$arity$1 = filt__1;
filt.cljs$core$IFn$_invoke$arity$2 = filt__2;
return filt;
})()
);
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){
return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){
return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819),enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function match_QMARK_(selector){
return (function (node){
if(cljs.core.truth_((node["matches"]))){
return node.matches(selector);
} else {
if(cljs.core.truth_((node["matchesSelector"]))){
return node.matchesSelector(selector);
} else {
if(cljs.core.truth_((node["msMatchesSelector"]))){
return node.msMatchesSelector(selector);
} else {
if(cljs.core.truth_((node["mozMatchesSelector"]))){
return node.mozMatchesSelector(selector);
} else {
if(cljs.core.truth_((node["webkitMatchesSelector"]))){
return node.webkitMatchesSelector(selector);
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));

}
}
}
}
}
});
});
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__21990_SHARP_){
if((p1__21990_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__21990_SHARP_);
} else {
if((p1__21990_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__21990_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__21990_SHARP_)){
return create_sel_str.call(null,p1__21990_SHARP_);
} else {
if(typeof p1__21990_SHARP_ === 'string'){
return p1__21990_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else {
return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_sel_str.cljs$core$IFn$_invoke$arity$1 = create_sel_str__1;
create_sel_str.cljs$core$IFn$_invoke$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){
var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));
var ret = domina.css.sel.call(null,dom_node,sel);
return ret;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
css_select.cljs$core$IFn$_invoke$arity$1 = css_select__1;
css_select.cljs$core$IFn$_invoke$arity$2 = css_select__2;
css_select.cljs$core$IFn$_invoke$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.nil_t = (function nil_t(func){
var or__3864__auto__ = func;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){
var cnt = cljs.core.count.call(null,trans);
var sel_QMARK_ = (function (){var and__3852__auto__ = !((node == null));
if(and__3852__auto__){
var G__22001 = node;
if(G__22001){
var bit__4545__auto__ = null;
if(cljs.core.truth_((function (){var or__3864__auto__ = bit__4545__auto__;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return G__22001.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__22001.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__22001);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__22001);
}
} else {
return and__3852__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__22002 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__22002,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__22002,(1),null);
var seq__22003 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__22004 = null;
var count__22005 = (0);
var i__22006 = (0);
while(true){
if((i__22006 < count__22005)){
var vec__22007 = cljs.core._nth.call(null,chunk__22004,i__22006);
var sel = cljs.core.nth.call(null,vec__22007,(0),null);
var t = cljs.core.nth.call(null,vec__22007,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__22009 = seq__22003;
var G__22010 = chunk__22004;
var G__22011 = count__22005;
var G__22012 = (i__22006 + (1));
seq__22003 = G__22009;
chunk__22004 = G__22010;
count__22005 = G__22011;
i__22006 = G__22012;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22003);
if(temp__4126__auto__){
var seq__22003__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22003__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__22003__$1);
var G__22013 = cljs.core.chunk_rest.call(null,seq__22003__$1);
var G__22014 = c__4651__auto__;
var G__22015 = cljs.core.count.call(null,c__4651__auto__);
var G__22016 = (0);
seq__22003 = G__22013;
chunk__22004 = G__22014;
count__22005 = G__22015;
i__22006 = G__22016;
continue;
} else {
var vec__22008 = cljs.core.first.call(null,seq__22003__$1);
var sel = cljs.core.nth.call(null,vec__22008,(0),null);
var t = cljs.core.nth.call(null,vec__22008,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__22017 = cljs.core.next.call(null,seq__22003__$1);
var G__22018 = null;
var G__22019 = (0);
var G__22020 = (0);
seq__22003 = G__22017;
chunk__22004 = G__22018;
count__22005 = G__22019;
i__22006 = G__22020;
continue;
}
} else {
return null;
}
}
break;
}
}
};
var i_at = function (id_mask,node,var_args){
var trans = null;
if (arguments.length > 2) {
var G__22021__i = 0, G__22021__a = new Array(arguments.length -  2);
while (G__22021__i < G__22021__a.length) {G__22021__a[G__22021__i] = arguments[G__22021__i + 2]; ++G__22021__i;}
  trans = new cljs.core.IndexedSeq(G__22021__a,0);
} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__22022){
var id_mask = cljs.core.first(arglist__22022);
arglist__22022 = cljs.core.next(arglist__22022);
var node = cljs.core.first(arglist__22022);
var trans = cljs.core.rest(arglist__22022);
return i_at__delegate(id_mask,node,trans);
});
i_at.cljs$core$IFn$_invoke$arity$variadic = i_at__delegate;
return i_at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.at = (function() { 
var at__delegate = function (node,trans){
return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
var G__22023__i = 0, G__22023__a = new Array(arguments.length -  1);
while (G__22023__i < G__22023__a.length) {G__22023__a[G__22023__i] = arguments[G__22023__i + 1]; ++G__22023__i;}
  trans = new cljs.core.IndexedSeq(G__22023__a,0);
} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__22024){
var node = cljs.core.first(arglist__22024);
var trans = cljs.core.rest(arglist__22024);
return at__delegate(node,trans);
});
at.cljs$core$IFn$_invoke$arity$variadic = at__delegate;
return at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.from = (function() { 
var from__delegate = function (node,trans){
var cnt = cljs.core.count.call(null,trans);
var sel_QMARK_ = (function (){var G__22029 = node;
if(G__22029){
var bit__4545__auto__ = null;
if(cljs.core.truth_((function (){var or__3864__auto__ = bit__4545__auto__;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return G__22029.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__22029.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__22029);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__22029);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__22030 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__22030,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__22030,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__22030,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__22031){
var vec__22032 = p__22031;
var ky = cljs.core.nth.call(null,vec__22032,(0),null);
var sel = cljs.core.nth.call(null,vec__22032,(1),null);
var ext = cljs.core.nth.call(null,vec__22032,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__22030,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.partition.call(null,(3),trans__$1)));

}
}
};
var from = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
var G__22033__i = 0, G__22033__a = new Array(arguments.length -  1);
while (G__22033__i < G__22033__a.length) {G__22033__a[G__22033__i] = arguments[G__22033__i + 1]; ++G__22033__i;}
  trans = new cljs.core.IndexedSeq(G__22033__a,0);
} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__22034){
var node = cljs.core.first(arglist__22034);
var trans = cljs.core.rest(arglist__22034);
return from__delegate(node,trans);
});
from.cljs$core$IFn$_invoke$arity$variadic = from__delegate;
return from;
})()
;
enfocus.core.xpath = (function xpath(path){
return (function (root,id_mask){
if(cljs.core.empty_QMARK_.call(null,id_mask)){
return domina.xpath.xpath.call(null,root,path);
} else {
var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));
var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));
return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function this_node(root,id_mask){
return root;
});
if(cljs.core.truth_((typeof Text != 'undefined'))){
Text.prototype.domina$DomContent$ = true;

Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){
var content__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});

Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){
var content__$1 = this;
return content__$1;
});
} else {
}
(enfocus.core.ISelector["null"] = true);

(enfocus.core.select["null"] = (function() {
var G__22035 = null;
var G__22035__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__22035__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__22035__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__22035 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__22035__1.call(this,this$);
case 2:
return G__22035__2.call(this,this$,root);
case 3:
return G__22035__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22035.cljs$core$IFn$_invoke$arity$1 = G__22035__1;
G__22035.cljs$core$IFn$_invoke$arity$2 = G__22035__2;
G__22035.cljs$core$IFn$_invoke$arity$3 = G__22035__3;
return G__22035;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__22036 = null;
var G__22036__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__22036__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__22036__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__22036 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__22036__1.call(this,this$);
case 2:
return G__22036__2.call(this,this$,root);
case 3:
return G__22036__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22036.cljs$core$IFn$_invoke$arity$1 = G__22036__1;
G__22036.cljs$core$IFn$_invoke$arity$2 = G__22036__2;
G__22036.cljs$core$IFn$_invoke$arity$3 = G__22036__3;
return G__22036;
})()
);

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,document,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,root,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){
var this$__$1 = this;
return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});

(enfocus.core.ISelector["function"] = true);

(enfocus.core.select["function"] = (function() {
var G__22037 = null;
var G__22037__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__22037__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__22037__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__22037 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__22037__1.call(this,this$);
case 2:
return G__22037__2.call(this,this$,root);
case 3:
return G__22037__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22037.cljs$core$IFn$_invoke$arity$1 = G__22037__1;
G__22037.cljs$core$IFn$_invoke$arity$2 = G__22037__2;
G__22037.cljs$core$IFn$_invoke$arity$3 = G__22037__3;
return G__22037;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__22038 = null;
var G__22038__2 = (function (trans,nodes){
return nodes;
});
var G__22038__3 = (function (trans,nodes,chain){
return nodes;
});
G__22038 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__22038__2.call(this,trans,nodes);
case 3:
return G__22038__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22038.cljs$core$IFn$_invoke$arity$2 = G__22038__2;
G__22038.cljs$core$IFn$_invoke$arity$3 = G__22038__3;
return G__22038;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__22039 = null;
var G__22039__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__22039__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__22039 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__22039__2.call(this,trans,nodes);
case 3:
return G__22039__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22039.cljs$core$IFn$_invoke$arity$2 = G__22039__2;
G__22039.cljs$core$IFn$_invoke$arity$3 = G__22039__3;
return G__22039;
})()
);

//# sourceMappingURL=core.js.map?rel=1435268444997