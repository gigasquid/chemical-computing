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
var opt_wrapper_26807 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_26808 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_26809 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$7,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_26809,opt_wrapper_26807,table_section_wrapper_26808,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_26807,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_26808,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_26808,cell_wrapper_26809,table_section_wrapper_26808,table_section_wrapper_26808]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3803__auto__ = div.firstChild;
if(cljs.core.truth_(and__3803__auto__)){
return div.firstChild.childNodes;
} else {
return and__3803__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__26814 = cljs.core.seq(tbody);
var chunk__26815 = null;
var count__26816 = (0);
var i__26817 = (0);
while(true){
if((i__26817 < count__26816)){
var child = chunk__26815.cljs$core$IIndexed$_nth$arity$2(null,i__26817);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__26818 = seq__26814;
var G__26819 = chunk__26815;
var G__26820 = count__26816;
var G__26821 = (i__26817 + (1));
seq__26814 = G__26818;
chunk__26815 = G__26819;
count__26816 = G__26820;
i__26817 = G__26821;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26814);
if(temp__4126__auto__){
var seq__26814__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26814__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__26814__$1);
var G__26822 = cljs.core.chunk_rest(seq__26814__$1);
var G__26823 = c__4602__auto__;
var G__26824 = cljs.core.count(c__4602__auto__);
var G__26825 = (0);
seq__26814 = G__26822;
chunk__26815 = G__26823;
count__26816 = G__26824;
i__26817 = G__26825;
continue;
} else {
var child = cljs.core.first(seq__26814__$1);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__26826 = cljs.core.next(seq__26814__$1);
var G__26827 = null;
var G__26828 = (0);
var G__26829 = (0);
seq__26814 = G__26826;
chunk__26815 = G__26827;
count__26816 = G__26828;
i__26817 = G__26829;
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
return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__26831 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26831,(0),null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26831,(1),null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26831,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__26832 = wrapper.lastChild;
var G__26833 = (level - (1));
wrapper = G__26832;
level = G__26833;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__3803__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);
if(and__3803__auto__){
return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else {
return and__3803__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_(div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s))){
return domina.html_to_dom(s);
} else {
return document.createTextNode(s);
}
});

