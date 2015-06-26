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







enfocus.core.ISelector = (function (){var obj25763 = {};
return obj25763;
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
return (function (){var or__3815__auto__ = (enfocus.core.select[(function (){var G__25771 = x__4459__auto__;
return goog.typeOf(G__25771);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (enfocus.core.select["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ISelector.select",this$);
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
return (function (){var or__3815__auto__ = (enfocus.core.select[(function (){var G__25773 = x__4459__auto__;
return goog.typeOf(G__25773);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (enfocus.core.select["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ISelector.select",this$);
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
return (function (){var or__3815__auto__ = (enfocus.core.select[(function (){var G__25775 = x__4459__auto__;
return goog.typeOf(G__25775);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (enfocus.core.select["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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


enfocus.core.ITransform = (function (){var obj25777 = {};
return obj25777;
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
return (function (){var or__3815__auto__ = (enfocus.core.apply_transform[(function (){var G__25783 = x__4459__auto__;
return goog.typeOf(G__25783);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransform.apply-transform",this$);
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
return (function (){var or__3815__auto__ = (enfocus.core.apply_transform[(function (){var G__25785 = x__4459__auto__;
return goog.typeOf(G__25785);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
if(cljs.core.truth_((function (){var and__3803__auto__ = enfocus.core.debug;
if(cljs.core.truth_(and__3803__auto__)){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
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
var G__25788 = func;
var G__25789 = ttime;
return goog.Timer.callOnce(G__25788,G__25789);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
var G__25791 = tst;
return goog.dom.isNodeLike(G__25791);
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

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__25792_SHARP_){
if(typeof p1__25792_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25794 = p1__25792_SHARP_;
return goog.dom.createTextNode(G__25794);
})()], null);
} else {
return enfocus.core.nodes__GT_coll(p1__25792_SHARP_);

}
}),cljs.core.array_seq([values], 0));
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__25807_25819 = cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,values));
var chunk__25808_25820 = null;
var count__25809_25821 = (0);
var i__25810_25822 = (0);
while(true){
if((i__25810_25822 < count__25809_25821)){
var vec__25811_25823 = chunk__25808_25820.cljs$core$IIndexed$_nth$arity$2(null,i__25810_25822);
var attr_25824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25811_25823,(0),null);
var value_25825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25811_25823,(1),null);
var G__25812_25826 = obj;
var G__25813_25827 = cljs.core.name(attr_25824);
var G__25814_25828 = value_25825;
goog.style.setStyle(G__25812_25826,G__25813_25827,G__25814_25828);

var G__25829 = seq__25807_25819;
var G__25830 = chunk__25808_25820;
var G__25831 = count__25809_25821;
var G__25832 = (i__25810_25822 + (1));
seq__25807_25819 = G__25829;
chunk__25808_25820 = G__25830;
count__25809_25821 = G__25831;
i__25810_25822 = G__25832;
continue;
} else {
var temp__4126__auto___25833 = cljs.core.seq(seq__25807_25819);
if(temp__4126__auto___25833){
var seq__25807_25834__$1 = temp__4126__auto___25833;
if(cljs.core.chunked_seq_QMARK_(seq__25807_25834__$1)){
var c__4602__auto___25835 = cljs.core.chunk_first(seq__25807_25834__$1);
var G__25836 = cljs.core.chunk_rest(seq__25807_25834__$1);
var G__25837 = c__4602__auto___25835;
var G__25838 = cljs.core.count(c__4602__auto___25835);
var G__25839 = (0);
seq__25807_25819 = G__25836;
chunk__25808_25820 = G__25837;
count__25809_25821 = G__25838;
i__25810_25822 = G__25839;
continue;
} else {
var vec__25815_25840 = cljs.core.first(seq__25807_25834__$1);
var attr_25841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25815_25840,(0),null);
var value_25842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25815_25840,(1),null);
var G__25816_25843 = obj;
var G__25817_25844 = cljs.core.name(attr_25841);
var G__25818_25845 = value_25842;
goog.style.setStyle(G__25816_25843,G__25817_25844,G__25818_25845);

var G__25846 = cljs.core.next(seq__25807_25834__$1);
var G__25847 = null;
var G__25848 = (0);
var G__25849 = (0);
seq__25807_25819 = G__25846;
chunk__25808_25820 = G__25847;
count__25809_25821 = G__25848;
i__25810_25822 = G__25849;
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
var seq__25860 = cljs.core.seq(values);
var chunk__25861 = null;
var count__25862 = (0);
var i__25863 = (0);
while(true){
if((i__25863 < count__25862)){
var attr = chunk__25861.cljs$core$IIndexed$_nth$arity$2(null,i__25863);
if(cljs.core.truth_(goog.userAgent.IE)){
var G__25864_25870 = obj;
var G__25865_25871 = cljs.core.name(attr);
var G__25866_25872 = "";
goog.style.setStyle(G__25864_25870,G__25865_25871,G__25866_25872);
} else {
obj.style.removeProperty(cljs.core.name(attr));
}

var G__25873 = seq__25860;
var G__25874 = chunk__25861;
var G__25875 = count__25862;
var G__25876 = (i__25863 + (1));
seq__25860 = G__25873;
chunk__25861 = G__25874;
count__25862 = G__25875;
i__25863 = G__25876;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__25860);
if(temp__4126__auto__){
var seq__25860__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25860__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__25860__$1);
var G__25877 = cljs.core.chunk_rest(seq__25860__$1);
var G__25878 = c__4602__auto__;
var G__25879 = cljs.core.count(c__4602__auto__);
var G__25880 = (0);
seq__25860 = G__25877;
chunk__25861 = G__25878;
count__25862 = G__25879;
i__25863 = G__25880;
continue;
} else {
var attr = cljs.core.first(seq__25860__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
var G__25867_25881 = obj;
var G__25868_25882 = cljs.core.name(attr);
var G__25869_25883 = "";
goog.style.setStyle(G__25867_25881,G__25868_25882,G__25869_25883);
} else {
obj.style.removeProperty(cljs.core.name(attr));
}

var G__25884 = cljs.core.next(seq__25860__$1);
var G__25885 = null;
var G__25886 = (0);
var G__25887 = (0);
seq__25860 = G__25884;
chunk__25861 = G__25885;
count__25862 = G__25886;
i__25863 = G__25887;
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
var G__25890 = step;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__25890) : Math.floor.call(null,G__25890));
} else {
var G__25891 = step;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__25891) : Math.ceil.call(null,G__25891));
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){
if(cljs.core.truth_(elem)){
if(cljs.core.map_QMARK_(ats)){
var seq__25904_25910 = cljs.core.seq(ats);
var chunk__25905_25911 = null;
var count__25906_25912 = (0);
var i__25907_25913 = (0);
while(true){
if((i__25907_25913 < count__25906_25912)){
var vec__25908_25914 = chunk__25905_25911.cljs$core$IIndexed$_nth$arity$2(null,i__25907_25913);
var k_25915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25908_25914,(0),null);
var v_25916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25908_25914,(1),null);
add_map_attrs.cljs$core$IFn$_invoke$arity$3(elem,k_25915,v_25916);

var G__25917 = seq__25904_25910;
var G__25918 = chunk__25905_25911;
var G__25919 = count__25906_25912;
var G__25920 = (i__25907_25913 + (1));
seq__25904_25910 = G__25917;
chunk__25905_25911 = G__25918;
count__25906_25912 = G__25919;
i__25907_25913 = G__25920;
continue;
} else {
var temp__4126__auto___25921 = cljs.core.seq(seq__25904_25910);
if(temp__4126__auto___25921){
var seq__25904_25922__$1 = temp__4126__auto___25921;
if(cljs.core.chunked_seq_QMARK_(seq__25904_25922__$1)){
var c__4602__auto___25923 = cljs.core.chunk_first(seq__25904_25922__$1);
var G__25924 = cljs.core.chunk_rest(seq__25904_25922__$1);
var G__25925 = c__4602__auto___25923;
var G__25926 = cljs.core.count(c__4602__auto___25923);
var G__25927 = (0);
seq__25904_25910 = G__25924;
chunk__25905_25911 = G__25925;
count__25906_25912 = G__25926;
i__25907_25913 = G__25927;
continue;
} else {
var vec__25909_25928 = cljs.core.first(seq__25904_25922__$1);
var k_25929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25909_25928,(0),null);
var v_25930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25909_25928,(1),null);
add_map_attrs.cljs$core$IFn$_invoke$arity$3(elem,k_25929,v_25930);

var G__25931 = cljs.core.next(seq__25904_25922__$1);
var G__25932 = null;
var G__25933 = (0);
var G__25934 = (0);
seq__25904_25910 = G__25931;
chunk__25905_25911 = G__25932;
count__25906_25912 = G__25933;
i__25907_25913 = G__25934;
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
enfocus.core.tpl_load_cnt = (function (){var G__25935 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25935) : cljs.core.atom.call(null,G__25935));
})();
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = (function (){var G__25936 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25936) : cljs.core.atom.call(null,G__25936));
})();
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div = (function (){var G__25951 = "div";
var G__25952 = enfocus.core.hide_style;
return goog.dom.createDom(G__25951,G__25952);
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeType,(11))){
var G__25953_25965 = div;
var G__25954_25966 = child;
goog.dom.appendChild(G__25953_25965,G__25954_25966);
} else {
enfocus.core.log_debug(cljs.core.count(domina.nodes(child)));

var seq__25955_25967 = cljs.core.seq(domina.nodes(child));
var chunk__25956_25968 = null;
var count__25957_25969 = (0);
var i__25958_25970 = (0);
while(true){
if((i__25958_25970 < count__25957_25969)){
var node_25971 = chunk__25956_25968.cljs$core$IIndexed$_nth$arity$2(null,i__25958_25970);
var G__25959_25972 = div;
var G__25960_25973 = node_25971;
goog.dom.appendChild(G__25959_25972,G__25960_25973);

var G__25974 = seq__25955_25967;
var G__25975 = chunk__25956_25968;
var G__25976 = count__25957_25969;
var G__25977 = (i__25958_25970 + (1));
seq__25955_25967 = G__25974;
chunk__25956_25968 = G__25975;
count__25957_25969 = G__25976;
i__25958_25970 = G__25977;
continue;
} else {
var temp__4126__auto___25978 = cljs.core.seq(seq__25955_25967);
if(temp__4126__auto___25978){
var seq__25955_25979__$1 = temp__4126__auto___25978;
if(cljs.core.chunked_seq_QMARK_(seq__25955_25979__$1)){
var c__4602__auto___25980 = cljs.core.chunk_first(seq__25955_25979__$1);
var G__25981 = cljs.core.chunk_rest(seq__25955_25979__$1);
var G__25982 = c__4602__auto___25980;
var G__25983 = cljs.core.count(c__4602__auto___25980);
var G__25984 = (0);
seq__25955_25967 = G__25981;
chunk__25956_25968 = G__25982;
count__25957_25969 = G__25983;
i__25958_25970 = G__25984;
continue;
} else {
var node_25985 = cljs.core.first(seq__25955_25979__$1);
var G__25961_25986 = div;
var G__25962_25987 = node_25985;
goog.dom.appendChild(G__25961_25986,G__25962_25987);

var G__25988 = cljs.core.next(seq__25955_25979__$1);
var G__25989 = null;
var G__25990 = (0);
var G__25991 = (0);
seq__25955_25967 = G__25988;
chunk__25956_25968 = G__25989;
count__25957_25969 = G__25990;
i__25958_25970 = G__25991;
continue;
}
} else {
}
}
break;
}
}

var G__25963_25992 = (function (){return goog.dom.getDocument();
})().documentElement;
var G__25964_25993 = div;
goog.dom.appendChild(G__25963_25992,G__25964_25993);

return div;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child = div.childNodes;
var frag = document.createDocumentFragment();
var G__25997_26000 = frag;
var G__25998_26001 = child;
goog.dom.append(G__25997_26000,G__25998_26001);

var G__25999_26002 = div;
goog.dom.removeNode(G__25999_26002);

return frag;
});
enfocus.core.last_element_child = (function last_element_child(node){

var G__26004 = node;
return goog.dom.getLastElementChild(G__26004);
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
var id_nodes = (function (){var G__26010 = nod;
var G__26011 = "*[id]";
return (enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2 ? enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2(G__26010,G__26011) : enfocus.core.css_select.call(null,G__26010,G__26011));
})();
var nod_col = enfocus.core.nodes__GT_coll(id_nodes);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (id_nodes,nod_col){
return (function (p1__26007_SHARP_){
var id = p1__26007_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__26007_SHARP_.setAttribute("id",rid);
});})(id_nodes,nod_col))
,nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){
if(((function (){var G__26017 = enfocus.core.tpl_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26017) : cljs.core.deref.call(null,G__26017));
})().call(null,dom_key) == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(enfocus.core.tpl_load_cnt,cljs.core.inc);

var req = (new goog.net.XhrIo());
var callback = ((function (req){
return (function (req__$1){
var text = req__$1.getResponseText();
var vec__26018 = enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$2(id_mask,text);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26018,(0),null);
var txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26018,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;
var G__26019_26022 = req;
var G__26020_26023 = goog.net.EventType.COMPLETE;
var G__26021_26024 = ((function (G__26019_26022,G__26020_26023,req,callback){
return (function (){
callback(req);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(enfocus.core.tpl_load_cnt,cljs.core.dec);
});})(G__26019_26022,G__26020_26023,req,callback))
;
goog.events.listen(G__26019_26022,G__26020_26023,G__26021_26024);

return req.send(uri,"GET");
} else {
return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){
var dfa = enfocus.core.nodes__GT_coll(domina.html_to_dom(html));
var frag = document.createDocumentFragment();
enfocus.core.log_debug(cljs.core.count(dfa));

var seq__26033_26041 = cljs.core.seq(dfa);
var chunk__26034_26042 = null;
var count__26035_26043 = (0);
var i__26036_26044 = (0);
while(true){
if((i__26036_26044 < count__26035_26043)){
var df_26045 = chunk__26034_26042.cljs$core$IIndexed$_nth$arity$2(null,i__26036_26044);
var G__26037_26046 = frag;
var G__26038_26047 = df_26045;
goog.dom.append(G__26037_26046,G__26038_26047);

var G__26048 = seq__26033_26041;
var G__26049 = chunk__26034_26042;
var G__26050 = count__26035_26043;
var G__26051 = (i__26036_26044 + (1));
seq__26033_26041 = G__26048;
chunk__26034_26042 = G__26049;
count__26035_26043 = G__26050;
i__26036_26044 = G__26051;
continue;
} else {
var temp__4126__auto___26052 = cljs.core.seq(seq__26033_26041);
if(temp__4126__auto___26052){
var seq__26033_26053__$1 = temp__4126__auto___26052;
if(cljs.core.chunked_seq_QMARK_(seq__26033_26053__$1)){
var c__4602__auto___26054 = cljs.core.chunk_first(seq__26033_26053__$1);
var G__26055 = cljs.core.chunk_rest(seq__26033_26053__$1);
var G__26056 = c__4602__auto___26054;
var G__26057 = cljs.core.count(c__4602__auto___26054);
var G__26058 = (0);
seq__26033_26041 = G__26055;
chunk__26034_26042 = G__26056;
count__26035_26043 = G__26057;
i__26036_26044 = G__26058;
continue;
} else {
var df_26059 = cljs.core.first(seq__26033_26053__$1);
var G__26039_26060 = frag;
var G__26040_26061 = df_26059;
goog.dom.append(G__26039_26060,G__26040_26061);

var G__26062 = cljs.core.next(seq__26033_26053__$1);
var G__26063 = null;
var G__26064 = (0);
var G__26065 = (0);
seq__26033_26041 = G__26062;
chunk__26034_26042 = G__26063;
count__26035_26043 = G__26064;
i__26036_26044 = G__26065;
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
var nod = (function (){var G__26067 = enfocus.core.tpl_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26067) : cljs.core.deref.call(null,G__26067));
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
var sel_str = (function (){var G__26075 = sel;
return (enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1 ? enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1(G__26075) : enfocus.core.create_sel_str.call(null,G__26075));
})();
var cache = (function (){var G__26076 = enfocus.core.tpl_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26076) : cljs.core.deref.call(null,G__26076));
})().call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));
if(cljs.core.truth_(cache)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cache),enfocus.core.html_to_dom(cljs.core.second(cache))], null);
} else {
var vec__26077 = enfocus.core.get_cached_dom(uri);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26077,(0),null);
var tdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26077,(1),null);
var dom = enfocus.core.create_hidden_dom(tdom);
var tsnip = domina.nodes((function (){var G__26078 = sym;
var G__26079 = dom;
var G__26080 = sel;
return (enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3 ? enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3(G__26078,G__26079,G__26080) : enfocus.core.css_select.call(null,G__26078,G__26079,G__26080));
})());
var html_snip = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__26077,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__26068_SHARP_){
return p1__26068_SHARP_.outerHTML;
});})(vec__26077,sym,tdom,dom,tsnip,sel_str,cache))
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
if(typeof enfocus.core.t26099 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t26099 = (function (trans,filt,func,extr_multi_node,meta26100){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta26100 = meta26100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t26099.prototype.call = ((function (trans){
return (function() {
var G__26115 = null;
var G__26115__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26103 = nodes;
var G__26104 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26103,G__26104) : self__.trans.call(null,G__26103,G__26104));
});
var G__26115__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26105 = nodes;
var G__26106 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26105,G__26106) : self__.trans.call(null,G__26105,G__26106));
});
G__26115 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__26115__2.call(this,self__,nodes);
case 3:
return G__26115__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26115.cljs$core$IFn$_invoke$arity$2 = G__26115__2;
G__26115.cljs$core$IFn$_invoke$arity$3 = G__26115__3;
return G__26115;
})()
;})(trans))
;

enfocus.core.t26099.prototype.apply = ((function (trans){
return (function (self__,args26102){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26102)));
});})(trans))
;

enfocus.core.t26099.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
var G__26107 = nodes;
var G__26108 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26107,G__26108) : self__.trans.call(null,G__26107,G__26108));
});})(trans))
;

enfocus.core.t26099.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
var G__26109 = nodes;
var G__26110 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26109,G__26110) : self__.trans.call(null,G__26109,G__26110));
});})(trans))
;

