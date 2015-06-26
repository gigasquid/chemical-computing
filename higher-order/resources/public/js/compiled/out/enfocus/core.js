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







enfocus.core.ISelector = (function (){var obj33227 = {};
return obj33227;
})();

enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){
if((function (){var and__16133__auto__ = this$;
if(and__16133__auto__){
return this$.enfocus$core$ISelector$select$arity$1;
} else {
return and__16133__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$1(this$);
} else {
var x__16789__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16145__auto__ = (enfocus.core.select[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (enfocus.core.select["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){
if((function (){var and__16133__auto__ = this$;
if(and__16133__auto__){
return this$.enfocus$core$ISelector$select$arity$2;
} else {
return and__16133__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else {
var x__16789__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16145__auto__ = (enfocus.core.select[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (enfocus.core.select["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){
if((function (){var and__16133__auto__ = this$;
if(and__16133__auto__){
return this$.enfocus$core$ISelector$select$arity$3;
} else {
return and__16133__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else {
var x__16789__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16145__auto__ = (enfocus.core.select[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (enfocus.core.select["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
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


enfocus.core.ITransform = (function (){var obj33229 = {};
return obj33229;
})();

enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){
if((function (){var and__16133__auto__ = this$;
if(and__16133__auto__){
return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else {
return and__16133__auto__;
}
})()){
return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else {
var x__16789__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16145__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){
if((function (){var and__16133__auto__ = this$;
if(and__16133__auto__){
return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else {
return and__16133__auto__;
}
})()){
return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else {
var x__16789__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16145__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
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
if(cljs.core.truth_((function (){var and__16133__auto__ = enfocus.core.debug;
if(cljs.core.truth_(and__16133__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__16133__auto__;
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

return cljs.core.mapcat.call(null,(function (p1__33230_SHARP_){
if(typeof p1__33230_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__33230_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__33230_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__33237_33243 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__33238_33244 = null;
var count__33239_33245 = (0);
var i__33240_33246 = (0);
while(true){
if((i__33240_33246 < count__33239_33245)){
var vec__33241_33247 = cljs.core._nth.call(null,chunk__33238_33244,i__33240_33246);
var attr_33248 = cljs.core.nth.call(null,vec__33241_33247,(0),null);
var value_33249 = cljs.core.nth.call(null,vec__33241_33247,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_33248),value_33249);

var G__33250 = seq__33237_33243;
var G__33251 = chunk__33238_33244;
var G__33252 = count__33239_33245;
var G__33253 = (i__33240_33246 + (1));
seq__33237_33243 = G__33250;
chunk__33238_33244 = G__33251;
count__33239_33245 = G__33252;
i__33240_33246 = G__33253;
continue;
} else {
var temp__4126__auto___33254 = cljs.core.seq.call(null,seq__33237_33243);
if(temp__4126__auto___33254){
var seq__33237_33255__$1 = temp__4126__auto___33254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33237_33255__$1)){
var c__16932__auto___33256 = cljs.core.chunk_first.call(null,seq__33237_33255__$1);
var G__33257 = cljs.core.chunk_rest.call(null,seq__33237_33255__$1);
var G__33258 = c__16932__auto___33256;
var G__33259 = cljs.core.count.call(null,c__16932__auto___33256);
var G__33260 = (0);
seq__33237_33243 = G__33257;
chunk__33238_33244 = G__33258;
count__33239_33245 = G__33259;
i__33240_33246 = G__33260;
continue;
} else {
var vec__33242_33261 = cljs.core.first.call(null,seq__33237_33255__$1);
var attr_33262 = cljs.core.nth.call(null,vec__33242_33261,(0),null);
var value_33263 = cljs.core.nth.call(null,vec__33242_33261,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_33262),value_33263);

var G__33264 = cljs.core.next.call(null,seq__33237_33255__$1);
var G__33265 = null;
var G__33266 = (0);
var G__33267 = (0);
seq__33237_33243 = G__33264;
chunk__33238_33244 = G__33265;
count__33239_33245 = G__33266;
i__33240_33246 = G__33267;
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
var seq__33272 = cljs.core.seq.call(null,values);
var chunk__33273 = null;
var count__33274 = (0);
var i__33275 = (0);
while(true){
if((i__33275 < count__33274)){
var attr = cljs.core._nth.call(null,chunk__33273,i__33275);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__33276 = seq__33272;
var G__33277 = chunk__33273;
var G__33278 = count__33274;
var G__33279 = (i__33275 + (1));
seq__33272 = G__33276;
chunk__33273 = G__33277;
count__33274 = G__33278;
i__33275 = G__33279;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33272);
if(temp__4126__auto__){
var seq__33272__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33272__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33272__$1);
var G__33280 = cljs.core.chunk_rest.call(null,seq__33272__$1);
var G__33281 = c__16932__auto__;
var G__33282 = cljs.core.count.call(null,c__16932__auto__);
var G__33283 = (0);
seq__33272 = G__33280;
chunk__33273 = G__33281;
count__33274 = G__33282;
i__33275 = G__33283;
continue;
} else {
var attr = cljs.core.first.call(null,seq__33272__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__33284 = cljs.core.next.call(null,seq__33272__$1);
var G__33285 = null;
var G__33286 = (0);
var G__33287 = (0);
seq__33272 = G__33284;
chunk__33273 = G__33285;
count__33274 = G__33286;
i__33275 = G__33287;
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
var seq__33294_33300 = cljs.core.seq.call(null,ats);
var chunk__33295_33301 = null;
var count__33296_33302 = (0);
var i__33297_33303 = (0);
while(true){
if((i__33297_33303 < count__33296_33302)){
var vec__33298_33304 = cljs.core._nth.call(null,chunk__33295_33301,i__33297_33303);
var k_33305 = cljs.core.nth.call(null,vec__33298_33304,(0),null);
var v_33306 = cljs.core.nth.call(null,vec__33298_33304,(1),null);
add_map_attrs.call(null,elem,k_33305,v_33306);

var G__33307 = seq__33294_33300;
var G__33308 = chunk__33295_33301;
var G__33309 = count__33296_33302;
var G__33310 = (i__33297_33303 + (1));
seq__33294_33300 = G__33307;
chunk__33295_33301 = G__33308;
count__33296_33302 = G__33309;
i__33297_33303 = G__33310;
continue;
} else {
var temp__4126__auto___33311 = cljs.core.seq.call(null,seq__33294_33300);
if(temp__4126__auto___33311){
var seq__33294_33312__$1 = temp__4126__auto___33311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33294_33312__$1)){
var c__16932__auto___33313 = cljs.core.chunk_first.call(null,seq__33294_33312__$1);
var G__33314 = cljs.core.chunk_rest.call(null,seq__33294_33312__$1);
var G__33315 = c__16932__auto___33313;
var G__33316 = cljs.core.count.call(null,c__16932__auto___33313);
var G__33317 = (0);
seq__33294_33300 = G__33314;
chunk__33295_33301 = G__33315;
count__33296_33302 = G__33316;
i__33297_33303 = G__33317;
continue;
} else {
var vec__33299_33318 = cljs.core.first.call(null,seq__33294_33312__$1);
var k_33319 = cljs.core.nth.call(null,vec__33299_33318,(0),null);
var v_33320 = cljs.core.nth.call(null,vec__33299_33318,(1),null);
add_map_attrs.call(null,elem,k_33319,v_33320);

var G__33321 = cljs.core.next.call(null,seq__33294_33312__$1);
var G__33322 = null;
var G__33323 = (0);
var G__33324 = (0);
seq__33294_33300 = G__33321;
chunk__33295_33301 = G__33322;
count__33296_33302 = G__33323;
i__33297_33303 = G__33324;
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

var seq__33329_33333 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__33330_33334 = null;
var count__33331_33335 = (0);
var i__33332_33336 = (0);
while(true){
if((i__33332_33336 < count__33331_33335)){
var node_33337 = cljs.core._nth.call(null,chunk__33330_33334,i__33332_33336);
goog.dom.appendChild(div,node_33337);

var G__33338 = seq__33329_33333;
var G__33339 = chunk__33330_33334;
var G__33340 = count__33331_33335;
var G__33341 = (i__33332_33336 + (1));
seq__33329_33333 = G__33338;
chunk__33330_33334 = G__33339;
count__33331_33335 = G__33340;
i__33332_33336 = G__33341;
continue;
} else {
var temp__4126__auto___33342 = cljs.core.seq.call(null,seq__33329_33333);
if(temp__4126__auto___33342){
var seq__33329_33343__$1 = temp__4126__auto___33342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33329_33343__$1)){
var c__16932__auto___33344 = cljs.core.chunk_first.call(null,seq__33329_33343__$1);
var G__33345 = cljs.core.chunk_rest.call(null,seq__33329_33343__$1);
var G__33346 = c__16932__auto___33344;
var G__33347 = cljs.core.count.call(null,c__16932__auto___33344);
var G__33348 = (0);
seq__33329_33333 = G__33345;
chunk__33330_33334 = G__33346;
count__33331_33335 = G__33347;
i__33332_33336 = G__33348;
continue;
} else {
var node_33349 = cljs.core.first.call(null,seq__33329_33343__$1);
goog.dom.appendChild(div,node_33349);

var G__33350 = cljs.core.next.call(null,seq__33329_33343__$1);
var G__33351 = null;
var G__33352 = (0);
var G__33353 = (0);
seq__33329_33333 = G__33350;
chunk__33330_33334 = G__33351;
count__33331_33335 = G__33352;
i__33332_33336 = G__33353;
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
return (function (p1__33354_SHARP_){
var id = p1__33354_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__33354_SHARP_.setAttribute("id",rid);
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
var vec__33356 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__33356,(0),null);
var txt = cljs.core.nth.call(null,vec__33356,(1),null);
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

var seq__33361_33365 = cljs.core.seq.call(null,dfa);
var chunk__33362_33366 = null;
var count__33363_33367 = (0);
var i__33364_33368 = (0);
while(true){
if((i__33364_33368 < count__33363_33367)){
var df_33369 = cljs.core._nth.call(null,chunk__33362_33366,i__33364_33368);
goog.dom.append(frag,df_33369);

var G__33370 = seq__33361_33365;
var G__33371 = chunk__33362_33366;
var G__33372 = count__33363_33367;
var G__33373 = (i__33364_33368 + (1));
seq__33361_33365 = G__33370;
chunk__33362_33366 = G__33371;
count__33363_33367 = G__33372;
i__33364_33368 = G__33373;
continue;
} else {
var temp__4126__auto___33374 = cljs.core.seq.call(null,seq__33361_33365);
if(temp__4126__auto___33374){
var seq__33361_33375__$1 = temp__4126__auto___33374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33361_33375__$1)){
var c__16932__auto___33376 = cljs.core.chunk_first.call(null,seq__33361_33375__$1);
var G__33377 = cljs.core.chunk_rest.call(null,seq__33361_33375__$1);
var G__33378 = c__16932__auto___33376;
var G__33379 = cljs.core.count.call(null,c__16932__auto___33376);
var G__33380 = (0);
seq__33361_33365 = G__33377;
chunk__33362_33366 = G__33378;
count__33363_33367 = G__33379;
i__33364_33368 = G__33380;
continue;
} else {
var df_33381 = cljs.core.first.call(null,seq__33361_33375__$1);
goog.dom.append(frag,df_33381);

var G__33382 = cljs.core.next.call(null,seq__33361_33375__$1);
var G__33383 = null;
var G__33384 = (0);
var G__33385 = (0);
seq__33361_33365 = G__33382;
chunk__33362_33366 = G__33383;
count__33363_33367 = G__33384;
i__33364_33368 = G__33385;
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
var vec__33388 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__33388,(0),null);
var tdom = cljs.core.nth.call(null,vec__33388,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__33388,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__33386_SHARP_){
return p1__33386_SHARP_.outerHTML;
});})(vec__33388,sym,tdom,dom,tsnip,sel_str,cache))
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
if(typeof enfocus.core.t33393 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t33393 = (function (trans,filt,func,extr_multi_node,meta33394){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta33394 = meta33394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t33393.prototype.call = ((function (trans){
return (function() {
var G__33397 = null;
var G__33397__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__33397__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__33397 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__33397__2.call(this,self__,nodes);
case 3:
return G__33397__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33397.cljs$core$IFn$_invoke$arity$2 = G__33397__2;
G__33397.cljs$core$IFn$_invoke$arity$3 = G__33397__3;
return G__33397;
})()
;})(trans))
;

enfocus.core.t33393.prototype.apply = ((function (trans){
return (function (self__,args33396){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33396)));
});})(trans))
;

enfocus.core.t33393.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33393.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33393.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t33393.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33393.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33393.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_33395){
var self__ = this;
var _33395__$1 = this;
return self__.meta33394;
});})(trans))
;

enfocus.core.t33393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_33395,meta33394__$1){
var self__ = this;
var _33395__$1 = this;
return (new enfocus.core.t33393(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta33394__$1));
});})(trans))
;

enfocus.core.t33393.cljs$lang$type = true;

enfocus.core.t33393.cljs$lang$ctorStr = "enfocus.core/t33393";

enfocus.core.t33393.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"enfocus.core/t33393");
});})(trans))
;

enfocus.core.__GT_t33393 = ((function (trans){
return (function __GT_t33393(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta33394){
return (new enfocus.core.t33393(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta33394));
});})(trans))
;

}

return (new enfocus.core.t33393(trans,filt,func,extr_multi_node,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof enfocus.core.t33407 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t33407 = (function (trans,func,multi_node_chain,meta33408){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta33408 = meta33408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t33407.prototype.call = ((function (trans){
return (function() {
var G__33415 = null;
var G__33415__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__33415__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__33415 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__33415__2.call(this,self__,nodes);
case 3:
return G__33415__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33415.cljs$core$IFn$_invoke$arity$2 = G__33415__2;
G__33415.cljs$core$IFn$_invoke$arity$3 = G__33415__3;
return G__33415;
})()
;})(trans))
;

enfocus.core.t33407.prototype.apply = ((function (trans){
return (function (self__,args33410){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33410)));
});})(trans))
;

enfocus.core.t33407.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33407.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33407.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t33407.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33407.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_33409){
var self__ = this;
var _33409__$1 = this;
return self__.meta33408;
});})(trans))
;

enfocus.core.t33407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_33409,meta33408__$1){
var self__ = this;
var _33409__$1 = this;
return (new enfocus.core.t33407(self__.trans,self__.func,self__.multi_node_chain,meta33408__$1));
});})(trans))
;

enfocus.core.t33407.cljs$lang$type = true;

enfocus.core.t33407.cljs$lang$ctorStr = "enfocus.core/t33407";

enfocus.core.t33407.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"enfocus.core/t33407");
});})(trans))
;

enfocus.core.__GT_t33407 = ((function (trans){
return (function __GT_t33407(trans__$1,func__$1,multi_node_chain__$1,meta33408){
return (new enfocus.core.t33407(trans__$1,func__$1,multi_node_chain__$1,meta33408));
});})(trans))
;

}

return (new enfocus.core.t33407(trans,func,multi_node_chain,cljs.core.PersistentArrayMap.EMPTY));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__33398_SHARP_){
return domina.nodes.call(null,p1__33398_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t33411 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t33411 = (function (trans,func,values,multi_node_chain,meta33412){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta33412 = meta33412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t33411.prototype.call = ((function (trans){
return (function() {
var G__33416 = null;
var G__33416__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__33416__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__33416 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__33416__2.call(this,self__,nodes);
case 3:
return G__33416__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33416.cljs$core$IFn$_invoke$arity$2 = G__33416__2;
G__33416.cljs$core$IFn$_invoke$arity$3 = G__33416__3;
return G__33416;
})()
;})(trans))
;

enfocus.core.t33411.prototype.apply = ((function (trans){
return (function (self__,args33414){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33414)));
});})(trans))
;

enfocus.core.t33411.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33411.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33411.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t33411.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33411.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_33413){
var self__ = this;
var _33413__$1 = this;
return self__.meta33412;
});})(trans))
;

enfocus.core.t33411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_33413,meta33412__$1){
var self__ = this;
var _33413__$1 = this;
return (new enfocus.core.t33411(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta33412__$1));
});})(trans))
;

enfocus.core.t33411.cljs$lang$type = true;

enfocus.core.t33411.cljs$lang$ctorStr = "enfocus.core/t33411";

enfocus.core.t33411.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"enfocus.core/t33411");
});})(trans))
;

