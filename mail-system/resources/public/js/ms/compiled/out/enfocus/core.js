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







enfocus.core.ISelector = (function (){var obj19650 = {};
return obj19650;
})();

enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.enfocus$core$ISelector$select$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (enfocus.core.select[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (enfocus.core.select["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.enfocus$core$ISelector$select$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (enfocus.core.select[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (enfocus.core.select["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.enfocus$core$ISelector$select$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (enfocus.core.select[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (enfocus.core.select["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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


enfocus.core.ITransform = (function (){var obj19652 = {};
return obj19652;
})();

enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
if(cljs.core.truth_((function (){var and__3803__auto__ = enfocus.core.debug;
if(cljs.core.truth_(and__3803__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__3803__auto__;
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

return cljs.core.mapcat.call(null,(function (p1__19653_SHARP_){
if(typeof p1__19653_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__19653_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__19653_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__19660_19666 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__19661_19667 = null;
var count__19662_19668 = (0);
var i__19663_19669 = (0);
while(true){
if((i__19663_19669 < count__19662_19668)){
var vec__19664_19670 = cljs.core._nth.call(null,chunk__19661_19667,i__19663_19669);
var attr_19671 = cljs.core.nth.call(null,vec__19664_19670,(0),null);
var value_19672 = cljs.core.nth.call(null,vec__19664_19670,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_19671),value_19672);

var G__19673 = seq__19660_19666;
var G__19674 = chunk__19661_19667;
var G__19675 = count__19662_19668;
var G__19676 = (i__19663_19669 + (1));
seq__19660_19666 = G__19673;
chunk__19661_19667 = G__19674;
count__19662_19668 = G__19675;
i__19663_19669 = G__19676;
continue;
} else {
var temp__4126__auto___19677 = cljs.core.seq.call(null,seq__19660_19666);
if(temp__4126__auto___19677){
var seq__19660_19678__$1 = temp__4126__auto___19677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19660_19678__$1)){
var c__4602__auto___19679 = cljs.core.chunk_first.call(null,seq__19660_19678__$1);
var G__19680 = cljs.core.chunk_rest.call(null,seq__19660_19678__$1);
var G__19681 = c__4602__auto___19679;
var G__19682 = cljs.core.count.call(null,c__4602__auto___19679);
var G__19683 = (0);
seq__19660_19666 = G__19680;
chunk__19661_19667 = G__19681;
count__19662_19668 = G__19682;
i__19663_19669 = G__19683;
continue;
} else {
var vec__19665_19684 = cljs.core.first.call(null,seq__19660_19678__$1);
var attr_19685 = cljs.core.nth.call(null,vec__19665_19684,(0),null);
var value_19686 = cljs.core.nth.call(null,vec__19665_19684,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_19685),value_19686);

var G__19687 = cljs.core.next.call(null,seq__19660_19678__$1);
var G__19688 = null;
var G__19689 = (0);
var G__19690 = (0);
seq__19660_19666 = G__19687;
chunk__19661_19667 = G__19688;
count__19662_19668 = G__19689;
i__19663_19669 = G__19690;
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
var seq__19695 = cljs.core.seq.call(null,values);
var chunk__19696 = null;
var count__19697 = (0);
var i__19698 = (0);
while(true){
if((i__19698 < count__19697)){
var attr = cljs.core._nth.call(null,chunk__19696,i__19698);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__19699 = seq__19695;
var G__19700 = chunk__19696;
var G__19701 = count__19697;
var G__19702 = (i__19698 + (1));
seq__19695 = G__19699;
chunk__19696 = G__19700;
count__19697 = G__19701;
i__19698 = G__19702;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19695);
if(temp__4126__auto__){
var seq__19695__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19695__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__19695__$1);
var G__19703 = cljs.core.chunk_rest.call(null,seq__19695__$1);
var G__19704 = c__4602__auto__;
var G__19705 = cljs.core.count.call(null,c__4602__auto__);
var G__19706 = (0);
seq__19695 = G__19703;
chunk__19696 = G__19704;
count__19697 = G__19705;
i__19698 = G__19706;
continue;
} else {
var attr = cljs.core.first.call(null,seq__19695__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__19707 = cljs.core.next.call(null,seq__19695__$1);
var G__19708 = null;
var G__19709 = (0);
var G__19710 = (0);
seq__19695 = G__19707;
chunk__19696 = G__19708;
count__19697 = G__19709;
i__19698 = G__19710;
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
var seq__19717_19723 = cljs.core.seq.call(null,ats);
var chunk__19718_19724 = null;
var count__19719_19725 = (0);
var i__19720_19726 = (0);
while(true){
if((i__19720_19726 < count__19719_19725)){
var vec__19721_19727 = cljs.core._nth.call(null,chunk__19718_19724,i__19720_19726);
var k_19728 = cljs.core.nth.call(null,vec__19721_19727,(0),null);
var v_19729 = cljs.core.nth.call(null,vec__19721_19727,(1),null);
add_map_attrs.call(null,elem,k_19728,v_19729);

var G__19730 = seq__19717_19723;
var G__19731 = chunk__19718_19724;
var G__19732 = count__19719_19725;
var G__19733 = (i__19720_19726 + (1));
seq__19717_19723 = G__19730;
chunk__19718_19724 = G__19731;
count__19719_19725 = G__19732;
i__19720_19726 = G__19733;
continue;
} else {
var temp__4126__auto___19734 = cljs.core.seq.call(null,seq__19717_19723);
if(temp__4126__auto___19734){
var seq__19717_19735__$1 = temp__4126__auto___19734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19717_19735__$1)){
var c__4602__auto___19736 = cljs.core.chunk_first.call(null,seq__19717_19735__$1);
var G__19737 = cljs.core.chunk_rest.call(null,seq__19717_19735__$1);
var G__19738 = c__4602__auto___19736;
var G__19739 = cljs.core.count.call(null,c__4602__auto___19736);
var G__19740 = (0);
seq__19717_19723 = G__19737;
chunk__19718_19724 = G__19738;
count__19719_19725 = G__19739;
i__19720_19726 = G__19740;
continue;
} else {
var vec__19722_19741 = cljs.core.first.call(null,seq__19717_19735__$1);
var k_19742 = cljs.core.nth.call(null,vec__19722_19741,(0),null);
var v_19743 = cljs.core.nth.call(null,vec__19722_19741,(1),null);
add_map_attrs.call(null,elem,k_19742,v_19743);

var G__19744 = cljs.core.next.call(null,seq__19717_19735__$1);
var G__19745 = null;
var G__19746 = (0);
var G__19747 = (0);
seq__19717_19723 = G__19744;
chunk__19718_19724 = G__19745;
count__19719_19725 = G__19746;
i__19720_19726 = G__19747;
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

var seq__19752_19756 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__19753_19757 = null;
var count__19754_19758 = (0);
var i__19755_19759 = (0);
while(true){
if((i__19755_19759 < count__19754_19758)){
var node_19760 = cljs.core._nth.call(null,chunk__19753_19757,i__19755_19759);
goog.dom.appendChild(div,node_19760);

var G__19761 = seq__19752_19756;
var G__19762 = chunk__19753_19757;
var G__19763 = count__19754_19758;
var G__19764 = (i__19755_19759 + (1));
seq__19752_19756 = G__19761;
chunk__19753_19757 = G__19762;
count__19754_19758 = G__19763;
i__19755_19759 = G__19764;
continue;
} else {
var temp__4126__auto___19765 = cljs.core.seq.call(null,seq__19752_19756);
if(temp__4126__auto___19765){
var seq__19752_19766__$1 = temp__4126__auto___19765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19752_19766__$1)){
var c__4602__auto___19767 = cljs.core.chunk_first.call(null,seq__19752_19766__$1);
var G__19768 = cljs.core.chunk_rest.call(null,seq__19752_19766__$1);
var G__19769 = c__4602__auto___19767;
var G__19770 = cljs.core.count.call(null,c__4602__auto___19767);
var G__19771 = (0);
seq__19752_19756 = G__19768;
chunk__19753_19757 = G__19769;
count__19754_19758 = G__19770;
i__19755_19759 = G__19771;
continue;
} else {
var node_19772 = cljs.core.first.call(null,seq__19752_19766__$1);
goog.dom.appendChild(div,node_19772);

var G__19773 = cljs.core.next.call(null,seq__19752_19766__$1);
var G__19774 = null;
var G__19775 = (0);
var G__19776 = (0);
seq__19752_19756 = G__19773;
chunk__19753_19757 = G__19774;
count__19754_19758 = G__19775;
i__19755_19759 = G__19776;
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
return (function (p1__19777_SHARP_){
var id = p1__19777_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__19777_SHARP_.setAttribute("id",rid);
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
var vec__19779 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__19779,(0),null);
var txt = cljs.core.nth.call(null,vec__19779,(1),null);
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

var seq__19784_19788 = cljs.core.seq.call(null,dfa);
var chunk__19785_19789 = null;
var count__19786_19790 = (0);
var i__19787_19791 = (0);
while(true){
if((i__19787_19791 < count__19786_19790)){
var df_19792 = cljs.core._nth.call(null,chunk__19785_19789,i__19787_19791);
goog.dom.append(frag,df_19792);

var G__19793 = seq__19784_19788;
var G__19794 = chunk__19785_19789;
var G__19795 = count__19786_19790;
var G__19796 = (i__19787_19791 + (1));
seq__19784_19788 = G__19793;
chunk__19785_19789 = G__19794;
count__19786_19790 = G__19795;
i__19787_19791 = G__19796;
continue;
} else {
var temp__4126__auto___19797 = cljs.core.seq.call(null,seq__19784_19788);
if(temp__4126__auto___19797){
var seq__19784_19798__$1 = temp__4126__auto___19797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19784_19798__$1)){
var c__4602__auto___19799 = cljs.core.chunk_first.call(null,seq__19784_19798__$1);
var G__19800 = cljs.core.chunk_rest.call(null,seq__19784_19798__$1);
var G__19801 = c__4602__auto___19799;
var G__19802 = cljs.core.count.call(null,c__4602__auto___19799);
var G__19803 = (0);
seq__19784_19788 = G__19800;
chunk__19785_19789 = G__19801;
count__19786_19790 = G__19802;
i__19787_19791 = G__19803;
continue;
} else {
var df_19804 = cljs.core.first.call(null,seq__19784_19798__$1);
goog.dom.append(frag,df_19804);

var G__19805 = cljs.core.next.call(null,seq__19784_19798__$1);
var G__19806 = null;
var G__19807 = (0);
var G__19808 = (0);
seq__19784_19788 = G__19805;
chunk__19785_19789 = G__19806;
count__19786_19790 = G__19807;
i__19787_19791 = G__19808;
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
var vec__19811 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__19811,(0),null);
var tdom = cljs.core.nth.call(null,vec__19811,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__19811,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__19809_SHARP_){
return p1__19809_SHARP_.outerHTML;
});})(vec__19811,sym,tdom,dom,tsnip,sel_str,cache))
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
if(typeof enfocus.core.t19816 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t19816 = (function (trans,filt,func,extr_multi_node,meta19817){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta19817 = meta19817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t19816.prototype.call = ((function (trans){
return (function() {
var G__19820 = null;
var G__19820__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__19820__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__19820 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__19820__2.call(this,self__,nodes);
case 3:
return G__19820__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19820.cljs$core$IFn$_invoke$arity$2 = G__19820__2;
G__19820.cljs$core$IFn$_invoke$arity$3 = G__19820__3;
return G__19820;
})()
;})(trans))
;

enfocus.core.t19816.prototype.apply = ((function (trans){
return (function (self__,args19819){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args19819)));
});})(trans))
;

enfocus.core.t19816.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t19816.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t19816.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t19816.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t19816.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t19816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_19818){
var self__ = this;
var _19818__$1 = this;
return self__.meta19817;
});})(trans))
;

enfocus.core.t19816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_19818,meta19817__$1){
var self__ = this;
var _19818__$1 = this;
return (new enfocus.core.t19816(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta19817__$1));
});})(trans))
;

enfocus.core.t19816.cljs$lang$type = true;

enfocus.core.t19816.cljs$lang$ctorStr = "enfocus.core/t19816";

enfocus.core.t19816.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"enfocus.core/t19816");
});})(trans))
;

enfocus.core.__GT_t19816 = ((function (trans){
return (function __GT_t19816(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta19817){
return (new enfocus.core.t19816(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta19817));
});})(trans))
;

}

return (new enfocus.core.t19816(trans,filt,func,extr_multi_node,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof enfocus.core.t19830 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t19830 = (function (trans,func,multi_node_chain,meta19831){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta19831 = meta19831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t19830.prototype.call = ((function (trans){
return (function() {
var G__19838 = null;
var G__19838__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__19838__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__19838 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__19838__2.call(this,self__,nodes);
case 3:
return G__19838__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19838.cljs$core$IFn$_invoke$arity$2 = G__19838__2;
G__19838.cljs$core$IFn$_invoke$arity$3 = G__19838__3;
return G__19838;
})()
;})(trans))
;

enfocus.core.t19830.prototype.apply = ((function (trans){
return (function (self__,args19833){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args19833)));
});})(trans))
;

enfocus.core.t19830.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t19830.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t19830.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t19830.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t19830.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t19830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_19832){
var self__ = this;
var _19832__$1 = this;
return self__.meta19831;
});})(trans))
;

enfocus.core.t19830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_19832,meta19831__$1){
var self__ = this;
var _19832__$1 = this;
return (new enfocus.core.t19830(self__.trans,self__.func,self__.multi_node_chain,meta19831__$1));
});})(trans))
;