enfocus.core.t26099.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t26099.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
var G__26111 = nodes;
var G__26112 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26111,G__26112) : self__.trans.call(null,G__26111,G__26112));
});})(trans))
;

enfocus.core.t26099.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
var G__26113 = nodes;
var G__26114 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26113,G__26114) : self__.trans.call(null,G__26113,G__26114));
});})(trans))
;

enfocus.core.t26099.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_26101){
var self__ = this;
var _26101__$1 = this;
return self__.meta26100;
});})(trans))
;

enfocus.core.t26099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_26101,meta26100__$1){
var self__ = this;
var _26101__$1 = this;
return (new enfocus.core.t26099(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta26100__$1));
});})(trans))
;

enfocus.core.t26099.cljs$lang$type = true;

enfocus.core.t26099.cljs$lang$ctorStr = "enfocus.core/t26099";

enfocus.core.t26099.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"enfocus.core/t26099");
});})(trans))
;

enfocus.core.__GT_t26099 = ((function (trans){
return (function __GT_t26099(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta26100){
return (new enfocus.core.t26099(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta26100));
});})(trans))
;

}

return (new enfocus.core.t26099(trans,filt,func,extr_multi_node,cljs.core.PersistentArrayMap.EMPTY));
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
var val = (function (){var G__26152 = nodes;
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(G__26152) : func.call(null,G__26152));
})();
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t26153 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t26153 = (function (trans,func,multi_node_chain,meta26154){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta26154 = meta26154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t26153.prototype.call = ((function (trans){
return (function() {
var G__26187 = null;
var G__26187__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26157 = nodes;
var G__26158 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26157,G__26158) : self__.trans.call(null,G__26157,G__26158));
});
var G__26187__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26159 = nodes;
var G__26160 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26159,G__26160) : self__.trans.call(null,G__26159,G__26160));
});
G__26187 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__26187__2.call(this,self__,nodes);
case 3:
return G__26187__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26187.cljs$core$IFn$_invoke$arity$2 = G__26187__2;
G__26187.cljs$core$IFn$_invoke$arity$3 = G__26187__3;
return G__26187;
})()
;})(trans))
;

