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







enfocus.core.ISelector = (function (){var obj33088 = {};
return obj33088;
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


enfocus.core.ITransform = (function (){var obj33090 = {};
return obj33090;
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

return cljs.core.mapcat.call(null,(function (p1__33091_SHARP_){
if(typeof p1__33091_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__33091_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__33091_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__33098_33104 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__33099_33105 = null;
var count__33100_33106 = (0);
var i__33101_33107 = (0);
while(true){
if((i__33101_33107 < count__33100_33106)){
var vec__33102_33108 = cljs.core._nth.call(null,chunk__33099_33105,i__33101_33107);
var attr_33109 = cljs.core.nth.call(null,vec__33102_33108,(0),null);
var value_33110 = cljs.core.nth.call(null,vec__33102_33108,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_33109),value_33110);

var G__33111 = seq__33098_33104;
var G__33112 = chunk__33099_33105;
var G__33113 = count__33100_33106;
var G__33114 = (i__33101_33107 + (1));
seq__33098_33104 = G__33111;
chunk__33099_33105 = G__33112;
count__33100_33106 = G__33113;
i__33101_33107 = G__33114;
continue;
} else {
var temp__4126__auto___33115 = cljs.core.seq.call(null,seq__33098_33104);
if(temp__4126__auto___33115){
var seq__33098_33116__$1 = temp__4126__auto___33115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33098_33116__$1)){
var c__16932__auto___33117 = cljs.core.chunk_first.call(null,seq__33098_33116__$1);
var G__33118 = cljs.core.chunk_rest.call(null,seq__33098_33116__$1);
var G__33119 = c__16932__auto___33117;
var G__33120 = cljs.core.count.call(null,c__16932__auto___33117);
var G__33121 = (0);
seq__33098_33104 = G__33118;
chunk__33099_33105 = G__33119;
count__33100_33106 = G__33120;
i__33101_33107 = G__33121;
continue;
} else {
var vec__33103_33122 = cljs.core.first.call(null,seq__33098_33116__$1);
var attr_33123 = cljs.core.nth.call(null,vec__33103_33122,(0),null);
var value_33124 = cljs.core.nth.call(null,vec__33103_33122,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_33123),value_33124);

var G__33125 = cljs.core.next.call(null,seq__33098_33116__$1);
var G__33126 = null;
var G__33127 = (0);
var G__33128 = (0);
seq__33098_33104 = G__33125;
chunk__33099_33105 = G__33126;
count__33100_33106 = G__33127;
i__33101_33107 = G__33128;
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
var seq__33133 = cljs.core.seq.call(null,values);
var chunk__33134 = null;
var count__33135 = (0);
var i__33136 = (0);
while(true){
if((i__33136 < count__33135)){
var attr = cljs.core._nth.call(null,chunk__33134,i__33136);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__33137 = seq__33133;
var G__33138 = chunk__33134;
var G__33139 = count__33135;
var G__33140 = (i__33136 + (1));
seq__33133 = G__33137;
chunk__33134 = G__33138;
count__33135 = G__33139;
i__33136 = G__33140;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33133);
if(temp__4126__auto__){
var seq__33133__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33133__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33133__$1);
var G__33141 = cljs.core.chunk_rest.call(null,seq__33133__$1);
var G__33142 = c__16932__auto__;
var G__33143 = cljs.core.count.call(null,c__16932__auto__);
var G__33144 = (0);
seq__33133 = G__33141;
chunk__33134 = G__33142;
count__33135 = G__33143;
i__33136 = G__33144;
continue;
} else {
var attr = cljs.core.first.call(null,seq__33133__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__33145 = cljs.core.next.call(null,seq__33133__$1);
var G__33146 = null;
var G__33147 = (0);
var G__33148 = (0);
seq__33133 = G__33145;
chunk__33134 = G__33146;
count__33135 = G__33147;
i__33136 = G__33148;
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
var seq__33155_33161 = cljs.core.seq.call(null,ats);
var chunk__33156_33162 = null;
var count__33157_33163 = (0);
var i__33158_33164 = (0);
while(true){
if((i__33158_33164 < count__33157_33163)){
var vec__33159_33165 = cljs.core._nth.call(null,chunk__33156_33162,i__33158_33164);
var k_33166 = cljs.core.nth.call(null,vec__33159_33165,(0),null);
var v_33167 = cljs.core.nth.call(null,vec__33159_33165,(1),null);
add_map_attrs.call(null,elem,k_33166,v_33167);

var G__33168 = seq__33155_33161;
var G__33169 = chunk__33156_33162;
var G__33170 = count__33157_33163;
var G__33171 = (i__33158_33164 + (1));
seq__33155_33161 = G__33168;
chunk__33156_33162 = G__33169;
count__33157_33163 = G__33170;
i__33158_33164 = G__33171;
continue;
} else {
var temp__4126__auto___33172 = cljs.core.seq.call(null,seq__33155_33161);
if(temp__4126__auto___33172){
var seq__33155_33173__$1 = temp__4126__auto___33172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33155_33173__$1)){
var c__16932__auto___33174 = cljs.core.chunk_first.call(null,seq__33155_33173__$1);
var G__33175 = cljs.core.chunk_rest.call(null,seq__33155_33173__$1);
var G__33176 = c__16932__auto___33174;
var G__33177 = cljs.core.count.call(null,c__16932__auto___33174);
var G__33178 = (0);
seq__33155_33161 = G__33175;
chunk__33156_33162 = G__33176;
count__33157_33163 = G__33177;
i__33158_33164 = G__33178;
continue;
} else {
var vec__33160_33179 = cljs.core.first.call(null,seq__33155_33173__$1);
var k_33180 = cljs.core.nth.call(null,vec__33160_33179,(0),null);
var v_33181 = cljs.core.nth.call(null,vec__33160_33179,(1),null);
add_map_attrs.call(null,elem,k_33180,v_33181);

var G__33182 = cljs.core.next.call(null,seq__33155_33173__$1);
var G__33183 = null;
var G__33184 = (0);
var G__33185 = (0);
seq__33155_33161 = G__33182;
chunk__33156_33162 = G__33183;
count__33157_33163 = G__33184;
i__33158_33164 = G__33185;
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

var seq__33190_33194 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__33191_33195 = null;
var count__33192_33196 = (0);
var i__33193_33197 = (0);
while(true){
if((i__33193_33197 < count__33192_33196)){
var node_33198 = cljs.core._nth.call(null,chunk__33191_33195,i__33193_33197);
goog.dom.appendChild(div,node_33198);

var G__33199 = seq__33190_33194;
var G__33200 = chunk__33191_33195;
var G__33201 = count__33192_33196;
var G__33202 = (i__33193_33197 + (1));
seq__33190_33194 = G__33199;
chunk__33191_33195 = G__33200;
count__33192_33196 = G__33201;
i__33193_33197 = G__33202;
continue;
} else {
var temp__4126__auto___33203 = cljs.core.seq.call(null,seq__33190_33194);
if(temp__4126__auto___33203){
var seq__33190_33204__$1 = temp__4126__auto___33203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33190_33204__$1)){
var c__16932__auto___33205 = cljs.core.chunk_first.call(null,seq__33190_33204__$1);
var G__33206 = cljs.core.chunk_rest.call(null,seq__33190_33204__$1);
var G__33207 = c__16932__auto___33205;
var G__33208 = cljs.core.count.call(null,c__16932__auto___33205);
var G__33209 = (0);
seq__33190_33194 = G__33206;
chunk__33191_33195 = G__33207;
count__33192_33196 = G__33208;
i__33193_33197 = G__33209;
continue;
} else {
var node_33210 = cljs.core.first.call(null,seq__33190_33204__$1);
goog.dom.appendChild(div,node_33210);

var G__33211 = cljs.core.next.call(null,seq__33190_33204__$1);
var G__33212 = null;
var G__33213 = (0);
var G__33214 = (0);
seq__33190_33194 = G__33211;
chunk__33191_33195 = G__33212;
count__33192_33196 = G__33213;
i__33193_33197 = G__33214;
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
return (function (p1__33215_SHARP_){
var id = p1__33215_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__33215_SHARP_.setAttribute("id",rid);
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
var vec__33217 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__33217,(0),null);
var txt = cljs.core.nth.call(null,vec__33217,(1),null);
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

var seq__33222_33226 = cljs.core.seq.call(null,dfa);
var chunk__33223_33227 = null;
var count__33224_33228 = (0);
var i__33225_33229 = (0);
while(true){
if((i__33225_33229 < count__33224_33228)){
var df_33230 = cljs.core._nth.call(null,chunk__33223_33227,i__33225_33229);
goog.dom.append(frag,df_33230);

var G__33231 = seq__33222_33226;
var G__33232 = chunk__33223_33227;
var G__33233 = count__33224_33228;
var G__33234 = (i__33225_33229 + (1));
seq__33222_33226 = G__33231;
chunk__33223_33227 = G__33232;
count__33224_33228 = G__33233;
i__33225_33229 = G__33234;
continue;
} else {
var temp__4126__auto___33235 = cljs.core.seq.call(null,seq__33222_33226);
if(temp__4126__auto___33235){
var seq__33222_33236__$1 = temp__4126__auto___33235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33222_33236__$1)){
var c__16932__auto___33237 = cljs.core.chunk_first.call(null,seq__33222_33236__$1);
var G__33238 = cljs.core.chunk_rest.call(null,seq__33222_33236__$1);
var G__33239 = c__16932__auto___33237;
var G__33240 = cljs.core.count.call(null,c__16932__auto___33237);
var G__33241 = (0);
seq__33222_33226 = G__33238;
chunk__33223_33227 = G__33239;
count__33224_33228 = G__33240;
i__33225_33229 = G__33241;
continue;
} else {
var df_33242 = cljs.core.first.call(null,seq__33222_33236__$1);
goog.dom.append(frag,df_33242);

var G__33243 = cljs.core.next.call(null,seq__33222_33236__$1);
var G__33244 = null;
var G__33245 = (0);
var G__33246 = (0);
seq__33222_33226 = G__33243;
chunk__33223_33227 = G__33244;
count__33224_33228 = G__33245;
i__33225_33229 = G__33246;
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
var vec__33249 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__33249,(0),null);
var tdom = cljs.core.nth.call(null,vec__33249,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__33249,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__33247_SHARP_){
return p1__33247_SHARP_.outerHTML;
});})(vec__33249,sym,tdom,dom,tsnip,sel_str,cache))
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
if(typeof enfocus.core.t33254 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t33254 = (function (trans,filt,func,extr_multi_node,meta33255){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta33255 = meta33255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t33254.prototype.call = ((function (trans){
return (function() {
var G__33258 = null;
var G__33258__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__33258__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__33258 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__33258__2.call(this,self__,nodes);
case 3:
return G__33258__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33258.cljs$core$IFn$_invoke$arity$2 = G__33258__2;
G__33258.cljs$core$IFn$_invoke$arity$3 = G__33258__3;
return G__33258;
})()
;})(trans))
;

enfocus.core.t33254.prototype.apply = ((function (trans){
return (function (self__,args33257){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33257)));
});})(trans))
;

enfocus.core.t33254.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33254.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33254.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t33254.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33254.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33254.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_33256){
var self__ = this;
var _33256__$1 = this;
return self__.meta33255;
});})(trans))
;

enfocus.core.t33254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_33256,meta33255__$1){
var self__ = this;
var _33256__$1 = this;
return (new enfocus.core.t33254(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta33255__$1));
});})(trans))
;

enfocus.core.t33254.cljs$lang$type = true;

enfocus.core.t33254.cljs$lang$ctorStr = "enfocus.core/t33254";

enfocus.core.t33254.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"enfocus.core/t33254");
});})(trans))
;