domina.DomContent = (function (){var obj26835 = {};
return obj26835;
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
return (function (){var or__3815__auto__ = (domina.nodes[(function (){var G__26839 = x__4459__auto__;
return goog.typeOf(G__26839);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (domina.nodes["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DomContent.nodes",content);
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
return (function (){var or__3815__auto__ = (domina.single_node[(function (){var G__26843 = x__4459__auto__;
return goog.typeOf(G__26843);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (domina.single_node["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else {
return and__3803__auto__;
}
})())){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
var G__26844__i = 0, G__26844__a = new Array(arguments.length -  0);
while (G__26844__i < G__26844__a.length) {G__26844__a[G__26844__i] = arguments[G__26844__i + 0]; ++G__26844__i;}
  mesg = new cljs.core.IndexedSeq(G__26844__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__26845){
var mesg = cljs.core.seq(arglist__26845);
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
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
var G__26846__i = 0, G__26846__a = new Array(arguments.length -  0);
while (G__26846__i < G__26846__a.length) {G__26846__a[G__26846__i] = arguments[G__26846__i + 0]; ++G__26846__i;}
  mesg = new cljs.core.IndexedSeq(G__26846__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__26847){
var mesg = cljs.core.seq(arglist__26847);
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
var G__26849 = cljs.core.name(id);
return goog.dom.getElement(G__26849);
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
var G__26852 = (function (){var G__26853 = cljs.core.name(class_name);
return goog.dom.getElementsByClass(G__26853);
})();
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(G__26852) : domina.normalize_seq.call(null,G__26852));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(goog.dom.getChildren,cljs.core.array_seq([domina.nodes(content)], 0)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__26854__i = 0, G__26854__a = new Array(arguments.length -  0);
while (G__26854__i < G__26854__a.length) {G__26854__a[G__26854__i] = arguments[G__26854__i + 0]; ++G__26854__i;}
  contents = new cljs.core.IndexedSeq(G__26854__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__26855){
var contents = cljs.core.seq(arglist__26855);
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26856_SHARP_){
return p1__26856_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
var G__26860_26863 = goog.dom.appendChild;
var G__26861_26864 = parent_content;
var G__26862_26865 = child_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26860_26863,G__26861_26864,G__26862_26865) : domina.apply_with_cloning.call(null,G__26860_26863,G__26861_26864,G__26862_26865));

return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
var G__26874_26880 = (function (p1__26866_SHARP_,p2__26867_SHARP_){
var G__26877 = p1__26866_SHARP_;
var G__26878 = p2__26867_SHARP_;
var G__26879 = idx;
return goog.dom.insertChildAt(G__26877,G__26878,G__26879);
});
var G__26875_26881 = parent_content;
var G__26876_26882 = child_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26874_26880,G__26875_26881,G__26876_26882) : domina.apply_with_cloning.call(null,G__26874_26880,G__26875_26881,G__26876_26882));

return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_(parent_content,child_content,(0));

return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
var G__26890_26895 = (function (p1__26884_SHARP_,p2__26883_SHARP_){
var G__26893 = p2__26883_SHARP_;
var G__26894 = p1__26884_SHARP_;
return goog.dom.insertSiblingBefore(G__26893,G__26894);
});
var G__26891_26896 = content;
var G__26892_26897 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26890_26895,G__26891_26896,G__26892_26897) : domina.apply_with_cloning.call(null,G__26890_26895,G__26891_26896,G__26892_26897));

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
var G__26905_26910 = (function (p1__26899_SHARP_,p2__26898_SHARP_){
var G__26908 = p2__26898_SHARP_;
var G__26909 = p1__26899_SHARP_;
return goog.dom.insertSiblingAfter(G__26908,G__26909);
});
var G__26906_26911 = content;
var G__26907_26912 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26905_26910,G__26906_26911,G__26907_26912) : domina.apply_with_cloning.call(null,G__26905_26910,G__26906_26911,G__26907_26912));

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
var G__26920_26925 = (function (p1__26914_SHARP_,p2__26913_SHARP_){
var G__26923 = p2__26913_SHARP_;
var G__26924 = p1__26914_SHARP_;
return goog.dom.replaceNode(G__26923,G__26924);
});
var G__26921_26926 = old_content;
var G__26922_26927 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26920_26925,G__26921_26926,G__26922_26927) : domina.apply_with_cloning.call(null,G__26920_26925,G__26921_26926,G__26922_26927));

return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));

return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = (function (){var G__26930 = domina.single_node(content);
var G__26931 = cljs.core.name(name);
return goog.style.getStyle(G__26930,G__26931);
})();
if(cljs.core.truth_(clojure.string.blank_QMARK_(s))){
return null;
} else {
return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__26942_26952 = cljs.core.seq(domina.nodes(content));
var chunk__26943_26953 = null;
var count__26944_26954 = (0);
var i__26945_26955 = (0);
while(true){
if((i__26945_26955 < count__26944_26954)){
var n_26956 = chunk__26943_26953.cljs$core$IIndexed$_nth$arity$2(null,i__26945_26955);
var G__26946_26957 = n_26956;
var G__26947_26958 = cljs.core.name(name);
var G__26948_26959 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__26946_26957,G__26947_26958,G__26948_26959);

var G__26960 = seq__26942_26952;
var G__26961 = chunk__26943_26953;
var G__26962 = count__26944_26954;
var G__26963 = (i__26945_26955 + (1));
seq__26942_26952 = G__26960;
chunk__26943_26953 = G__26961;
count__26944_26954 = G__26962;
i__26945_26955 = G__26963;
continue;
} else {
var temp__4126__auto___26964 = cljs.core.seq(seq__26942_26952);
if(temp__4126__auto___26964){
var seq__26942_26965__$1 = temp__4126__auto___26964;
if(cljs.core.chunked_seq_QMARK_(seq__26942_26965__$1)){
var c__4602__auto___26966 = cljs.core.chunk_first(seq__26942_26965__$1);
var G__26967 = cljs.core.chunk_rest(seq__26942_26965__$1);
var G__26968 = c__4602__auto___26966;
var G__26969 = cljs.core.count(c__4602__auto___26966);
var G__26970 = (0);
seq__26942_26952 = G__26967;
chunk__26943_26953 = G__26968;
count__26944_26954 = G__26969;
i__26945_26955 = G__26970;
continue;
} else {
var n_26971 = cljs.core.first(seq__26942_26965__$1);
var G__26949_26972 = n_26971;
var G__26950_26973 = cljs.core.name(name);
var G__26951_26974 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__26949_26972,G__26950_26973,G__26951_26974);

var G__26975 = cljs.core.next(seq__26942_26965__$1);
var G__26976 = null;
var G__26977 = (0);
var G__26978 = (0);
seq__26942_26952 = G__26975;
chunk__26943_26953 = G__26976;
count__26944_26954 = G__26977;
i__26945_26955 = G__26978;
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
var G__26979__i = 0, G__26979__a = new Array(arguments.length -  2);
while (G__26979__i < G__26979__a.length) {G__26979__a[G__26979__i] = arguments[G__26979__i + 2]; ++G__26979__i;}
  value = new cljs.core.IndexedSeq(G__26979__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26980){
var content = cljs.core.first(arglist__26980);
arglist__26980 = cljs.core.next(arglist__26980);
var name = cljs.core.first(arglist__26980);
var value = cljs.core.rest(arglist__26980);
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
var seq__26985_26989 = cljs.core.seq(domina.nodes(content));
var chunk__26986_26990 = null;
var count__26987_26991 = (0);
var i__26988_26992 = (0);
while(true){
if((i__26988_26992 < count__26987_26991)){
var n_26993 = chunk__26986_26990.cljs$core$IIndexed$_nth$arity$2(null,i__26988_26992);
n_26993.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__26994 = seq__26985_26989;
var G__26995 = chunk__26986_26990;
var G__26996 = count__26987_26991;
var G__26997 = (i__26988_26992 + (1));
seq__26985_26989 = G__26994;
chunk__26986_26990 = G__26995;
count__26987_26991 = G__26996;
i__26988_26992 = G__26997;
continue;
} else {
var temp__4126__auto___26998 = cljs.core.seq(seq__26985_26989);
if(temp__4126__auto___26998){
var seq__26985_26999__$1 = temp__4126__auto___26998;
if(cljs.core.chunked_seq_QMARK_(seq__26985_26999__$1)){
var c__4602__auto___27000 = cljs.core.chunk_first(seq__26985_26999__$1);
var G__27001 = cljs.core.chunk_rest(seq__26985_26999__$1);
var G__27002 = c__4602__auto___27000;
var G__27003 = cljs.core.count(c__4602__auto___27000);
var G__27004 = (0);
seq__26985_26989 = G__27001;
chunk__26986_26990 = G__27002;
count__26987_26991 = G__27003;
i__26988_26992 = G__27004;
continue;
} else {
var n_27005 = cljs.core.first(seq__26985_26999__$1);
n_27005.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__27006 = cljs.core.next(seq__26985_26999__$1);
var G__27007 = null;
var G__27008 = (0);
var G__27009 = (0);
seq__26985_26989 = G__27006;
chunk__26986_26990 = G__27007;
count__26987_26991 = G__27008;
i__26988_26992 = G__27009;
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
var G__27010__i = 0, G__27010__a = new Array(arguments.length -  2);
while (G__27010__i < G__27010__a.length) {G__27010__a[G__27010__i] = arguments[G__27010__i + 2]; ++G__27010__i;}
  value = new cljs.core.IndexedSeq(G__27010__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27011){
var content = cljs.core.first(arglist__27011);
arglist__27011 = cljs.core.next(arglist__27011);
var name = cljs.core.first(arglist__27011);
var value = cljs.core.rest(arglist__27011);
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
var seq__27016_27020 = cljs.core.seq(domina.nodes(content));
var chunk__27017_27021 = null;
var count__27018_27022 = (0);
var i__27019_27023 = (0);
while(true){
if((i__27019_27023 < count__27018_27022)){
var n_27024 = chunk__27017_27021.cljs$core$IIndexed$_nth$arity$2(null,i__27019_27023);
n_27024.removeAttribute(cljs.core.name(name));

var G__27025 = seq__27016_27020;
var G__27026 = chunk__27017_27021;
var G__27027 = count__27018_27022;
var G__27028 = (i__27019_27023 + (1));
seq__27016_27020 = G__27025;
chunk__27017_27021 = G__27026;
count__27018_27022 = G__27027;
i__27019_27023 = G__27028;
continue;
} else {
var temp__4126__auto___27029 = cljs.core.seq(seq__27016_27020);
if(temp__4126__auto___27029){
var seq__27016_27030__$1 = temp__4126__auto___27029;
if(cljs.core.chunked_seq_QMARK_(seq__27016_27030__$1)){
var c__4602__auto___27031 = cljs.core.chunk_first(seq__27016_27030__$1);
var G__27032 = cljs.core.chunk_rest(seq__27016_27030__$1);
var G__27033 = c__4602__auto___27031;
var G__27034 = cljs.core.count(c__4602__auto___27031);
var G__27035 = (0);
seq__27016_27020 = G__27032;
chunk__27017_27021 = G__27033;
count__27018_27022 = G__27034;
i__27019_27023 = G__27035;
continue;
} else {
var n_27036 = cljs.core.first(seq__27016_27030__$1);
n_27036.removeAttribute(cljs.core.name(name));

var G__27037 = cljs.core.next(seq__27016_27030__$1);
var G__27038 = null;
var G__27039 = (0);
var G__27040 = (0);
seq__27016_27020 = G__27037;
chunk__27017_27021 = G__27038;
count__27018_27022 = G__27039;
i__27019_27023 = G__27040;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){
var vec__27042 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27042,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27042,(1),null);
if(cljs.core.truth_((function (){var and__3803__auto__ = k;
if(cljs.core.truth_(and__3803__auto__)){
return v;
} else {
return and__3803__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr(content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes(style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes(style.cssText);
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
var node = domina.single_node(content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__27043_SHARP_){
var attr = attrs__$1.item(p1__27043_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value))){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__27050_27056 = cljs.core.seq(styles);
var chunk__27051_27057 = null;
var count__27052_27058 = (0);
var i__27053_27059 = (0);
while(true){
if((i__27053_27059 < count__27052_27058)){
var vec__27054_27060 = chunk__27051_27057.cljs$core$IIndexed$_nth$arity$2(null,i__27053_27059);
var name_27061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27054_27060,(0),null);
var value_27062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27054_27060,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27061,cljs.core.array_seq([value_27062], 0));

var G__27063 = seq__27050_27056;
var G__27064 = chunk__27051_27057;
var G__27065 = count__27052_27058;
var G__27066 = (i__27053_27059 + (1));
seq__27050_27056 = G__27063;
chunk__27051_27057 = G__27064;
count__27052_27058 = G__27065;
i__27053_27059 = G__27066;
continue;
} else {
var temp__4126__auto___27067 = cljs.core.seq(seq__27050_27056);
if(temp__4126__auto___27067){
var seq__27050_27068__$1 = temp__4126__auto___27067;
if(cljs.core.chunked_seq_QMARK_(seq__27050_27068__$1)){
var c__4602__auto___27069 = cljs.core.chunk_first(seq__27050_27068__$1);
var G__27070 = cljs.core.chunk_rest(seq__27050_27068__$1);
var G__27071 = c__4602__auto___27069;
var G__27072 = cljs.core.count(c__4602__auto___27069);
var G__27073 = (0);
seq__27050_27056 = G__27070;
chunk__27051_27057 = G__27071;
count__27052_27058 = G__27072;
i__27053_27059 = G__27073;
continue;
} else {
var vec__27055_27074 = cljs.core.first(seq__27050_27068__$1);
var name_27075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27055_27074,(0),null);
var value_27076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27055_27074,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27075,cljs.core.array_seq([value_27076], 0));

var G__27077 = cljs.core.next(seq__27050_27068__$1);
var G__27078 = null;
var G__27079 = (0);
var G__27080 = (0);
seq__27050_27056 = G__27077;
chunk__27051_27057 = G__27078;
count__27052_27058 = G__27079;
i__27053_27059 = G__27080;
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
var seq__27087_27093 = cljs.core.seq(attrs);
var chunk__27088_27094 = null;
var count__27089_27095 = (0);
var i__27090_27096 = (0);
while(true){
if((i__27090_27096 < count__27089_27095)){
var vec__27091_27097 = chunk__27088_27094.cljs$core$IIndexed$_nth$arity$2(null,i__27090_27096);
var name_27098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091_27097,(0),null);
var value_27099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091_27097,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27098,cljs.core.array_seq([value_27099], 0));

var G__27100 = seq__27087_27093;
var G__27101 = chunk__27088_27094;
var G__27102 = count__27089_27095;
var G__27103 = (i__27090_27096 + (1));
seq__27087_27093 = G__27100;
chunk__27088_27094 = G__27101;
count__27089_27095 = G__27102;
i__27090_27096 = G__27103;
continue;
} else {
var temp__4126__auto___27104 = cljs.core.seq(seq__27087_27093);
if(temp__4126__auto___27104){
var seq__27087_27105__$1 = temp__4126__auto___27104;
if(cljs.core.chunked_seq_QMARK_(seq__27087_27105__$1)){
var c__4602__auto___27106 = cljs.core.chunk_first(seq__27087_27105__$1);
var G__27107 = cljs.core.chunk_rest(seq__27087_27105__$1);
var G__27108 = c__4602__auto___27106;
var G__27109 = cljs.core.count(c__4602__auto___27106);
var G__27110 = (0);
seq__27087_27093 = G__27107;
chunk__27088_27094 = G__27108;
count__27089_27095 = G__27109;
i__27090_27096 = G__27110;
continue;
} else {
var vec__27092_27111 = cljs.core.first(seq__27087_27105__$1);
var name_27112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27092_27111,(0),null);
var value_27113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27092_27111,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27112,cljs.core.array_seq([value_27113], 0));

var G__27114 = cljs.core.next(seq__27087_27105__$1);
var G__27115 = null;
var G__27116 = (0);
var G__27117 = (0);
seq__27087_27093 = G__27114;
chunk__27088_27094 = G__27115;
count__27089_27095 = G__27116;
i__27090_27096 = G__27117;
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
var G__27120 = domina.single_node(content);
var G__27121 = class$;
return goog.dom.classes.has(G__27120,G__27121);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__27130_27138 = cljs.core.seq(domina.nodes(content));
var chunk__27131_27139 = null;
var count__27132_27140 = (0);
var i__27133_27141 = (0);
while(true){
if((i__27133_27141 < count__27132_27140)){
var node_27142 = chunk__27131_27139.cljs$core$IIndexed$_nth$arity$2(null,i__27133_27141);
var G__27134_27143 = node_27142;
var G__27135_27144 = class$;
goog.dom.classes.add(G__27134_27143,G__27135_27144);

var G__27145 = seq__27130_27138;
var G__27146 = chunk__27131_27139;
var G__27147 = count__27132_27140;
var G__27148 = (i__27133_27141 + (1));
seq__27130_27138 = G__27145;
chunk__27131_27139 = G__27146;
count__27132_27140 = G__27147;
i__27133_27141 = G__27148;
continue;
} else {
var temp__4126__auto___27149 = cljs.core.seq(seq__27130_27138);
if(temp__4126__auto___27149){
var seq__27130_27150__$1 = temp__4126__auto___27149;
if(cljs.core.chunked_seq_QMARK_(seq__27130_27150__$1)){
var c__4602__auto___27151 = cljs.core.chunk_first(seq__27130_27150__$1);
var G__27152 = cljs.core.chunk_rest(seq__27130_27150__$1);
var G__27153 = c__4602__auto___27151;
var G__27154 = cljs.core.count(c__4602__auto___27151);
var G__27155 = (0);
seq__27130_27138 = G__27152;
chunk__27131_27139 = G__27153;
count__27132_27140 = G__27154;
i__27133_27141 = G__27155;
continue;
} else {
var node_27156 = cljs.core.first(seq__27130_27150__$1);
var G__27136_27157 = node_27156;
var G__27137_27158 = class$;
goog.dom.classes.add(G__27136_27157,G__27137_27158);

var G__27159 = cljs.core.next(seq__27130_27150__$1);
var G__27160 = null;
var G__27161 = (0);
var G__27162 = (0);
seq__27130_27138 = G__27159;
chunk__27131_27139 = G__27160;
count__27132_27140 = G__27161;
i__27133_27141 = G__27162;
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
var seq__27171_27179 = cljs.core.seq(domina.nodes(content));
var chunk__27172_27180 = null;
var count__27173_27181 = (0);
var i__27174_27182 = (0);
while(true){
if((i__27174_27182 < count__27173_27181)){
var node_27183 = chunk__27172_27180.cljs$core$IIndexed$_nth$arity$2(null,i__27174_27182);
var G__27175_27184 = node_27183;
var G__27176_27185 = class$;
goog.dom.classes.remove(G__27175_27184,G__27176_27185);

var G__27186 = seq__27171_27179;
var G__27187 = chunk__27172_27180;
var G__27188 = count__27173_27181;
var G__27189 = (i__27174_27182 + (1));
seq__27171_27179 = G__27186;
chunk__27172_27180 = G__27187;
count__27173_27181 = G__27188;
i__27174_27182 = G__27189;
continue;
} else {
var temp__4126__auto___27190 = cljs.core.seq(seq__27171_27179);
if(temp__4126__auto___27190){
var seq__27171_27191__$1 = temp__4126__auto___27190;
if(cljs.core.chunked_seq_QMARK_(seq__27171_27191__$1)){
var c__4602__auto___27192 = cljs.core.chunk_first(seq__27171_27191__$1);
var G__27193 = cljs.core.chunk_rest(seq__27171_27191__$1);
var G__27194 = c__4602__auto___27192;
var G__27195 = cljs.core.count(c__4602__auto___27192);
var G__27196 = (0);
seq__27171_27179 = G__27193;
chunk__27172_27180 = G__27194;
count__27173_27181 = G__27195;
i__27174_27182 = G__27196;
continue;
} else {
var node_27197 = cljs.core.first(seq__27171_27191__$1);
var G__27177_27198 = node_27197;
var G__27178_27199 = class$;
goog.dom.classes.remove(G__27177_27198,G__27178_27199);

var G__27200 = cljs.core.next(seq__27171_27191__$1);
var G__27201 = null;
var G__27202 = (0);
var G__27203 = (0);
seq__27171_27179 = G__27200;
chunk__27172_27180 = G__27201;
count__27173_27181 = G__27202;
i__27174_27182 = G__27203;
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
var seq__27212_27220 = cljs.core.seq(domina.nodes(content));
var chunk__27213_27221 = null;
var count__27214_27222 = (0);
var i__27215_27223 = (0);
while(true){
if((i__27215_27223 < count__27214_27222)){
var node_27224 = chunk__27213_27221.cljs$core$IIndexed$_nth$arity$2(null,i__27215_27223);
var G__27216_27225 = node_27224;
var G__27217_27226 = class$;
goog.dom.classes.toggle(G__27216_27225,G__27217_27226);

var G__27227 = seq__27212_27220;
var G__27228 = chunk__27213_27221;
var G__27229 = count__27214_27222;
var G__27230 = (i__27215_27223 + (1));
seq__27212_27220 = G__27227;
chunk__27213_27221 = G__27228;
count__27214_27222 = G__27229;
i__27215_27223 = G__27230;
continue;
} else {
var temp__4126__auto___27231 = cljs.core.seq(seq__27212_27220);
if(temp__4126__auto___27231){
var seq__27212_27232__$1 = temp__4126__auto___27231;
if(cljs.core.chunked_seq_QMARK_(seq__27212_27232__$1)){
var c__4602__auto___27233 = cljs.core.chunk_first(seq__27212_27232__$1);
var G__27234 = cljs.core.chunk_rest(seq__27212_27232__$1);
var G__27235 = c__4602__auto___27233;
var G__27236 = cljs.core.count(c__4602__auto___27233);
var G__27237 = (0);
seq__27212_27220 = G__27234;
chunk__27213_27221 = G__27235;
count__27214_27222 = G__27236;
i__27215_27223 = G__27237;
continue;
} else {
var node_27238 = cljs.core.first(seq__27212_27232__$1);
var G__27218_27239 = node_27238;
var G__27219_27240 = class$;
goog.dom.classes.toggle(G__27218_27239,G__27219_27240);

var G__27241 = cljs.core.next(seq__27212_27232__$1);
var G__27242 = null;
var G__27243 = (0);
var G__27244 = (0);
seq__27212_27220 = G__27241;
chunk__27213_27221 = G__27242;
count__27214_27222 = G__27243;
i__27215_27223 = G__27244;
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
return cljs.core.seq((function (){var G__27246 = domina.single_node(content);
return goog.dom.classes.get(G__27246);
})());
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_27263__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__27255_27264 = cljs.core.seq(domina.nodes(content));
var chunk__27256_27265 = null;
var count__27257_27266 = (0);
var i__27258_27267 = (0);
while(true){
if((i__27258_27267 < count__27257_27266)){
var node_27268 = chunk__27256_27265.cljs$core$IIndexed$_nth$arity$2(null,i__27258_27267);
var G__27259_27269 = node_27268;
var G__27260_27270 = classes_27263__$1;
goog.dom.classes.set(G__27259_27269,G__27260_27270);

var G__27271 = seq__27255_27264;
var G__27272 = chunk__27256_27265;
var G__27273 = count__27257_27266;
var G__27274 = (i__27258_27267 + (1));
seq__27255_27264 = G__27271;
chunk__27256_27265 = G__27272;
count__27257_27266 = G__27273;
i__27258_27267 = G__27274;
continue;
} else {
var temp__4126__auto___27275 = cljs.core.seq(seq__27255_27264);
if(temp__4126__auto___27275){
var seq__27255_27276__$1 = temp__4126__auto___27275;
if(cljs.core.chunked_seq_QMARK_(seq__27255_27276__$1)){
var c__4602__auto___27277 = cljs.core.chunk_first(seq__27255_27276__$1);
var G__27278 = cljs.core.chunk_rest(seq__27255_27276__$1);
var G__27279 = c__4602__auto___27277;
var G__27280 = cljs.core.count(c__4602__auto___27277);
var G__27281 = (0);
seq__27255_27264 = G__27278;
chunk__27256_27265 = G__27279;
count__27257_27266 = G__27280;
i__27258_27267 = G__27281;
continue;
} else {
var node_27282 = cljs.core.first(seq__27255_27276__$1);
var G__27261_27283 = node_27282;
var G__27262_27284 = classes_27263__$1;
goog.dom.classes.set(G__27261_27283,G__27262_27284);

var G__27285 = cljs.core.next(seq__27255_27276__$1);
var G__27286 = null;
var G__27287 = (0);
var G__27288 = (0);
seq__27255_27264 = G__27285;
chunk__27256_27265 = G__27286;
count__27257_27266 = G__27287;
i__27258_27267 = G__27288;
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
var G__27291 = (function (){var G__27292 = domina.single_node(content);
return goog.dom.getTextContent(G__27292);
})();
return goog.string.trim(G__27291);
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__27301_27309 = cljs.core.seq(domina.nodes(content));
var chunk__27302_27310 = null;
var count__27303_27311 = (0);
var i__27304_27312 = (0);
while(true){
if((i__27304_27312 < count__27303_27311)){
var node_27313 = chunk__27302_27310.cljs$core$IIndexed$_nth$arity$2(null,i__27304_27312);
var G__27305_27314 = node_27313;
var G__27306_27315 = value;
goog.dom.setTextContent(G__27305_27314,G__27306_27315);

var G__27316 = seq__27301_27309;
var G__27317 = chunk__27302_27310;
var G__27318 = count__27303_27311;
var G__27319 = (i__27304_27312 + (1));
seq__27301_27309 = G__27316;
chunk__27302_27310 = G__27317;
count__27303_27311 = G__27318;
i__27304_27312 = G__27319;
continue;
} else {
var temp__4126__auto___27320 = cljs.core.seq(seq__27301_27309);
if(temp__4126__auto___27320){
var seq__27301_27321__$1 = temp__4126__auto___27320;
if(cljs.core.chunked_seq_QMARK_(seq__27301_27321__$1)){
var c__4602__auto___27322 = cljs.core.chunk_first(seq__27301_27321__$1);
var G__27323 = cljs.core.chunk_rest(seq__27301_27321__$1);
var G__27324 = c__4602__auto___27322;
var G__27325 = cljs.core.count(c__4602__auto___27322);
var G__27326 = (0);
seq__27301_27309 = G__27323;
chunk__27302_27310 = G__27324;
count__27303_27311 = G__27325;
i__27304_27312 = G__27326;
continue;
} else {
var node_27327 = cljs.core.first(seq__27301_27321__$1);
var G__27307_27328 = node_27327;
var G__27308_27329 = value;
goog.dom.setTextContent(G__27307_27328,G__27308_27329);

var G__27330 = cljs.core.next(seq__27301_27321__$1);
var G__27331 = null;
var G__27332 = (0);
var G__27333 = (0);
seq__27301_27309 = G__27330;
chunk__27302_27310 = G__27331;
count__27303_27311 = G__27332;
i__27304_27312 = G__27333;
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
var G__27335 = domina.single_node(content);
return goog.dom.forms.getValue(G__27335);
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__27344_27352 = cljs.core.seq(domina.nodes(content));
var chunk__27345_27353 = null;
var count__27346_27354 = (0);
var i__27347_27355 = (0);
while(true){
if((i__27347_27355 < count__27346_27354)){
var node_27356 = chunk__27345_27353.cljs$core$IIndexed$_nth$arity$2(null,i__27347_27355);
var G__27348_27357 = node_27356;
var G__27349_27358 = value;
goog.dom.forms.setValue(G__27348_27357,G__27349_27358);

var G__27359 = seq__27344_27352;
var G__27360 = chunk__27345_27353;
var G__27361 = count__27346_27354;
var G__27362 = (i__27347_27355 + (1));
seq__27344_27352 = G__27359;
chunk__27345_27353 = G__27360;
count__27346_27354 = G__27361;
i__27347_27355 = G__27362;
continue;
} else {
var temp__4126__auto___27363 = cljs.core.seq(seq__27344_27352);
if(temp__4126__auto___27363){
var seq__27344_27364__$1 = temp__4126__auto___27363;
if(cljs.core.chunked_seq_QMARK_(seq__27344_27364__$1)){
var c__4602__auto___27365 = cljs.core.chunk_first(seq__27344_27364__$1);
var G__27366 = cljs.core.chunk_rest(seq__27344_27364__$1);
var G__27367 = c__4602__auto___27365;
var G__27368 = cljs.core.count(c__4602__auto___27365);
var G__27369 = (0);
seq__27344_27352 = G__27366;
chunk__27345_27353 = G__27367;
count__27346_27354 = G__27368;
i__27347_27355 = G__27369;
continue;
} else {
var node_27370 = cljs.core.first(seq__27344_27364__$1);
var G__27350_27371 = node_27370;
var G__27351_27372 = value;
goog.dom.forms.setValue(G__27350_27371,G__27351_27372);

var G__27373 = cljs.core.next(seq__27344_27364__$1);
var G__27374 = null;
var G__27375 = (0);
var G__27376 = (0);
seq__27344_27352 = G__27373;
chunk__27345_27353 = G__27374;
count__27346_27354 = G__27375;
i__27347_27355 = G__27376;
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
return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3803__auto__ = allows_inner_html_QMARK_;
if(and__3803__auto__){
var and__3803__auto____$1 = (function (){var or__3815__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.not(leading_whitespace_QMARK_);
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
var value_27387 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__27383_27388 = cljs.core.seq(domina.nodes(content));
var chunk__27384_27389 = null;
var count__27385_27390 = (0);
var i__27386_27391 = (0);
while(true){
if((i__27386_27391 < count__27385_27390)){
var node_27392 = chunk__27384_27389.cljs$core$IIndexed$_nth$arity$2(null,i__27386_27391);
node_27392.innerHTML = value_27387;

var G__27393 = seq__27383_27388;
var G__27394 = chunk__27384_27389;
var G__27395 = count__27385_27390;
var G__27396 = (i__27386_27391 + (1));
seq__27383_27388 = G__27393;
chunk__27384_27389 = G__27394;
count__27385_27390 = G__27395;
i__27386_27391 = G__27396;
continue;
} else {
var temp__4126__auto___27397 = cljs.core.seq(seq__27383_27388);
if(temp__4126__auto___27397){
var seq__27383_27398__$1 = temp__4126__auto___27397;
if(cljs.core.chunked_seq_QMARK_(seq__27383_27398__$1)){
var c__4602__auto___27399 = cljs.core.chunk_first(seq__27383_27398__$1);
var G__27400 = cljs.core.chunk_rest(seq__27383_27398__$1);
var G__27401 = c__4602__auto___27399;
var G__27402 = cljs.core.count(c__4602__auto___27399);
var G__27403 = (0);
seq__27383_27388 = G__27400;
chunk__27384_27389 = G__27401;
count__27385_27390 = G__27402;
i__27386_27391 = G__27403;
continue;
} else {
var node_27404 = cljs.core.first(seq__27383_27398__$1);
node_27404.innerHTML = value_27387;

var G__27405 = cljs.core.next(seq__27383_27398__$1);
var G__27406 = null;
var G__27407 = (0);
var G__27408 = (0);
seq__27383_27388 = G__27405;
chunk__27384_27389 = G__27406;
count__27385_27390 = G__27407;
i__27386_27391 = G__27408;
continue;
}
} else {
}
}
break;
}
}catch (e27382){if((e27382 instanceof Error)){
var e_27409 = e27382;
domina.replace_children_BANG_(content,value_27387);
} else {
throw e27382;

}
}} else {
domina.replace_children_BANG_(content,html_string);
}

return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_(content,inner_content);
} else {
return domina.replace_children_BANG_(content,inner_content);
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
return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node(node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);
if(cljs.core.truth_((function (){var and__3803__auto__ = bubble;
if(cljs.core.truth_(and__3803__auto__)){
return (value == null);
} else {
return and__3803__auto__;
}
})())){
var temp__4126__auto__ = domina.single_node(node).parentNode;
if(cljs.core.truth_(temp__4126__auto__)){
var parent = temp__4126__auto__;
return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
var m = (function (){var or__3815__auto__ = domina.single_node(node).__domina_data;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes(parent_content);
var children = domina.nodes(child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__27426_27434 = cljs.core.seq(children);
var chunk__27427_27435 = null;
var count__27428_27436 = (0);
var i__27429_27437 = (0);
while(true){
if((i__27429_27437 < count__27428_27436)){
var child_27438 = chunk__27427_27435.cljs$core$IIndexed$_nth$arity$2(null,i__27429_27437);
frag.appendChild(child_27438);

var G__27439 = seq__27426_27434;
var G__27440 = chunk__27427_27435;
var G__27441 = count__27428_27436;
var G__27442 = (i__27429_27437 + (1));
seq__27426_27434 = G__27439;
chunk__27427_27435 = G__27440;
count__27428_27436 = G__27441;
i__27429_27437 = G__27442;
continue;
} else {
var temp__4126__auto___27443 = cljs.core.seq(seq__27426_27434);
if(temp__4126__auto___27443){
var seq__27426_27444__$1 = temp__4126__auto___27443;
if(cljs.core.chunked_seq_QMARK_(seq__27426_27444__$1)){
var c__4602__auto___27445 = cljs.core.chunk_first(seq__27426_27444__$1);
var G__27446 = cljs.core.chunk_rest(seq__27426_27444__$1);
var G__27447 = c__4602__auto___27445;
var G__27448 = cljs.core.count(c__4602__auto___27445);
var G__27449 = (0);
seq__27426_27434 = G__27446;
chunk__27427_27435 = G__27447;
count__27428_27436 = G__27448;
i__27429_27437 = G__27449;
continue;
} else {
var child_27450 = cljs.core.first(seq__27426_27444__$1);
frag.appendChild(child_27450);

var G__27451 = cljs.core.next(seq__27426_27444__$1);
var G__27452 = null;
var G__27453 = (0);
var G__27454 = (0);
seq__27426_27434 = G__27451;
chunk__27427_27435 = G__27452;
count__27428_27436 = G__27453;
i__27429_27437 = G__27454;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq(parents)){
var G__27430_27455 = cljs.core.first(parents);
var G__27431_27456 = first_child;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27430_27455,G__27431_27456) : f.call(null,G__27430_27455,G__27431_27456));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__27416_SHARP_,p2__27417_SHARP_){
var G__27432 = p1__27416_SHARP_;
var G__27433 = p2__27417_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27432,G__27433) : f.call(null,G__27432,G__27433));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else {
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3803__auto__ = obj;
if(cljs.core.truth_(and__3803__auto__)){
var and__3803__auto____$1 = cljs.core.not(obj.nodeName);
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
if((function (){var G__27466 = list_thing;
if(G__27466){
var bit__4496__auto__ = (G__27466.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4496__auto__) || (G__27466.cljs$core$ISeqable$)){
return true;
} else {
if((!G__27466.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27466);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27466);
}
})()){
return cljs.core.seq(list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_(list_thing))){
return domina.lazy_nodelist(list_thing);
} else {
return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__27467 = content;
if(G__27467){
var bit__4496__auto__ = (G__27467.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4496__auto__) || (G__27467.cljs$core$ISeqable$)){
return true;
} else {
if((!G__27467.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27467);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27467);
}
})()){
return cljs.core.seq(content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_(content))){
return domina.lazy_nodelist(content);
} else {
return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((function (){var G__27468 = content;
if(G__27468){
var bit__4496__auto__ = (G__27468.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4496__auto__) || (G__27468.cljs$core$ISeqable$)){
return true;
} else {
if((!G__27468.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27468);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27468);
}
})()){
return cljs.core.first(content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_(content))){
return content.item((0));
} else {
return content;

}
}
}
}));

(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist(nodelist__$1);
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
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
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
return domina.lazy_nodelist(nodelist__$1);
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
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
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
return domina.lazy_nodelist(coll__$1);
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
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});
} else {
}