enfocus.core.t26153.prototype.apply = ((function (trans){
return (function (self__,args26156){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26156)));
});})(trans))
;

enfocus.core.t26153.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
var G__26161 = nodes;
var G__26162 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26161,G__26162) : self__.trans.call(null,G__26161,G__26162));
});})(trans))
;

enfocus.core.t26153.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
var G__26163 = nodes;
var G__26164 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26163,G__26164) : self__.trans.call(null,G__26163,G__26164));
});})(trans))
;

enfocus.core.t26153.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t26153.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
var G__26165 = nodes;
var G__26166 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26165,G__26166) : self__.trans.call(null,G__26165,G__26166));
});})(trans))
;

enfocus.core.t26153.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
var G__26167 = nodes;
var G__26168 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26167,G__26168) : self__.trans.call(null,G__26167,G__26168));
});})(trans))
;

enfocus.core.t26153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_26155){
var self__ = this;
var _26155__$1 = this;
return self__.meta26154;
});})(trans))
;

enfocus.core.t26153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_26155,meta26154__$1){
var self__ = this;
var _26155__$1 = this;
return (new enfocus.core.t26153(self__.trans,self__.func,self__.multi_node_chain,meta26154__$1));
});})(trans))
;

enfocus.core.t26153.cljs$lang$type = true;

enfocus.core.t26153.cljs$lang$ctorStr = "enfocus.core/t26153";

enfocus.core.t26153.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"enfocus.core/t26153");
});})(trans))
;

enfocus.core.__GT_t26153 = ((function (trans){
return (function __GT_t26153(trans__$1,func__$1,multi_node_chain__$1,meta26154){
return (new enfocus.core.t26153(trans__$1,func__$1,multi_node_chain__$1,meta26154));
});})(trans))
;

}

return (new enfocus.core.t26153(trans,func,multi_node_chain,cljs.core.PersistentArrayMap.EMPTY));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__26116_SHARP_){
return domina.nodes(p1__26116_SHARP_);
}),cljs.core.array_seq([values], 0));
var val = (function (){var G__26169 = nodes;
var G__26170 = vnodes;
return (func.cljs$core$IFn$_invoke$arity$2 ? func.cljs$core$IFn$_invoke$arity$2(G__26169,G__26170) : func.call(null,G__26169,G__26170));
})();
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t26171 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t26171 = (function (trans,func,values,multi_node_chain,meta26172){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta26172 = meta26172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t26171.prototype.call = ((function (trans){
return (function() {
var G__26188 = null;
var G__26188__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26175 = nodes;
var G__26176 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26175,G__26176) : self__.trans.call(null,G__26175,G__26176));
});
var G__26188__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26177 = nodes;
var G__26178 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26177,G__26178) : self__.trans.call(null,G__26177,G__26178));
});
G__26188 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__26188__2.call(this,self__,nodes);
case 3:
return G__26188__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26188.cljs$core$IFn$_invoke$arity$2 = G__26188__2;
G__26188.cljs$core$IFn$_invoke$arity$3 = G__26188__3;
return G__26188;
})()
;})(trans))
;

enfocus.core.t26171.prototype.apply = ((function (trans){
return (function (self__,args26174){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26174)));
});})(trans))
;

enfocus.core.t26171.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
var G__26179 = nodes;
var G__26180 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26179,G__26180) : self__.trans.call(null,G__26179,G__26180));
});})(trans))
;

enfocus.core.t26171.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
var G__26181 = nodes;
var G__26182 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26181,G__26182) : self__.trans.call(null,G__26181,G__26182));
});})(trans))
;

enfocus.core.t26171.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t26171.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
var G__26183 = nodes;
var G__26184 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26183,G__26184) : self__.trans.call(null,G__26183,G__26184));
});})(trans))
;