enfocus.core.t19830.cljs$lang$type = true;

enfocus.core.t19830.cljs$lang$ctorStr = "enfocus.core/t19830";

enfocus.core.t19830.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"enfocus.core/t19830");
});})(trans))
;

enfocus.core.__GT_t19830 = ((function (trans){
return (function __GT_t19830(trans__$1,func__$1,multi_node_chain__$1,meta19831){
return (new enfocus.core.t19830(trans__$1,func__$1,multi_node_chain__$1,meta19831));
});})(trans))
;

}

return (new enfocus.core.t19830(trans,func,multi_node_chain,cljs.core.PersistentArrayMap.EMPTY));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__19821_SHARP_){
return domina.nodes.call(null,p1__19821_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t19834 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t19834 = (function (trans,func,values,multi_node_chain,meta19835){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta19835 = meta19835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t19834.prototype.call = ((function (trans){
return (function() {
var G__19839 = null;
var G__19839__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__19839__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__19839 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__19839__2.call(this,self__,nodes);
case 3:
return G__19839__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19839.cljs$core$IFn$_invoke$arity$2 = G__19839__2;
G__19839.cljs$core$IFn$_invoke$arity$3 = G__19839__3;
return G__19839;
})()
;})(trans))
;

enfocus.core.t19834.prototype.apply = ((function (trans){
return (function (self__,args19837){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args19837)));
});})(trans))
;

enfocus.core.t19834.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t19834.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t19834.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t19834.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t19834.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t19834.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_19836){
var self__ = this;
var _19836__$1 = this;
return self__.meta19835;
});})(trans))
;

