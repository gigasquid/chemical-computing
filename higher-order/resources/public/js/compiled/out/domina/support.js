// Compiled by ClojureScript 0.0-2850 {}
goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
var div_34335 = document.createElement("div");
var test_html_34336 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div_34335.innerHTML = test_html_34336;

domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div_34335.firstChild.nodeType,(3));

domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div_34335.getElementsByTagName("tbody").length,(0));

domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div_34335.getElementsByTagName("link").length,(0));

//# sourceMappingURL=support.js.map?rel=1435015536213