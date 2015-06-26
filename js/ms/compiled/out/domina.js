// Compiled by ClojureScript 0.0-2850 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_20301 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_20302 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_20303 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20303,opt_wrapper_20301,table_section_wrapper_20302,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20301,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20302,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20302,cell_wrapper_20303,table_section_wrapper_20302,table_section_wrapper_20302]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3803__auto__ = div.firstChild;
if(cljs.core.truth_(and__3803__auto__)){
return div.firstChild.childNodes;
} else {
return and__3803__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__20308 = cljs.core.seq.call(null,tbody);
var chunk__20309 = null;
var count__20310 = (0);
var i__20311 = (0);
while(true){
if((i__20311 < count__20310)){
var child = cljs.core._nth.call(null,chunk__20309,i__20311);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__20312 = seq__20308;
var G__20313 = chunk__20309;
var G__20314 = count__20310;
var G__20315 = (i__20311 + (1));
seq__20308 = G__20312;
chunk__20309 = G__20313;
count__20310 = G__20314;
i__20311 = G__20315;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20308);
if(temp__4126__auto__){
var seq__20308__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20308__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__20308__$1);
var G__20316 = cljs.core.chunk_rest.call(null,seq__20308__$1);
var G__20317 = c__4602__auto__;
var G__20318 = cljs.core.count.call(null,c__4602__auto__);
var G__20319 = (0);
seq__20308 = G__20316;
chunk__20309 = G__20317;
count__20310 = G__20318;
i__20311 = G__20319;
continue;
} else {
var child = cljs.core.first.call(null,seq__20308__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__20320 = cljs.core.next.call(null,seq__20308__$1);
var G__20321 = null;
var G__20322 = (0);
var G__20323 = (0);
seq__20308 = G__20320;
chunk__20309 = G__20321;
count__20310 = G__20322;
i__20311 = G__20323;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__20325 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__20325,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__20325,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__20325,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__20326 = wrapper.lastChild;
var G__20327 = (level - (1));
wrapper = G__20326;
level = G__20327;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__3803__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3803__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__3803__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

domina.DomContent = (function (){var obj20329 = {};
return obj20329;
})();

domina.nodes = (function nodes(content){
if((function (){var and__3803__auto__ = content;
if(and__3803__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__3803__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4459__auto__ = (((content == null))?null:content);
return (function (){var or__3815__auto__ = (domina.nodes[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (domina.nodes["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});

domina.single_node = (function single_node(nodeseq){
if((function (){var and__3803__auto__ = nodeseq;
if(and__3803__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__3803__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4459__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3815__auto__ = (domina.single_node[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (domina.single_node["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3803__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3803__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__3803__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
var G__20330__i = 0, G__20330__a = new Array(arguments.length -  0);
while (G__20330__i < G__20330__a.length) {G__20330__a[G__20330__i] = arguments[G__20330__i + 0]; ++G__20330__i;}
  mesg = new cljs.core.IndexedSeq(G__20330__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__20331){
var mesg = cljs.core.seq(arglist__20331);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
var G__20332__i = 0, G__20332__a = new Array(arguments.length -  0);
while (G__20332__i < G__20332__a.length) {G__20332__a[G__20332__i] = arguments[G__20332__i + 0]; ++G__20332__i;}
  mesg = new cljs.core.IndexedSeq(G__20332__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__20333){
var mesg = cljs.core.seq(arglist__20333);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__20334__i = 0, G__20334__a = new Array(arguments.length -  0);
while (G__20334__i < G__20334__a.length) {G__20334__a[G__20334__i] = arguments[G__20334__i + 0]; ++G__20334__i;}
  contents = new cljs.core.IndexedSeq(G__20334__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__20335){
var contents = cljs.core.seq(arglist__20335);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__20336_SHARP_){
return p1__20336_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__20337_SHARP_,p2__20338_SHARP_){
return goog.dom.insertChildAt(p1__20337_SHARP_,p2__20338_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__20340_SHARP_,p2__20339_SHARP_){
return goog.dom.insertSiblingBefore(p2__20339_SHARP_,p1__20340_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__20342_SHARP_,p2__20341_SHARP_){
return goog.dom.insertSiblingAfter(p2__20341_SHARP_,p1__20342_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__20344_SHARP_,p2__20343_SHARP_){
return goog.dom.replaceNode(p2__20343_SHARP_,p1__20344_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__20349_20353 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20350_20354 = null;
var count__20351_20355 = (0);
var i__20352_20356 = (0);
while(true){
if((i__20352_20356 < count__20351_20355)){
var n_20357 = cljs.core._nth.call(null,chunk__20350_20354,i__20352_20356);
goog.style.setStyle(n_20357,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20358 = seq__20349_20353;
var G__20359 = chunk__20350_20354;
var G__20360 = count__20351_20355;
var G__20361 = (i__20352_20356 + (1));
seq__20349_20353 = G__20358;
chunk__20350_20354 = G__20359;
count__20351_20355 = G__20360;
i__20352_20356 = G__20361;
continue;
} else {
var temp__4126__auto___20362 = cljs.core.seq.call(null,seq__20349_20353);
if(temp__4126__auto___20362){
var seq__20349_20363__$1 = temp__4126__auto___20362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20349_20363__$1)){
var c__4602__auto___20364 = cljs.core.chunk_first.call(null,seq__20349_20363__$1);
var G__20365 = cljs.core.chunk_rest.call(null,seq__20349_20363__$1);
var G__20366 = c__4602__auto___20364;
var G__20367 = cljs.core.count.call(null,c__4602__auto___20364);
var G__20368 = (0);
seq__20349_20353 = G__20365;
chunk__20350_20354 = G__20366;
count__20351_20355 = G__20367;
i__20352_20356 = G__20368;
continue;
} else {
var n_20369 = cljs.core.first.call(null,seq__20349_20363__$1);
goog.style.setStyle(n_20369,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20370 = cljs.core.next.call(null,seq__20349_20363__$1);
var G__20371 = null;
var G__20372 = (0);
var G__20373 = (0);
seq__20349_20353 = G__20370;
chunk__20350_20354 = G__20371;
count__20351_20355 = G__20372;
i__20352_20356 = G__20373;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
var G__20374__i = 0, G__20374__a = new Array(arguments.length -  2);
while (G__20374__i < G__20374__a.length) {G__20374__a[G__20374__i] = arguments[G__20374__i + 2]; ++G__20374__i;}
  value = new cljs.core.IndexedSeq(G__20374__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20375){
var content = cljs.core.first(arglist__20375);
arglist__20375 = cljs.core.next(arglist__20375);
var name = cljs.core.first(arglist__20375);
var value = cljs.core.rest(arglist__20375);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__20380_20384 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20381_20385 = null;
var count__20382_20386 = (0);
var i__20383_20387 = (0);
while(true){
if((i__20383_20387 < count__20382_20386)){
var n_20388 = cljs.core._nth.call(null,chunk__20381_20385,i__20383_20387);
n_20388.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20389 = seq__20380_20384;
var G__20390 = chunk__20381_20385;
var G__20391 = count__20382_20386;
var G__20392 = (i__20383_20387 + (1));
seq__20380_20384 = G__20389;
chunk__20381_20385 = G__20390;
count__20382_20386 = G__20391;
i__20383_20387 = G__20392;
continue;
} else {
var temp__4126__auto___20393 = cljs.core.seq.call(null,seq__20380_20384);
if(temp__4126__auto___20393){
var seq__20380_20394__$1 = temp__4126__auto___20393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20380_20394__$1)){
var c__4602__auto___20395 = cljs.core.chunk_first.call(null,seq__20380_20394__$1);
var G__20396 = cljs.core.chunk_rest.call(null,seq__20380_20394__$1);
var G__20397 = c__4602__auto___20395;
var G__20398 = cljs.core.count.call(null,c__4602__auto___20395);
var G__20399 = (0);
seq__20380_20384 = G__20396;
chunk__20381_20385 = G__20397;
count__20382_20386 = G__20398;
i__20383_20387 = G__20399;
continue;
} else {
var n_20400 = cljs.core.first.call(null,seq__20380_20394__$1);
n_20400.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20401 = cljs.core.next.call(null,seq__20380_20394__$1);
var G__20402 = null;
var G__20403 = (0);
var G__20404 = (0);
seq__20380_20384 = G__20401;
chunk__20381_20385 = G__20402;
count__20382_20386 = G__20403;
i__20383_20387 = G__20404;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
var G__20405__i = 0, G__20405__a = new Array(arguments.length -  2);
while (G__20405__i < G__20405__a.length) {G__20405__a[G__20405__i] = arguments[G__20405__i + 2]; ++G__20405__i;}
  value = new cljs.core.IndexedSeq(G__20405__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20406){
var content = cljs.core.first(arglist__20406);
arglist__20406 = cljs.core.next(arglist__20406);
var name = cljs.core.first(arglist__20406);
var value = cljs.core.rest(arglist__20406);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__20411_20415 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20412_20416 = null;
var count__20413_20417 = (0);
var i__20414_20418 = (0);
while(true){
if((i__20414_20418 < count__20413_20417)){
var n_20419 = cljs.core._nth.call(null,chunk__20412_20416,i__20414_20418);
n_20419.removeAttribute(cljs.core.name.call(null,name));

var G__20420 = seq__20411_20415;
var G__20421 = chunk__20412_20416;
var G__20422 = count__20413_20417;
var G__20423 = (i__20414_20418 + (1));
seq__20411_20415 = G__20420;
chunk__20412_20416 = G__20421;
count__20413_20417 = G__20422;
i__20414_20418 = G__20423;
continue;
} else {
var temp__4126__auto___20424 = cljs.core.seq.call(null,seq__20411_20415);
if(temp__4126__auto___20424){
var seq__20411_20425__$1 = temp__4126__auto___20424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20411_20425__$1)){
var c__4602__auto___20426 = cljs.core.chunk_first.call(null,seq__20411_20425__$1);
var G__20427 = cljs.core.chunk_rest.call(null,seq__20411_20425__$1);
var G__20428 = c__4602__auto___20426;
var G__20429 = cljs.core.count.call(null,c__4602__auto___20426);
var G__20430 = (0);
seq__20411_20415 = G__20427;
chunk__20412_20416 = G__20428;
count__20413_20417 = G__20429;
i__20414_20418 = G__20430;
continue;
} else {
var n_20431 = cljs.core.first.call(null,seq__20411_20425__$1);
n_20431.removeAttribute(cljs.core.name.call(null,name));

var G__20432 = cljs.core.next.call(null,seq__20411_20425__$1);
var G__20433 = null;
var G__20434 = (0);
var G__20435 = (0);
seq__20411_20415 = G__20432;
chunk__20412_20416 = G__20433;
count__20413_20417 = G__20434;
i__20414_20418 = G__20435;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__20437 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__20437,(0),null);
var v = cljs.core.nth.call(null,vec__20437,(1),null);
if(cljs.core.truth_((function (){var and__3803__auto__ = k;
if(cljs.core.truth_(and__3803__auto__)){
return v;
} else {
return and__3803__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__20438_SHARP_){
var attr = attrs__$1.item(p1__20438_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__20445_20451 = cljs.core.seq.call(null,styles);
var chunk__20446_20452 = null;
var count__20447_20453 = (0);
var i__20448_20454 = (0);
while(true){
if((i__20448_20454 < count__20447_20453)){
var vec__20449_20455 = cljs.core._nth.call(null,chunk__20446_20452,i__20448_20454);
var name_20456 = cljs.core.nth.call(null,vec__20449_20455,(0),null);
var value_20457 = cljs.core.nth.call(null,vec__20449_20455,(1),null);
domina.set_style_BANG_.call(null,content,name_20456,value_20457);

var G__20458 = seq__20445_20451;
var G__20459 = chunk__20446_20452;
var G__20460 = count__20447_20453;
var G__20461 = (i__20448_20454 + (1));
seq__20445_20451 = G__20458;
chunk__20446_20452 = G__20459;
count__20447_20453 = G__20460;
i__20448_20454 = G__20461;
continue;
} else {
var temp__4126__auto___20462 = cljs.core.seq.call(null,seq__20445_20451);
if(temp__4126__auto___20462){
var seq__20445_20463__$1 = temp__4126__auto___20462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20445_20463__$1)){
var c__4602__auto___20464 = cljs.core.chunk_first.call(null,seq__20445_20463__$1);
var G__20465 = cljs.core.chunk_rest.call(null,seq__20445_20463__$1);
var G__20466 = c__4602__auto___20464;
var G__20467 = cljs.core.count.call(null,c__4602__auto___20464);
var G__20468 = (0);
seq__20445_20451 = G__20465;
chunk__20446_20452 = G__20466;
count__20447_20453 = G__20467;
i__20448_20454 = G__20468;
continue;
} else {
var vec__20450_20469 = cljs.core.first.call(null,seq__20445_20463__$1);
var name_20470 = cljs.core.nth.call(null,vec__20450_20469,(0),null);
var value_20471 = cljs.core.nth.call(null,vec__20450_20469,(1),null);
domina.set_style_BANG_.call(null,content,name_20470,value_20471);

var G__20472 = cljs.core.next.call(null,seq__20445_20463__$1);
var G__20473 = null;
var G__20474 = (0);
var G__20475 = (0);
seq__20445_20451 = G__20472;
chunk__20446_20452 = G__20473;
count__20447_20453 = G__20474;
i__20448_20454 = G__20475;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__20482_20488 = cljs.core.seq.call(null,attrs);
var chunk__20483_20489 = null;
var count__20484_20490 = (0);
var i__20485_20491 = (0);
while(true){
if((i__20485_20491 < count__20484_20490)){
var vec__20486_20492 = cljs.core._nth.call(null,chunk__20483_20489,i__20485_20491);
var name_20493 = cljs.core.nth.call(null,vec__20486_20492,(0),null);
var value_20494 = cljs.core.nth.call(null,vec__20486_20492,(1),null);
domina.set_attr_BANG_.call(null,content,name_20493,value_20494);

var G__20495 = seq__20482_20488;
var G__20496 = chunk__20483_20489;
var G__20497 = count__20484_20490;
var G__20498 = (i__20485_20491 + (1));
seq__20482_20488 = G__20495;
chunk__20483_20489 = G__20496;
count__20484_20490 = G__20497;
i__20485_20491 = G__20498;
continue;
} else {
var temp__4126__auto___20499 = cljs.core.seq.call(null,seq__20482_20488);
if(temp__4126__auto___20499){
var seq__20482_20500__$1 = temp__4126__auto___20499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20482_20500__$1)){
var c__4602__auto___20501 = cljs.core.chunk_first.call(null,seq__20482_20500__$1);
var G__20502 = cljs.core.chunk_rest.call(null,seq__20482_20500__$1);
var G__20503 = c__4602__auto___20501;
var G__20504 = cljs.core.count.call(null,c__4602__auto___20501);
var G__20505 = (0);
seq__20482_20488 = G__20502;
chunk__20483_20489 = G__20503;
count__20484_20490 = G__20504;
i__20485_20491 = G__20505;
continue;
} else {
var vec__20487_20506 = cljs.core.first.call(null,seq__20482_20500__$1);
var name_20507 = cljs.core.nth.call(null,vec__20487_20506,(0),null);
var value_20508 = cljs.core.nth.call(null,vec__20487_20506,(1),null);
domina.set_attr_BANG_.call(null,content,name_20507,value_20508);

var G__20509 = cljs.core.next.call(null,seq__20482_20500__$1);
var G__20510 = null;
var G__20511 = (0);
var G__20512 = (0);
seq__20482_20488 = G__20509;
chunk__20483_20489 = G__20510;
count__20484_20490 = G__20511;
i__20485_20491 = G__20512;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__20517_20521 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20518_20522 = null;
var count__20519_20523 = (0);
var i__20520_20524 = (0);
while(true){
if((i__20520_20524 < count__20519_20523)){
var node_20525 = cljs.core._nth.call(null,chunk__20518_20522,i__20520_20524);
goog.dom.classes.add(node_20525,class$);

var G__20526 = seq__20517_20521;
var G__20527 = chunk__20518_20522;
var G__20528 = count__20519_20523;
var G__20529 = (i__20520_20524 + (1));
seq__20517_20521 = G__20526;
chunk__20518_20522 = G__20527;
count__20519_20523 = G__20528;
i__20520_20524 = G__20529;
continue;
} else {
var temp__4126__auto___20530 = cljs.core.seq.call(null,seq__20517_20521);
if(temp__4126__auto___20530){
var seq__20517_20531__$1 = temp__4126__auto___20530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20517_20531__$1)){
var c__4602__auto___20532 = cljs.core.chunk_first.call(null,seq__20517_20531__$1);
var G__20533 = cljs.core.chunk_rest.call(null,seq__20517_20531__$1);
var G__20534 = c__4602__auto___20532;
var G__20535 = cljs.core.count.call(null,c__4602__auto___20532);
var G__20536 = (0);
seq__20517_20521 = G__20533;
chunk__20518_20522 = G__20534;
count__20519_20523 = G__20535;
i__20520_20524 = G__20536;
continue;
} else {
var node_20537 = cljs.core.first.call(null,seq__20517_20531__$1);
goog.dom.classes.add(node_20537,class$);

var G__20538 = cljs.core.next.call(null,seq__20517_20531__$1);
var G__20539 = null;
var G__20540 = (0);
var G__20541 = (0);
seq__20517_20521 = G__20538;
chunk__20518_20522 = G__20539;
count__20519_20523 = G__20540;
i__20520_20524 = G__20541;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__20546_20550 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20547_20551 = null;
var count__20548_20552 = (0);
var i__20549_20553 = (0);
while(true){
if((i__20549_20553 < count__20548_20552)){
var node_20554 = cljs.core._nth.call(null,chunk__20547_20551,i__20549_20553);
goog.dom.classes.remove(node_20554,class$);

var G__20555 = seq__20546_20550;
var G__20556 = chunk__20547_20551;
var G__20557 = count__20548_20552;
var G__20558 = (i__20549_20553 + (1));
seq__20546_20550 = G__20555;
chunk__20547_20551 = G__20556;
count__20548_20552 = G__20557;
i__20549_20553 = G__20558;
continue;
} else {
var temp__4126__auto___20559 = cljs.core.seq.call(null,seq__20546_20550);
if(temp__4126__auto___20559){
var seq__20546_20560__$1 = temp__4126__auto___20559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20546_20560__$1)){
var c__4602__auto___20561 = cljs.core.chunk_first.call(null,seq__20546_20560__$1);
var G__20562 = cljs.core.chunk_rest.call(null,seq__20546_20560__$1);
var G__20563 = c__4602__auto___20561;
var G__20564 = cljs.core.count.call(null,c__4602__auto___20561);
var G__20565 = (0);
seq__20546_20550 = G__20562;
chunk__20547_20551 = G__20563;
count__20548_20552 = G__20564;
i__20549_20553 = G__20565;
continue;
} else {
var node_20566 = cljs.core.first.call(null,seq__20546_20560__$1);
goog.dom.classes.remove(node_20566,class$);

var G__20567 = cljs.core.next.call(null,seq__20546_20560__$1);
var G__20568 = null;
var G__20569 = (0);
var G__20570 = (0);
seq__20546_20550 = G__20567;
chunk__20547_20551 = G__20568;
count__20548_20552 = G__20569;
i__20549_20553 = G__20570;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){
var seq__20575_20579 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20576_20580 = null;
var count__20577_20581 = (0);
var i__20578_20582 = (0);
while(true){
if((i__20578_20582 < count__20577_20581)){
var node_20583 = cljs.core._nth.call(null,chunk__20576_20580,i__20578_20582);
goog.dom.classes.toggle(node_20583,class$);

var G__20584 = seq__20575_20579;
var G__20585 = chunk__20576_20580;
var G__20586 = count__20577_20581;
var G__20587 = (i__20578_20582 + (1));
seq__20575_20579 = G__20584;
chunk__20576_20580 = G__20585;
count__20577_20581 = G__20586;
i__20578_20582 = G__20587;
continue;
} else {
var temp__4126__auto___20588 = cljs.core.seq.call(null,seq__20575_20579);
if(temp__4126__auto___20588){
var seq__20575_20589__$1 = temp__4126__auto___20588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20575_20589__$1)){
var c__4602__auto___20590 = cljs.core.chunk_first.call(null,seq__20575_20589__$1);
var G__20591 = cljs.core.chunk_rest.call(null,seq__20575_20589__$1);
var G__20592 = c__4602__auto___20590;
var G__20593 = cljs.core.count.call(null,c__4602__auto___20590);
var G__20594 = (0);
seq__20575_20579 = G__20591;
chunk__20576_20580 = G__20592;
count__20577_20581 = G__20593;
i__20578_20582 = G__20594;
continue;
} else {
var node_20595 = cljs.core.first.call(null,seq__20575_20589__$1);
goog.dom.classes.toggle(node_20595,class$);

var G__20596 = cljs.core.next.call(null,seq__20575_20589__$1);
var G__20597 = null;
var G__20598 = (0);
var G__20599 = (0);
seq__20575_20579 = G__20596;
chunk__20576_20580 = G__20597;
count__20577_20581 = G__20598;
i__20578_20582 = G__20599;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_20608__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__20604_20609 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20605_20610 = null;
var count__20606_20611 = (0);
var i__20607_20612 = (0);
while(true){
if((i__20607_20612 < count__20606_20611)){
var node_20613 = cljs.core._nth.call(null,chunk__20605_20610,i__20607_20612);
goog.dom.classes.set(node_20613,classes_20608__$1);

var G__20614 = seq__20604_20609;
var G__20615 = chunk__20605_20610;
var G__20616 = count__20606_20611;
var G__20617 = (i__20607_20612 + (1));
seq__20604_20609 = G__20614;
chunk__20605_20610 = G__20615;
count__20606_20611 = G__20616;
i__20607_20612 = G__20617;
continue;
} else {
var temp__4126__auto___20618 = cljs.core.seq.call(null,seq__20604_20609);
if(temp__4126__auto___20618){
var seq__20604_20619__$1 = temp__4126__auto___20618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20604_20619__$1)){
var c__4602__auto___20620 = cljs.core.chunk_first.call(null,seq__20604_20619__$1);
var G__20621 = cljs.core.chunk_rest.call(null,seq__20604_20619__$1);
var G__20622 = c__4602__auto___20620;
var G__20623 = cljs.core.count.call(null,c__4602__auto___20620);
var G__20624 = (0);
seq__20604_20609 = G__20621;
chunk__20605_20610 = G__20622;
count__20606_20611 = G__20623;
i__20607_20612 = G__20624;
continue;
} else {
var node_20625 = cljs.core.first.call(null,seq__20604_20619__$1);
goog.dom.classes.set(node_20625,classes_20608__$1);

var G__20626 = cljs.core.next.call(null,seq__20604_20619__$1);
var G__20627 = null;
var G__20628 = (0);
var G__20629 = (0);
seq__20604_20609 = G__20626;
chunk__20605_20610 = G__20627;
count__20606_20611 = G__20628;
i__20607_20612 = G__20629;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__20634_20638 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20635_20639 = null;
var count__20636_20640 = (0);
var i__20637_20641 = (0);
while(true){
if((i__20637_20641 < count__20636_20640)){
var node_20642 = cljs.core._nth.call(null,chunk__20635_20639,i__20637_20641);
goog.dom.setTextContent(node_20642,value);

var G__20643 = seq__20634_20638;
var G__20644 = chunk__20635_20639;
var G__20645 = count__20636_20640;
var G__20646 = (i__20637_20641 + (1));
seq__20634_20638 = G__20643;
chunk__20635_20639 = G__20644;
count__20636_20640 = G__20645;
i__20637_20641 = G__20646;
continue;
} else {
var temp__4126__auto___20647 = cljs.core.seq.call(null,seq__20634_20638);
if(temp__4126__auto___20647){
var seq__20634_20648__$1 = temp__4126__auto___20647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20634_20648__$1)){
var c__4602__auto___20649 = cljs.core.chunk_first.call(null,seq__20634_20648__$1);
var G__20650 = cljs.core.chunk_rest.call(null,seq__20634_20648__$1);
var G__20651 = c__4602__auto___20649;
var G__20652 = cljs.core.count.call(null,c__4602__auto___20649);
var G__20653 = (0);
seq__20634_20638 = G__20650;
chunk__20635_20639 = G__20651;
count__20636_20640 = G__20652;
i__20637_20641 = G__20653;
continue;
} else {
var node_20654 = cljs.core.first.call(null,seq__20634_20648__$1);
goog.dom.setTextContent(node_20654,value);

var G__20655 = cljs.core.next.call(null,seq__20634_20648__$1);
var G__20656 = null;
var G__20657 = (0);
var G__20658 = (0);
seq__20634_20638 = G__20655;
chunk__20635_20639 = G__20656;
count__20636_20640 = G__20657;
i__20637_20641 = G__20658;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__20663_20667 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20664_20668 = null;
var count__20665_20669 = (0);
var i__20666_20670 = (0);
while(true){
if((i__20666_20670 < count__20665_20669)){
var node_20671 = cljs.core._nth.call(null,chunk__20664_20668,i__20666_20670);
goog.dom.forms.setValue(node_20671,value);

var G__20672 = seq__20663_20667;
var G__20673 = chunk__20664_20668;
var G__20674 = count__20665_20669;
var G__20675 = (i__20666_20670 + (1));
seq__20663_20667 = G__20672;
chunk__20664_20668 = G__20673;
count__20665_20669 = G__20674;
i__20666_20670 = G__20675;
continue;
} else {
var temp__4126__auto___20676 = cljs.core.seq.call(null,seq__20663_20667);
if(temp__4126__auto___20676){
var seq__20663_20677__$1 = temp__4126__auto___20676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20663_20677__$1)){
var c__4602__auto___20678 = cljs.core.chunk_first.call(null,seq__20663_20677__$1);
var G__20679 = cljs.core.chunk_rest.call(null,seq__20663_20677__$1);
var G__20680 = c__4602__auto___20678;
var G__20681 = cljs.core.count.call(null,c__4602__auto___20678);
var G__20682 = (0);
seq__20663_20667 = G__20679;
chunk__20664_20668 = G__20680;
count__20665_20669 = G__20681;
i__20666_20670 = G__20682;
continue;
} else {
var node_20683 = cljs.core.first.call(null,seq__20663_20677__$1);
goog.dom.forms.setValue(node_20683,value);

var G__20684 = cljs.core.next.call(null,seq__20663_20677__$1);
var G__20685 = null;
var G__20686 = (0);
var G__20687 = (0);
seq__20663_20667 = G__20684;
chunk__20664_20668 = G__20685;
count__20665_20669 = G__20686;
i__20666_20670 = G__20687;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3803__auto__ = allows_inner_html_QMARK_;
if(and__3803__auto__){
var and__3803__auto____$1 = (function (){var or__3815__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3803__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__3803__auto____$1;
}
} else {
return and__3803__auto__;
}
})())){
var value_20698 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__20694_20699 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20695_20700 = null;
var count__20696_20701 = (0);
var i__20697_20702 = (0);
while(true){
if((i__20697_20702 < count__20696_20701)){
var node_20703 = cljs.core._nth.call(null,chunk__20695_20700,i__20697_20702);
node_20703.innerHTML = value_20698;

var G__20704 = seq__20694_20699;
var G__20705 = chunk__20695_20700;
var G__20706 = count__20696_20701;
var G__20707 = (i__20697_20702 + (1));
seq__20694_20699 = G__20704;
chunk__20695_20700 = G__20705;
count__20696_20701 = G__20706;
i__20697_20702 = G__20707;
continue;
} else {
var temp__4126__auto___20708 = cljs.core.seq.call(null,seq__20694_20699);
if(temp__4126__auto___20708){
var seq__20694_20709__$1 = temp__4126__auto___20708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20694_20709__$1)){
var c__4602__auto___20710 = cljs.core.chunk_first.call(null,seq__20694_20709__$1);
var G__20711 = cljs.core.chunk_rest.call(null,seq__20694_20709__$1);
var G__20712 = c__4602__auto___20710;
var G__20713 = cljs.core.count.call(null,c__4602__auto___20710);
var G__20714 = (0);
seq__20694_20699 = G__20711;
chunk__20695_20700 = G__20712;
count__20696_20701 = G__20713;
i__20697_20702 = G__20714;
continue;
} else {
var node_20715 = cljs.core.first.call(null,seq__20694_20709__$1);
node_20715.innerHTML = value_20698;

var G__20716 = cljs.core.next.call(null,seq__20694_20709__$1);
var G__20717 = null;
var G__20718 = (0);
var G__20719 = (0);
seq__20694_20699 = G__20716;
chunk__20695_20700 = G__20717;
count__20696_20701 = G__20718;
i__20697_20702 = G__20719;
continue;
}
} else {
}
}
break;
}
}catch (e20693){if((e20693 instanceof Error)){
var e_20720 = e20693;
domina.replace_children_BANG_.call(null,content,value_20698);
} else {
throw e20693;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3803__auto__ = bubble;
if(cljs.core.truth_(and__3803__auto__)){
return (value == null);
} else {
return and__3803__auto__;
}
})())){
var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4126__auto__)){
var parent = temp__4126__auto__;
return get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3815__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__20727_20731 = cljs.core.seq.call(null,children);
var chunk__20728_20732 = null;
var count__20729_20733 = (0);
var i__20730_20734 = (0);
while(true){
if((i__20730_20734 < count__20729_20733)){
var child_20735 = cljs.core._nth.call(null,chunk__20728_20732,i__20730_20734);
frag.appendChild(child_20735);

var G__20736 = seq__20727_20731;
var G__20737 = chunk__20728_20732;
var G__20738 = count__20729_20733;
var G__20739 = (i__20730_20734 + (1));
seq__20727_20731 = G__20736;
chunk__20728_20732 = G__20737;
count__20729_20733 = G__20738;
i__20730_20734 = G__20739;
continue;
} else {
var temp__4126__auto___20740 = cljs.core.seq.call(null,seq__20727_20731);
if(temp__4126__auto___20740){
var seq__20727_20741__$1 = temp__4126__auto___20740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20727_20741__$1)){
var c__4602__auto___20742 = cljs.core.chunk_first.call(null,seq__20727_20741__$1);
var G__20743 = cljs.core.chunk_rest.call(null,seq__20727_20741__$1);
var G__20744 = c__4602__auto___20742;
var G__20745 = cljs.core.count.call(null,c__4602__auto___20742);
var G__20746 = (0);
seq__20727_20731 = G__20743;
chunk__20728_20732 = G__20744;
count__20729_20733 = G__20745;
i__20730_20734 = G__20746;
continue;
} else {
var child_20747 = cljs.core.first.call(null,seq__20727_20741__$1);
frag.appendChild(child_20747);

var G__20748 = cljs.core.next.call(null,seq__20727_20741__$1);
var G__20749 = null;
var G__20750 = (0);
var G__20751 = (0);
seq__20727_20731 = G__20748;
chunk__20728_20732 = G__20749;
count__20729_20733 = G__20750;
i__20730_20734 = G__20751;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__20721_SHARP_,p2__20722_SHARP_){
return f.call(null,p1__20721_SHARP_,p2__20722_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3803__auto__ = obj;
if(cljs.core.truth_(and__3803__auto__)){
var and__3803__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__3803__auto____$1){
return obj.length;
} else {
return and__3803__auto____$1;
}
} else {
return and__3803__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__20753 = list_thing;
if(G__20753){
var bit__4496__auto__ = (G__20753.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4496__auto__) || (G__20753.cljs$core$ISeqable$)){
return true;
} else {
if((!G__20753.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20753);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20753);
}
})()){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__20754 = content;
if(G__20754){
var bit__4496__auto__ = (G__20754.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4496__auto__) || (G__20754.cljs$core$ISeqable$)){
return true;
} else {
if((!G__20754.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20754);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20754);
}
})()){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((function (){var G__20755 = content;
if(G__20755){
var bit__4496__auto__ = (G__20755.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4496__auto__) || (G__20755.cljs$core$ISeqable$)){
return true;
} else {
if((!G__20755.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20755);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20755);
}
})()){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));

(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});
} else {
}

//# sourceMappingURL=domina.js.map?rel=1435332574524