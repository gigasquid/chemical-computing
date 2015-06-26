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
var opt_wrapper_22113 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_22114 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_22115 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_22115,opt_wrapper_22113,table_section_wrapper_22114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_22113,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_22114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_22114,cell_wrapper_22115,table_section_wrapper_22114,table_section_wrapper_22114]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3852__auto__ = div.firstChild;
if(cljs.core.truth_(and__3852__auto__)){
return div.firstChild.childNodes;
} else {
return and__3852__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__22120 = cljs.core.seq.call(null,tbody);
var chunk__22121 = null;
var count__22122 = (0);
var i__22123 = (0);
while(true){
if((i__22123 < count__22122)){
var child = cljs.core._nth.call(null,chunk__22121,i__22123);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__22124 = seq__22120;
var G__22125 = chunk__22121;
var G__22126 = count__22122;
var G__22127 = (i__22123 + (1));
seq__22120 = G__22124;
chunk__22121 = G__22125;
count__22122 = G__22126;
i__22123 = G__22127;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22120);
if(temp__4126__auto__){
var seq__22120__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22120__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__22120__$1);
var G__22128 = cljs.core.chunk_rest.call(null,seq__22120__$1);
var G__22129 = c__4651__auto__;
var G__22130 = cljs.core.count.call(null,c__4651__auto__);
var G__22131 = (0);
seq__22120 = G__22128;
chunk__22121 = G__22129;
count__22122 = G__22130;
i__22123 = G__22131;
continue;
} else {
var child = cljs.core.first.call(null,seq__22120__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__22132 = cljs.core.next.call(null,seq__22120__$1);
var G__22133 = null;
var G__22134 = (0);
var G__22135 = (0);
seq__22120 = G__22132;
chunk__22121 = G__22133;
count__22122 = G__22134;
i__22123 = G__22135;
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
var vec__22137 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__22137,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__22137,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__22137,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__22138 = wrapper.lastChild;
var G__22139 = (level - (1));
wrapper = G__22138;
level = G__22139;
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

if(cljs.core.truth_((function (){var and__3852__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3852__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__3852__auto__;
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

domina.DomContent = (function (){var obj22141 = {};
return obj22141;
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
return (function (){var or__3864__auto__ = (domina.nodes[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (domina.nodes["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
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
return (function (){var or__3864__auto__ = (domina.single_node[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (domina.single_node["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
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
if(cljs.core.truth_((function (){var and__3852__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3852__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__3852__auto__;
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
var G__22142__i = 0, G__22142__a = new Array(arguments.length -  0);
while (G__22142__i < G__22142__a.length) {G__22142__a[G__22142__i] = arguments[G__22142__i + 0]; ++G__22142__i;}
  mesg = new cljs.core.IndexedSeq(G__22142__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__22143){
var mesg = cljs.core.seq(arglist__22143);
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
var G__22144__i = 0, G__22144__a = new Array(arguments.length -  0);
while (G__22144__i < G__22144__a.length) {G__22144__a[G__22144__i] = arguments[G__22144__i + 0]; ++G__22144__i;}
  mesg = new cljs.core.IndexedSeq(G__22144__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__22145){
var mesg = cljs.core.seq(arglist__22145);
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
var G__22146__i = 0, G__22146__a = new Array(arguments.length -  0);
while (G__22146__i < G__22146__a.length) {G__22146__a[G__22146__i] = arguments[G__22146__i + 0]; ++G__22146__i;}
  contents = new cljs.core.IndexedSeq(G__22146__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__22147){
var contents = cljs.core.seq(arglist__22147);
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
return cljs.core.map.call(null,(function (p1__22148_SHARP_){
return p1__22148_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__22149_SHARP_,p2__22150_SHARP_){
return goog.dom.insertChildAt(p1__22149_SHARP_,p2__22150_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__22152_SHARP_,p2__22151_SHARP_){
return goog.dom.insertSiblingBefore(p2__22151_SHARP_,p1__22152_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__22154_SHARP_,p2__22153_SHARP_){
return goog.dom.insertSiblingAfter(p2__22153_SHARP_,p1__22154_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__22156_SHARP_,p2__22155_SHARP_){
return goog.dom.replaceNode(p2__22155_SHARP_,p1__22156_SHARP_);
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
var seq__22161_22165 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22162_22166 = null;
var count__22163_22167 = (0);
var i__22164_22168 = (0);
while(true){
if((i__22164_22168 < count__22163_22167)){
var n_22169 = cljs.core._nth.call(null,chunk__22162_22166,i__22164_22168);
goog.style.setStyle(n_22169,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__22170 = seq__22161_22165;
var G__22171 = chunk__22162_22166;
var G__22172 = count__22163_22167;
var G__22173 = (i__22164_22168 + (1));
seq__22161_22165 = G__22170;
chunk__22162_22166 = G__22171;
count__22163_22167 = G__22172;
i__22164_22168 = G__22173;
continue;
} else {
var temp__4126__auto___22174 = cljs.core.seq.call(null,seq__22161_22165);
if(temp__4126__auto___22174){
var seq__22161_22175__$1 = temp__4126__auto___22174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22161_22175__$1)){
var c__4651__auto___22176 = cljs.core.chunk_first.call(null,seq__22161_22175__$1);
var G__22177 = cljs.core.chunk_rest.call(null,seq__22161_22175__$1);
var G__22178 = c__4651__auto___22176;
var G__22179 = cljs.core.count.call(null,c__4651__auto___22176);
var G__22180 = (0);
seq__22161_22165 = G__22177;
chunk__22162_22166 = G__22178;
count__22163_22167 = G__22179;
i__22164_22168 = G__22180;
continue;
} else {
var n_22181 = cljs.core.first.call(null,seq__22161_22175__$1);
goog.style.setStyle(n_22181,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__22182 = cljs.core.next.call(null,seq__22161_22175__$1);
var G__22183 = null;
var G__22184 = (0);
var G__22185 = (0);
seq__22161_22165 = G__22182;
chunk__22162_22166 = G__22183;
count__22163_22167 = G__22184;
i__22164_22168 = G__22185;
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
var G__22186__i = 0, G__22186__a = new Array(arguments.length -  2);
while (G__22186__i < G__22186__a.length) {G__22186__a[G__22186__i] = arguments[G__22186__i + 2]; ++G__22186__i;}
  value = new cljs.core.IndexedSeq(G__22186__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__22187){
var content = cljs.core.first(arglist__22187);
arglist__22187 = cljs.core.next(arglist__22187);
var name = cljs.core.first(arglist__22187);
var value = cljs.core.rest(arglist__22187);
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
var seq__22192_22196 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22193_22197 = null;
var count__22194_22198 = (0);
var i__22195_22199 = (0);
while(true){
if((i__22195_22199 < count__22194_22198)){
var n_22200 = cljs.core._nth.call(null,chunk__22193_22197,i__22195_22199);
n_22200.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__22201 = seq__22192_22196;
var G__22202 = chunk__22193_22197;
var G__22203 = count__22194_22198;
var G__22204 = (i__22195_22199 + (1));
seq__22192_22196 = G__22201;
chunk__22193_22197 = G__22202;
count__22194_22198 = G__22203;
i__22195_22199 = G__22204;
continue;
} else {
var temp__4126__auto___22205 = cljs.core.seq.call(null,seq__22192_22196);
if(temp__4126__auto___22205){
var seq__22192_22206__$1 = temp__4126__auto___22205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22192_22206__$1)){
var c__4651__auto___22207 = cljs.core.chunk_first.call(null,seq__22192_22206__$1);
var G__22208 = cljs.core.chunk_rest.call(null,seq__22192_22206__$1);
var G__22209 = c__4651__auto___22207;
var G__22210 = cljs.core.count.call(null,c__4651__auto___22207);
var G__22211 = (0);
seq__22192_22196 = G__22208;
chunk__22193_22197 = G__22209;
count__22194_22198 = G__22210;
i__22195_22199 = G__22211;
continue;
} else {
var n_22212 = cljs.core.first.call(null,seq__22192_22206__$1);
n_22212.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__22213 = cljs.core.next.call(null,seq__22192_22206__$1);
var G__22214 = null;
var G__22215 = (0);
var G__22216 = (0);
seq__22192_22196 = G__22213;
chunk__22193_22197 = G__22214;
count__22194_22198 = G__22215;
i__22195_22199 = G__22216;
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
var G__22217__i = 0, G__22217__a = new Array(arguments.length -  2);
while (G__22217__i < G__22217__a.length) {G__22217__a[G__22217__i] = arguments[G__22217__i + 2]; ++G__22217__i;}
  value = new cljs.core.IndexedSeq(G__22217__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__22218){
var content = cljs.core.first(arglist__22218);
arglist__22218 = cljs.core.next(arglist__22218);
var name = cljs.core.first(arglist__22218);
var value = cljs.core.rest(arglist__22218);
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
var seq__22223_22227 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22224_22228 = null;
var count__22225_22229 = (0);
var i__22226_22230 = (0);
while(true){
if((i__22226_22230 < count__22225_22229)){
var n_22231 = cljs.core._nth.call(null,chunk__22224_22228,i__22226_22230);
n_22231.removeAttribute(cljs.core.name.call(null,name));

var G__22232 = seq__22223_22227;
var G__22233 = chunk__22224_22228;
var G__22234 = count__22225_22229;
var G__22235 = (i__22226_22230 + (1));
seq__22223_22227 = G__22232;
chunk__22224_22228 = G__22233;
count__22225_22229 = G__22234;
i__22226_22230 = G__22235;
continue;
} else {
var temp__4126__auto___22236 = cljs.core.seq.call(null,seq__22223_22227);
if(temp__4126__auto___22236){
var seq__22223_22237__$1 = temp__4126__auto___22236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22223_22237__$1)){
var c__4651__auto___22238 = cljs.core.chunk_first.call(null,seq__22223_22237__$1);
var G__22239 = cljs.core.chunk_rest.call(null,seq__22223_22237__$1);
var G__22240 = c__4651__auto___22238;
var G__22241 = cljs.core.count.call(null,c__4651__auto___22238);
var G__22242 = (0);
seq__22223_22227 = G__22239;
chunk__22224_22228 = G__22240;
count__22225_22229 = G__22241;
i__22226_22230 = G__22242;
continue;
} else {
var n_22243 = cljs.core.first.call(null,seq__22223_22237__$1);
n_22243.removeAttribute(cljs.core.name.call(null,name));

var G__22244 = cljs.core.next.call(null,seq__22223_22237__$1);
var G__22245 = null;
var G__22246 = (0);
var G__22247 = (0);
seq__22223_22227 = G__22244;
chunk__22224_22228 = G__22245;
count__22225_22229 = G__22246;
i__22226_22230 = G__22247;
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
var vec__22249 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__22249,(0),null);
var v = cljs.core.nth.call(null,vec__22249,(1),null);
if(cljs.core.truth_((function (){var and__3852__auto__ = k;
if(cljs.core.truth_(and__3852__auto__)){
return v;
} else {
return and__3852__auto__;
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
return (function (p1__22250_SHARP_){
var attr = attrs__$1.item(p1__22250_SHARP_);
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
var seq__22257_22263 = cljs.core.seq.call(null,styles);
var chunk__22258_22264 = null;
var count__22259_22265 = (0);
var i__22260_22266 = (0);
while(true){
if((i__22260_22266 < count__22259_22265)){
var vec__22261_22267 = cljs.core._nth.call(null,chunk__22258_22264,i__22260_22266);
var name_22268 = cljs.core.nth.call(null,vec__22261_22267,(0),null);
var value_22269 = cljs.core.nth.call(null,vec__22261_22267,(1),null);
domina.set_style_BANG_.call(null,content,name_22268,value_22269);

var G__22270 = seq__22257_22263;
var G__22271 = chunk__22258_22264;
var G__22272 = count__22259_22265;
var G__22273 = (i__22260_22266 + (1));
seq__22257_22263 = G__22270;
chunk__22258_22264 = G__22271;
count__22259_22265 = G__22272;
i__22260_22266 = G__22273;
continue;
} else {
var temp__4126__auto___22274 = cljs.core.seq.call(null,seq__22257_22263);
if(temp__4126__auto___22274){
var seq__22257_22275__$1 = temp__4126__auto___22274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22257_22275__$1)){
var c__4651__auto___22276 = cljs.core.chunk_first.call(null,seq__22257_22275__$1);
var G__22277 = cljs.core.chunk_rest.call(null,seq__22257_22275__$1);
var G__22278 = c__4651__auto___22276;
var G__22279 = cljs.core.count.call(null,c__4651__auto___22276);
var G__22280 = (0);
seq__22257_22263 = G__22277;
chunk__22258_22264 = G__22278;
count__22259_22265 = G__22279;
i__22260_22266 = G__22280;
continue;
} else {
var vec__22262_22281 = cljs.core.first.call(null,seq__22257_22275__$1);
var name_22282 = cljs.core.nth.call(null,vec__22262_22281,(0),null);
var value_22283 = cljs.core.nth.call(null,vec__22262_22281,(1),null);
domina.set_style_BANG_.call(null,content,name_22282,value_22283);

var G__22284 = cljs.core.next.call(null,seq__22257_22275__$1);
var G__22285 = null;
var G__22286 = (0);
var G__22287 = (0);
seq__22257_22263 = G__22284;
chunk__22258_22264 = G__22285;
count__22259_22265 = G__22286;
i__22260_22266 = G__22287;
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
var seq__22294_22300 = cljs.core.seq.call(null,attrs);
var chunk__22295_22301 = null;
var count__22296_22302 = (0);
var i__22297_22303 = (0);
while(true){
if((i__22297_22303 < count__22296_22302)){
var vec__22298_22304 = cljs.core._nth.call(null,chunk__22295_22301,i__22297_22303);
var name_22305 = cljs.core.nth.call(null,vec__22298_22304,(0),null);
var value_22306 = cljs.core.nth.call(null,vec__22298_22304,(1),null);
domina.set_attr_BANG_.call(null,content,name_22305,value_22306);

var G__22307 = seq__22294_22300;
var G__22308 = chunk__22295_22301;
var G__22309 = count__22296_22302;
var G__22310 = (i__22297_22303 + (1));
seq__22294_22300 = G__22307;
chunk__22295_22301 = G__22308;
count__22296_22302 = G__22309;
i__22297_22303 = G__22310;
continue;
} else {
var temp__4126__auto___22311 = cljs.core.seq.call(null,seq__22294_22300);
if(temp__4126__auto___22311){
var seq__22294_22312__$1 = temp__4126__auto___22311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22294_22312__$1)){
var c__4651__auto___22313 = cljs.core.chunk_first.call(null,seq__22294_22312__$1);
var G__22314 = cljs.core.chunk_rest.call(null,seq__22294_22312__$1);
var G__22315 = c__4651__auto___22313;
var G__22316 = cljs.core.count.call(null,c__4651__auto___22313);
var G__22317 = (0);
seq__22294_22300 = G__22314;
chunk__22295_22301 = G__22315;
count__22296_22302 = G__22316;
i__22297_22303 = G__22317;
continue;
} else {
var vec__22299_22318 = cljs.core.first.call(null,seq__22294_22312__$1);
var name_22319 = cljs.core.nth.call(null,vec__22299_22318,(0),null);
var value_22320 = cljs.core.nth.call(null,vec__22299_22318,(1),null);
domina.set_attr_BANG_.call(null,content,name_22319,value_22320);

var G__22321 = cljs.core.next.call(null,seq__22294_22312__$1);
var G__22322 = null;
var G__22323 = (0);
var G__22324 = (0);
seq__22294_22300 = G__22321;
chunk__22295_22301 = G__22322;
count__22296_22302 = G__22323;
i__22297_22303 = G__22324;
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
var seq__22329_22333 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22330_22334 = null;
var count__22331_22335 = (0);
var i__22332_22336 = (0);
while(true){
if((i__22332_22336 < count__22331_22335)){
var node_22337 = cljs.core._nth.call(null,chunk__22330_22334,i__22332_22336);
goog.dom.classes.add(node_22337,class$);

var G__22338 = seq__22329_22333;
var G__22339 = chunk__22330_22334;
var G__22340 = count__22331_22335;
var G__22341 = (i__22332_22336 + (1));
seq__22329_22333 = G__22338;
chunk__22330_22334 = G__22339;
count__22331_22335 = G__22340;
i__22332_22336 = G__22341;
continue;
} else {
var temp__4126__auto___22342 = cljs.core.seq.call(null,seq__22329_22333);
if(temp__4126__auto___22342){
var seq__22329_22343__$1 = temp__4126__auto___22342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22329_22343__$1)){
var c__4651__auto___22344 = cljs.core.chunk_first.call(null,seq__22329_22343__$1);
var G__22345 = cljs.core.chunk_rest.call(null,seq__22329_22343__$1);
var G__22346 = c__4651__auto___22344;
var G__22347 = cljs.core.count.call(null,c__4651__auto___22344);
var G__22348 = (0);
seq__22329_22333 = G__22345;
chunk__22330_22334 = G__22346;
count__22331_22335 = G__22347;
i__22332_22336 = G__22348;
continue;
} else {
var node_22349 = cljs.core.first.call(null,seq__22329_22343__$1);
goog.dom.classes.add(node_22349,class$);

var G__22350 = cljs.core.next.call(null,seq__22329_22343__$1);
var G__22351 = null;
var G__22352 = (0);
var G__22353 = (0);
seq__22329_22333 = G__22350;
chunk__22330_22334 = G__22351;
count__22331_22335 = G__22352;
i__22332_22336 = G__22353;
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
var seq__22358_22362 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22359_22363 = null;
var count__22360_22364 = (0);
var i__22361_22365 = (0);
while(true){
if((i__22361_22365 < count__22360_22364)){
var node_22366 = cljs.core._nth.call(null,chunk__22359_22363,i__22361_22365);
goog.dom.classes.remove(node_22366,class$);

var G__22367 = seq__22358_22362;
var G__22368 = chunk__22359_22363;
var G__22369 = count__22360_22364;
var G__22370 = (i__22361_22365 + (1));
seq__22358_22362 = G__22367;
chunk__22359_22363 = G__22368;
count__22360_22364 = G__22369;
i__22361_22365 = G__22370;
continue;
} else {
var temp__4126__auto___22371 = cljs.core.seq.call(null,seq__22358_22362);
if(temp__4126__auto___22371){
var seq__22358_22372__$1 = temp__4126__auto___22371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22358_22372__$1)){
var c__4651__auto___22373 = cljs.core.chunk_first.call(null,seq__22358_22372__$1);
var G__22374 = cljs.core.chunk_rest.call(null,seq__22358_22372__$1);
var G__22375 = c__4651__auto___22373;
var G__22376 = cljs.core.count.call(null,c__4651__auto___22373);
var G__22377 = (0);
seq__22358_22362 = G__22374;
chunk__22359_22363 = G__22375;
count__22360_22364 = G__22376;
i__22361_22365 = G__22377;
continue;
} else {
var node_22378 = cljs.core.first.call(null,seq__22358_22372__$1);
goog.dom.classes.remove(node_22378,class$);

var G__22379 = cljs.core.next.call(null,seq__22358_22372__$1);
var G__22380 = null;
var G__22381 = (0);
var G__22382 = (0);
seq__22358_22362 = G__22379;
chunk__22359_22363 = G__22380;
count__22360_22364 = G__22381;
i__22361_22365 = G__22382;
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
var seq__22387_22391 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22388_22392 = null;
var count__22389_22393 = (0);
var i__22390_22394 = (0);
while(true){
if((i__22390_22394 < count__22389_22393)){
var node_22395 = cljs.core._nth.call(null,chunk__22388_22392,i__22390_22394);
goog.dom.classes.toggle(node_22395,class$);

var G__22396 = seq__22387_22391;
var G__22397 = chunk__22388_22392;
var G__22398 = count__22389_22393;
var G__22399 = (i__22390_22394 + (1));
seq__22387_22391 = G__22396;
chunk__22388_22392 = G__22397;
count__22389_22393 = G__22398;
i__22390_22394 = G__22399;
continue;
} else {
var temp__4126__auto___22400 = cljs.core.seq.call(null,seq__22387_22391);
if(temp__4126__auto___22400){
var seq__22387_22401__$1 = temp__4126__auto___22400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22387_22401__$1)){
var c__4651__auto___22402 = cljs.core.chunk_first.call(null,seq__22387_22401__$1);
var G__22403 = cljs.core.chunk_rest.call(null,seq__22387_22401__$1);
var G__22404 = c__4651__auto___22402;
var G__22405 = cljs.core.count.call(null,c__4651__auto___22402);
var G__22406 = (0);
seq__22387_22391 = G__22403;
chunk__22388_22392 = G__22404;
count__22389_22393 = G__22405;
i__22390_22394 = G__22406;
continue;
} else {
var node_22407 = cljs.core.first.call(null,seq__22387_22401__$1);
goog.dom.classes.toggle(node_22407,class$);

var G__22408 = cljs.core.next.call(null,seq__22387_22401__$1);
var G__22409 = null;
var G__22410 = (0);
var G__22411 = (0);
seq__22387_22391 = G__22408;
chunk__22388_22392 = G__22409;
count__22389_22393 = G__22410;
i__22390_22394 = G__22411;
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
var classes_22420__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__22416_22421 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22417_22422 = null;
var count__22418_22423 = (0);
var i__22419_22424 = (0);
while(true){
if((i__22419_22424 < count__22418_22423)){
var node_22425 = cljs.core._nth.call(null,chunk__22417_22422,i__22419_22424);
goog.dom.classes.set(node_22425,classes_22420__$1);

var G__22426 = seq__22416_22421;
var G__22427 = chunk__22417_22422;
var G__22428 = count__22418_22423;
var G__22429 = (i__22419_22424 + (1));
seq__22416_22421 = G__22426;
chunk__22417_22422 = G__22427;
count__22418_22423 = G__22428;
i__22419_22424 = G__22429;
continue;
} else {
var temp__4126__auto___22430 = cljs.core.seq.call(null,seq__22416_22421);
if(temp__4126__auto___22430){
var seq__22416_22431__$1 = temp__4126__auto___22430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22416_22431__$1)){
var c__4651__auto___22432 = cljs.core.chunk_first.call(null,seq__22416_22431__$1);
var G__22433 = cljs.core.chunk_rest.call(null,seq__22416_22431__$1);
var G__22434 = c__4651__auto___22432;
var G__22435 = cljs.core.count.call(null,c__4651__auto___22432);
var G__22436 = (0);
seq__22416_22421 = G__22433;
chunk__22417_22422 = G__22434;
count__22418_22423 = G__22435;
i__22419_22424 = G__22436;
continue;
} else {
var node_22437 = cljs.core.first.call(null,seq__22416_22431__$1);
goog.dom.classes.set(node_22437,classes_22420__$1);

var G__22438 = cljs.core.next.call(null,seq__22416_22431__$1);
var G__22439 = null;
var G__22440 = (0);
var G__22441 = (0);
seq__22416_22421 = G__22438;
chunk__22417_22422 = G__22439;
count__22418_22423 = G__22440;
i__22419_22424 = G__22441;
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
var seq__22446_22450 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22447_22451 = null;
var count__22448_22452 = (0);
var i__22449_22453 = (0);
while(true){
if((i__22449_22453 < count__22448_22452)){
var node_22454 = cljs.core._nth.call(null,chunk__22447_22451,i__22449_22453);
goog.dom.setTextContent(node_22454,value);

var G__22455 = seq__22446_22450;
var G__22456 = chunk__22447_22451;
var G__22457 = count__22448_22452;
var G__22458 = (i__22449_22453 + (1));
seq__22446_22450 = G__22455;
chunk__22447_22451 = G__22456;
count__22448_22452 = G__22457;
i__22449_22453 = G__22458;
continue;
} else {
var temp__4126__auto___22459 = cljs.core.seq.call(null,seq__22446_22450);
if(temp__4126__auto___22459){
var seq__22446_22460__$1 = temp__4126__auto___22459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22446_22460__$1)){
var c__4651__auto___22461 = cljs.core.chunk_first.call(null,seq__22446_22460__$1);
var G__22462 = cljs.core.chunk_rest.call(null,seq__22446_22460__$1);
var G__22463 = c__4651__auto___22461;
var G__22464 = cljs.core.count.call(null,c__4651__auto___22461);
var G__22465 = (0);
seq__22446_22450 = G__22462;
chunk__22447_22451 = G__22463;
count__22448_22452 = G__22464;
i__22449_22453 = G__22465;
continue;
} else {
var node_22466 = cljs.core.first.call(null,seq__22446_22460__$1);
goog.dom.setTextContent(node_22466,value);

var G__22467 = cljs.core.next.call(null,seq__22446_22460__$1);
var G__22468 = null;
var G__22469 = (0);
var G__22470 = (0);
seq__22446_22450 = G__22467;
chunk__22447_22451 = G__22468;
count__22448_22452 = G__22469;
i__22449_22453 = G__22470;
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
var seq__22475_22479 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22476_22480 = null;
var count__22477_22481 = (0);
var i__22478_22482 = (0);
while(true){
if((i__22478_22482 < count__22477_22481)){
var node_22483 = cljs.core._nth.call(null,chunk__22476_22480,i__22478_22482);
goog.dom.forms.setValue(node_22483,value);

var G__22484 = seq__22475_22479;
var G__22485 = chunk__22476_22480;
var G__22486 = count__22477_22481;
var G__22487 = (i__22478_22482 + (1));
seq__22475_22479 = G__22484;
chunk__22476_22480 = G__22485;
count__22477_22481 = G__22486;
i__22478_22482 = G__22487;
continue;
} else {
var temp__4126__auto___22488 = cljs.core.seq.call(null,seq__22475_22479);
if(temp__4126__auto___22488){
var seq__22475_22489__$1 = temp__4126__auto___22488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22475_22489__$1)){
var c__4651__auto___22490 = cljs.core.chunk_first.call(null,seq__22475_22489__$1);
var G__22491 = cljs.core.chunk_rest.call(null,seq__22475_22489__$1);
var G__22492 = c__4651__auto___22490;
var G__22493 = cljs.core.count.call(null,c__4651__auto___22490);
var G__22494 = (0);
seq__22475_22479 = G__22491;
chunk__22476_22480 = G__22492;
count__22477_22481 = G__22493;
i__22478_22482 = G__22494;
continue;
} else {
var node_22495 = cljs.core.first.call(null,seq__22475_22489__$1);
goog.dom.forms.setValue(node_22495,value);

var G__22496 = cljs.core.next.call(null,seq__22475_22489__$1);
var G__22497 = null;
var G__22498 = (0);
var G__22499 = (0);
seq__22475_22479 = G__22496;
chunk__22476_22480 = G__22497;
count__22477_22481 = G__22498;
i__22478_22482 = G__22499;
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
if(cljs.core.truth_((function (){var and__3852__auto__ = allows_inner_html_QMARK_;
if(and__3852__auto__){
var and__3852__auto____$1 = (function (){var or__3864__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
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
var value_22510 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__22506_22511 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22507_22512 = null;
var count__22508_22513 = (0);
var i__22509_22514 = (0);
while(true){
if((i__22509_22514 < count__22508_22513)){
var node_22515 = cljs.core._nth.call(null,chunk__22507_22512,i__22509_22514);
node_22515.innerHTML = value_22510;

var G__22516 = seq__22506_22511;
var G__22517 = chunk__22507_22512;
var G__22518 = count__22508_22513;
var G__22519 = (i__22509_22514 + (1));
seq__22506_22511 = G__22516;
chunk__22507_22512 = G__22517;
count__22508_22513 = G__22518;
i__22509_22514 = G__22519;
continue;
} else {
var temp__4126__auto___22520 = cljs.core.seq.call(null,seq__22506_22511);
if(temp__4126__auto___22520){
var seq__22506_22521__$1 = temp__4126__auto___22520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22506_22521__$1)){
var c__4651__auto___22522 = cljs.core.chunk_first.call(null,seq__22506_22521__$1);
var G__22523 = cljs.core.chunk_rest.call(null,seq__22506_22521__$1);
var G__22524 = c__4651__auto___22522;
var G__22525 = cljs.core.count.call(null,c__4651__auto___22522);
var G__22526 = (0);
seq__22506_22511 = G__22523;
chunk__22507_22512 = G__22524;
count__22508_22513 = G__22525;
i__22509_22514 = G__22526;
continue;
} else {
var node_22527 = cljs.core.first.call(null,seq__22506_22521__$1);
node_22527.innerHTML = value_22510;

var G__22528 = cljs.core.next.call(null,seq__22506_22521__$1);
var G__22529 = null;
var G__22530 = (0);
var G__22531 = (0);
seq__22506_22511 = G__22528;
chunk__22507_22512 = G__22529;
count__22508_22513 = G__22530;
i__22509_22514 = G__22531;
continue;
}
} else {
}
}
break;
}
}catch (e22505){if((e22505 instanceof Error)){
var e_22532 = e22505;
domina.replace_children_BANG_.call(null,content,value_22510);
} else {
throw e22505;

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
if(cljs.core.truth_((function (){var and__3852__auto__ = bubble;
if(cljs.core.truth_(and__3852__auto__)){
return (value == null);
} else {
return and__3852__auto__;
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
var m = (function (){var or__3864__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
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
var seq__22539_22543 = cljs.core.seq.call(null,children);
var chunk__22540_22544 = null;
var count__22541_22545 = (0);
var i__22542_22546 = (0);
while(true){
if((i__22542_22546 < count__22541_22545)){
var child_22547 = cljs.core._nth.call(null,chunk__22540_22544,i__22542_22546);
frag.appendChild(child_22547);

var G__22548 = seq__22539_22543;
var G__22549 = chunk__22540_22544;
var G__22550 = count__22541_22545;
var G__22551 = (i__22542_22546 + (1));
seq__22539_22543 = G__22548;
chunk__22540_22544 = G__22549;
count__22541_22545 = G__22550;
i__22542_22546 = G__22551;
continue;
} else {
var temp__4126__auto___22552 = cljs.core.seq.call(null,seq__22539_22543);
if(temp__4126__auto___22552){
var seq__22539_22553__$1 = temp__4126__auto___22552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22539_22553__$1)){
var c__4651__auto___22554 = cljs.core.chunk_first.call(null,seq__22539_22553__$1);
var G__22555 = cljs.core.chunk_rest.call(null,seq__22539_22553__$1);
var G__22556 = c__4651__auto___22554;
var G__22557 = cljs.core.count.call(null,c__4651__auto___22554);
var G__22558 = (0);
seq__22539_22543 = G__22555;
chunk__22540_22544 = G__22556;
count__22541_22545 = G__22557;
i__22542_22546 = G__22558;
continue;
} else {
var child_22559 = cljs.core.first.call(null,seq__22539_22553__$1);
frag.appendChild(child_22559);

var G__22560 = cljs.core.next.call(null,seq__22539_22553__$1);
var G__22561 = null;
var G__22562 = (0);
var G__22563 = (0);
seq__22539_22543 = G__22560;
chunk__22540_22544 = G__22561;
count__22541_22545 = G__22562;
i__22542_22546 = G__22563;
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
return (function (p1__22533_SHARP_,p2__22534_SHARP_){
return f.call(null,p1__22533_SHARP_,p2__22534_SHARP_);
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
var and__3852__auto__ = obj;
if(cljs.core.truth_(and__3852__auto__)){
var and__3852__auto____$1 = cljs.core.not.call(null,obj.nodeName);
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
if((function (){var G__22565 = list_thing;
if(G__22565){
var bit__4545__auto__ = (G__22565.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4545__auto__) || (G__22565.cljs$core$ISeqable$)){
return true;
} else {
if((!G__22565.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22565);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22565);
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
if((function (){var G__22566 = content;
if(G__22566){
var bit__4545__auto__ = (G__22566.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4545__auto__) || (G__22566.cljs$core$ISeqable$)){
return true;
} else {
if((!G__22566.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22566);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22566);
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
if((function (){var G__22567 = content;
if(G__22567){
var bit__4545__auto__ = (G__22567.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4545__auto__) || (G__22567.cljs$core$ISeqable$)){
return true;
} else {
if((!G__22567.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22567);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22567);
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

//# sourceMappingURL=domina.js.map?rel=1435268445269