enfocus.core.__GT_t33254 = ((function (trans){
return (function __GT_t33254(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta33255){
return (new enfocus.core.t33254(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta33255));
});})(trans))
;

}

return (new enfocus.core.t33254(trans,filt,func,extr_multi_node,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof enfocus.core.t33268 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t33268 = (function (trans,func,multi_node_chain,meta33269){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta33269 = meta33269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t33268.prototype.call = ((function (trans){
return (function() {
var G__33276 = null;
var G__33276__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__33276__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__33276 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__33276__2.call(this,self__,nodes);
case 3:
return G__33276__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33276.cljs$core$IFn$_invoke$arity$2 = G__33276__2;
G__33276.cljs$core$IFn$_invoke$arity$3 = G__33276__3;
return G__33276;
})()
;})(trans))
;

enfocus.core.t33268.prototype.apply = ((function (trans){
return (function (self__,args33271){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33271)));
});})(trans))
;

enfocus.core.t33268.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33268.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33268.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t33268.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33268.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_33270){
var self__ = this;
var _33270__$1 = this;
return self__.meta33269;
});})(trans))
;

enfocus.core.t33268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_33270,meta33269__$1){
var self__ = this;
var _33270__$1 = this;
return (new enfocus.core.t33268(self__.trans,self__.func,self__.multi_node_chain,meta33269__$1));
});})(trans))
;

