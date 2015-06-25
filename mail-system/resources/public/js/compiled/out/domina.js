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
var opt_wrapper_33739 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_33740 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_33741 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_33741,opt_wrapper_33739,table_section_wrapper_33740,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_33739,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_33740,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_33740,cell_wrapper_33741,table_section_wrapper_33740,table_section_wrapper_33740]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__16133__auto__ = div.firstChild;
if(cljs.core.truth_(and__16133__auto__)){
return div.firstChild.childNodes;
} else {
return and__16133__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__33746 = cljs.core.seq.call(null,tbody);
var chunk__33747 = null;
var count__33748 = (0);
var i__33749 = (0);
while(true){
if((i__33749 < count__33748)){
var child = cljs.core._nth.call(null,chunk__33747,i__33749);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__33750 = seq__33746;
var G__33751 = chunk__33747;
var G__33752 = count__33748;
var G__33753 = (i__33749 + (1));
seq__33746 = G__33750;
chunk__33747 = G__33751;
count__33748 = G__33752;
i__33749 = G__33753;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33746);
if(temp__4126__auto__){
var seq__33746__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33746__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33746__$1);
var G__33754 = cljs.core.chunk_rest.call(null,seq__33746__$1);
var G__33755 = c__16932__auto__;
var G__33756 = cljs.core.count.call(null,c__16932__auto__);
var G__33757 = (0);
seq__33746 = G__33754;
chunk__33747 = G__33755;
count__33748 = G__33756;
i__33749 = G__33757;
continue;
} else {
var child = cljs.core.first.call(null,seq__33746__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__33758 = cljs.core.next.call(null,seq__33746__$1);
var G__33759 = null;
var G__33760 = (0);
var G__33761 = (0);
seq__33746 = G__33758;
chunk__33747 = G__33759;
count__33748 = G__33760;
i__33749 = G__33761;
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
var vec__33763 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__33763,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__33763,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__33763,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__33764 = wrapper.lastChild;
var G__33765 = (level - (1));
wrapper = G__33764;
level = G__33765;
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

if(cljs.core.truth_((function (){var and__16133__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__16133__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__16133__auto__;
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

domina.DomContent = (function (){var obj33767 = {};
return obj33767;
})();

domina.nodes = (function nodes(content){
if((function (){var and__16133__auto__ = content;
if(and__16133__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__16133__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__16789__auto__ = (((content == null))?null:content);
return (function (){var or__16145__auto__ = (domina.nodes[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (domina.nodes["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});

domina.single_node = (function single_node(nodeseq){
if((function (){var and__16133__auto__ = nodeseq;
if(and__16133__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__16133__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__16789__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__16145__auto__ = (domina.single_node[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (domina.single_node["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
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
if(cljs.core.truth_((function (){var and__16133__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__16133__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__16133__auto__;
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
var G__33768__i = 0, G__33768__a = new Array(arguments.length -  0);
while (G__33768__i < G__33768__a.length) {G__33768__a[G__33768__i] = arguments[G__33768__i + 0]; ++G__33768__i;}
  mesg = new cljs.core.IndexedSeq(G__33768__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__33769){
var mesg = cljs.core.seq(arglist__33769);
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
var G__33770__i = 0, G__33770__a = new Array(arguments.length -  0);
while (G__33770__i < G__33770__a.length) {G__33770__a[G__33770__i] = arguments[G__33770__i + 0]; ++G__33770__i;}
  mesg = new cljs.core.IndexedSeq(G__33770__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__33771){
var mesg = cljs.core.seq(arglist__33771);
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
var G__33772__i = 0, G__33772__a = new Array(arguments.length -  0);
while (G__33772__i < G__33772__a.length) {G__33772__a[G__33772__i] = arguments[G__33772__i + 0]; ++G__33772__i;}
  contents = new cljs.core.IndexedSeq(G__33772__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__33773){
var contents = cljs.core.seq(arglist__33773);
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
return cljs.core.map.call(null,(function (p1__33774_SHARP_){
return p1__33774_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__33775_SHARP_,p2__33776_SHARP_){
return goog.dom.insertChildAt(p1__33775_SHARP_,p2__33776_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__33778_SHARP_,p2__33777_SHARP_){
return goog.dom.insertSiblingBefore(p2__33777_SHARP_,p1__33778_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__33780_SHARP_,p2__33779_SHARP_){
return goog.dom.insertSiblingAfter(p2__33779_SHARP_,p1__33780_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__33782_SHARP_,p2__33781_SHARP_){
return goog.dom.replaceNode(p2__33781_SHARP_,p1__33782_SHARP_);
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
var seq__33787_33791 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__33788_33792 = null;
var count__33789_33793 = (0);
var i__33790_33794 = (0);
while(true){
if((i__33790_33794 < count__33789_33793)){
var n_33795 = cljs.core._nth.call(null,chunk__33788_33792,i__33790_33794);
goog.style.setStyle(n_33795,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__33796 = seq__33787_33791;
var G__33797 = chunk__33788_33792;
var G__33798 = count__33789_33793;
var G__33799 = (i__33790_33794 + (1));
seq__33787_33791 = G__33796;
chunk__33788_33792 = G__33797;
count__33789_33793 = G__33798;
i__33790_33794 = G__33799;
continue;
} else {
var temp__4126__auto___33800 = cljs.core.seq.call(null,seq__33787_33791);
if(temp__4126__auto___33800){
var seq__33787_33801__$1 = temp__4126__auto___33800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33787_33801__$1)){
var c__16932__auto___33802 = cljs.core.chunk_first.call(null,seq__33787_33801__$1);
var G__33803 = cljs.core.chunk_rest.call(null,seq__33787_33801__$1);
var G__33804 = c__16932__auto___33802;
var G__33805 = cljs.core.count.call(null,c__16932__auto___33802);
var G__33806 = (0);
seq__33787_33791 = G__33803;
chunk__33788_33792 = G__33804;
count__33789_33793 = G__33805;
i__33790_33794 = G__33806;
continue;
} else {
var n_33807 = cljs.core.first.call(null,seq__33787_33801__$1);
goog.style.setStyle(n_33807,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__33808 = cljs.core.next.call(null,seq__33787_33801__$1);
var G__33809 = null;
var G__33810 = (0);
var G__33811 = (0);
seq__33787_33791 = G__33808;
chunk__33788_33792 = G__33809;
count__33789_33793 = G__33810;
i__33790_33794 = G__33811;
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
var G__33812__i = 0, G__33812__a = new Array(arguments.length -  2);
while (G__33812__i < G__33812__a.length) {G__33812__a[G__33812__i] = arguments[G__33812__i + 2]; ++G__33812__i;}
  value = new cljs.core.IndexedSeq(G__33812__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__33813){
var content = cljs.core.first(arglist__33813);
arglist__33813 = cljs.core.next(arglist__33813);
var name = cljs.core.first(arglist__33813);
var value = cljs.core.rest(arglist__33813);
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
var seq__33818_33822 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__33819_33823 = null;
var count__33820_33824 = (0);
var i__33821_33825 = (0);
while(true){
if((i__33821_33825 < count__33820_33824)){
var n_33826 = cljs.core._nth.call(null,chunk__33819_33823,i__33821_33825);
n_33826.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__33827 = seq__33818_33822;
var G__33828 = chunk__33819_33823;
var G__33829 = count__33820_33824;
var G__33830 = (i__33821_33825 + (1));
seq__33818_33822 = G__33827;
chunk__33819_33823 = G__33828;
count__33820_33824 = G__33829;
i__33821_33825 = G__33830;
continue;
} else {
var temp__4126__auto___33831 = cljs.core.seq.call(null,seq__33818_33822);
if(temp__4126__auto___33831){
var seq__33818_33832__$1 = temp__4126__auto___33831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33818_33832__$1)){
var c__16932__auto___33833 = cljs.core.chunk_first.call(null,seq__33818_33832__$1);
var G__33834 = cljs.core.chunk_rest.call(null,seq__33818_33832__$1);
var G__33835 = c__16932__auto___33833;
var G__33836 = cljs.core.count.call(null,c__16932__auto___33833);
var G__33837 = (0);
seq__33818_33822 = G__33834;
chunk__33819_33823 = G__33835;
count__33820_33824 = G__33836;
i__33821_33825 = G__33837;
continue;
} else {
var n_33838 = cljs.core.first.call(null,seq__33818_33832__$1);
n_33838.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__33839 = cljs.core.next.call(null,seq__33818_33832__$1);
var G__33840 = null;
var G__33841 = (0);
var G__33842 = (0);
seq__33818_33822 = G__33839;
chunk__33819_33823 = G__33840;
count__33820_33824 = G__33841;
i__33821_33825 = G__33842;
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
var G__33843__i = 0, G__33843__a = new Array(arguments.length -  2);
while (G__33843__i < G__33843__a.length) {G__33843__a[G__33843__i] = arguments[G__33843__i + 2]; ++G__33843__i;}
  value = new cljs.core.IndexedSeq(G__33843__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__33844){
var content = cljs.core.first(arglist__33844);
arglist__33844 = cljs.core.next(arglist__33844);
var name = cljs.core.first(arglist__33844);
var value = cljs.core.rest(arglist__33844);
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
var seq__33849_33853 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__33850_33854 = null;
var count__33851_33855 = (0);
var i__33852_33856 = (0);
while(true){
if((i__33852_33856 < count__33851_33855)){
var n_33857 = cljs.core._nth.call(null,chunk__33850_33854,i__33852_33856);
n_33857.removeAttribute(cljs.core.name.call(null,name));

var G__33858 = seq__33849_33853;
var G__33859 = chunk__33850_33854;
var G__33860 = count__33851_33855;
var G__33861 = (i__33852_33856 + (1));
seq__33849_33853 = G__33858;
chunk__33850_33854 = G__33859;
count__33851_33855 = G__33860;
i__33852_33856 = G__33861;
continue;
} else {
var temp__4126__auto___33862 = cljs.core.seq.call(null,seq__33849_33853);
if(temp__4126__auto___33862){
var seq__33849_33863__$1 = temp__4126__auto___33862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33849_33863__$1)){
var c__16932__auto___33864 = cljs.core.chunk_first.call(null,seq__33849_33863__$1);
var G__33865 = cljs.core.chunk_rest.call(null,seq__33849_33863__$1);
var G__33866 = c__16932__auto___33864;
var G__33867 = cljs.core.count.call(null,c__16932__auto___33864);
var G__33868 = (0);
seq__33849_33853 = G__33865;
chunk__33850_33854 = G__33866;
count__33851_33855 = G__33867;
i__33852_33856 = G__33868;
continue;
} else {
var n_33869 = cljs.core.first.call(null,seq__33849_33863__$1);
n_33869.removeAttribute(cljs.core.name.call(null,name));

var G__33870 = cljs.core.next.call(null,seq__33849_33863__$1);
var G__33871 = null;
var G__33872 = (0);
var G__33873 = (0);
seq__33849_33853 = G__33870;
chunk__33850_33854 = G__33871;
count__33851_33855 = G__33872;
i__33852_33856 = G__33873;
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
var vec__33875 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__33875,(0),null);
var v = cljs.core.nth.call(null,vec__33875,(1),null);
if(cljs.core.truth_((function (){var and__16133__auto__ = k;
if(cljs.core.truth_(and__16133__auto__)){
return v;
} else {
return and__16133__auto__;
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
return (function (p1__33876_SHARP_){
var attr = attrs__$1.item(p1__33876_SHARP_);
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
var seq__33883_33889 = cljs.core.seq.call(null,styles);
var chunk__33884_33890 = null;
var count__33885_33891 = (0);
var i__33886_33892 = (0);
while(true){
if((i__33886_33892 < count__33885_33891)){
var vec__33887_33893 = cljs.core._nth.call(null,chunk__33884_33890,i__33886_33892);
var name_33894 = cljs.core.nth.call(null,vec__33887_33893,(0),null);
var value_33895 = cljs.core.nth.call(null,vec__33887_33893,(1),null);
domina.set_style_BANG_.call(null,content,name_33894,value_33895);

var G__33896 = seq__33883_33889;
var G__33897 = chunk__33884_33890;
var G__33898 = count__33885_33891;
var G__33899 = (i__33886_33892 + (1));
seq__33883_33889 = G__33896;
chunk__33884_33890 = G__33897;
count__33885_33891 = G__33898;
i__33886_33892 = G__33899;
continue;
} else {
var temp__4126__auto___33900 = cljs.core.seq.call(null,seq__33883_33889);
if(temp__4126__auto___33900){
var seq__33883_33901__$1 = temp__4126__auto___33900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33883_33901__$1)){
var c__16932__auto___33902 = cljs.core.chunk_first.call(null,seq__33883_33901__$1);
var G__33903 = cljs.core.chunk_rest.call(null,seq__33883_33901__$1);
var G__33904 = c__16932__auto___33902;
var G__33905 = cljs.core.count.call(null,c__16932__auto___33902);
var G__33906 = (0);
seq__33883_33889 = G__33903;
chunk__33884_33890 = G__33904;
count__33885_33891 = G__33905;
i__33886_33892 = G__33906;
continue;
} else {
var vec__33888_33907 = cljs.core.first.call(null,seq__33883_33901__$1);
var name_33908 = cljs.core.nth.call(null,vec__33888_33907,(0),null);
var value_33909 = cljs.core.nth.call(null,vec__33888_33907,(1),null);
domina.set_style_BANG_.call(null,content,name_33908,value_33909);

var G__33910 = cljs.core.next.call(null,seq__33883_33901__$1);
var G__33911 = null;
var G__33912 = (0);
var G__33913 = (0);
seq__33883_33889 = G__33910;
chunk__33884_33890 = G__33911;
count__33885_33891 = G__33912;
i__33886_33892 = G__33913;
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
var seq__33920_33926 = cljs.core.seq.call(null,attrs);
var chunk__33921_33927 = null;
var count__33922_33928 = (0);
var i__33923_33929 = (0);
while(true){
if((i__33923_33929 < count__33922_33928)){
var vec__33924_33930 = cljs.core._nth.call(null,chunk__33921_33927,i__33923_33929);
var name_33931 = cljs.core.nth.call(null,vec__33924_33930,(0),null);
var value_33932 = cljs.core.nth.call(null,vec__33924_33930,(1),null);
domina.set_attr_BANG_.call(null,content,name_33931,value_33932);

var G__33933 = seq__33920_33926;
var G__33934 = chunk__33921_33927;
var G__33935 = count__33922_33928;
var G__33936 = (i__33923_33929 + (1));
seq__33920_33926 = G__33933;
chunk__33921_33927 = G__33934;
count__33922_33928 = G__33935;
i__33923_33929 = G__33936;
continue;
} else {
var temp__4126__auto___33937 = cljs.core.seq.call(null,seq__33920_33926);
if(temp__4126__auto___33937){
var seq__33920_33938__$1 = temp__4126__auto___33937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33920_33938__$1)){
var c__16932__auto___33939 = cljs.core.chunk_first.call(null,seq__33920_33938__$1);
var G__33940 = cljs.core.chunk_rest.call(null,seq__33920_33938__$1);
var G__33941 = c__16932__auto___33939;
var G__33942 = cljs.core.count.call(null,c__16932__auto___33939);
var G__33943 = (0);
seq__33920_33926 = G__33940;
chunk__33921_33927 = G__33941;
count__33922_33928 = G__33942;
i__33923_33929 = G__33943;
continue;
} else {
var vec__33925_33944 = cljs.core.first.call(null,seq__33920_33938__$1);
var name_33945 = cljs.core.nth.call(null,vec__33925_33944,(0),null);
var value_33946 = cljs.core.nth.call(null,vec__33925_33944,(1),null);
domina.set_attr_BANG_.call(null,content,name_33945,value_33946);

var G__33947 = cljs.core.next.call(null,seq__33920_33938__$1);
var G__33948 = null;
var G__33949 = (0);
var G__33950 = (0);
seq__33920_33926 = G__33947;
chunk__33921_33927 = G__33948;
count__33922_33928 = G__33949;
i__33923_33929 = G__33950;
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
var seq__33955_33959 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__33956_33960 = null;
var count__33957_33961 = (0);
var i__33958_33962 = (0);
while(true){
if((i__33958_33962 < count__33957_33961)){
var node_33963 = cljs.core._nth.call(null,chunk__33956_33960,i__33958_33962);
goog.dom.classes.add(node_33963,class$);

var G__33964 = seq__33955_33959;
var G__33965 = chunk__33956_33960;
var G__33966 = count__33957_33961;
var G__33967 = (i__33958_33962 + (1));
seq__33955_33959 = G__33964;
chunk__33956_33960 = G__33965;
count__33957_33961 = G__33966;
i__33958_33962 = G__33967;
continue;
} else {
var temp__4126__auto___33968 = cljs.core.seq.call(null,seq__33955_33959);
if(temp__4126__auto___33968){
var seq__33955_33969__$1 = temp__4126__auto___33968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33955_33969__$1)){
var c__16932__auto___33970 = cljs.core.chunk_first.call(null,seq__33955_33969__$1);
var G__33971 = cljs.core.chunk_rest.call(null,seq__33955_33969__$1);
var G__33972 = c__16932__auto___33970;
var G__33973 = cljs.core.count.call(null,c__16932__auto___33970);
var G__33974 = (0);
seq__33955_33959 = G__33971;
chunk__33956_33960 = G__33972;
count__33957_33961 = G__33973;
i__33958_33962 = G__33974;
continue;
} else {
var node_33975 = cljs.core.first.call(null,seq__33955_33969__$1);
goog.dom.classes.add(node_33975,class$);

var G__33976 = cljs.core.next.call(null,seq__33955_33969__$1);
var G__33977 = null;
var G__33978 = (0);
var G__33979 = (0);
seq__33955_33959 = G__33976;
chunk__33956_33960 = G__33977;
count__33957_33961 = G__33978;
i__33958_33962 = G__33979;
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
var seq__33984_33988 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__33985_33989 = null;
var count__33986_33990 = (0);
var i__33987_33991 = (0);
while(true){
if((i__33987_33991 < count__33986_33990)){
var node_33992 = cljs.core._nth.call(null,chunk__33985_33989,i__33987_33991);
goog.dom.classes.remove(node_33992,class$);

var G__33993 = seq__33984_33988;
var G__33994 = chunk__33985_33989;
var G__33995 = count__33986_33990;
var G__33996 = (i__33987_33991 + (1));
seq__33984_33988 = G__33993;
chunk__33985_33989 = G__33994;
count__33986_33990 = G__33995;
i__33987_33991 = G__33996;
continue;
} else {
var temp__4126__auto___33997 = cljs.core.seq.call(null,seq__33984_33988);
if(temp__4126__auto___33997){
var seq__33984_33998__$1 = temp__4126__auto___33997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33984_33998__$1)){
var c__16932__auto___33999 = cljs.core.chunk_first.call(null,seq__33984_33998__$1);
var G__34000 = cljs.core.chunk_rest.call(null,seq__33984_33998__$1);
var G__34001 = c__16932__auto___33999;
var G__34002 = cljs.core.count.call(null,c__16932__auto___33999);
var G__34003 = (0);
seq__33984_33988 = G__34000;
chunk__33985_33989 = G__34001;
count__33986_33990 = G__34002;
i__33987_33991 = G__34003;
continue;
} else {
var node_34004 = cljs.core.first.call(null,seq__33984_33998__$1);
goog.dom.classes.remove(node_34004,class$);

var G__34005 = cljs.core.next.call(null,seq__33984_33998__$1);
var G__34006 = null;
var G__34007 = (0);
var G__34008 = (0);
seq__33984_33988 = G__34005;
chunk__33985_33989 = G__34006;
count__33986_33990 = G__34007;
i__33987_33991 = G__34008;
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
var seq__34013_34017 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34014_34018 = null;
var count__34015_34019 = (0);
var i__34016_34020 = (0);
while(true){
if((i__34016_34020 < count__34015_34019)){
var node_34021 = cljs.core._nth.call(null,chunk__34014_34018,i__34016_34020);
goog.dom.classes.toggle(node_34021,class$);

var G__34022 = seq__34013_34017;
var G__34023 = chunk__34014_34018;
var G__34024 = count__34015_34019;
var G__34025 = (i__34016_34020 + (1));
seq__34013_34017 = G__34022;
chunk__34014_34018 = G__34023;
count__34015_34019 = G__34024;
i__34016_34020 = G__34025;
continue;
} else {
var temp__4126__auto___34026 = cljs.core.seq.call(null,seq__34013_34017);
if(temp__4126__auto___34026){
var seq__34013_34027__$1 = temp__4126__auto___34026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34013_34027__$1)){
var c__16932__auto___34028 = cljs.core.chunk_first.call(null,seq__34013_34027__$1);
var G__34029 = cljs.core.chunk_rest.call(null,seq__34013_34027__$1);
var G__34030 = c__16932__auto___34028;
var G__34031 = cljs.core.count.call(null,c__16932__auto___34028);
var G__34032 = (0);
seq__34013_34017 = G__34029;
chunk__34014_34018 = G__34030;
count__34015_34019 = G__34031;
i__34016_34020 = G__34032;
continue;
} else {
var node_34033 = cljs.core.first.call(null,seq__34013_34027__$1);
goog.dom.classes.toggle(node_34033,class$);

var G__34034 = cljs.core.next.call(null,seq__34013_34027__$1);
var G__34035 = null;
var G__34036 = (0);
var G__34037 = (0);
seq__34013_34017 = G__34034;
chunk__34014_34018 = G__34035;
count__34015_34019 = G__34036;
i__34016_34020 = G__34037;
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
var classes_34046__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__34042_34047 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34043_34048 = null;
var count__34044_34049 = (0);
var i__34045_34050 = (0);
while(true){
if((i__34045_34050 < count__34044_34049)){
var node_34051 = cljs.core._nth.call(null,chunk__34043_34048,i__34045_34050);
goog.dom.classes.set(node_34051,classes_34046__$1);

var G__34052 = seq__34042_34047;
var G__34053 = chunk__34043_34048;
var G__34054 = count__34044_34049;
var G__34055 = (i__34045_34050 + (1));
seq__34042_34047 = G__34052;
chunk__34043_34048 = G__34053;
count__34044_34049 = G__34054;
i__34045_34050 = G__34055;
continue;
} else {
var temp__4126__auto___34056 = cljs.core.seq.call(null,seq__34042_34047);
if(temp__4126__auto___34056){
var seq__34042_34057__$1 = temp__4126__auto___34056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34042_34057__$1)){
var c__16932__auto___34058 = cljs.core.chunk_first.call(null,seq__34042_34057__$1);
var G__34059 = cljs.core.chunk_rest.call(null,seq__34042_34057__$1);
var G__34060 = c__16932__auto___34058;
var G__34061 = cljs.core.count.call(null,c__16932__auto___34058);
var G__34062 = (0);
seq__34042_34047 = G__34059;
chunk__34043_34048 = G__34060;
count__34044_34049 = G__34061;
i__34045_34050 = G__34062;
continue;
} else {
var node_34063 = cljs.core.first.call(null,seq__34042_34057__$1);
goog.dom.classes.set(node_34063,classes_34046__$1);

var G__34064 = cljs.core.next.call(null,seq__34042_34057__$1);
var G__34065 = null;
var G__34066 = (0);
var G__34067 = (0);
seq__34042_34047 = G__34064;
chunk__34043_34048 = G__34065;
count__34044_34049 = G__34066;
i__34045_34050 = G__34067;
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
var seq__34072_34076 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34073_34077 = null;
var count__34074_34078 = (0);
var i__34075_34079 = (0);
while(true){
if((i__34075_34079 < count__34074_34078)){
var node_34080 = cljs.core._nth.call(null,chunk__34073_34077,i__34075_34079);
goog.dom.setTextContent(node_34080,value);

var G__34081 = seq__34072_34076;
var G__34082 = chunk__34073_34077;
var G__34083 = count__34074_34078;
var G__34084 = (i__34075_34079 + (1));
seq__34072_34076 = G__34081;
chunk__34073_34077 = G__34082;
count__34074_34078 = G__34083;
i__34075_34079 = G__34084;
continue;
} else {
var temp__4126__auto___34085 = cljs.core.seq.call(null,seq__34072_34076);
if(temp__4126__auto___34085){
var seq__34072_34086__$1 = temp__4126__auto___34085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34072_34086__$1)){
var c__16932__auto___34087 = cljs.core.chunk_first.call(null,seq__34072_34086__$1);
var G__34088 = cljs.core.chunk_rest.call(null,seq__34072_34086__$1);
var G__34089 = c__16932__auto___34087;
var G__34090 = cljs.core.count.call(null,c__16932__auto___34087);
var G__34091 = (0);
seq__34072_34076 = G__34088;
chunk__34073_34077 = G__34089;
count__34074_34078 = G__34090;
i__34075_34079 = G__34091;
continue;
} else {
var node_34092 = cljs.core.first.call(null,seq__34072_34086__$1);
goog.dom.setTextContent(node_34092,value);

var G__34093 = cljs.core.next.call(null,seq__34072_34086__$1);
var G__34094 = null;
var G__34095 = (0);
var G__34096 = (0);
seq__34072_34076 = G__34093;
chunk__34073_34077 = G__34094;
count__34074_34078 = G__34095;
i__34075_34079 = G__34096;
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
var seq__34101_34105 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34102_34106 = null;
var count__34103_34107 = (0);
var i__34104_34108 = (0);
while(true){
if((i__34104_34108 < count__34103_34107)){
var node_34109 = cljs.core._nth.call(null,chunk__34102_34106,i__34104_34108);
goog.dom.forms.setValue(node_34109,value);

var G__34110 = seq__34101_34105;
var G__34111 = chunk__34102_34106;
var G__34112 = count__34103_34107;
var G__34113 = (i__34104_34108 + (1));
seq__34101_34105 = G__34110;
chunk__34102_34106 = G__34111;
count__34103_34107 = G__34112;
i__34104_34108 = G__34113;
continue;
} else {
var temp__4126__auto___34114 = cljs.core.seq.call(null,seq__34101_34105);
if(temp__4126__auto___34114){
var seq__34101_34115__$1 = temp__4126__auto___34114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34101_34115__$1)){
var c__16932__auto___34116 = cljs.core.chunk_first.call(null,seq__34101_34115__$1);
var G__34117 = cljs.core.chunk_rest.call(null,seq__34101_34115__$1);
var G__34118 = c__16932__auto___34116;
var G__34119 = cljs.core.count.call(null,c__16932__auto___34116);
var G__34120 = (0);
seq__34101_34105 = G__34117;
chunk__34102_34106 = G__34118;
count__34103_34107 = G__34119;
i__34104_34108 = G__34120;
continue;
} else {
var node_34121 = cljs.core.first.call(null,seq__34101_34115__$1);
goog.dom.forms.setValue(node_34121,value);

var G__34122 = cljs.core.next.call(null,seq__34101_34115__$1);
var G__34123 = null;
var G__34124 = (0);
var G__34125 = (0);
seq__34101_34105 = G__34122;
chunk__34102_34106 = G__34123;
count__34103_34107 = G__34124;
i__34104_34108 = G__34125;
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
if(cljs.core.truth_((function (){var and__16133__auto__ = allows_inner_html_QMARK_;
if(and__16133__auto__){
var and__16133__auto____$1 = (function (){var or__16145__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__16133__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__16133__auto____$1;
}
} else {
return and__16133__auto__;
}
})())){
var value_34136 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__34132_34137 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34133_34138 = null;
var count__34134_34139 = (0);
var i__34135_34140 = (0);
while(true){
if((i__34135_34140 < count__34134_34139)){
var node_34141 = cljs.core._nth.call(null,chunk__34133_34138,i__34135_34140);
node_34141.innerHTML = value_34136;

var G__34142 = seq__34132_34137;
var G__34143 = chunk__34133_34138;
var G__34144 = count__34134_34139;
var G__34145 = (i__34135_34140 + (1));
seq__34132_34137 = G__34142;
chunk__34133_34138 = G__34143;
count__34134_34139 = G__34144;
i__34135_34140 = G__34145;
continue;
} else {
var temp__4126__auto___34146 = cljs.core.seq.call(null,seq__34132_34137);
if(temp__4126__auto___34146){
var seq__34132_34147__$1 = temp__4126__auto___34146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34132_34147__$1)){
var c__16932__auto___34148 = cljs.core.chunk_first.call(null,seq__34132_34147__$1);
var G__34149 = cljs.core.chunk_rest.call(null,seq__34132_34147__$1);
var G__34150 = c__16932__auto___34148;
var G__34151 = cljs.core.count.call(null,c__16932__auto___34148);
var G__34152 = (0);
seq__34132_34137 = G__34149;
chunk__34133_34138 = G__34150;
count__34134_34139 = G__34151;
i__34135_34140 = G__34152;
continue;
} else {
var node_34153 = cljs.core.first.call(null,seq__34132_34147__$1);
node_34153.innerHTML = value_34136;

var G__34154 = cljs.core.next.call(null,seq__34132_34147__$1);
var G__34155 = null;
var G__34156 = (0);
var G__34157 = (0);
seq__34132_34137 = G__34154;
chunk__34133_34138 = G__34155;
count__34134_34139 = G__34156;
i__34135_34140 = G__34157;
continue;
}
} else {
}
}
break;
}
}catch (e34131){if((e34131 instanceof Error)){
var e_34158 = e34131;
domina.replace_children_BANG_.call(null,content,value_34136);
} else {
throw e34131;

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
if(cljs.core.truth_((function (){var and__16133__auto__ = bubble;
if(cljs.core.truth_(and__16133__auto__)){
return (value == null);
} else {
return and__16133__auto__;
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
var m = (function (){var or__16145__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
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
var seq__34165_34169 = cljs.core.seq.call(null,children);
var chunk__34166_34170 = null;
var count__34167_34171 = (0);
var i__34168_34172 = (0);
while(true){
if((i__34168_34172 < count__34167_34171)){
var child_34173 = cljs.core._nth.call(null,chunk__34166_34170,i__34168_34172);
frag.appendChild(child_34173);

var G__34174 = seq__34165_34169;
var G__34175 = chunk__34166_34170;
var G__34176 = count__34167_34171;
var G__34177 = (i__34168_34172 + (1));
seq__34165_34169 = G__34174;
chunk__34166_34170 = G__34175;
count__34167_34171 = G__34176;
i__34168_34172 = G__34177;
continue;
} else {
var temp__4126__auto___34178 = cljs.core.seq.call(null,seq__34165_34169);
if(temp__4126__auto___34178){
var seq__34165_34179__$1 = temp__4126__auto___34178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34165_34179__$1)){
var c__16932__auto___34180 = cljs.core.chunk_first.call(null,seq__34165_34179__$1);
var G__34181 = cljs.core.chunk_rest.call(null,seq__34165_34179__$1);
var G__34182 = c__16932__auto___34180;
var G__34183 = cljs.core.count.call(null,c__16932__auto___34180);
var G__34184 = (0);
seq__34165_34169 = G__34181;
chunk__34166_34170 = G__34182;
count__34167_34171 = G__34183;
i__34168_34172 = G__34184;
continue;
} else {
var child_34185 = cljs.core.first.call(null,seq__34165_34179__$1);
frag.appendChild(child_34185);

var G__34186 = cljs.core.next.call(null,seq__34165_34179__$1);
var G__34187 = null;
var G__34188 = (0);
var G__34189 = (0);
seq__34165_34169 = G__34186;
chunk__34166_34170 = G__34187;
count__34167_34171 = G__34188;
i__34168_34172 = G__34189;
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
return (function (p1__34159_SHARP_,p2__34160_SHARP_){
return f.call(null,p1__34159_SHARP_,p2__34160_SHARP_);
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
var and__16133__auto__ = obj;
if(cljs.core.truth_(and__16133__auto__)){
var and__16133__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__16133__auto____$1){
return obj.length;
} else {
return and__16133__auto____$1;
}
} else {
return and__16133__auto__;
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
if((function (){var G__34191 = list_thing;
if(G__34191){
var bit__16826__auto__ = (G__34191.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__16826__auto__) || (G__34191.cljs$core$ISeqable$)){
return true;
} else {
if((!G__34191.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34191);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34191);
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
if((function (){var G__34192 = content;
if(G__34192){
var bit__16826__auto__ = (G__34192.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__16826__auto__) || (G__34192.cljs$core$ISeqable$)){
return true;
} else {
if((!G__34192.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34192);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34192);
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
if((function (){var G__34193 = content;
if(G__34193){
var bit__16826__auto__ = (G__34193.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__16826__auto__) || (G__34193.cljs$core$ISeqable$)){
return true;
} else {
if((!G__34193.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34193);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34193);
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

//# sourceMappingURL=domina.js.map?rel=1435014981185