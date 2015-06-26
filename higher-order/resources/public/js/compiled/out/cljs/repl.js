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
var seq__35435_35439 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35436_35440 = null;
var count__35437_35441 = (0);
var i__35438_35442 = (0);
while(true){
if((i__35438_35442 < count__35437_35441)){
var f_35443 = cljs.core._nth.call(null,chunk__35436_35440,i__35438_35442);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_35443);

var G__35444 = seq__35435_35439;
var G__35445 = chunk__35436_35440;
var G__35446 = count__35437_35441;
var G__35447 = (i__35438_35442 + (1));
seq__35435_35439 = G__35444;
chunk__35436_35440 = G__35445;
count__35437_35441 = G__35446;
i__35438_35442 = G__35447;
continue;
} else {
var temp__4126__auto___35448 = cljs.core.seq.call(null,seq__35435_35439);
if(temp__4126__auto___35448){
var seq__35435_35449__$1 = temp__4126__auto___35448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35435_35449__$1)){
var c__16932__auto___35450 = cljs.core.chunk_first.call(null,seq__35435_35449__$1);
var G__35451 = cljs.core.chunk_rest.call(null,seq__35435_35449__$1);
var G__35452 = c__16932__auto___35450;
var G__35453 = cljs.core.count.call(null,c__16932__auto___35450);
var G__35454 = (0);
seq__35435_35439 = G__35451;
chunk__35436_35440 = G__35452;
count__35437_35441 = G__35453;
i__35438_35442 = G__35454;
continue;
} else {
var f_35455 = cljs.core.first.call(null,seq__35435_35449__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_35455);

var G__35456 = cljs.core.next.call(null,seq__35435_35449__$1);
var G__35457 = null;
var G__35458 = (0);
var G__35459 = (0);
seq__35435_35439 = G__35456;
chunk__35436_35440 = G__35457;
count__35437_35441 = G__35458;
i__35438_35442 = G__35459;
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

//# sourceMappingURL=repl.js.map?rel=1435015536713