enfocus.core.t26171.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
var G__26185 = nodes;
var G__26186 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26185,G__26186) : self__.trans.call(null,G__26185,G__26186));
});})(trans))
;

enfocus.core.t26171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_26173){
var self__ = this;
var _26173__$1 = this;
return self__.meta26172;
});})(trans))
;

enfocus.core.t26171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_26173,meta26172__$1){
var self__ = this;
var _26173__$1 = this;
return (new enfocus.core.t26171(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta26172__$1));
});})(trans))
;

enfocus.core.t26171.cljs$lang$type = true;

enfocus.core.t26171.cljs$lang$ctorStr = "enfocus.core/t26171";

enfocus.core.t26171.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"enfocus.core/t26171");
});})(trans))
;

enfocus.core.__GT_t26171 = ((function (trans){
return (function __GT_t26171(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta26172){
return (new enfocus.core.t26171(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta26172));
});})(trans))
;

}

return (new enfocus.core.t26171(trans,func,values,multi_node_chain,cljs.core.PersistentArrayMap.EMPTY));
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__26189_SHARP_,p2__26190_SHARP_){
domina.destroy_children_BANG_(p1__26189_SHARP_);

return domina.append_BANG_(p1__26189_SHARP_,p2__26190_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26191__i = 0, G__26191__a = new Array(arguments.length -  0);
while (G__26191__i < G__26191__a.length) {G__26191__a[G__26191__i] = arguments[G__26191__i + 0]; ++G__26191__i;}
  values = new cljs.core.IndexedSeq(G__26191__a,0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__26192){
var values = cljs.core.seq(arglist__26192);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26193_SHARP_){
return domina.set_html_BANG_(p1__26193_SHARP_,txt);
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
return (function (p1__26194_SHARP_){
var seq__26201 = cljs.core.seq(pairs);
var chunk__26202 = null;
var count__26203 = (0);
var i__26204 = (0);
while(true){
if((i__26204 < count__26203)){
var vec__26205 = chunk__26202.cljs$core$IIndexed$_nth$arity$2(null,i__26204);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26205,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26205,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__26194_SHARP_,name,cljs.core.array_seq([value], 0));

var G__26207 = seq__26201;
var G__26208 = chunk__26202;
var G__26209 = count__26203;
var G__26210 = (i__26204 + (1));
seq__26201 = G__26207;
chunk__26202 = G__26208;
count__26203 = G__26209;
i__26204 = G__26210;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26201);
if(temp__4126__auto__){
var seq__26201__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26201__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__26201__$1);
var G__26211 = cljs.core.chunk_rest(seq__26201__$1);
var G__26212 = c__4602__auto__;
var G__26213 = cljs.core.count(c__4602__auto__);
var G__26214 = (0);
seq__26201 = G__26211;
chunk__26202 = G__26212;
count__26203 = G__26213;
i__26204 = G__26214;
continue;
} else {
var vec__26206 = cljs.core.first(seq__26201__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26206,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26206,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__26194_SHARP_,name,cljs.core.array_seq([value], 0));

var G__26215 = cljs.core.next(seq__26201__$1);
var G__26216 = null;
var G__26217 = (0);
var G__26218 = (0);
seq__26201 = G__26215;
chunk__26202 = G__26216;
count__26203 = G__26217;
i__26204 = G__26218;
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
var G__26219__i = 0, G__26219__a = new Array(arguments.length -  0);
while (G__26219__i < G__26219__a.length) {G__26219__a[G__26219__i] = arguments[G__26219__i + 0]; ++G__26219__i;}
  values = new cljs.core.IndexedSeq(G__26219__a,0);
} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__26220){
var values = cljs.core.seq(arglist__26220);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26221_SHARP_){
var seq__26226 = cljs.core.seq(values);
var chunk__26227 = null;
var count__26228 = (0);
var i__26229 = (0);
while(true){
if((i__26229 < count__26228)){
var name = chunk__26227.cljs$core$IIndexed$_nth$arity$2(null,i__26229);
domina.remove_attr_BANG_(p1__26221_SHARP_,name);

var G__26230 = seq__26226;
var G__26231 = chunk__26227;
var G__26232 = count__26228;
var G__26233 = (i__26229 + (1));
seq__26226 = G__26230;
chunk__26227 = G__26231;
count__26228 = G__26232;
i__26229 = G__26233;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26226);
if(temp__4126__auto__){
var seq__26226__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26226__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__26226__$1);
var G__26234 = cljs.core.chunk_rest(seq__26226__$1);
var G__26235 = c__4602__auto__;
var G__26236 = cljs.core.count(c__4602__auto__);
var G__26237 = (0);
seq__26226 = G__26234;
chunk__26227 = G__26235;
count__26228 = G__26236;
i__26229 = G__26237;
continue;
} else {
var name = cljs.core.first(seq__26226__$1);
domina.remove_attr_BANG_(p1__26221_SHARP_,name);

var G__26238 = cljs.core.next(seq__26226__$1);
var G__26239 = null;
var G__26240 = (0);
var G__26241 = (0);
seq__26226 = G__26238;
chunk__26227 = G__26239;
count__26228 = G__26240;
i__26229 = G__26241;
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
var G__26242__i = 0, G__26242__a = new Array(arguments.length -  0);
while (G__26242__i < G__26242__a.length) {G__26242__a[G__26242__i] = arguments[G__26242__i + 0]; ++G__26242__i;}
  values = new cljs.core.IndexedSeq(G__26242__a,0);
} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__26243){
var values = cljs.core.seq(arglist__26243);
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
var h = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__26248){
var vec__26249 = p__26248;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26249,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26249,(1),null);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.name(n));
}),cljs.core.array_seq([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),forms)], 0));
var G__26250 = node;
var G__26251 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,h);
return goog.dom.setProperties(G__26250,G__26251);
});
};
var set_prop = function (var_args){
var forms = null;
if (arguments.length > 0) {
var G__26252__i = 0, G__26252__a = new Array(arguments.length -  0);
while (G__26252__i < G__26252__a.length) {G__26252__a[G__26252__i] = arguments[G__26252__i + 0]; ++G__26252__i;}
  forms = new cljs.core.IndexedSeq(G__26252__a,0);
} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__26253){
var forms = cljs.core.seq(arglist__26253);
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
var G__26256 = el;
var G__26257 = cls;
return goog.dom.classes.hasClass(G__26256,G__26257);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26258_SHARP_){
var seq__26263 = cljs.core.seq(values);
var chunk__26264 = null;
var count__26265 = (0);
var i__26266 = (0);
while(true){
if((i__26266 < count__26265)){
var val = chunk__26264.cljs$core$IIndexed$_nth$arity$2(null,i__26266);
domina.add_class_BANG_(p1__26258_SHARP_,val);

var G__26267 = seq__26263;
var G__26268 = chunk__26264;
var G__26269 = count__26265;
var G__26270 = (i__26266 + (1));
seq__26263 = G__26267;
chunk__26264 = G__26268;
count__26265 = G__26269;
i__26266 = G__26270;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26263);
if(temp__4126__auto__){
var seq__26263__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26263__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__26263__$1);
var G__26271 = cljs.core.chunk_rest(seq__26263__$1);
var G__26272 = c__4602__auto__;
var G__26273 = cljs.core.count(c__4602__auto__);
var G__26274 = (0);
seq__26263 = G__26271;
chunk__26264 = G__26272;
count__26265 = G__26273;
i__26266 = G__26274;
continue;
} else {
var val = cljs.core.first(seq__26263__$1);
domina.add_class_BANG_(p1__26258_SHARP_,val);

var G__26275 = cljs.core.next(seq__26263__$1);
var G__26276 = null;
var G__26277 = (0);
var G__26278 = (0);
seq__26263 = G__26275;
chunk__26264 = G__26276;
count__26265 = G__26277;
i__26266 = G__26278;
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
var G__26279__i = 0, G__26279__a = new Array(arguments.length -  0);
while (G__26279__i < G__26279__a.length) {G__26279__a[G__26279__i] = arguments[G__26279__i + 0]; ++G__26279__i;}
  values = new cljs.core.IndexedSeq(G__26279__a,0);
} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__26280){
var values = cljs.core.seq(arglist__26280);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26281_SHARP_){
var seq__26286 = cljs.core.seq(values);
var chunk__26287 = null;
var count__26288 = (0);
var i__26289 = (0);
while(true){
if((i__26289 < count__26288)){
var val = chunk__26287.cljs$core$IIndexed$_nth$arity$2(null,i__26289);
domina.remove_class_BANG_(p1__26281_SHARP_,val);

var G__26290 = seq__26286;
var G__26291 = chunk__26287;
var G__26292 = count__26288;
var G__26293 = (i__26289 + (1));
seq__26286 = G__26290;
chunk__26287 = G__26291;
count__26288 = G__26292;
i__26289 = G__26293;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26286);
if(temp__4126__auto__){
var seq__26286__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26286__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__26286__$1);
var G__26294 = cljs.core.chunk_rest(seq__26286__$1);
var G__26295 = c__4602__auto__;
var G__26296 = cljs.core.count(c__4602__auto__);
var G__26297 = (0);
seq__26286 = G__26294;
chunk__26287 = G__26295;
count__26288 = G__26296;
i__26289 = G__26297;
continue;
} else {
var val = cljs.core.first(seq__26286__$1);
domina.remove_class_BANG_(p1__26281_SHARP_,val);

var G__26298 = cljs.core.next(seq__26286__$1);
var G__26299 = null;
var G__26300 = (0);
var G__26301 = (0);
seq__26286 = G__26298;
chunk__26287 = G__26299;
count__26288 = G__26300;
i__26289 = G__26301;
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
var G__26302__i = 0, G__26302__a = new Array(arguments.length -  0);
while (G__26302__i < G__26302__a.length) {G__26302__a[G__26302__i] = arguments[G__26302__i + 0]; ++G__26302__i;}
  values = new cljs.core.IndexedSeq(G__26302__a,0);
} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__26303){
var values = cljs.core.seq(arglist__26303);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26304_SHARP_){
return domina.set_classes_BANG_(p1__26304_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26305__i = 0, G__26305__a = new Array(arguments.length -  0);
while (G__26305__i < G__26305__a.length) {G__26305__a[G__26305__i] = arguments[G__26305__i + 0]; ++G__26305__i;}
  values = new cljs.core.IndexedSeq(G__26305__a,0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__26306){
var values = cljs.core.seq(arglist__26306);
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
var seq__26311 = cljs.core.seq(forms);
var chunk__26312 = null;
var count__26313 = (0);
var i__26314 = (0);
while(true){
if((i__26314 < count__26313)){
var fun = chunk__26312.cljs$core$IIndexed$_nth$arity$2(null,i__26314);
enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(fun,pnod);

var G__26315 = seq__26311;
var G__26316 = chunk__26312;
var G__26317 = count__26313;
var G__26318 = (i__26314 + (1));
seq__26311 = G__26315;
chunk__26312 = G__26316;
count__26313 = G__26317;
i__26314 = G__26318;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26311);
if(temp__4126__auto__){
var seq__26311__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26311__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__26311__$1);
var G__26319 = cljs.core.chunk_rest(seq__26311__$1);
var G__26320 = c__4602__auto__;
var G__26321 = cljs.core.count(c__4602__auto__);
var G__26322 = (0);
seq__26311 = G__26319;
chunk__26312 = G__26320;
count__26313 = G__26321;
i__26314 = G__26322;
continue;
} else {
var fun = cljs.core.first(seq__26311__$1);
enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(fun,pnod);

var G__26323 = cljs.core.next(seq__26311__$1);
var G__26324 = null;
var G__26325 = (0);
var G__26326 = (0);
seq__26311 = G__26323;
chunk__26312 = G__26324;
count__26313 = G__26325;
i__26314 = G__26326;
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
var G__26327__i = 0, G__26327__a = new Array(arguments.length -  0);
while (G__26327__i < G__26327__a.length) {G__26327__a[G__26327__i] = arguments[G__26327__i + 0]; ++G__26327__i;}
  forms = new cljs.core.IndexedSeq(G__26327__a,0);
} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__26328){
var forms = cljs.core.seq(arglist__26328);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__26329_SHARP_,p2__26330_SHARP_){
return domina.append_BANG_(p1__26329_SHARP_,p2__26330_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26331__i = 0, G__26331__a = new Array(arguments.length -  0);
while (G__26331__i < G__26331__a.length) {G__26331__a[G__26331__i] = arguments[G__26331__i + 0]; ++G__26331__i;}
  values = new cljs.core.IndexedSeq(G__26331__a,0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__26332){
var values = cljs.core.seq(arglist__26332);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__26333_SHARP_,p2__26334_SHARP_){
return domina.prepend_BANG_(p1__26333_SHARP_,p2__26334_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26335__i = 0, G__26335__a = new Array(arguments.length -  0);
while (G__26335__i < G__26335__a.length) {G__26335__a[G__26335__i] = arguments[G__26335__i + 0]; ++G__26335__i;}
  values = new cljs.core.IndexedSeq(G__26335__a,0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__26336){
var values = cljs.core.seq(arglist__26336);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__26337_SHARP_,p2__26338_SHARP_){
return domina.insert_before_BANG_(p1__26337_SHARP_,p2__26338_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26339__i = 0, G__26339__a = new Array(arguments.length -  0);
while (G__26339__i < G__26339__a.length) {G__26339__a[G__26339__i] = arguments[G__26339__i + 0]; ++G__26339__i;}
  values = new cljs.core.IndexedSeq(G__26339__a,0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__26340){
var values = cljs.core.seq(arglist__26340);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__26341_SHARP_,p2__26342_SHARP_){
return domina.insert_after_BANG_(p1__26341_SHARP_,p2__26342_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26343__i = 0, G__26343__a = new Array(arguments.length -  0);
while (G__26343__i < G__26343__a.length) {G__26343__a[G__26343__i] = arguments[G__26343__i + 0]; ++G__26343__i;}
  values = new cljs.core.IndexedSeq(G__26343__a,0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__26344){
var values = cljs.core.seq(arglist__26344);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2(values,(function (p1__26345_SHARP_,p2__26346_SHARP_){
return domina.swap_content_BANG_(p1__26345_SHARP_,p2__26346_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__26347__i = 0, G__26347__a = new Array(arguments.length -  0);
while (G__26347__i < G__26347__a.length) {G__26347__a[G__26347__i] = arguments[G__26347__i + 0]; ++G__26347__i;}
  values = new cljs.core.IndexedSeq(G__26347__a,0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__26348){
var values = cljs.core.seq(arglist__26348);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26349_SHARP_){
return domina.detach_BANG_(p1__26349_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){
return (function (pnod){
var elem = (function (){var G__26355 = cljs.core.name(elm);
return goog.dom.createElement(G__26355);
})();
enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$2(elem,mattr);

var G__26356_26360 = elem;
var G__26357_26361 = enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pnod.cloneNode(true)], 0));
(enfocus.core.at.cljs$core$IFn$_invoke$arity$2 ? enfocus.core.at.cljs$core$IFn$_invoke$arity$2(G__26356_26360,G__26357_26361) : enfocus.core.at.call(null,G__26356_26360,G__26357_26361));

var G__26358 = pnod;
var G__26359 = enfocus.core.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([elem], 0)),enfocus.core.remove_node()], 0));
return (enfocus.core.at.cljs$core$IFn$_invoke$arity$2 ? enfocus.core.at.cljs$core$IFn$_invoke$arity$2(G__26358,G__26359) : enfocus.core.at.call(null,G__26358,G__26359));
});
});
/**
* replaces a node with all its children
*/
enfocus.core.unwrap = (function unwrap(){
return (function (pnod){
var frag = document.createDocumentFragment();
var G__26366_26370 = frag;
var G__26367_26371 = pnod.childNodes;
goog.dom.append(G__26366_26370,G__26367_26371);

var G__26368 = frag;
var G__26369 = pnod;
return goog.dom.replaceNode(G__26368,G__26369);
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
return (function (p1__26372_SHARP_){
var seq__26379 = cljs.core.seq(pairs);
var chunk__26380 = null;
var count__26381 = (0);
var i__26382 = (0);
while(true){
if((i__26382 < count__26381)){
var vec__26383 = chunk__26380.cljs$core$IIndexed$_nth$arity$2(null,i__26382);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26383,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26383,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__26372_SHARP_,name,cljs.core.array_seq([value], 0));

var G__26385 = seq__26379;
var G__26386 = chunk__26380;
var G__26387 = count__26381;
var G__26388 = (i__26382 + (1));
seq__26379 = G__26385;
chunk__26380 = G__26386;
count__26381 = G__26387;
i__26382 = G__26388;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26379);
if(temp__4126__auto__){
var seq__26379__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26379__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__26379__$1);
var G__26389 = cljs.core.chunk_rest(seq__26379__$1);
var G__26390 = c__4602__auto__;
var G__26391 = cljs.core.count(c__4602__auto__);
var G__26392 = (0);
seq__26379 = G__26389;
chunk__26380 = G__26390;
count__26381 = G__26391;
i__26382 = G__26392;
continue;
} else {
var vec__26384 = cljs.core.first(seq__26379__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26384,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26384,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__26372_SHARP_,name,cljs.core.array_seq([value], 0));

var G__26393 = cljs.core.next(seq__26379__$1);
var G__26394 = null;
var G__26395 = (0);
var G__26396 = (0);
seq__26379 = G__26393;
chunk__26380 = G__26394;
count__26381 = G__26395;
i__26382 = G__26396;
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
var G__26397__i = 0, G__26397__a = new Array(arguments.length -  0);
while (G__26397__i < G__26397__a.length) {G__26397__a[G__26397__i] = arguments[G__26397__i + 0]; ++G__26397__i;}
  values = new cljs.core.IndexedSeq(G__26397__a,0);
} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__26398){
var values = cljs.core.seq(arglist__26398);
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
var G__26399__i = 0, G__26399__a = new Array(arguments.length -  0);
while (G__26399__i < G__26399__a.length) {G__26399__a[G__26399__i] = arguments[G__26399__i + 0]; ++G__26399__i;}
  values = new cljs.core.IndexedSeq(G__26399__a,0);
} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__26400){
var values = cljs.core.seq(arglist__26400);
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
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((function (p1__26401_SHARP_){
return domina.set_data_BANG_(p1__26401_SHARP_,ky,val);
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
var G__26402__i = 0, G__26402__a = new Array(arguments.length -  1);
while (G__26402__i < G__26402__a.length) {G__26402__a[G__26402__i] = arguments[G__26402__i + 1]; ++G__26402__i;}
  funcs = new cljs.core.IndexedSeq(G__26402__a,0);
} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__26403){
var ttime = cljs.core.first(arglist__26403);
var funcs = cljs.core.rest(arglist__26403);
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
return clojure.string.replace(text,/\$\{\s*(\S+)\s*}/,(function (p1__26405_SHARP_,p2__26404_SHARP_){
var G__26431 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p2__26404_SHARP_);
return (vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(G__26431) : vars.call(null,G__26431));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__26442_26450 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(pnod.attributes.length));
var chunk__26443_26451 = null;
var count__26444_26452 = (0);
var i__26445_26453 = (0);
while(true){
if((i__26445_26453 < count__26444_26452)){
var idx_26454 = chunk__26443_26451.cljs$core$IIndexed$_nth$arity$2(null,i__26445_26453);
var attr_26455 = pnod.attributes.item(idx_26454);
if(cljs.core.truth_(attr_26455.specified)){
attr_26455.value = rep_str(attr_26455.value);
} else {
}

var G__26456 = seq__26442_26450;
var G__26457 = chunk__26443_26451;
var G__26458 = count__26444_26452;
var G__26459 = (i__26445_26453 + (1));
seq__26442_26450 = G__26456;
chunk__26443_26451 = G__26457;
count__26444_26452 = G__26458;
i__26445_26453 = G__26459;
continue;
} else {
var temp__4126__auto___26460 = cljs.core.seq(seq__26442_26450);
if(temp__4126__auto___26460){
var seq__26442_26461__$1 = temp__4126__auto___26460;
if(cljs.core.chunked_seq_QMARK_(seq__26442_26461__$1)){
var c__4602__auto___26462 = cljs.core.chunk_first(seq__26442_26461__$1);
var G__26463 = cljs.core.chunk_rest(seq__26442_26461__$1);
var G__26464 = c__4602__auto___26462;
var G__26465 = cljs.core.count(c__4602__auto___26462);
var G__26466 = (0);
seq__26442_26450 = G__26463;
chunk__26443_26451 = G__26464;
count__26444_26452 = G__26465;
i__26445_26453 = G__26466;
continue;
} else {
var idx_26467 = cljs.core.first(seq__26442_26461__$1);
var attr_26468 = pnod.attributes.item(idx_26467);
if(cljs.core.truth_(attr_26468.specified)){
attr_26468.value = rep_str(attr_26468.value);
} else {
}

var G__26469 = cljs.core.next(seq__26442_26461__$1);
var G__26470 = null;
var G__26471 = (0);
var G__26472 = (0);
seq__26442_26450 = G__26469;
chunk__26443_26451 = G__26470;
count__26444_26452 = G__26471;
i__26445_26453 = G__26472;
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
var seq__26446 = cljs.core.seq(enfocus.core.nodes__GT_coll(pnod.childNodes));
var chunk__26447 = null;
var count__26448 = (0);
var i__26449 = (0);
while(true){
if((i__26449 < count__26448)){
var cnode = chunk__26447.cljs$core$IIndexed$_nth$arity$2(null,i__26449);
rep_node(cnode);

var G__26473 = seq__26446;
var G__26474 = chunk__26447;
var G__26475 = count__26448;
var G__26476 = (i__26449 + (1));
seq__26446 = G__26473;
chunk__26447 = G__26474;
count__26448 = G__26475;
i__26449 = G__26476;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26446);
if(temp__4126__auto__){
var seq__26446__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26446__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__26446__$1);
var G__26477 = cljs.core.chunk_rest(seq__26446__$1);
var G__26478 = c__4602__auto__;
var G__26479 = cljs.core.count(c__4602__auto__);
var G__26480 = (0);
seq__26446 = G__26477;
chunk__26447 = G__26478;
count__26448 = G__26479;
i__26449 = G__26480;
continue;
} else {
var cnode = cljs.core.first(seq__26446__$1);
rep_node(cnode);

var G__26481 = cljs.core.next(seq__26446__$1);
var G__26482 = null;
var G__26483 = (0);
var G__26484 = (0);
seq__26446 = G__26481;
chunk__26447 = G__26482;
count__26448 = G__26483;
i__26449 = G__26484;
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
var G__26487 = el;
var G__26488 = cljs.core.clj__GT_js(nval);
return goog.dom.forms.setValue(G__26487,G__26488);
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
var seq__26495 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(form_node.length));
var chunk__26496 = null;
var count__26497 = (0);
var i__26498 = (0);
while(true){
if((i__26498 < count__26497)){
var idx = chunk__26496.cljs$core$IIndexed$_nth$arity$2(null,i__26498);
var el_26501 = (form_node.elements[idx]);
var ky_26502 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(el_26501.name);
var val_26503 = (function (){var G__26499 = value_map;
return (ky_26502.cljs$core$IFn$_invoke$arity$1 ? ky_26502.cljs$core$IFn$_invoke$arity$1(G__26499) : ky_26502.call(null,G__26499));
})();
if(cljs.core.contains_QMARK_(value_map,ky_26502)){
var val_26504__$1 = (cljs.core.truth_(val_26503)?val_26503:"");
enfocus.core.set_form_input(val_26504__$1).call(null,el_26501);
} else {
}

var G__26505 = seq__26495;
var G__26506 = chunk__26496;
var G__26507 = count__26497;
var G__26508 = (i__26498 + (1));
seq__26495 = G__26505;
chunk__26496 = G__26506;
count__26497 = G__26507;
i__26498 = G__26508;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26495);
if(temp__4126__auto__){
var seq__26495__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26495__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__26495__$1);
var G__26509 = cljs.core.chunk_rest(seq__26495__$1);
var G__26510 = c__4602__auto__;
var G__26511 = cljs.core.count(c__4602__auto__);
var G__26512 = (0);
seq__26495 = G__26509;
chunk__26496 = G__26510;
count__26497 = G__26511;
i__26498 = G__26512;
continue;
} else {
var idx = cljs.core.first(seq__26495__$1);
var el_26513 = (form_node.elements[idx]);
var ky_26514 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(el_26513.name);
var val_26515 = (function (){var G__26500 = value_map;
return (ky_26514.cljs$core$IFn$_invoke$arity$1 ? ky_26514.cljs$core$IFn$_invoke$arity$1(G__26500) : ky_26514.call(null,G__26500));
})();
if(cljs.core.contains_QMARK_(value_map,ky_26514)){
var val_26516__$1 = (cljs.core.truth_(val_26515)?val_26515:"");
enfocus.core.set_form_input(val_26516__$1).call(null,el_26513);
} else {
}

var G__26517 = cljs.core.next(seq__26495__$1);
var G__26518 = null;
var G__26519 = (0);
var G__26520 = (0);
seq__26495 = G__26517;
chunk__26496 = G__26518;
count__26497 = G__26519;
i__26498 = G__26520;
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
var vec__26530 = node_spec;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26530,(0),null);
var vec__26531 = cljs.core.nthnext(vec__26530,(1));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26531,(0),null);
var ms = cljs.core.nthnext(vec__26531,(1));
var more = vec__26531;
var vec__26532 = cljs.core.name(tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26532,(0),null);
var segments = cljs.core.nthnext(vec__26532,(1));
var id = cljs.core.some(((function (vec__26530,tag,vec__26531,m,ms,more,vec__26532,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",seg.charAt((0)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(seg,(1));
} else {
return null;
}
});})(vec__26530,tag,vec__26531,m,ms,more,vec__26532,tag_name,segments))
,segments);
var classes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (vec__26530,tag,vec__26531,m,ms,more,vec__26532,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",seg.charAt((0)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(seg,(1));
} else {
return null;
}
});})(vec__26530,tag,vec__26531,m,ms,more,vec__26532,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_(m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.constant$keyword$37,id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_(classes)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.constant$keyword$38,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",classes))):attrs__$1);
var content = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(html,((cljs.core.map_QMARK_(m))?ms:more)));
var node = document.createElement(tag_name);
var seq__26533_26539 = cljs.core.seq(attrs__$2);
var chunk__26534_26540 = null;
var count__26535_26541 = (0);
var i__26536_26542 = (0);
while(true){
if((i__26536_26542 < count__26535_26541)){
var vec__26537_26543 = chunk__26534_26540.cljs$core$IIndexed$_nth$arity$2(null,i__26536_26542);
var key_26544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26537_26543,(0),null);
var val_26545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26537_26543,(1),null);
node.setAttribute(cljs.core.name(key_26544),val_26545);

var G__26546 = seq__26533_26539;
var G__26547 = chunk__26534_26540;
var G__26548 = count__26535_26541;
var G__26549 = (i__26536_26542 + (1));
seq__26533_26539 = G__26546;
chunk__26534_26540 = G__26547;
count__26535_26541 = G__26548;
i__26536_26542 = G__26549;
continue;
} else {
var temp__4126__auto___26550 = cljs.core.seq(seq__26533_26539);
if(temp__4126__auto___26550){
var seq__26533_26551__$1 = temp__4126__auto___26550;
if(cljs.core.chunked_seq_QMARK_(seq__26533_26551__$1)){
var c__4602__auto___26552 = cljs.core.chunk_first(seq__26533_26551__$1);
var G__26553 = cljs.core.chunk_rest(seq__26533_26551__$1);
var G__26554 = c__4602__auto___26552;
var G__26555 = cljs.core.count(c__4602__auto___26552);
var G__26556 = (0);
seq__26533_26539 = G__26553;
chunk__26534_26540 = G__26554;
count__26535_26541 = G__26555;
i__26536_26542 = G__26556;
continue;
} else {
var vec__26538_26557 = cljs.core.first(seq__26533_26551__$1);
var key_26558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26538_26557,(0),null);
var val_26559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26538_26557,(1),null);
node.setAttribute(cljs.core.name(key_26558),val_26559);

var G__26560 = cljs.core.next(seq__26533_26551__$1);
var G__26561 = null;
var G__26562 = (0);
var G__26563 = (0);
seq__26533_26539 = G__26560;
chunk__26534_26540 = G__26561;
count__26535_26541 = G__26562;
i__26536_26542 = G__26563;
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
var G__26565 = pnod;
return goog.dom.getTextContent(G__26565);
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
var mval = (function (){var G__26569 = ky;
return (form_map.cljs$core$IFn$_invoke$arity$1 ? form_map.cljs$core$IFn$_invoke$arity$1(G__26569) : form_map.call(null,G__26569));
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
return (function (p1__26571_SHARP_,p2__26570_SHARP_){
var vals = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__26589 = p2__26570_SHARP_;
return goog.dom.forms.getValue(G__26589);
})());
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_(vals))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__26571_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26571_SHARP_,vals);
} else {
return p1__26571_SHARP_;
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
if(typeof enfocus.core.t26590 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t26590 = (function (trans,read_form_input,meta26591){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta26591 = meta26591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t26590.prototype.call = ((function (trans){
return (function() {
var G__26606 = null;
var G__26606__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26594 = nodes;
var G__26595 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26594,G__26595) : self__.trans.call(null,G__26594,G__26595));
});
var G__26606__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26596 = nodes;
var G__26597 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26596,G__26597) : self__.trans.call(null,G__26596,G__26597));
});
G__26606 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__26606__2.call(this,self__,nodes);
case 3:
return G__26606__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26606.cljs$core$IFn$_invoke$arity$2 = G__26606__2;
G__26606.cljs$core$IFn$_invoke$arity$3 = G__26606__3;
return G__26606;
})()
;})(trans))
;

enfocus.core.t26590.prototype.apply = ((function (trans){
return (function (self__,args26593){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26593)));
});})(trans))
;

enfocus.core.t26590.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
var G__26598 = nodes;
var G__26599 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26598,G__26599) : self__.trans.call(null,G__26598,G__26599));
});})(trans))
;

