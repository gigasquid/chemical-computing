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







enfocus.core.ISelector = (function (){var obj25642 = {};
return obj25642;
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
return (function (){var or__3864__auto__ = (enfocus.core.select[(function (){var G__25650 = x__4508__auto__;
return goog.typeOf(G__25650);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (enfocus.core.select["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("ISelector.select",this$);
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
return (function (){var or__3864__auto__ = (enfocus.core.select[(function (){var G__25652 = x__4508__auto__;
return goog.typeOf(G__25652);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (enfocus.core.select["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("ISelector.select",this$);
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
return (function (){var or__3864__auto__ = (enfocus.core.select[(function (){var G__25654 = x__4508__auto__;
return goog.typeOf(G__25654);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (enfocus.core.select["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("ISelector.select",this$);
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


enfocus.core.ITransform = (function (){var obj25656 = {};
return obj25656;
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
return (function (){var or__3864__auto__ = (enfocus.core.apply_transform[(function (){var G__25662 = x__4508__auto__;
return goog.typeOf(G__25662);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransform.apply-transform",this$);
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
return (function (){var or__3864__auto__ = (enfocus.core.apply_transform[(function (){var G__25664 = x__4508__auto__;
return goog.typeOf(G__25664);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransform.apply-transform",this$);
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
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
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
var G__25667 = func;
var G__25668 = ttime;
return goog.Timer.callOnce(G__25667,G__25668);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
var G__25670 = tst;
return goog.dom.isNodeLike(G__25670);
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
return domina.nodes(nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__25671_SHARP_){
if(typeof p1__25671_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25673 = p1__25671_SHARP_;
return goog.dom.createTextNode(G__25673);
})()], null);
} else {
return enfocus.core.nodes__GT_coll(p1__25671_SHARP_);

}
}),cljs.core.array_seq([values], 0));
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__25686_25698 = cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,values));
var chunk__25687_25699 = null;
var count__25688_25700 = (0);
var i__25689_25701 = (0);
while(true){
if((i__25689_25701 < count__25688_25700)){
var vec__25690_25702 = chunk__25687_25699.cljs$core$IIndexed$_nth$arity$2(null,i__25689_25701);
var attr_25703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25690_25702,(0),null);
var value_25704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25690_25702,(1),null);
var G__25691_25705 = obj;
var G__25692_25706 = cljs.core.name(attr_25703);
var G__25693_25707 = value_25704;
goog.style.setStyle(G__25691_25705,G__25692_25706,G__25693_25707);

var G__25708 = seq__25686_25698;
var G__25709 = chunk__25687_25699;
var G__25710 = count__25688_25700;
var G__25711 = (i__25689_25701 + (1));
seq__25686_25698 = G__25708;
chunk__25687_25699 = G__25709;
count__25688_25700 = G__25710;
i__25689_25701 = G__25711;
continue;
} else {
var temp__4126__auto___25712 = cljs.core.seq(seq__25686_25698);
if(temp__4126__auto___25712){
var seq__25686_25713__$1 = temp__4126__auto___25712;
if(cljs.core.chunked_seq_QMARK_(seq__25686_25713__$1)){
var c__4651__auto___25714 = cljs.core.chunk_first(seq__25686_25713__$1);
var G__25715 = cljs.core.chunk_rest(seq__25686_25713__$1);
var G__25716 = c__4651__auto___25714;
var G__25717 = cljs.core.count(c__4651__auto___25714);
var G__25718 = (0);
seq__25686_25698 = G__25715;
chunk__25687_25699 = G__25716;
count__25688_25700 = G__25717;
i__25689_25701 = G__25718;
continue;
} else {
var vec__25694_25719 = cljs.core.first(seq__25686_25713__$1);
var attr_25720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25694_25719,(0),null);
var value_25721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25694_25719,(1),null);
var G__25695_25722 = obj;
var G__25696_25723 = cljs.core.name(attr_25720);
var G__25697_25724 = value_25721;
goog.style.setStyle(G__25695_25722,G__25696_25723,G__25697_25724);

var G__25725 = cljs.core.next(seq__25686_25713__$1);
var G__25726 = null;
var G__25727 = (0);
var G__25728 = (0);
seq__25686_25698 = G__25725;
chunk__25687_25699 = G__25726;
count__25688_25700 = G__25727;
i__25689_25701 = G__25728;
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
var seq__25739 = cljs.core.seq(values);
var chunk__25740 = null;
var count__25741 = (0);
var i__25742 = (0);
while(true){
if((i__25742 < count__25741)){
var attr = chunk__25740.cljs$core$IIndexed$_nth$arity$2(null,i__25742);
if(cljs.core.truth_(goog.userAgent.IE)){
var G__25743_25749 = obj;
var G__25744_25750 = cljs.core.name(attr);
var G__25745_25751 = "";
goog.style.setStyle(G__25743_25749,G__25744_25750,G__25745_25751);
} else {
obj.style.removeProperty(cljs.core.name(attr));
}

var G__25752 = seq__25739;
var G__25753 = chunk__25740;
var G__25754 = count__25741;
var G__25755 = (i__25742 + (1));
seq__25739 = G__25752;
chunk__25740 = G__25753;
count__25741 = G__25754;
i__25742 = G__25755;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__25739);
if(temp__4126__auto__){
var seq__25739__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25739__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__25739__$1);
var G__25756 = cljs.core.chunk_rest(seq__25739__$1);
var G__25757 = c__4651__auto__;
var G__25758 = cljs.core.count(c__4651__auto__);
var G__25759 = (0);
seq__25739 = G__25756;
chunk__25740 = G__25757;
count__25741 = G__25758;
i__25742 = G__25759;
continue;
} else {
var attr = cljs.core.first(seq__25739__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
var G__25746_25760 = obj;
var G__25747_25761 = cljs.core.name(attr);
var G__25748_25762 = "";
goog.style.setStyle(G__25746_25760,G__25747_25761,G__25748_25762);
} else {
obj.style.removeProperty(cljs.core.name(attr));
}

var G__25763 = cljs.core.next(seq__25739__$1);
var G__25764 = null;
var G__25765 = (0);
var G__25766 = (0);
seq__25739 = G__25763;
chunk__25740 = G__25764;
count__25741 = G__25765;
i__25742 = G__25766;
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
var G__25769 = step;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__25769) : Math.floor.call(null,G__25769));
} else {
var G__25770 = step;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__25770) : Math.ceil.call(null,G__25770));
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){
if(cljs.core.truth_(elem)){
if(cljs.core.map_QMARK_(ats)){
var seq__25783_25789 = cljs.core.seq(ats);
var chunk__25784_25790 = null;
var count__25785_25791 = (0);
var i__25786_25792 = (0);
while(true){
if((i__25786_25792 < count__25785_25791)){
var vec__25787_25793 = chunk__25784_25790.cljs$core$IIndexed$_nth$arity$2(null,i__25786_25792);
var k_25794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25787_25793,(0),null);
var v_25795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25787_25793,(1),null);
add_map_attrs.cljs$core$IFn$_invoke$arity$3(elem,k_25794,v_25795);

var G__25796 = seq__25783_25789;
var G__25797 = chunk__25784_25790;
var G__25798 = count__25785_25791;
var G__25799 = (i__25786_25792 + (1));
seq__25783_25789 = G__25796;
chunk__25784_25790 = G__25797;
count__25785_25791 = G__25798;
i__25786_25792 = G__25799;
continue;
} else {
var temp__4126__auto___25800 = cljs.core.seq(seq__25783_25789);
if(temp__4126__auto___25800){
var seq__25783_25801__$1 = temp__4126__auto___25800;
if(cljs.core.chunked_seq_QMARK_(seq__25783_25801__$1)){
var c__4651__auto___25802 = cljs.core.chunk_first(seq__25783_25801__$1);
var G__25803 = cljs.core.chunk_rest(seq__25783_25801__$1);
var G__25804 = c__4651__auto___25802;
var G__25805 = cljs.core.count(c__4651__auto___25802);
var G__25806 = (0);
seq__25783_25789 = G__25803;
chunk__25784_25790 = G__25804;
count__25785_25791 = G__25805;
i__25786_25792 = G__25806;
continue;
} else {
var vec__25788_25807 = cljs.core.first(seq__25783_25801__$1);
var k_25808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25788_25807,(0),null);
var v_25809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25788_25807,(1),null);
add_map_attrs.cljs$core$IFn$_invoke$arity$3(elem,k_25808,v_25809);

var G__25810 = cljs.core.next(seq__25783_25801__$1);
var G__25811 = null;
var G__25812 = (0);
var G__25813 = (0);
seq__25783_25789 = G__25810;
chunk__25784_25790 = G__25811;
count__25785_25791 = G__25812;
i__25786_25792 = G__25813;
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
elem.setAttribute(cljs.core.name(k),v);

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
enfocus.core.tpl_load_cnt = (function (){var G__25814 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25814) : cljs.core.atom.call(null,G__25814));
})();
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = (function (){var G__25815 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25815) : cljs.core.atom.call(null,G__25815));
})();
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div = (function (){var G__25830 = "div";
var G__25831 = enfocus.core.hide_style;
return goog.dom.createDom(G__25830,G__25831);
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeType,(11))){
var G__25832_25844 = div;
var G__25833_25845 = child;
goog.dom.appendChild(G__25832_25844,G__25833_25845);
} else {
enfocus.core.log_debug(cljs.core.count(domina.nodes(child)));

var seq__25834_25846 = cljs.core.seq(domina.nodes(child));
var chunk__25835_25847 = null;
var count__25836_25848 = (0);
var i__25837_25849 = (0);
while(true){
if((i__25837_25849 < count__25836_25848)){
var node_25850 = chunk__25835_25847.cljs$core$IIndexed$_nth$arity$2(null,i__25837_25849);
var G__25838_25851 = div;
var G__25839_25852 = node_25850;
goog.dom.appendChild(G__25838_25851,G__25839_25852);

var G__25853 = seq__25834_25846;
var G__25854 = chunk__25835_25847;
var G__25855 = count__25836_25848;
var G__25856 = (i__25837_25849 + (1));
seq__25834_25846 = G__25853;
chunk__25835_25847 = G__25854;
count__25836_25848 = G__25855;
i__25837_25849 = G__25856;
continue;
} else {
var temp__4126__auto___25857 = cljs.core.seq(seq__25834_25846);
if(temp__4126__auto___25857){
var seq__25834_25858__$1 = temp__4126__auto___25857;
if(cljs.core.chunked_seq_QMARK_(seq__25834_25858__$1)){
var c__4651__auto___25859 = cljs.core.chunk_first(seq__25834_25858__$1);
var G__25860 = cljs.core.chunk_rest(seq__25834_25858__$1);
var G__25861 = c__4651__auto___25859;
var G__25862 = cljs.core.count(c__4651__auto___25859);
var G__25863 = (0);
seq__25834_25846 = G__25860;
chunk__25835_25847 = G__25861;
count__25836_25848 = G__25862;
i__25837_25849 = G__25863;
continue;
} else {
var node_25864 = cljs.core.first(seq__25834_25858__$1);
var G__25840_25865 = div;
var G__25841_25866 = node_25864;
goog.dom.appendChild(G__25840_25865,G__25841_25866);

var G__25867 = cljs.core.next(seq__25834_25858__$1);
var G__25868 = null;
var G__25869 = (0);
var G__25870 = (0);
seq__25834_25846 = G__25867;
chunk__25835_25847 = G__25868;
count__25836_25848 = G__25869;
i__25837_25849 = G__25870;
continue;
}
} else {
}
}
break;
}
}

var G__25842_25871 = (function (){return goog.dom.getDocument();
})().documentElement;
var G__25843_25872 = div;
goog.dom.appendChild(G__25842_25871,G__25843_25872);

return div;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child = div.childNodes;
var frag = document.createDocumentFragment();
var G__25876_25879 = frag;
var G__25877_25880 = child;
goog.dom.append(G__25876_25879,G__25877_25880);

var G__25878_25881 = div;
goog.dom.removeNode(G__25878_25881);

return frag;
});
enfocus.core.last_element_child = (function last_element_child(node){

var G__25883 = node;
return goog.dom.getLastElementChild(G__25883);
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function() {
var replace_ids = null;
var replace_ids__1 = (function (text){
return replace_ids.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("id"))),cljs.core.str("_")].join(''),text);
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
var id_nodes = (function (){var G__25889 = nod;
var G__25890 = "*[id]";
return (enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2 ? enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2(G__25889,G__25890) : enfocus.core.css_select.call(null,G__25889,G__25890));
})();
var nod_col = enfocus.core.nodes__GT_coll(id_nodes);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (id_nodes,nod_col){
return (function (p1__25886_SHARP_){
var id = p1__25886_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__25886_SHARP_.setAttribute("id",rid);
});})(id_nodes,nod_col))
,nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){
if(((function (){var G__25896 = enfocus.core.tpl_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25896) : cljs.core.deref.call(null,G__25896));
})().call(null,dom_key) == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(enfocus.core.tpl_load_cnt,cljs.core.inc);

var req = (new goog.net.XhrIo());
var callback = ((function (req){
return (function (req__$1){
var text = req__$1.getResponseText();
var vec__25897 = enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$2(id_mask,text);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25897,(0),null);
var txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25897,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;
var G__25898_25901 = req;
var G__25899_25902 = goog.net.EventType.COMPLETE;
var G__25900_25903 = ((function (G__25898_25901,G__25899_25902,req,callback){
return (function (){
callback(req);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(enfocus.core.tpl_load_cnt,cljs.core.dec);
});})(G__25898_25901,G__25899_25902,req,callback))
;
goog.events.listen(G__25898_25901,G__25899_25902,G__25900_25903);

return req.send(uri,"GET");
} else {
return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){
var dfa = enfocus.core.nodes__GT_coll(domina.html_to_dom(html));
var frag = document.createDocumentFragment();
enfocus.core.log_debug(cljs.core.count(dfa));

var seq__25912_25920 = cljs.core.seq(dfa);
var chunk__25913_25921 = null;
var count__25914_25922 = (0);
var i__25915_25923 = (0);
while(true){
if((i__25915_25923 < count__25914_25922)){
var df_25924 = chunk__25913_25921.cljs$core$IIndexed$_nth$arity$2(null,i__25915_25923);
var G__25916_25925 = frag;
var G__25917_25926 = df_25924;
goog.dom.append(G__25916_25925,G__25917_25926);

var G__25927 = seq__25912_25920;
var G__25928 = chunk__25913_25921;
var G__25929 = count__25914_25922;
var G__25930 = (i__25915_25923 + (1));
seq__25912_25920 = G__25927;
chunk__25913_25921 = G__25928;
count__25914_25922 = G__25929;
i__25915_25923 = G__25930;
continue;
} else {
var temp__4126__auto___25931 = cljs.core.seq(seq__25912_25920);
if(temp__4126__auto___25931){
var seq__25912_25932__$1 = temp__4126__auto___25931;
if(cljs.core.chunked_seq_QMARK_(seq__25912_25932__$1)){
var c__4651__auto___25933 = cljs.core.chunk_first(seq__25912_25932__$1);
var G__25934 = cljs.core.chunk_rest(seq__25912_25932__$1);
var G__25935 = c__4651__auto___25933;
var G__25936 = cljs.core.count(c__4651__auto___25933);
var G__25937 = (0);
seq__25912_25920 = G__25934;
chunk__25913_25921 = G__25935;
count__25914_25922 = G__25936;
i__25915_25923 = G__25937;
continue;
} else {
var df_25938 = cljs.core.first(seq__25912_25932__$1);
var G__25918_25939 = frag;
var G__25919_25940 = df_25938;
goog.dom.append(G__25918_25939,G__25919_25940);

var G__25941 = cljs.core.next(seq__25912_25932__$1);
var G__25942 = null;
var G__25943 = (0);
var G__25944 = (0);
seq__25912_25920 = G__25941;
chunk__25913_25921 = G__25942;
count__25914_25922 = G__25943;
i__25915_25923 = G__25944;
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
var nod = (function (){var G__25946 = enfocus.core.tpl_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25946) : cljs.core.deref.call(null,G__25946));
})().call(null,uri);
if(cljs.core.truth_(nod)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(nod),enfocus.core.html_to_dom(cljs.core.second(nod))], null);
} else {
return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str = (function (){var G__25954 = sel;
return (enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1 ? enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1(G__25954) : enfocus.core.create_sel_str.call(null,G__25954));
})();
var cache = (function (){var G__25955 = enfocus.core.tpl_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25955) : cljs.core.deref.call(null,G__25955));
})().call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));
if(cljs.core.truth_(cache)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cache),enfocus.core.html_to_dom(cljs.core.second(cache))], null);
} else {
var vec__25956 = enfocus.core.get_cached_dom(uri);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25956,(0),null);
var tdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25956,(1),null);
var dom = enfocus.core.create_hidden_dom(tdom);
var tsnip = domina.nodes((function (){var G__25957 = sym;
var G__25958 = dom;
var G__25959 = sel;
return (enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3 ? enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3(G__25957,G__25958,G__25959) : enfocus.core.css_select.call(null,G__25957,G__25958,G__25959));
})());
var html_snip = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25956,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__25947_SHARP_){
return p1__25947_SHARP_.outerHTML;
});})(vec__25956,sym,tdom,dom,tsnip,sel_str,cache))
,tsnip));
enfocus.core.remove_node_return_child(dom);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom(html_snip)], null);
}
});
/**
* wrapper function for extractors that maps the extraction to
* all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function() {
var extr_multi_node = null;
var extr_multi_node__1 = (function (func){
return extr_multi_node.cljs$core$IFn$_invoke$arity$2(func,null);
});
var extr_multi_node__2 = (function (func,filt){
var trans = (function trans(pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll(pnodes);
var result = cljs.core.map.cljs$core$IFn$_invoke$arity$2(func,pnod_col);
var result__$1 = (cljs.core.truth_(filt)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filt,result):result);
if((cljs.core.count(result__$1) <= (1))){
return cljs.core.first(result__$1);
} else {
return result__$1;
}
});
if(typeof enfocus.core.t25978 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t25978 = (function (trans,filt,func,extr_multi_node,meta25979){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta25979 = meta25979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t25978.prototype.call = ((function (trans){
return (function() {
var G__25994 = null;
var G__25994__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25982 = nodes;
var G__25983 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__25982,G__25983) : self__.trans.call(null,G__25982,G__25983));
});
var G__25994__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25984 = nodes;
var G__25985 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__25984,G__25985) : self__.trans.call(null,G__25984,G__25985));
});
G__25994 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__25994__2.call(this,self__,nodes);
case 3:
return G__25994__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25994.cljs$core$IFn$_invoke$arity$2 = G__25994__2;
G__25994.cljs$core$IFn$_invoke$arity$3 = G__25994__3;
return G__25994;
})()
;})(trans))
;

enfocus.core.t25978.prototype.apply = ((function (trans){
return (function (self__,args25981){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25981)));
});})(trans))
;

enfocus.core.t25978.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
var G__25986 = nodes;
var G__25987 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__25986,G__25987) : self__.trans.call(null,G__25986,G__25987));
});})(trans))
;

enfocus.core.t25978.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
var G__25988 = nodes;
var G__25989 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__25988,G__25989) : self__.trans.call(null,G__25988,G__25989));
});})(trans))
;

enfocus.core.t25978.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t25978.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
var G__25990 = nodes;
var G__25991 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__25990,G__25991) : self__.trans.call(null,G__25990,G__25991));
});})(trans))
;

enfocus.core.t25978.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
var G__25992 = nodes;
var G__25993 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__25992,G__25993) : self__.trans.call(null,G__25992,G__25993));
});})(trans))
;

enfocus.core.t25978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_25980){
var self__ = this;
var _25980__$1 = this;
return self__.meta25979;
});})(trans))
;

enfocus.core.t25978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_25980,meta25979__$1){
var self__ = this;
var _25980__$1 = this;
return (new enfocus.core.t25978(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta25979__$1));
});})(trans))
;

enfocus.core.t25978.cljs$lang$type = true;

enfocus.core.t25978.cljs$lang$ctorStr = "enfocus.core/t25978";

enfocus.core.t25978.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"enfocus.core/t25978");
});})(trans))
;

enfocus.core.__GT_t25978 = ((function (trans){
return (function __GT_t25978(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta25979){
return (new enfocus.core.t25978(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta25979));
});})(trans))
;

}

return (new enfocus.core.t25978(trans,filt,func,extr_multi_node,cljs.core.PersistentArrayMap.EMPTY));
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
var val = (function (){var G__26031 = nodes;
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(G__26031) : func.call(null,G__26031));
})();
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t26032 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t26032 = (function (trans,func,multi_node_chain,meta26033){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta26033 = meta26033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t26032.prototype.call = ((function (trans){
return (function() {
var G__26066 = null;
var G__26066__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26036 = nodes;
var G__26037 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26036,G__26037) : self__.trans.call(null,G__26036,G__26037));
});
var G__26066__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26038 = nodes;
var G__26039 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26038,G__26039) : self__.trans.call(null,G__26038,G__26039));
});
G__26066 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__26066__2.call(this,self__,nodes);
case 3:
return G__26066__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26066.cljs$core$IFn$_invoke$arity$2 = G__26066__2;
G__26066.cljs$core$IFn$_invoke$arity$3 = G__26066__3;
return G__26066;
})()
;})(trans))
;

enfocus.core.t26032.prototype.apply = ((function (trans){
return (function (self__,args26035){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26035)));
});})(trans))
;

enfocus.core.t26032.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
var G__26040 = nodes;
var G__26041 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26040,G__26041) : self__.trans.call(null,G__26040,G__26041));
});})(trans))
;

enfocus.core.t26032.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
var G__26042 = nodes;
var G__26043 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26042,G__26043) : self__.trans.call(null,G__26042,G__26043));
});})(trans))
;

enfocus.core.t26032.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t26032.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
var G__26044 = nodes;
var G__26045 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26044,G__26045) : self__.trans.call(null,G__26044,G__26045));
});})(trans))
;

enfocus.core.t26032.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
var G__26046 = nodes;
var G__26047 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26046,G__26047) : self__.trans.call(null,G__26046,G__26047));
});})(trans))
;

enfocus.core.t26032.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_26034){
var self__ = this;
var _26034__$1 = this;
return self__.meta26033;
});})(trans))
;

enfocus.core.t26032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_26034,meta26033__$1){
var self__ = this;
var _26034__$1 = this;
return (new enfocus.core.t26032(self__.trans,self__.func,self__.multi_node_chain,meta26033__$1));
});})(trans))
;

enfocus.core.t26032.cljs$lang$type = true;

enfocus.core.t26032.cljs$lang$ctorStr = "enfocus.core/t26032";

enfocus.core.t26032.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"enfocus.core/t26032");
});})(trans))
;

enfocus.core.__GT_t26032 = ((function (trans){
return (function __GT_t26032(trans__$1,func__$1,multi_node_chain__$1,meta26033){
return (new enfocus.core.t26032(trans__$1,func__$1,multi_node_chain__$1,meta26033));
});})(trans))
;

}

return (new enfocus.core.t26032(trans,func,multi_node_chain,cljs.core.PersistentArrayMap.EMPTY));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__25995_SHARP_){
return domina.nodes(p1__25995_SHARP_);
}),cljs.core.array_seq([values], 0));
var val = (function (){var G__26048 = nodes;
var G__26049 = vnodes;
return (func.cljs$core$IFn$_invoke$arity$2 ? func.cljs$core$IFn$_invoke$arity$2(G__26048,G__26049) : func.call(null,G__26048,G__26049));
})();
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t26050 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t26050 = (function (trans,func,values,multi_node_chain,meta26051){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta26051 = meta26051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t26050.prototype.call = ((function (trans){
return (function() {
var G__26067 = null;
var G__26067__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26054 = nodes;
var G__26055 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26054,G__26055) : self__.trans.call(null,G__26054,G__26055));
});
var G__26067__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26056 = nodes;
var G__26057 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26056,G__26057) : self__.trans.call(null,G__26056,G__26057));
});
G__26067 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__26067__2.call(this,self__,nodes);
case 3:
return G__26067__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26067.cljs$core$IFn$_invoke$arity$2 = G__26067__2;
G__26067.cljs$core$IFn$_invoke$arity$3 = G__26067__3;
return G__26067;
})()
;})(trans))
;

enfocus.core.t26050.prototype.apply = ((function (trans){
return (function (self__,args26053){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26053)));
});})(trans))
;

enfocus.core.t26050.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
var G__26058 = nodes;
var G__26059 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26058,G__26059) : self__.trans.call(null,G__26058,G__26059));
});})(trans))
;

enfocus.core.t26050.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
var G__26060 = nodes;
var G__26061 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26060,G__26061) : self__.trans.call(null,G__26060,G__26061));
});})(trans))
;

enfocus.core.t26050.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t26050.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
var G__26062 = nodes;
var G__26063 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26062,G__26063) : self__.trans.call(null,G__26062,G__26063));
});})(trans))
;

enfocus.core.t26050.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
var G__26064 = nodes;
var G__26065 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26064,G__26065) : self__.trans.call(null,G__26064,G__26065));
});})(trans))
;

enfocus.core.t26050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_26052){
var self__ = this;
var _26052__$1 = this;
return self__.meta26051;
});})(trans))
;

enfocus.core.t26050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_26052,meta26051__$1){
var self__ = this;
var _26052__$1 = this;
return (new enfocus.core.t26050(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta26051__$1));
});})(trans))
;

enfocus.core.t26050.cljs$lang$type = true;

enfocus.core.t26050.cljs$lang$ctorStr = "enfocus.core/t26050";

enfocus.core.t26050.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"enfocus.core/t26050");
});})(trans))
;

enfocus.core.__GT_t26050 = ((function (trans){
return (function __GT_t26050(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta26051){
return (new enfocus.core.t26050(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta26051));
});})(trans))
;

}

return (new enfocus.core.t26050(trans,func,values,multi_node_chain,cljs.core.PersistentArrayMap.EMPTY));
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__26068_SHARP_,p2__26069_SHARP_){
domina.destroy_children_BANG_(p1__26068_SHARP_);

return domina.append_BANG_(p1__26068_SHARP_,p2__26069_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26070__i = 0, G__26070__a = new Array(arguments.length -  0);
while (G__26070__i < G__26070__a.length) {G__26070__a[G__26070__i] = arguments[G__26070__i + 0]; ++G__26070__i;}
  values = new cljs.core.IndexedSeq(G__26070__a,0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__26071){
var values = cljs.core.seq(arglist__26071);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26072_SHARP_){
return domina.set_html_BANG_(p1__26072_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),values);
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1(((function (pairs){
return (function (p1__26073_SHARP_){
var seq__26080 = cljs.core.seq(pairs);
var chunk__26081 = null;
var count__26082 = (0);
var i__26083 = (0);
while(true){
if((i__26083 < count__26082)){
var vec__26084 = chunk__26081.cljs$core$IIndexed$_nth$arity$2(null,i__26083);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26084,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26084,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__26073_SHARP_,name,cljs.core.array_seq([value], 0));

var G__26086 = seq__26080;
var G__26087 = chunk__26081;
var G__26088 = count__26082;
var G__26089 = (i__26083 + (1));
seq__26080 = G__26086;
chunk__26081 = G__26087;
count__26082 = G__26088;
i__26083 = G__26089;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26080);
if(temp__4126__auto__){
var seq__26080__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26080__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__26080__$1);
var G__26090 = cljs.core.chunk_rest(seq__26080__$1);
var G__26091 = c__4651__auto__;
var G__26092 = cljs.core.count(c__4651__auto__);
var G__26093 = (0);
seq__26080 = G__26090;
chunk__26081 = G__26091;
count__26082 = G__26092;
i__26083 = G__26093;
continue;
} else {
var vec__26085 = cljs.core.first(seq__26080__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26085,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26085,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__26073_SHARP_,name,cljs.core.array_seq([value], 0));

var G__26094 = cljs.core.next(seq__26080__$1);
var G__26095 = null;
var G__26096 = (0);
var G__26097 = (0);
seq__26080 = G__26094;
chunk__26081 = G__26095;
count__26082 = G__26096;
i__26083 = G__26097;
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
var G__26098__i = 0, G__26098__a = new Array(arguments.length -  0);
while (G__26098__i < G__26098__a.length) {G__26098__a[G__26098__i] = arguments[G__26098__i + 0]; ++G__26098__i;}
  values = new cljs.core.IndexedSeq(G__26098__a,0);
} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__26099){
var values = cljs.core.seq(arglist__26099);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26100_SHARP_){
var seq__26105 = cljs.core.seq(values);
var chunk__26106 = null;
var count__26107 = (0);
var i__26108 = (0);
while(true){
if((i__26108 < count__26107)){
var name = chunk__26106.cljs$core$IIndexed$_nth$arity$2(null,i__26108);
domina.remove_attr_BANG_(p1__26100_SHARP_,name);

var G__26109 = seq__26105;
var G__26110 = chunk__26106;
var G__26111 = count__26107;
var G__26112 = (i__26108 + (1));
seq__26105 = G__26109;
chunk__26106 = G__26110;
count__26107 = G__26111;
i__26108 = G__26112;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26105);
if(temp__4126__auto__){
var seq__26105__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26105__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__26105__$1);
var G__26113 = cljs.core.chunk_rest(seq__26105__$1);
var G__26114 = c__4651__auto__;
var G__26115 = cljs.core.count(c__4651__auto__);
var G__26116 = (0);
seq__26105 = G__26113;
chunk__26106 = G__26114;
count__26107 = G__26115;
i__26108 = G__26116;
continue;
} else {
var name = cljs.core.first(seq__26105__$1);
domina.remove_attr_BANG_(p1__26100_SHARP_,name);

var G__26117 = cljs.core.next(seq__26105__$1);
var G__26118 = null;
var G__26119 = (0);
var G__26120 = (0);
seq__26105 = G__26117;
chunk__26106 = G__26118;
count__26107 = G__26119;
i__26108 = G__26120;
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
var G__26121__i = 0, G__26121__a = new Array(arguments.length -  0);
while (G__26121__i < G__26121__a.length) {G__26121__a[G__26121__i] = arguments[G__26121__i + 0]; ++G__26121__i;}
  values = new cljs.core.IndexedSeq(G__26121__a,0);
} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__26122){
var values = cljs.core.seq(arglist__26122);
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
var h = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__26127){
var vec__26128 = p__26127;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26128,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26128,(1),null);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.name(n));
}),cljs.core.array_seq([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),forms)], 0));
var G__26129 = node;
var G__26130 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,h);
return goog.dom.setProperties(G__26129,G__26130);
});
};
var set_prop = function (var_args){
var forms = null;
if (arguments.length > 0) {
var G__26131__i = 0, G__26131__a = new Array(arguments.length -  0);
while (G__26131__i < G__26131__a.length) {G__26131__a[G__26131__i] = arguments[G__26131__i + 0]; ++G__26131__i;}
  forms = new cljs.core.IndexedSeq(G__26131__a,0);
} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__26132){
var forms = cljs.core.seq(arglist__26132);
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
var G__26135 = el;
var G__26136 = cls;
return goog.dom.classes.hasClass(G__26135,G__26136);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26137_SHARP_){
var seq__26142 = cljs.core.seq(values);
var chunk__26143 = null;
var count__26144 = (0);
var i__26145 = (0);
while(true){
if((i__26145 < count__26144)){
var val = chunk__26143.cljs$core$IIndexed$_nth$arity$2(null,i__26145);
domina.add_class_BANG_(p1__26137_SHARP_,val);

var G__26146 = seq__26142;
var G__26147 = chunk__26143;
var G__26148 = count__26144;
var G__26149 = (i__26145 + (1));
seq__26142 = G__26146;
chunk__26143 = G__26147;
count__26144 = G__26148;
i__26145 = G__26149;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26142);
if(temp__4126__auto__){
var seq__26142__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26142__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__26142__$1);
var G__26150 = cljs.core.chunk_rest(seq__26142__$1);
var G__26151 = c__4651__auto__;
var G__26152 = cljs.core.count(c__4651__auto__);
var G__26153 = (0);
seq__26142 = G__26150;
chunk__26143 = G__26151;
count__26144 = G__26152;
i__26145 = G__26153;
continue;
} else {
var val = cljs.core.first(seq__26142__$1);
domina.add_class_BANG_(p1__26137_SHARP_,val);

var G__26154 = cljs.core.next(seq__26142__$1);
var G__26155 = null;
var G__26156 = (0);
var G__26157 = (0);
seq__26142 = G__26154;
chunk__26143 = G__26155;
count__26144 = G__26156;
i__26145 = G__26157;
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
var G__26158__i = 0, G__26158__a = new Array(arguments.length -  0);
while (G__26158__i < G__26158__a.length) {G__26158__a[G__26158__i] = arguments[G__26158__i + 0]; ++G__26158__i;}
  values = new cljs.core.IndexedSeq(G__26158__a,0);
} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__26159){
var values = cljs.core.seq(arglist__26159);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26160_SHARP_){
var seq__26165 = cljs.core.seq(values);
var chunk__26166 = null;
var count__26167 = (0);
var i__26168 = (0);
while(true){
if((i__26168 < count__26167)){
var val = chunk__26166.cljs$core$IIndexed$_nth$arity$2(null,i__26168);
domina.remove_class_BANG_(p1__26160_SHARP_,val);

var G__26169 = seq__26165;
var G__26170 = chunk__26166;
var G__26171 = count__26167;
var G__26172 = (i__26168 + (1));
seq__26165 = G__26169;
chunk__26166 = G__26170;
count__26167 = G__26171;
i__26168 = G__26172;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26165);
if(temp__4126__auto__){
var seq__26165__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26165__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__26165__$1);
var G__26173 = cljs.core.chunk_rest(seq__26165__$1);
var G__26174 = c__4651__auto__;
var G__26175 = cljs.core.count(c__4651__auto__);
var G__26176 = (0);
seq__26165 = G__26173;
chunk__26166 = G__26174;
count__26167 = G__26175;
i__26168 = G__26176;
continue;
} else {
var val = cljs.core.first(seq__26165__$1);
domina.remove_class_BANG_(p1__26160_SHARP_,val);

var G__26177 = cljs.core.next(seq__26165__$1);
var G__26178 = null;
var G__26179 = (0);
var G__26180 = (0);
seq__26165 = G__26177;
chunk__26166 = G__26178;
count__26167 = G__26179;
i__26168 = G__26180;
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
var G__26181__i = 0, G__26181__a = new Array(arguments.length -  0);
while (G__26181__i < G__26181__a.length) {G__26181__a[G__26181__i] = arguments[G__26181__i + 0]; ++G__26181__i;}
  values = new cljs.core.IndexedSeq(G__26181__a,0);
} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__26182){
var values = cljs.core.seq(arglist__26182);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26183_SHARP_){
return domina.set_classes_BANG_(p1__26183_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26184__i = 0, G__26184__a = new Array(arguments.length -  0);
while (G__26184__i < G__26184__a.length) {G__26184__a[G__26184__i] = arguments[G__26184__i + 0]; ++G__26184__i;}
  values = new cljs.core.IndexedSeq(G__26184__a,0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__26185){
var values = cljs.core.seq(arglist__26185);
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
var seq__26190 = cljs.core.seq(forms);
var chunk__26191 = null;
var count__26192 = (0);
var i__26193 = (0);
while(true){
if((i__26193 < count__26192)){
var fun = chunk__26191.cljs$core$IIndexed$_nth$arity$2(null,i__26193);
enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(fun,pnod);

var G__26194 = seq__26190;
var G__26195 = chunk__26191;
var G__26196 = count__26192;
var G__26197 = (i__26193 + (1));
seq__26190 = G__26194;
chunk__26191 = G__26195;
count__26192 = G__26196;
i__26193 = G__26197;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26190);
if(temp__4126__auto__){
var seq__26190__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26190__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__26190__$1);
var G__26198 = cljs.core.chunk_rest(seq__26190__$1);
var G__26199 = c__4651__auto__;
var G__26200 = cljs.core.count(c__4651__auto__);
var G__26201 = (0);
seq__26190 = G__26198;
chunk__26191 = G__26199;
count__26192 = G__26200;
i__26193 = G__26201;
continue;
} else {
var fun = cljs.core.first(seq__26190__$1);
enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(fun,pnod);

var G__26202 = cljs.core.next(seq__26190__$1);
var G__26203 = null;
var G__26204 = (0);
var G__26205 = (0);
seq__26190 = G__26202;
chunk__26191 = G__26203;
count__26192 = G__26204;
i__26193 = G__26205;
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
var G__26206__i = 0, G__26206__a = new Array(arguments.length -  0);
while (G__26206__i < G__26206__a.length) {G__26206__a[G__26206__i] = arguments[G__26206__i + 0]; ++G__26206__i;}
  forms = new cljs.core.IndexedSeq(G__26206__a,0);
} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__26207){
var forms = cljs.core.seq(arglist__26207);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__26208_SHARP_,p2__26209_SHARP_){
return domina.append_BANG_(p1__26208_SHARP_,p2__26209_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26210__i = 0, G__26210__a = new Array(arguments.length -  0);
while (G__26210__i < G__26210__a.length) {G__26210__a[G__26210__i] = arguments[G__26210__i + 0]; ++G__26210__i;}
  values = new cljs.core.IndexedSeq(G__26210__a,0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__26211){
var values = cljs.core.seq(arglist__26211);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__26212_SHARP_,p2__26213_SHARP_){
return domina.prepend_BANG_(p1__26212_SHARP_,p2__26213_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26214__i = 0, G__26214__a = new Array(arguments.length -  0);
while (G__26214__i < G__26214__a.length) {G__26214__a[G__26214__i] = arguments[G__26214__i + 0]; ++G__26214__i;}
  values = new cljs.core.IndexedSeq(G__26214__a,0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__26215){
var values = cljs.core.seq(arglist__26215);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__26216_SHARP_,p2__26217_SHARP_){
return domina.insert_before_BANG_(p1__26216_SHARP_,p2__26217_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26218__i = 0, G__26218__a = new Array(arguments.length -  0);
while (G__26218__i < G__26218__a.length) {G__26218__a[G__26218__i] = arguments[G__26218__i + 0]; ++G__26218__i;}
  values = new cljs.core.IndexedSeq(G__26218__a,0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__26219){
var values = cljs.core.seq(arglist__26219);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__26220_SHARP_,p2__26221_SHARP_){
return domina.insert_after_BANG_(p1__26220_SHARP_,p2__26221_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26222__i = 0, G__26222__a = new Array(arguments.length -  0);
while (G__26222__i < G__26222__a.length) {G__26222__a[G__26222__i] = arguments[G__26222__i + 0]; ++G__26222__i;}
  values = new cljs.core.IndexedSeq(G__26222__a,0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__26223){
var values = cljs.core.seq(arglist__26223);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__26224_SHARP_,p2__26225_SHARP_){
return domina.swap_content_BANG_(p1__26224_SHARP_,p2__26225_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26226__i = 0, G__26226__a = new Array(arguments.length -  0);
while (G__26226__i < G__26226__a.length) {G__26226__a[G__26226__i] = arguments[G__26226__i + 0]; ++G__26226__i;}
  values = new cljs.core.IndexedSeq(G__26226__a,0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__26227){
var values = cljs.core.seq(arglist__26227);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26228_SHARP_){
return domina.detach_BANG_(p1__26228_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){
return (function (pnod){
var elem = (function (){var G__26234 = cljs.core.name(elm);
return goog.dom.createElement(G__26234);
})();
enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$2(elem,mattr);

var G__26235_26239 = elem;
var G__26236_26240 = enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pnod.cloneNode(true)], 0));
(enfocus.core.at.cljs$core$IFn$_invoke$arity$2 ? enfocus.core.at.cljs$core$IFn$_invoke$arity$2(G__26235_26239,G__26236_26240) : enfocus.core.at.call(null,G__26235_26239,G__26236_26240));

var G__26237 = pnod;
var G__26238 = enfocus.core.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([elem], 0)),enfocus.core.remove_node()], 0));
return (enfocus.core.at.cljs$core$IFn$_invoke$arity$2 ? enfocus.core.at.cljs$core$IFn$_invoke$arity$2(G__26237,G__26238) : enfocus.core.at.call(null,G__26237,G__26238));
});
});
/**
* replaces a node with all its children
*/
enfocus.core.unwrap = (function unwrap(){
return (function (pnod){
var frag = document.createDocumentFragment();
var G__26245_26249 = frag;
var G__26246_26250 = pnod.childNodes;
goog.dom.append(G__26245_26249,G__26246_26250);

var G__26247 = frag;
var G__26248 = pnod;
return goog.dom.replaceNode(G__26247,G__26248);
});
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.set_style = (function() { 
var set_style__delegate = function (values){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),values);
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1(((function (pairs){
return (function (p1__26251_SHARP_){
var seq__26258 = cljs.core.seq(pairs);
var chunk__26259 = null;
var count__26260 = (0);
var i__26261 = (0);
while(true){
if((i__26261 < count__26260)){
var vec__26262 = chunk__26259.cljs$core$IIndexed$_nth$arity$2(null,i__26261);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26262,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26262,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__26251_SHARP_,name,cljs.core.array_seq([value], 0));

var G__26264 = seq__26258;
var G__26265 = chunk__26259;
var G__26266 = count__26260;
var G__26267 = (i__26261 + (1));
seq__26258 = G__26264;
chunk__26259 = G__26265;
count__26260 = G__26266;
i__26261 = G__26267;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26258);
if(temp__4126__auto__){
var seq__26258__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26258__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__26258__$1);
var G__26268 = cljs.core.chunk_rest(seq__26258__$1);
var G__26269 = c__4651__auto__;
var G__26270 = cljs.core.count(c__4651__auto__);
var G__26271 = (0);
seq__26258 = G__26268;
chunk__26259 = G__26269;
count__26260 = G__26270;
i__26261 = G__26271;
continue;
} else {
var vec__26263 = cljs.core.first(seq__26258__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26263,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26263,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__26251_SHARP_,name,cljs.core.array_seq([value], 0));

var G__26272 = cljs.core.next(seq__26258__$1);
var G__26273 = null;
var G__26274 = (0);
var G__26275 = (0);
seq__26258 = G__26272;
chunk__26259 = G__26273;
count__26260 = G__26274;
i__26261 = G__26275;
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
var G__26276__i = 0, G__26276__a = new Array(arguments.length -  0);
while (G__26276__i < G__26276__a.length) {G__26276__a[G__26276__i] = arguments[G__26276__i + 0]; ++G__26276__i;}
  values = new cljs.core.IndexedSeq(G__26276__a,0);
} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__26277){
var values = cljs.core.seq(arglist__26277);
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
return enfocus.core.style_remove(pnod,values);
});
};
var remove_style = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26278__i = 0, G__26278__a = new Array(arguments.length -  0);
while (G__26278__i < G__26278__a.length) {G__26278__a[G__26278__i] = arguments[G__26278__i + 0]; ++G__26278__i;}
  values = new cljs.core.IndexedSeq(G__26278__a,0);
} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__26279){
var values = cljs.core.seq(arglist__26279);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26280_SHARP_){
return domina.set_data_BANG_(p1__26280_SHARP_,ky,val);
}));
});
/**
* delays and action by a set timeout, note this is an async operations
* @param {...*} var_args
*/
enfocus.core.delay = (function() { 
var delay__delegate = function (ttime,funcs){
return (function (pnod){
return enfocus.core.setTimeout((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(enfocus.core.at,pnod,funcs);
}),ttime);
});
};
var delay = function (ttime,var_args){
var funcs = null;
if (arguments.length > 1) {
var G__26281__i = 0, G__26281__a = new Array(arguments.length -  1);
while (G__26281__i < G__26281__a.length) {G__26281__a[G__26281__i] = arguments[G__26281__i + 1]; ++G__26281__i;}
  funcs = new cljs.core.IndexedSeq(G__26281__a,0);
} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__26282){
var ttime = cljs.core.first(arglist__26282);
var funcs = cljs.core.rest(arglist__26282);
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
return clojure.string.replace(text,/\$\{\s*(\S+)\s*}/,(function (p1__26284_SHARP_,p2__26283_SHARP_){
var G__26310 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p2__26283_SHARP_);
return (vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(G__26310) : vars.call(null,G__26310));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__26321_26329 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(pnod.attributes.length));
var chunk__26322_26330 = null;
var count__26323_26331 = (0);
var i__26324_26332 = (0);
while(true){
if((i__26324_26332 < count__26323_26331)){
var idx_26333 = chunk__26322_26330.cljs$core$IIndexed$_nth$arity$2(null,i__26324_26332);
var attr_26334 = pnod.attributes.item(idx_26333);
if(cljs.core.truth_(attr_26334.specified)){
attr_26334.value = rep_str(attr_26334.value);
} else {
}

var G__26335 = seq__26321_26329;
var G__26336 = chunk__26322_26330;
var G__26337 = count__26323_26331;
var G__26338 = (i__26324_26332 + (1));
seq__26321_26329 = G__26335;
chunk__26322_26330 = G__26336;
count__26323_26331 = G__26337;
i__26324_26332 = G__26338;
continue;
} else {
var temp__4126__auto___26339 = cljs.core.seq(seq__26321_26329);
if(temp__4126__auto___26339){
var seq__26321_26340__$1 = temp__4126__auto___26339;
if(cljs.core.chunked_seq_QMARK_(seq__26321_26340__$1)){
var c__4651__auto___26341 = cljs.core.chunk_first(seq__26321_26340__$1);
var G__26342 = cljs.core.chunk_rest(seq__26321_26340__$1);
var G__26343 = c__4651__auto___26341;
var G__26344 = cljs.core.count(c__4651__auto___26341);
var G__26345 = (0);
seq__26321_26329 = G__26342;
chunk__26322_26330 = G__26343;
count__26323_26331 = G__26344;
i__26324_26332 = G__26345;
continue;
} else {
var idx_26346 = cljs.core.first(seq__26321_26340__$1);
var attr_26347 = pnod.attributes.item(idx_26346);
if(cljs.core.truth_(attr_26347.specified)){
attr_26347.value = rep_str(attr_26347.value);
} else {
}

var G__26348 = cljs.core.next(seq__26321_26340__$1);
var G__26349 = null;
var G__26350 = (0);
var G__26351 = (0);
seq__26321_26329 = G__26348;
chunk__26322_26330 = G__26349;
count__26323_26331 = G__26350;
i__26324_26332 = G__26351;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pnod.nodeType,(3))){
return pnod.nodeValue = rep_str(pnod.nodeValue);
} else {
var seq__26325 = cljs.core.seq(enfocus.core.nodes__GT_coll(pnod.childNodes));
var chunk__26326 = null;
var count__26327 = (0);
var i__26328 = (0);
while(true){
if((i__26328 < count__26327)){
var cnode = chunk__26326.cljs$core$IIndexed$_nth$arity$2(null,i__26328);
rep_node(cnode);

var G__26352 = seq__26325;
var G__26353 = chunk__26326;
var G__26354 = count__26327;
var G__26355 = (i__26328 + (1));
seq__26325 = G__26352;
chunk__26326 = G__26353;
count__26327 = G__26354;
i__26328 = G__26355;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26325);
if(temp__4126__auto__){
var seq__26325__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26325__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__26325__$1);
var G__26356 = cljs.core.chunk_rest(seq__26325__$1);
var G__26357 = c__4651__auto__;
var G__26358 = cljs.core.count(c__4651__auto__);
var G__26359 = (0);
seq__26325 = G__26356;
chunk__26326 = G__26357;
count__26327 = G__26358;
i__26328 = G__26359;
continue;
} else {
var cnode = cljs.core.first(seq__26325__$1);
rep_node(cnode);

var G__26360 = cljs.core.next(seq__26325__$1);
var G__26361 = null;
var G__26362 = (0);
var G__26363 = (0);
seq__26325 = G__26360;
chunk__26326 = G__26361;
count__26327 = G__26362;
i__26328 = G__26363;
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
if(cljs.core.coll_QMARK_(col_or_val)){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([val], true),col_or_val);
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col_or_val,val);
}
});
/**
* sets the value of a form input (text,select,checkbox,etc...)
* format (at node (set-form-input value))
*/
enfocus.core.set_form_input = (function set_form_input(val){
return (function (el){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el.type,"checkbox")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el.type,"radio"))){
return el.checked = enfocus.core.exists_in_QMARK_(val,el.value);
} else {
var nval = (((cljs.core.coll_QMARK_(val)) && (!(typeof val === 'string')))?cljs.core.vec(val):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el.type,"select-multiple"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null):val));
var G__26366 = el;
var G__26367 = cljs.core.clj__GT_js(nval);
return goog.dom.forms.setValue(G__26366,G__26367);
}
});
});
/**
* sets the values of a form based on a map
* (set-form {:val1 'val' :val2 'val'})
*/
enfocus.core.set_form = (function set_form(value_map){
return (function (form_node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form_node.nodeName,"FORM")){
var seq__26374 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(form_node.length));
var chunk__26375 = null;
var count__26376 = (0);
var i__26377 = (0);
while(true){
if((i__26377 < count__26376)){
var idx = chunk__26375.cljs$core$IIndexed$_nth$arity$2(null,i__26377);
var el_26380 = (form_node.elements[idx]);
var ky_26381 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(el_26380.name);
var val_26382 = (function (){var G__26378 = value_map;
return (ky_26381.cljs$core$IFn$_invoke$arity$1 ? ky_26381.cljs$core$IFn$_invoke$arity$1(G__26378) : ky_26381.call(null,G__26378));
})();
if(cljs.core.contains_QMARK_(value_map,ky_26381)){
var val_26383__$1 = (cljs.core.truth_(val_26382)?val_26382:"");
enfocus.core.set_form_input(val_26383__$1).call(null,el_26380);
} else {
}

var G__26384 = seq__26374;
var G__26385 = chunk__26375;
var G__26386 = count__26376;
var G__26387 = (i__26377 + (1));
seq__26374 = G__26384;
chunk__26375 = G__26385;
count__26376 = G__26386;
i__26377 = G__26387;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26374);
if(temp__4126__auto__){
var seq__26374__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26374__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__26374__$1);
var G__26388 = cljs.core.chunk_rest(seq__26374__$1);
var G__26389 = c__4651__auto__;
var G__26390 = cljs.core.count(c__4651__auto__);
var G__26391 = (0);
seq__26374 = G__26388;
chunk__26375 = G__26389;
count__26376 = G__26390;
i__26377 = G__26391;
continue;
} else {
var idx = cljs.core.first(seq__26374__$1);
var el_26392 = (form_node.elements[idx]);
var ky_26393 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(el_26392.name);
var val_26394 = (function (){var G__26379 = value_map;
return (ky_26393.cljs$core$IFn$_invoke$arity$1 ? ky_26393.cljs$core$IFn$_invoke$arity$1(G__26379) : ky_26393.call(null,G__26379));
})();
if(cljs.core.contains_QMARK_(value_map,ky_26393)){
var val_26395__$1 = (cljs.core.truth_(val_26394)?val_26394:"");
enfocus.core.set_form_input(val_26395__$1).call(null,el_26392);
} else {
}

var G__26396 = cljs.core.next(seq__26374__$1);
var G__26397 = null;
var G__26398 = (0);
var G__26399 = (0);
seq__26374 = G__26396;
chunk__26375 = G__26397;
count__26376 = G__26398;
i__26377 = G__26399;
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
if(cljs.core.vector_QMARK_(node_spec)){
var vec__26409 = node_spec;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26409,(0),null);
var vec__26410 = cljs.core.nthnext(vec__26409,(1));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26410,(0),null);
var ms = cljs.core.nthnext(vec__26410,(1));
var more = vec__26410;
var vec__26411 = cljs.core.name(tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26411,(0),null);
var segments = cljs.core.nthnext(vec__26411,(1));
var id = cljs.core.some(((function (vec__26409,tag,vec__26410,m,ms,more,vec__26411,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",seg.charAt((0)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(seg,(1));
} else {
return null;
}
});})(vec__26409,tag,vec__26410,m,ms,more,vec__26411,tag_name,segments))
,segments);
var classes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (vec__26409,tag,vec__26410,m,ms,more,vec__26411,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",seg.charAt((0)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(seg,(1));
} else {
return null;
}
});})(vec__26409,tag,vec__26410,m,ms,more,vec__26411,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_(m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.constant$keyword$37,id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_(classes)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.constant$keyword$38,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",classes))):attrs__$1);
var content = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(html,((cljs.core.map_QMARK_(m))?ms:more)));
var node = document.createElement(tag_name);
var seq__26412_26418 = cljs.core.seq(attrs__$2);
var chunk__26413_26419 = null;
var count__26414_26420 = (0);
var i__26415_26421 = (0);
while(true){
if((i__26415_26421 < count__26414_26420)){
var vec__26416_26422 = chunk__26413_26419.cljs$core$IIndexed$_nth$arity$2(null,i__26415_26421);
var key_26423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26416_26422,(0),null);
var val_26424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26416_26422,(1),null);
node.setAttribute(cljs.core.name(key_26423),val_26424);

var G__26425 = seq__26412_26418;
var G__26426 = chunk__26413_26419;
var G__26427 = count__26414_26420;
var G__26428 = (i__26415_26421 + (1));
seq__26412_26418 = G__26425;
chunk__26413_26419 = G__26426;
count__26414_26420 = G__26427;
i__26415_26421 = G__26428;
continue;
} else {
var temp__4126__auto___26429 = cljs.core.seq(seq__26412_26418);
if(temp__4126__auto___26429){
var seq__26412_26430__$1 = temp__4126__auto___26429;
if(cljs.core.chunked_seq_QMARK_(seq__26412_26430__$1)){
var c__4651__auto___26431 = cljs.core.chunk_first(seq__26412_26430__$1);
var G__26432 = cljs.core.chunk_rest(seq__26412_26430__$1);
var G__26433 = c__4651__auto___26431;
var G__26434 = cljs.core.count(c__4651__auto___26431);
var G__26435 = (0);
seq__26412_26418 = G__26432;
chunk__26413_26419 = G__26433;
count__26414_26420 = G__26434;
i__26415_26421 = G__26435;
continue;
} else {
var vec__26417_26436 = cljs.core.first(seq__26412_26430__$1);
var key_26437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26417_26436,(0),null);
var val_26438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26417_26436,(1),null);
node.setAttribute(cljs.core.name(key_26437),val_26438);

var G__26439 = cljs.core.next(seq__26412_26430__$1);
var G__26440 = null;
var G__26441 = (0);
var G__26442 = (0);
seq__26412_26418 = G__26439;
chunk__26413_26419 = G__26440;
count__26414_26420 = G__26441;
i__26415_26421 = G__26442;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(content)){
return domina.append_BANG_(node,content);
} else {
return null;
}
} else {
if(cljs.core.sequential_QMARK_(node_spec)){
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(html,node_spec));
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
return enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$1((function (pnod){
return pnod.getAttribute(cljs.core.name(attr));
}));
});
/**
* returns the text value of the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_text = (function get_text(){
return enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$1((function (pnod){
var G__26444 = pnod;
return goog.dom.getTextContent(G__26444);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.get_data = (function() {
var get_data = null;
var get_data__1 = (function (ky){
return get_data.cljs$core$IFn$_invoke$arity$2(ky,false);
});
var get_data__2 = (function (ky,bubble){
return enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$1((function (node){
return domina.get_data.cljs$core$IFn$_invoke$arity$3(node,ky,bubble);
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
return enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$1((function (pnod){
return (pnod[cljs.core.name(prop)]);
}));
});
/**
* this function takes a map, key and value.  It will check if
* the value exists and create a seq of values if one exits.
*/
enfocus.core.merge_form_val = (function merge_form_val(form_map,ky,val){
var mval = (function (){var G__26448 = ky;
return (form_map.cljs$core$IFn$_invoke$arity$1 ? form_map.cljs$core$IFn$_invoke$arity$1(G__26448) : form_map.call(null,G__26448));
})();
if(cljs.core.truth_(val)){
if((cljs.core.coll_QMARK_(mval)) && (cljs.core.coll_QMARK_(val))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_map,ky,cljs.core.into.cljs$core$IFn$_invoke$arity$2(mval,val));
} else {
if(cljs.core.coll_QMARK_(mval)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_map,ky,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(mval,val));
} else {
if(cljs.core.truth_(mval)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_map,ky,cljs.core.PersistentHashSet.fromArray([mval,val], true));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_map,ky,val);

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
var nod_col = enfocus.core.nodes__GT_coll(nodes);
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nod_col){
return (function (p1__26450_SHARP_,p2__26449_SHARP_){
var vals = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__26468 = p2__26449_SHARP_;
return goog.dom.forms.getValue(G__26468);
})());
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_(vals))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__26450_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26450_SHARP_,vals);
} else {
return p1__26450_SHARP_;
}
}
});})(nod_col))
,cljs.core.PersistentHashSet.EMPTY,nod_col);
if(cljs.core.empty_QMARK_(result)){
return null;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(result))) && (cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["checkbox",null,"select-multiple",null], null), null).call(null,cljs.core.first(nod_col).type)))){
return cljs.core.first(result);
} else {
return result;

}
}
});
if(typeof enfocus.core.t26469 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t26469 = (function (trans,read_form_input,meta26470){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta26470 = meta26470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t26469.prototype.call = ((function (trans){
return (function() {
var G__26485 = null;
var G__26485__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26473 = nodes;
var G__26474 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26473,G__26474) : self__.trans.call(null,G__26473,G__26474));
});
var G__26485__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26475 = nodes;
var G__26476 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26475,G__26476) : self__.trans.call(null,G__26475,G__26476));
});
G__26485 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__26485__2.call(this,self__,nodes);
case 3:
return G__26485__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26485.cljs$core$IFn$_invoke$arity$2 = G__26485__2;
G__26485.cljs$core$IFn$_invoke$arity$3 = G__26485__3;
return G__26485;
})()
;})(trans))
;

