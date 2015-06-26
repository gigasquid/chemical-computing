// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35296_35300 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35297_35301 = null;
var count__35298_35302 = (0);
var i__35299_35303 = (0);
while(true){
if((i__35299_35303 < count__35298_35302)){
var f_35304 = cljs.core._nth.call(null,chunk__35297_35301,i__35299_35303);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_35304);

var G__35305 = seq__35296_35300;
var G__35306 = chunk__35297_35301;
var G__35307 = count__35298_35302;
var G__35308 = (i__35299_35303 + (1));
seq__35296_35300 = G__35305;
chunk__35297_35301 = G__35306;
count__35298_35302 = G__35307;
i__35299_35303 = G__35308;
continue;
} else {
var temp__4126__auto___35309 = cljs.core.seq.call(null,seq__35296_35300);
if(temp__4126__auto___35309){
var seq__35296_35310__$1 = temp__4126__auto___35309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35296_35310__$1)){
var c__16932__auto___35311 = cljs.core.chunk_first.call(null,seq__35296_35310__$1);
var G__35312 = cljs.core.chunk_rest.call(null,seq__35296_35310__$1);
var G__35313 = c__16932__auto___35311;
var G__35314 = cljs.core.count.call(null,c__16932__auto___35311);
var G__35315 = (0);
seq__35296_35300 = G__35312;
chunk__35297_35301 = G__35313;
count__35298_35302 = G__35314;
i__35299_35303 = G__35315;
continue;
} else {
var f_35316 = cljs.core.first.call(null,seq__35296_35310__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_35316);

var G__35317 = cljs.core.next.call(null,seq__35296_35310__$1);
var G__35318 = null;
var G__35319 = (0);
var G__35320 = (0);
seq__35296_35300 = G__35317;
chunk__35297_35301 = G__35318;
count__35298_35302 = G__35319;
i__35299_35303 = G__35320;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map?rel=1435014981712