enfocus.core.t26590.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
var G__26600 = nodes;
var G__26601 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26600,G__26601) : self__.trans.call(null,G__26600,G__26601));
});})(trans))
;

enfocus.core.t26590.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t26590.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
var G__26602 = nodes;
var G__26603 = null;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26602,G__26603) : self__.trans.call(null,G__26602,G__26603));
});})(trans))
;

enfocus.core.t26590.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
var G__26604 = nodes;
var G__26605 = chain;
return (self__.trans.cljs$core$IFn$_invoke$arity$2 ? self__.trans.cljs$core$IFn$_invoke$arity$2(G__26604,G__26605) : self__.trans.call(null,G__26604,G__26605));
});})(trans))
;

enfocus.core.t26590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_26592){
var self__ = this;
var _26592__$1 = this;
return self__.meta26591;
});})(trans))
;

enfocus.core.t26590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_26592,meta26591__$1){
var self__ = this;
var _26592__$1 = this;
return (new enfocus.core.t26590(self__.trans,self__.read_form_input,meta26591__$1));
});})(trans))
;

enfocus.core.t26590.cljs$lang$type = true;

enfocus.core.t26590.cljs$lang$ctorStr = "enfocus.core/t26590";

enfocus.core.t26590.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"enfocus.core/t26590");
});})(trans))
;

