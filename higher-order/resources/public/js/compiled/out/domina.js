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
var opt_wrapper_33878 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_33879 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_33880 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_33880,opt_wrapper_33878,table_section_wrapper_33879,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_33878,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_33879,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_33879,cell_wrapper_33880,table_section_wrapper_33879,table_section_wrapper_33879]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__16133__auto__ = div.firstChild;
if(cljs.core.truth_(and__16133__auto__)){
return div.firstChild.childNodes;
} else {
return and__16133__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__33885 = cljs.core.seq.call(null,tbody);
var chunk__33886 = null;
var count__33887 = (0);
var i__33888 = (0);
while(true){
if((i__33888 < count__33887)){
var child = cljs.core._nth.call(null,chunk__33886,i__33888);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__33889 = seq__33885;
var G__33890 = chunk__33886;
var G__33891 = count__33887;
var G__33892 = (i__33888 + (1));
seq__33885 = G__33889;
chunk__33886 = G__33890;
count__33887 = G__33891;
i__33888 = G__33892;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33885);
if(temp__4126__auto__){
var seq__33885__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33885__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33885__$1);
var G__33893 = cljs.core.chunk_rest.call(null,seq__33885__$1);
var G__33894 = c__16932__auto__;
var G__33895 = cljs.core.count.call(null,c__16932__auto__);
var G__33896 = (0);
seq__33885 = G__33893;
chunk__33886 = G__33894;
count__33887 = G__33895;
i__33888 = G__33896;
continue;
} else {
var child = cljs.core.first.call(null,seq__33885__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__33897 = cljs.core.next.call(null,seq__33885__$1);
var G__33898 = null;
var G__33899 = (0);
var G__33900 = (0);
seq__33885 = G__33897;
chunk__33886 = G__33898;
count__33887 = G__33899;
i__33888 = G__33900;
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
var vec__33902 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__33902,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__33902,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__33902,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__33903 = wrapper.lastChild;
var G__33904 = (level - (1));
wrapper = G__33903;
level = G__33904;
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

domina.DomContent = (function (){var obj33906 = {};
return obj33906;
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
var G__33907__i = 0, G__33907__a = new Array(arguments.length -  0);
while (G__33907__i < G__33907__a.length) {G__33907__a[G__33907__i] = arguments[G__33907__i + 0]; ++G__33907__i;}
  mesg = new cljs.core.IndexedSeq(G__33907__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__33908){
var mesg = cljs.core.seq(arglist__33908);
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
var G__33909__i = 0, G__33909__a = new Array(arguments.length -  0);
while (G__33909__i < G__33909__a.length) {G__33909__a[G__33909__i] = arguments[G__33909__i + 0]; ++G__33909__i;}
  mesg = new cljs.core.IndexedSeq(G__33909__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__33910){
var mesg = cljs.core.seq(arglist__33910);
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
var G__33911__i = 0, G__33911__a = new Array(arguments.length -  0);
while (G__33911__i < G__33911__a.length) {G__33911__a[G__33911__i] = arguments[G__33911__i + 0]; ++G__33911__i;}
  contents = new cljs.core.IndexedSeq(G__33911__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__33912){
var contents = cljs.core.seq(arglist__33912);
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
return cljs.core.map.call(null,(function (p1__33913_SHARP_){
return p1__33913_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__33914_SHARP_,p2__33915_SHARP_){
return goog.dom.insertChildAt(p1__33914_SHARP_,p2__33915_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__33917_SHARP_,p2__33916_SHARP_){
return goog.dom.insertSiblingBefore(p2__33916_SHARP_,p1__33917_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__33919_SHARP_,p2__33918_SHARP_){
return goog.dom.insertSiblingAfter(p2__33918_SHARP_,p1__33919_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__33921_SHARP_,p2__33920_SHARP_){
return goog.dom.replaceNode(p2__33920_SHARP_,p1__33921_SHARP_);
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
var seq__33926_33930 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__33927_33931 = null;
var count__33928_33932 = (0);
var i__33929_33933 = (0);
while(true){
if((i__33929_33933 < count__33928_33932)){
var n_33934 = cljs.core._nth.call(null,chunk__33927_33931,i__33929_33933);
goog.style.setStyle(n_33934,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__33935 = seq__33926_33930;
var G__33936 = chunk__33927_33931;
var G__33937 = count__33928_33932;
var G__33938 = (i__33929_33933 + (1));
seq__33926_33930 = G__33935;
chunk__33927_33931 = G__33936;
count__33928_33932 = G__33937;
i__33929_33933 = G__33938;
continue;
} else {
var temp__4126__auto___33939 = cljs.core.seq.call(null,seq__33926_33930);
if(temp__4126__auto___33939){
var seq__33926_33940__$1 = temp__4126__auto___33939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33926_33940__$1)){
var c__16932__auto___33941 = cljs.core.chunk_first.call(null,seq__33926_33940__$1);
var G__33942 = cljs.core.chunk_rest.call(null,seq__33926_33940__$1);
var G__33943 = c__16932__auto___33941;
var G__33944 = cljs.core.count.call(null,c__16932__auto___33941);
var G__33945 = (0);
seq__33926_33930 = G__33942;
chunk__33927_33931 = G__33943;
count__33928_33932 = G__33944;
i__33929_33933 = G__33945;
continue;
} else {
var n_33946 = cljs.core.first.call(null,seq__33926_33940__$1);
goog.style.setStyle(n_33946,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__33947 = cljs.core.next.call(null,seq__33926_33940__$1);
var G__33948 = null;
var G__33949 = (0);
var G__33950 = (0);
seq__33926_33930 = G__33947;
chunk__33927_33931 = G__33948;
count__33928_33932 = G__33949;
i__33929_33933 = G__33950;
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
var G__33951__i = 0, G__33951__a = new Array(arguments.length -  2);
while (G__33951__i < G__33951__a.length) {G__33951__a[G__33951__i] = arguments[G__33951__i + 2]; ++G__33951__i;}
  value = new cljs.core.IndexedSeq(G__33951__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__33952){
var content = cljs.core.first(arglist__33952);
arglist__33952 = cljs.core.next(arglist__33952);
var name = cljs.core.first(arglist__33952);
var value = cljs.core.rest(arglist__33952);
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
var seq__33957_33961 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__33958_33962 = null;
var count__33959_33963 = (0);
var i__33960_33964 = (0);
while(true){
if((i__33960_33964 < count__33959_33963)){
var n_33965 = cljs.core._nth.call(null,chunk__33958_33962,i__33960_33964);
n_33965.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__33966 = seq__33957_33961;
var G__33967 = chunk__33958_33962;
var G__33968 = count__33959_33963;
var G__33969 = (i__33960_33964 + (1));
seq__33957_33961 = G__33966;
chunk__33958_33962 = G__33967;
count__33959_33963 = G__33968;
i__33960_33964 = G__33969;
continue;
} else {
var temp__4126__auto___33970 = cljs.core.seq.call(null,seq__33957_33961);
if(temp__4126__auto___33970){
var seq__33957_33971__$1 = temp__4126__auto___33970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33957_33971__$1)){
var c__16932__auto___33972 = cljs.core.chunk_first.call(null,seq__33957_33971__$1);
var G__33973 = cljs.core.chunk_rest.call(null,seq__33957_33971__$1);
var G__33974 = c__16932__auto___33972;
var G__33975 = cljs.core.count.call(null,c__16932__auto___33972);
var G__33976 = (0);
seq__33957_33961 = G__33973;
chunk__33958_33962 = G__33974;
count__33959_33963 = G__33975;
i__33960_33964 = G__33976;
continue;
} else {
var n_33977 = cljs.core.first.call(null,seq__33957_33971__$1);
n_33977.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__33978 = cljs.core.next.call(null,seq__33957_33971__$1);
var G__33979 = null;
var G__33980 = (0);
var G__33981 = (0);
seq__33957_33961 = G__33978;
chunk__33958_33962 = G__33979;
count__33959_33963 = G__33980;
i__33960_33964 = G__33981;
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
var G__33982__i = 0, G__33982__a = new Array(arguments.length -  2);
while (G__33982__i < G__33982__a.length) {G__33982__a[G__33982__i] = arguments[G__33982__i + 2]; ++G__33982__i;}
  value = new cljs.core.IndexedSeq(G__33982__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__33983){
var content = cljs.core.first(arglist__33983);
arglist__33983 = cljs.core.next(arglist__33983);
var name = cljs.core.first(arglist__33983);
var value = cljs.core.rest(arglist__33983);
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
var seq__33988_33992 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__33989_33993 = null;
var count__33990_33994 = (0);
var i__33991_33995 = (0);
while(true){
if((i__33991_33995 < count__33990_33994)){
var n_33996 = cljs.core._nth.call(null,chunk__33989_33993,i__33991_33995);
n_33996.removeAttribute(cljs.core.name.call(null,name));

var G__33997 = seq__33988_33992;
var G__33998 = chunk__33989_33993;
var G__33999 = count__33990_33994;
var G__34000 = (i__33991_33995 + (1));
seq__33988_33992 = G__33997;
chunk__33989_33993 = G__33998;
count__33990_33994 = G__33999;
i__33991_33995 = G__34000;
continue;
} else {
var temp__4126__auto___34001 = cljs.core.seq.call(null,seq__33988_33992);
if(temp__4126__auto___34001){
var seq__33988_34002__$1 = temp__4126__auto___34001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33988_34002__$1)){
var c__16932__auto___34003 = cljs.core.chunk_first.call(null,seq__33988_34002__$1);
var G__34004 = cljs.core.chunk_rest.call(null,seq__33988_34002__$1);
var G__34005 = c__16932__auto___34003;
var G__34006 = cljs.core.count.call(null,c__16932__auto___34003);
var G__34007 = (0);
seq__33988_33992 = G__34004;
chunk__33989_33993 = G__34005;
count__33990_33994 = G__34006;
i__33991_33995 = G__34007;
continue;
} else {
var n_34008 = cljs.core.first.call(null,seq__33988_34002__$1);
n_34008.removeAttribute(cljs.core.name.call(null,name));

var G__34009 = cljs.core.next.call(null,seq__33988_34002__$1);
var G__34010 = null;
var G__34011 = (0);
var G__34012 = (0);
seq__33988_33992 = G__34009;
chunk__33989_33993 = G__34010;
count__33990_33994 = G__34011;
i__33991_33995 = G__34012;
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
var vec__34014 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__34014,(0),null);
var v = cljs.core.nth.call(null,vec__34014,(1),null);
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
return (function (p1__34015_SHARP_){
var attr = attrs__$1.item(p1__34015_SHARP_);
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
var seq__34022_34028 = cljs.core.seq.call(null,styles);
var chunk__34023_34029 = null;
var count__34024_34030 = (0);
var i__34025_34031 = (0);
while(true){
if((i__34025_34031 < count__34024_34030)){
var vec__34026_34032 = cljs.core._nth.call(null,chunk__34023_34029,i__34025_34031);
var name_34033 = cljs.core.nth.call(null,vec__34026_34032,(0),null);
var value_34034 = cljs.core.nth.call(null,vec__34026_34032,(1),null);
domina.set_style_BANG_.call(null,content,name_34033,value_34034);

var G__34035 = seq__34022_34028;
var G__34036 = chunk__34023_34029;
var G__34037 = count__34024_34030;
var G__34038 = (i__34025_34031 + (1));
seq__34022_34028 = G__34035;
chunk__34023_34029 = G__34036;
count__34024_34030 = G__34037;
i__34025_34031 = G__34038;
continue;
} else {
var temp__4126__auto___34039 = cljs.core.seq.call(null,seq__34022_34028);
if(temp__4126__auto___34039){
var seq__34022_34040__$1 = temp__4126__auto___34039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34022_34040__$1)){
var c__16932__auto___34041 = cljs.core.chunk_first.call(null,seq__34022_34040__$1);
var G__34042 = cljs.core.chunk_rest.call(null,seq__34022_34040__$1);
var G__34043 = c__16932__auto___34041;
var G__34044 = cljs.core.count.call(null,c__16932__auto___34041);
var G__34045 = (0);
seq__34022_34028 = G__34042;
chunk__34023_34029 = G__34043;
count__34024_34030 = G__34044;
i__34025_34031 = G__34045;
continue;
} else {
var vec__34027_34046 = cljs.core.first.call(null,seq__34022_34040__$1);
var name_34047 = cljs.core.nth.call(null,vec__34027_34046,(0),null);
var value_34048 = cljs.core.nth.call(null,vec__34027_34046,(1),null);
domina.set_style_BANG_.call(null,content,name_34047,value_34048);

var G__34049 = cljs.core.next.call(null,seq__34022_34040__$1);
var G__34050 = null;
var G__34051 = (0);
var G__34052 = (0);
seq__34022_34028 = G__34049;
chunk__34023_34029 = G__34050;
count__34024_34030 = G__34051;
i__34025_34031 = G__34052;
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
var seq__34059_34065 = cljs.core.seq.call(null,attrs);
var chunk__34060_34066 = null;
var count__34061_34067 = (0);
var i__34062_34068 = (0);
while(true){
if((i__34062_34068 < count__34061_34067)){
var vec__34063_34069 = cljs.core._nth.call(null,chunk__34060_34066,i__34062_34068);
var name_34070 = cljs.core.nth.call(null,vec__34063_34069,(0),null);
var value_34071 = cljs.core.nth.call(null,vec__34063_34069,(1),null);
domina.set_attr_BANG_.call(null,content,name_34070,value_34071);

var G__34072 = seq__34059_34065;
var G__34073 = chunk__34060_34066;
var G__34074 = count__34061_34067;
var G__34075 = (i__34062_34068 + (1));
seq__34059_34065 = G__34072;
chunk__34060_34066 = G__34073;
count__34061_34067 = G__34074;
i__34062_34068 = G__34075;
continue;
} else {
var temp__4126__auto___34076 = cljs.core.seq.call(null,seq__34059_34065);
if(temp__4126__auto___34076){
var seq__34059_34077__$1 = temp__4126__auto___34076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34059_34077__$1)){
var c__16932__auto___34078 = cljs.core.chunk_first.call(null,seq__34059_34077__$1);
var G__34079 = cljs.core.chunk_rest.call(null,seq__34059_34077__$1);
var G__34080 = c__16932__auto___34078;
var G__34081 = cljs.core.count.call(null,c__16932__auto___34078);
var G__34082 = (0);
seq__34059_34065 = G__34079;
chunk__34060_34066 = G__34080;
count__34061_34067 = G__34081;
i__34062_34068 = G__34082;
continue;
} else {
var vec__34064_34083 = cljs.core.first.call(null,seq__34059_34077__$1);
var name_34084 = cljs.core.nth.call(null,vec__34064_34083,(0),null);
var value_34085 = cljs.core.nth.call(null,vec__34064_34083,(1),null);
domina.set_attr_BANG_.call(null,content,name_34084,value_34085);

var G__34086 = cljs.core.next.call(null,seq__34059_34077__$1);
var G__34087 = null;
var G__34088 = (0);
var G__34089 = (0);
seq__34059_34065 = G__34086;
chunk__34060_34066 = G__34087;
count__34061_34067 = G__34088;
i__34062_34068 = G__34089;
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
var seq__34094_34098 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34095_34099 = null;
var count__34096_34100 = (0);
var i__34097_34101 = (0);
while(true){
if((i__34097_34101 < count__34096_34100)){
var node_34102 = cljs.core._nth.call(null,chunk__34095_34099,i__34097_34101);
goog.dom.classes.add(node_34102,class$);

var G__34103 = seq__34094_34098;
var G__34104 = chunk__34095_34099;
var G__34105 = count__34096_34100;
var G__34106 = (i__34097_34101 + (1));
seq__34094_34098 = G__34103;
chunk__34095_34099 = G__34104;
count__34096_34100 = G__34105;
i__34097_34101 = G__34106;
continue;
} else {
var temp__4126__auto___34107 = cljs.core.seq.call(null,seq__34094_34098);
if(temp__4126__auto___34107){
var seq__34094_34108__$1 = temp__4126__auto___34107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34094_34108__$1)){
var c__16932__auto___34109 = cljs.core.chunk_first.call(null,seq__34094_34108__$1);
var G__34110 = cljs.core.chunk_rest.call(null,seq__34094_34108__$1);
var G__34111 = c__16932__auto___34109;
var G__34112 = cljs.core.count.call(null,c__16932__auto___34109);
var G__34113 = (0);
seq__34094_34098 = G__34110;
chunk__34095_34099 = G__34111;
count__34096_34100 = G__34112;
i__34097_34101 = G__34113;
continue;
} else {
var node_34114 = cljs.core.first.call(null,seq__34094_34108__$1);
goog.dom.classes.add(node_34114,class$);

var G__34115 = cljs.core.next.call(null,seq__34094_34108__$1);
var G__34116 = null;
var G__34117 = (0);
var G__34118 = (0);
seq__34094_34098 = G__34115;
chunk__34095_34099 = G__34116;
count__34096_34100 = G__34117;
i__34097_34101 = G__34118;
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
var seq__34123_34127 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34124_34128 = null;
var count__34125_34129 = (0);
var i__34126_34130 = (0);
while(true){
if((i__34126_34130 < count__34125_34129)){
var node_34131 = cljs.core._nth.call(null,chunk__34124_34128,i__34126_34130);
goog.dom.classes.remove(node_34131,class$);

var G__34132 = seq__34123_34127;
var G__34133 = chunk__34124_34128;
var G__34134 = count__34125_34129;
var G__34135 = (i__34126_34130 + (1));
seq__34123_34127 = G__34132;
chunk__34124_34128 = G__34133;
count__34125_34129 = G__34134;
i__34126_34130 = G__34135;
continue;
} else {
var temp__4126__auto___34136 = cljs.core.seq.call(null,seq__34123_34127);
if(temp__4126__auto___34136){
var seq__34123_34137__$1 = temp__4126__auto___34136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34123_34137__$1)){
var c__16932__auto___34138 = cljs.core.chunk_first.call(null,seq__34123_34137__$1);
var G__34139 = cljs.core.chunk_rest.call(null,seq__34123_34137__$1);
var G__34140 = c__16932__auto___34138;
var G__34141 = cljs.core.count.call(null,c__16932__auto___34138);
var G__34142 = (0);
seq__34123_34127 = G__34139;
chunk__34124_34128 = G__34140;
count__34125_34129 = G__34141;
i__34126_34130 = G__34142;
continue;
} else {
var node_34143 = cljs.core.first.call(null,seq__34123_34137__$1);
goog.dom.classes.remove(node_34143,class$);

var G__34144 = cljs.core.next.call(null,seq__34123_34137__$1);
var G__34145 = null;
var G__34146 = (0);
var G__34147 = (0);
seq__34123_34127 = G__34144;
chunk__34124_34128 = G__34145;
count__34125_34129 = G__34146;
i__34126_34130 = G__34147;
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
var seq__34152_34156 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34153_34157 = null;
var count__34154_34158 = (0);
var i__34155_34159 = (0);
while(true){
if((i__34155_34159 < count__34154_34158)){
var node_34160 = cljs.core._nth.call(null,chunk__34153_34157,i__34155_34159);
goog.dom.classes.toggle(node_34160,class$);

var G__34161 = seq__34152_34156;
var G__34162 = chunk__34153_34157;
var G__34163 = count__34154_34158;
var G__34164 = (i__34155_34159 + (1));
seq__34152_34156 = G__34161;
chunk__34153_34157 = G__34162;
count__34154_34158 = G__34163;
i__34155_34159 = G__34164;
continue;
} else {
var temp__4126__auto___34165 = cljs.core.seq.call(null,seq__34152_34156);
if(temp__4126__auto___34165){
var seq__34152_34166__$1 = temp__4126__auto___34165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34152_34166__$1)){
var c__16932__auto___34167 = cljs.core.chunk_first.call(null,seq__34152_34166__$1);
var G__34168 = cljs.core.chunk_rest.call(null,seq__34152_34166__$1);
var G__34169 = c__16932__auto___34167;
var G__34170 = cljs.core.count.call(null,c__16932__auto___34167);
var G__34171 = (0);
seq__34152_34156 = G__34168;
chunk__34153_34157 = G__34169;
count__34154_34158 = G__34170;
i__34155_34159 = G__34171;
continue;
} else {
var node_34172 = cljs.core.first.call(null,seq__34152_34166__$1);
goog.dom.classes.toggle(node_34172,class$);

var G__34173 = cljs.core.next.call(null,seq__34152_34166__$1);
var G__34174 = null;
var G__34175 = (0);
var G__34176 = (0);
seq__34152_34156 = G__34173;
chunk__34153_34157 = G__34174;
count__34154_34158 = G__34175;
i__34155_34159 = G__34176;
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
var classes_34185__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__34181_34186 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34182_34187 = null;
var count__34183_34188 = (0);
var i__34184_34189 = (0);
while(true){
if((i__34184_34189 < count__34183_34188)){
var node_34190 = cljs.core._nth.call(null,chunk__34182_34187,i__34184_34189);
goog.dom.classes.set(node_34190,classes_34185__$1);

var G__34191 = seq__34181_34186;
var G__34192 = chunk__34182_34187;
var G__34193 = count__34183_34188;
var G__34194 = (i__34184_34189 + (1));
seq__34181_34186 = G__34191;
chunk__34182_34187 = G__34192;
count__34183_34188 = G__34193;
i__34184_34189 = G__34194;
continue;
} else {
var temp__4126__auto___34195 = cljs.core.seq.call(null,seq__34181_34186);
if(temp__4126__auto___34195){
var seq__34181_34196__$1 = temp__4126__auto___34195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34181_34196__$1)){
var c__16932__auto___34197 = cljs.core.chunk_first.call(null,seq__34181_34196__$1);
var G__34198 = cljs.core.chunk_rest.call(null,seq__34181_34196__$1);
var G__34199 = c__16932__auto___34197;
var G__34200 = cljs.core.count.call(null,c__16932__auto___34197);
var G__34201 = (0);
seq__34181_34186 = G__34198;
chunk__34182_34187 = G__34199;
count__34183_34188 = G__34200;
i__34184_34189 = G__34201;
continue;
} else {
var node_34202 = cljs.core.first.call(null,seq__34181_34196__$1);
goog.dom.classes.set(node_34202,classes_34185__$1);

var G__34203 = cljs.core.next.call(null,seq__34181_34196__$1);
var G__34204 = null;
var G__34205 = (0);
var G__34206 = (0);
seq__34181_34186 = G__34203;
chunk__34182_34187 = G__34204;
count__34183_34188 = G__34205;
i__34184_34189 = G__34206;
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
var seq__34211_34215 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34212_34216 = null;
var count__34213_34217 = (0);
var i__34214_34218 = (0);
while(true){
if((i__34214_34218 < count__34213_34217)){
var node_34219 = cljs.core._nth.call(null,chunk__34212_34216,i__34214_34218);
goog.dom.setTextContent(node_34219,value);

var G__34220 = seq__34211_34215;
var G__34221 = chunk__34212_34216;
var G__34222 = count__34213_34217;
var G__34223 = (i__34214_34218 + (1));
seq__34211_34215 = G__34220;
chunk__34212_34216 = G__34221;
count__34213_34217 = G__34222;
i__34214_34218 = G__34223;
continue;
} else {
var temp__4126__auto___34224 = cljs.core.seq.call(null,seq__34211_34215);
if(temp__4126__auto___34224){
var seq__34211_34225__$1 = temp__4126__auto___34224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34211_34225__$1)){
var c__16932__auto___34226 = cljs.core.chunk_first.call(null,seq__34211_34225__$1);
var G__34227 = cljs.core.chunk_rest.call(null,seq__34211_34225__$1);
var G__34228 = c__16932__auto___34226;
var G__34229 = cljs.core.count.call(null,c__16932__auto___34226);
var G__34230 = (0);
seq__34211_34215 = G__34227;
chunk__34212_34216 = G__34228;
count__34213_34217 = G__34229;
i__34214_34218 = G__34230;
continue;
} else {
var node_34231 = cljs.core.first.call(null,seq__34211_34225__$1);
goog.dom.setTextContent(node_34231,value);

var G__34232 = cljs.core.next.call(null,seq__34211_34225__$1);
var G__34233 = null;
var G__34234 = (0);
var G__34235 = (0);
seq__34211_34215 = G__34232;
chunk__34212_34216 = G__34233;
count__34213_34217 = G__34234;
i__34214_34218 = G__34235;
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
var seq__34240_34244 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34241_34245 = null;
var count__34242_34246 = (0);
var i__34243_34247 = (0);
while(true){
if((i__34243_34247 < count__34242_34246)){
var node_34248 = cljs.core._nth.call(null,chunk__34241_34245,i__34243_34247);
goog.dom.forms.setValue(node_34248,value);

var G__34249 = seq__34240_34244;
var G__34250 = chunk__34241_34245;
var G__34251 = count__34242_34246;
var G__34252 = (i__34243_34247 + (1));
seq__34240_34244 = G__34249;
chunk__34241_34245 = G__34250;
count__34242_34246 = G__34251;
i__34243_34247 = G__34252;
continue;
} else {
var temp__4126__auto___34253 = cljs.core.seq.call(null,seq__34240_34244);
if(temp__4126__auto___34253){
var seq__34240_34254__$1 = temp__4126__auto___34253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34240_34254__$1)){
var c__16932__auto___34255 = cljs.core.chunk_first.call(null,seq__34240_34254__$1);
var G__34256 = cljs.core.chunk_rest.call(null,seq__34240_34254__$1);
var G__34257 = c__16932__auto___34255;
var G__34258 = cljs.core.count.call(null,c__16932__auto___34255);
var G__34259 = (0);
seq__34240_34244 = G__34256;
chunk__34241_34245 = G__34257;
count__34242_34246 = G__34258;
i__34243_34247 = G__34259;
continue;
} else {
var node_34260 = cljs.core.first.call(null,seq__34240_34254__$1);
goog.dom.forms.setValue(node_34260,value);

var G__34261 = cljs.core.next.call(null,seq__34240_34254__$1);
var G__34262 = null;
var G__34263 = (0);
var G__34264 = (0);
seq__34240_34244 = G__34261;
chunk__34241_34245 = G__34262;
count__34242_34246 = G__34263;
i__34243_34247 = G__34264;
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
var value_34275 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__34271_34276 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__34272_34277 = null;
var count__34273_34278 = (0);
var i__34274_34279 = (0);
while(true){
if((i__34274_34279 < count__34273_34278)){
var node_34280 = cljs.core._nth.call(null,chunk__34272_34277,i__34274_34279);
node_34280.innerHTML = value_34275;

var G__34281 = seq__34271_34276;
var G__34282 = chunk__34272_34277;
var G__34283 = count__34273_34278;
var G__34284 = (i__34274_34279 + (1));
seq__34271_34276 = G__34281;
chunk__34272_34277 = G__34282;
count__34273_34278 = G__34283;
i__34274_34279 = G__34284;
continue;
} else {
var temp__4126__auto___34285 = cljs.core.seq.call(null,seq__34271_34276);
if(temp__4126__auto___34285){
var seq__34271_34286__$1 = temp__4126__auto___34285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34271_34286__$1)){
var c__16932__auto___34287 = cljs.core.chunk_first.call(null,seq__34271_34286__$1);
var G__34288 = cljs.core.chunk_rest.call(null,seq__34271_34286__$1);
var G__34289 = c__16932__auto___34287;
var G__34290 = cljs.core.count.call(null,c__16932__auto___34287);
var G__34291 = (0);
seq__34271_34276 = G__34288;
chunk__34272_34277 = G__34289;
count__34273_34278 = G__34290;
i__34274_34279 = G__34291;
continue;
} else {
var node_34292 = cljs.core.first.call(null,seq__34271_34286__$1);
node_34292.innerHTML = value_34275;

var G__34293 = cljs.core.next.call(null,seq__34271_34286__$1);
var G__34294 = null;
var G__34295 = (0);
var G__34296 = (0);
seq__34271_34276 = G__34293;
chunk__34272_34277 = G__34294;
count__34273_34278 = G__34295;
i__34274_34279 = G__34296;
continue;
}
} else {
}
}
break;
}
}catch (e34270){if((e34270 instanceof Error)){
var e_34297 = e34270;
domina.replace_children_BANG_.call(null,content,value_34275);
} else {
throw e34270;

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
var seq__34304_34308 = cljs.core.seq.call(null,children);
var chunk__34305_34309 = null;
var count__34306_34310 = (0);
var i__34307_34311 = (0);
while(true){
if((i__34307_34311 < count__34306_34310)){
var child_34312 = cljs.core._nth.call(null,chunk__34305_34309,i__34307_34311);
frag.appendChild(child_34312);

var G__34313 = seq__34304_34308;
var G__34314 = chunk__34305_34309;
var G__34315 = count__34306_34310;
var G__34316 = (i__34307_34311 + (1));
seq__34304_34308 = G__34313;
chunk__34305_34309 = G__34314;
count__34306_34310 = G__34315;
i__34307_34311 = G__34316;
continue;
} else {
var temp__4126__auto___34317 = cljs.core.seq.call(null,seq__34304_34308);
if(temp__4126__auto___34317){
var seq__34304_34318__$1 = temp__4126__auto___34317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34304_34318__$1)){
var c__16932__auto___34319 = cljs.core.chunk_first.call(null,seq__34304_34318__$1);
var G__34320 = cljs.core.chunk_rest.call(null,seq__34304_34318__$1);
var G__34321 = c__16932__auto___34319;
var G__34322 = cljs.core.count.call(null,c__16932__auto___34319);
var G__34323 = (0);
seq__34304_34308 = G__34320;
chunk__34305_34309 = G__34321;
count__34306_34310 = G__34322;
i__34307_34311 = G__34323;
continue;
} else {
var child_34324 = cljs.core.first.call(null,seq__34304_34318__$1);
frag.appendChild(child_34324);

var G__34325 = cljs.core.next.call(null,seq__34304_34318__$1);
var G__34326 = null;
var G__34327 = (0);
var G__34328 = (0);
seq__34304_34308 = G__34325;
chunk__34305_34309 = G__34326;
count__34306_34310 = G__34327;
i__34307_34311 = G__34328;
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
return (function (p1__34298_SHARP_,p2__34299_SHARP_){
return f.call(null,p1__34298_SHARP_,p2__34299_SHARP_);
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
if((function (){var G__34330 = list_thing;
if(G__34330){
var bit__16826__auto__ = (G__34330.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__16826__auto__) || (G__34330.cljs$core$ISeqable$)){
return true;
} else {
if((!G__34330.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34330);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34330);
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
if((function (){var G__34331 = content;
if(G__34331){
var bit__16826__auto__ = (G__34331.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__16826__auto__) || (G__34331.cljs$core$ISeqable$)){
return true;
} else {
if((!G__34331.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34331);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34331);
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
if((function (){var G__34332 = content;
if(G__34332){
var bit__16826__auto__ = (G__34332.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__16826__auto__) || (G__34332.cljs$core$ISeqable$)){
return true;
} else {
if((!G__34332.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34332);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34332);
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

//# sourceMappingURL=domina.js.map?rel=1435015536191