enfocus.core.t26469.prototype.apply = ((function (trans){
return (function (self__,args26472){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26472)));
});})(trans))
;

enfocus.core.t26469.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
var G__26477 = nodes;
var G__26478 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26477,G__26478) : self__.trans.call(null,G__26477,G__26478));
});})(trans))
;

enfocus.core.t26469.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
var G__26479 = nodes;
var G__26480 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26479,G__26480) : self__.trans.call(null,G__26479,G__26480));
});})(trans))
;

enfocus.core.t26469.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t26469.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
var G__26481 = nodes;
var G__26482 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26481,G__26482) : self__.trans.call(null,G__26481,G__26482));
});})(trans))
;

enfocus.core.t26469.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
var G__26483 = nodes;
var G__26484 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26483,G__26484) : self__.trans.call(null,G__26483,G__26484));
});})(trans))
;

enfocus.core.t26469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_26471){
var self__ = this;
var _26471__$1 = this;
return self__.meta26470;
});})(trans))
;

enfocus.core.t26469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_26471,meta26470__$1){
var self__ = this;
var _26471__$1 = this;
return (new enfocus.core.t26469(self__.trans,self__.read_form_input,meta26470__$1));
});})(trans))
;

enfocus.core.t26469.cljs$lang$type = true;

enfocus.core.t26469.cljs$lang$ctorStr = "enfocus.core/t26469";

