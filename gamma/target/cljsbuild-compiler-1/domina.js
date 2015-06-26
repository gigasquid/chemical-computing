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
var opt_wrapper_26686 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_26687 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_26688 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$7,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_26688,opt_wrapper_26686,table_section_wrapper_26687,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_26686,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_26687,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_26687,cell_wrapper_26688,table_section_wrapper_26687,table_section_wrapper_26687]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3852__auto__ = div.firstChild;
if(cljs.core.truth_(and__3852__auto__)){
return div.firstChild.childNodes;
} else {
return and__3852__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__26693 = cljs.core.seq(tbody);
var chunk__26694 = null;
var count__26695 = (0);
var i__26696 = (0);
while(true){
if((i__26696 < count__26695)){
var child = chunk__26694.cljs$core$IIndexed$_nth$arity$2(null,i__26696);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__26697 = seq__26693;
var G__26698 = chunk__26694;
var G__26699 = count__26695;
var G__26700 = (i__26696 + (1));
seq__26693 = G__26697;
chunk__26694 = G__26698;
count__26695 = G__26699;
i__26696 = G__26700;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26693);
if(temp__4126__auto__){
var seq__26693__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26693__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__26693__$1);
var G__26701 = cljs.core.chunk_rest(seq__26693__$1);
var G__26702 = c__4651__auto__;
var G__26703 = cljs.core.count(c__4651__auto__);
var G__26704 = (0);
seq__26693 = G__26701;
chunk__26694 = G__26702;
count__26695 = G__26703;
i__26696 = G__26704;
continue;
} else {
var child = cljs.core.first(seq__26693__$1);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__26705 = cljs.core.next(seq__26693__$1);
var G__26706 = null;
var G__26707 = (0);
var G__26708 = (0);
seq__26693 = G__26705;
chunk__26694 = G__26706;
count__26695 = G__26707;
i__26696 = G__26708;
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
var vec__26710 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26710,(0),null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26710,(1),null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26710,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__26711 = wrapper.lastChild;
var G__26712 = (level - (1));
wrapper = G__26711;
level = G__26712;
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

if(cljs.core.truth_((function (){var and__3852__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);
if(and__3852__auto__){
return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else {
return and__3852__auto__;
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

domina.DomContent = (function (){var obj26714 = {};
return obj26714;
})();

domina.nodes = (function nodes(content){
if((function (){var and__3852__auto__ = content;
if(and__3852__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__3852__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4508__auto__ = (((content == null))?null:content);
return (function (){var or__3864__auto__ = (domina.nodes[(function (){var G__26718 = x__4508__auto__;
return goog.typeOf(G__26718);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (domina.nodes["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});

domina.single_node = (function single_node(nodeseq){
if((function (){var and__3852__auto__ = nodeseq;
if(and__3852__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__3852__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4508__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3864__auto__ = (domina.single_node[(function (){var G__26722 = x__4508__auto__;
return goog.typeOf(G__26722);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (domina.single_node["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
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
if(cljs.core.truth_((function (){var and__3852__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3852__auto__)){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else {
return and__3852__auto__;
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
var G__26723__i = 0, G__26723__a = new Array(arguments.length -  0);
while (G__26723__i < G__26723__a.length) {G__26723__a[G__26723__i] = arguments[G__26723__i + 0]; ++G__26723__i;}
  mesg = new cljs.core.IndexedSeq(G__26723__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__26724){
var mesg = cljs.core.seq(arglist__26724);
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
var G__26725__i = 0, G__26725__a = new Array(arguments.length -  0);
while (G__26725__i < G__26725__a.length) {G__26725__a[G__26725__i] = arguments[G__26725__i + 0]; ++G__26725__i;}
  mesg = new cljs.core.IndexedSeq(G__26725__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__26726){
var mesg = cljs.core.seq(arglist__26726);
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
var G__26728 = cljs.core.name(id);
return goog.dom.getElement(G__26728);
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
var G__26731 = (function (){var G__26732 = cljs.core.name(class_name);
return goog.dom.getElementsByClass(G__26732);
})();
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(G__26731) : domina.normalize_seq.call(null,G__26731));
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
var G__26733__i = 0, G__26733__a = new Array(arguments.length -  0);
while (G__26733__i < G__26733__a.length) {G__26733__a[G__26733__i] = arguments[G__26733__i + 0]; ++G__26733__i;}
  contents = new cljs.core.IndexedSeq(G__26733__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__26734){
var contents = cljs.core.seq(arglist__26734);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26735_SHARP_){
return p1__26735_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
var G__26739_26742 = goog.dom.appendChild;
var G__26740_26743 = parent_content;
var G__26741_26744 = child_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26739_26742,G__26740_26743,G__26741_26744) : domina.apply_with_cloning.call(null,G__26739_26742,G__26740_26743,G__26741_26744));

return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
var G__26753_26759 = (function (p1__26745_SHARP_,p2__26746_SHARP_){
var G__26756 = p1__26745_SHARP_;
var G__26757 = p2__26746_SHARP_;
var G__26758 = idx;
return goog.dom.insertChildAt(G__26756,G__26757,G__26758);
});
var G__26754_26760 = parent_content;
var G__26755_26761 = child_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26753_26759,G__26754_26760,G__26755_26761) : domina.apply_with_cloning.call(null,G__26753_26759,G__26754_26760,G__26755_26761));

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
var G__26769_26774 = (function (p1__26763_SHARP_,p2__26762_SHARP_){
var G__26772 = p2__26762_SHARP_;
var G__26773 = p1__26763_SHARP_;
return goog.dom.insertSiblingBefore(G__26772,G__26773);
});
var G__26770_26775 = content;
var G__26771_26776 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26769_26774,G__26770_26775,G__26771_26776) : domina.apply_with_cloning.call(null,G__26769_26774,G__26770_26775,G__26771_26776));

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
var G__26784_26789 = (function (p1__26778_SHARP_,p2__26777_SHARP_){
var G__26787 = p2__26777_SHARP_;
var G__26788 = p1__26778_SHARP_;
return goog.dom.insertSiblingAfter(G__26787,G__26788);
});
var G__26785_26790 = content;
var G__26786_26791 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26784_26789,G__26785_26790,G__26786_26791) : domina.apply_with_cloning.call(null,G__26784_26789,G__26785_26790,G__26786_26791));

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
var G__26799_26804 = (function (p1__26793_SHARP_,p2__26792_SHARP_){
var G__26802 = p2__26792_SHARP_;
var G__26803 = p1__26793_SHARP_;
return goog.dom.replaceNode(G__26802,G__26803);
});
var G__26800_26805 = old_content;
var G__26801_26806 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__26799_26804,G__26800_26805,G__26801_26806) : domina.apply_with_cloning.call(null,G__26799_26804,G__26800_26805,G__26801_26806));

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
var s = (function (){var G__26809 = domina.single_node(content);
var G__26810 = cljs.core.name(name);
return goog.style.getStyle(G__26809,G__26810);
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
var seq__26821_26831 = cljs.core.seq(domina.nodes(content));
var chunk__26822_26832 = null;
var count__26823_26833 = (0);
var i__26824_26834 = (0);
while(true){
if((i__26824_26834 < count__26823_26833)){
var n_26835 = chunk__26822_26832.cljs$core$IIndexed$_nth$arity$2(null,i__26824_26834);
var G__26825_26836 = n_26835;
var G__26826_26837 = cljs.core.name(name);
var G__26827_26838 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__26825_26836,G__26826_26837,G__26827_26838);

var G__26839 = seq__26821_26831;
var G__26840 = chunk__26822_26832;
var G__26841 = count__26823_26833;
var G__26842 = (i__26824_26834 + (1));
seq__26821_26831 = G__26839;
chunk__26822_26832 = G__26840;
count__26823_26833 = G__26841;
i__26824_26834 = G__26842;
continue;
} else {
var temp__4126__auto___26843 = cljs.core.seq(seq__26821_26831);
if(temp__4126__auto___26843){
var seq__26821_26844__$1 = temp__4126__auto___26843;
if(cljs.core.chunked_seq_QMARK_(seq__26821_26844__$1)){
var c__4651__auto___26845 = cljs.core.chunk_first(seq__26821_26844__$1);
var G__26846 = cljs.core.chunk_rest(seq__26821_26844__$1);
var G__26847 = c__4651__auto___26845;
var G__26848 = cljs.core.count(c__4651__auto___26845);
var G__26849 = (0);
seq__26821_26831 = G__26846;
chunk__26822_26832 = G__26847;
count__26823_26833 = G__26848;
i__26824_26834 = G__26849;
continue;
} else {
var n_26850 = cljs.core.first(seq__26821_26844__$1);
var G__26828_26851 = n_26850;
var G__26829_26852 = cljs.core.name(name);
var G__26830_26853 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__26828_26851,G__26829_26852,G__26830_26853);

var G__26854 = cljs.core.next(seq__26821_26844__$1);
var G__26855 = null;
var G__26856 = (0);
var G__26857 = (0);
seq__26821_26831 = G__26854;
chunk__26822_26832 = G__26855;
count__26823_26833 = G__26856;
i__26824_26834 = G__26857;
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
var G__26858__i = 0, G__26858__a = new Array(arguments.length -  2);
while (G__26858__i < G__26858__a.length) {G__26858__a[G__26858__i] = arguments[G__26858__i + 2]; ++G__26858__i;}
  value = new cljs.core.IndexedSeq(G__26858__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26859){
var content = cljs.core.first(arglist__26859);
arglist__26859 = cljs.core.next(arglist__26859);
var name = cljs.core.first(arglist__26859);
var value = cljs.core.rest(arglist__26859);
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
var seq__26864_26868 = cljs.core.seq(domina.nodes(content));
var chunk__26865_26869 = null;
var count__26866_26870 = (0);
var i__26867_26871 = (0);
while(true){
if((i__26867_26871 < count__26866_26870)){
var n_26872 = chunk__26865_26869.cljs$core$IIndexed$_nth$arity$2(null,i__26867_26871);
n_26872.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__26873 = seq__26864_26868;
var G__26874 = chunk__26865_26869;
var G__26875 = count__26866_26870;
var G__26876 = (i__26867_26871 + (1));
seq__26864_26868 = G__26873;
chunk__26865_26869 = G__26874;
count__26866_26870 = G__26875;
i__26867_26871 = G__26876;
continue;
} else {
var temp__4126__auto___26877 = cljs.core.seq(seq__26864_26868);
if(temp__4126__auto___26877){
var seq__26864_26878__$1 = temp__4126__auto___26877;
if(cljs.core.chunked_seq_QMARK_(seq__26864_26878__$1)){
var c__4651__auto___26879 = cljs.core.chunk_first(seq__26864_26878__$1);
var G__26880 = cljs.core.chunk_rest(seq__26864_26878__$1);
var G__26881 = c__4651__auto___26879;
var G__26882 = cljs.core.count(c__4651__auto___26879);
var G__26883 = (0);
seq__26864_26868 = G__26880;
chunk__26865_26869 = G__26881;
count__26866_26870 = G__26882;
i__26867_26871 = G__26883;
continue;
} else {
var n_26884 = cljs.core.first(seq__26864_26878__$1);
n_26884.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__26885 = cljs.core.next(seq__26864_26878__$1);
var G__26886 = null;
var G__26887 = (0);
var G__26888 = (0);
seq__26864_26868 = G__26885;
chunk__26865_26869 = G__26886;
count__26866_26870 = G__26887;
i__26867_26871 = G__26888;
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
var G__26889__i = 0, G__26889__a = new Array(arguments.length -  2);
while (G__26889__i < G__26889__a.length) {G__26889__a[G__26889__i] = arguments[G__26889__i + 2]; ++G__26889__i;}
  value = new cljs.core.IndexedSeq(G__26889__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26890){
var content = cljs.core.first(arglist__26890);
arglist__26890 = cljs.core.next(arglist__26890);
var name = cljs.core.first(arglist__26890);
var value = cljs.core.rest(arglist__26890);
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
var seq__26895_26899 = cljs.core.seq(domina.nodes(content));
var chunk__26896_26900 = null;
var count__26897_26901 = (0);
var i__26898_26902 = (0);
while(true){
if((i__26898_26902 < count__26897_26901)){
var n_26903 = chunk__26896_26900.cljs$core$IIndexed$_nth$arity$2(null,i__26898_26902);
n_26903.removeAttribute(cljs.core.name(name));

var G__26904 = seq__26895_26899;
var G__26905 = chunk__26896_26900;
var G__26906 = count__26897_26901;
var G__26907 = (i__26898_26902 + (1));
seq__26895_26899 = G__26904;
chunk__26896_26900 = G__26905;
count__26897_26901 = G__26906;
i__26898_26902 = G__26907;
continue;
} else {
var temp__4126__auto___26908 = cljs.core.seq(seq__26895_26899);
if(temp__4126__auto___26908){
var seq__26895_26909__$1 = temp__4126__auto___26908;
if(cljs.core.chunked_seq_QMARK_(seq__26895_26909__$1)){
var c__4651__auto___26910 = cljs.core.chunk_first(seq__26895_26909__$1);
var G__26911 = cljs.core.chunk_rest(seq__26895_26909__$1);
var G__26912 = c__4651__auto___26910;
var G__26913 = cljs.core.count(c__4651__auto___26910);
var G__26914 = (0);
seq__26895_26899 = G__26911;
chunk__26896_26900 = G__26912;
count__26897_26901 = G__26913;
i__26898_26902 = G__26914;
continue;
} else {
var n_26915 = cljs.core.first(seq__26895_26909__$1);
n_26915.removeAttribute(cljs.core.name(name));

var G__26916 = cljs.core.next(seq__26895_26909__$1);
var G__26917 = null;
var G__26918 = (0);
var G__26919 = (0);
seq__26895_26899 = G__26916;
chunk__26896_26900 = G__26917;
count__26897_26901 = G__26918;
i__26898_26902 = G__26919;
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
var vec__26921 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26921,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26921,(1),null);
if(cljs.core.truth_((function (){var and__3852__auto__ = k;
if(cljs.core.truth_(and__3852__auto__)){
return v;
} else {
return and__3852__auto__;
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
return (function (p1__26922_SHARP_){
var attr = attrs__$1.item(p1__26922_SHARP_);
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
var seq__26929_26935 = cljs.core.seq(styles);
var chunk__26930_26936 = null;
var count__26931_26937 = (0);
var i__26932_26938 = (0);
while(true){
if((i__26932_26938 < count__26931_26937)){
var vec__26933_26939 = chunk__26930_26936.cljs$core$IIndexed$_nth$arity$2(null,i__26932_26938);
var name_26940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26933_26939,(0),null);
var value_26941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26933_26939,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26940,cljs.core.array_seq([value_26941], 0));

var G__26942 = seq__26929_26935;
var G__26943 = chunk__26930_26936;
var G__26944 = count__26931_26937;
var G__26945 = (i__26932_26938 + (1));
seq__26929_26935 = G__26942;
chunk__26930_26936 = G__26943;
count__26931_26937 = G__26944;
i__26932_26938 = G__26945;
continue;
} else {
var temp__4126__auto___26946 = cljs.core.seq(seq__26929_26935);
if(temp__4126__auto___26946){
var seq__26929_26947__$1 = temp__4126__auto___26946;
if(cljs.core.chunked_seq_QMARK_(seq__26929_26947__$1)){
var c__4651__auto___26948 = cljs.core.chunk_first(seq__26929_26947__$1);
var G__26949 = cljs.core.chunk_rest(seq__26929_26947__$1);
var G__26950 = c__4651__auto___26948;
var G__26951 = cljs.core.count(c__4651__auto___26948);
var G__26952 = (0);
seq__26929_26935 = G__26949;
chunk__26930_26936 = G__26950;
count__26931_26937 = G__26951;
i__26932_26938 = G__26952;
continue;
} else {
var vec__26934_26953 = cljs.core.first(seq__26929_26947__$1);
var name_26954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26934_26953,(0),null);
var value_26955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26934_26953,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26954,cljs.core.array_seq([value_26955], 0));

var G__26956 = cljs.core.next(seq__26929_26947__$1);
var G__26957 = null;
var G__26958 = (0);
var G__26959 = (0);
seq__26929_26935 = G__26956;
chunk__26930_26936 = G__26957;
count__26931_26937 = G__26958;
i__26932_26938 = G__26959;
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
var seq__26966_26972 = cljs.core.seq(attrs);
var chunk__26967_26973 = null;
var count__26968_26974 = (0);
var i__26969_26975 = (0);
while(true){
if((i__26969_26975 < count__26968_26974)){
var vec__26970_26976 = chunk__26967_26973.cljs$core$IIndexed$_nth$arity$2(null,i__26969_26975);
var name_26977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26970_26976,(0),null);
var value_26978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26970_26976,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26977,cljs.core.array_seq([value_26978], 0));

var G__26979 = seq__26966_26972;
var G__26980 = chunk__26967_26973;
var G__26981 = count__26968_26974;
var G__26982 = (i__26969_26975 + (1));
seq__26966_26972 = G__26979;
chunk__26967_26973 = G__26980;
count__26968_26974 = G__26981;
i__26969_26975 = G__26982;
continue;
} else {
var temp__4126__auto___26983 = cljs.core.seq(seq__26966_26972);
if(temp__4126__auto___26983){
var seq__26966_26984__$1 = temp__4126__auto___26983;
if(cljs.core.chunked_seq_QMARK_(seq__26966_26984__$1)){
var c__4651__auto___26985 = cljs.core.chunk_first(seq__26966_26984__$1);
var G__26986 = cljs.core.chunk_rest(seq__26966_26984__$1);
var G__26987 = c__4651__auto___26985;
var G__26988 = cljs.core.count(c__4651__auto___26985);
var G__26989 = (0);
seq__26966_26972 = G__26986;
chunk__26967_26973 = G__26987;
count__26968_26974 = G__26988;
i__26969_26975 = G__26989;
continue;
} else {
var vec__26971_26990 = cljs.core.first(seq__26966_26984__$1);
var name_26991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26971_26990,(0),null);
var value_26992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26971_26990,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26991,cljs.core.array_seq([value_26992], 0));

var G__26993 = cljs.core.next(seq__26966_26984__$1);
var G__26994 = null;
var G__26995 = (0);
var G__26996 = (0);
seq__26966_26972 = G__26993;
chunk__26967_26973 = G__26994;
count__26968_26974 = G__26995;
i__26969_26975 = G__26996;
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
var G__26999 = domina.single_node(content);
var G__27000 = class$;
return goog.dom.classes.has(G__26999,G__27000);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__27009_27017 = cljs.core.seq(domina.nodes(content));
var chunk__27010_27018 = null;
var count__27011_27019 = (0);
var i__27012_27020 = (0);
while(true){
if((i__27012_27020 < count__27011_27019)){
var node_27021 = chunk__27010_27018.cljs$core$IIndexed$_nth$arity$2(null,i__27012_27020);
var G__27013_27022 = node_27021;
var G__27014_27023 = class$;
goog.dom.classes.add(G__27013_27022,G__27014_27023);

var G__27024 = seq__27009_27017;
var G__27025 = chunk__27010_27018;
var G__27026 = count__27011_27019;
var G__27027 = (i__27012_27020 + (1));
seq__27009_27017 = G__27024;
chunk__27010_27018 = G__27025;
count__27011_27019 = G__27026;
i__27012_27020 = G__27027;
continue;
} else {
var temp__4126__auto___27028 = cljs.core.seq(seq__27009_27017);
if(temp__4126__auto___27028){
var seq__27009_27029__$1 = temp__4126__auto___27028;
if(cljs.core.chunked_seq_QMARK_(seq__27009_27029__$1)){
var c__4651__auto___27030 = cljs.core.chunk_first(seq__27009_27029__$1);
var G__27031 = cljs.core.chunk_rest(seq__27009_27029__$1);
var G__27032 = c__4651__auto___27030;
var G__27033 = cljs.core.count(c__4651__auto___27030);
var G__27034 = (0);
seq__27009_27017 = G__27031;
chunk__27010_27018 = G__27032;
count__27011_27019 = G__27033;
i__27012_27020 = G__27034;
continue;
} else {
var node_27035 = cljs.core.first(seq__27009_27029__$1);
var G__27015_27036 = node_27035;
var G__27016_27037 = class$;
goog.dom.classes.add(G__27015_27036,G__27016_27037);

var G__27038 = cljs.core.next(seq__27009_27029__$1);
var G__27039 = null;
var G__27040 = (0);
var G__27041 = (0);
seq__27009_27017 = G__27038;
chunk__27010_27018 = G__27039;
count__27011_27019 = G__27040;
i__27012_27020 = G__27041;
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
var seq__27050_27058 = cljs.core.seq(domina.nodes(content));
var chunk__27051_27059 = null;
var count__27052_27060 = (0);
var i__27053_27061 = (0);
while(true){
if((i__27053_27061 < count__27052_27060)){
var node_27062 = chunk__27051_27059.cljs$core$IIndexed$_nth$arity$2(null,i__27053_27061);
var G__27054_27063 = node_27062;
var G__27055_27064 = class$;
goog.dom.classes.remove(G__27054_27063,G__27055_27064);

var G__27065 = seq__27050_27058;
var G__27066 = chunk__27051_27059;
var G__27067 = count__27052_27060;
var G__27068 = (i__27053_27061 + (1));
seq__27050_27058 = G__27065;
chunk__27051_27059 = G__27066;
count__27052_27060 = G__27067;
i__27053_27061 = G__27068;
continue;
} else {
var temp__4126__auto___27069 = cljs.core.seq(seq__27050_27058);
if(temp__4126__auto___27069){
var seq__27050_27070__$1 = temp__4126__auto___27069;
if(cljs.core.chunked_seq_QMARK_(seq__27050_27070__$1)){
var c__4651__auto___27071 = cljs.core.chunk_first(seq__27050_27070__$1);
var G__27072 = cljs.core.chunk_rest(seq__27050_27070__$1);
var G__27073 = c__4651__auto___27071;
var G__27074 = cljs.core.count(c__4651__auto___27071);
var G__27075 = (0);
seq__27050_27058 = G__27072;
chunk__27051_27059 = G__27073;
count__27052_27060 = G__27074;
i__27053_27061 = G__27075;
continue;
} else {
var node_27076 = cljs.core.first(seq__27050_27070__$1);
var G__27056_27077 = node_27076;
var G__27057_27078 = class$;
goog.dom.classes.remove(G__27056_27077,G__27057_27078);

var G__27079 = cljs.core.next(seq__27050_27070__$1);
var G__27080 = null;
var G__27081 = (0);
var G__27082 = (0);
seq__27050_27058 = G__27079;
chunk__27051_27059 = G__27080;
count__27052_27060 = G__27081;
i__27053_27061 = G__27082;
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
var seq__27091_27099 = cljs.core.seq(domina.nodes(content));
var chunk__27092_27100 = null;
var count__27093_27101 = (0);
var i__27094_27102 = (0);
while(true){
if((i__27094_27102 < count__27093_27101)){
var node_27103 = chunk__27092_27100.cljs$core$IIndexed$_nth$arity$2(null,i__27094_27102);
var G__27095_27104 = node_27103;
var G__27096_27105 = class$;
goog.dom.classes.toggle(G__27095_27104,G__27096_27105);

var G__27106 = seq__27091_27099;
var G__27107 = chunk__27092_27100;
var G__27108 = count__27093_27101;
var G__27109 = (i__27094_27102 + (1));
seq__27091_27099 = G__27106;
chunk__27092_27100 = G__27107;
count__27093_27101 = G__27108;
i__27094_27102 = G__27109;
continue;
} else {
var temp__4126__auto___27110 = cljs.core.seq(seq__27091_27099);
if(temp__4126__auto___27110){
var seq__27091_27111__$1 = temp__4126__auto___27110;
if(cljs.core.chunked_seq_QMARK_(seq__27091_27111__$1)){
var c__4651__auto___27112 = cljs.core.chunk_first(seq__27091_27111__$1);
var G__27113 = cljs.core.chunk_rest(seq__27091_27111__$1);
var G__27114 = c__4651__auto___27112;
var G__27115 = cljs.core.count(c__4651__auto___27112);
var G__27116 = (0);
seq__27091_27099 = G__27113;
chunk__27092_27100 = G__27114;
count__27093_27101 = G__27115;
i__27094_27102 = G__27116;
continue;
} else {
var node_27117 = cljs.core.first(seq__27091_27111__$1);
var G__27097_27118 = node_27117;
var G__27098_27119 = class$;
goog.dom.classes.toggle(G__27097_27118,G__27098_27119);

var G__27120 = cljs.core.next(seq__27091_27111__$1);
var G__27121 = null;
var G__27122 = (0);
var G__27123 = (0);
seq__27091_27099 = G__27120;
chunk__27092_27100 = G__27121;
count__27093_27101 = G__27122;
i__27094_27102 = G__27123;
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
return cljs.core.seq((function (){var G__27125 = domina.single_node(content);
return goog.dom.classes.get(G__27125);
})());
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_27142__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__27134_27143 = cljs.core.seq(domina.nodes(content));
var chunk__27135_27144 = null;
var count__27136_27145 = (0);
var i__27137_27146 = (0);
while(true){
if((i__27137_27146 < count__27136_27145)){
var node_27147 = chunk__27135_27144.cljs$core$IIndexed$_nth$arity$2(null,i__27137_27146);
var G__27138_27148 = node_27147;
var G__27139_27149 = classes_27142__$1;
goog.dom.classes.set(G__27138_27148,G__27139_27149);

var G__27150 = seq__27134_27143;
var G__27151 = chunk__27135_27144;
var G__27152 = count__27136_27145;
var G__27153 = (i__27137_27146 + (1));
seq__27134_27143 = G__27150;
chunk__27135_27144 = G__27151;
count__27136_27145 = G__27152;
i__27137_27146 = G__27153;
continue;
} else {
var temp__4126__auto___27154 = cljs.core.seq(seq__27134_27143);
if(temp__4126__auto___27154){
var seq__27134_27155__$1 = temp__4126__auto___27154;
if(cljs.core.chunked_seq_QMARK_(seq__27134_27155__$1)){
var c__4651__auto___27156 = cljs.core.chunk_first(seq__27134_27155__$1);
var G__27157 = cljs.core.chunk_rest(seq__27134_27155__$1);
var G__27158 = c__4651__auto___27156;
var G__27159 = cljs.core.count(c__4651__auto___27156);
var G__27160 = (0);
seq__27134_27143 = G__27157;
chunk__27135_27144 = G__27158;
count__27136_27145 = G__27159;
i__27137_27146 = G__27160;
continue;
} else {
var node_27161 = cljs.core.first(seq__27134_27155__$1);
var G__27140_27162 = node_27161;
var G__27141_27163 = classes_27142__$1;
goog.dom.classes.set(G__27140_27162,G__27141_27163);

var G__27164 = cljs.core.next(seq__27134_27155__$1);
var G__27165 = null;
var G__27166 = (0);
var G__27167 = (0);
seq__27134_27143 = G__27164;
chunk__27135_27144 = G__27165;
count__27136_27145 = G__27166;
i__27137_27146 = G__27167;
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
var G__27170 = (function (){var G__27171 = domina.single_node(content);
return goog.dom.getTextContent(G__27171);
})();
return goog.string.trim(G__27170);
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__27180_27188 = cljs.core.seq(domina.nodes(content));
var chunk__27181_27189 = null;
var count__27182_27190 = (0);
var i__27183_27191 = (0);
while(true){
if((i__27183_27191 < count__27182_27190)){
var node_27192 = chunk__27181_27189.cljs$core$IIndexed$_nth$arity$2(null,i__27183_27191);
var G__27184_27193 = node_27192;
var G__27185_27194 = value;
goog.dom.setTextContent(G__27184_27193,G__27185_27194);

var G__27195 = seq__27180_27188;
var G__27196 = chunk__27181_27189;
var G__27197 = count__27182_27190;
var G__27198 = (i__27183_27191 + (1));
seq__27180_27188 = G__27195;
chunk__27181_27189 = G__27196;
count__27182_27190 = G__27197;
i__27183_27191 = G__27198;
continue;
} else {
var temp__4126__auto___27199 = cljs.core.seq(seq__27180_27188);
if(temp__4126__auto___27199){
var seq__27180_27200__$1 = temp__4126__auto___27199;
if(cljs.core.chunked_seq_QMARK_(seq__27180_27200__$1)){
var c__4651__auto___27201 = cljs.core.chunk_first(seq__27180_27200__$1);
var G__27202 = cljs.core.chunk_rest(seq__27180_27200__$1);
var G__27203 = c__4651__auto___27201;
var G__27204 = cljs.core.count(c__4651__auto___27201);
var G__27205 = (0);
seq__27180_27188 = G__27202;
chunk__27181_27189 = G__27203;
count__27182_27190 = G__27204;
i__27183_27191 = G__27205;
continue;
} else {
var node_27206 = cljs.core.first(seq__27180_27200__$1);
var G__27186_27207 = node_27206;
var G__27187_27208 = value;
goog.dom.setTextContent(G__27186_27207,G__27187_27208);

var G__27209 = cljs.core.next(seq__27180_27200__$1);
var G__27210 = null;
var G__27211 = (0);
var G__27212 = (0);
seq__27180_27188 = G__27209;
chunk__27181_27189 = G__27210;
count__27182_27190 = G__27211;
i__27183_27191 = G__27212;
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
var G__27214 = domina.single_node(content);
return goog.dom.forms.getValue(G__27214);
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__27223_27231 = cljs.core.seq(domina.nodes(content));
var chunk__27224_27232 = null;
var count__27225_27233 = (0);
var i__27226_27234 = (0);
while(true){
if((i__27226_27234 < count__27225_27233)){
var node_27235 = chunk__27224_27232.cljs$core$IIndexed$_nth$arity$2(null,i__27226_27234);
var G__27227_27236 = node_27235;
var G__27228_27237 = value;
goog.dom.forms.setValue(G__27227_27236,G__27228_27237);

var G__27238 = seq__27223_27231;
var G__27239 = chunk__27224_27232;
var G__27240 = count__27225_27233;
var G__27241 = (i__27226_27234 + (1));
seq__27223_27231 = G__27238;
chunk__27224_27232 = G__27239;
count__27225_27233 = G__27240;
i__27226_27234 = G__27241;
continue;
} else {
var temp__4126__auto___27242 = cljs.core.seq(seq__27223_27231);
if(temp__4126__auto___27242){
var seq__27223_27243__$1 = temp__4126__auto___27242;
if(cljs.core.chunked_seq_QMARK_(seq__27223_27243__$1)){
var c__4651__auto___27244 = cljs.core.chunk_first(seq__27223_27243__$1);
var G__27245 = cljs.core.chunk_rest(seq__27223_27243__$1);
var G__27246 = c__4651__auto___27244;
var G__27247 = cljs.core.count(c__4651__auto___27244);
var G__27248 = (0);
seq__27223_27231 = G__27245;
chunk__27224_27232 = G__27246;
count__27225_27233 = G__27247;
i__27226_27234 = G__27248;
continue;
} else {
var node_27249 = cljs.core.first(seq__27223_27243__$1);
var G__27229_27250 = node_27249;
var G__27230_27251 = value;
goog.dom.forms.setValue(G__27229_27250,G__27230_27251);

var G__27252 = cljs.core.next(seq__27223_27243__$1);
var G__27253 = null;
var G__27254 = (0);
var G__27255 = (0);
seq__27223_27231 = G__27252;
chunk__27224_27232 = G__27253;
count__27225_27233 = G__27254;
i__27226_27234 = G__27255;
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
if(cljs.core.truth_((function (){var and__3852__auto__ = allows_inner_html_QMARK_;
if(and__3852__auto__){
var and__3852__auto____$1 = (function (){var or__3864__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return cljs.core.not(leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3852__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__3852__auto____$1;
}
} else {
return and__3852__auto__;
}
})())){
var value_27266 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__27262_27267 = cljs.core.seq(domina.nodes(content));
var chunk__27263_27268 = null;
var count__27264_27269 = (0);
var i__27265_27270 = (0);
while(true){
if((i__27265_27270 < count__27264_27269)){
var node_27271 = chunk__27263_27268.cljs$core$IIndexed$_nth$arity$2(null,i__27265_27270);
node_27271.innerHTML = value_27266;

var G__27272 = seq__27262_27267;
var G__27273 = chunk__27263_27268;
var G__27274 = count__27264_27269;
var G__27275 = (i__27265_27270 + (1));
seq__27262_27267 = G__27272;
chunk__27263_27268 = G__27273;
count__27264_27269 = G__27274;
i__27265_27270 = G__27275;
continue;
} else {
var temp__4126__auto___27276 = cljs.core.seq(seq__27262_27267);
if(temp__4126__auto___27276){
var seq__27262_27277__$1 = temp__4126__auto___27276;
if(cljs.core.chunked_seq_QMARK_(seq__27262_27277__$1)){
var c__4651__auto___27278 = cljs.core.chunk_first(seq__27262_27277__$1);
var G__27279 = cljs.core.chunk_rest(seq__27262_27277__$1);
var G__27280 = c__4651__auto___27278;
var G__27281 = cljs.core.count(c__4651__auto___27278);
var G__27282 = (0);
seq__27262_27267 = G__27279;
chunk__27263_27268 = G__27280;
count__27264_27269 = G__27281;
i__27265_27270 = G__27282;
continue;
} else {
var node_27283 = cljs.core.first(seq__27262_27277__$1);
node_27283.innerHTML = value_27266;

var G__27284 = cljs.core.next(seq__27262_27277__$1);
var G__27285 = null;
var G__27286 = (0);
var G__27287 = (0);
seq__27262_27267 = G__27284;
chunk__27263_27268 = G__27285;
count__27264_27269 = G__27286;
i__27265_27270 = G__27287;
continue;
}
} else {
}
}
break;
}
}catch (e27261){if((e27261 instanceof Error)){
var e_27288 = e27261;
domina.replace_children_BANG_(content,value_27266);
} else {
throw e27261;

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
if(cljs.core.truth_((function (){var and__3852__auto__ = bubble;
if(cljs.core.truth_(and__3852__auto__)){
return (value == null);
} else {
return and__3852__auto__;
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
var m = (function (){var or__3864__auto__ = domina.single_node(node).__domina_data;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
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
var seq__27305_27313 = cljs.core.seq(children);
var chunk__27306_27314 = null;
var count__27307_27315 = (0);
var i__27308_27316 = (0);
while(true){
if((i__27308_27316 < count__27307_27315)){
var child_27317 = chunk__27306_27314.cljs$core$IIndexed$_nth$arity$2(null,i__27308_27316);
frag.appendChild(child_27317);

var G__27318 = seq__27305_27313;
var G__27319 = chunk__27306_27314;
var G__27320 = count__27307_27315;
var G__27321 = (i__27308_27316 + (1));
seq__27305_27313 = G__27318;
chunk__27306_27314 = G__27319;
count__27307_27315 = G__27320;
i__27308_27316 = G__27321;
continue;
} else {
var temp__4126__auto___27322 = cljs.core.seq(seq__27305_27313);
if(temp__4126__auto___27322){
var seq__27305_27323__$1 = temp__4126__auto___27322;
if(cljs.core.chunked_seq_QMARK_(seq__27305_27323__$1)){
var c__4651__auto___27324 = cljs.core.chunk_first(seq__27305_27323__$1);
var G__27325 = cljs.core.chunk_rest(seq__27305_27323__$1);
var G__27326 = c__4651__auto___27324;
var G__27327 = cljs.core.count(c__4651__auto___27324);
var G__27328 = (0);
seq__27305_27313 = G__27325;
chunk__27306_27314 = G__27326;
count__27307_27315 = G__27327;
i__27308_27316 = G__27328;
continue;
} else {
var child_27329 = cljs.core.first(seq__27305_27323__$1);
frag.appendChild(child_27329);

var G__27330 = cljs.core.next(seq__27305_27323__$1);
var G__27331 = null;
var G__27332 = (0);
var G__27333 = (0);
seq__27305_27313 = G__27330;
chunk__27306_27314 = G__27331;
count__27307_27315 = G__27332;
i__27308_27316 = G__27333;
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
var G__27309_27334 = cljs.core.first(parents);
var G__27310_27335 = first_child;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27309_27334,G__27310_27335) : f.call(null,G__27309_27334,G__27310_27335));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__27295_SHARP_,p2__27296_SHARP_){
var G__27311 = p1__27295_SHARP_;
var G__27312 = p2__27296_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27311,G__27312) : f.call(null,G__27311,G__27312));
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
var and__3852__auto__ = obj;
if(cljs.core.truth_(and__3852__auto__)){
var and__3852__auto____$1 = cljs.core.not(obj.nodeName);
if(and__3852__auto____$1){
return obj.length;
} else {
return and__3852__auto____$1;
}
} else {
return and__3852__auto__;
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
if((function (){var G__27345 = list_thing;
if(G__27345){
var bit__4545__auto__ = (G__27345.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4545__auto__) || (G__27345.cljs$core$ISeqable$)){
return true;
} else {
if((!G__27345.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27345);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27345);
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
if((function (){var G__27346 = content;
if(G__27346){
var bit__4545__auto__ = (G__27346.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4545__auto__) || (G__27346.cljs$core$ISeqable$)){
return true;
} else {
if((!G__27346.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27346);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27346);
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
if((function (){var G__27347 = content;
if(G__27347){
var bit__4545__auto__ = (G__27347.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4545__auto__) || (G__27347.cljs$core$ISeqable$)){
return true;
} else {
if((!G__27347.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27347);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27347);
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