enfocus.core.t33268.cljs$lang$type = true;

enfocus.core.t33268.cljs$lang$ctorStr = "enfocus.core/t33268";

enfocus.core.t33268.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"enfocus.core/t33268");
});})(trans))
;

enfocus.core.__GT_t33268 = ((function (trans){
return (function __GT_t33268(trans__$1,func__$1,multi_node_chain__$1,meta33269){
return (new enfocus.core.t33268(trans__$1,func__$1,multi_node_chain__$1,meta33269));
});})(trans))
;

}

return (new enfocus.core.t33268(trans,func,multi_node_chain,cljs.core.PersistentArrayMap.EMPTY));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__33259_SHARP_){
return domina.nodes.call(null,p1__33259_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t33272 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t33272 = (function (trans,func,values,multi_node_chain,meta33273){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta33273 = meta33273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t33272.prototype.call = ((function (trans){
return (function() {
var G__33277 = null;
var G__33277__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__33277__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__33277 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__33277__2.call(this,self__,nodes);
case 3:
return G__33277__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33277.cljs$core$IFn$_invoke$arity$2 = G__33277__2;
G__33277.cljs$core$IFn$_invoke$arity$3 = G__33277__3;
return G__33277;
})()
;})(trans))
;

enfocus.core.t33272.prototype.apply = ((function (trans){
return (function (self__,args33275){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33275)));
});})(trans))
;

enfocus.core.t33272.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33272.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33272.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t33272.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33272.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_33274){
var self__ = this;
var _33274__$1 = this;
return self__.meta33273;
});})(trans))
;

enfocus.core.t33272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_33274,meta33273__$1){
var self__ = this;
var _33274__$1 = this;
return (new enfocus.core.t33272(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta33273__$1));
});})(trans))
;

enfocus.core.t33272.cljs$lang$type = true;

enfocus.core.t33272.cljs$lang$ctorStr = "enfocus.core/t33272";

enfocus.core.t33272.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"enfocus.core/t33272");
});})(trans))
;

enfocus.core.__GT_t33272 = ((function (trans){
return (function __GT_t33272(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta33273){
return (new enfocus.core.t33272(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta33273));
});})(trans))
;

}

