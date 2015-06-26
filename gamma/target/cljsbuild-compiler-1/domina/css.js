// Compiled by ClojureScript 0.0-2850 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){
return ((function (){var G__27355 = "html";
return goog.dom.getElementsByTagNameAndClass(G__27355);
})()[(0)]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){
return sel.cljs$core$IFn$_invoke$arity$2(domina.css.root_element(),expr);
});
var sel__2 = (function (base,expr){
if(typeof domina.css.t27367 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.css.t27367 = (function (expr,base,sel,meta27368){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta27368 = meta27368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t27367.prototype.domina$DomContent$ = true;

domina.css.t27367.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (___$1){
return (function (p1__27356_SHARP_){
return domina.normalize_seq((function (){var G__27370 = self__.expr;
var G__27371 = p1__27356_SHARP_;
return goog.dom.query(G__27370,G__27371);
})());
});})(___$1))
,cljs.core.array_seq([domina.nodes(self__.base)], 0));
});

domina.css.t27367.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (___$1){
return (function (p1__27357_SHARP_){
return domina.normalize_seq((function (){var G__27372 = self__.expr;
var G__27373 = p1__27357_SHARP_;
return goog.dom.query(G__27372,G__27373);
})());
});})(___$1))
,cljs.core.array_seq([domina.nodes(self__.base)], 0))));
});

domina.css.t27367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27369){
var self__ = this;
var _27369__$1 = this;
return self__.meta27368;
});

domina.css.t27367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27369,meta27368__$1){
var self__ = this;
var _27369__$1 = this;
return (new domina.css.t27367(self__.expr,self__.base,self__.sel,meta27368__$1));
});

domina.css.t27367.cljs$lang$type = true;

domina.css.t27367.cljs$lang$ctorStr = "domina.css/t27367";

domina.css.t27367.cljs$lang$ctorPrWriter = (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"domina.css/t27367");
});

domina.css.__GT_t27367 = (function __GT_t27367(expr__$1,base__$1,sel__$1,meta27368){
return (new domina.css.t27367(expr__$1,base__$1,sel__$1,meta27368));
});

}

return (new domina.css.t27367(expr,base,sel,cljs.core.PersistentArrayMap.EMPTY));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sel.cljs$core$IFn$_invoke$arity$1 = sel__1;
sel.cljs$core$IFn$_invoke$arity$2 = sel__2;
return sel;
})()
;