enfocus.core.t26469.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"enfocus.core/t26469");
});})(trans))
;

enfocus.core.__GT_t26469 = ((function (trans){
return (function __GT_t26469(trans__$1,read_form_input__$1,meta26470){
return (new enfocus.core.t26469(trans__$1,read_form_input__$1,meta26470));
});})(trans))
;

}

return (new enfocus.core.t26469(trans,read_form_input,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$1((function (node){
var inputs = node.elements;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (inputs){
return (function (p1__26487_SHARP_,p2__26486_SHARP_){
if(!(cljs.core.empty_QMARK_(inputs.item(p2__26486_SHARP_).name))){
return enfocus.core.merge_form_val(p1__26487_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inputs.item(p2__26486_SHARP_).name),enfocus.core.read_form_input().call(null,inputs.item(p2__26486_SHARP_)));
} else {
return p1__26487_SHARP_;
}
});})(inputs))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(inputs.length));
}));
});
enfocus.core.reg_filt = (function (){var G__26488 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26488) : cljs.core.atom.call(null,G__26488));
})();
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.filter = (function filter(tst,trans){
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function() {
var filt = null;
var filt__1 = (function (pnodes){
return filt.cljs$core$IFn$_invoke$arity$2(pnodes,null);
});
var filt__2 = (function (pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll(pnodes);
var ttest = (((tst instanceof cljs.core.Keyword))?(function (){var G__26496 = enfocus.core.reg_filt;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26496) : cljs.core.deref.call(null,G__26496));
})().call(null,tst):tst);
var res = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(ttest,pnod_col);
if((chain == null)){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(trans,res);
} else {
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$3(trans,res,chain);
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enfocus.core.reg_filt,cljs.core.assoc,ky,func);
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
enfocus.core.register_filter(cljs.core.constant$keyword$39,enfocus.core.selected_options);
enfocus.core.register_filter(cljs.core.constant$keyword$40,enfocus.core.checked_radio_checkbox);
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
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll(enfocus.core.select.cljs$core$IFn$_invoke$arity$1(node)));

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
return create_sel_str.cljs$core$IFn$_invoke$arity$2("",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26497_SHARP_){
if((p1__26497_SHARP_ instanceof cljs.core.Symbol)){
var G__26502 = p1__26497_SHARP_;
return (enfocus.core.css_syms.cljs$core$IFn$_invoke$arity$1 ? enfocus.core.css_syms.cljs$core$IFn$_invoke$arity$1(G__26502) : enfocus.core.css_syms.call(null,G__26502));
} else {
if((p1__26497_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name(p1__26497_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_(p1__26497_SHARP_)){
return create_sel_str.cljs$core$IFn$_invoke$arity$1(p1__26497_SHARP_);
} else {
if(typeof p1__26497_SHARP_ === 'string'){
return p1__26497_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
return css_select.cljs$core$IFn$_invoke$arity$3("",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){
return css_select.cljs$core$IFn$_invoke$arity$3("",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){
var sel = clojure.string.trim(enfocus.enlive.syntax.convert(enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$2(id_mask_sym,css_sel)));
var ret = domina.css.sel.cljs$core$IFn$_invoke$arity$2(dom_node,sel);
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
var cnt = cljs.core.count(trans);
var sel_QMARK_ = (function (){var and__3852__auto__ = !((node == null));
if(and__3852__auto__){
var G__26519 = node;
if(G__26519){
var bit__4545__auto__ = null;
if(cljs.core.truth_((function (){var or__3864__auto__ = bit__4545__auto__;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return G__26519.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__26519.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__26519);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__26519);
}
} else {
return and__3852__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cnt))){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),node);
} else {
var vec__26520 = ((sel_QMARK_)?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(trans,node)),document):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26520,(0),null);
var trans__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26520,(1),null);
var seq__26521 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),trans__$1));
var chunk__26522 = null;
var count__26523 = (0);
var i__26524 = (0);
while(true){
if((i__26524 < count__26523)){
var vec__26525 = chunk__26522.cljs$core$IIndexed$_nth$arity$2(null,i__26524);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26525,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26525,(1),null);
enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(enfocus.core.nil_t(t),enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,id_mask));

var G__26527 = seq__26521;
var G__26528 = chunk__26522;
var G__26529 = count__26523;
var G__26530 = (i__26524 + (1));
seq__26521 = G__26527;
chunk__26522 = G__26528;
count__26523 = G__26529;
i__26524 = G__26530;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26521);
if(temp__4126__auto__){
var seq__26521__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26521__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__26521__$1);
var G__26531 = cljs.core.chunk_rest(seq__26521__$1);
var G__26532 = c__4651__auto__;
var G__26533 = cljs.core.count(c__4651__auto__);
var G__26534 = (0);
seq__26521 = G__26531;
chunk__26522 = G__26532;
count__26523 = G__26533;
i__26524 = G__26534;
continue;
} else {
var vec__26526 = cljs.core.first(seq__26521__$1);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26526,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26526,(1),null);
enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(enfocus.core.nil_t(t),enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,id_mask));

var G__26535 = cljs.core.next(seq__26521__$1);
var G__26536 = null;
var G__26537 = (0);
var G__26538 = (0);
seq__26521 = G__26535;
chunk__26522 = G__26536;
count__26523 = G__26537;
i__26524 = G__26538;
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
var G__26539__i = 0, G__26539__a = new Array(arguments.length -  2);
while (G__26539__i < G__26539__a.length) {G__26539__a[G__26539__i] = arguments[G__26539__i + 2]; ++G__26539__i;}
  trans = new cljs.core.IndexedSeq(G__26539__a,0);
} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__26540){
var id_mask = cljs.core.first(arglist__26540);
arglist__26540 = cljs.core.next(arglist__26540);
var node = cljs.core.first(arglist__26540);
var trans = cljs.core.rest(arglist__26540);
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
var G__26541__i = 0, G__26541__a = new Array(arguments.length -  1);
while (G__26541__i < G__26541__a.length) {G__26541__a[G__26541__i] = arguments[G__26541__i + 1]; ++G__26541__i;}
  trans = new cljs.core.IndexedSeq(G__26541__a,0);
} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__26542){
var node = cljs.core.first(arglist__26542);
var trans = cljs.core.rest(arglist__26542);
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
var cnt = cljs.core.count(trans);
var sel_QMARK_ = (function (){var G__26547 = node;
if(G__26547){
var bit__4545__auto__ = null;
if(cljs.core.truth_((function (){var or__3864__auto__ = bit__4545__auto__;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return G__26547.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__26547.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__26547);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__26547);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cnt))){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),enfocus.core.select.cljs$core$IFn$_invoke$arity$1(node));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cnt)){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),node);
} else {
var vec__26548 = ((sel_QMARK_)?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(trans,node)),document):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26548,(0),null);
var trans__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26548,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (vec__26548,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__26549){
var vec__26550 = p__26549;
var ky = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26550,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26550,(1),null);
var ext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26550,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(ext,enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,""))], null);
});})(vec__26548,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.array_seq([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),trans__$1)], 0)));

}
}
};
var from = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
var G__26551__i = 0, G__26551__a = new Array(arguments.length -  1);
while (G__26551__i < G__26551__a.length) {G__26551__a[G__26551__i] = arguments[G__26551__i + 1]; ++G__26551__i;}
  trans = new cljs.core.IndexedSeq(G__26551__a,0);
} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__26552){
var node = cljs.core.first(arglist__26552);
var trans = cljs.core.rest(arglist__26552);
return from__delegate(node,trans);
});
from.cljs$core$IFn$_invoke$arity$variadic = from__delegate;
return from;
})()
;
enfocus.core.xpath = (function xpath(path){
return (function (root,id_mask){
if(cljs.core.empty_QMARK_(id_mask)){
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(root,path);
} else {
var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));
var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(root,mpath);
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
var G__26555 = null;
var G__26555__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__26555__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__26555__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__26555 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__26555__1.call(this,this$);
case 2:
return G__26555__2.call(this,this$,root);
case 3:
return G__26555__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26555.cljs$core$IFn$_invoke$arity$1 = G__26555__1;
G__26555.cljs$core$IFn$_invoke$arity$2 = G__26555__2;
G__26555.cljs$core$IFn$_invoke$arity$3 = G__26555__3;
return G__26555;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__26556 = null;
var G__26556__1 = (function (this$){
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,document,"");
});
var G__26556__2 = (function (this$,root){
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,root,"");
});
var G__26556__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3(id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__26556 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__26556__1.call(this,this$);
case 2:
return G__26556__2.call(this,this$,root);
case 3:
return G__26556__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26556.cljs$core$IFn$_invoke$arity$1 = G__26556__1;
G__26556.cljs$core$IFn$_invoke$arity$2 = G__26556__2;
G__26556.cljs$core$IFn$_invoke$arity$3 = G__26556__3;
return G__26556;
})()
);

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){
var this$__$1 = this;
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$__$1,document,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){
var this$__$1 = this;
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$__$1,root,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){
var this$__$1 = this;
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3(id_mask,root,this$__$1);
});