enfocus.core.__GT_t26590 = ((function (trans){
return (function __GT_t26590(trans__$1,read_form_input__$1,meta26591){
return (new enfocus.core.t26590(trans__$1,read_form_input__$1,meta26591));
});})(trans))
;

}

return (new enfocus.core.t26590(trans,read_form_input,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$1((function (node){
var inputs = node.elements;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (inputs){
return (function (p1__26608_SHARP_,p2__26607_SHARP_){
if(!(cljs.core.empty_QMARK_(inputs.item(p2__26607_SHARP_).name))){
return enfocus.core.merge_form_val(p1__26608_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inputs.item(p2__26607_SHARP_).name),enfocus.core.read_form_input().call(null,inputs.item(p2__26607_SHARP_)));
} else {
return p1__26608_SHARP_;
}
});})(inputs))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(inputs.length));
}));
});
enfocus.core.reg_filt = (function (){var G__26609 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26609) : cljs.core.atom.call(null,G__26609));
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
var ttest = (((tst instanceof cljs.core.Keyword))?(function (){var G__26617 = enfocus.core.reg_filt;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26617) : cljs.core.deref.call(null,G__26617));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26618_SHARP_){
if((p1__26618_SHARP_ instanceof cljs.core.Symbol)){
var G__26623 = p1__26618_SHARP_;
return (enfocus.core.css_syms.cljs$core$IFn$_invoke$arity$1 ? enfocus.core.css_syms.cljs$core$IFn$_invoke$arity$1(G__26623) : enfocus.core.css_syms.call(null,G__26623));
} else {
if((p1__26618_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name(p1__26618_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_(p1__26618_SHARP_)){
return create_sel_str.cljs$core$IFn$_invoke$arity$1(p1__26618_SHARP_);
} else {
if(typeof p1__26618_SHARP_ === 'string'){
return p1__26618_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var cnt = cljs.core.count(trans);
var sel_QMARK_ = (function (){var and__3803__auto__ = !((node == null));
if(and__3803__auto__){
var G__26640 = node;
if(G__26640){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__26640.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__26640.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__26640);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__26640);
}
} else {
return and__3803__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cnt))){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),node);
} else {
var vec__26641 = ((sel_QMARK_)?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(trans,node)),document):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26641,(0),null);
var trans__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26641,(1),null);
var seq__26642 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),trans__$1));
var chunk__26643 = null;
var count__26644 = (0);
var i__26645 = (0);
while(true){
if((i__26645 < count__26644)){
var vec__26646 = chunk__26643.cljs$core$IIndexed$_nth$arity$2(null,i__26645);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26646,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26646,(1),null);
enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(enfocus.core.nil_t(t),enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,id_mask));