enfocus.core.t19834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_19836,meta19835__$1){
var self__ = this;
var _19836__$1 = this;
return (new enfocus.core.t19834(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta19835__$1));
});})(trans))
;

enfocus.core.t19834.cljs$lang$type = true;

enfocus.core.t19834.cljs$lang$ctorStr = "enfocus.core/t19834";

enfocus.core.t19834.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"enfocus.core/t19834");
});})(trans))
;

enfocus.core.__GT_t19834 = ((function (trans){
return (function __GT_t19834(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta19835){
return (new enfocus.core.t19834(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta19835));
});})(trans))
;

}

return (new enfocus.core.t19834(trans,func,values,multi_node_chain,cljs.core.PersistentArrayMap.EMPTY));
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__19840_SHARP_,p2__19841_SHARP_){
domina.destroy_children_BANG_.call(null,p1__19840_SHARP_);

return domina.append_BANG_.call(null,p1__19840_SHARP_,p2__19841_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__19842__i = 0, G__19842__a = new Array(arguments.length -  0);
while (G__19842__i < G__19842__a.length) {G__19842__a[G__19842__i] = arguments[G__19842__i + 0]; ++G__19842__i;}
  values = new cljs.core.IndexedSeq(G__19842__a,0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__19843){
var values = cljs.core.seq(arglist__19843);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__19844_SHARP_){
return domina.set_html_BANG_.call(null,p1__19844_SHARP_,txt);
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
return (function (p1__19845_SHARP_){
var seq__19852 = cljs.core.seq.call(null,pairs);
var chunk__19853 = null;
var count__19854 = (0);
var i__19855 = (0);
while(true){
if((i__19855 < count__19854)){
var vec__19856 = cljs.core._nth.call(null,chunk__19853,i__19855);
var name = cljs.core.nth.call(null,vec__19856,(0),null);
var value = cljs.core.nth.call(null,vec__19856,(1),null);
domina.set_attr_BANG_.call(null,p1__19845_SHARP_,name,value);

var G__19858 = seq__19852;
var G__19859 = chunk__19853;
var G__19860 = count__19854;
var G__19861 = (i__19855 + (1));
seq__19852 = G__19858;
chunk__19853 = G__19859;
count__19854 = G__19860;
i__19855 = G__19861;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19852);
if(temp__4126__auto__){
var seq__19852__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19852__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__19852__$1);
var G__19862 = cljs.core.chunk_rest.call(null,seq__19852__$1);
var G__19863 = c__4602__auto__;
var G__19864 = cljs.core.count.call(null,c__4602__auto__);
var G__19865 = (0);
seq__19852 = G__19862;
chunk__19853 = G__19863;
count__19854 = G__19864;
i__19855 = G__19865;
continue;
} else {
var vec__19857 = cljs.core.first.call(null,seq__19852__$1);
var name = cljs.core.nth.call(null,vec__19857,(0),null);
var value = cljs.core.nth.call(null,vec__19857,(1),null);
domina.set_attr_BANG_.call(null,p1__19845_SHARP_,name,value);

var G__19866 = cljs.core.next.call(null,seq__19852__$1);
var G__19867 = null;
var G__19868 = (0);
var G__19869 = (0);
seq__19852 = G__19866;
chunk__19853 = G__19867;
count__19854 = G__19868;
i__19855 = G__19869;
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
var G__19870__i = 0, G__19870__a = new Array(arguments.length -  0);
while (G__19870__i < G__19870__a.length) {G__19870__a[G__19870__i] = arguments[G__19870__i + 0]; ++G__19870__i;}
  values = new cljs.core.IndexedSeq(G__19870__a,0);
} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__19871){
var values = cljs.core.seq(arglist__19871);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__19872_SHARP_){
var seq__19877 = cljs.core.seq.call(null,values);
var chunk__19878 = null;
var count__19879 = (0);
var i__19880 = (0);
while(true){
if((i__19880 < count__19879)){
var name = cljs.core._nth.call(null,chunk__19878,i__19880);
domina.remove_attr_BANG_.call(null,p1__19872_SHARP_,name);

var G__19881 = seq__19877;
var G__19882 = chunk__19878;
var G__19883 = count__19879;
var G__19884 = (i__19880 + (1));
seq__19877 = G__19881;
chunk__19878 = G__19882;
count__19879 = G__19883;
i__19880 = G__19884;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19877);
if(temp__4126__auto__){
var seq__19877__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19877__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__19877__$1);
var G__19885 = cljs.core.chunk_rest.call(null,seq__19877__$1);
var G__19886 = c__4602__auto__;
var G__19887 = cljs.core.count.call(null,c__4602__auto__);
var G__19888 = (0);
seq__19877 = G__19885;
chunk__19878 = G__19886;
count__19879 = G__19887;
i__19880 = G__19888;
continue;
} else {
var name = cljs.core.first.call(null,seq__19877__$1);
domina.remove_attr_BANG_.call(null,p1__19872_SHARP_,name);

var G__19889 = cljs.core.next.call(null,seq__19877__$1);
var G__19890 = null;
var G__19891 = (0);
var G__19892 = (0);
seq__19877 = G__19889;
chunk__19878 = G__19890;
count__19879 = G__19891;
i__19880 = G__19892;
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
var G__19893__i = 0, G__19893__a = new Array(arguments.length -  0);
while (G__19893__i < G__19893__a.length) {G__19893__a[G__19893__i] = arguments[G__19893__i + 0]; ++G__19893__i;}
  values = new cljs.core.IndexedSeq(G__19893__a,0);
} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__19894){
var values = cljs.core.seq(arglist__19894);
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
var h = cljs.core.mapcat.call(null,(function (p__19897){
var vec__19898 = p__19897;
var n = cljs.core.nth.call(null,vec__19898,(0),null);
var v = cljs.core.nth.call(null,vec__19898,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,(2),forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;
if (arguments.length > 0) {
var G__19899__i = 0, G__19899__a = new Array(arguments.length -  0);
while (G__19899__i < G__19899__a.length) {G__19899__a[G__19899__i] = arguments[G__19899__i + 0]; ++G__19899__i;}
  forms = new cljs.core.IndexedSeq(G__19899__a,0);
} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__19900){
var forms = cljs.core.seq(arglist__19900);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__19901_SHARP_){
var seq__19906 = cljs.core.seq.call(null,values);
var chunk__19907 = null;
var count__19908 = (0);
var i__19909 = (0);
while(true){
if((i__19909 < count__19908)){
var val = cljs.core._nth.call(null,chunk__19907,i__19909);
domina.add_class_BANG_.call(null,p1__19901_SHARP_,val);

var G__19910 = seq__19906;
var G__19911 = chunk__19907;
var G__19912 = count__19908;
var G__19913 = (i__19909 + (1));
seq__19906 = G__19910;
chunk__19907 = G__19911;
count__19908 = G__19912;
i__19909 = G__19913;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19906);
if(temp__4126__auto__){
var seq__19906__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19906__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__19906__$1);
var G__19914 = cljs.core.chunk_rest.call(null,seq__19906__$1);
var G__19915 = c__4602__auto__;
var G__19916 = cljs.core.count.call(null,c__4602__auto__);
var G__19917 = (0);
seq__19906 = G__19914;
chunk__19907 = G__19915;
count__19908 = G__19916;
i__19909 = G__19917;
continue;
} else {
var val = cljs.core.first.call(null,seq__19906__$1);
domina.add_class_BANG_.call(null,p1__19901_SHARP_,val);

var G__19918 = cljs.core.next.call(null,seq__19906__$1);
var G__19919 = null;
var G__19920 = (0);
var G__19921 = (0);
seq__19906 = G__19918;
chunk__19907 = G__19919;
count__19908 = G__19920;
i__19909 = G__19921;
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
var G__19922__i = 0, G__19922__a = new Array(arguments.length -  0);
while (G__19922__i < G__19922__a.length) {G__19922__a[G__19922__i] = arguments[G__19922__i + 0]; ++G__19922__i;}
  values = new cljs.core.IndexedSeq(G__19922__a,0);
} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__19923){
var values = cljs.core.seq(arglist__19923);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__19924_SHARP_){
var seq__19929 = cljs.core.seq.call(null,values);
var chunk__19930 = null;
var count__19931 = (0);
var i__19932 = (0);
while(true){
if((i__19932 < count__19931)){
var val = cljs.core._nth.call(null,chunk__19930,i__19932);
domina.remove_class_BANG_.call(null,p1__19924_SHARP_,val);

var G__19933 = seq__19929;
var G__19934 = chunk__19930;
var G__19935 = count__19931;
var G__19936 = (i__19932 + (1));
seq__19929 = G__19933;
chunk__19930 = G__19934;
count__19931 = G__19935;
i__19932 = G__19936;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19929);
if(temp__4126__auto__){
var seq__19929__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19929__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__19929__$1);
var G__19937 = cljs.core.chunk_rest.call(null,seq__19929__$1);
var G__19938 = c__4602__auto__;
var G__19939 = cljs.core.count.call(null,c__4602__auto__);
var G__19940 = (0);
seq__19929 = G__19937;
chunk__19930 = G__19938;
count__19931 = G__19939;
i__19932 = G__19940;
continue;
} else {
var val = cljs.core.first.call(null,seq__19929__$1);
domina.remove_class_BANG_.call(null,p1__19924_SHARP_,val);

var G__19941 = cljs.core.next.call(null,seq__19929__$1);
var G__19942 = null;
var G__19943 = (0);
var G__19944 = (0);
seq__19929 = G__19941;
chunk__19930 = G__19942;
count__19931 = G__19943;
i__19932 = G__19944;
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
var G__19945__i = 0, G__19945__a = new Array(arguments.length -  0);
while (G__19945__i < G__19945__a.length) {G__19945__a[G__19945__i] = arguments[G__19945__i + 0]; ++G__19945__i;}
  values = new cljs.core.IndexedSeq(G__19945__a,0);
} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__19946){
var values = cljs.core.seq(arglist__19946);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__19947_SHARP_){
return domina.set_classes_BANG_.call(null,p1__19947_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__19948__i = 0, G__19948__a = new Array(arguments.length -  0);
while (G__19948__i < G__19948__a.length) {G__19948__a[G__19948__i] = arguments[G__19948__i + 0]; ++G__19948__i;}
  values = new cljs.core.IndexedSeq(G__19948__a,0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__19949){
var values = cljs.core.seq(arglist__19949);
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
var seq__19954 = cljs.core.seq.call(null,forms);
var chunk__19955 = null;
var count__19956 = (0);
var i__19957 = (0);
while(true){
if((i__19957 < count__19956)){
var fun = cljs.core._nth.call(null,chunk__19955,i__19957);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__19958 = seq__19954;
var G__19959 = chunk__19955;
var G__19960 = count__19956;
var G__19961 = (i__19957 + (1));
seq__19954 = G__19958;
chunk__19955 = G__19959;
count__19956 = G__19960;
i__19957 = G__19961;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19954);
if(temp__4126__auto__){
var seq__19954__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19954__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__19954__$1);
var G__19962 = cljs.core.chunk_rest.call(null,seq__19954__$1);
var G__19963 = c__4602__auto__;
var G__19964 = cljs.core.count.call(null,c__4602__auto__);
var G__19965 = (0);
seq__19954 = G__19962;
chunk__19955 = G__19963;
count__19956 = G__19964;
i__19957 = G__19965;
continue;
} else {
var fun = cljs.core.first.call(null,seq__19954__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__19966 = cljs.core.next.call(null,seq__19954__$1);
var G__19967 = null;
var G__19968 = (0);
var G__19969 = (0);
seq__19954 = G__19966;
chunk__19955 = G__19967;
count__19956 = G__19968;
i__19957 = G__19969;
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
var G__19970__i = 0, G__19970__a = new Array(arguments.length -  0);
while (G__19970__i < G__19970__a.length) {G__19970__a[G__19970__i] = arguments[G__19970__i + 0]; ++G__19970__i;}
  forms = new cljs.core.IndexedSeq(G__19970__a,0);
} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__19971){
var forms = cljs.core.seq(arglist__19971);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__19972_SHARP_,p2__19973_SHARP_){
return domina.append_BANG_.call(null,p1__19972_SHARP_,p2__19973_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__19974__i = 0, G__19974__a = new Array(arguments.length -  0);
while (G__19974__i < G__19974__a.length) {G__19974__a[G__19974__i] = arguments[G__19974__i + 0]; ++G__19974__i;}
  values = new cljs.core.IndexedSeq(G__19974__a,0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__19975){
var values = cljs.core.seq(arglist__19975);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__19976_SHARP_,p2__19977_SHARP_){
return domina.prepend_BANG_.call(null,p1__19976_SHARP_,p2__19977_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__19978__i = 0, G__19978__a = new Array(arguments.length -  0);
while (G__19978__i < G__19978__a.length) {G__19978__a[G__19978__i] = arguments[G__19978__i + 0]; ++G__19978__i;}
  values = new cljs.core.IndexedSeq(G__19978__a,0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__19979){
var values = cljs.core.seq(arglist__19979);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__19980_SHARP_,p2__19981_SHARP_){
return domina.insert_before_BANG_.call(null,p1__19980_SHARP_,p2__19981_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__19982__i = 0, G__19982__a = new Array(arguments.length -  0);
while (G__19982__i < G__19982__a.length) {G__19982__a[G__19982__i] = arguments[G__19982__i + 0]; ++G__19982__i;}
  values = new cljs.core.IndexedSeq(G__19982__a,0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__19983){
var values = cljs.core.seq(arglist__19983);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__19984_SHARP_,p2__19985_SHARP_){
return domina.insert_after_BANG_.call(null,p1__19984_SHARP_,p2__19985_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__19986__i = 0, G__19986__a = new Array(arguments.length -  0);
while (G__19986__i < G__19986__a.length) {G__19986__a[G__19986__i] = arguments[G__19986__i + 0]; ++G__19986__i;}
  values = new cljs.core.IndexedSeq(G__19986__a,0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__19987){
var values = cljs.core.seq(arglist__19987);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__19988_SHARP_,p2__19989_SHARP_){
return domina.swap_content_BANG_.call(null,p1__19988_SHARP_,p2__19989_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__19990__i = 0, G__19990__a = new Array(arguments.length -  0);
while (G__19990__i < G__19990__a.length) {G__19990__a[G__19990__i] = arguments[G__19990__i + 0]; ++G__19990__i;}
  values = new cljs.core.IndexedSeq(G__19990__a,0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__19991){
var values = cljs.core.seq(arglist__19991);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__19992_SHARP_){
return domina.detach_BANG_.call(null,p1__19992_SHARP_);
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
return (function (p1__19993_SHARP_){
var seq__20000 = cljs.core.seq.call(null,pairs);
var chunk__20001 = null;
var count__20002 = (0);
var i__20003 = (0);
while(true){
if((i__20003 < count__20002)){
var vec__20004 = cljs.core._nth.call(null,chunk__20001,i__20003);
var name = cljs.core.nth.call(null,vec__20004,(0),null);
var value = cljs.core.nth.call(null,vec__20004,(1),null);
domina.set_style_BANG_.call(null,p1__19993_SHARP_,name,value);

var G__20006 = seq__20000;
var G__20007 = chunk__20001;
var G__20008 = count__20002;
var G__20009 = (i__20003 + (1));
seq__20000 = G__20006;
chunk__20001 = G__20007;
count__20002 = G__20008;
i__20003 = G__20009;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20000);
if(temp__4126__auto__){
var seq__20000__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20000__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__20000__$1);
var G__20010 = cljs.core.chunk_rest.call(null,seq__20000__$1);
var G__20011 = c__4602__auto__;
var G__20012 = cljs.core.count.call(null,c__4602__auto__);
var G__20013 = (0);
seq__20000 = G__20010;
chunk__20001 = G__20011;
count__20002 = G__20012;
i__20003 = G__20013;
continue;
} else {
var vec__20005 = cljs.core.first.call(null,seq__20000__$1);
var name = cljs.core.nth.call(null,vec__20005,(0),null);
var value = cljs.core.nth.call(null,vec__20005,(1),null);
domina.set_style_BANG_.call(null,p1__19993_SHARP_,name,value);

var G__20014 = cljs.core.next.call(null,seq__20000__$1);
var G__20015 = null;
var G__20016 = (0);
var G__20017 = (0);
seq__20000 = G__20014;
chunk__20001 = G__20015;
count__20002 = G__20016;
i__20003 = G__20017;
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
var G__20018__i = 0, G__20018__a = new Array(arguments.length -  0);
while (G__20018__i < G__20018__a.length) {G__20018__a[G__20018__i] = arguments[G__20018__i + 0]; ++G__20018__i;}
  values = new cljs.core.IndexedSeq(G__20018__a,0);
} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__20019){
var values = cljs.core.seq(arglist__20019);
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
var G__20020__i = 0, G__20020__a = new Array(arguments.length -  0);
while (G__20020__i < G__20020__a.length) {G__20020__a[G__20020__i] = arguments[G__20020__i + 0]; ++G__20020__i;}
  values = new cljs.core.IndexedSeq(G__20020__a,0);
} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__20021){
var values = cljs.core.seq(arglist__20021);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__20022_SHARP_){
return domina.set_data_BANG_.call(null,p1__20022_SHARP_,ky,val);
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
var G__20023__i = 0, G__20023__a = new Array(arguments.length -  1);
while (G__20023__i < G__20023__a.length) {G__20023__a[G__20023__i] = arguments[G__20023__i + 1]; ++G__20023__i;}
  funcs = new cljs.core.IndexedSeq(G__20023__a,0);
} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__20024){
var ttime = cljs.core.first(arglist__20024);
var funcs = cljs.core.rest(arglist__20024);
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
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__20026_SHARP_,p2__20025_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__20025_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__20051_20059 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__20052_20060 = null;
var count__20053_20061 = (0);
var i__20054_20062 = (0);
while(true){
if((i__20054_20062 < count__20053_20061)){
var idx_20063 = cljs.core._nth.call(null,chunk__20052_20060,i__20054_20062);
var attr_20064 = pnod.attributes.item(idx_20063);
if(cljs.core.truth_(attr_20064.specified)){
attr_20064.value = rep_str.call(null,attr_20064.value);
} else {
}

var G__20065 = seq__20051_20059;
var G__20066 = chunk__20052_20060;
var G__20067 = count__20053_20061;
var G__20068 = (i__20054_20062 + (1));
seq__20051_20059 = G__20065;
chunk__20052_20060 = G__20066;
count__20053_20061 = G__20067;
i__20054_20062 = G__20068;
continue;
} else {
var temp__4126__auto___20069 = cljs.core.seq.call(null,seq__20051_20059);
if(temp__4126__auto___20069){
var seq__20051_20070__$1 = temp__4126__auto___20069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20051_20070__$1)){
var c__4602__auto___20071 = cljs.core.chunk_first.call(null,seq__20051_20070__$1);
var G__20072 = cljs.core.chunk_rest.call(null,seq__20051_20070__$1);
var G__20073 = c__4602__auto___20071;
var G__20074 = cljs.core.count.call(null,c__4602__auto___20071);
var G__20075 = (0);
seq__20051_20059 = G__20072;
chunk__20052_20060 = G__20073;
count__20053_20061 = G__20074;
i__20054_20062 = G__20075;
continue;
} else {
var idx_20076 = cljs.core.first.call(null,seq__20051_20070__$1);
var attr_20077 = pnod.attributes.item(idx_20076);
if(cljs.core.truth_(attr_20077.specified)){
attr_20077.value = rep_str.call(null,attr_20077.value);
} else {
}

var G__20078 = cljs.core.next.call(null,seq__20051_20070__$1);
var G__20079 = null;
var G__20080 = (0);
var G__20081 = (0);
seq__20051_20059 = G__20078;
chunk__20052_20060 = G__20079;
count__20053_20061 = G__20080;
i__20054_20062 = G__20081;
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
var seq__20055 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__20056 = null;
var count__20057 = (0);
var i__20058 = (0);
while(true){
if((i__20058 < count__20057)){
var cnode = cljs.core._nth.call(null,chunk__20056,i__20058);
rep_node.call(null,cnode);

var G__20082 = seq__20055;
var G__20083 = chunk__20056;
var G__20084 = count__20057;
var G__20085 = (i__20058 + (1));
seq__20055 = G__20082;
chunk__20056 = G__20083;
count__20057 = G__20084;
i__20058 = G__20085;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20055);
if(temp__4126__auto__){
var seq__20055__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20055__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__20055__$1);
var G__20086 = cljs.core.chunk_rest.call(null,seq__20055__$1);
var G__20087 = c__4602__auto__;
var G__20088 = cljs.core.count.call(null,c__4602__auto__);
var G__20089 = (0);
seq__20055 = G__20086;
chunk__20056 = G__20087;
count__20057 = G__20088;
i__20058 = G__20089;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__20055__$1);
rep_node.call(null,cnode);

var G__20090 = cljs.core.next.call(null,seq__20055__$1);
var G__20091 = null;
var G__20092 = (0);
var G__20093 = (0);
seq__20055 = G__20090;
chunk__20056 = G__20091;
count__20057 = G__20092;
i__20058 = G__20093;
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
var seq__20098 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__20099 = null;
var count__20100 = (0);
var i__20101 = (0);
while(true){
if((i__20101 < count__20100)){
var idx = cljs.core._nth.call(null,chunk__20099,i__20101);
var el_20102 = (form_node.elements[idx]);
var ky_20103 = cljs.core.keyword.call(null,el_20102.name);
var val_20104 = ky_20103.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_20103)){
var val_20105__$1 = (cljs.core.truth_(val_20104)?val_20104:"");
enfocus.core.set_form_input.call(null,val_20105__$1).call(null,el_20102);
} else {
}

var G__20106 = seq__20098;
var G__20107 = chunk__20099;
var G__20108 = count__20100;
var G__20109 = (i__20101 + (1));
seq__20098 = G__20106;
chunk__20099 = G__20107;
count__20100 = G__20108;
i__20101 = G__20109;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20098);
if(temp__4126__auto__){
var seq__20098__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20098__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__20098__$1);
var G__20110 = cljs.core.chunk_rest.call(null,seq__20098__$1);
var G__20111 = c__4602__auto__;
var G__20112 = cljs.core.count.call(null,c__4602__auto__);
var G__20113 = (0);
seq__20098 = G__20110;
chunk__20099 = G__20111;
count__20100 = G__20112;
i__20101 = G__20113;
continue;
} else {
var idx = cljs.core.first.call(null,seq__20098__$1);
var el_20114 = (form_node.elements[idx]);
var ky_20115 = cljs.core.keyword.call(null,el_20114.name);
var val_20116 = ky_20115.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_20115)){
var val_20117__$1 = (cljs.core.truth_(val_20116)?val_20116:"");
enfocus.core.set_form_input.call(null,val_20117__$1).call(null,el_20114);
} else {
}

var G__20118 = cljs.core.next.call(null,seq__20098__$1);
var G__20119 = null;
var G__20120 = (0);
var G__20121 = (0);
seq__20098 = G__20118;
chunk__20099 = G__20119;
count__20100 = G__20120;
i__20101 = G__20121;
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
var vec__20131 = node_spec;
var tag = cljs.core.nth.call(null,vec__20131,(0),null);
var vec__20132 = cljs.core.nthnext.call(null,vec__20131,(1));
var m = cljs.core.nth.call(null,vec__20132,(0),null);
var ms = cljs.core.nthnext.call(null,vec__20132,(1));
var more = vec__20132;
var vec__20133 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__20133,(0),null);
var segments = cljs.core.nthnext.call(null,vec__20133,(1));
var id = cljs.core.some.call(null,((function (vec__20131,tag,vec__20132,m,ms,more,vec__20133,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__20131,tag,vec__20132,m,ms,more,vec__20133,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__20131,tag,vec__20132,m,ms,more,vec__20133,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__20131,tag,vec__20132,m,ms,more,vec__20133,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__20134_20140 = cljs.core.seq.call(null,attrs__$2);
var chunk__20135_20141 = null;
var count__20136_20142 = (0);
var i__20137_20143 = (0);
while(true){
if((i__20137_20143 < count__20136_20142)){
var vec__20138_20144 = cljs.core._nth.call(null,chunk__20135_20141,i__20137_20143);
var key_20145 = cljs.core.nth.call(null,vec__20138_20144,(0),null);
var val_20146 = cljs.core.nth.call(null,vec__20138_20144,(1),null);
node.setAttribute(cljs.core.name.call(null,key_20145),val_20146);

var G__20147 = seq__20134_20140;
var G__20148 = chunk__20135_20141;
var G__20149 = count__20136_20142;
var G__20150 = (i__20137_20143 + (1));
seq__20134_20140 = G__20147;
chunk__20135_20141 = G__20148;
count__20136_20142 = G__20149;
i__20137_20143 = G__20150;
continue;
} else {
var temp__4126__auto___20151 = cljs.core.seq.call(null,seq__20134_20140);
if(temp__4126__auto___20151){
var seq__20134_20152__$1 = temp__4126__auto___20151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20134_20152__$1)){
var c__4602__auto___20153 = cljs.core.chunk_first.call(null,seq__20134_20152__$1);
var G__20154 = cljs.core.chunk_rest.call(null,seq__20134_20152__$1);
var G__20155 = c__4602__auto___20153;
var G__20156 = cljs.core.count.call(null,c__4602__auto___20153);
var G__20157 = (0);
seq__20134_20140 = G__20154;
chunk__20135_20141 = G__20155;
count__20136_20142 = G__20156;
i__20137_20143 = G__20157;
continue;
} else {
var vec__20139_20158 = cljs.core.first.call(null,seq__20134_20152__$1);
var key_20159 = cljs.core.nth.call(null,vec__20139_20158,(0),null);
var val_20160 = cljs.core.nth.call(null,vec__20139_20158,(1),null);
node.setAttribute(cljs.core.name.call(null,key_20159),val_20160);

var G__20161 = cljs.core.next.call(null,seq__20134_20152__$1);
var G__20162 = null;
var G__20163 = (0);
var G__20164 = (0);
seq__20134_20140 = G__20161;
chunk__20135_20141 = G__20162;
count__20136_20142 = G__20163;
i__20137_20143 = G__20164;
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
return (function (p1__20166_SHARP_,p2__20165_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__20165_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__20166_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__20166_SHARP_,vals);
} else {
return p1__20166_SHARP_;
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
if(typeof enfocus.core.t20171 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t20171 = (function (trans,read_form_input,meta20172){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta20172 = meta20172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t20171.prototype.call = ((function (trans){
return (function() {
var G__20175 = null;
var G__20175__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__20175__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__20175 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__20175__2.call(this,self__,nodes);
case 3:
return G__20175__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20175.cljs$core$IFn$_invoke$arity$2 = G__20175__2;
G__20175.cljs$core$IFn$_invoke$arity$3 = G__20175__3;
return G__20175;
})()
;})(trans))
;

enfocus.core.t20171.prototype.apply = ((function (trans){
return (function (self__,args20174){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20174)));
});})(trans))
;

enfocus.core.t20171.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t20171.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t20171.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t20171.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t20171.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t20171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_20173){
var self__ = this;
var _20173__$1 = this;
return self__.meta20172;
});})(trans))
;

enfocus.core.t20171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_20173,meta20172__$1){
var self__ = this;
var _20173__$1 = this;
return (new enfocus.core.t20171(self__.trans,self__.read_form_input,meta20172__$1));
});})(trans))
;

enfocus.core.t20171.cljs$lang$type = true;

enfocus.core.t20171.cljs$lang$ctorStr = "enfocus.core/t20171";

enfocus.core.t20171.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"enfocus.core/t20171");
});})(trans))
;

enfocus.core.__GT_t20171 = ((function (trans){
return (function __GT_t20171(trans__$1,read_form_input__$1,meta20172){
return (new enfocus.core.t20171(trans__$1,read_form_input__$1,meta20172));
});})(trans))
;

}

return (new enfocus.core.t20171(trans,read_form_input,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__20177_SHARP_,p2__20176_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__20176_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__20177_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__20176_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__20176_SHARP_)));
} else {
return p1__20177_SHARP_;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__20178_SHARP_){
if((p1__20178_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__20178_SHARP_);
} else {
if((p1__20178_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__20178_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__20178_SHARP_)){
return create_sel_str.call(null,p1__20178_SHARP_);
} else {
if(typeof p1__20178_SHARP_ === 'string'){
return p1__20178_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var or__3815__auto__ = func;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
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
var sel_QMARK_ = (function (){var and__3803__auto__ = !((node == null));
if(and__3803__auto__){
var G__20189 = node;
if(G__20189){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__20189.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__20189.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__20189);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__20189);
}
} else {
return and__3803__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__20190 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__20190,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__20190,(1),null);
var seq__20191 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__20192 = null;
var count__20193 = (0);
var i__20194 = (0);
while(true){
if((i__20194 < count__20193)){
var vec__20195 = cljs.core._nth.call(null,chunk__20192,i__20194);
var sel = cljs.core.nth.call(null,vec__20195,(0),null);
var t = cljs.core.nth.call(null,vec__20195,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__20197 = seq__20191;
var G__20198 = chunk__20192;
var G__20199 = count__20193;
var G__20200 = (i__20194 + (1));
seq__20191 = G__20197;
chunk__20192 = G__20198;
count__20193 = G__20199;
i__20194 = G__20200;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20191);
if(temp__4126__auto__){
var seq__20191__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20191__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__20191__$1);
var G__20201 = cljs.core.chunk_rest.call(null,seq__20191__$1);
var G__20202 = c__4602__auto__;
var G__20203 = cljs.core.count.call(null,c__4602__auto__);
var G__20204 = (0);
seq__20191 = G__20201;
chunk__20192 = G__20202;
count__20193 = G__20203;
i__20194 = G__20204;
continue;
} else {
var vec__20196 = cljs.core.first.call(null,seq__20191__$1);
var sel = cljs.core.nth.call(null,vec__20196,(0),null);
var t = cljs.core.nth.call(null,vec__20196,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__20205 = cljs.core.next.call(null,seq__20191__$1);
var G__20206 = null;
var G__20207 = (0);
var G__20208 = (0);
seq__20191 = G__20205;
chunk__20192 = G__20206;
count__20193 = G__20207;
i__20194 = G__20208;
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
var G__20209__i = 0, G__20209__a = new Array(arguments.length -  2);
while (G__20209__i < G__20209__a.length) {G__20209__a[G__20209__i] = arguments[G__20209__i + 2]; ++G__20209__i;}
  trans = new cljs.core.IndexedSeq(G__20209__a,0);
} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__20210){
var id_mask = cljs.core.first(arglist__20210);
arglist__20210 = cljs.core.next(arglist__20210);
var node = cljs.core.first(arglist__20210);
var trans = cljs.core.rest(arglist__20210);
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
var G__20211__i = 0, G__20211__a = new Array(arguments.length -  1);
while (G__20211__i < G__20211__a.length) {G__20211__a[G__20211__i] = arguments[G__20211__i + 1]; ++G__20211__i;}
  trans = new cljs.core.IndexedSeq(G__20211__a,0);
} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__20212){
var node = cljs.core.first(arglist__20212);
var trans = cljs.core.rest(arglist__20212);
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
var sel_QMARK_ = (function (){var G__20217 = node;
if(G__20217){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__20217.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__20217.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__20217);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__20217);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__20218 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__20218,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__20218,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__20218,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__20219){
var vec__20220 = p__20219;
var ky = cljs.core.nth.call(null,vec__20220,(0),null);
var sel = cljs.core.nth.call(null,vec__20220,(1),null);
var ext = cljs.core.nth.call(null,vec__20220,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__20218,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.partition.call(null,(3),trans__$1)));

}
}
};
var from = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
var G__20221__i = 0, G__20221__a = new Array(arguments.length -  1);
while (G__20221__i < G__20221__a.length) {G__20221__a[G__20221__i] = arguments[G__20221__i + 1]; ++G__20221__i;}
  trans = new cljs.core.IndexedSeq(G__20221__a,0);
} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__20222){
var node = cljs.core.first(arglist__20222);
var trans = cljs.core.rest(arglist__20222);
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
var G__20223 = null;
var G__20223__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__20223__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__20223__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__20223 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__20223__1.call(this,this$);
case 2:
return G__20223__2.call(this,this$,root);
case 3:
return G__20223__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20223.cljs$core$IFn$_invoke$arity$1 = G__20223__1;
G__20223.cljs$core$IFn$_invoke$arity$2 = G__20223__2;
G__20223.cljs$core$IFn$_invoke$arity$3 = G__20223__3;
return G__20223;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__20224 = null;
var G__20224__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__20224__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__20224__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__20224 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__20224__1.call(this,this$);
case 2:
return G__20224__2.call(this,this$,root);
case 3:
return G__20224__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20224.cljs$core$IFn$_invoke$arity$1 = G__20224__1;
G__20224.cljs$core$IFn$_invoke$arity$2 = G__20224__2;
G__20224.cljs$core$IFn$_invoke$arity$3 = G__20224__3;
return G__20224;
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
var G__20225 = null;
var G__20225__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__20225__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__20225__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__20225 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__20225__1.call(this,this$);
case 2:
return G__20225__2.call(this,this$,root);
case 3:
return G__20225__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20225.cljs$core$IFn$_invoke$arity$1 = G__20225__1;
G__20225.cljs$core$IFn$_invoke$arity$2 = G__20225__2;
G__20225.cljs$core$IFn$_invoke$arity$3 = G__20225__3;
return G__20225;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__20226 = null;
var G__20226__2 = (function (trans,nodes){
return nodes;
});
var G__20226__3 = (function (trans,nodes,chain){
return nodes;
});
G__20226 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__20226__2.call(this,trans,nodes);
case 3:
return G__20226__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20226.cljs$core$IFn$_invoke$arity$2 = G__20226__2;
G__20226.cljs$core$IFn$_invoke$arity$3 = G__20226__3;
return G__20226;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__20227 = null;
var G__20227__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__20227__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__20227 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__20227__2.call(this,trans,nodes);
case 3:
return G__20227__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20227.cljs$core$IFn$_invoke$arity$2 = G__20227__2;
G__20227.cljs$core$IFn$_invoke$arity$3 = G__20227__3;
return G__20227;
})()
);

//# sourceMappingURL=core.js.map?rel=1435332574221