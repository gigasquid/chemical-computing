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
var seq__33439_33443 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33440_33444 = null;
var count__33441_33445 = (0);
var i__33442_33446 = (0);
while(true){
if((i__33442_33446 < count__33441_33445)){
var f_33447 = cljs.core._nth.call(null,chunk__33440_33444,i__33442_33446);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_33447);

var G__33448 = seq__33439_33443;
var G__33449 = chunk__33440_33444;
var G__33450 = count__33441_33445;
var G__33451 = (i__33442_33446 + (1));
seq__33439_33443 = G__33448;
chunk__33440_33444 = G__33449;
count__33441_33445 = G__33450;
i__33442_33446 = G__33451;
continue;
} else {
var temp__4126__auto___33452 = cljs.core.seq.call(null,seq__33439_33443);
if(temp__4126__auto___33452){
var seq__33439_33453__$1 = temp__4126__auto___33452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33439_33453__$1)){
var c__16932__auto___33454 = cljs.core.chunk_first.call(null,seq__33439_33453__$1);
var G__33455 = cljs.core.chunk_rest.call(null,seq__33439_33453__$1);
var G__33456 = c__16932__auto___33454;
var G__33457 = cljs.core.count.call(null,c__16932__auto___33454);
var G__33458 = (0);
seq__33439_33443 = G__33455;
chunk__33440_33444 = G__33456;
count__33441_33445 = G__33457;
i__33442_33446 = G__33458;
continue;
} else {
var f_33459 = cljs.core.first.call(null,seq__33439_33453__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_33459);

var G__33460 = cljs.core.next.call(null,seq__33439_33453__$1);
var G__33461 = null;
var G__33462 = (0);
var G__33463 = (0);
seq__33439_33443 = G__33460;
chunk__33440_33444 = G__33461;
count__33441_33445 = G__33462;
i__33442_33446 = G__33463;
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

//# sourceMappingURL=repl.js.map?rel=1435015913772