return (new enfocus.core.t33272(trans,func,values,multi_node_chain,cljs.core.PersistentArrayMap.EMPTY));
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__33278_SHARP_,p2__33279_SHARP_){
domina.destroy_children_BANG_.call(null,p1__33278_SHARP_);

return domina.append_BANG_.call(null,p1__33278_SHARP_,p2__33279_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33280__i = 0, G__33280__a = new Array(arguments.length -  0);
while (G__33280__i < G__33280__a.length) {G__33280__a[G__33280__i] = arguments[G__33280__i + 0]; ++G__33280__i;}
  values = new cljs.core.IndexedSeq(G__33280__a,0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__33281){
var values = cljs.core.seq(arglist__33281);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33282_SHARP_){
return domina.set_html_BANG_.call(null,p1__33282_SHARP_,txt);
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
return (function (p1__33283_SHARP_){
var seq__33290 = cljs.core.seq.call(null,pairs);
var chunk__33291 = null;
var count__33292 = (0);
var i__33293 = (0);
while(true){
if((i__33293 < count__33292)){
var vec__33294 = cljs.core._nth.call(null,chunk__33291,i__33293);
var name = cljs.core.nth.call(null,vec__33294,(0),null);
var value = cljs.core.nth.call(null,vec__33294,(1),null);
domina.set_attr_BANG_.call(null,p1__33283_SHARP_,name,value);

var G__33296 = seq__33290;
var G__33297 = chunk__33291;
var G__33298 = count__33292;
var G__33299 = (i__33293 + (1));
seq__33290 = G__33296;
chunk__33291 = G__33297;
count__33292 = G__33298;
i__33293 = G__33299;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33290);
if(temp__4126__auto__){
var seq__33290__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33290__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33290__$1);
var G__33300 = cljs.core.chunk_rest.call(null,seq__33290__$1);
var G__33301 = c__16932__auto__;
var G__33302 = cljs.core.count.call(null,c__16932__auto__);
var G__33303 = (0);
seq__33290 = G__33300;
chunk__33291 = G__33301;
count__33292 = G__33302;
i__33293 = G__33303;
continue;
} else {
var vec__33295 = cljs.core.first.call(null,seq__33290__$1);
var name = cljs.core.nth.call(null,vec__33295,(0),null);
var value = cljs.core.nth.call(null,vec__33295,(1),null);
domina.set_attr_BANG_.call(null,p1__33283_SHARP_,name,value);

var G__33304 = cljs.core.next.call(null,seq__33290__$1);
var G__33305 = null;
var G__33306 = (0);
var G__33307 = (0);
seq__33290 = G__33304;
chunk__33291 = G__33305;
count__33292 = G__33306;
i__33293 = G__33307;
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
var G__33308__i = 0, G__33308__a = new Array(arguments.length -  0);
while (G__33308__i < G__33308__a.length) {G__33308__a[G__33308__i] = arguments[G__33308__i + 0]; ++G__33308__i;}
  values = new cljs.core.IndexedSeq(G__33308__a,0);
} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__33309){
var values = cljs.core.seq(arglist__33309);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33310_SHARP_){
var seq__33315 = cljs.core.seq.call(null,values);
var chunk__33316 = null;
var count__33317 = (0);
var i__33318 = (0);
while(true){
if((i__33318 < count__33317)){
var name = cljs.core._nth.call(null,chunk__33316,i__33318);
domina.remove_attr_BANG_.call(null,p1__33310_SHARP_,name);

var G__33319 = seq__33315;
var G__33320 = chunk__33316;
var G__33321 = count__33317;
var G__33322 = (i__33318 + (1));
seq__33315 = G__33319;
chunk__33316 = G__33320;
count__33317 = G__33321;
i__33318 = G__33322;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33315);
if(temp__4126__auto__){
var seq__33315__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33315__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33315__$1);
var G__33323 = cljs.core.chunk_rest.call(null,seq__33315__$1);
var G__33324 = c__16932__auto__;
var G__33325 = cljs.core.count.call(null,c__16932__auto__);
var G__33326 = (0);
seq__33315 = G__33323;
chunk__33316 = G__33324;
count__33317 = G__33325;
i__33318 = G__33326;
continue;
} else {
var name = cljs.core.first.call(null,seq__33315__$1);
domina.remove_attr_BANG_.call(null,p1__33310_SHARP_,name);

var G__33327 = cljs.core.next.call(null,seq__33315__$1);
var G__33328 = null;
var G__33329 = (0);
var G__33330 = (0);
seq__33315 = G__33327;
chunk__33316 = G__33328;
count__33317 = G__33329;
i__33318 = G__33330;
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
var G__33331__i = 0, G__33331__a = new Array(arguments.length -  0);
while (G__33331__i < G__33331__a.length) {G__33331__a[G__33331__i] = arguments[G__33331__i + 0]; ++G__33331__i;}
  values = new cljs.core.IndexedSeq(G__33331__a,0);
} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__33332){
var values = cljs.core.seq(arglist__33332);
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
var h = cljs.core.mapcat.call(null,(function (p__33335){
var vec__33336 = p__33335;
var n = cljs.core.nth.call(null,vec__33336,(0),null);
var v = cljs.core.nth.call(null,vec__33336,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,(2),forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;
if (arguments.length > 0) {
var G__33337__i = 0, G__33337__a = new Array(arguments.length -  0);
while (G__33337__i < G__33337__a.length) {G__33337__a[G__33337__i] = arguments[G__33337__i + 0]; ++G__33337__i;}
  forms = new cljs.core.IndexedSeq(G__33337__a,0);
} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__33338){
var forms = cljs.core.seq(arglist__33338);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33339_SHARP_){
var seq__33344 = cljs.core.seq.call(null,values);
var chunk__33345 = null;
var count__33346 = (0);
var i__33347 = (0);
while(true){
if((i__33347 < count__33346)){
var val = cljs.core._nth.call(null,chunk__33345,i__33347);
domina.add_class_BANG_.call(null,p1__33339_SHARP_,val);

var G__33348 = seq__33344;
var G__33349 = chunk__33345;
var G__33350 = count__33346;
var G__33351 = (i__33347 + (1));
seq__33344 = G__33348;
chunk__33345 = G__33349;
count__33346 = G__33350;
i__33347 = G__33351;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33344);
if(temp__4126__auto__){
var seq__33344__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33344__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33344__$1);
var G__33352 = cljs.core.chunk_rest.call(null,seq__33344__$1);
var G__33353 = c__16932__auto__;
var G__33354 = cljs.core.count.call(null,c__16932__auto__);
var G__33355 = (0);
seq__33344 = G__33352;
chunk__33345 = G__33353;
count__33346 = G__33354;
i__33347 = G__33355;
continue;
} else {
var val = cljs.core.first.call(null,seq__33344__$1);
domina.add_class_BANG_.call(null,p1__33339_SHARP_,val);

var G__33356 = cljs.core.next.call(null,seq__33344__$1);
var G__33357 = null;
var G__33358 = (0);
var G__33359 = (0);
seq__33344 = G__33356;
chunk__33345 = G__33357;
count__33346 = G__33358;
i__33347 = G__33359;
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
var G__33360__i = 0, G__33360__a = new Array(arguments.length -  0);
while (G__33360__i < G__33360__a.length) {G__33360__a[G__33360__i] = arguments[G__33360__i + 0]; ++G__33360__i;}
  values = new cljs.core.IndexedSeq(G__33360__a,0);
} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__33361){
var values = cljs.core.seq(arglist__33361);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33362_SHARP_){
var seq__33367 = cljs.core.seq.call(null,values);
var chunk__33368 = null;
var count__33369 = (0);
var i__33370 = (0);
while(true){
if((i__33370 < count__33369)){
var val = cljs.core._nth.call(null,chunk__33368,i__33370);
domina.remove_class_BANG_.call(null,p1__33362_SHARP_,val);

var G__33371 = seq__33367;
var G__33372 = chunk__33368;
var G__33373 = count__33369;
var G__33374 = (i__33370 + (1));
seq__33367 = G__33371;
chunk__33368 = G__33372;
count__33369 = G__33373;
i__33370 = G__33374;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33367);
if(temp__4126__auto__){
var seq__33367__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33367__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33367__$1);
var G__33375 = cljs.core.chunk_rest.call(null,seq__33367__$1);
var G__33376 = c__16932__auto__;
var G__33377 = cljs.core.count.call(null,c__16932__auto__);
var G__33378 = (0);
seq__33367 = G__33375;
chunk__33368 = G__33376;
count__33369 = G__33377;
i__33370 = G__33378;
continue;
} else {
var val = cljs.core.first.call(null,seq__33367__$1);
domina.remove_class_BANG_.call(null,p1__33362_SHARP_,val);

var G__33379 = cljs.core.next.call(null,seq__33367__$1);
var G__33380 = null;
var G__33381 = (0);
var G__33382 = (0);
seq__33367 = G__33379;
chunk__33368 = G__33380;
count__33369 = G__33381;
i__33370 = G__33382;
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
var G__33383__i = 0, G__33383__a = new Array(arguments.length -  0);
while (G__33383__i < G__33383__a.length) {G__33383__a[G__33383__i] = arguments[G__33383__i + 0]; ++G__33383__i;}
  values = new cljs.core.IndexedSeq(G__33383__a,0);
} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__33384){
var values = cljs.core.seq(arglist__33384);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33385_SHARP_){
return domina.set_classes_BANG_.call(null,p1__33385_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33386__i = 0, G__33386__a = new Array(arguments.length -  0);
while (G__33386__i < G__33386__a.length) {G__33386__a[G__33386__i] = arguments[G__33386__i + 0]; ++G__33386__i;}
  values = new cljs.core.IndexedSeq(G__33386__a,0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__33387){
var values = cljs.core.seq(arglist__33387);
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
var seq__33392 = cljs.core.seq.call(null,forms);
var chunk__33393 = null;
var count__33394 = (0);
var i__33395 = (0);
while(true){
if((i__33395 < count__33394)){
var fun = cljs.core._nth.call(null,chunk__33393,i__33395);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__33396 = seq__33392;
var G__33397 = chunk__33393;
var G__33398 = count__33394;
var G__33399 = (i__33395 + (1));
seq__33392 = G__33396;
chunk__33393 = G__33397;
count__33394 = G__33398;
i__33395 = G__33399;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33392);
if(temp__4126__auto__){
var seq__33392__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33392__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33392__$1);
var G__33400 = cljs.core.chunk_rest.call(null,seq__33392__$1);
var G__33401 = c__16932__auto__;
var G__33402 = cljs.core.count.call(null,c__16932__auto__);
var G__33403 = (0);
seq__33392 = G__33400;
chunk__33393 = G__33401;
count__33394 = G__33402;
i__33395 = G__33403;
continue;
} else {
var fun = cljs.core.first.call(null,seq__33392__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__33404 = cljs.core.next.call(null,seq__33392__$1);
var G__33405 = null;
var G__33406 = (0);
var G__33407 = (0);
seq__33392 = G__33404;
chunk__33393 = G__33405;
count__33394 = G__33406;
i__33395 = G__33407;
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
var G__33408__i = 0, G__33408__a = new Array(arguments.length -  0);
while (G__33408__i < G__33408__a.length) {G__33408__a[G__33408__i] = arguments[G__33408__i + 0]; ++G__33408__i;}
  forms = new cljs.core.IndexedSeq(G__33408__a,0);
} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__33409){
var forms = cljs.core.seq(arglist__33409);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__33410_SHARP_,p2__33411_SHARP_){
return domina.append_BANG_.call(null,p1__33410_SHARP_,p2__33411_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33412__i = 0, G__33412__a = new Array(arguments.length -  0);
while (G__33412__i < G__33412__a.length) {G__33412__a[G__33412__i] = arguments[G__33412__i + 0]; ++G__33412__i;}
  values = new cljs.core.IndexedSeq(G__33412__a,0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__33413){
var values = cljs.core.seq(arglist__33413);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__33414_SHARP_,p2__33415_SHARP_){
return domina.prepend_BANG_.call(null,p1__33414_SHARP_,p2__33415_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33416__i = 0, G__33416__a = new Array(arguments.length -  0);
while (G__33416__i < G__33416__a.length) {G__33416__a[G__33416__i] = arguments[G__33416__i + 0]; ++G__33416__i;}
  values = new cljs.core.IndexedSeq(G__33416__a,0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__33417){
var values = cljs.core.seq(arglist__33417);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__33418_SHARP_,p2__33419_SHARP_){
return domina.insert_before_BANG_.call(null,p1__33418_SHARP_,p2__33419_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33420__i = 0, G__33420__a = new Array(arguments.length -  0);
while (G__33420__i < G__33420__a.length) {G__33420__a[G__33420__i] = arguments[G__33420__i + 0]; ++G__33420__i;}
  values = new cljs.core.IndexedSeq(G__33420__a,0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__33421){
var values = cljs.core.seq(arglist__33421);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__33422_SHARP_,p2__33423_SHARP_){
return domina.insert_after_BANG_.call(null,p1__33422_SHARP_,p2__33423_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33424__i = 0, G__33424__a = new Array(arguments.length -  0);
while (G__33424__i < G__33424__a.length) {G__33424__a[G__33424__i] = arguments[G__33424__i + 0]; ++G__33424__i;}
  values = new cljs.core.IndexedSeq(G__33424__a,0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__33425){
var values = cljs.core.seq(arglist__33425);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__33426_SHARP_,p2__33427_SHARP_){
return domina.swap_content_BANG_.call(null,p1__33426_SHARP_,p2__33427_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__33428__i = 0, G__33428__a = new Array(arguments.length -  0);
while (G__33428__i < G__33428__a.length) {G__33428__a[G__33428__i] = arguments[G__33428__i + 0]; ++G__33428__i;}
  values = new cljs.core.IndexedSeq(G__33428__a,0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__33429){
var values = cljs.core.seq(arglist__33429);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33430_SHARP_){
return domina.detach_BANG_.call(null,p1__33430_SHARP_);
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
return (function (p1__33431_SHARP_){
var seq__33438 = cljs.core.seq.call(null,pairs);
var chunk__33439 = null;
var count__33440 = (0);
var i__33441 = (0);
while(true){
if((i__33441 < count__33440)){
var vec__33442 = cljs.core._nth.call(null,chunk__33439,i__33441);
var name = cljs.core.nth.call(null,vec__33442,(0),null);
var value = cljs.core.nth.call(null,vec__33442,(1),null);
domina.set_style_BANG_.call(null,p1__33431_SHARP_,name,value);

var G__33444 = seq__33438;
var G__33445 = chunk__33439;
var G__33446 = count__33440;
var G__33447 = (i__33441 + (1));
seq__33438 = G__33444;
chunk__33439 = G__33445;
count__33440 = G__33446;
i__33441 = G__33447;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33438);
if(temp__4126__auto__){
var seq__33438__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33438__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33438__$1);
var G__33448 = cljs.core.chunk_rest.call(null,seq__33438__$1);
var G__33449 = c__16932__auto__;
var G__33450 = cljs.core.count.call(null,c__16932__auto__);
var G__33451 = (0);
seq__33438 = G__33448;
chunk__33439 = G__33449;
count__33440 = G__33450;
i__33441 = G__33451;
continue;
} else {
var vec__33443 = cljs.core.first.call(null,seq__33438__$1);
var name = cljs.core.nth.call(null,vec__33443,(0),null);
var value = cljs.core.nth.call(null,vec__33443,(1),null);
domina.set_style_BANG_.call(null,p1__33431_SHARP_,name,value);

var G__33452 = cljs.core.next.call(null,seq__33438__$1);
var G__33453 = null;
var G__33454 = (0);
var G__33455 = (0);
seq__33438 = G__33452;
chunk__33439 = G__33453;
count__33440 = G__33454;
i__33441 = G__33455;
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
var G__33456__i = 0, G__33456__a = new Array(arguments.length -  0);
while (G__33456__i < G__33456__a.length) {G__33456__a[G__33456__i] = arguments[G__33456__i + 0]; ++G__33456__i;}
  values = new cljs.core.IndexedSeq(G__33456__a,0);
} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__33457){
var values = cljs.core.seq(arglist__33457);
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
var G__33458__i = 0, G__33458__a = new Array(arguments.length -  0);
while (G__33458__i < G__33458__a.length) {G__33458__a[G__33458__i] = arguments[G__33458__i + 0]; ++G__33458__i;}
  values = new cljs.core.IndexedSeq(G__33458__a,0);
} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__33459){
var values = cljs.core.seq(arglist__33459);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__33460_SHARP_){
return domina.set_data_BANG_.call(null,p1__33460_SHARP_,ky,val);
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
var G__33461__i = 0, G__33461__a = new Array(arguments.length -  1);
while (G__33461__i < G__33461__a.length) {G__33461__a[G__33461__i] = arguments[G__33461__i + 1]; ++G__33461__i;}
  funcs = new cljs.core.IndexedSeq(G__33461__a,0);
} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__33462){
var ttime = cljs.core.first(arglist__33462);
var funcs = cljs.core.rest(arglist__33462);
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
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__33464_SHARP_,p2__33463_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__33463_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__33489_33497 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__33490_33498 = null;
var count__33491_33499 = (0);
var i__33492_33500 = (0);
while(true){
if((i__33492_33500 < count__33491_33499)){
var idx_33501 = cljs.core._nth.call(null,chunk__33490_33498,i__33492_33500);
var attr_33502 = pnod.attributes.item(idx_33501);
if(cljs.core.truth_(attr_33502.specified)){
attr_33502.value = rep_str.call(null,attr_33502.value);
} else {
}

var G__33503 = seq__33489_33497;
var G__33504 = chunk__33490_33498;
var G__33505 = count__33491_33499;
var G__33506 = (i__33492_33500 + (1));
seq__33489_33497 = G__33503;
chunk__33490_33498 = G__33504;
count__33491_33499 = G__33505;
i__33492_33500 = G__33506;
continue;
} else {
var temp__4126__auto___33507 = cljs.core.seq.call(null,seq__33489_33497);
if(temp__4126__auto___33507){
var seq__33489_33508__$1 = temp__4126__auto___33507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33489_33508__$1)){
var c__16932__auto___33509 = cljs.core.chunk_first.call(null,seq__33489_33508__$1);
var G__33510 = cljs.core.chunk_rest.call(null,seq__33489_33508__$1);
var G__33511 = c__16932__auto___33509;
var G__33512 = cljs.core.count.call(null,c__16932__auto___33509);
var G__33513 = (0);
seq__33489_33497 = G__33510;
chunk__33490_33498 = G__33511;
count__33491_33499 = G__33512;
i__33492_33500 = G__33513;
continue;
} else {
var idx_33514 = cljs.core.first.call(null,seq__33489_33508__$1);
var attr_33515 = pnod.attributes.item(idx_33514);
if(cljs.core.truth_(attr_33515.specified)){
attr_33515.value = rep_str.call(null,attr_33515.value);
} else {
}

var G__33516 = cljs.core.next.call(null,seq__33489_33508__$1);
var G__33517 = null;
var G__33518 = (0);
var G__33519 = (0);
seq__33489_33497 = G__33516;
chunk__33490_33498 = G__33517;
count__33491_33499 = G__33518;
i__33492_33500 = G__33519;
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
var seq__33493 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__33494 = null;
var count__33495 = (0);
var i__33496 = (0);
while(true){
if((i__33496 < count__33495)){
var cnode = cljs.core._nth.call(null,chunk__33494,i__33496);
rep_node.call(null,cnode);

var G__33520 = seq__33493;
var G__33521 = chunk__33494;
var G__33522 = count__33495;
var G__33523 = (i__33496 + (1));
seq__33493 = G__33520;
chunk__33494 = G__33521;
count__33495 = G__33522;
i__33496 = G__33523;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33493);
if(temp__4126__auto__){
var seq__33493__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33493__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33493__$1);
var G__33524 = cljs.core.chunk_rest.call(null,seq__33493__$1);
var G__33525 = c__16932__auto__;
var G__33526 = cljs.core.count.call(null,c__16932__auto__);
var G__33527 = (0);
seq__33493 = G__33524;
chunk__33494 = G__33525;
count__33495 = G__33526;
i__33496 = G__33527;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__33493__$1);
rep_node.call(null,cnode);

var G__33528 = cljs.core.next.call(null,seq__33493__$1);
var G__33529 = null;
var G__33530 = (0);
var G__33531 = (0);
seq__33493 = G__33528;
chunk__33494 = G__33529;
count__33495 = G__33530;
i__33496 = G__33531;
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
var seq__33536 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__33537 = null;
var count__33538 = (0);
var i__33539 = (0);
while(true){
if((i__33539 < count__33538)){
var idx = cljs.core._nth.call(null,chunk__33537,i__33539);
var el_33540 = (form_node.elements[idx]);
var ky_33541 = cljs.core.keyword.call(null,el_33540.name);
var val_33542 = ky_33541.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_33541)){
var val_33543__$1 = (cljs.core.truth_(val_33542)?val_33542:"");
enfocus.core.set_form_input.call(null,val_33543__$1).call(null,el_33540);
} else {
}

var G__33544 = seq__33536;
var G__33545 = chunk__33537;
var G__33546 = count__33538;
var G__33547 = (i__33539 + (1));
seq__33536 = G__33544;
chunk__33537 = G__33545;
count__33538 = G__33546;
i__33539 = G__33547;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33536);
if(temp__4126__auto__){
var seq__33536__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33536__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33536__$1);
var G__33548 = cljs.core.chunk_rest.call(null,seq__33536__$1);
var G__33549 = c__16932__auto__;
var G__33550 = cljs.core.count.call(null,c__16932__auto__);
var G__33551 = (0);
seq__33536 = G__33548;
chunk__33537 = G__33549;
count__33538 = G__33550;
i__33539 = G__33551;
continue;
} else {
var idx = cljs.core.first.call(null,seq__33536__$1);
var el_33552 = (form_node.elements[idx]);
var ky_33553 = cljs.core.keyword.call(null,el_33552.name);
var val_33554 = ky_33553.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_33553)){
var val_33555__$1 = (cljs.core.truth_(val_33554)?val_33554:"");
enfocus.core.set_form_input.call(null,val_33555__$1).call(null,el_33552);
} else {
}

var G__33556 = cljs.core.next.call(null,seq__33536__$1);
var G__33557 = null;
var G__33558 = (0);
var G__33559 = (0);
seq__33536 = G__33556;
chunk__33537 = G__33557;
count__33538 = G__33558;
i__33539 = G__33559;
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
var vec__33569 = node_spec;
var tag = cljs.core.nth.call(null,vec__33569,(0),null);
var vec__33570 = cljs.core.nthnext.call(null,vec__33569,(1));
var m = cljs.core.nth.call(null,vec__33570,(0),null);
var ms = cljs.core.nthnext.call(null,vec__33570,(1));
var more = vec__33570;
var vec__33571 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__33571,(0),null);
var segments = cljs.core.nthnext.call(null,vec__33571,(1));
var id = cljs.core.some.call(null,((function (vec__33569,tag,vec__33570,m,ms,more,vec__33571,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__33569,tag,vec__33570,m,ms,more,vec__33571,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__33569,tag,vec__33570,m,ms,more,vec__33571,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__33569,tag,vec__33570,m,ms,more,vec__33571,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__33572_33578 = cljs.core.seq.call(null,attrs__$2);
var chunk__33573_33579 = null;
var count__33574_33580 = (0);
var i__33575_33581 = (0);
while(true){
if((i__33575_33581 < count__33574_33580)){
var vec__33576_33582 = cljs.core._nth.call(null,chunk__33573_33579,i__33575_33581);
var key_33583 = cljs.core.nth.call(null,vec__33576_33582,(0),null);
var val_33584 = cljs.core.nth.call(null,vec__33576_33582,(1),null);
node.setAttribute(cljs.core.name.call(null,key_33583),val_33584);

var G__33585 = seq__33572_33578;
var G__33586 = chunk__33573_33579;
var G__33587 = count__33574_33580;
var G__33588 = (i__33575_33581 + (1));
seq__33572_33578 = G__33585;
chunk__33573_33579 = G__33586;
count__33574_33580 = G__33587;
i__33575_33581 = G__33588;
continue;
} else {
var temp__4126__auto___33589 = cljs.core.seq.call(null,seq__33572_33578);
if(temp__4126__auto___33589){
var seq__33572_33590__$1 = temp__4126__auto___33589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33572_33590__$1)){
var c__16932__auto___33591 = cljs.core.chunk_first.call(null,seq__33572_33590__$1);
var G__33592 = cljs.core.chunk_rest.call(null,seq__33572_33590__$1);
var G__33593 = c__16932__auto___33591;
var G__33594 = cljs.core.count.call(null,c__16932__auto___33591);
var G__33595 = (0);
seq__33572_33578 = G__33592;
chunk__33573_33579 = G__33593;
count__33574_33580 = G__33594;
i__33575_33581 = G__33595;
continue;
} else {
var vec__33577_33596 = cljs.core.first.call(null,seq__33572_33590__$1);
var key_33597 = cljs.core.nth.call(null,vec__33577_33596,(0),null);
var val_33598 = cljs.core.nth.call(null,vec__33577_33596,(1),null);
node.setAttribute(cljs.core.name.call(null,key_33597),val_33598);

var G__33599 = cljs.core.next.call(null,seq__33572_33590__$1);
var G__33600 = null;
var G__33601 = (0);
var G__33602 = (0);
seq__33572_33578 = G__33599;
chunk__33573_33579 = G__33600;
count__33574_33580 = G__33601;
i__33575_33581 = G__33602;
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
return (function (p1__33604_SHARP_,p2__33603_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__33603_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__33604_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__33604_SHARP_,vals);
} else {
return p1__33604_SHARP_;
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
if(typeof enfocus.core.t33609 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t33609 = (function (trans,read_form_input,meta33610){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta33610 = meta33610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t33609.prototype.call = ((function (trans){
return (function() {
var G__33613 = null;
var G__33613__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__33613__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__33613 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__33613__2.call(this,self__,nodes);
case 3:
return G__33613__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33613.cljs$core$IFn$_invoke$arity$2 = G__33613__2;
G__33613.cljs$core$IFn$_invoke$arity$3 = G__33613__3;
return G__33613;
})()
;})(trans))
;

enfocus.core.t33609.prototype.apply = ((function (trans){
return (function (self__,args33612){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33612)));
});})(trans))
;

enfocus.core.t33609.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33609.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33609.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t33609.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t33609.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t33609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_33611){
var self__ = this;
var _33611__$1 = this;
return self__.meta33610;
});})(trans))
;

enfocus.core.t33609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_33611,meta33610__$1){
var self__ = this;
var _33611__$1 = this;
return (new enfocus.core.t33609(self__.trans,self__.read_form_input,meta33610__$1));
});})(trans))
;

enfocus.core.t33609.cljs$lang$type = true;

enfocus.core.t33609.cljs$lang$ctorStr = "enfocus.core/t33609";

enfocus.core.t33609.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"enfocus.core/t33609");
});})(trans))
;

enfocus.core.__GT_t33609 = ((function (trans){
return (function __GT_t33609(trans__$1,read_form_input__$1,meta33610){
return (new enfocus.core.t33609(trans__$1,read_form_input__$1,meta33610));
});})(trans))
;

}

return (new enfocus.core.t33609(trans,read_form_input,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__33615_SHARP_,p2__33614_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__33614_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__33615_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__33614_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__33614_SHARP_)));
} else {
return p1__33615_SHARP_;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__33616_SHARP_){
if((p1__33616_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__33616_SHARP_);
} else {
if((p1__33616_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__33616_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__33616_SHARP_)){
return create_sel_str.call(null,p1__33616_SHARP_);
} else {
if(typeof p1__33616_SHARP_ === 'string'){
return p1__33616_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var G__33627 = node;
if(G__33627){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__33627.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__33627.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__33627);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__33627);
}
} else {
return and__16133__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__33628 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__33628,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__33628,(1),null);
var seq__33629 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__33630 = null;
var count__33631 = (0);
var i__33632 = (0);
while(true){
if((i__33632 < count__33631)){
var vec__33633 = cljs.core._nth.call(null,chunk__33630,i__33632);
var sel = cljs.core.nth.call(null,vec__33633,(0),null);
var t = cljs.core.nth.call(null,vec__33633,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__33635 = seq__33629;
var G__33636 = chunk__33630;
var G__33637 = count__33631;
var G__33638 = (i__33632 + (1));
seq__33629 = G__33635;
chunk__33630 = G__33636;
count__33631 = G__33637;
i__33632 = G__33638;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33629);
if(temp__4126__auto__){
var seq__33629__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33629__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33629__$1);
var G__33639 = cljs.core.chunk_rest.call(null,seq__33629__$1);
var G__33640 = c__16932__auto__;
var G__33641 = cljs.core.count.call(null,c__16932__auto__);
var G__33642 = (0);
seq__33629 = G__33639;
chunk__33630 = G__33640;
count__33631 = G__33641;
i__33632 = G__33642;
continue;
} else {
var vec__33634 = cljs.core.first.call(null,seq__33629__$1);
var sel = cljs.core.nth.call(null,vec__33634,(0),null);
var t = cljs.core.nth.call(null,vec__33634,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__33643 = cljs.core.next.call(null,seq__33629__$1);
var G__33644 = null;
var G__33645 = (0);
var G__33646 = (0);
seq__33629 = G__33643;
chunk__33630 = G__33644;
count__33631 = G__33645;
i__33632 = G__33646;
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
var G__33647__i = 0, G__33647__a = new Array(arguments.length -  2);
while (G__33647__i < G__33647__a.length) {G__33647__a[G__33647__i] = arguments[G__33647__i + 2]; ++G__33647__i;}
  trans = new cljs.core.IndexedSeq(G__33647__a,0);
} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__33648){
var id_mask = cljs.core.first(arglist__33648);
arglist__33648 = cljs.core.next(arglist__33648);
var node = cljs.core.first(arglist__33648);
var trans = cljs.core.rest(arglist__33648);
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
var G__33649__i = 0, G__33649__a = new Array(arguments.length -  1);
while (G__33649__i < G__33649__a.length) {G__33649__a[G__33649__i] = arguments[G__33649__i + 1]; ++G__33649__i;}
  trans = new cljs.core.IndexedSeq(G__33649__a,0);
} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__33650){
var node = cljs.core.first(arglist__33650);
var trans = cljs.core.rest(arglist__33650);
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
var sel_QMARK_ = (function (){var G__33655 = node;
if(G__33655){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__33655.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__33655.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__33655);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__33655);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__33656 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__33656,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__33656,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__33656,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__33657){
var vec__33658 = p__33657;
var ky = cljs.core.nth.call(null,vec__33658,(0),null);
var sel = cljs.core.nth.call(null,vec__33658,(1),null);
var ext = cljs.core.nth.call(null,vec__33658,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__33656,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.partition.call(null,(3),trans__$1)));

}
}
};
var from = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
var G__33659__i = 0, G__33659__a = new Array(arguments.length -  1);
while (G__33659__i < G__33659__a.length) {G__33659__a[G__33659__i] = arguments[G__33659__i + 1]; ++G__33659__i;}
  trans = new cljs.core.IndexedSeq(G__33659__a,0);
} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__33660){
var node = cljs.core.first(arglist__33660);
var trans = cljs.core.rest(arglist__33660);
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
var G__33661 = null;
var G__33661__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__33661__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__33661__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__33661 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__33661__1.call(this,this$);
case 2:
return G__33661__2.call(this,this$,root);
case 3:
return G__33661__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33661.cljs$core$IFn$_invoke$arity$1 = G__33661__1;
G__33661.cljs$core$IFn$_invoke$arity$2 = G__33661__2;
G__33661.cljs$core$IFn$_invoke$arity$3 = G__33661__3;
return G__33661;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__33662 = null;
var G__33662__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__33662__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__33662__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__33662 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__33662__1.call(this,this$);
case 2:
return G__33662__2.call(this,this$,root);
case 3:
return G__33662__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33662.cljs$core$IFn$_invoke$arity$1 = G__33662__1;
G__33662.cljs$core$IFn$_invoke$arity$2 = G__33662__2;
G__33662.cljs$core$IFn$_invoke$arity$3 = G__33662__3;
return G__33662;
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
var G__33663 = null;
var G__33663__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__33663__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__33663__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__33663 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__33663__1.call(this,this$);
case 2:
return G__33663__2.call(this,this$,root);
case 3:
return G__33663__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33663.cljs$core$IFn$_invoke$arity$1 = G__33663__1;
G__33663.cljs$core$IFn$_invoke$arity$2 = G__33663__2;
G__33663.cljs$core$IFn$_invoke$arity$3 = G__33663__3;
return G__33663;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__33664 = null;
var G__33664__2 = (function (trans,nodes){
return nodes;
});
var G__33664__3 = (function (trans,nodes,chain){
return nodes;
});
G__33664 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__33664__2.call(this,trans,nodes);
case 3:
return G__33664__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33664.cljs$core$IFn$_invoke$arity$2 = G__33664__2;
G__33664.cljs$core$IFn$_invoke$arity$3 = G__33664__3;
return G__33664;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__33665 = null;
var G__33665__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__33665__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__33665 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__33665__2.call(this,trans,nodes);
case 3:
return G__33665__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33665.cljs$core$IFn$_invoke$arity$2 = G__33665__2;
G__33665.cljs$core$IFn$_invoke$arity$3 = G__33665__3;
return G__33665;
})()
);

//# sourceMappingURL=core.js.map?rel=1435014980913