var G__26648 = seq__26642;
var G__26649 = chunk__26643;
var G__26650 = count__26644;
var G__26651 = (i__26645 + (1));
seq__26642 = G__26648;
chunk__26643 = G__26649;
count__26644 = G__26650;
i__26645 = G__26651;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26642);
if(temp__4126__auto__){
var seq__26642__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26642__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__26642__$1);
var G__26652 = cljs.core.chunk_rest(seq__26642__$1);
var G__26653 = c__4602__auto__;
var G__26654 = cljs.core.count(c__4602__auto__);
var G__26655 = (0);
seq__26642 = G__26652;
chunk__26643 = G__26653;
count__26644 = G__26654;
i__26645 = G__26655;
continue;
} else {
var vec__26647 = cljs.core.first(seq__26642__$1);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26647,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26647,(1),null);
enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(enfocus.core.nil_t(t),enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,id_mask));

var G__26656 = cljs.core.next(seq__26642__$1);
var G__26657 = null;
var G__26658 = (0);
var G__26659 = (0);
seq__26642 = G__26656;
chunk__26643 = G__26657;
count__26644 = G__26658;
i__26645 = G__26659;
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
var G__26660__i = 0, G__26660__a = new Array(arguments.length -  2);
while (G__26660__i < G__26660__a.length) {G__26660__a[G__26660__i] = arguments[G__26660__i + 2]; ++G__26660__i;}
  trans = new cljs.core.IndexedSeq(G__26660__a,0);
} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__26661){
var id_mask = cljs.core.first(arglist__26661);
arglist__26661 = cljs.core.next(arglist__26661);
var node = cljs.core.first(arglist__26661);
var trans = cljs.core.rest(arglist__26661);
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
var G__26662__i = 0, G__26662__a = new Array(arguments.length -  1);
while (G__26662__i < G__26662__a.length) {G__26662__a[G__26662__i] = arguments[G__26662__i + 1]; ++G__26662__i;}
  trans = new cljs.core.IndexedSeq(G__26662__a,0);
} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__26663){
var node = cljs.core.first(arglist__26663);
var trans = cljs.core.rest(arglist__26663);
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
var sel_QMARK_ = (function (){var G__26668 = node;
if(G__26668){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__26668.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__26668.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__26668);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(enfocus.core.ISelector,G__26668);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cnt))){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),enfocus.core.select.cljs$core$IFn$_invoke$arity$1(node));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cnt)){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(cljs.core.first(trans),node);
} else {
var vec__26669 = ((sel_QMARK_)?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(trans,node)),document):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26669,(0),null);
var trans__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26669,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (vec__26669,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__26670){
var vec__26671 = p__26670;
var ky = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26671,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26671,(1),null);
var ext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26671,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(ext,enfocus.core.select.cljs$core$IFn$_invoke$arity$3(sel,node__$1,""))], null);
});})(vec__26669,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.array_seq([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),trans__$1)], 0)));

}
}
};
var from = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
var G__26672__i = 0, G__26672__a = new Array(arguments.length -  1);
while (G__26672__i < G__26672__a.length) {G__26672__a[G__26672__i] = arguments[G__26672__i + 1]; ++G__26672__i;}
  trans = new cljs.core.IndexedSeq(G__26672__a,0);
} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__26673){
var node = cljs.core.first(arglist__26673);
var trans = cljs.core.rest(arglist__26673);
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
var G__26676 = null;
var G__26676__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__26676__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__26676__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__26676 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__26676__1.call(this,this$);
case 2:
return G__26676__2.call(this,this$,root);
case 3:
return G__26676__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26676.cljs$core$IFn$_invoke$arity$1 = G__26676__1;
G__26676.cljs$core$IFn$_invoke$arity$2 = G__26676__2;
G__26676.cljs$core$IFn$_invoke$arity$3 = G__26676__3;
return G__26676;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__26677 = null;
var G__26677__1 = (function (this$){
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,document,"");
});
var G__26677__2 = (function (this$,root){
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,root,"");
});
var G__26677__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3(id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__26677 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__26677__1.call(this,this$);
case 2:
return G__26677__2.call(this,this$,root);
case 3:
return G__26677__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26677.cljs$core$IFn$_invoke$arity$1 = G__26677__1;
G__26677.cljs$core$IFn$_invoke$arity$2 = G__26677__2;
G__26677.cljs$core$IFn$_invoke$arity$3 = G__26677__3;
return G__26677;
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
var G__26678 = null;
var G__26678__1 = (function (this$){
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,document,"");
});
var G__26678__2 = (function (this$,root){
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3(this$,root,"");
});
var G__26678__3 = (function (this$,root,id_mask){
var G__26674 = root;
var G__26675 = id_mask;
return (this$.cljs$core$IFn$_invoke$arity$2 ? this$.cljs$core$IFn$_invoke$arity$2(G__26674,G__26675) : this$.call(null,G__26674,G__26675));
});
G__26678 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__26678__1.call(this,this$);
case 2:
return G__26678__2.call(this,this$,root);
case 3:
return G__26678__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26678.cljs$core$IFn$_invoke$arity$1 = G__26678__1;
G__26678.cljs$core$IFn$_invoke$arity$2 = G__26678__2;
G__26678.cljs$core$IFn$_invoke$arity$3 = G__26678__3;
return G__26678;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__26679 = null;
var G__26679__2 = (function (trans,nodes){
return nodes;
});
var G__26679__3 = (function (trans,nodes,chain){
return nodes;
});
G__26679 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__26679__2.call(this,trans,nodes);
case 3:
return G__26679__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26679.cljs$core$IFn$_invoke$arity$2 = G__26679__2;
G__26679.cljs$core$IFn$_invoke$arity$3 = G__26679__3;
return G__26679;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__26680 = null;
var G__26680__2 = (function (trans,nodes){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(trans,enfocus.core.nodes__GT_coll(nodes)));
});
var G__26680__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll(nodes);
var val = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2(chain,nodes);
} else {
return val;
}
});
G__26680 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__26680__2.call(this,trans,nodes);
case 3:
return G__26680__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26680.cljs$core$IFn$_invoke$arity$2 = G__26680__2;
G__26680.cljs$core$IFn$_invoke$arity$3 = G__26680__3;
return G__26680;
})()
);
