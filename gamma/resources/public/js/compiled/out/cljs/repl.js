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
var seq__23670_23674 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23671_23675 = null;
var count__23672_23676 = (0);
var i__23673_23677 = (0);
while(true){
if((i__23673_23677 < count__23672_23676)){
var f_23678 = cljs.core._nth.call(null,chunk__23671_23675,i__23673_23677);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_23678);

var G__23679 = seq__23670_23674;
var G__23680 = chunk__23671_23675;
var G__23681 = count__23672_23676;
var G__23682 = (i__23673_23677 + (1));
seq__23670_23674 = G__23679;
chunk__23671_23675 = G__23680;
count__23672_23676 = G__23681;
i__23673_23677 = G__23682;
continue;
} else {
var temp__4126__auto___23683 = cljs.core.seq.call(null,seq__23670_23674);
if(temp__4126__auto___23683){
var seq__23670_23684__$1 = temp__4126__auto___23683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23670_23684__$1)){
var c__4651__auto___23685 = cljs.core.chunk_first.call(null,seq__23670_23684__$1);
var G__23686 = cljs.core.chunk_rest.call(null,seq__23670_23684__$1);
var G__23687 = c__4651__auto___23685;
var G__23688 = cljs.core.count.call(null,c__4651__auto___23685);
var G__23689 = (0);
seq__23670_23674 = G__23686;
chunk__23671_23675 = G__23687;
count__23672_23676 = G__23688;
i__23673_23677 = G__23689;
continue;
} else {
var f_23690 = cljs.core.first.call(null,seq__23670_23684__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_23690);

var G__23691 = cljs.core.next.call(null,seq__23670_23684__$1);
var G__23692 = null;
var G__23693 = (0);
var G__23694 = (0);
seq__23670_23674 = G__23691;
chunk__23671_23675 = G__23692;
count__23672_23676 = G__23693;
i__23673_23677 = G__23694;
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

//# sourceMappingURL=repl.js.map?rel=1435268445824