(enfocus.core.ISelector["function"] = true);

(enfocus.core.select["function"] = (function() {
var G__26557 = null;
var G__26557__1 = (function (this$){
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,document,"");
});
var G__26557__2 = (function (this$,root){
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,root,"");
});
var G__26557__3 = (function (this$,root,id_mask){
var G__26553 = root;
var G__26554 = id_mask;
return (this$.cljs$core$IFn$_invoke$arity$2 ? this$.cljs$core$IFn$_invoke$arity$2(G__26553,G__26554) : this$.call(null,G__26553,G__26554));
});
G__26557 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__26557__1.call(this,this$);
case 2:
return G__26557__2.call(this,this$,root);
case 3:
return G__26557__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26557.cljs$core$IFn$_invoke$arity$1 = G__26557__1;
G__26557.cljs$core$IFn$_invoke$arity$2 = G__26557__2;
G__26557.cljs$core$IFn$_invoke$arity$3 = G__26557__3;
return G__26557;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__26558 = null;
var G__26558__2 = (function (trans,nodes){
return nodes;
});
var G__26558__3 = (function (trans,nodes,chain){
return nodes;
});
G__26558 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__26558__2.call(this,trans,nodes);
case 3:
return G__26558__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26558.cljs$core$IFn$_invoke$arity$2 = G__26558__2;
G__26558.cljs$core$IFn$_invoke$arity$3 = G__26558__3;
return G__26558;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__26559 = null;
var G__26559__2 = (function (trans,nodes){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(trans,enfocus.core.nodes__GT_coll(nodes)));
});
var G__26559__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll(nodes);
var val = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else {
return val;
}
});
G__26559 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__26559__2.call(this,trans,nodes);
case 3:
return G__26559__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26559.cljs$core$IFn$_invoke$arity$2 = G__26559__2;
G__26559.cljs$core$IFn$_invoke$arity$3 = G__26559__3;
return G__26559;
})()
);