enfocus.core.__GT_t33411 = ((function (trans){
return (function __GT_t33411(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta33412){
return (new enfocus.core.t33411(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta33412));
});})(trans))
;

}

return (new enfocus.core.t33411(trans,func,values,multi_node_chain,cljs.core.PersistentArrayMap.EMPTY));
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__33417_SHARP_,p2__33418_SHARP_){
domina.destroy_children_BANG_.call(null,p1__33417_SHARP_);

return domina.append_BANG_.call(null,p1__33417_SHARP_,p2__33418_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33419__i = 0, G__33419__a = new Array(arguments.length -  0);
while (G__33419__i < G__33419__a.length) {G__33419__a[G__33419__i] = arguments[G__33419__i + 0]; ++G__33419__i;}
  values = new cljs.core.IndexedSeq(G__33419__a,0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__33420){
var values = cljs.core.seq(arglist__33420);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33421_SHARP_){
return domina.set_html_BANG_.call(null,p1__33421_SHARP_,txt);
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
return (function (p1__33422_SHARP_){
var seq__33429 = cljs.core.seq.call(null,pairs);
var chunk__33430 = null;
var count__33431 = (0);
var i__33432 = (0);
while(true){
if((i__33432 < count__33431)){
var vec__33433 = cljs.core._nth.call(null,chunk__33430,i__33432);
var name = cljs.core.nth.call(null,vec__33433,(0),null);
var value = cljs.core.nth.call(null,vec__33433,(1),null);
domina.set_attr_BANG_.call(null,p1__33422_SHARP_,name,value);

var G__33435 = seq__33429;
var G__33436 = chunk__33430;
var G__33437 = count__33431;
var G__33438 = (i__33432 + (1));
seq__33429 = G__33435;
chunk__33430 = G__33436;
count__33431 = G__33437;
i__33432 = G__33438;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33429);
if(temp__4126__auto__){
var seq__33429__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33429__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33429__$1);
var G__33439 = cljs.core.chunk_rest.call(null,seq__33429__$1);
var G__33440 = c__16932__auto__;
var G__33441 = cljs.core.count.call(null,c__16932__auto__);
var G__33442 = (0);
seq__33429 = G__33439;
chunk__33430 = G__33440;
count__33431 = G__33441;
i__33432 = G__33442;
continue;
} else {
var vec__33434 = cljs.core.first.call(null,seq__33429__$1);
var name = cljs.core.nth.call(null,vec__33434,(0),null);
var value = cljs.core.nth.call(null,vec__33434,(1),null);
domina.set_attr_BANG_.call(null,p1__33422_SHARP_,name,value);

var G__33443 = cljs.core.next.call(null,seq__33429__$1);
var G__33444 = null;
var G__33445 = (0);
var G__33446 = (0);
seq__33429 = G__33443;
chunk__33430 = G__33444;
count__33431 = G__33445;
i__33432 = G__33446;
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
var G__33447__i = 0, G__33447__a = new Array(arguments.length -  0);
while (G__33447__i < G__33447__a.length) {G__33447__a[G__33447__i] = arguments[G__33447__i + 0]; ++G__33447__i;}
  values = new cljs.core.IndexedSeq(G__33447__a,0);
} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__33448){
var values = cljs.core.seq(arglist__33448);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33449_SHARP_){
var seq__33454 = cljs.core.seq.call(null,values);
var chunk__33455 = null;
var count__33456 = (0);
var i__33457 = (0);
while(true){
if((i__33457 < count__33456)){
var name = cljs.core._nth.call(null,chunk__33455,i__33457);
domina.remove_attr_BANG_.call(null,p1__33449_SHARP_,name);

var G__33458 = seq__33454;
var G__33459 = chunk__33455;
var G__33460 = count__33456;
var G__33461 = (i__33457 + (1));
seq__33454 = G__33458;
chunk__33455 = G__33459;
count__33456 = G__33460;
i__33457 = G__33461;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33454);
if(temp__4126__auto__){
var seq__33454__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33454__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33454__$1);
var G__33462 = cljs.core.chunk_rest.call(null,seq__33454__$1);
var G__33463 = c__16932__auto__;
var G__33464 = cljs.core.count.call(null,c__16932__auto__);
var G__33465 = (0);
seq__33454 = G__33462;
chunk__33455 = G__33463;
count__33456 = G__33464;
i__33457 = G__33465;
continue;
} else {
var name = cljs.core.first.call(null,seq__33454__$1);
domina.remove_attr_BANG_.call(null,p1__33449_SHARP_,name);

var G__33466 = cljs.core.next.call(null,seq__33454__$1);
var G__33467 = null;
var G__33468 = (0);
var G__33469 = (0);
seq__33454 = G__33466;
chunk__33455 = G__33467;
count__33456 = G__33468;
i__33457 = G__33469;
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
var G__33470__i = 0, G__33470__a = new Array(arguments.length -  0);
while (G__33470__i < G__33470__a.length) {G__33470__a[G__33470__i] = arguments[G__33470__i + 0]; ++G__33470__i;}
  values = new cljs.core.IndexedSeq(G__33470__a,0);
} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__33471){
var values = cljs.core.seq(arglist__33471);
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
var h = cljs.core.mapcat.call(null,(function (p__33474){
var vec__33475 = p__33474;
var n = cljs.core.nth.call(null,vec__33475,(0),null);
var v = cljs.core.nth.call(null,vec__33475,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,(2),forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;
if (arguments.length > 0) {
var G__33476__i = 0, G__33476__a = new Array(arguments.length -  0);
while (G__33476__i < G__33476__a.length) {G__33476__a[G__33476__i] = arguments[G__33476__i + 0]; ++G__33476__i;}
  forms = new cljs.core.IndexedSeq(G__33476__a,0);
} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__33477){
var forms = cljs.core.seq(arglist__33477);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33478_SHARP_){
var seq__33483 = cljs.core.seq.call(null,values);
var chunk__33484 = null;
var count__33485 = (0);
var i__33486 = (0);
while(true){
if((i__33486 < count__33485)){
var val = cljs.core._nth.call(null,chunk__33484,i__33486);
domina.add_class_BANG_.call(null,p1__33478_SHARP_,val);

var G__33487 = seq__33483;
var G__33488 = chunk__33484;
var G__33489 = count__33485;
var G__33490 = (i__33486 + (1));
seq__33483 = G__33487;
chunk__33484 = G__33488;
count__33485 = G__33489;
i__33486 = G__33490;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33483);
if(temp__4126__auto__){
var seq__33483__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33483__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33483__$1);
var G__33491 = cljs.core.chunk_rest.call(null,seq__33483__$1);
var G__33492 = c__16932__auto__;
var G__33493 = cljs.core.count.call(null,c__16932__auto__);
var G__33494 = (0);
seq__33483 = G__33491;
chunk__33484 = G__33492;
count__33485 = G__33493;
i__33486 = G__33494;
continue;
} else {
var val = cljs.core.first.call(null,seq__33483__$1);
domina.add_class_BANG_.call(null,p1__33478_SHARP_,val);

var G__33495 = cljs.core.next.call(null,seq__33483__$1);
var G__33496 = null;
var G__33497 = (0);
var G__33498 = (0);
seq__33483 = G__33495;
chunk__33484 = G__33496;
count__33485 = G__33497;
i__33486 = G__33498;
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
var G__33499__i = 0, G__33499__a = new Array(arguments.length -  0);
while (G__33499__i < G__33499__a.length) {G__33499__a[G__33499__i] = arguments[G__33499__i + 0]; ++G__33499__i;}
  values = new cljs.core.IndexedSeq(G__33499__a,0);
} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__33500){
var values = cljs.core.seq(arglist__33500);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33501_SHARP_){
var seq__33506 = cljs.core.seq.call(null,values);
var chunk__33507 = null;
var count__33508 = (0);
var i__33509 = (0);
while(true){
if((i__33509 < count__33508)){
var val = cljs.core._nth.call(null,chunk__33507,i__33509);
domina.remove_class_BANG_.call(null,p1__33501_SHARP_,val);

var G__33510 = seq__33506;
var G__33511 = chunk__33507;
var G__33512 = count__33508;
var G__33513 = (i__33509 + (1));
seq__33506 = G__33510;
chunk__33507 = G__33511;
count__33508 = G__33512;
i__33509 = G__33513;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33506);
if(temp__4126__auto__){
var seq__33506__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33506__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33506__$1);
var G__33514 = cljs.core.chunk_rest.call(null,seq__33506__$1);
var G__33515 = c__16932__auto__;
var G__33516 = cljs.core.count.call(null,c__16932__auto__);
var G__33517 = (0);
seq__33506 = G__33514;
chunk__33507 = G__33515;
count__33508 = G__33516;
i__33509 = G__33517;
continue;
} else {
var val = cljs.core.first.call(null,seq__33506__$1);
domina.remove_class_BANG_.call(null,p1__33501_SHARP_,val);

var G__33518 = cljs.core.next.call(null,seq__33506__$1);
var G__33519 = null;
var G__33520 = (0);
var G__33521 = (0);
seq__33506 = G__33518;
chunk__33507 = G__33519;
count__33508 = G__33520;
i__33509 = G__33521;
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
var G__33522__i = 0, G__33522__a = new Array(arguments.length -  0);
while (G__33522__i < G__33522__a.length) {G__33522__a[G__33522__i] = arguments[G__33522__i + 0]; ++G__33522__i;}
  values = new cljs.core.IndexedSeq(G__33522__a,0);
} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__33523){
var values = cljs.core.seq(arglist__33523);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33524_SHARP_){
return domina.set_classes_BANG_.call(null,p1__33524_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33525__i = 0, G__33525__a = new Array(arguments.length -  0);
while (G__33525__i < G__33525__a.length) {G__33525__a[G__33525__i] = arguments[G__33525__i + 0]; ++G__33525__i;}
  values = new cljs.core.IndexedSeq(G__33525__a,0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__33526){
var values = cljs.core.seq(arglist__33526);
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
var seq__33531 = cljs.core.seq.call(null,forms);
var chunk__33532 = null;
var count__33533 = (0);
var i__33534 = (0);
while(true){
if((i__33534 < count__33533)){
var fun = cljs.core._nth.call(null,chunk__33532,i__33534);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__33535 = seq__33531;
var G__33536 = chunk__33532;
var G__33537 = count__33533;
var G__33538 = (i__33534 + (1));
seq__33531 = G__33535;
chunk__33532 = G__33536;
count__33533 = G__33537;
i__33534 = G__33538;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33531);
if(temp__4126__auto__){
var seq__33531__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33531__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33531__$1);
var G__33539 = cljs.core.chunk_rest.call(null,seq__33531__$1);
var G__33540 = c__16932__auto__;
var G__33541 = cljs.core.count.call(null,c__16932__auto__);
var G__33542 = (0);
seq__33531 = G__33539;
chunk__33532 = G__33540;
count__33533 = G__33541;
i__33534 = G__33542;
continue;
} else {
var fun = cljs.core.first.call(null,seq__33531__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__33543 = cljs.core.next.call(null,seq__33531__$1);
var G__33544 = null;
var G__33545 = (0);
var G__33546 = (0);
seq__33531 = G__33543;
chunk__33532 = G__33544;
count__33533 = G__33545;
i__33534 = G__33546;
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
var G__33547__i = 0, G__33547__a = new Array(arguments.length -  0);
while (G__33547__i < G__33547__a.length) {G__33547__a[G__33547__i] = arguments[G__33547__i + 0]; ++G__33547__i;}
  forms = new cljs.core.IndexedSeq(G__33547__a,0);
} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__33548){
var forms = cljs.core.seq(arglist__33548);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__33549_SHARP_,p2__33550_SHARP_){
return domina.append_BANG_.call(null,p1__33549_SHARP_,p2__33550_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33551__i = 0, G__33551__a = new Array(arguments.length -  0);
while (G__33551__i < G__33551__a.length) {G__33551__a[G__33551__i] = arguments[G__33551__i + 0]; ++G__33551__i;}
  values = new cljs.core.IndexedSeq(G__33551__a,0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__33552){
var values = cljs.core.seq(arglist__33552);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__33553_SHARP_,p2__33554_SHARP_){
return domina.prepend_BANG_.call(null,p1__33553_SHARP_,p2__33554_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33555__i = 0, G__33555__a = new Array(arguments.length -  0);
while (G__33555__i < G__33555__a.length) {G__33555__a[G__33555__i] = arguments[G__33555__i + 0]; ++G__33555__i;}
  values = new cljs.core.IndexedSeq(G__33555__a,0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__33556){
var values = cljs.core.seq(arglist__33556);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__33557_SHARP_,p2__33558_SHARP_){
return domina.insert_before_BANG_.call(null,p1__33557_SHARP_,p2__33558_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33559__i = 0, G__33559__a = new Array(arguments.length -  0);
while (G__33559__i < G__33559__a.length) {G__33559__a[G__33559__i] = arguments[G__33559__i + 0]; ++G__33559__i;}
  values = new cljs.core.IndexedSeq(G__33559__a,0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__33560){
var values = cljs.core.seq(arglist__33560);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__33561_SHARP_,p2__33562_SHARP_){
return domina.insert_after_BANG_.call(null,p1__33561_SHARP_,p2__33562_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33563__i = 0, G__33563__a = new Array(arguments.length -  0);
while (G__33563__i < G__33563__a.length) {G__33563__a[G__33563__i] = arguments[G__33563__i + 0]; ++G__33563__i;}
  values = new cljs.core.IndexedSeq(G__33563__a,0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__33564){
var values = cljs.core.seq(arglist__33564);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__33565_SHARP_,p2__33566_SHARP_){
return domina.swap_content_BANG_.call(null,p1__33565_SHARP_,p2__33566_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33567__i = 0, G__33567__a = new Array(arguments.length -  0);
while (G__33567__i < G__33567__a.length) {G__33567__a[G__33567__i] = arguments[G__33567__i + 0]; ++G__33567__i;}
  values = new cljs.core.IndexedSeq(G__33567__a,0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__33568){
var values = cljs.core.seq(arglist__33568);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33569_SHARP_){
return domina.detach_BANG_.call(null,p1__33569_SHARP_);
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
return (function (p1__33570_SHARP_){
var seq__33577 = cljs.core.seq.call(null,pairs);
var chunk__33578 = null;
var count__33579 = (0);
var i__33580 = (0);
while(true){
if((i__33580 < count__33579)){
var vec__33581 = cljs.core._nth.call(null,chunk__33578,i__33580);
var name = cljs.core.nth.call(null,vec__33581,(0),null);
var value = cljs.core.nth.call(null,vec__33581,(1),null);
domina.set_style_BANG_.call(null,p1__33570_SHARP_,name,value);

var G__33583 = seq__33577;
var G__33584 = chunk__33578;
var G__33585 = count__33579;
var G__33586 = (i__33580 + (1));
seq__33577 = G__33583;
chunk__33578 = G__33584;
count__33579 = G__33585;
i__33580 = G__33586;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33577);
if(temp__4126__auto__){
var seq__33577__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33577__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33577__$1);
var G__33587 = cljs.core.chunk_rest.call(null,seq__33577__$1);
var G__33588 = c__16932__auto__;
var G__33589 = cljs.core.count.call(null,c__16932__auto__);
var G__33590 = (0);
seq__33577 = G__33587;
chunk__33578 = G__33588;
count__33579 = G__33589;
i__33580 = G__33590;
continue;
} else {
var vec__33582 = cljs.core.first.call(null,seq__33577__$1);
var name = cljs.core.nth.call(null,vec__33582,(0),null);
var value = cljs.core.nth.call(null,vec__33582,(1),null);
domina.set_style_BANG_.call(null,p1__33570_SHARP_,name,value);

var G__33591 = cljs.core.next.call(null,seq__33577__$1);
var G__33592 = null;
var G__33593 = (0);
var G__33594 = (0);
seq__33577 = G__33591;
chunk__33578 = G__33592;
count__33579 = G__33593;
i__33580 = G__33594;
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
var G__33595__i = 0, G__33595__a = new Array(arguments.length -  0);
while (G__33595__i < G__33595__a.length) {G__33595__a[G__33595__i] = arguments[G__33595__i + 0]; ++G__33595__i;}
  values = new cljs.core.IndexedSeq(G__33595__a,0);
} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__33596){
var values = cljs.core.seq(arglist__33596);
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
var G__33597__i = 0, G__33597__a = new Array(arguments.length -  0);
while (G__33597__i < G__33597__a.length) {G__33597__a[G__33597__i] = arguments[G__33597__i + 0]; ++G__33597__i;}
  values = new cljs.core.IndexedSeq(G__33597__a,0);
} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__33598){
var values = cljs.core.seq(arglist__33598);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33599_SHARP_){
return domina.set_data_BANG_.call(null,p1__33599_SHARP_,ky,val);
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
var G__33600__i = 0, G__33600__a = new Array(arguments.length -  1);
while (G__33600__i < G__33600__a.length) {G__33600__a[G__33600__i] = arguments[G__33600__i + 1]; ++G__33600__i;}
  funcs = new cljs.core.IndexedSeq(G__33600__a,0);
} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__33601){
var ttime = cljs.core.first(arglist__33601);
var funcs = cljs.core.rest(arglist__33601);
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
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__33603_SHARP_,p2__33602_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__33602_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__33628_33636 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__33629_33637 = null;
var count__33630_33638 = (0);
var i__33631_33639 = (0);
while(true){
if((i__33631_33639 < count__33630_33638)){
var idx_33640 = cljs.core._nth.call(null,chunk__33629_33637,i__33631_33639);
var attr_33641 = pnod.attributes.item(idx_33640);
if(cljs.core.truth_(attr_33641.specified)){
attr_33641.value = rep_str.call(null,attr_33641.value);
} else {
}

var G__33642 = seq__33628_33636;
var G__33643 = chunk__33629_33637;
var G__33644 = count__33630_33638;
var G__33645 = (i__33631_33639 + (1));
seq__33628_33636 = G__33642;
chunk__33629_33637 = G__33643;
count__33630_33638 = G__33644;
i__33631_33639 = G__33645;
continue;
} else {
var temp__4126__auto___33646 = cljs.core.seq.call(null,seq__33628_33636);
if(temp__4126__auto___33646){
var seq__33628_33647__$1 = temp__4126__auto___33646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33628_33647__$1)){
var c__16932__auto___33648 = cljs.core.chunk_first.call(null,seq__33628_33647__$1);
var G__33649 = cljs.core.chunk_rest.call(null,seq__33628_33647__$1);
var G__33650 = c__16932__auto___33648;
var G__33651 = cljs.core.count.call(null,c__16932__auto___33648);
var G__33652 = (0);
seq__33628_33636 = G__33649;
chunk__33629_33637 = G__33650;
count__33630_33638 = G__33651;
i__33631_33639 = G__33652;
continue;
} else {
var idx_33653 = cljs.core.first.call(null,seq__33628_33647__$1);
var attr_33654 = pnod.attributes.item(idx_33653);
if(cljs.core.truth_(attr_33654.specified)){
attr_33654.value = rep_str.call(null,attr_33654.value);
} else {
}

var G__33655 = cljs.core.next.call(null,seq__33628_33647__$1);
var G__33656 = null;
var G__33657 = (0);
var G__33658 = (0);
seq__33628_33636 = G__33655;
chunk__33629_33637 = G__33656;
count__33630_33638 = G__33657;
i__33631_33639 = G__33658;
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
var seq__33632 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__33633 = null;
var count__33634 = (0);
var i__33635 = (0);
while(true){
if((i__33635 < count__33634)){
var cnode = cljs.core._nth.call(null,chunk__33633,i__33635);
rep_node.call(null,cnode);

var G__33659 = seq__33632;
var G__33660 = chunk__33633;
var G__33661 = count__33634;
var G__33662 = (i__33635 + (1));
seq__33632 = G__33659;
chunk__33633 = G__33660;
count__33634 = G__33661;
i__33635 = G__33662;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33632);
if(temp__4126__auto__){
var seq__33632__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33632__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33632__$1);
var G__33663 = cljs.core.chunk_rest.call(null,seq__33632__$1);
var G__33664 = c__16932__auto__;
var G__33665 = cljs.core.count.call(null,c__16932__auto__);
var G__33666 = (0);
seq__33632 = G__33663;
chunk__33633 = G__33664;
count__33634 = G__33665;
i__33635 = G__33666;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__33632__$1);
rep_node.call(null,cnode);

var G__33667 = cljs.core.next.call(null,seq__33632__$1);
var G__33668 = null;
var G__33669 = (0);
var G__33670 = (0);
seq__33632 = G__33667;
chunk__33633 = G__33668;
count__33634 = G__33669;
i__33635 = G__33670;
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
var seq__33675 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__33676 = null;
var count__33677 = (0);
var i__33678 = (0);
while(true){
if((i__33678 < count__33677)){
var idx = cljs.core._nth.call(null,chunk__33676,i__33678);
var el_33679 = (form_node.elements[idx]);
var ky_33680 = cljs.core.keyword.call(null,el_33679.name);
var val_33681 = ky_33680.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_33680)){
var val_33682__$1 = (cljs.core.truth_(val_33681)?val_33681:"");
enfocus.core.set_form_input.call(null,val_33682__$1).call(null,el_33679);
} else {
}

var G__33683 = seq__33675;
var G__33684 = chunk__33676;
var G__33685 = count__33677;
var G__33686 = (i__33678 + (1));
seq__33675 = G__33683;
chunk__33676 = G__33684;
count__33677 = G__33685;
i__33678 = G__33686;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33675);
if(temp__4126__auto__){
var seq__33675__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33675__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33675__$1);
var G__33687 = cljs.core.chunk_rest.call(null,seq__33675__$1);
var G__33688 = c__16932__auto__;
var G__33689 = cljs.core.count.call(null,c__16932__auto__);
var G__33690 = (0);
seq__33675 = G__33687;
chunk__33676 = G__33688;
count__33677 = G__33689;
i__33678 = G__33690;
continue;
} else {
var idx = cljs.core.first.call(null,seq__33675__$1);
var el_33691 = (form_node.elements[idx]);
var ky_33692 = cljs.core.keyword.call(null,el_33691.name);
var val_33693 = ky_33692.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_33692)){
var val_33694__$1 = (cljs.core.truth_(val_33693)?val_33693:"");
enfocus.core.set_form_input.call(null,val_33694__$1).call(null,el_33691);
} else {
}

var G__33695 = cljs.core.next.call(null,seq__33675__$1);
var G__33696 = null;
var G__33697 = (0);
var G__33698 = (0);
seq__33675 = G__33695;
chunk__33676 = G__33696;
count__33677 = G__33697;
i__33678 = G__33698;
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
var vec__33708 = node_spec;
var tag = cljs.core.nth.call(null,vec__33708,(0),null);
var vec__33709 = cljs.core.nthnext.call(null,vec__33708,(1));
var m = cljs.core.nth.call(null,vec__33709,(0),null);
var ms = cljs.core.nthnext.call(null,vec__33709,(1));
var more = vec__33709;
var vec__33710 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__33710,(0),null);
var segments = cljs.core.nthnext.call(null,vec__33710,(1));
var id = cljs.core.some.call(null,((function (vec__33708,tag,vec__33709,m,ms,more,vec__33710,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__33708,tag,vec__33709,m,ms,more,vec__33710,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__33708,tag,vec__33709,m,ms,more,vec__33710,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__33708,tag,vec__33709,m,ms,more,vec__33710,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__33711_33717 = cljs.core.seq.call(null,attrs__$2);
var chunk__33712_33718 = null;
var count__33713_33719 = (0);
var i__33714_33720 = (0);
while(true){
if((i__33714_33720 < count__33713_33719)){
var vec__33715_33721 = cljs.core._nth.call(null,chunk__33712_33718,i__33714_33720);
var key_33722 = cljs.core.nth.call(null,vec__33715_33721,(0),null);
var val_33723 = cljs.core.nth.call(null,vec__33715_33721,(1),null);
node.setAttribute(cljs.core.name.call(null,key_33722),val_33723);

var G__33724 = seq__33711_33717;
var G__33725 = chunk__33712_33718;
var G__33726 = count__33713_33719;
var G__33727 = (i__33714_33720 + (1));
seq__33711_33717 = G__33724;
chunk__33712_33718 = G__33725;
count__33713_33719 = G__33726;
i__33714_33720 = G__33727;
continue;
} else {
var temp__4126__auto___33728 = cljs.core.seq.call(null,seq__33711_33717);
if(temp__4126__auto___33728){
var seq__33711_33729__$1 = temp__4126__auto___33728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33711_33729__$1)){
var c__16932__auto___33730 = cljs.core.chunk_first.call(null,seq__33711_33729__$1);
var G__33731 = cljs.core.chunk_rest.call(null,seq__33711_33729__$1);
var G__33732 = c__16932__auto___33730;
var G__33733 = cljs.core.count.call(null,c__16932__auto___33730);
var G__33734 = (0);
seq__33711_33717 = G__33731;
chunk__33712_33718 = G__33732;
count__33713_33719 = G__33733;
i__33714_33720 = G__33734;
continue;
} else {
var vec__33716_33735 = cljs.core.first.call(null,seq__33711_33729__$1);
var key_33736 = cljs.core.nth.call(null,vec__33716_33735,(0),null);
var val_33737 = cljs.core.nth.call(null,vec__33716_33735,(1),null);
node.setAttribute(cljs.core.name.call(null,key_33736),val_33737);

var G__33738 = cljs.core.next.call(null,seq__33711_33729__$1);
var G__33739 = null;
var G__33740 = (0);
var G__33741 = (0);
seq__33711_33717 = G__33738;
chunk__33712_33718 = G__33739;
count__33713_33719 = G__33740;
i__33714_33720 = G__33741;
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
return (function (p1__33743_SHARP_,p2__33742_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__33742_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__33743_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__33743_SHARP_,vals);
} else {
return p1__33743_SHARP_;
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
if(typeof enfocus.core.t33748 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t33748 = (function (trans,read_form_input,meta33749){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta33749 = meta33749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t33748.prototype.call = ((function (trans){
return (function() {
var G__33752 = null;
var G__33752__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__33752__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__33752 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__33752__2.call(this,self__,nodes);
case 3:
return G__33752__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33752.cljs$core$IFn$_invoke$arity$2 = G__33752__2;
G__33752.cljs$core$IFn$_invoke$arity$3 = G__33752__3;
return G__33752;
})()
;})(trans))
;

enfocus.core.t33748.prototype.apply = ((function (trans){
return (function (self__,args33751){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33751)));
});})(trans))
;

enfocus.core.t33748.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33748.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33748.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t33748.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33748.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_33750){
var self__ = this;
var _33750__$1 = this;
return self__.meta33749;
});})(trans))
;

enfocus.core.t33748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_33750,meta33749__$1){
var self__ = this;
var _33750__$1 = this;
return (new enfocus.core.t33748(self__.trans,self__.read_form_input,meta33749__$1));
});})(trans))
;

enfocus.core.t33748.cljs$lang$type = true;

enfocus.core.t33748.cljs$lang$ctorStr = "enfocus.core/t33748";

enfocus.core.t33748.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"enfocus.core/t33748");
});})(trans))
;

enfocus.core.__GT_t33748 = ((function (trans){
return (function __GT_t33748(trans__$1,read_form_input__$1,meta33749){
return (new enfocus.core.t33748(trans__$1,read_form_input__$1,meta33749));
});})(trans))
;

}

return (new enfocus.core.t33748(trans,read_form_input,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__33754_SHARP_,p2__33753_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__33753_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__33754_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__33753_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__33753_SHARP_)));
} else {
return p1__33754_SHARP_;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__33755_SHARP_){
if((p1__33755_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__33755_SHARP_);
} else {
if((p1__33755_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__33755_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__33755_SHARP_)){
return create_sel_str.call(null,p1__33755_SHARP_);
} else {
if(typeof p1__33755_SHARP_ === 'string'){
return p1__33755_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var or__16145__auto__ = func;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
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
var sel_QMARK_ = (function (){var and__16133__auto__ = !((node == null));
if(and__16133__auto__){
var G__33766 = node;
if(G__33766){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__33766.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__33766.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__33766);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__33766);
}
} else {
return and__16133__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__33767 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__33767,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__33767,(1),null);
var seq__33768 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__33769 = null;
var count__33770 = (0);
var i__33771 = (0);
while(true){
if((i__33771 < count__33770)){
var vec__33772 = cljs.core._nth.call(null,chunk__33769,i__33771);
var sel = cljs.core.nth.call(null,vec__33772,(0),null);
var t = cljs.core.nth.call(null,vec__33772,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__33774 = seq__33768;
var G__33775 = chunk__33769;
var G__33776 = count__33770;
var G__33777 = (i__33771 + (1));
seq__33768 = G__33774;
chunk__33769 = G__33775;
count__33770 = G__33776;
i__33771 = G__33777;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33768);
if(temp__4126__auto__){
var seq__33768__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33768__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33768__$1);
var G__33778 = cljs.core.chunk_rest.call(null,seq__33768__$1);
var G__33779 = c__16932__auto__;
var G__33780 = cljs.core.count.call(null,c__16932__auto__);
var G__33781 = (0);
seq__33768 = G__33778;
chunk__33769 = G__33779;
count__33770 = G__33780;
i__33771 = G__33781;
continue;
} else {
var vec__33773 = cljs.core.first.call(null,seq__33768__$1);
var sel = cljs.core.nth.call(null,vec__33773,(0),null);
var t = cljs.core.nth.call(null,vec__33773,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__33782 = cljs.core.next.call(null,seq__33768__$1);
var G__33783 = null;
var G__33784 = (0);
var G__33785 = (0);
seq__33768 = G__33782;
chunk__33769 = G__33783;
count__33770 = G__33784;
i__33771 = G__33785;
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
var G__33786__i = 0, G__33786__a = new Array(arguments.length -  2);
while (G__33786__i < G__33786__a.length) {G__33786__a[G__33786__i] = arguments[G__33786__i + 2]; ++G__33786__i;}
  trans = new cljs.core.IndexedSeq(G__33786__a,0);
} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__33787){
var id_mask = cljs.core.first(arglist__33787);
arglist__33787 = cljs.core.next(arglist__33787);
var node = cljs.core.first(arglist__33787);
var trans = cljs.core.rest(arglist__33787);
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
var G__33788__i = 0, G__33788__a = new Array(arguments.length -  1);
while (G__33788__i < G__33788__a.length) {G__33788__a[G__33788__i] = arguments[G__33788__i + 1]; ++G__33788__i;}
  trans = new cljs.core.IndexedSeq(G__33788__a,0);
} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__33789){
var node = cljs.core.first(arglist__33789);
var trans = cljs.core.rest(arglist__33789);
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
var sel_QMARK_ = (function (){var G__33794 = node;
if(G__33794){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__33794.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__33794.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__33794);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__33794);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__33795 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__33795,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__33795,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__33795,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__33796){
var vec__33797 = p__33796;
var ky = cljs.core.nth.call(null,vec__33797,(0),null);
var sel = cljs.core.nth.call(null,vec__33797,(1),null);
var ext = cljs.core.nth.call(null,vec__33797,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__33795,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.partition.call(null,(3),trans__$1)));

}
}
};
var from = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
var G__33798__i = 0, G__33798__a = new Array(arguments.length -  1);
while (G__33798__i < G__33798__a.length) {G__33798__a[G__33798__i] = arguments[G__33798__i + 1]; ++G__33798__i;}
  trans = new cljs.core.IndexedSeq(G__33798__a,0);
} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__33799){
var node = cljs.core.first(arglist__33799);
var trans = cljs.core.rest(arglist__33799);
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
var G__33800 = null;
var G__33800__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__33800__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__33800__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__33800 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__33800__1.call(this,this$);
case 2:
return G__33800__2.call(this,this$,root);
case 3:
return G__33800__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33800.cljs$core$IFn$_invoke$arity$1 = G__33800__1;
G__33800.cljs$core$IFn$_invoke$arity$2 = G__33800__2;
G__33800.cljs$core$IFn$_invoke$arity$3 = G__33800__3;
return G__33800;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__33801 = null;
var G__33801__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__33801__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__33801__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__33801 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__33801__1.call(this,this$);
case 2:
return G__33801__2.call(this,this$,root);
case 3:
return G__33801__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33801.cljs$core$IFn$_invoke$arity$1 = G__33801__1;
G__33801.cljs$core$IFn$_invoke$arity$2 = G__33801__2;
G__33801.cljs$core$IFn$_invoke$arity$3 = G__33801__3;
return G__33801;
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
var G__33802 = null;
var G__33802__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__33802__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__33802__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__33802 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__33802__1.call(this,this$);
case 2:
return G__33802__2.call(this,this$,root);
case 3:
return G__33802__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33802.cljs$core$IFn$_invoke$arity$1 = G__33802__1;
G__33802.cljs$core$IFn$_invoke$arity$2 = G__33802__2;
G__33802.cljs$core$IFn$_invoke$arity$3 = G__33802__3;
return G__33802;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__33803 = null;
var G__33803__2 = (function (trans,nodes){
return nodes;
});
var G__33803__3 = (function (trans,nodes,chain){
return nodes;
});
G__33803 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__33803__2.call(this,trans,nodes);
case 3:
return G__33803__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33803.cljs$core$IFn$_invoke$arity$2 = G__33803__2;
G__33803.cljs$core$IFn$_invoke$arity$3 = G__33803__3;
return G__33803;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__33804 = null;
var G__33804__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__33804__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__33804 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__33804__2.call(this,trans,nodes);
case 3:
return G__33804__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33804.cljs$core$IFn$_invoke$arity$2 = G__33804__2;
G__33804.cljs$core$IFn$_invoke$arity$3 = G__33804__3;
return G__33804;
})()
);

//# sourceMappingURL=core.js.map?rel=1435015535925