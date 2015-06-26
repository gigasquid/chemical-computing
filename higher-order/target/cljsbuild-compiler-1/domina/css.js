// Compiled by ClojureScript 0.0-2850 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){
return ((function (){var G__27476 = "html";
return goog.dom.getElementsByTagNameAndClass(G__27476);
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
if(typeof domina.css.t27488 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.css.t27488 = (function (expr,base,sel,meta27489){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta27489 = meta27489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t27488.prototype.domina$DomContent$ = true;

domina.css.t27488.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (___$1){
return (function (p1__27477_SHARP_){
return domina.normalize_seq((function (){var G__27491 = self__.expr;
var G__27492 = p1__27477_SHARP_;
return goog.dom.query(G__27491,G__27492);
})());
});})(___$1))
,cljs.core.array_seq([domina.nodes(self__.base)], 0));
});

domina.css.t27488.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (___$1){
return (function (p1__27478_SHARP_){
return domina.normalize_seq((function (){var G__27493 = self__.expr;
var G__27494 = p1__27478_SHARP_;
return goog.dom.query(G__27493,G__27494);
})());
});})(___$1))
,cljs.core.array_seq([domina.nodes(self__.base)], 0))));
});

domina.css.t27488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27490){
var self__ = this;
var _27490__$1 = this;
return self__.meta27489;
});

domina.css.t27488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27490,meta27489__$1){
var self__ = this;
var _27490__$1 = this;
return (new domina.css.t27488(self__.expr,self__.base,self__.sel,meta27489__$1));
});

domina.css.t27488.cljs$lang$type = true;

domina.css.t27488.cljs$lang$ctorStr = "domina.css/t27488";

domina.css.t27488.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"domina.css/t27488");
});

domina.css.__GT_t27488 = (function __GT_t27488(expr__$1,base__$1,sel__$1,meta27489){
return (new domina.css.t27488(expr__$1,base__$1,sel__$1,meta27489));
});

}

return (new domina.css.t27488(expr,base,sel,cljs.core.PersistentArrayMap.EMPTY));
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
